"use client";
export default function MintPage() {
  const handleWhitelistJoin = () => {
    console.log("Joining whitelist...");
    alert("You have been added to the whitelist!");
  };

  return (
    <div className="relative h-screen max-h-[55rem] bg-gray-900 text-white flex items-center justify-center py-10 overflow-auto">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-purple-900/30 to-gray-900"></div>
      <section className="text-center relative z-10 px-4 max-w-4xl mx-auto">
        <h1 className="lg:text-5xl text-3xl text-transparent bg-clip-text bg-gradient-to-r from-purple-200 to-blue-300 mb-7">
          Minting is Unavailable now and will be available soon
        </h1>
        <button
          className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors"
          onClick={handleWhitelistJoin}
        >
          Join Whitelist
        </button>
      </section>
    </div>
  );
}
