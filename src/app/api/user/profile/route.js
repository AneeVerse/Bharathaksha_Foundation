import jwt from "jsonwebtoken";
import { headers } from "next/headers";

// GET /api/user/profile
// Returns basic user profile derived from the JWT token
export async function GET() {
  try {
    const headerList = headers();
    const authorizationHeader = headerList.get("authorization");

    if (!authorizationHeader) {
      return new Response(
        JSON.stringify({ message: "Unauthorized: No token provided" }),
        { status: 401 }
      );
    }

    const token = authorizationHeader.split(" ")[1];
    if (!token) {
      return new Response(
        JSON.stringify({ message: "Unauthorized: Invalid token format" }),
        { status: 401 }
      );
    }

    const decoded = jwt.verify(token, process.env.NEXT_PUBLIC_JWT_SECRET_KEY);

    // Basic profile from token; extend here if you persist extra fields in a DB
    const profile = {
      name: decoded?.name || "",
      email: decoded?.email || "",
      phone: decoded?.phone || "",
      image: decoded?.image || "",
    };

    return new Response(JSON.stringify(profile), { status: 200 });
  } catch (err) {
    return new Response(
      JSON.stringify({ message: "Invalid or expired token" }),
      { status: 401 }
    );
  }
}

// PUT /api/user/profile
// For now, echoes back the payload after basic auth check.
// Replace with persistence logic (DB) if/when available.
export async function PUT(req) {
  try {
    const headerList = headers();
    const authorizationHeader = headerList.get("authorization");

    if (!authorizationHeader) {
      return new Response(
        JSON.stringify({ message: "Unauthorized: No token provided" }),
        { status: 401 }
      );
    }

    const token = authorizationHeader.split(" ")[1];
    if (!token) {
      return new Response(
        JSON.stringify({ message: "Unauthorized: Invalid token format" }),
        { status: 401 }
      );
    }

    // Verify token (throws on error)
    jwt.verify(token, process.env.NEXT_PUBLIC_JWT_SECRET_KEY);

    const body = await req.json();
    const { name = "", email = "", phone = "", image = "" } = body || {};

    // TODO: persist to DB; currently just echo back
    const updated = { name, email, phone, image };

    return new Response(JSON.stringify(updated), { status: 200 });
  } catch (err) {
    // If jwt.verify throws, treat as unauthorized; otherwise generic error
    const isAuthError = err?.name === "JsonWebTokenError" || err?.name === "TokenExpiredError";
    const status = isAuthError ? 401 : 500;
    const message = isAuthError ? "Invalid or expired token" : "Internal Server Error";
    return new Response(JSON.stringify({ message }), { status });
  }
}
