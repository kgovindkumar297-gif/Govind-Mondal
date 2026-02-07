import { motion } from 'framer-motion';
import { ArrowRight, Code2, Database, Layout, Mail, Phone, MapPin } from 'lucide-react';
import { Navigation } from '@/components/Navigation';
import { FloatingActions } from '@/components/FloatingActions';
import { SectionHeader } from '@/components/SectionHeader';
import { ServiceCard } from '@/components/ServiceCard';
import { ProjectCard } from '@/components/ProjectCard';
import { ContactForm } from '@/components/ContactForm';
import { useProjects, useServices, useSkills } from '@/hooks/use-portfolio';
import { Button } from '@/components/ui/button';

export default function Portfolio() {
  const { data: services } = useServices();
  const { data: projects } = useProjects();
  const { data: skills } = useSkills();

  // Categorize skills
  const frontendSkills = skills?.filter(s => s.category === 'frontend') || [];
  const backendSkills = skills?.filter(s => s.category === 'backend') || [];
  const toolSkills = skills?.filter(s => s.category === 'tool') || [];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navigation />
      
      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center px-4 pt-20 overflow-hidden">
        {/* Abstract Background Shapes */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-[100px]" />
        
        <div className="container mx-auto flex flex-col-reverse md:flex-row items-center gap-12 z-10">
          <div className="flex-1 text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-xl md:text-2xl font-medium text-primary mb-4">
                Hello, I'm
              </h2>
              <h1 className="text-5xl md:text-7xl font-bold font-display leading-tight mb-6">
                Govind <span className="text-gradient">Kumar</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl">
                Full Stack & Backend Developer crafting robust, scalable, and premium digital experiences.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
                <Button 
                  className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 py-6 text-lg w-full sm:w-auto"
                  onClick={() => {
                     window.location.href = "tel:8434586868";
                  }}
                >
                  <Phone className="mr-2 h-5 w-5" /> Call Now
                </Button>
                <Button 
                  variant="outline" 
                  className="border-primary/50 text-foreground hover:bg-primary/10 rounded-full px-8 py-6 text-lg w-full sm:w-auto"
                  onClick={() => {
                     window.open("https://wa.me/8434586868", "_blank");
                  }}
                >
                   WhatsApp Chat
                </Button>
              </div>
            </motion.div>
          </div>
          
          <div className="flex-1 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative w-72 h-72 md:w-96 md:h-96 mx-auto"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-primary to-purple-600 rounded-full blur-2xl opacity-20 animate-pulse" />
              {/* Unsplash placeholder for profile - Man coding or professional portrait */}
              {/* man in suit professional portrait dark background */}
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=800&fit=crop&crop=faces"
                alt="Govind Kumar"
                className="relative w-full h-full object-cover rounded-full border-4 border-card shadow-2xl"
              />
              
              {/* Floating badges */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                className="absolute top-10 -left-4 bg-card/80 backdrop-blur border border-white/5 p-3 rounded-xl shadow-xl flex items-center gap-2"
              >
                <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400">
                  <Database size={20} />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">Expert</div>
                  <div className="font-bold text-sm">Backend</div>
                </div>
              </motion.div>
              
              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-10 -right-4 bg-card/80 backdrop-blur border border-white/5 p-3 rounded-xl shadow-xl flex items-center gap-2"
              >
                <div className="p-2 bg-purple-500/10 rounded-lg text-purple-400">
                  <Code2 size={20} />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">Full Stack</div>
                  <div className="font-bold text-sm">Developer</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ delay: 1, duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground"
        >
          <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center p-1">
            <div className="w-1 h-2 bg-primary rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-secondary/20">
        <div className="container mx-auto px-4">
          <SectionHeader title="About Me" subtitle="Who I Am" />
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold font-display mb-6">
                Professional <span className="text-primary">Website & Backend</span> Developer
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                I am Govind Kumar, a passionate developer dedicated to building high-performance websites and robust backend systems. 
                With deep expertise in API development and database management, I create scalable solutions that drive business growth.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                My approach combines clean code practices with modern architectural patterns to deliver software that is not just functional, but exceptional.
                Whether you need a complex web application or a streamlined API, I have the skills to make it happen.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="p-4 rounded-xl bg-card border border-border">
                  <h4 className="font-bold text-3xl text-primary mb-1">3+</h4>
                  <p className="text-sm text-muted-foreground">Years Experience</p>
                </div>
                <div className="p-4 rounded-xl bg-card border border-border">
                  <h4 className="font-bold text-3xl text-primary mb-1">50+</h4>
                  <p className="text-sm text-muted-foreground">Projects Completed</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
               {/* tech stack abstract composition */}
               <div className="grid grid-cols-2 gap-4">
                 <div className="space-y-4 mt-8">
                   <div className="h-40 rounded-2xl bg-gradient-to-br from-primary/20 to-purple-500/20 backdrop-blur border border-white/5 flex items-center justify-center">
                     <Database size={40} className="text-primary" />
                   </div>
                   <div className="h-32 rounded-2xl bg-card border border-border flex items-center justify-center">
                     <Layout size={40} className="text-purple-400" />
                   </div>
                 </div>
                 <div className="space-y-4">
                   <div className="h-32 rounded-2xl bg-card border border-border flex items-center justify-center">
                     <Code2 size={40} className="text-blue-400" />
                   </div>
                   <div className="h-40 rounded-2xl bg-gradient-to-bl from-blue-500/20 to-primary/20 backdrop-blur border border-white/5 flex items-center justify-center">
                     <ArrowRight size={40} className="text-white -rotate-45" />
                   </div>
                 </div>
               </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24">
        <div className="container mx-auto px-4">
          <SectionHeader title="My Services" subtitle="What I Offer" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services?.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 bg-secondary/20">
        <div className="container mx-auto px-4">
          <SectionHeader title="Technical Skills" subtitle="My Expertise" />
          
          <div className="space-y-12">
            {/* Frontend */}
            <div>
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Layout className="text-primary" size={20} /> Frontend Development
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {frontendSkills.map((skill, idx) => (
                  <motion.div
                    key={skill.id}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                    className="p-4 bg-card rounded-xl border border-border text-center hover:border-primary/50 transition-colors"
                  >
                    <div className="font-medium">{skill.name}</div>
                    <div className="mt-2 h-1 w-full bg-secondary rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-primary" 
                        style={{ width: `${skill.proficiency}%` }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Backend */}
            <div>
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Database className="text-purple-500" size={20} /> Backend Development
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {backendSkills.map((skill, idx) => (
                  <motion.div
                    key={skill.id}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                    className="p-4 bg-card rounded-xl border border-border text-center hover:border-purple-500/50 transition-colors"
                  >
                    <div className="font-medium">{skill.name}</div>
                    <div className="mt-2 h-1 w-full bg-secondary rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-purple-500" 
                        style={{ width: `${skill.proficiency}%` }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
             {/* Tools */}
             <div>
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Code2 className="text-blue-500" size={20} /> Tools & Others
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {toolSkills.map((skill, idx) => (
                  <motion.div
                    key={skill.id}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                    className="p-4 bg-card rounded-xl border border-border text-center hover:border-blue-500/50 transition-colors"
                  >
                    <div className="font-medium">{skill.name}</div>
                    <div className="mt-2 h-1 w-full bg-secondary rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-blue-500" 
                        style={{ width: `${skill.proficiency}%` }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-24">
        <div className="container mx-auto px-4">
          <SectionHeader title="My Projects" subtitle="Recent Work" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects?.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gradient-to-b from-secondary/20 to-background">
        <div className="container mx-auto px-4">
          <SectionHeader title="Get In Touch" subtitle="Contact Me" />
          
          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold font-display mb-6">Let's Discuss Your Project</h3>
              <p className="text-muted-foreground mb-8">
                I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <Mail size={24} />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Email Me</div>
                    <div className="font-medium">govindofficoal027@gmail.com</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <Phone size={24} />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Call Me</div>
                    <div className="font-medium">8434586868</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Location</div>
                    <div className="font-medium">India</div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-card p-8 rounded-2xl border border-border shadow-xl"
            >
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-black border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} Govind Developer – All Rights Reserved
          </p>
        </div>
      </footer>

      <FloatingActions />
    </div>
  );
}
