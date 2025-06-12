import React from 'react';
import { Shield, QrCode, MapPin, AlertTriangle, Users, Phone, Lock, CheckCircle, Star, Clock } from 'lucide-react';

const Safety: React.FC = () => {
  return (
    <div className="min-h-screen py-16">
      {/* Hero Section with Mockup */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Shield className="h-16 w-16 text-blue-600 mx-auto mb-6" />
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Safety Standards</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive safety protocols designed to protect every user on Indian roads
            </p>
          </div>

          {/* Safety Dashboard Mockup */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Real-Time Safety Monitoring</h2>
              <p className="text-lg text-gray-600 mb-8">
                Our advanced safety dashboard provides comprehensive protection through multiple layers 
                of verification, tracking, and emergency response systems.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="bg-green-100 p-2 rounded-full">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  </div>
                  <span className="text-gray-700">Driver identity verified in real-time</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-blue-100 p-2 rounded-full">
                    <MapPin className="h-5 w-5 text-blue-600" />
                  </div>
                  <span className="text-gray-700">Live location shared with emergency contacts</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-red-100 p-2 rounded-full">
                    <AlertTriangle className="h-5 w-5 text-red-600" />
                  </div>
                  <span className="text-gray-700">Instant SOS alerts to authorities</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-purple-100 p-2 rounded-full">
                    <Shield className="h-5 w-5 text-purple-600" />
                  </div>
                  <span className="text-gray-700">24/7 emergency response team</span>
                </div>
              </div>
            </div>

            {/* Interactive Safety Dashboard */}
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-8 shadow-2xl">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-white">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-bold">Safety Dashboard</h3>
                    <div className="bg-green-500 w-3 h-3 rounded-full animate-pulse"></div>
                  </div>
                  
                  {/* Driver Info Card */}
                  <div className="bg-white/20 rounded-xl p-4 mb-4">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="w-12 h-12 bg-white/30 rounded-full flex items-center justify-center">
                        <span className="text-lg font-bold">RK</span>
                      </div>
                      <div>
                        <h4 className="font-semibold">Rajesh Kumar</h4>
                        <p className="text-sm opacity-90">DL: MH02-2019-1234567</p>
                      </div>
                      <div className="ml-auto">
                        <div className="flex items-center space-x-1">
                          <Star className="h-4 w-4 text-yellow-300 fill-current" />
                          <span className="text-sm font-medium">4.8</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="opacity-90">Vehicle: MH 02 AB 1234</span>
                      <span className="bg-green-500/30 px-2 py-1 rounded text-xs">Verified</span>
                    </div>
                  </div>

                  {/* Live Status */}
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="bg-white/20 rounded-lg p-3 text-center">
                      <MapPin className="h-5 w-5 mx-auto mb-1 text-green-300" />
                      <div className="text-xs opacity-90">Location</div>
                      <div className="text-sm font-medium">Bandra West</div>
                    </div>
                    <div className="bg-white/20 rounded-lg p-3 text-center">
                      <Clock className="h-5 w-5 mx-auto mb-1 text-blue-300" />
                      <div className="text-xs opacity-90">ETA</div>
                      <div className="text-sm font-medium">12 mins</div>
                    </div>
                  </div>

                  {/* Emergency Contacts */}
                  <div className="bg-white/20 rounded-lg p-3 mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium">Emergency Contacts</span>
                      <span className="text-xs bg-green-500/30 px-2 py-1 rounded">3 Notified</span>
                    </div>
                    <div className="flex space-x-2">
                      <div className="w-6 h-6 bg-white/30 rounded-full flex items-center justify-center text-xs">M</div>
                      <div className="w-6 h-6 bg-white/30 rounded-full flex items-center justify-center text-xs">D</div>
                      <div className="w-6 h-6 bg-white/30 rounded-full flex items-center justify-center text-xs">S</div>
                    </div>
                  </div>

                  {/* SOS Button */}
                  <button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-4 rounded-xl transition-colors flex items-center justify-center space-x-2">
                    <AlertTriangle className="h-5 w-5" />
                    <span>Emergency SOS</span>
                  </button>
                </div>
              </div>

              {/* Floating Status Indicators */}
              <div className="absolute -top-4 -right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg">
                ✓ All Systems Active
              </div>
              <div className="absolute -bottom-4 -left-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg">
                🛡️ Protected Journey
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QR Code Safety */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <QrCode className="h-8 w-8 text-blue-600" />
                <h2 className="text-3xl font-bold text-gray-900">Secure QR Code System</h2>
              </div>
              <p className="text-lg text-gray-600 mb-6">
                Our QR codes are tamper-proof and contain encrypted information that can only 
                be decoded by the Roadeye app, ensuring authenticity and preventing fraud.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Unique Encryption</h3>
                    <p className="text-gray-600">Each QR code contains encrypted driver and vehicle data that cannot be duplicated</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Real-time Verification</h3>
                    <p className="text-gray-600">Information is verified against government databases in real-time</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Tamper Detection</h3>
                    <p className="text-gray-600">Any attempt to modify or duplicate QR codes is immediately detected</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">QR Code Contains:</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between bg-white rounded-lg p-3 shadow-sm">
                  <span className="text-gray-600">Driver License Number</span>
                  <span className="text-green-600 font-medium">✓ Verified</span>
                </div>
                <div className="flex items-center justify-between bg-white rounded-lg p-3 shadow-sm">
                  <span className="text-gray-600">Vehicle Registration</span>
                  <span className="text-green-600 font-medium">✓ Verified</span>
                </div>
                <div className="flex items-center justify-between bg-white rounded-lg p-3 shadow-sm">
                  <span className="text-gray-600">Driver Photo</span>
                  <span className="text-green-600 font-medium">✓ Verified</span>
                </div>
                <div className="flex items-center justify-between bg-white rounded-lg p-3 shadow-sm">
                  <span className="text-gray-600">Safety Rating</span>
                  <span className="text-green-600 font-medium">✓ Updated</span>
                </div>
                <div className="flex items-center justify-between bg-white rounded-lg p-3 shadow-sm">
                  <span className="text-gray-600">Insurance Status</span>
                  <span className="text-green-600 font-medium">✓ Active</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Real-time Tracking */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-gradient-to-br from-green-600 to-blue-600 rounded-3xl p-8 text-white shadow-2xl">
                <h3 className="text-2xl font-bold mb-6">Live Tracking Dashboard</h3>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm opacity-90">Journey Status</span>
                    <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-medium">Active</span>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-sm opacity-90">Current Location</span>
                      <span className="text-sm font-medium">Bandra, Mumbai</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm opacity-90">Speed</span>
                      <span className="text-sm font-medium">42 km/h</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm opacity-90">ETA</span>
                      <span className="text-sm font-medium">8 mins</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm opacity-90">Contacts Notified</span>
                      <span className="text-sm font-medium">3/3</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="flex items-center space-x-3 mb-6">
                <MapPin className="h-8 w-8 text-green-600" />
                <h2 className="text-3xl font-bold text-gray-900">Real-time Location Tracking</h2>
              </div>
              <p className="text-lg text-gray-600 mb-6">
                Advanced GPS tracking with backup systems ensures your location is always known, 
                even in areas with poor network connectivity.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Multi-Source Tracking</h3>
                    <p className="text-gray-600">GPS, cell towers, and Wi-Fi positioning for maximum accuracy</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Offline Capabilities</h3>
                    <p className="text-gray-600">Location data stored locally when network is unavailable</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Automatic Updates</h3>
                    <p className="text-gray-600">Emergency contacts receive updates every 30 seconds during active trips</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SOS Emergency System */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <AlertTriangle className="h-12 w-12 text-red-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Emergency Response System</h2>
            <p className="text-xl text-gray-600">Multi-layered emergency response designed for Indian conditions</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-red-50 rounded-2xl p-6 text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-red-600">30s</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Immediate Alert</h3>
              <p className="text-gray-600">
                Emergency contacts and local authorities are notified within 30 seconds of SOS activation
              </p>
            </div>
            
            <div className="bg-blue-50 rounded-2xl p-6 text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Voice Call Backup</h3>
              <p className="text-gray-600">
                If data connection fails, system automatically initiates voice calls to emergency contacts
              </p>
            </div>
            
            <div className="bg-green-50 rounded-2xl p-6 text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Escalation Protocol</h3>
              <p className="text-gray-600">
                If no response within 2 minutes, alert is escalated to local police and our emergency team
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Driver & Rider Responsibilities */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Safety Responsibilities</h2>
            <p className="text-xl text-gray-600">Everyone plays a role in maintaining safety standards</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">For Passengers</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                  <span className="text-gray-700">Always scan the QR code before starting your journey</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                  <span className="text-gray-700">Verify driver photo matches the person driving</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                  <span className="text-gray-700">Share trip details with at least one emergency contact</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                  <span className="text-gray-700">Trust your instincts - exit the vehicle if you feel unsafe</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                  <span className="text-gray-700">Rate your driver honestly to help maintain standards</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-green-100 p-3 rounded-full">
                  <Shield className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">For Drivers</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                  <span className="text-gray-700">Display your QR code prominently in the vehicle</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                  <span className="text-gray-700">Keep your documents updated and vehicle well-maintained</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                  <span className="text-gray-700">Follow traffic rules and maintain safe driving speeds</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                  <span className="text-gray-700">Respect passenger privacy and maintain professional conduct</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                  <span className="text-gray-700">Report any safety incidents to maintain system integrity</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Support */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Phone className="h-16 w-16 mx-auto mb-6 text-blue-200" />
          <h2 className="text-3xl font-bold mb-6">24/7 Emergency Support</h2>
          <p className="text-xl text-blue-100 mb-8">
            Our dedicated emergency response team is available round the clock to assist you
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="font-bold text-xl mb-2">Emergency Hotline</h3>
              <p className="text-2xl font-bold text-blue-200">1800-Roadeye-1</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="font-bold text-xl mb-2">WhatsApp Support</h3>
              <p className="text-2xl font-bold text-blue-200">+91 7003565823</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="font-bold text-xl mb-2">Response Time</h3>
              <p className="text-2xl font-bold text-blue-200">&lt; 2 Minutes</p>
            </div>
          </div>
        </div>
      </section>

      {/* Data Security */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Lock className="h-12 w-12 text-blue-400 mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">Data Security & Privacy</h2>
            <p className="text-xl text-gray-300">Your safety data is protected with enterprise-grade security</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/5 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4">Data Encryption</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• AES-256 encryption for data at rest</li>
                <li>• TLS 1.3 for data in transit</li>
                <li>• Zero-knowledge architecture</li>
                <li>• Regular security audits</li>
              </ul>
            </div>
            
            <div className="bg-white/5 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4">Privacy Controls</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Granular sharing permissions</li>
                <li>• Automatic data deletion after trips</li>
                <li>• No location tracking when app is closed</li>
                <li>• GDPR compliant data handling</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Safety;