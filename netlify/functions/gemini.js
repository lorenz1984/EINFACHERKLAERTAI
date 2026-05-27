export const handler = async (event) => {
  const { prompt } = JSON.parse(event.body);
  const API_KEY = process.env.GEMINI_API_KEY;

  const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ 
      contents: [{ role: "user", parts: [{ text: prompt }] }] 
    })
  });

 const data = await response.json();
  console.log("Antwort von Google:", data); // Füge diese Zeile hinzu
  
  return { 
    statusCode: response.ok ? 200 : 500, 
    body: JSON.stringify(data) 
  };
