"use client";
import { Users, Zap, CheckCircle, Rocket, CheckSquare } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

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

  // Framer Motion variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const pulseVariants = {
    pulse: {
      scale: [1, 1.2, 1],
      opacity: [0.7, 1, 0.7],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const achievementVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: {
      opacity: 1,
      height: "auto",
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background elements with framer motion */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-purple-900/20 to-gray-900 opacity-80"></div>
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <motion.div
          initial={{ opacity: 0.2 }}
          animate={{ opacity: 0.8 }}
          transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
          className="absolute -top-24 -left-24 w-64 h-64 bg-purple-700/10 rounded-full blur-3xl"
        ></motion.div>
        <motion.div
          initial={{ opacity: 0.1 }}
          animate={{ opacity: 0.7 }}
          transition={{
            duration: 7,
            delay: 1,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute top-1/2 -right-32 w-80 h-80 bg-indigo-600/10 rounded-full blur-3xl"
        ></motion.div>
        <motion.div
          initial={{ opacity: 0.2 }}
          animate={{ opacity: 0.6 }}
          transition={{
            duration: 6,
            delay: 2,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute bottom-0 left-1/3 w-72 h-72 bg-blue-700/10 rounded-full blur-3xl"
        ></motion.div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-5xl text-center font-bold text-white mb-4">
            Roadmap
          </h1>
          <p className="text-xl text-center text-indigo-300 mb-16 max-w-2xl mx-auto">
            Our journey to create the ultimate NFT experience for the Cosmic
            Voyagers community
          </p>
        </motion.div>

        <motion.div
          className="max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {roadmapPhases.map((phase, index) => {
            const isActive = activePhase === index;
            return (
              <motion.div
                key={index}
                className="relative mb-16 pl-12 md:pl-0"
                variants={itemVariants}
              >
                {/* Timeline connector */}
                {index < roadmapPhases.length - 1 && (
                  <motion.div
                    className="absolute left-4 top-8 w-0.5 bg-indigo-700/70 md:left-1/2 md:-ml-0.5"
                    initial={{ height: 0 }}
                    animate={{ height: "100%" }}
                    transition={{ duration: 1, delay: 0.5 }}
                  ></motion.div>
                )}

                {/* Timeline item */}
                <div
                  className={`flex flex-col md:flex-row ${
                    index % 2 === 0 ? "" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Icon */}
                  <motion.div
                    className="absolute left-0 top-0 w-8 h-8 rounded-full bg-indigo-900 border-4 border-indigo-700 z-10 md:left-1/2 md:-ml-4 cursor-pointer"
                    onClick={() => setActivePhase(isActive ? null : index)}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <motion.div
                      className={`absolute inset-0 rounded-full ${
                        phase.completed ? "bg-green-500" : "bg-indigo-500"
                      } opacity-50`}
                      variants={pulseVariants}
                      animate="pulse"
                    ></motion.div>
                  </motion.div>

                  {/* Content */}
                  <div
                    className={`w-full md:w-1/2 ${
                      index % 2 === 0 ? "md:pr-16" : "md:pl-16"
                    }`}
                  >
                    <motion.div
                      className={`bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-xl p-6 shadow-xl border border-indigo-900/30`}
                      onClick={() => setActivePhase(isActive ? null : index)}
                      whileHover={{
                        scale: 1.02,
                        backgroundColor: "rgba(31, 41, 55, 0.7)",
                        boxShadow:
                          "0 20px 25px -5px rgba(79, 70, 229, 0.1), 0 10px 10px -5px rgba(79, 70, 229, 0.04)",
                      }}
                      whileTap={{ scale: 0.98 }}
                      animate={
                        isActive
                          ? {
                              backgroundColor: "rgba(31, 41, 55, 0.7)",
                              boxShadow:
                                "0 20px 25px -5px rgba(79, 70, 229, 0.2), 0 10px 10px -5px rgba(79, 70, 229, 0.1)",
                            }
                          : {}
                      }
                    >
                      <div className="flex items-center mb-4">
                        <motion.div
                          className="p-2 bg-indigo-900/40 rounded-lg"
                          whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                          transition={{ duration: 0.5 }}
                        >
                          {phase.icon}
                        </motion.div>
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
                      <AnimatePresence>
                        {isActive && (
                          <motion.div
                            variants={achievementVariants}
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            className="mt-5 overflow-hidden"
                          >
                            <div className="border-t border-indigo-800/50 pt-4 mt-2">
                              <h4 className="font-semibold text-indigo-200 mb-3">
                                Key Milestones:
                              </h4>
                              <ul className="space-y-2">
                                {phase.achievements.map((achievement, i) => (
                                  <motion.li
                                    key={i}
                                    className="flex items-start"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                  >
                                    <CheckSquare className="w-5 h-5 text-indigo-400 mr-2 flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-300">
                                      {achievement}
                                    </span>
                                  </motion.li>
                                ))}
                              </ul>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      {phase.completed ? (
                        <motion.div
                          className="mt-4 inline-block bg-green-900/30 text-green-400 text-sm font-semibold py-1.5 px-4 rounded-full border border-green-500/20"
                          whileHover={{
                            y: -2,
                            boxShadow: "0 4px 6px -1px rgba(0, 255, 0, 0.1)",
                          }}
                        >
                          Completed
                        </motion.div>
                      ) : (
                        <motion.div
                          className="mt-4 inline-block bg-indigo-900/30 text-indigo-400 text-sm font-semibold py-1.5 px-4 rounded-full border border-indigo-500/20"
                          whileHover={{
                            y: -2,
                            boxShadow: "0 4px 6px -1px rgba(79, 70, 229, 0.1)",
                          }}
                        >
                          {index === 1 ? "In Progress" : "Upcoming"}
                        </motion.div>
                      )}

                      {!isActive && (
                        <motion.div
                          className="mt-4 text-indigo-400 text-sm ml-2 inline-block cursor-pointer"
                          initial={{ opacity: 0.7 }}
                          whileHover={{ opacity: 1, scale: 1.05 }}
                        >
                          Click to expand
                        </motion.div>
                      )}
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Roadmap;
