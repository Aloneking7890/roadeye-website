import React, { useState } from 'react';
import { AlertTriangle, Shield, Trash2, CheckCircle, ArrowLeft } from 'lucide-react';

const DeleteAccount: React.FC = () => {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmText, setConfirmText] = useState('');
  const [feedback, setFeedback] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleDeleteAccount = async () => {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setStep(4);
    }, 2000);
  };

  if (step === 4) {
    return (
      <div className="min-h-screen py-16 flex items-center justify-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-6" />
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Account Deleted Successfully</h1>
          <p className="text-lg text-gray-600 mb-8">
            Your Rodeye account and all associated data have been permanently deleted. 
            We're sorry to see you go, and we hope you'll consider using Rodeye again in the future.
          </p>
          <div className="bg-blue-50 rounded-lg p-6 text-left">
            <h3 className="font-semibold text-gray-900 mb-2">What happens next?</h3>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li>• All your personal data has been removed from our servers</li>
              <li>• Your emergency contacts will no longer receive notifications</li>
              <li>• You'll receive a final confirmation email within 24 hours</li>
              <li>• Any remaining app data will be cleared within 30 days</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-16">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <AlertTriangle className="h-16 w-16 text-red-600 mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Delete Your Account</h1>
          <p className="text-xl text-gray-600">
            We're sorry to see you go. Please read the information below before proceeding.
          </p>
        </div>
      </section>

      {/* Warning Section */}
      <section className="py-8 bg-red-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-red-100 border border-red-300 rounded-lg p-6">
            <div className="flex items-start space-x-3">
              <AlertTriangle className="h-6 w-6 text-red-600 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-red-800 mb-2">Important Warning</h3>
                <p className="text-red-700 mb-4">
                  Deleting your account is <strong>permanent and irreversible</strong>. Once deleted, you will lose access to:
                </p>
                <ul className="space-y-1 text-red-700 text-sm">
                  <li>• All your trip history and safety records</li>
                  <li>• Emergency contact configurations</li>
                  <li>• Driver ratings and preferences</li>
                  <li>• Any premium features or subscriptions</li>
                  <li>• The ability to recover your account or data</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Step 1: Account Verification */}
          {step === 1 && (
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-blue-100 p-2 rounded-full">
                  <Shield className="h-6 w-6 text-blue-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Step 1: Verify Your Identity</h2>
              </div>
              
              <p className="text-gray-600 mb-6">
                For security purposes, please verify your identity before proceeding with account deletion.
              </p>
              
              <form onSubmit={(e) => { e.preventDefault(); setStep(2); }} className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your registered email"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your password"
                    required
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                >
                  Verify Identity
                </button>
              </form>
            </div>
          )}

          {/* Step 2: Feedback */}
          {step === 2 && (
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="bg-orange-100 p-2 rounded-full">
                    <span className="text-orange-600 font-bold">2</span>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Step 2: Help Us Improve (Optional)</h2>
                </div>
                <button
                  onClick={() => setStep(1)}
                  className="text-gray-500 hover:text-gray-700 transition-colors"
                >
                  <ArrowLeft className="h-5 w-5" />
                </button>
              </div>
              
              <p className="text-gray-600 mb-6">
                We're constantly working to improve Rodeye. Your feedback helps us understand what we can do better.
              </p>
              
              <form onSubmit={(e) => { e.preventDefault(); setStep(3); }}>
                <div className="mb-6">
                  <label htmlFor="feedback" className="block text-sm font-medium text-gray-700 mb-2">
                    Why are you deleting your account? (Optional)
                  </label>
                  <textarea
                    id="feedback"
                    value={feedback}
                    onChange={(e) => setFeedback(e.target.value)}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Tell us what led to this decision..."
                  />
                </div>
                
                <div className="flex space-x-4">
                  <button
                    type="button"
                    onClick={() => setStep(3)}
                    className="flex-1 bg-gray-200 text-gray-700 py-3 px-4 rounded-lg font-medium hover:bg-gray-300 transition-colors"
                  >
                    Skip
                  </button>
                  <button
                    type="submit"
                    className="flex-1 bg-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                  >
                    Continue
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* Step 3: Final Confirmation */}
          {step === 3 && (
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="bg-red-100 p-2 rounded-full">
                    <Trash2 className="h-6 w-6 text-red-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Step 3: Final Confirmation</h2>
                </div>
                <button
                  onClick={() => setStep(2)}
                  className="text-gray-500 hover:text-gray-700 transition-colors"
                >
                  <ArrowLeft className="h-5 w-5" />
                </button>
              </div>
              
              <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
                <h3 className="font-semibold text-red-800 mb-3">⚠️ Last Chance to Reconsider</h3>
                <p className="text-red-700 text-sm mb-4">
                  This action will permanently delete your account and all associated data. 
                  There is no way to recover your account after this point.
                </p>
                <div className="bg-red-100 rounded p-3">
                  <p className="text-xs text-red-600 font-medium">
                    Data deletion is irreversible and will be completed within 30 days as per our privacy policy.
                  </p>
                </div>
              </div>
              
              <form onSubmit={(e) => { e.preventDefault(); handleDeleteAccount(); }}>
                <div className="mb-6">
                  <label htmlFor="confirmText" className="block text-sm font-medium text-gray-700 mb-2">
                    Type "DELETE MY ACCOUNT" to confirm:
                  </label>
                  <input
                    type="text"
                    id="confirmText"
                    value={confirmText}
                    onChange={(e) => setConfirmText(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="DELETE MY ACCOUNT"
                    required
                  />
                </div>
                
                <div className="flex space-x-4">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="flex-1 bg-gray-200 text-gray-700 py-3 px-4 rounded-lg font-medium hover:bg-gray-300 transition-colors"
                  >
                    Go Back
                  </button>
                  <button
                    type="submit"
                    disabled={confirmText !== 'DELETE MY ACCOUNT' || isLoading}
                    className="flex-1 bg-red-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-red-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isLoading ? 'Deleting...' : 'Delete My Account'}
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </section>

      {/* Support Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Need Help?</h2>
          <p className="text-gray-600 mb-6">
            If you're having issues with the app, our support team is here to help. 
            Many problems can be resolved without deleting your account.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2">Email Support</h3>
              <p className="text-sm text-gray-600">support@rodeye.app</p>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2">WhatsApp</h3>
              <p className="text-sm text-gray-600">+91 98765 43210</p>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2">Help Center</h3>
              <p className="text-sm text-gray-600">24/7 Available</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DeleteAccount;