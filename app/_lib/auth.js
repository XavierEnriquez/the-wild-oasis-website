import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { createGuest, getGuest } from "./data-service";

// nextjs 15 auto infers this code form the passed providers
// providers: [Google({
//   clientId: process.env.AUTH_GOOGLE_ID,
//   clientSecret: process.env.AUTH_GOOGLE_SECRET,
// }),]

const authConfig = {
  providers: [Google],
  callbacks: {
    authorized({ auth, request }) {
      // !! boolean (true, false) operator
      // return true if user, false otherwise
      return !!auth?.user;
    },
    async signIn({ user, account, profile }) {
      try {
        const existingGuest = await getGuest(user.email);

        if (!existingGuest)
          await createGuest({ email: user.email, fullName: user.name });

        return true;
      } catch {
        return false;
      }
    },
    // session is a nextjs function
    async session({ session, user }) {
      // get guest from supabase
      const guest = await getGuest(session.user.email);

      // mutate the current session and add guest id
      session.user.guestId = guest.id;

      // return back the session with user id included
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
};

export const {
  auth,
  signIn,
  signOut,
  handlers: { GET, POST },
} = NextAuth(authConfig);
