import React from 'react';
import { FileText, Scale, Shield, AlertTriangle, Users, Gavel } from 'lucide-react';

const Terms: React.FC = () => {
  return (
    <div className="min-h-screen py-16">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <FileText className="h-16 w-16 text-blue-600 mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Terms & Conditions</h1>
          <p className="text-xl text-gray-600">
            Please read these terms carefully before using Rodeye
          </p>
          <div className="mt-8 text-sm text-gray-500">
            Last updated: January 1, 2025 • Effective Date: January 1, 2025
          </div>
        </div>
      </section>

      {/* Quick Summary */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Terms Summary</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-sm text-center">
              <Shield className="h-8 w-8 text-green-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Safety First</h3>
              <p className="text-sm text-gray-600">Use Rodeye responsibly for your safety and others</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm text-center">
              <Users className="h-8 w-8 text-blue-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Respect Others</h3>
              <p className="text-sm text-gray-600">Maintain respectful behavior with all users</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm text-center">
              <Gavel className="h-8 w-8 text-purple-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Indian Law</h3>
              <p className="text-sm text-gray-600">Governed by Indian laws and regulations</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            
            {/* Acceptance of Terms */}
            <div className="mb-12">
              <div className="flex items-center space-x-3 mb-6">
                <Scale className="h-8 w-8 text-blue-600" />
                <h2 className="text-2xl font-bold text-gray-900 m-0">1. Acceptance of Terms</h2>
              </div>
              
              <div className="bg-blue-50 rounded-lg p-6">
                <p className="text-gray-700 mb-4">
                  By downloading, accessing, or using the Rodeye mobile application ("App"), you agree to be bound by these Terms and Conditions ("Terms"). If you do not agree to these Terms, do not use the App.
                </p>
                <p className="text-gray-700">
                  These Terms constitute a legally binding agreement between you and Rodeye Technologies Private Limited ("Rodeye," "we," "us," or "our"), a company incorporated under the Companies Act, 2013, and registered in India.
                </p>
              </div>
            </div>

            {/* App Usage Rules */}
            <div className="mb-12">
              <div className="flex items-center space-x-3 mb-6">
                <Shield className="h-8 w-8 text-green-600" />
                <h2 className="text-2xl font-bold text-gray-900 m-0">2. App Usage Rules</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-green-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Permitted Uses</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Use the App for legitimate safety and transportation purposes</li>
                    <li>• Share your location with trusted emergency contacts</li>
                    <li>• Verify driver and vehicle information before travel</li>
                    <li>• Use emergency features in genuine emergency situations</li>
                    <li>• Provide honest feedback and ratings</li>
                  </ul>
                </div>

                <div className="bg-red-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Prohibited Uses</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Misuse emergency features or trigger false alarms</li>
                    <li>• Share false information about drivers or vehicles</li>
                    <li>• Attempt to hack, reverse engineer, or compromise the App</li>
                    <li>• Use the App for illegal activities or harassment</li>
                    <li>• Create fake accounts or provide false information</li>
                    <li>• Interfere with other users' experience or safety</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* User Responsibilities */}
            <div className="mb-12">
              <div className="flex items-center space-x-3 mb-6">
                <Users className="h-8 w-8 text-purple-600" />
                <h2 className="text-2xl font-bold text-gray-900 m-0">3. User Responsibilities</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-purple-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">For Passengers</h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Verify driver identity using the QR code system</li>
                    <li>• Provide accurate pickup and drop-off locations</li>
                    <li>• Respect the driver and vehicle property</li>
                    <li>• Follow local traffic and safety regulations</li>
                    <li>• Use emergency features responsibly</li>
                    <li>• Provide honest ratings and feedback</li>
                  </ul>
                </div>
                
                <div className="bg-blue-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">For Drivers</h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Maintain valid driving license and vehicle documents</li>
                    <li>• Display Rodeye QR code prominently in vehicle</li>
                    <li>• Drive safely and follow traffic regulations</li>
                    <li>• Maintain vehicle in good condition</li>
                    <li>• Treat passengers with respect and professionalism</li>
                    <li>• Report any safety incidents or concerns</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Privacy and Data */}
            <div className="mb-12">
              <div className="flex items-center space-x-3 mb-6">
                <Shield className="h-8 w-8 text-blue-600" />
                <h2 className="text-2xl font-bold text-gray-900 m-0">4. Privacy and Data Protection</h2>
              </div>
              
              <div className="bg-blue-50 rounded-lg p-6">
                <p className="text-gray-700 mb-4">
                  Your privacy is important to us. Our Privacy Policy, which is incorporated into these Terms by reference, explains how we collect, use, and protect your information.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                    <p className="text-gray-700">Location data is only collected during active trips and shared with your chosen emergency contacts</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                    <p className="text-gray-700">Personal information is encrypted and stored securely</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                    <p className="text-gray-700">You control who can access your information and when</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Payment and Refunds */}
            <div className="mb-12">
              <div className="flex items-center space-x-3 mb-6">
                <FileText className="h-8 w-8 text-green-600" />
                <h2 className="text-2xl font-bold text-gray-900 m-0">5. Payment and Refund Policy</h2>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Free and Premium Features</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Free Features</h4>
                    <ul className="space-y-1 text-gray-700 text-sm">
                      <li>• Basic QR code scanning</li>
                      <li>• Location sharing with 3 contacts</li>
                      <li>• SOS emergency button</li>
                      <li>• Driver verification</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Premium Features</h4>
                    <ul className="space-y-1 text-gray-700 text-sm">
                      <li>• Extended contact list (up to 10)</li>
                      <li>• Advanced route monitoring</li>
                      <li>• Trip history and analytics</li>
                      <li>• Priority customer support</li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-white rounded-lg">
                  <h4 className="font-medium text-gray-900 mb-2">Refund Policy</h4>
                  <p className="text-gray-700 text-sm">
                    Premium subscriptions can be cancelled anytime. Refunds for unused subscription periods 
                    will be processed within 7-10 business days according to the payment method used.
                  </p>
                </div>
              </div>
            </div>

            {/* Limitation of Liability */}
            <div className="mb-12">
              <div className="flex items-center space-x-3 mb-6">
                <AlertTriangle className="h-8 w-8 text-red-600" />
                <h2 className="text-2xl font-bold text-gray-900 m-0">6. Limitation of Liability</h2>
              </div>
              
              <div className="bg-red-50 rounded-lg p-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Service Limitations</h3>
                    <p className="text-gray-700 text-sm">
                      Rodeye is a technology platform that facilitates safety tracking and communication. 
                      We do not provide transportation services directly and are not responsible for the 
                      actions of drivers or passengers.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Technical Limitations</h3>
                    <ul className="space-y-1 text-gray-700 text-sm">
                      <li>• GPS accuracy depends on device capabilities and network conditions</li>
                      <li>• Emergency features require active internet or cellular connection</li>
                      <li>• App functionality may be affected by device settings or software issues</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Liability Cap</h3>
                    <p className="text-gray-700 text-sm">
                      To the maximum extent permitted by law, Rodeye's total liability for any claims 
                      arising from the use of the App shall not exceed the amount paid by you for 
                      premium services in the 12 months preceding the claim.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Governing Law */}
            <div className="mb-12">
              <div className="flex items-center space-x-3 mb-6">
                <Gavel className="h-8 w-8 text-purple-600" />
                <h2 className="text-2xl font-bold text-gray-900 m-0">7. Governing Law and Jurisdiction</h2>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Applicable Law</h3>
                    <p className="text-gray-700">
                      These Terms shall be governed by and construed in accordance with the laws of India, 
                      including but not limited to the Information Technology Act, 2000, and the Indian 
                      Contract Act, 1872.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Jurisdiction</h3>
                    <p className="text-gray-700">
                      Any disputes arising out of or in connection with these Terms shall be subject to 
                      the exclusive jurisdiction of the courts in Mumbai, Maharashtra, India.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Dispute Resolution</h3>
                    <p className="text-gray-700">
                      We encourage users to contact our support team first to resolve any issues. 
                      If a resolution cannot be reached, disputes may be escalated to mediation 
                      before pursuing legal action.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Updates and Modifications */}
            <div className="mb-12">
              <div className="bg-gray-50 rounded-lg p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">8. Updates an Modifications</h2>
                <p className="text-gray-700 mb-4">
                  We may update these Terms from time to time to reflect changes in our services, 
                  legal requirements, or business practices. When we make changes:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• We'll notify you via email and in-app notification</li>
                  <li>• Significant changes will be highlighted and explained</li>
                  <li>• You'll have 30 days to review the changes before they take effect</li>
                  <li>• Continued use of the App after changes indicates acceptance</li>
                </ul>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-gray-900 text-white rounded-lg p-8">
              <h2 className="text-2xl font-bold mb-6">Questions About These Terms?</h2>
              <p className="text-gray-300 mb-6">
                If you have any questions about these Terms and Conditions, please contact us:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-2">Legal Department</h3>
                  <p className="text-blue-300">legal@rodeye.app</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Registered Address</h3>
                  <p className="text-gray-300 text-sm">
                    Rodeye Technologies Pvt. Ltd.<br />
                    Mumbai, Maharashtra, India
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Terms;