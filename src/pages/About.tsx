import React from 'react';
import { Shield, Heart, Target, Users, Award, MapPin } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen py-16">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">About Rodeye</h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            We're on a mission to make Indian roads safer through innovative technology, 
            one journey at a time.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Rodeye was born from a simple yet powerful realization: in a country where 
                  millions of people depend on shared transportation daily, there was no easy 
                  way to verify driver identity or share journey details with loved ones.
                </p>
                <p>
                  After experiencing safety concerns during late-night travels and hearing 
                  countless stories from friends and family, our founders decided to create 
                  a solution that would make every journey transparent and secure.
                </p>
                <p>
                  What started as a college project in 2023 has now evolved into India's 
                  first QR-based transportation safety platform, helping thousands of 
                  users travel with confidence every day.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-8 shadow-2xl">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-white">
                  <h3 className="text-2xl font-bold mb-4">Since 2023</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold">50K+</div>
                      <div className="text-sm opacity-90">Active Users</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold">1M+</div>
                      <div className="text-sm opacity-90">Safe Journeys</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold">15+</div>
                      <div className="text-sm opacity-90">Cities Covered</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold">99.9%</div>
                      <div className="text-sm opacity-90">Uptime</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center space-x-3 mb-6">
                <Target className="h-8 w-8 text-blue-600" />
                <h2 className="text-2xl font-bold text-gray-900">Our Mission</h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                To revolutionize transportation safety in India by providing every traveler 
                with the tools to verify their driver, share their journey, and get help when 
                needed. We believe that technology should serve humanity, especially when it 
                comes to basic safety and security.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center space-x-3 mb-6">
                <Heart className="h-8 w-8 text-red-600" />
                <h2 className="text-2xl font-bold text-gray-900">Our Vision</h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                A future where every journey in India is safe, transparent, and tracked. 
                Where parents don't worry about their children's late-night travels, where 
                solo travelers feel secure, and where the transportation ecosystem is built 
                on trust and accountability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Safety First</h3>
              <p className="text-gray-600">
                Every feature we build, every decision we make, starts with one question: 
                "Does this make our users safer?"
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">User-Centric</h3>
              <p className="text-gray-600">
                We listen to our users, understand their needs, and build solutions that 
                truly serve them, not just our business goals.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Innovation</h3>
              <p className="text-gray-600">
                We're constantly pushing boundaries to find new ways to make transportation 
                safer and more transparent.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Impact */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Impact</h2>
            <p className="text-xl text-blue-100">Making a real difference in people's lives</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">50,000+</div>
              <div className="text-blue-100">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">1,000,000+</div>
              <div className="text-blue-100">Safe Journeys Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-blue-100">Emergency Situations Resolved</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">15+</div>
              <div className="text-blue-100">Cities Covered</div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Preview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Built by a Team That Cares</h2>
          <p className="text-xl text-gray-600 mb-8">
            Our diverse team of engineers, designers, and safety experts work tirelessly 
            to make every journey safer for millions of Indians.
          </p>
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <p className="text-gray-600 italic text-lg">
              "We're not just building an app – we're building a safety net for every 
              person who travels in India. Every line of code we write, every feature we 
              design, is a step towards making our roads safer."
            </p>
            <div className="mt-6">
              <p className="font-semibold text-gray-900">The Rodeye Team</p>
              <p className="text-gray-600">Mumbai, India</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;