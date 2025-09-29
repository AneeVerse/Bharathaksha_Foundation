// src/lib/auth.js
import jwt from 'jsonwebtoken';

export function getAuthUser(headersObj) {
  const authorizationHeader = headersObj.get('authorization');
  if (!authorizationHeader) throw new Error('Unauthorized: No token provided');
  const token = authorizationHeader.split(' ')[1];
  if (!token) throw new Error('Unauthorized: Invalid token format');
  const decoded = jwt.verify(token, process.env.NEXT_PUBLIC_JWT_SECRET_KEY);
  return decoded; // { userId, name, email, role }
}

export function requireSuperadmin(headersObj) {
  const decoded = getAuthUser(headersObj);
  if ((decoded?.role || 'user') !== 'superadmin') {
    const err = new Error('Forbidden: Superadmin only');
    err.statusCode = 403;
    throw err;
  }
  return decoded;
}