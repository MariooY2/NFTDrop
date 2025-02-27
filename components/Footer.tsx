import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold text-purple-400 mb-4">
              Cosmic Voyagers
            </h3>
            <p className="text-gray-400">
              A unique collection of 10,000 digital explorers on the Ethereum
              blockchain.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/" className="hover:text-purple-400">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/collection" className="hover:text-purple-400">
                  Collection
                </Link>
              </li>
              <li>
                <Link href="/mint" className="hover:text-purple-400">
                  Mint
                </Link>
              </li>
              <li>
                <Link href="/roadmap" className="hover:text-purple-400">
                  Roadmap
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Community</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-purple-400">
                  Discord
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-400">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-400">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-400">
                  OpenSea
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Subscribe</h4>
            <p className="text-gray-400 mb-2">Get the latest updates</p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="bg-gray-800 text-white px-4 py-2 rounded-lg flex-grow"
              />
              <button
                type="submit"
                className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-lg"
              >
                →
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500">
          <p>© 2025 Cosmic Voyagers. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
