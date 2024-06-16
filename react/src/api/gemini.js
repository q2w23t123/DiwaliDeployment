// src/api/gemini.js
const {
    GoogleGenerativeAI,
    // HarmCategory,
    // HarmBlockThreshold,
} = require("@google/generative-ai");

const apiKey = process.env.REACT_APP_GOOGLE_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);
console.log("Google API Key:", apiKey);

const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
    systemInstruction: "You are an assistant for Diwali event to answer the questions for website visitors\n\nEvent Summary\nEvent Name: Melbourne Diwali @ Marvel\nOrganizer: Saras.Care (Not-for-profit supporting local communities)\nLocation: Marvel Stadium, Docklands, VIC, Australia\nWebsite: https://melbournediwali.com.au/\n\nKey Information for Visitors\nFree Entry: Everyone is welcome to celebrate Diwali!\nFamily-Friendly: Enjoy activities and performances designed for all ages.\nLargest Undercover Diwali Event: Melbourne's biggest Diwali celebration, ensuring a comfortable experience rain or shine.\nDiverse Cultural Showcases: Immerse yourself in the vibrant traditions, arts, and performances of India.\nAccessible and Inclusive: Designed to welcome everyone, regardless of background, age, or ability.\nDelicious Food: Explore a variety of food stalls offering authentic Indian cuisine and beverages.\nTraditional recipes with a delightful kick.\nUnique Australian-Indian fusion flavors.\nOptions to cater to diverse palates and preferences.\n\nAbout Saras.Care\nSaras.Care is a not-for-profit organization dedicated to supporting local communities during challenging times.\nThey are known for upholding Sanatan values and hold a prestigious position in the Australian charitable sector (Telstra Community Foundation Award Winner 2022).\nTheir mission is to spread joy and cultural richness through the Melbourne Diwali event.",
});

const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
};

async function run(userText) {
    const chatSession = model.startChat({
        generationConfig,
        history: [
        {
            role: "user",
            parts: [
                {text: "Melbourne Diwali held at Marvel Stadium Docklands"},
            ],
        },
        {
            role: "model",
            parts: [
                {text: "That's right! Melbourne Diwali is taking place at Marvel Stadium in Docklands, Victoria, Australia. It's going to be a massive celebration, the biggest undercover Diwali event in Melbourne! \n\nAre you planning to attend? What are you most looking forward to at the event? 😊\n"},
            ],
        },
        {
            role: "user",
            parts: [
                {text: "The Melbourne Diwali held at Oct 19th Last year 2023"},
            ],
        },
        {
            role: "model",
            parts: [
                {text: "You are absolutely right! Melbourne Diwali 2023 was held on October 19th at Marvel Stadium.  It was a fantastic event, wasn't it? \n\nI'm sure many people are looking forward to the next Melbourne Diwali celebration.  We'll keep everyone updated on the date for next year's event as soon as it is announced.\n\nWould you like to know more about the 2023 event, or are you curious about what might be planned for the next one?  😊 \n"},
            ],
        },
        {
            role: "user",
            parts: [
                {text: "The contact number for offcial Melbourne Diwali is:+61 413 178 250"},
                {text: "The contact email for offcial Melbourne Diwali is: info@melbournediwali.com.au"},
            ],
        },
        {
            role: "model",
            parts: [
                {text: "You're spot on!  That's the correct contact information for Melbourne Diwali.  It's great to have those details readily available.  \n\nIf anyone has any questions or inquiries about the event, they can reach out using those details. \n\nI'm always here to help with any other information about Melbourne Diwali, past or future.  Do you have any other questions? 😊 \n"},
            ],
        },
    ],
    });

    const result = await chatSession.sendMessage(userText);
    return result.response.text();
}

export { run };

