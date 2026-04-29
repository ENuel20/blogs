export default function Home() {
  const writeups = [
    {
      title: "How to Think About Locks",
      date: "2026-04-25",
      excerpt: "Understanding the fundamentals of locks in systems programming and concurrent code.",
      slug: "https://www.linkedin.com/pulse/how-think-locks-onanaroghene-omokefe-b524e/?trackingId=TW4Jx8w5mTJK5nvPJgOqJg%3D%3D"
    }
  ]

  const links = [
    { name: "GitHub", url: "https://github.com/ENuel20" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/onanaroghene-omokefe-648439245/" },
    { name: "Email", url: "mailto:emmaonana18@gmail.com" }
  ]

  return (
    <main className="min-h-screen bg-white text-neutral-900">
      <div className="max-w-2xl mx-auto px-6 py-16">
        {/* Header */}
        <header className="mb-16">
          <h1 className="text-2xl font-medium mb-2">Onanaroghene</h1>
          <p className="text-neutral-500">
            Exploring locks, networking, virtual memory, and systems programming in Rust and C.
          </p>
        </header>

        {/* Write-ups */}
        <section className="mb-16">
          <h2 className="text-sm font-medium text-neutral-400 uppercase tracking-wide mb-6">
            Write-ups
          </h2>
          <div className="space-y-8">
            {writeups.map((post, index) => (
              <article key={index}>
                <a href={post.slug} className="group block">
                  <time className="text-sm text-neutral-400">{post.date}</time>
                  <h3 className="text-lg font-medium mt-1 group-hover:text-neutral-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-neutral-500 mt-1">{post.excerpt}</p>
                </a>
              </article>
            ))}
          </div>
        </section>

        {/* Links */}
        <section className="mb-16">
          <h2 className="text-sm font-medium text-neutral-400 uppercase tracking-wide mb-6">
            Links
          </h2>
          <div className="flex flex-wrap gap-6">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-900 hover:text-neutral-500 transition-colors underline underline-offset-4"
              >
                {link.name}
              </a>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="pt-8 border-t border-neutral-100">
          <p className="text-sm text-neutral-400">
            © 2026
          </p>
        </footer>
      </div>
    </main>
  )
}
