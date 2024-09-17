// This should be implemented on your server or backend
// Example Node.js/Express route
import jwt from "jsonwebtoken";
import { headers } from 'next/headers'

export async function POST(req) {
 // Get headers properly using Next.js `headers` function
 const headerList = headers(); // This is a Headers instance
 const authorizationHeader = headerList.get("authorization");

 if (!authorizationHeader) {
   return new Response(
     JSON.stringify({ message: "Unauthorized: No token provided" }),
     { status: 401 }
   );
 }

 // Split the Bearer token from the Authorization header
 const token = authorizationHeader.split(" ")[1];

 if (!token) {
   return new Response(
     JSON.stringify({ message: "Unauthorized: Invalid token format" }),
     { status: 401 }
   );
 }

  // verify token logic here (using JWT or any method)

  try {
    const decodedUser = jwt.verify(
      token,
      process.env.NEXT_PUBLIC_JWT_SECRET_KEY
    );
    console.log("decode user", decodedUser)
    return new Response(
      JSON.stringify({
        name: decodedUser.name,
        email: decodedUser.email,
      }),
      { status: 200 }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({
        message: "Invalid or expired token",
      }),
      {
        status: 401,
      }
    );
  }
}
