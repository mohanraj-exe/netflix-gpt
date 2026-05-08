import { GoogleGenAI } from '@google/genai';
import { GEMINI_API_KEY } from './constants';

// Initialize the SDK with your API Key
const client = new GoogleGenAI({
  apiKey: GEMINI_API_KEY
});


export default client;