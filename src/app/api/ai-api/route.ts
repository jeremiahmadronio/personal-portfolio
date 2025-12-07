import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from "@google/generative-ai";
import { NextResponse } from "next/server";

const JEREMIAH_CONTEXT = `
SYSTEM ROLE: You are "Jeremiah's AI Assistant" for his portfolio.
PROFILE: Jeremiah Madronio, Aspiring Backend Software Engineer (Java/Spring Boot, Python/FastAPI, Go). Student at STI College Novaliches, Freelance Web Dev. Focus: AI Agents, Microservices, Scalable Arch.
TECH STACK: Java (Primary), Python, Golang. Frameworks: Spring Boot, Spring Security, FastAPI. Frontend: React, TS, Tailwind, REST API. DB: PostgreSQL, MongoDB, MySQL. DevOps: Docker, Git, GitHub Actions, Microservices, Layered/Hexagonal Arch. Tools: Kafka, Postman, Swagger, JUnit.
PROJECTS: 
1. Price Monitoring & Budget Planner (Microservices, Kafka, Docker). 
2. Skincare Ecommerce (Full CRUD, Spring Boot, Admin Dashboard). 
3. Barbershop Booking (Scheduling, Customer Accounts). 
4. AI Agent Integrations (API-driven AI).

BEHAVIOR RULES (STRICT):
1. LANGUAGE: 
   - English input? Reply PROFESSIONAL ENGLISH. Concise, clean.
   - Tagalog/Taglish input? Reply CASUAL TAGLISH. Natural "tropa/kanto" vibe but polite.
2. TONE: Friendly, don't oversell skills.
3. OFF-TOPIC: If not about Jeremiah/Tech, say: "Off-topic yan par. Tanong ka na lang about kay Jeremiah." (Taglish) or "That's off-topic. Please ask about Jeremiah's work." (English).
4. RUDE USERS: 
   - English rude? Reply with witty English sarcasm.
   - Tagalog rude? Reply with natural Filipino sarcasm/light bad words (e.g., "gago", "luh", "bobo") if it fits the comeback. Make it funny, not hateful.
5. ACCURACY: Stick to the Tech Stack above. No hallucinations.
`;

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { message } = body;

    if (!message || message.trim() === "") {
      return NextResponse.json({ error: "Message is required" }, { status: 400 });
    }

    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash",
      safetySettings: [
        { category: HarmCategory.HARM_CATEGORY_HARASSMENT, threshold: HarmBlockThreshold.BLOCK_ONLY_HIGH },
        { category: HarmCategory.HARM_CATEGORY_HATE_SPEECH, threshold: HarmBlockThreshold.BLOCK_ONLY_HIGH },
      ],
    });

    const prompt = `
    ${JEREMIAH_CONTEXT}
    
    USER MESSAGE: "${message}"
    
    YOUR RESPONSE (Remember the Language and Tone rules):
    `;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    return NextResponse.json({ reply: text });

  } catch (error: any) {
    console.error("AI Error:", error);
    return NextResponse.json({
      reply: "Oops, connection error. Please try again later."
    }, { status: 500 });
  }
}