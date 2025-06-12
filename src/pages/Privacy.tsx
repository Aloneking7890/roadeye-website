import React from 'react';
import { Shield, Lock, Eye, Database, UserCheck, FileText, Clock, AlertCircle } from 'lucide-react';

const Privacy: React.FC = () => {
  return (
    <div className="min-h-screen py-16">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <Lock className="h-16 w-16 text-red-600 mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Privacy Policy</h1>
          <p className="text-xl text-gray-600">
            Your privacy is our priority. Here's how we collect, use, and protect your data.
          </p>
          <div className="mt-8 text-sm text-gray-500">
            Last updated: January 1, 2025
          </div>
        </div>
      </section>

      {/* Quick Overview */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Privacy at a Glance</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-sm text-center">
              <Shield className="h-8 w-8 text-green-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Minimal Data Collection</h3>
              <p className="text-sm text-gray-600">We only collect what's necessary for your safety</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm text-center">
              <Eye className="h-8 w-8 text-red-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">You Control Sharing</h3>
              <p className="text-sm text-gray-600">You decide who sees your location and when</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm text-center">
              <Lock className="h-8 w-8 text-purple-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Bank-Level Security</h3>
              <p className="text-sm text-gray-600">End-to-end encryption protects all your data</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            
            {/* Information We Collect */}
            <div className="mb-12">
              <div className="flex items-center space-x-3 mb-6">
                <Database className="h-8 w-8 text-red-600" />
                <h2 className="text-2xl font-bold text-gray-900 m-0">Information We Collect</h2>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Personal Information</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Account Details:</strong> Name, phone number, email address</li>
                  <li>• <strong>Emergency Contacts:</strong> Names and phone numbers of your chosen contacts</li>
                  <li>• <strong>Profile Photo:</strong> Optional profile picture for account identification</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Location Information</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Real-time Location:</strong> GPS coordinates during active trips only</li>
                  <li>• <strong>Trip Routes:</strong> Start and end points, route taken, stops made</li>
                  <li>• <strong>Location History:</strong> Stored for 30 days for safety purposes, then deleted</li>
                </ul>
                <div className="mt-4 p-3 bg-blue-100 rounded-lg">
                  <p className="text-sm text-blue-800 font-medium">
                    📍 Location tracking is only active during trips and when you explicitly start it
                  </p>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Usage Information</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>App Activity:</strong> Features used, trip frequency, safety alerts triggered</li>
                  <li>• <strong>Device Information:</strong> Device type, operating system, app version</li>
                  <li>• <strong>Performance Data:</strong> Crash reports, error logs (anonymized)</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Driver Verification Data</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>License Information:</strong> Driver's license number and validity (for drivers)</li>
                  <li>• <strong>Vehicle Details:</strong> Registration number, vehicle type, insurance status</li>
                  <li>• <strong>Ratings & Reviews:</strong> Safety ratings and passenger feedback</li>
                </ul>
              </div>
            </div>

            {/* How We Use Your Information */}
            <div className="mb-12">
              <div className="flex items-center space-x-3 mb-6">
                <UserCheck className="h-8 w-8 text-green-600" />
                <h2 className="text-2xl font-bold text-gray-900 m-0">How We Use Your Information</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-green-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Primary Safety Uses</h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Real-time location sharing with your emergency contacts</li>
                    <li>• Driver verification and vehicle identification</li>
                    <li>• Emergency response coordination</li>
                    <li>• Route monitoring and deviation alerts</li>
                  </ul>
                </div>
                
                <div className="bg-blue-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Service Improvement</h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• App performance optimization</li>
                    <li>• Safety feature enhancement</li>
                    <li>• Customer support</li>
                    <li>• Fraud prevention and security</li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 p-4 bg-yellow-100 rounded-lg">
                <div className="flex items-start space-x-3">
                  <AlertCircle className="h-5 w-5 text-yellow-600 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-yellow-800">We Never Use Your Data For:</h4>
                    <ul className="text-sm text-yellow-700 mt-2 space-y-1">
                      <li>• Advertising or marketing to third parties</li>
                      <li>• Selling your personal information</li>
                      <li>• Tracking you when the app is not in use</li>
                      <li>• Building profiles for commercial purposes</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Data Sharing */}
            <div className="mb-12">
              <div className="flex items-center space-x-3 mb-6">
                <Eye className="h-8 w-8 text-purple-600" />
                <h2 className="text-2xl font-bold text-gray-900 m-0">When We Share Your Information</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-purple-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">With Your Consent</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• <strong>Emergency Contacts:</strong> Location and trip details when you share them</li>
                    <li>• <strong>Drivers:</strong> Your first name and pickup location (when booking)</li>
                    <li>• <strong>Other Passengers:</strong> Basic contact info (if you choose to share rides)</li>
                  </ul>
                </div>

                <div className="bg-red-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Emergency Situations</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• <strong>Law Enforcement:</strong> When required by law or in emergencies</li>
                    <li>• <strong>Emergency Services:</strong> Location and contact details during SOS alerts</li>
                    <li>• <strong>Medical Personnel:</strong> Emergency contact information if you're incapacitated</li>
                  </ul>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Service Providers</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• <strong>Cloud Storage:</strong> Encrypted data stored with security-certified providers</li>
                    <li>• <strong>SMS Services:</strong> For sending emergency alerts to your contacts</li>
                    <li>• <strong>Analytics:</strong> Anonymized usage data for app improvement</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Data Security */}
            <div className="mb-12">
              <div className="flex items-center space-x-3 mb-6">
                <Shield className="h-8 w-8 text-red-600" />
                <h2 className="text-2xl font-bold text-gray-900 m-0">How We Protect Your Data</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-blue-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Technical Safeguards</h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• End-to-end encryption for all communications</li>
                    <li>• AES-256 encryption for stored data</li>
                    <li>• Regular security audits and penetration testing</li>
                    <li>• Multi-factor authentication for sensitive operations</li>
                  </ul>
                </div>
                
                <div className="bg-green-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Operational Security</h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Limited employee access to personal data</li>
                    <li>• Regular security training for all staff</li>
                    <li>• Incident response procedures</li>
                    <li>• Compliance with international security standards</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Your Rights */}
            <div className="mb-12">
              <div className="flex items-center space-x-3 mb-6">
                <FileText className="h-8 w-8 text-green-600" />
                <h2 className="text-2xl font-bold text-gray-900 m-0">Your Privacy Rights</h2>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3">Data Control Rights</h3>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>• <strong>Access:</strong> Request a copy of your data</li>
                      <li>• <strong>Correction:</strong> Update incorrect information</li>
                      <li>• <strong>Deletion:</strong> Delete your account and data</li>
                      <li>• <strong>Portability:</strong> Export your data</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3">Privacy Controls</h3>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>• <strong>Location Sharing:</strong> Turn on/off anytime</li>
                      <li>• <strong>Contact Management:</strong> Add/remove emergency contacts</li>
                      <li>• <strong>Data Retention:</strong> Set how long we keep your data</li>
                      <li>• <strong>Communication:</strong> Opt out of non-essential messages</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Data Retention */}
            <div className="mb-12">
              <div className="flex items-center space-x-3 mb-6">
                <Clock className="h-8 w-8 text-orange-600" />
                <h2 className="text-2xl font-bold text-gray-900 m-0">Data Retention</h2>
              </div>
              
              <div className="bg-orange-50 rounded-lg p-6">
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-2 border-b border-orange-200">
                    <span className="font-medium text-gray-900">Location Data</span>
                    <span className="text-orange-600 font-semibold">30 days</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-orange-200">
                    <span className="font-medium text-gray-900">Trip History</span>
                    <span className="text-orange-600 font-semibold">90 days</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-orange-200">
                    <span className="font-medium text-gray-900">Account Information</span>
                    <span className="text-orange-600 font-semibold">Until deletion</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-orange-200">
                    <span className="font-medium text-gray-900">Emergency Records</span>
                    <span className="text-orange-600 font-semibold">1 year</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="font-medium text-gray-900">Anonymized Analytics</span>
                    <span className="text-orange-600 font-semibold">2 years</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="mb-12">
              <div className="bg-gray-900 text-white rounded-lg p-8">
                <h2 className="text-2xl font-bold mb-6">Questions About Your Privacy?</h2>
                <p className="text-gray-300 mb-6">
                  Our Privacy Officer is here to help you understand how we protect and use your data.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-2">Email Us</h3>
                    <p className="text-blue-300">privacy@Roadeye.app</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Response Time</h3>
                    <p className="text-green-300">Within 48 hours</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Updates */}
            <div className="bg-blue-50 rounded-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Policy Updates</h2>
              <p className="text-gray-700 mb-4">
                We may update this privacy policy from time to time. When we do, we'll:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>• Notify you via email and in-app notification</li>
                <li>• Provide a summary of changes</li>
                <li>• Give you time to review before changes take effect</li>
                <li>• Allow you to delete your account if you disagree</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Privacy;