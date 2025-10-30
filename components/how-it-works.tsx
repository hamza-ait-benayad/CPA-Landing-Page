export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Click Download",
      description: "Hit the download button and start the process",
      icon: "🎮",
    },
    {
      number: "02",
      title: "Verify & Install",
      description: "Complete quick verification and install the game",
      icon: "✅",
    },
    {
      number: "03",
      title: "Play & Enjoy",
      description: "Launch the game and start playing immediately",
      icon: "🚀",
    },
  ]

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_24%,rgba(255,0,110,.05)_25%,rgba(255,0,110,.05)_26%,transparent_27%,transparent_74%,rgba(255,0,110,.05)_75%,rgba(255,0,110,.05)_76%,transparent_77%,transparent)] bg-[length:50px_50px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            How It <span className="gradient-accent bg-clip-text text-transparent">Works</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Get started in just 3 simple steps</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="p-8 rounded-2xl border border-border bg-muted/30 hover:border-primary/50 transition-all duration-300 h-full">
                <div className="text-5xl mb-4">{step.icon}</div>
                <div className="text-5xl font-bold text-primary/30 mb-4">{step.number}</div>
                <h3 className="text-2xl font-bold mb-3 text-foreground">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>

              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary to-secondary" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
