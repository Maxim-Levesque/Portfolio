import { Card } from "@/components/ui/card";
import { Code2, Database, Globe, Terminal } from "lucide-react";

const skills = [
  {
    icon: Code2,
    title: "Frontend Development",
    technologies: ["C#" , "React", "TypeScript", "Tailwind CSS"]
  },
  {
    icon: Database,
    title: "Backend Development",
    technologies: ["C#" ,"Node.js", "mySQL", "MongoDB"]
  },
  {
    icon: Terminal,
    title: "DevOps & Tools",
    technologies: ["Git", "PowerShell", "Ubuntu", "Bash"]
  },
  {
    icon: Globe,
    title: "Other Skills",
    technologies: ["Networking", "Debian", "Networking", "VMs"]
  }
];

const About = () => {
  return (
    <section id="about" className="section-padding bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-12" />

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="animate-fade-in">
              <p className="text-lg text-muted-foreground mb-4">
                Hello! I'm a passionate computer science student with a solid understanding of computing concepts and a strong interest in creating innovative solutions.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                I enjoy turning complex problems into simple, elegant, and intuitive designs. When I'm not coding, I love exploring new technologies and learning new skills.
              </p>
              <p className="text-lg text-muted-foreground">
                Here are some technologies I've been working with recently:
              </p>
            </div>

            <div className="glass-card p-6 rounded-xl animate-fade-in">
              <h3 className="text-xl font-semibold mb-4">Quick Facts</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-2">▹</span>
                  Currently completing a Computer Science degree
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">▹</span>
                  I’m curious about how technology can improve everyday life.
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">▹</span>
                  Strong problem-solving and analytical skills
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">▹</span>
                  <p>I love to hide </p>
                  <span className="easter-egg-hover"> Easter Eggs </span>
                  <p> in my projects</p>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <Card
                key={index}
                className="glass-card hover-lift p-6 border-border/50 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <skill.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-lg font-semibold mb-3">{skill.title}</h3>
                <ul className="space-y-2">
                  {skill.technologies.map((tech, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex items-center">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                      {tech}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
