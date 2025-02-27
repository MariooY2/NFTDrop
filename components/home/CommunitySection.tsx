import { FaDiscord, FaTwitter, FaInstagram } from "react-icons/fa";
import { SiOpensea } from "react-icons/si";

type SocialPlatform = {
  name: string;
  color: string;
  url: string;
  icon: React.ReactNode;
};

export default function CommunitySection() {
  const platforms: SocialPlatform[] = [
    {
      name: "Discord",
      color: "bg-indigo-600 hover:bg-indigo-700",
      url: "#",
      icon: <FaDiscord size={24} />,
    },
    {
      name: "Twitter",
      color: "bg-blue-500 hover:bg-blue-600",
      url: "#",
      icon: <FaTwitter size={24} />,
    },
    {
      name: "Instagram",
      color: "bg-pink-600 hover:bg-pink-700",
      url: "#",
      icon: <FaInstagram size={24} />,
    },
    {
      name: "OpenSea",
      color: "bg-blue-600 hover:bg-blue-700",
      url: "#",
      icon: <SiOpensea size={24} />,
    },
  ];

  return (
    <section className="py-16 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-6">
          Join Our <span className="text-purple-400">Community</span>
        </h2>
        <p className="text-gray-300 mb-8 max-w-3xl mx-auto">
          Be part of our growing community of cosmic explorers. Join the
          conversation, get exclusive updates, and participate in special
          events.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          {platforms.map((platform, index) => (
            <a
              href={platform.url}
              key={index}
              className={`${platform.color} text-white font-bold py-3 px-6 rounded-lg transition-colors flex items-center gap-2`}
            >
              {platform.icon}
              <span>{platform.name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
