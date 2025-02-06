import { NavBarDemo } from "@/components/ui/navbar-demo"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Github, Linkedin, Briefcase, MapPin } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { TimelineDemo } from "@/components/ui/timeline-demo"
import { TechStack } from "@/components/ui/tech-stack"
import { ProjectsShowcase } from "@/components/ui/projects-showcase"
import { StackedCircularFooter } from "@/components/ui/stacked-circular-footer"

export default function Home() {
  return (
    <main className="relative flex flex-col items-center scroll-smooth">
      <NavBarDemo />
      <section id="home" className="relative w-full min-h-screen flex flex-col items-center justify-center">
        <div className="flex flex-col items-center text-center space-y-8 max-w-3xl mx-auto px-4">
          <div className="bg-background/5 border border-border backdrop-blur-lg p-1 rounded-full shadow-lg">
            <Avatar className="h-24 w-24">
              <AvatarImage src="/avatar.png" alt="Jeiwinfrey" />
              <AvatarFallback>JF</AvatarFallback>
            </Avatar>
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold">
            Hi 👋, I&apos;m Jeiwinfrey
          </h1>
          <p className="text-lg md:text-xl max-w-[600px] text-muted-foreground">
            A passionate sophomore front-end developer.
          </p>
          <div className="flex items-center space-x-2">
            <Link href="/unavailable">
              <div className="inline-flex items-center px-6 py-2 rounded-full bg-green-500/10 border border-green-500/20 backdrop-blur-lg hover:bg-green-500/20 transition-colors cursor-pointer">
                <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                <span className="text-sm font-medium text-green-500">Open to work</span>
              </div>
            </Link>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-6">
              <div className="inline-flex items-center gap-2 text-muted-foreground">
                <Briefcase className="w-4 h-4" />
                Front-end Developer
              </div>
            <Link 
              href="https://www.google.com/maps/place/Philippines" 
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-all cursor-pointer"
              target="_blank"
            >
              <MapPin className="w-4 h-4" />
              Philippines
            </Link>
            <Link 
              href="https://www.linkedin.com/in/jeiwinfrey" 
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-all cursor-pointer"
              target="_blank"
            >
              <Linkedin className="w-4 h-4" />
              Connect on Linkedin
            </Link>
            <Link 
              href="https://github.com/jeiwinfrey" 
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-all cursor-pointer"
              target="_blank"
            >
              <Github className="w-4 h-4" />
              Github
            </Link>
          </div>
        </div>
      </section>
      <section id="about" className="relative w-full py-20 overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-8 max-w-xl">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Front - end Developer & UI Enthusiast
                </h2>
                <div className="w-12 h-1 bg-primary rounded"></div>
              </div>
              <p className="text-muted-foreground text-lg leading-relaxed">
                As a sophomore front-end developer, I&apos;m passionate about creating beautiful and functional user interfaces. 
                I specialize in React and modern web technologies, always striving to learn and implement the latest best practices.
              </p>
              <div className="pt-4">
                <TechStack />
              </div>
            </div>
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-background to-muted shadow-xl ring-1 ring-gray-900/10">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 backdrop-blur-sm"></div>
              <div className="absolute inset-0 flex items-center justify-center transform hover:scale-105 transition-transform duration-300">
                <Image 
                  src="/dancing-pig.png" 
                  alt="Dancing Pig"
                  width={500}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full">
        <TimelineDemo />
        <ProjectsShowcase />
      </section>
      <StackedCircularFooter />
    </main>
  )
}