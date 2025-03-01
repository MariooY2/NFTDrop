"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section className="py-16 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-6">
              About <span className="text-purple-400">Cosmic Voyagers</span>
            </h2>
            <p className="text-gray-300 mb-6">
              Cosmic Voyagers is a collection of 10,000 unique NFTs living on
              the Ethereum blockchain. Each Voyager is meticulously crafted with
              over 200 possible traits, ensuring that every piece in your
              collection is truly one-of-a-kind.
            </p>
            <p className="text-gray-300 mb-6">
              As a Cosmic Voyager holder, you&apos;ll gain exclusive access to
              our Voyager Club, future drops, interactive experiences, and a
              voice in our DAO that helps guide the project&apos;s future.
            </p>
            <motion.div
              className="flex gap-4"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/roadmap"
                  className="bg-transparent border border-purple-500 text-purple-400 hover:bg-purple-900/30 font-bold py-2 px-6 rounded-lg transition-colors inline-block"
                >
                  View Roadmap
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              className="w-full h-96 bg-gray-700 rounded-xl overflow-hidden relative"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src="/images/5.png"
                alt="Cosmic Voyagers Collection Preview"
                fill
                className="object-cover"
              />
            </motion.div>
            <motion.div
              className="absolute -top-5 -left-5 w-24 h-24 bg-purple-600 rounded-xl flex items-center justify-center"
              initial={{ rotate: 0 }}
              animate={{ rotate: 12 }}
              whileHover={{ scale: 1.1, rotate: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-xl font-bold">10K</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
