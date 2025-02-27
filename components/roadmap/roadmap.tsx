"use client";
import { Users, Zap, CheckCircle, Rocket, CheckSquare } from "lucide-react";
import { useState, useEffect } from "react";

const Roadmap = () => {
  const [activePhase, setActivePhase] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const roadmapPhases = [
    {
      phase: "Phase 1: Community Building",
      date: "April - May 2025",
      description:
        "Growing our community across Discord and Twitter. Early supporters get whitelist spots.",
      icon: <Users className="w-8 h-8 text-indigo-500" />,
      completed: true,
      achievements: [
        "Launched Discord community with 5,000+ members",
        "Twitter following grew to 10,000+",
        "Partnered with 3 leading NFT projects",
        "Hosted 5 AMAs with team and advisors",
      ],
    },
    {
      phase: "Phase 2: Whitelist Sale",
      date: "June 15, 2025",
      description:
        "Exclusive minting for whitelisted members at a discounted price.",
      icon: <CheckCircle className="w-8 h-8 text-indigo-500" />,
      completed: false,
      achievements: [
        "2,500 whitelist spots allocated",
        "Discounted price of 0.06 ETH",
        "48-hour exclusive minting window",
        "Special access to holder-only community channels",
      ],
    },
    {
      phase: "Phase 3: Public Sale",
      date: "June 20, 2025",
      description: "Open minting for everyone until sold out.",
      icon: <Zap className="w-8 h-8 text-indigo-500" />,
      completed: false,
      achievements: [
        "Remaining 7,500 NFTs available at 0.08 ETH",
        "Limited to 5 NFTs per wallet",
        "Rarity reveal 24 hours after sellout",
        "Secondary marketplace listings go live",
      ],
    },
    {
      phase: "Phase 4: Metaverse Integration",
      date: "July 2025",
      description:
        "Launch of our play-to-earn game with exclusive access for NFT holders.",
      icon: <Rocket className="w-8 h-8 text-indigo-500" />,
      completed: false,
      achievements: [
        "Launch of Cosmic Voyagers play-to-earn game",
        "In-game utility for NFT holders",
        "Token airdrop for early supporters",
        "Partnership announcements with major metaverse platforms",
      ],
    },
  ];

  return (
    <section className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-purple-900/20 to-gray-900 opacity-80"></div>
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-purple-700/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 -right-32 w-80 h-80 bg-indigo-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-blue-700/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div
          className={`transition-all duration-1000 ease-out transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h1 className="text-5xl text-center font-bold text-white mb-4">
            Roadmap
          </h1>
          <p className="text-xl text-center text-indigo-300 mb-16 max-w-2xl mx-auto">
            Our journey to create the ultimate NFT experience for the Cosmic
            Voyagers community
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {roadmapPhases.map((phase, index) => {
            const isActive = activePhase === index;
            return (
              <div
                key={index}
                className={`relative mb-16 pl-12 md:pl-0 transition-all duration-700 ease-out transform ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-20"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                {/* Timeline connector */}
                {index < roadmapPhases.length - 1 && (
                  <div className="absolute left-4 top-8 w-0.5 h-full bg-indigo-700/70 md:left-1/2 md:-ml-0.5"></div>
                )}

                {/* Timeline item */}
                <div
                  className={`flex flex-col md:flex-row ${
                    index % 2 === 0 ? "" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Icon */}
                  <div
                    className="absolute left-0 top-0 w-8 h-8 rounded-full bg-indigo-900 border-4 border-indigo-700 z-10 md:left-1/2 md:-ml-4 cursor-pointer transition-all duration-300 hover:scale-110"
                    onClick={() => setActivePhase(isActive ? null : index)}
                  >
                    <div
                      className={`absolute inset-0 rounded-full ${
                        phase.completed ? "bg-green-500" : "bg-indigo-500"
                      } ${
                        isActive
                          ? "animate-ping opacity-30"
                          : "animate-pulse opacity-50"
                      }`}
                    ></div>
                  </div>

                  {/* Content */}
                  <div
                    className={`w-full md:w-1/2 ${
                      index % 2 === 0 ? "md:pr-16" : "md:pl-16"
                    }`}
                  >
                    <div
                      className={`bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-xl p-6 shadow-xl border border-indigo-900/30 transition-all duration-300 ${
                        isActive
                          ? "bg-opacity-70 shadow-indigo-500/20"
                          : "hover:bg-opacity-60"
                      }`}
                      onClick={() => setActivePhase(isActive ? null : index)}
                    >
                      <div className="flex items-center mb-4">
                        <div className="p-2 bg-indigo-900/40 rounded-lg">
                          {phase.icon}
                        </div>
                        <h3 className="text-2xl font-bold ml-3 text-white">
                          {phase.phase}
                        </h3>
                      </div>
                      <div className="mb-3 text-indigo-300 font-medium">
                        {phase.date}
                      </div>
                      <p className="text-gray-300 text-lg">
                        {phase.description}
                      </p>

                      {/* Expandable achievements */}
                      <div
                        className={`mt-5 overflow-hidden transition-all duration-500 ${
                          isActive
                            ? "max-h-96 opacity-100"
                            : "max-h-0 opacity-0"
                        }`}
                      >
                        <div className="border-t border-indigo-800/50 pt-4 mt-2">
                          <h4 className="font-semibold text-indigo-200 mb-3">
                            Key Milestones:
                          </h4>
                          <ul className="space-y-2">
                            {phase.achievements.map((achievement, i) => (
                              <li key={i} className="flex items-start">
                                <CheckSquare className="w-5 h-5 text-indigo-400 mr-2 flex-shrink-0 mt-0.5" />
                                <span className="text-gray-300">
                                  {achievement}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {phase.completed ? (
                        <div className="mt-4 inline-block bg-green-900/30 text-green-400 text-sm font-semibold py-1.5 px-4 rounded-full border border-green-500/20">
                          Completed
                        </div>
                      ) : (
                        <div className="mt-4 inline-block bg-indigo-900/30 text-indigo-400 text-sm font-semibold py-1.5 px-4 rounded-full border border-indigo-500/20">
                          {index === 0 ? "In Progress" : "Upcoming"}
                        </div>
                      )}

                      {!isActive && (
                        <div className="mt-4 text-indigo-400 text-sm ml-2 inline-block cursor-pointer">
                          Click to {isActive ? "collapse" : "expand"}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
