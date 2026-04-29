'use client'

import { useState } from 'react'

export default function Home() {
  const [selectedPost, setSelectedPost] = useState<number | null>(null)

  const writeups = [
    {
      title: "How to Think About Locks",
      date: "2026-04-25",
      excerpt: "Understanding the fundamentals of locks in systems programming and concurrent code.",
      content: `Locks are a fundamental concept in concurrent programming. When multiple threads or processes access shared resources, we need a way to ensure that only one can modify the resource at a time.

## Why Locks Matter

In systems programming, especially in Rust and C, understanding locks is crucial for:
- Preventing race conditions
- Ensuring data consistency
- Managing resource access in multi-threaded environments
- Building efficient concurrent systems

## Types of Locks

There are several types of locks you'll encounter:

**Mutex (Mutual Exclusion)**: The most common type, ensures only one thread accesses a resource at a time.

**Read-Write Locks**: Allow multiple readers but only one writer, useful when reads are frequent.

**Spinlocks**: Threads continuously check if the lock is available, useful for very short critical sections.

**Semaphores**: More flexible constructs that allow counting resources.

## Thinking About Lock Contention

When multiple threads compete for the same lock, you get contention. High contention means:
- Threads spend more time waiting than working
- Overall system performance degrades
- You should consider lock-free algorithms or other strategies

## Best Practices

1. Keep critical sections small - hold locks for the minimum time needed
2. Avoid nested locks when possible to prevent deadlocks
3. Use appropriate lock types for your use case
4. Profile your code to identify lock bottlenecks
5. Consider lock-free data structures for high-contention scenarios

Mastering locks is essential for writing safe and efficient concurrent code in systems programming.`
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
              <div key={index}>
                {selectedPost === index ? (
                  // Full post view
                  <article className="prose prose-sm max-w-none">
                    <button
                      onClick={() => setSelectedPost(null)}
                      className="text-sm text-neutral-500 hover:text-neutral-900 mb-4 underline"
                    >
                      ← Back
                    </button>
                    <h1 className="text-2xl font-medium mb-2">{post.title}</h1>
                    <time className="text-sm text-neutral-400">{post.date}</time>
                    <div className="mt-6 text-neutral-700 whitespace-pre-wrap leading-relaxed">
                      {post.content}
                    </div>
                  </article>
                ) : (
                  // Preview view
                  <button
                    onClick={() => setSelectedPost(index)}
                    className="group block w-full text-left hover:opacity-70 transition-opacity"
                  >
                    <time className="text-sm text-neutral-400">{post.date}</time>
                    <h3 className="text-lg font-medium mt-1 group-hover:text-neutral-600 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-neutral-500 mt-1">{post.excerpt}</p>
                  </button>
                )}
              </div>
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
