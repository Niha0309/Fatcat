export default async function handler(req, res) {
  try {
    const { message } = JSON.parse(req.body);

    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      return res.status(500).json({ reply: "API key missing in Vercel env" });
    }

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [
            {
              parts: [{ text: message }]
            }
          ]
        })
      }
    );

    const data = await response.json();

    console.log("Gemini response:", data); // debugging

    const reply =
      data?.candidates?.[0]?.content?.parts?.[0]?.text ||
      "No response from AI";

    res.status(200).json({ reply });

  } catch (err) {
    console.log("ERROR:", err);
    res.status(500).json({ reply: "Server error" });
  }
}
