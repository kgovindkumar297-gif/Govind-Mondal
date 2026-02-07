import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // === SEED DATA ===
  const existingProjects = await storage.getProjects();
  if (existingProjects.length === 0) {
    await storage.seedProjects([
      {
        title: "E-Commerce Platform",
        description: "A full-featured online store with cart, checkout, and payment integration.",
        imageUrl: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
        projectUrl: "#",
        tags: ["React", "Node.js", "Stripe", "PostgreSQL"]
      },
      {
        title: "Real-time Chat App",
        description: "Instant messaging application with group chat and file sharing features.",
        imageUrl: "https://images.unsplash.com/photo-1611606063065-ee7946f0787a?w=800&q=80",
        projectUrl: "#",
        tags: ["Socket.io", "Express", "React", "Redis"]
      },
      {
        title: "Task Management Dashboard",
        description: "Productivity tool for teams to manage tasks, sprints, and deadlines.",
        imageUrl: "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?w=800&q=80",
        projectUrl: "#",
        tags: ["Vue.js", "Firebase", "Tailwind"]
      },
      {
        title: "Portfolio Website",
        description: "Modern portfolio website with dark mode and smooth animations.",
        imageUrl: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80",
        projectUrl: "#",
        tags: ["Next.js", "Framer Motion", "TypeScript"]
      }
    ]);
  }

  const existingSkills = await storage.getSkills();
  if (existingSkills.length === 0) {
    await storage.seedSkills([
      { name: "HTML/CSS", category: "frontend", proficiency: 95 },
      { name: "JavaScript/TypeScript", category: "frontend", proficiency: 90 },
      { name: "React", category: "frontend", proficiency: 88 },
      { name: "Node.js", category: "backend", proficiency: 85 },
      { name: "PHP", category: "backend", proficiency: 80 },
      { name: "PostgreSQL", category: "backend", proficiency: 82 },
      { name: "MongoDB", category: "backend", proficiency: 78 },
      { name: "Git/GitHub", category: "tool", proficiency: 85 },
      { name: "Docker", category: "tool", proficiency: 75 },
    ]);
  }

  const existingServices = await storage.getServices();
  if (existingServices.length === 0) {
    await storage.seedServices([
      {
        title: "Website Development",
        description: "Building responsive, modern, and high-performance websites tailored to your brand.",
        icon: "Globe"
      },
      {
        title: "Backend Development",
        description: "Robust server-side logic, API development, and database management.",
        icon: "Server"
      },
      {
        title: "Full Stack Development",
        description: "End-to-end web application development using modern tech stacks.",
        icon: "Layers"
      },
      {
        title: "API Integration",
        description: "Seamless integration of third-party APIs and services into your application.",
        icon: "Workflow"
      },
      {
        title: "Performance Optimization",
        description: "Speeding up your website and ensuring it handles high traffic smoothly.",
        icon: "Zap"
      },
      {
        title: "Website Maintenance",
        description: "Regular updates, bug fixes, and security monitoring for your site.",
        icon: "Wrench"
      }
    ]);
  }

  // === ROUTES ===

  app.get(api.projects.list.path, async (req, res) => {
    const projects = await storage.getProjects();
    res.json(projects);
  });

  app.get(api.skills.list.path, async (req, res) => {
    const skills = await storage.getSkills();
    res.json(skills);
  });

  app.get(api.services.list.path, async (req, res) => {
    const services = await storage.getServices();
    res.json(services);
  });

  app.post(api.messages.create.path, async (req, res) => {
    try {
      const input = api.messages.create.input.parse(req.body);
      const message = await storage.createMessage(input);
      res.status(201).json(message);
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join('.'),
        });
      }
      throw err;
    }
  });

  return httpServer;
}
