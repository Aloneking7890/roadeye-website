import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Search, HelpCircle, Shield, QrCode, MapPin, AlertTriangle } from 'lucide-react';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
  category: string;
}

const FAQ: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [openItems, setOpenItems] = useState<number[]>([]);

  const faqData: FAQItem[] = [
    {
      id: 1,
      question: "How do I scan a QR code in the vehicle?",
      answer: "Open the Roadeye app, tap the 'Scan QR' button on the home screen, and point your camera at the QR code displayed in the vehicle. The app will automatically detect and scan the code, showing you driver and vehicle information.",
      category: "qr-scanning"
    },
    {
      id: 2,
      question: "What information does the QR code contain?",
      answer: "The QR code contains encrypted information including the driver's license number, photo, vehicle registration details, insurance status, safety rating, and verification status. All information is verified against government databases.",
      category: "qr-scanning"
    },
    {
      id: 3,
      question: "How does location sharing work?",
      answer: "When you start a trip, Roadeye automatically shares your real-time location with your selected emergency contacts. They receive a link to track your journey live. Location sharing stops when you end the trip or turn it off manually.",
      category: "location"
    },
    {
      id: 4,
      question: "Can I control who sees my location?",
      answer: "Yes, you have complete control. You can add or remove emergency contacts anytime, choose which contacts to notify for each trip, and turn location sharing on or off. Your location is never shared without your permission.",
      category: "location"
    },
    {
      id: 5,
      question: "What happens when I press the SOS button?",
      answer: "Pressing the SOS button immediately sends your exact location, driver details, and emergency alert to: 1) Your emergency contacts via SMS and app notification, 2) Local police through our emergency network, 3) Our 24/7 response team who will call you within 2 minutes.",
      category: "emergency"
    },
    {
      id: 6,
      question: "What if I accidentally press the SOS button?",
      answer: "You have a 10-second countdown to cancel the alert after pressing SOS. If you don't cancel, the alert is sent. If it was accidental, immediately call our emergency hotline (1800-Roadeye-1) to inform our team and prevent unnecessary emergency response.",
      category: "emergency"
    },
    {
      id: 7,
      question: "Is my personal data safe and secure?",
      answer: "Yes, we use bank-level security. All data is encrypted with AES-256 encryption, stored on secure servers, and never shared without your consent. We follow strict privacy policies and comply with Indian data protection laws.",
      category: "privacy"
    },
    {
      id: 8,
      question: "How long is my location data stored?",
      answer: "Location data is automatically deleted after 30 days. Trip history is kept for 90 days for safety purposes. You can delete your data anytime from the app settings or by contacting support.",
      category: "privacy"
    },
    {
      id: 9,
      question: "How do I become a verified driver?",
      answer: "To become verified: 1) Download the Roadeye Driver app, 2) Submit your driving license and vehicle documents, 3) Complete background verification, 4) Pass our safety training course, 5) Get your vehicle inspected. The process takes 3-5 business days.",
      category: "drivers"
    },
    {
      id: 10,
      question: "How do I get my Roadeye QR code for my vehicle?",
      answer: "After completing driver verification, you'll receive a waterproof QR code sticker by mail within 7 days. You can also download a digital version from the driver app. Display it prominently inside your vehicle where passengers can easily scan it.",
      category: "drivers"
    },
    {
      id: 11,
      question: "Does the app work without internet connection?",
      answer: "Limited functionality works offline. You can scan QR codes and view cached driver information. However, location sharing, emergency alerts, and real-time features require an internet connection. The app stores location data locally and syncs when connection is restored.",
      category: "technical"
    },
    {
      id: 12,
      question: "Why is my GPS location not accurate?",
      answer: "GPS accuracy depends on several factors: device quality, weather conditions, tall buildings, and network connectivity. For best results: enable high-accuracy location mode, ensure good network signal, and keep the app open during trips.",
      category: "technical"
    },
    {
      id: 13,
      question: "Is Roadeye free to use?",
      answer: "Yes, core safety features are completely free: QR scanning, location sharing with 3 contacts, SOS alerts, and driver verification. Premium features like extended contact lists, advanced analytics, and priority support are available for ₹99/month.",
      category: "general"
    },
    {
      id: 14,
      question: "Which cities does Roadeye cover?",
      answer: "Roadeye is currently available in 15+ major Indian cities including Mumbai, Delhi, Bangalore, Chennai, Hyderabad, Pune, Kolkata, Ahmedabad, and more. We're rapidly expanding to cover all major cities and towns across India.",
      category: "general"
    },
    {
      id: 15,
      question: "How do I add or remove emergency contacts?",
      answer: "Go to Settings > Emergency Contacts in the app. You can add up to 5 contacts (3 for free users). Enter their name and phone number. They'll receive an SMS notification when added. You can edit or remove contacts anytime.",
      category: "general"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Questions', icon: HelpCircle },
    { id: 'qr-scanning', name: 'QR Scanning', icon: QrCode },
    { id: 'location', name: 'Location Sharing', icon: MapPin },
    { id: 'emergency', name: 'Emergency Features', icon: AlertTriangle },
    { id: 'privacy', name: 'Privacy & Security', icon: Shield },
    { id: 'drivers', name: 'For Drivers', icon: Shield },
    { id: 'technical', name: 'Technical Issues', icon: HelpCircle },
    { id: 'general', name: 'General', icon: HelpCircle }
  ];

  const filteredFAQs = faqData.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const toggleItem = (id: number) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen py-16">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <HelpCircle className="h-16 w-16 text-red-600 mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h1>
          <p className="text-xl text-gray-600">
            Find quick answers to common questions about Roadeye
          </p>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search for answers..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
              />
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category.id
                      ? 'bg-red-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span>{category.name}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Items */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredFAQs.length === 0 ? (
            <div className="text-center py-12">
              <HelpCircle className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No questions found</h3>
              <p className="text-gray-600">Try adjusting your search terms or category filter.</p>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredFAQs.map((faq) => (
                <div key={faq.id} className="bg-gray-50 rounded-lg overflow-hidden">
                  <button
                    onClick={() => toggleItem(faq.id)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-100 transition-colors"
                  >
                    <h3 className="text-lg font-semibold text-gray-900 pr-4">{faq.question}</h3>
                    {openItems.includes(faq.id) ? (
                      <ChevronUp className="h-5 w-5 text-gray-500 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-500 flex-shrink-0" />
                    )}
                  </button>
                  
                  {openItems.includes(faq.id) && (
                    <div className="px-6 pb-4">
                      <div className="border-t border-gray-200 pt-4">
                        <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Still Need Help */}
      <section className="py-16 bg-red-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Still Need Help?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Can't find the answer you're looking for? Our support team is here to help.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2">Emergency Support</h3>
              <p className="text-blue-100 mb-2">24/7 Available</p>
              <p className="text-2xl font-bold">1800-Roadeye-1</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2">WhatsApp Chat</h3>
              <p className="text-blue-100 mb-2">Quick responses</p>
              <p className="text-2xl font-bold">+91 7003565823</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2">Email Support</h3>
              <p className="text-blue-100 mb-2">Detailed help</p>
              <p className="text-lg font-bold">roadeye.in@gmail.com</p>
            </div>
          </div>
          
          <div className="mt-8">
            <a
              href="/contact"
              className="inline-block bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Contact Support Team
            </a>
          </div>
        </div>
      </section>

      {/* Popular Topics */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Popular Help Topics</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <QrCode className="h-8 w-8 text-red-600 mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">QR Code Issues</h3>
              <p className="text-gray-600 text-sm">Troubleshooting QR code scanning problems</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <MapPin className="h-8 w-8 text-green-600 mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Location Problems</h3>
              <p className="text-gray-600 text-sm">GPS accuracy and location sharing issues</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <AlertTriangle className="h-8 w-8 text-red-600 mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Emergency Features</h3>
              <p className="text-gray-600 text-sm">How to use SOS and emergency contacts</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <Shield className="h-8 w-8 text-purple-600 mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Account Security</h3>
              <p className="text-gray-600 text-sm">Privacy settings and data protection</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <HelpCircle className="h-8 w-8 text-orange-600 mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Driver Verification</h3>
              <p className="text-gray-600 text-sm">How to become a verified driver</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <HelpCircle className="h-8 w-8 text-indigo-600 mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">App Updates</h3>
              <p className="text-gray-600 text-sm">Latest features and improvements</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;