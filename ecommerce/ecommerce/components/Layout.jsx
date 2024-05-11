import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import Nav from "@/components/Nav";

const Layout = ({ children }) => {
  const { data: session } = useSession();

  if (!session) {
    return (
      <div className="bg-blue-900 w-screen h-screen flex items-center">
        <div className="text-center w-full">
          <button
            onClick={() => signIn("google")}
            className="bg-white p-2 px-4 text-black rounded-md"
          >
            Login with Google
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-blue-900 min-h-screen flex">
      <Nav />
      <div className="bg-white flex-grow my-2 mr-2 rounded-xl p-4">
        {children}
      </div>
    </div>
  );
};

export default Layout;
