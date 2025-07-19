import Image from "next/image"
import Link from "next/link"
import { ChevronDown, MoveRight, Linkedin, Twitter, Instagram, Github, Pencil, HelpCircle } from "lucide-react"

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh] bg-black text-gray-50">
      <main className="flex-1">
        <section className="relative w-full h-[100dvh] flex flex-col items-center justify-center overflow-hidden">
          <video autoPlay loop muted playsInline className="absolute top-0 left-0 w-full h-full object-cover z-0">
            <source src="/video/bg.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-black/60 z-10" />
          <header className="fixed top-0 left-0 right-0 flex items-center justify-between p-6 md:p-8 z-50 bg-black/30 backdrop-blur-sm">
            <Link href="#" className="flex items-center gap-2" prefetch={false}>
              <div className="w-8 h-8" >
                <Image src="/static/lg2.png" alt="Core-a TNG Logo" width={112} height={112} />
	      </div>
              <span className="text-lg font-thin tracking-wider font-bitcount">CORE-A TNG</span>
            </Link>
            <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
              <Link href="#" className="hover:text-orange-500 transition-colors" prefetch={false}>
                /
              </Link>
              <Link href="#about" className="hover:text-orange-500 transition-colors" prefetch={false}>
                About Us
              </Link>
              <Link href="#team" className="hover:text-orange-500 transition-colors" prefetch={false}>
                Team
              </Link>
            </nav>
          </header>
          <div className="relative z-20 flex flex-col items-center justify-center text-center space-y-6 px-4">
            <div className="flex items-center gap-6">
              <div className="w-20 h-20 md:w-28 md:h-28">
                <Image src="/static/lg2.png" alt="Core-a TNG Logo" width={112} height={112} />
              </div>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tighter font-bitcount">
                Core-a <br /> TeamNG
              </h1>
            </div>
          </div>
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20">
            <Link href="#about" prefetch={false}>
              <ChevronDown className="w-10 h-10 animate-bounce text-white/70 hover:text-white" />
            </Link>
          </div>
        </section>

        <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-neutral-950">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-orange-500">Core-a, Team Nuclear Generator</h2>
                <p className="max-w-[900px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  TeamNG is Developer Group.<br/>We type keyboard every single day.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="team" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-orange-500">About Core-a, TeamNG</h2>
                <p className="max-w-[900px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  May the Force be with you.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 sm:grid-cols-2 lg:gap-12">
              <div className="flex flex-col items-center space-y-4 rounded-lg border border-neutral-800 bg-neutral-950/50 p-6 transition-all hover:scale-105">
                <div className="text-center">
                  <h3 className="text-2xl font-bold">Jihoon Kim</h3>
                  <p className="text-orange-500">Running Human</p>
                  <p className="mt-2 text-sm text-gray-400">
                    Sunlight dancing on the waves.
                  </p>
                </div>
                <div className="flex gap-4">
                  <Link href="https://www.instagram.com/super_fishz/" prefetch={false} className="text-gray-400 hover:text-orange-500">
                    <Instagram className="h-6 w-6" />
                  </Link>
                  <Link href="https://www.instagram.com/run_jazz.run/" prefetch={false} className="text-gray-400 hover:text-orange-500">
                    <Image src="/static/running.svg" alt="Running Icon" width={24} height={24} className="text-border" />
                  </Link>
                  <Link href="https://www.linkedin.com/in/jihoon-kim-developer/" prefetch={false} className="text-gray-400 hover:text-orange-500">
                    <Linkedin className="h-6 w-6" />
                  </Link>
                  <Link href="https://github.com/super-fishz" prefetch={false} className="text-gray-400 hover:text-orange-500">
                    <Github className="h-6 w-6" />
                  </Link>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border border-neutral-800 bg-neutral-950/50 p-6 transition-all hover:scale-105">
                <div className="text-center">
                  <h3 className="text-2xl font-bold">Sangyoon Kim</h3>
                  <p className="text-orange-500">Super Developer</p>
                  <p className="mt-2 text-sm text-gray-400">
                    _
                  </p>
                </div>
                <div className="flex gap-4">
                  <Link href="http://blog.naver.com/gdzergling" prefetch={false} className="text-gray-400 hover:text-orange-500">
                    <Pencil className="h-6 w-6" />
                  </Link>
                  <Link href="https://twitter.com/uranium59" prefetch={false} className="text-gray-400 hover:text-orange-500">
                    <Twitter className="h-6 w-6" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-neutral-800">
        <p className="text-xs text-gray-500">&copy; 2025 Core-a TeamNG. All rights reserved.</p>
      </footer>
    </div>
  )
}
