import ai from "../config/gemini-config.js";
export const generateDescription = async (title) => {
  const prompt = `Write a detailed and engaging blog description based on the following title: "${title}".
The description should be approximately 180 to 220 words.
Clearly explain what the blog will cover, expand on the key idea behind the title, and highlight the value readers will gain from reading it.
Maintain a smooth flow with well structured sentences and coherent progression of ideas.
Use clear, natural, and reader friendly language while keeping a professional tone.
Do not include any emojis, symbols, or special characters.
Avoid overly complex words and keep it easy to understand for a general audience.
Ensure the description is informative, engaging, and encourages the reader to explore the full blog.`;
  console.log(prompt);
  let response = await ai.models.generateContent({
    model: "gemini-2.5-flash-lite", //model name
    contents: [{ text: title }],
  }); //PROMPT
  console.log(response.text);
  return response.text;
};
