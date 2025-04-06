import { NextResponse } from 'next/server';

export async function POST(req: Request) {

    const { prompt } = await req.json();

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.CHATGPT_API_KEY}`
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          {
            role: "system",
            content: "You are a helpful assistant that response to the user's prompt."
          },
          {
            role: "user", 
            content: `${prompt}`
          }
        ],
        temperature: 0.7
      }),
    });

    if (!response.ok) {
      return NextResponse.json({ error: 'Error' }, { status: response.status });
    }

    const data = await response.json();
    return NextResponse.json({ content: data.choices[0].message.content });
}