import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import querystring from 'querystring';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const apiKey = process.env.NEXT_PUBLIC_DEEPL_API_KEY;
    const apiUrl = 'https://api-free.deepl.com/v2/translate';
    const config = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `DeepL-Auth-Key ${apiKey}`,
      }
    }

    try {
      const response = await axios.post(apiUrl, querystring.stringify(req.body), config);

      res.status(200).json({ translatedText: response.data.translations[0].text });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: 'Error translating text' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}



