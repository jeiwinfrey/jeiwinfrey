import { SiReact, SiNextdotjs, SiTailwindcss, SiTypescript, SiGit, SiFigma, SiGithub } from 'react-icons/si'
import { VscCode } from 'react-icons/vsc'

const technologies = [
  { icon: SiReact, name: 'React' },
  { icon: SiNextdotjs, name: 'Next.js' },
  { icon: SiTailwindcss, name: 'TailwindCSS' },
  { icon: SiTypescript, name: 'TypeScript' },
]

const tools = [
  { icon: SiGit, name: 'Git' },
  { icon: VscCode, name: 'VS Code' },
  { icon: SiFigma, name: 'Figma' },
  { icon: SiGithub, name: 'GitHub' },
]

interface TechItemProps {
  icon: React.ElementType;
  name: string;
}

const TechItem = ({ icon: Icon, name }: TechItemProps) => (
  <div className="group relative flex items-center justify-center">
    <Icon className="w-8 h-8 text-muted-foreground/50 transition-colors group-hover:text-primary" />
    <span className="absolute -bottom-8 opacity-0 group-hover:opacity-100 transition-opacity text-sm">
      {name}
    </span>
  </div>
)

export function TechStack() {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <div className="grid grid-cols-4 gap-8">
          {technologies.map((tech, index) => (
            <TechItem key={index} {...tech} />
          ))}
        </div>
      </div>
      <div className="space-y-4">
        <div className="grid grid-cols-4 gap-8">
          {tools.map((tool, index) => (
            <TechItem key={index} {...tool} />
          ))}
        </div>
      </div>
    </div>
  )
}
