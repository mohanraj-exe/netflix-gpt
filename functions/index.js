const cors = require("cors");
const corsAllow = cors({
  origin: [
    "https://netflix-gpt-cae9f.web.app",
    "https://netflix-gpt-cae9f.firebaseapp.com",
  ],
});

const {onRequest} = require("firebase-functions/v2/https");
const {defineSecret} = require("firebase-functions/params");
const {GoogleGenAI} = require("@google/genai");
const {aiQueryHelper} = require("./aiQueryHelper");

const GEMINI_API_KEY = defineSecret("GEMINI_API_KEY");

exports.askGemini = onRequest({secrets: [GEMINI_API_KEY]}, (req, res) => {
  corsAllow(req, res, async () => {
    try {
      const query = req.body.query;

      const ai = new GoogleGenAI({
        apiKey: GEMINI_API_KEY.value(),
      });
      const gptQuery = aiQueryHelper(query);

      const completion = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: gptQuery,
      });
      return res.status(200).json({data: completion});
    } catch (err) {
      return res.status(400).json({message: err.message});
    }
  });
});
