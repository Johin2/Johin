import resumePdf from '../assets/Resume_Johin.pdf';

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 sm:py-32 border-b border-border">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-muted-foreground">
              <span>06</span>
              <span>/</span>
              <span>Contact</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-foreground">
              Get in Touch
            </h2>
            <p className="text-base text-muted-foreground max-w-md leading-relaxed pt-2">
              Whether you are looking to build a production AI system, integrate developer tools, or discuss full-stack engineering work, feel free to reach out.
            </p>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <div className="p-6 rounded-lg border border-border bg-card space-y-6">
              <div>
                <span className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground block mb-1">
                  Email
                </span>
                <a
                  href="mailto:Johinjohny144@gmail.com"
                  className="text-lg sm:text-xl font-mono font-medium text-foreground hover:underline transition-all inline-flex items-center gap-2"
                >
                  <span>Johinjohny144@gmail.com</span>
                  <span className="text-sm text-muted-foreground">↗</span>
                </a>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-border">
                <div>
                  <span className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground block mb-1">
                    Phone / WhatsApp
                  </span>
                  <a
                    href="tel:+919653650060"
                    className="font-mono text-sm text-foreground hover:underline"
                  >
                    +91 9653 650 060
                  </a>
                </div>
                <div>
                  <span className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground block mb-1">
                    Location
                  </span>
                  <span className="font-mono text-sm text-foreground">
                    Mumbai, India (IST / UTC+5:30)
                  </span>
                </div>
              </div>

              <div className="pt-4 border-t border-border flex flex-wrap items-center justify-between gap-4 font-mono text-xs">
                <div className="flex items-center gap-4">
                  <a
                    href="https://github.com/Johin2"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground hover:underline"
                  >
                    GitHub ↗
                  </a>
                  <a
                    href="https://www.linkedin.com/in/johin/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground hover:underline"
                  >
                    LinkedIn ↗
                  </a>
                  <a
                    href="https://orcid.org/0009-0006-7220-7459"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground hover:underline"
                  >
                    ORCID ↗
                  </a>
                </div>

                <a
                  href={resumePdf}
                  download="Johin_Johny_Resume.pdf"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-foreground text-background hover:opacity-90 transition-opacity font-medium"
                >
                  <span>Download Resume</span>
                  <span>↓</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
