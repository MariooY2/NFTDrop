"use client";
import { Award, CheckCircle, Clock, ArrowRight } from "lucide-react";

const WhitelistBenefits = () => {
  // Whitelist benefits
  const whitelistBenefits = [
    "Early access to mint before public sale",
    "Discounted mint price (0.06 ETH vs 0.08 ETH)",
    "Guaranteed allocation of up to 5 NFTs",
    "Exclusive Discord role and channels",
    "Early access to future drops and collaborations",
  ];

  return (
    <section className="py-20 via-purple-900/30 bg-opacity-30 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-purple-900/30 to-gray-900"></div>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 from-purple-400 to-blue-500">
            Whitelist Benefits
          </h2>
          <p className="text-xl text-center text-indigo-200 mb-12">
            Join our whitelist for exclusive benefits and early access
          </p>

          <div className="bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
            <div className="flex items-center justify-center mb-8">
              <Award className="w-12 h-12 text-indigo-400 mr-4" />
              <h3 className="text-2xl font-bold">Whitelist Perks</h3>
            </div>

            <ul className="space-y-4">
              {whitelistBenefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-400 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-lg">{benefit}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 bg-indigo-800 bg-opacity-50 rounded-xl p-6">
              <div className="flex items-center mb-4">
                <Clock className="w-6 h-6 text-indigo-300 mr-2" />
                <h4 className="text-xl font-semibold">Whitelist Timeline</h4>
              </div>
              <ul className="space-y-3 text-indigo-100">
                <li className="flex items-center">
                  <ArrowRight className="w-4 h-4 mr-2 text-indigo-400" />
                  <span>Whitelist applications close: June 10, 2025</span>
                </li>
                <li className="flex items-center">
                  <ArrowRight className="w-4 h-4 mr-2 text-indigo-400" />
                  <span>Whitelist confirmation: June 12, 2025</span>
                </li>
                <li className="flex items-center">
                  <ArrowRight className="w-4 h-4 mr-2 text-indigo-400" />
                  <span>Whitelist mint begins: June 15, 2025 (12:00 UTC)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhitelistBenefits;
