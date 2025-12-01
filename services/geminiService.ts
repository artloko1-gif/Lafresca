import { GoogleGenAI, Type, Schema } from "@google/genai";
import { DailyMenuData } from "../types";

// Fallback data in case API key is missing or fails
const FALLBACK_MENU: DailyMenuData = {
  date: new Date().toLocaleDateString('cs-CZ', { weekday: 'long', day: 'numeric', month: 'long' }),
  soup: {
    name: "Kulajda s hříbky",
    description: "S čerstvým koprem a zastřeným vejcem",
    price: "45 Kč",
    allergens: "1, 3, 7"
  },
  mains: [
    {
      name: "Pečená kachna, červené zelí",
      description: "Variace knedlíků, silná masová šťáva",
      price: "195 Kč",
      allergens: "1, 3, 7"
    },
    {
      name: "Thajské červené kari s kuřecím masem",
      description: "Jasmínová rýže, čerstvý koriandr, chilli",
      price: "175 Kč",
      allergens: "4, 6, 11"
    },
    {
      name: "Domácí gnocchi se špenátem",
      description: "Smetanová omáčka, parmazán, sušená rajčata",
      price: "165 Kč",
      allergens: "1, 3, 7"
    }
  ]
};

export const fetchDailyMenu = async (branchName: string, type: string): Promise<DailyMenuData> => {
  const apiKey = process.env.API_KEY;

  if (!apiKey) {
    console.warn("API Key missing, using fallback menu.");
    return FALLBACK_MENU;
  }

  const ai = new GoogleGenAI({ apiKey });

  const schema: Schema = {
    type: Type.OBJECT,
    properties: {
      date: { type: Type.STRING, description: "Current date in Czech format (e.g. Pondělí 12. října)" },
      soup: {
        type: Type.OBJECT,
        properties: {
          name: { type: Type.STRING },
          description: { type: Type.STRING },
          price: { type: Type.STRING },
          allergens: { type: Type.STRING }
        },
        required: ["name", "price"]
      },
      mains: {
        type: Type.ARRAY,
        items: {
          type: Type.OBJECT,
          properties: {
            name: { type: Type.STRING },
            description: { type: Type.STRING },
            price: { type: Type.STRING },
            allergens: { type: Type.STRING }
          },
          required: ["name", "price"]
        }
      }
    },
    required: ["date", "soup", "mains"]
  };

  let contextPrompt = "";
  if (type === 'industry') {
    contextPrompt = "Jedná se o závodní stravování pro těžký průmysl. Preferuj vydatná, tradiční česká jídla a velké porce.";
  } else if (type === 'office') {
    contextPrompt = "Jedná se o moderní business centrum. Preferuj lehčí jídla, fit varianty, moderní gastronomii a mezinárodní kuchyni.";
  } else {
    contextPrompt = "Jedná se o univerzitní menzu. Preferuj dobrý poměr cena/výkon a jídla oblíbená u studentů.";
  }

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `Jsi šéfkuchař společnosti La Fresca pro pobočku '${branchName}'. ${contextPrompt} Vygeneruj dnešní polední menu. Musí obsahovat 1 polévku a 3 hlavní chody. Ceny v CZK adekvátní typu provozu. Vše v češtině.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: schema,
        temperature: 0.7,
      },
    });

    const text = response.text;
    if (text) {
      return JSON.parse(text) as DailyMenuData;
    }
    throw new Error("No text returned");
  } catch (error) {
    console.error("Gemini API error:", error);
    return FALLBACK_MENU;
  }
};