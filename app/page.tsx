export default function Home() {
  const faqs = [
    {
      q: "How does the virality prediction work?",
      a: "Our AI analyzes your post's content, structure, hashtags, posting time, and compares it against thousands of high-performing LinkedIn posts to generate an accurate engagement score."
    },
    {
      q: "Do I need to connect my LinkedIn account?",
      a: "Basic predictions work without connecting LinkedIn. Connecting your account unlocks network-aware scoring that factors in your follower demographics and past post performance."
    },
    {
      q: "Can I cancel my subscription anytime?",
      a: "Yes. Cancel anytime from your billing portal with no questions asked. You keep access until the end of your billing period."
    }
  ];

  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      {/* Hero */}
      <section className="text-center mb-20">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          AI-Powered
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Predict LinkedIn Post Virality{" "}
          <span className="text-[#58a6ff]">Before You Publish</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Paste your draft, get an instant virality score, and receive AI suggestions to maximize reach — before you hit post.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start Predicting — $14/mo
        </a>
        <p className="text-xs text-[#8b949e] mt-3">Cancel anytime. No contracts.</p>

        {/* Social proof */}
        <div className="flex justify-center gap-8 mt-12 text-center">
          <div>
            <p className="text-2xl font-bold text-white">3.2x</p>
            <p className="text-xs text-[#8b949e]">avg engagement lift</p>
          </div>
          <div className="border-l border-[#30363d]"></div>
          <div>
            <p className="text-2xl font-bold text-white">12k+</p>
            <p className="text-xs text-[#8b949e]">posts analyzed</p>
          </div>
          <div className="border-l border-[#30363d]"></div>
          <div>
            <p className="text-2xl font-bold text-white">94%</p>
            <p className="text-xs text-[#8b949e]">prediction accuracy</p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 max-w-sm mx-auto text-center shadow-lg shadow-[#58a6ff]/10">
          <p className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro</p>
          <p className="text-5xl font-bold text-white mb-1">$14</p>
          <p className="text-[#8b949e] text-sm mb-6">/month</p>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              "Unlimited virality predictions",
              "AI-powered improvement suggestions",
              "Best time-to-post recommendations",
              "LinkedIn network analysis",
              "Hashtag optimization",
              "Post history & analytics"
            ].map((f) => (
              <li key={f} className="flex items-center gap-2">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span className="text-[#c9d1d9]">{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-6 py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section>
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <p className="font-semibold text-white mb-2">{q}</p>
              <p className="text-[#8b949e] text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-xs text-[#8b949e] mt-16">
        © {new Date().getFullYear()} LinkedIn Post Viral Predictor. All rights reserved.
      </footer>
    </main>
  );
}
