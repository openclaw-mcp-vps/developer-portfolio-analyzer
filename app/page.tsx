export default function Home() {
  const faqs = [
    {
      q: 'What does the analyzer actually check?',
      a: 'It scans commit history, repo quality, language diversity, collaboration patterns, README quality, and flags common red flags like copied code or inactive accounts.'
    },
    {
      q: 'Do I need a GitHub token to use it?',
      a: 'No token needed to get started. For deeper analysis on private-adjacent signals, you can optionally connect your own GitHub token.'
    },
    {
      q: 'Is the $15/mo plan per seat or per team?',
      a: 'The $15/mo plan covers one recruiter seat with unlimited profile scans. Team plans are available on request.'
    }
  ]

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          GitHub Hiring Intelligence
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Analyze GitHub Profiles for{' '}
          <span className="text-[#58a6ff]">Real Hiring Signals</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Stop guessing. Instantly surface code quality, collaboration patterns, skill depth, and red flags — so you hire with confidence.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start Analyzing — $15/mo
        </a>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          {[
            { icon: '🔍', title: 'Skill Depth Score', desc: 'Measures language mastery and project complexity across repos.' },
            { icon: '🤝', title: 'Collaboration Signals', desc: 'PRs, reviews, issues — see how candidates work with teams.' },
            { icon: '🚩', title: 'Red Flag Detection', desc: 'Spot copied code, inflated stars, and inactive accounts instantly.' }
          ].map((f) => (
            <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="text-2xl mb-2">{f.icon}</div>
              <div className="font-semibold text-white mb-1">{f.title}</div>
              <div className="text-sm text-[#8b949e]">{f.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center shadow-lg">
          <div className="text-[#58a6ff] text-xs font-bold uppercase tracking-widest mb-2">Recruiter Plan</div>
          <div className="text-5xl font-extrabold text-white mb-1">$15</div>
          <div className="text-[#8b949e] text-sm mb-6">per month · cancel anytime</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              'Unlimited GitHub profile scans',
              'Skill & quality scoring dashboard',
              'Red flag & plagiarism detection',
              'Collaboration pattern analysis',
              'CSV export for ATS integration',
              'Email support'
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm">
                <span className="text-[#58a6ff] mt-0.5">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg text-base transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <div className="font-semibold text-white mb-2">{faq.q}</div>
              <div className="text-sm text-[#8b949e]">{faq.a}</div>
            </div>
          ))}
        </div>
        <p className="text-center text-xs text-[#484f58] mt-12">
          © {new Date().getFullYear()} DevProfile Analyzer. Built for technical recruiters.
        </p>
      </section>
    </main>
  )
}
