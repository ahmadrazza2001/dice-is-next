import NextAuth from "next-auth";
import { authConfig } from "./lib/auth.config";

export default NextAuth(authConfig).auth;

export const config = {
  matcher: ["/((?!api|static|.*\\..*|_next).*)"],
};

// const { getServerSession } = require("next-auth");
// const { authOptions } = require("@/utils/auth-options");
// // const { authConfig } = require("./lib/auth.config");

// // This function can be marked `async` if using `await` inside
// export function middleware(request) {
//   return getServerSession(authOptions)
//     .then((session) => {
//       console.log("session", session);
//     })
//     .catch((error) => {
//       console.error("Error getting session:", error);
//     });
// }

// // See "Matching Paths" below to learn more
// export const config = {
//   matcher: [
//     "/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)",
//   ],
// };
