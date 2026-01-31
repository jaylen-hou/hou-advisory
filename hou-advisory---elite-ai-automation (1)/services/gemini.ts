
import { GoogleGenAI, Type } from "@google/genai";

const SYSTEM_INSTRUCTION = `
You are the Hou Advisory Consultant, a high-level strategist for small businesses looking to automate.
Your tone is professional, visionary, yet practical.
Specializations: AI Receptionists, Chatbots, Knowledge Bases, and Web Design.

Rules:
1. When asked about a specific business type (e.g., plumber, law firm), provide 3-4 concrete automation steps.
2. Keep responses concise but impact-heavy.
3. Suggest which of our 4 core services fits best (AI Receptionist, Chatbots, Knowledge Bases, Web Design).
4. If a user asks something unrelated to business or AI, gracefully steer them back to Hou Advisory's expertise.
5. If the user wants to speak to a human or book a call, tell them to call us directly at +1 (925) 238-3722.
`;

export const getAIConsultation = async (prompt: string) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
        topP: 0.95,
      },
    });

    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having trouble connecting to the Hou Advisory strategist network. Please try again or call us at +1 (925) 238-3722!";
  }
};