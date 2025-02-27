import {
  Clock,
  Users,
  Zap,
  Award,
  CheckCircle,
  Rocket,
  ArrowRight,
} from "lucide-react";

function page() {
  // Roadmap phases
  const roadmapPhases = [
    {
      phase: "Phase 1: Community Building",
      date: "April - May 2025",
      description:
        "Growing our community across Discord and Twitter. Early supporters get whitelist spots.",
      icon: <Users className="w-8 h-8 text-indigo-500" />,
      completed: true,
    },
    {
      phase: "Phase 2: Whitelist Sale",
      date: "June 15, 2025",
      description:
        "Exclusive minting for whitelisted members at a discounted price.",
      icon: <CheckCircle className="w-8 h-8 text-indigo-500" />,
      completed: false,
    },
    {
      phase: "Phase 3: Public Sale",
      date: "June 20, 2025",
      description: "Open minting for everyone until sold out.",
      icon: <Zap className="w-8 h-8 text-indigo-500" />,
      completed: false,
    },
    {
      phase: "Phase 4: Metaverse Integration",
      date: "July 2025",
      description:
        "Launch of our play-to-earn game with exclusive access for NFT holders.",
      icon: <Rocket className="w-8 h-8 text-indigo-500" />,
      completed: false,
    },
  ];

  // Whitelist benefits
  const whitelistBenefits = [
    "Early access to mint before public sale",
    "Discounted mint price (0.06 ETH vs 0.08 ETH)",
    "Guaranteed allocation of up to 5 NFTs",
    "Exclusive Discord role and channels",
    "Early access to future drops and collaborations",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-indigo-900 text-white">
     

      {/* Whitelist Section */}
      <section className="py-20 via-purple-900/30 bg-opacity-30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4">
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
                    <span>
                      Whitelist mint begins: June 15, 2025 (12:00 UTC)
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            Project Roadmap
          </h2>

          <div className="max-w-4xl mx-auto">
            {roadmapPhases.map((phase, index) => (
              <div key={index} className="relative mb-12 pl-12 md:pl-0">
                {/* Timeline connector */}
                {index < roadmapPhases.length - 1 && (
                  <div className="absolute left-4 top-8 w-0.5 h-full bg-indigo-700 md:left-1/2 md:-ml-0.5"></div>
                )}

                {/* Timeline item */}
                <div
                  className={`flex flex-col md:flex-row ${
                    index % 2 === 0 ? "" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Icon */}
                  <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-indigo-900 border-4 border-indigo-700 z-10 md:left-1/2 md:-ml-4">
                    <div
                      className={`absolute inset-0 rounded-full ${
                        phase.completed ? "bg-green-500" : "bg-indigo-500"
                      } animate-pulse`}
                      style={{ opacity: "0.5" }}
                    ></div>
                  </div>

                  {/* Content */}
                  <div
                    className={`w-full md:w-1/2 ${
                      index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                    }`}
                  >
                    <div className="bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-xl p-6 shadow-lg">
                      <div className="flex items-center mb-4">
                        {phase.icon}
                        <h3 className="text-xl font-bold ml-3">
                          {phase.phase}
                        </h3>
                      </div>
                      <div className="mb-3 text-indigo-300">{phase.date}</div>
                      <p className="text-gray-300">{phase.description}</p>
                      {phase.completed && (
                        <div className="mt-4 inline-block bg-green-900 bg-opacity-30 text-green-400 text-sm font-semibold py-1 px-3 rounded-full">
                          Completed
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default page;
