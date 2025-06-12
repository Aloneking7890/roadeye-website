import React from 'react';
import { Link } from 'react-router-dom';
import { QrCode, MapPin, Shield, AlertTriangle, Users, Star, Download, Play } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            Scan. Share. 
            <span className="text-blue-600"> Stay Safe.</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Revolutionary QR-based safety tracking for Indian roads. Know who's driving, 
            share your journey, and stay connected with your loved ones.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link
              to="/download"
              className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors flex items-center space-x-2"
            >
              <Download className="h-5 w-5" />
              <span>Download Now</span>
            </Link>
            <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full text-lg font-semibold hover:border-blue-600 hover:text-blue-600 transition-colors flex items-center space-x-2">
              <Play className="h-5 w-5" />
              <span>Watch Demo</span>
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
              <QrCode className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">QR Code Scanning</h3>
              <p className="text-gray-600">Instantly verify driver identity and vehicle details</p>
            </div>
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
              <MapPin className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Real-Time Tracking</h3>
              <p className="text-gray-600">Share your location with trusted contacts</p>
            </div>
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
              <AlertTriangle className="h-12 w-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">SOS Emergency</h3>
              <p className="text-gray-600">Instant emergency alerts to your safety network</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How Rodeye Works</h2>
            <p className="text-xl text-gray-600">Simple. Secure. Smart.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-2xl font-semibold mb-4">Scan QR Code</h3>
              <p className="text-gray-600">Find the Rodeye QR code in the vehicle and scan it with our app to access driver and vehicle information.</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-green-600">2</span>
              </div>
              <h3 className="text-2xl font-semibold mb-4">Share Your Journey</h3>
              <p className="text-gray-600">Automatically share your real-time location and trip details with your emergency contacts.</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-purple-600">3</span>
              </div>
              <h3 className="text-2xl font-semibold mb-4">Stay Safe</h3>
              <p className="text-gray-600">Use the SOS button in emergencies. Your location and situation are instantly shared with authorities and contacts.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Preview */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Built for India's Roads</h2>
              <p className="text-xl mb-8 opacity-90">
                Designed specifically for Indian transportation challenges, from auto-rickshaws 
                to long-distance buses. Every journey matters.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center space-x-3">
                  <Shield className="h-6 w-6 text-green-300" />
                  <span>Driver verification system</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Users className="h-6 w-6 text-green-300" />
                  <span>Family safety network</span>
                </li>
                <li className="flex items-center space-x-3">
                  <MapPin className="h-6 w-6 text-green-300" />
                  <span>GPS tracking with offline support</span>
                </li>
                <li className="flex items-center space-x-3">
                  <AlertTriangle className="h-6 w-6 text-green-300" />
                  <span>24/7 emergency response</span>
                </li>
              </ul>
              <Link 
                to="/features" 
                className="inline-block mt-8 text-white border-2 border-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Explore All Features
              </Link>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 shadow-2xl">
                <div className="bg-white rounded-2xl p-6 text-gray-900 shadow-lg">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                      <Shield className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Driver: Rajesh Kumar</h3>
                      <p className="text-sm text-gray-600">DL: MH02-2019-1234567</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-gray-600">Vehicle</p>
                      <p className="font-semibold">MH 02 AB 1234</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Rating</p>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="font-semibold">4.8</span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 p-3 bg-green-50 rounded-lg">
                    <p className="text-green-800 text-sm font-medium">✓ Verified Driver</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Users Say</h2>
            <p className="text-xl text-gray-600">Real stories from real people</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6">
                "As a parent, Rodeye gives me peace of mind when my daughter travels alone. 
                I can track her journey and know she's safe."
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="font-semibold text-blue-600">P</span>
                </div>
                <div>
                  <p className="font-semibold">Priya Sharma</p>
                  <p className="text-sm text-gray-600">Mumbai</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6">
                "The QR system is brilliant! I can verify my driver immediately and share 
                the details with family. Excellent security feature."
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="font-semibold text-green-600">A</span>
                </div>
                <div>
                  <p className="font-semibold">Amit Patel</p>
                  <p className="text-sm text-gray-600">Delhi</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6">
                "The SOS feature saved my life during an emergency. Quick response and 
                my location was shared instantly with police and family."
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <span className="font-semibold text-purple-600">S</span>
                </div>
                <div>
                  <p className="font-semibold">Sunita Rao</p>
                  <p className="text-sm text-gray-600">Bangalore</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Make Your Journeys Safer?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of Indians already using Rodeye to stay safe on the road.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/download"
              className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Download for Android
            </Link>
            <Link
              to="/download"
              className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Download for iOS
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;