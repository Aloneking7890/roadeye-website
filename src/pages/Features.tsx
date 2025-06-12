import React from 'react';
import { QrCode, MapPin, Shield, AlertTriangle, Users, Clock, Phone, Eye, Lock, Star } from 'lucide-react';

const Features: React.FC = () => {
  return (
    <div className="min-h-screen py-16">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Powerful Features</h1>
          <p className="text-xl text-gray-600">
            Comprehensive safety tools designed for both users and drivers
          </p>
        </div>
      </section>

      {/* For Users Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Users className="h-4 w-4" />
              <span>For Passengers</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Travel with Complete Peace of Mind</h2>
            <p className="text-xl text-gray-600">Everything you need to stay safe during your journey</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-6 shadow-lg">
              <QrCode className="h-12 w-12 text-red-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Instant QR Scanning</h3>
              <p className="text-gray-600">
                Scan the QR code in your vehicle to instantly access driver details, 
                vehicle information, and safety ratings. No more guesswork.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-white rounded-2xl p-6 shadow-lg">
              <MapPin className="h-12 w-12 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Live Location Sharing</h3>
              <p className="text-gray-600">
                Automatically share your real-time location with up to 5 emergency contacts. 
                They'll know exactly where you are throughout your journey.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-red-50 to-white rounded-2xl p-6 shadow-lg">
              <AlertTriangle className="h-12 w-12 text-red-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">One-Touch SOS</h3>
              <p className="text-gray-600">
                Emergency button that instantly sends your location, driver details, 
                and situation to police, family, and our emergency response team.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-white rounded-2xl p-6 shadow-lg">
              <Eye className="h-12 w-12 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Driver Verification</h3>
              <p className="text-gray-600">
                View driver's license details, photo, ratings, and trip history. 
                Know who's behind the wheel before you start your journey.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-yellow-50 to-white rounded-2xl p-6 shadow-lg">
              <Clock className="h-12 w-12 text-yellow-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Trip Timeline</h3>
              <p className="text-gray-600">
                Detailed timeline of your journey with stops, delays, and route changes. 
                Perfect for keeping track of your travel history.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-indigo-50 to-white rounded-2xl p-6 shadow-lg">
              <Phone className="h-12 w-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Emergency Contacts</h3>
              <p className="text-gray-600">
                Set up to 5 emergency contacts who will receive automatic notifications 
                and can track your journey in real-time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* For Drivers Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Shield className="h-4 w-4" />
              <span>For Drivers</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Build Trust and Increase Your Earnings</h2>
            <p className="text-xl text-gray-600">Tools to help you become a verified, trusted driver</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Shield className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold">Driver Verification Badge</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Complete our verification process to earn a trusted driver badge. 
                Verified drivers get more bookings and better ratings.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• License verification</li>
                <li>• Background check</li>
                <li>• Vehicle inspection</li>
                <li>• Safety training certification</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-green-100 p-3 rounded-full">
                  <Star className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold">Rating System</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Build your reputation with our transparent rating system. 
                Good drivers earn more and get priority bookings.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Passenger feedback</li>
                <li>• Safety score tracking</li>
                <li>• Performance analytics</li>
                <li>• Improvement suggestions</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-purple-100 p-3 rounded-full">
                  <QrCode className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold">Personal QR Code</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Get your unique QR code to display in your vehicle. 
                Passengers can scan it to see your credentials instantly.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Waterproof QR sticker</li>
                <li>• Real-time profile updates</li>
                <li>• Customizable information</li>
                <li>• Easy replacement if damaged</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-red-100 p-3 rounded-full">
                  <Lock className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold">Driver Safety Tools</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Safety isn't just for passengers. Drivers get tools to protect themselves 
                and report incidents too.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Driver panic button</li>
                <li>• Incident reporting</li>
                <li>• Route optimization</li>
                <li>• Emergency support line</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Advanced Safety Features</h2>
            <p className="text-xl text-gray-600">Cutting-edge technology for maximum protection</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Smart Route Monitoring</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="bg-blue-100 p-2 rounded-full mt-1">
                    <MapPin className="h-4 w-4 text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Route Deviation Alerts</h4>
                    <p className="text-gray-600 text-sm">
                      Get notified if your driver takes an unusual route or makes unexpected stops.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="bg-green-100 p-2 rounded-full mt-1">
                    <Clock className="h-4 w-4 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">ETA Tracking</h4>
                    <p className="text-gray-600 text-sm">
                      Real-time arrival estimates shared with your emergency contacts.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="bg-purple-100 p-2 rounded-full mt-1">
                    <AlertTriangle className="h-4 w-4 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Automatic Incident Detection</h4>
                    <p className="text-gray-600 text-sm">
                      AI-powered detection of sudden stops, accidents, or unusual patterns.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-red-600 to-purple-600 rounded-3xl p-8 text-white">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <h4 className="text-xl font-bold mb-4">Live Journey Dashboard</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center bg-white/10 rounded-lg p-3">
                    <span className="text-sm">Current Speed</span>
                    <span className="font-bold">45 km/h</span>
                  </div>
                  <div className="flex justify-between items-center bg-white/10 rounded-lg p-3">
                    <span className="text-sm">ETA</span>
                    <span className="font-bold">15 mins</span>
                  </div>
                  <div className="flex justify-between items-center bg-white/10 rounded-lg p-3">
                    <span className="text-sm">Distance Left</span>
                    <span className="font-bold">8.5 km</span>
                  </div>
                  <div className="bg-green-500/20 rounded-lg p-3 text-center">
                    <span className="text-sm font-medium">✓ Journey On Track</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Data Privacy */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Lock className="h-16 w-16 text-blue-400 mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-6">Your Privacy is Sacred</h2>
          <p className="text-xl text-gray-300 mb-8">
            All your data is encrypted, secure, and never shared without your explicit consent. 
            You control who sees your information and for how long.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/5 rounded-lg p-6">
              <h3 className="font-semibold mb-2">End-to-End Encryption</h3>
              <p className="text-sm text-gray-400">All communications are encrypted using military-grade security</p>
            </div>
            <div className="bg-white/5 rounded-lg p-6">
              <h3 className="font-semibold mb-2">Data Minimization</h3>
              <p className="text-sm text-gray-400">We only collect what's necessary for your safety</p>
            </div>
            <div className="bg-white/5 rounded-lg p-6">
              <h3 className="font-semibold mb-2">Your Control</h3>
              <p className="text-sm text-gray-400">Delete your data anytime with one click</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;