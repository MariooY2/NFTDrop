"use client"
import Image from "next/image";
import { motion } from "framer-motion";

type TeamMember = {
  name: string;
  role: string;
  image: string;
};

export default function TeamSection() {
  const teamMembers: TeamMember[] = [
    {
      name: "Alex Stargazer",
      role: "Founder & Artist",
      image: "/images/3.png",
    },
    {
      name: "Zoe Quantum",
      role: "Lead Developer",
      image: "/images/6.png",
    },
    {
      name: "Max Nebula",
      role: "Community Manager",
      image: "/images/7.png",
    },
    {
      name: "Ella Cosmos",
      role: "Marketing Director",
      image: "/images/8.png",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const memberVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
    hover: {
      y: -10,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          Meet the <span className="text-purple-400">Team</span>
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 rounded-xl overflow-hidden text-center"
              variants={memberVariants}
              whileHover="hover"
            >
              <motion.div
                className="relative h-64 w-full overflow-hidden"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </motion.div>
              <div className="p-5">
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-purple-400">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
