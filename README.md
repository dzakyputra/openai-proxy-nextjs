# OpenAI Chat Interface

A simple Next.js application that provides a ChatGPT-like interface for interacting with OpenAI's API.

## Features

- Real-time chat interface
- Streaming responses from OpenAI
- Modern UI with Tailwind CSS
- TypeScript support

## Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env.local` file in the root directory and add your OpenAI API key:
   ```
   OPENAI_API_KEY=your_openai_api_key_here
   ```
4. Run the development server:
   ```bash
   npm run dev
   ```
5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Usage

1. Type your message in the input field at the bottom of the screen
2. Press the send button or hit Enter to send your message
3. Wait for the AI's response to stream in real-time

## Technologies Used

- Next.js 14
- TypeScript
- Tailwind CSS
- OpenAI API
- Vercel AI SDK
