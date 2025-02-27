import Image from "next/image";

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

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">
          Meet the <span className="text-purple-400">Team</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-xl overflow-hidden text-center hover:transform hover:scale-105 transition-transform"
            >
              <div className="relative h-64 w-full">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-purple-400">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
