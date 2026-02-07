import { db } from "./db";
import {
  messages, projects, skills, services,
  type Message, type InsertMessage,
  type Project, type InsertProject,
  type Skill, type InsertSkill,
  type Service, type InsertService
} from "@shared/schema";

export interface IStorage {
  createMessage(message: InsertMessage): Promise<Message>;
  getProjects(): Promise<Project[]>;
  getSkills(): Promise<Skill[]>;
  getServices(): Promise<Service[]>;
  
  // Seed methods
  seedProjects(projects: InsertProject[]): Promise<void>;
  seedSkills(skills: InsertSkill[]): Promise<void>;
  seedServices(services: InsertService[]): Promise<void>;
}

export class DatabaseStorage implements IStorage {
  async createMessage(insertMessage: InsertMessage): Promise<Message> {
    const [message] = await db.insert(messages).values(insertMessage).returning();
    return message;
  }

  async getProjects(): Promise<Project[]> {
    return await db.select().from(projects);
  }

  async getSkills(): Promise<Skill[]> {
    return await db.select().from(skills);
  }

  async getServices(): Promise<Service[]> {
    return await db.select().from(services);
  }

  async seedProjects(insertProjects: InsertProject[]): Promise<void> {
    if (insertProjects.length === 0) return;
    await db.insert(projects).values(insertProjects);
  }

  async seedSkills(insertSkills: InsertSkill[]): Promise<void> {
    if (insertSkills.length === 0) return;
    await db.insert(skills).values(insertSkills);
  }

  async seedServices(insertServices: InsertService[]): Promise<void> {
    if (insertServices.length === 0) return;
    await db.insert(services).values(insertServices);
  }
}

export const storage = new DatabaseStorage();
