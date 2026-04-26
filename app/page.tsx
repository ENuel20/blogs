export default function Home() {
  const writeups = [
    {
      title: "Getting Started with Web Development",
      date: "2026-04-20",
      excerpt: "A beginner's guide to understanding the fundamentals of building for the web.",
      slug: "#"
    },
    {
      title: "Notes on Minimalist Design",
      date: "2026-04-15",
      excerpt: "Less is more. Exploring the principles behind clean, functional interfaces.",
      slug: "#"
    },
    {
      title: "The Art of Writing Clear Documentation",
      date: "2026-04-10",
      excerpt: "How to communicate complex ideas simply and effectively.",
      slug: "#"
    }
  ]

  const links = [
    { name: "GitHub", url: "https://github.com" },
    { name: "Twitter", url: "https://twitter.com" },
    { name: "Email", url: "mailto:hello@example.com" },
    { name: "RSS", url: "/rss.xml" }
  ]

  return (
    <main className="min-h-screen bg-white text-neutral-900">
      <div className="max-w-2xl mx-auto px-6 py-16">
        {/* Header */}
        <header className="mb-16">
          <h1 className="text-2xl font-medium mb-2">Your Name</h1>
          <p className="text-neutral-500">
            Write-ups and links on things I find interesting.
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
