import { NextApiRequest, NextApiResponse } from 'next';
import { Configuration, OpenAIApi } from 'openai';

function concatenateContents(messages: Array<{ roll:string; content: string; }>): string {
  return messages.map(message => message.content).join(' ');
}


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const configuration = new Configuration({
      apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
    });
    const openai = new OpenAIApi(configuration);

    while(true) {
      let contents = concatenateContents(req.body.messages.concat(req.body.newMessage))
      //split contents by whitespace and count the number of words
      let numWords = contents.split(/\s+/).length
      if (numWords < 8000) { //8192 is the max number of tokens
        break
      } else {
        //remove the first message
        req.body.messages.shift()
      }
    }

    let messages = []
    messages.push({role: "system", content: "Act like you are a very smart engineer. "})
    messages.push(...req.body.messages)
    messages.push(req.body.newMessage)

    console.log("chatAI:messages")
    console.log(messages)

    //call createChatCompletion
    const completion = await openai.createChatCompletion({
      model: "gpt-4",
      messages: messages
    });

    res.status(200).json({ responseText: completion.data.choices[0].message });
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
