import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from "@google/generative-ai";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { message } = body;

    if (!message || message.trim() === "") {
      return NextResponse.json(
        { isValid: false, reason: "Message is empty." },
        { status: 400 }
      );
    }

    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

    const safetySettings = [
      { category: HarmCategory.HARM_CATEGORY_HARASSMENT, threshold: HarmBlockThreshold.BLOCK_ONLY_HIGH },
    ];

    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash",
      safetySettings,
    });

    const validationPrompt = `
You are a message validator for a contact form. Your job is to check if a message is appropriate to send.

REJECT the message if it contains ANY of these:
1. Bad words, insults, or profanity (putangina, gago, bobo, asshole, idiot, stupid, etc.)
2. Spam/gibberish with poor spelling (asdasda, xyzxyz, kamust4, sdfsdf, random keyboard mashing, repeated nonsense)
3. Unreadable text with mixed gibberish (like "asdasdasdk", "kamust4", numbers replacing letters in nonsense)
4. Offensive or inappropriate language
5. Threats or harassment

ACCEPT the message if it:
1. Is clear and readable (even if casual)
2. Contains respectful language, even if informal
3. Has a genuine greeting, question, or proposal
4. Is coherent and makes sense
5. Uses normal Tagalog (kamusta, hello, etc.) - these are fine
6. Can be informal/casual in tone - this is OK

Message to validate:
"${message}"

RESPOND WITH ONLY A JSON OBJECT (no markdown, no code blocks):
{
  "isValid": true or false,
  "reason": "Brief explanation if invalid. If spelling/readability issues, say 'Your spelling is not well'. If bad words, say 'Message contains inappropriate words'. If empty, say 'Message is empty'. Empty string if valid."
}

`;

    const result = await model.generateContent(validationPrompt);
    const responseText = result.response.text().trim();

    // Parse the JSON response
    const jsonMatch = responseText.match(/\{[\s\S]*\}/);
    if (!jsonMatch) {
      return NextResponse.json(
        { isValid: false, reason: "Validation error. Please try again." },
        { status: 500 }
      );
    }

    const validationResult = JSON.parse(jsonMatch[0]);
    return NextResponse.json(validationResult);

  } catch (error) {
    console.error("Validation Error:", error);
    return NextResponse.json(
      { isValid: false, reason: "Validation failed. Please try again." },
      { status: 500 }
    );
  }
}
