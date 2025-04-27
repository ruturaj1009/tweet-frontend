import React from "react";
import { Twitter, Sun, Moon } from "lucide-react";
import { SignupModal } from "../components/SignupModal";
import { LoginModal } from "../components/LoginModal";
import { useTheme } from "../context/ThemeContext";

interface LoginPageProps {
  onLogin: () => void;
}

export function LoginPage({ onLogin }: LoginPageProps) {
  const { theme, toggleTheme } = useTheme();
  const [authModal, setAuthModal] = React.useState<{
    isOpen: boolean;
    type: "login" | "signup";
  }>({
    isOpen: false,
    type: "login",
  });

  return (
    <div className="min-h-screen flex">
      {/* Left Section */}
      <div className="hidden lg:flex lg:w-1/2 bg-black items-center justify-center">
        <Twitter className="text-white w-96 h-96" />
      </div>

      {/* Right Section */}
      <div className="flex-1 flex flex-col bg-black text-white  px-3 sm:px-6 lg:px-15 py-12 sm:py-16">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <div className="flex items-center justify-end mb-8">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              {theme === "dark" ? <Sun /> : <Moon />}
            </button>
          </div>
          <h1 className="text-6xl font-bold mb-8">Happening now</h1>
          <h2 className="text-3xl font-bold mb-8">Join today.</h2>
        {/* </div>

        <div className="mx-4 sm:mx-auto sm:w-2xs sm:max-w-md space-y-4"> */}
          <button
            onClick={() => setAuthModal({ isOpen: true, type: "signup" })}
            className="w-full bg-white text-black rounded-full m-2 p-2 font-bold hover:bg-gray-400 transition-colors"
          >
            Sign up with Google
          </button>
          <button
            onClick={() => setAuthModal({ isOpen: true, type: "signup" })}
            className="w-full bg-white text-black rounded-full m-2 p-2 font-bold hover:bg-gray-400 transition-colors"
          >
            Sign up with Facebook
          </button>
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300 dark:border-gray-700"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-background-light dark:bg-background-dark text-gray-500">
                or
              </span>
            </div>
          </div>
          <button
            onClick={() => setAuthModal({ isOpen: true, type: "signup" })}
            className="w-full bg-blue-500 text-white rounded-full py-3 font-bold hover:bg-blue-600 transition-colors"
          >
            Create account
          </button>
          
          <div className="relative">
            <h3 className="text-white">Already have an account?</h3>
          </div>
          <button
            onClick={() => setAuthModal({ isOpen: true, type: "login" })}
            className="w-full border border-gray-300 dark:border-gray-700 text-blue-500 rounded-full py-3 font-bold hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            Sign in
          </button>
        </div>
      </div>

      {authModal.type === "signup" ? (
        <SignupModal
          isOpen={authModal.isOpen}
          onClose={() => setAuthModal({ ...authModal, isOpen: false })}
        />
      ) : (
        <LoginModal
          isOpen={authModal.isOpen}
          onClose={() => setAuthModal({ ...authModal, isOpen: false })}
          onLogin={onLogin}
        />
      )}
    </div>
  );
}
