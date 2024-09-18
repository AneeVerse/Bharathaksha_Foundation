// // pages/api/user/profile.js
// import nextConnect from 'next-connect';
// import multer from 'multer';
// import { S3 } from 'aws-sdk';
// import { v4 as uuidv4 } from 'uuid';

// const s3 = new S3({
//   accessKeyId: process.env.AWS_ACCESS_KEY_ID,
//   secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
//   region: process.env.AWS_REGION,
// });

// const upload = multer({
//   storage: multer.memoryStorage(),
//   limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
// });

// const handler = nextConnect();

// handler.use(upload.single('image')); // Handle single file upload with the field name 'image'

// handler.put(async (req, res) => {
//   try {
//     // Handle image upload to S3
//     let imageUrl = req.body.image;
//     if (req.file) {
//       const file = req.file;
//       const uploadParams = {
//         Bucket: process.env.AWS_BUCKET_NAME,
//         Key: `${uuidv4()}_${file.originalname}`,
//         Body: file.buffer,
//         ContentType: file.mimetype,
//         ACL: 'public-read',
//       };

//       const { Location } = await s3.upload(uploadParams).promise();
//       imageUrl = Location;
//     }

//     // Handle profile update logic
//     const { name, email, phone } = req.body;
//     // Update user profile in your database

//     res.status(200).json({
//       name,
//       email,
//       phone,
//       image: imageUrl,
//     });
//   } catch (error) {
//     console.error('Error updating profile:', error);
//     res.status(500).json({ message: 'Internal Server Error' });
//   }
// });

// export default handler;
