import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
const MODEL_NAME = 'gemini-2.5-flash';

export async function generateTrainingResponse(userPrompt: string, contextSystemInstruction: string): Promise<string> {
    try {
        const response = await ai.models.generateContent({
            model: MODEL_NAME,
            contents: userPrompt,
            config: {
                systemInstruction: contextSystemInstruction,
            }
        });
        
        return response.text || "I couldn't generate a response.";
    } catch (error) {
        console.error("Gemini API Error:", error);
        return "Sorry, I'm having trouble connecting to the training database right now.";
    }
}

export async function analyzeEquipmentImage(base64Image: string): Promise<string> {
    try {
        const prompt = `
            Identify this gym equipment. What exercise is performed on it? 
            Also, output a JSON block for this exercise at the end using this schema:
            { "id": "unique_id", "name": "Exercise Name", "type": "Isolation" or "Compound", "primaryMuscle": "MuscleName", "secondaryMuscles": ["Array"], "equipment": "Machine" }
            Provide a brief description first.
        `;

        const response: GenerateContentResponse = await ai.models.generateContent({
            model: MODEL_NAME,
            contents: {
                parts: [
                    { text: prompt },
                    {
                        inlineData: {
                            mimeType: 'image/jpeg',
                            data: base64Image
                        }
                    }
                ]
            }
        });

        return response.text || "Could not analyze image.";
    } catch (error) {
        console.error("Vision API Error:", error);
        return "Error analyzing image.";
    }
}