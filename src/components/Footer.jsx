export default function Footer() {
  return (
    <footer className="py-12 bg-background text-foreground">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="space-y-1">
            <div className="font-semibold text-sm tracking-tight uppercase">
              Johin Johny
            </div>
            <div className="font-mono text-xs text-muted-foreground">
              AI Engineer &amp; Software Builder
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-6 font-mono text-xs text-muted-foreground">
            <a
              href="https://github.com/Johin2"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/johin/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="mailto:Johinjohny144@gmail.com"
              className="hover:text-foreground transition-colors"
            >
              Email
            </a>
            <a
              href="https://arxiv.org/abs/2604.10508"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              arXiv
            </a>
          </div>

          <div className="font-mono text-xs text-muted-foreground">
            © 2026 Johin Johny
          </div>
        </div>
      </div>
    </footer>
  );
}
