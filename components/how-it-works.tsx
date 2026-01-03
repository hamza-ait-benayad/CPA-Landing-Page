export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Click Download",
      description: "Hit the download button to get the modded version",
      icon: "🎮",
    },
    {
      number: "02",
      title: "Complete Verification",
      description: "Complete quick verification and install the modded game or app",
      icon: "✅",
    },
    {
      number: "03",
      title: "Enjoy Premium Features",
      description: "Launch and enjoy unlocked premium features, unlimited resources, and no ads",
      icon: "🚀",
    },
  ]

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-background relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_24%,rgba(255,0,110,.05)_25%,rgba(255,0,110,.05)_26%,transparent_27%,transparent_74%,rgba(255,0,110,.05)_75%,rgba(255,0,110,.05)_76%,transparent_77%,transparent)] bg-[length:50px_50px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
            How It <span className="gradient-accent bg-clip-text text-transparent">Works</span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Get started in just 3 simple steps
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="p-6 sm:p-8 rounded-xl sm:rounded-2xl border border-border bg-muted/30 hover:border-primary/50 transition-all duration-300 h-full">
                <div className="text-4xl sm:text-5xl mb-3 sm:mb-4">{step.icon}</div>
                <div className="text-4xl sm:text-5xl font-bold text-primary/30 mb-3 sm:mb-4">{step.number}</div>
                <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-foreground">{step.title}</h3>
                <p className="text-sm sm:text-base text-muted-foreground">{step.description}</p>
              </div>

              {/* Connector line - hidden on mobile, visible on tablet+ */}
              {index < steps.length - 1 && (
                <div className="hidden sm:block lg:hidden absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-primary to-secondary" />
              )}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary to-secondary" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
