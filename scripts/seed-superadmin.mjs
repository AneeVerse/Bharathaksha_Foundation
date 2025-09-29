import 'dotenv/config';
import bcrypt from 'bcryptjs';
import mongoose from 'mongoose';
import User from '../src/lib/models/User.js';

const MONGODB_URI = process.env.NEXT_PUBLIC_MONGODB_URI;
const ADMIN_EMAIL = process.env.ADMIN_EMAIL;
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;

if (!MONGODB_URI) throw new Error('Missing NEXT_PUBLIC_MONGODB_URI');
if (!ADMIN_EMAIL || !ADMIN_PASSWORD) {
  console.error('Set ADMIN_EMAIL and ADMIN_PASSWORD in your environment');
  process.exit(1);
}

async function run() {
  await mongoose.connect(MONGODB_URI);
  const hash = await bcrypt.hash(ADMIN_PASSWORD, 10);

  const existing = await User.findOne({ email: ADMIN_EMAIL });
  if (existing) {
    existing.role = 'superadmin';
    existing.password = hash;
    await existing.save();
    console.log('Promoted existing user to superadmin and updated password.');
  } else {
    await User.create({ name: 'Super Admin', email: ADMIN_EMAIL, password: hash, role: 'superadmin' });
    console.log('Created superadmin user');
  }
  await mongoose.disconnect();
}

run().catch((e) => {
  console.error(e);
  process.exit(1);
});