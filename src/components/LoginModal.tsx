import React from "react";
import { X } from "lucide-react";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLogin: () => void;
}

interface LoginFormData {
  email: string;
  password: string;
}

export function LoginModal({ isOpen, onClose, onLogin }: LoginModalProps) {
  const [formData, setFormData] = React.useState<LoginFormData>({
    email: "",
    password: "",
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login submission
    console.log("Login submitted:", formData);
    onLogin();
    onClose();
  };

  const isFormValid = () => {
    return formData.email.trim() !== "" && formData.password.trim() !== "";
  };

  return (
    <div className="fixed inset-0 bg-dark backdrop-blur-xs  outline outline-gray-600 flex items-center justify-center z-50 p-4">
      <div className="bg-black outline outline-gray-600 rounded-2xl w-full max-w-xl">
        <div className="p-4 border-b border-gray-200 dark:border-gray-800 flex items-center">
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full"
          >
            <X size={20} />
          </button>
          <h2 className="text-xl font-bold flex-1 text-center">Log in</h2>
          <div className="w-8"></div>
        </div>
        <div className="p-6">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Email
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-800"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Password
              </label>
              <input
                type="password"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-800"
                placeholder="Enter your password"
                required
              />
            </div>
            <button
              type="submit"
              disabled={!isFormValid()}
              className="w-full bg-blue-500 text-white rounded-full py-2 font-bold hover:bg-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Log in
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
