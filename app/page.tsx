export default function Home() {
  return (
    <main className="min-h-screen bg-[#050816] text-white">
      <section className="max-w-7xl mx-auto px-6 py-10">
        <nav className="flex items-center justify-between mb-24">
          <h1 className="text-3xl font-bold">
            Simply Human
          </h1>

          <button className="bg-orange-500 hover:bg-orange-400 transition px-5 py-3 rounded-xl">
            ☕ Support the Project
          </button>
        </nav>

        <div className="text-center py-24">
          <h2 className="text-6xl md:text-7xl font-bold leading-tight max-w-5xl mx-auto mb-10">
            AI Writing That Still Feels Human
          </h2>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-9">
            Transform robotic AI writing into emotionally intelligent,
            human-centered communication designed for real people.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-10">
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
            <h3 className="text-2xl font-semibold mb-4">
              Humanized AI Writing
            </h3>

            <p className="text-gray-300 leading-8">
              Rewrite robotic AI output into writing that feels emotionally
              aware, intelligent, and natural.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
            <h3 className="text-2xl font-semibold mb-4">
              SEO Optimized Articles
            </h3>

            <p className="text-gray-300 leading-8">
              Create search-optimized content designed for discoverability,
              readability, and long-term organic growth.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
            <h3 className="text-2xl font-semibold mb-4">
              Emotionally Intelligent Tone
            </h3>

            <p className="text-gray-300 leading-8">
              Communicate with authenticity instead of corporate robotic
              language that disconnects from real people.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}