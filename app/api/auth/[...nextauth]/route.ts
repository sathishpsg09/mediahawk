// app/api/auth/[...nextauth]/route.ts
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // Add logic to verify credentials (e.g., check against a database)
        const user = { id: "1", name: "user", email: "user@example.com" };

        if (
          credentials?.username === "user" &&
          credentials?.password === "password"
        ) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
  pages: {
    signIn: "/auth/signin", // Custom sign-in page
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      session.user.id = token.id;
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET, // Add a secret key in .env
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };