import React from 'react';
import { X } from 'lucide-react';

interface SignupModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface SignupFormData {
  step1: {
    name: string;
    email: string;
    birthDate: string;
  };
  step2: {
    username: string;
    password: string;
    bio: string;
  };
}

export function SignupModal({ isOpen, onClose }: SignupModalProps) {
  const [step, setStep] = React.useState(1);
  const [formData, setFormData] = React.useState<SignupFormData>({
    step1: {
      name: '',
      email: '',
      birthDate: '',
    },
    step2: {
      username: '',
      password: '',
      bio: '',
    },
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission with complete data
    console.log('Form submitted:', {
      ...formData.step1,
      ...formData.step2,
    });
    onClose();
  };

  const updateStep1Data = (field: keyof SignupFormData['step1'], value: string) => {
    setFormData(prev => ({
      ...prev,
      step1: {
        ...prev.step1,
        [field]: value,
      },
    }));
  };

  const updateStep2Data = (field: keyof SignupFormData['step2'], value: string) => {
    setFormData(prev => ({
      ...prev,
      step2: {
        ...prev.step2,
        [field]: value,
      },
    }));
  };

  const isStep1Valid = () => {
    const { name, email, birthDate } = formData.step1;
    return name.trim() !== '' && email.trim() !== '' && birthDate.trim() !== '';
  };

  const isStep2Valid = () => {
    const { username, password } = formData.step2;
    return username.trim() !== '' && password.trim() !== '';
  };

  const renderStep1 = () => (
    <>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Name
        </label>
        <input
          type="text"
          value={formData.step1.name}
          onChange={(e) => updateStep1Data('name', e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
          placeholder="Enter your name"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Email
        </label>
        <input
          type="email"
          value={formData.step1.email}
          onChange={(e) => updateStep1Data('email', e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
          placeholder="Enter your email"
          required
        />
      </div>
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Birth Date
        </label>
        <input
          type="date"
          value={formData.step1.birthDate}
          onChange={(e) => updateStep1Data('birthDate', e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
          required
        />
      </div>
      <button
        type="button"
        onClick={() => setStep(2)}
        disabled={!isStep1Valid()}
        className="w-full bg-blue-500 text-white rounded-full py-2 font-bold hover:bg-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Next
      </button>
    </>
  );

  const renderStep2 = () => (
    <>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Username
        </label>
        <input
          type="text"
          value={formData.step2.username}
          onChange={(e) => updateStep2Data('username', e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
          placeholder="Choose a username"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Password
        </label>
        <input
          type="password"
          value={formData.step2.password}
          onChange={(e) => updateStep2Data('password', e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
          placeholder="Create a password"
          required
        />
      </div>
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Bio
        </label>
        <textarea
          value={formData.step2.bio}
          onChange={(e) => updateStep2Data('bio', e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
          placeholder="Tell us about yourself"
          rows={3}
        />
      </div>
      <div className="flex space-x-3">
        <button
          type="button"
          onClick={() => setStep(1)}
          className="flex-1 border border-blue-500 text-blue-500 rounded-full py-2 font-bold hover:bg-blue-50 dark:hover:bg-gray-800 transition-colors"
        >
          Back
        </button>
        <button
          type="submit"
          disabled={!isStep2Valid()}
          className="flex-1 bg-blue-500 text-white rounded-full py-2 font-bold hover:bg-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Sign up
        </button>
      </div>
    </>
  );

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-black rounded-2xl w-full max-w-md">
        <div className="p-4 border-b border-gray-200 dark:border-gray-800 flex items-center">
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-900 rounded-full"
          >
            <X size={20} />
          </button>
          <h2 className="text-xl font-bold flex-1 text-center dark:text-white">
            Step {step} of 2
          </h2>
          <div className="w-8"></div>
        </div>
        <div className="p-6">
          <form onSubmit={handleSubmit}>
            {step === 1 ? renderStep1() : renderStep2()}
          </form>
        </div>
      </div>
    </div>
  );
}