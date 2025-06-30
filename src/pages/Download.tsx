import React from 'react';
import { Download, Smartphone, Play, QrCode, Star, Shield, CheckCircle } from 'lucide-react';

const DownloadPage: React.FC = () => {
  return (
    <div className="min-h-screen py-16">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <Download className="h-16 w-16 text-red-600 mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Download Roadeye</h1>
          <p className="text-xl text-gray-600 mb-8">
            Get the app that's making Indian roads safer, one journey at a time
          </p>

          {/* Download Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a
              href="https://play.google.com/store/apps/details?id=com.aloneking798.ROADEYE"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black text-white px-8 py-4 rounded-2xl flex items-center space-x-3 hover:bg-gray-800 transition-colors min-w-[200px]"
            >
              <Play className="h-8 w-8" />
              <div className="text-left">
                <div className="text-xs">Get RoadEye on</div>
                <div className="text-lg font-semibold">Google Play</div>
              </div>
            </a>

            <a
              href="https://play.google.com/store/apps/details?id=com.roadeye.driver"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black text-white px-8 py-4 rounded-2xl flex items-center space-x-3 hover:bg-gray-800 transition-colors min-w-[200px]"
            >
              <Play className="h-8 w-8" />
              <div className="text-left">
                <div className="text-xs">Get RoadEye Driver on</div>
                <div className="text-lg font-semibold">Google Play</div>
              </div>
            </a>
          </div>

          {/* QR Codes */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="w-32 h-32 bg-gray-200 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <QrCode className="h-16 w-16 text-gray-400" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">RoadEye App</h3>
              <p className="text-sm text-gray-600">Scan to download RoadEye for passengers</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="w-32 h-32 bg-gray-200 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <QrCode className="h-16 w-16 text-gray-400" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">RoadEye Driver</h3>
              <p className="text-sm text-gray-600">Scan to download RoadEye for drivers</p>
            </div>
          </div>
        </div>
      </section>

      {/* App Features Preview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What's Inside the App</h2>
            <p className="text-xl text-gray-600">Powerful safety features at your fingertips</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <QrCode className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Instant QR Scanning</h3>
              <p className="text-gray-600">Scan driver QR codes to instantly verify identity and vehicle details</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Smartphone className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Live Location Sharing</h3>
              <p className="text-gray-600">Share your real-time location with trusted emergency contacts</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Emergency SOS</h3>
              <p className="text-gray-600">One-touch emergency alerts to contacts, police, and our response team</p>
            </div>
          </div>
        </div>
      </section>

      {/* System Requirements */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">System Requirements</h2>
            <p className="text-xl text-gray-600">Make sure your device is compatible</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="flex items-center space-x-3 mb-6">
                <Play className="h-8 w-8 text-green-600" />
                <h3 className="text-2xl font-bold text-gray-900">RoadEye App</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">Android 7.0 (API level 24) or higher</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">2 GB RAM minimum</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">50 MB free storage</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">Camera access for QR scanning</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">Location services enabled</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="flex items-center space-x-3 mb-6">
                <Play className="h-8 w-8 text-green-600" />
                <h3 className="text-2xl font-bold text-gray-900">RoadEye Driver</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">Android 7.0 (API level 24) or higher</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">2 GB RAM minimum</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">50 MB free storage</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">Driver license verification</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">Vehicle registration required</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Version Information */}
      <section className="py-16 bg-red-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Latest Version Features</h2>
            <p className="text-xl text-blue-100">Version 2.1.0 - Released January 2025</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">🆕 What's New</h3>
              <ul className="space-y-2 text-blue-100">
                <li>• Enhanced QR code scanning with better accuracy</li>
                <li>• Improved emergency response time</li>
                <li>• New offline mode for location tracking</li>
                <li>• Better battery optimization</li>
                <li>• Support for regional languages</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">🔧 Bug Fixes</h3>
              <ul className="space-y-2 text-blue-100">
                <li>• Fixed location accuracy issues</li>
                <li>• Resolved app crashes on older devices</li>
                <li>• Improved notification delivery</li>
                <li>• Enhanced app stability</li>
                <li>• Fixed UI issues on various screen sizes</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* User Reviews */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Users Are Saying</h2>
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="text-2xl font-bold text-gray-900">4.8</span>
              <span className="text-gray-600">(12,450 reviews)</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "Excellent app for safety! The QR scanning feature is brilliant and gives me confidence when traveling alone."
              </p>
              <div className="text-sm text-gray-500">- Priya S., Mumbai</div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "As a parent, this app gives me peace of mind. I can track my daughter's journey and know she's safe."
              </p>
              <div className="text-sm text-gray-500">- Rajesh K., Delhi</div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "The emergency SOS feature is a lifesaver. Quick response and my family was immediately notified."
              </p>
              <div className="text-sm text-gray-500">- Anita M., Bangalore</div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Travel Safer?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of Indians who trust Roadeye for their daily journeys
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://play.google.com/store/apps/details?id=com.aloneking798.ROADEYE"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-red-600 px-8 py-4 rounded-2xl flex items-center space-x-3 hover:bg-gray-100 transition-colors"
            >
              <Play className="h-6 w-6" />
              <span className="font-semibold">Download RoadEye</span>
            </a>

            <a
              href="https://play.google.com/store/apps/details?id=com.roadeye.driver"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-red-600 px-8 py-4 rounded-2xl flex items-center space-x-3 hover:bg-gray-100 transition-colors"
            >
              <Play className="h-6 w-6" />
              <span className="font-semibold">Download RoadEye Driver</span>
            </a>
          </div>

          <p className="text-sm text-blue-200 mt-6">
            Free to download • No hidden charges • Available in Hindi and English
          </p>
        </div>
      </section>
    </div>
  );
};

export default DownloadPage;