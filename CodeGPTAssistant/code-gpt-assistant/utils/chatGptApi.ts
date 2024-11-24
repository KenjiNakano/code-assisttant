import axios from 'axios';

const chatGptApi = async (newMessage: { role:string; content: string; }, messages: Array<{ role:string; content: string; }>) => {
  const apiUrl = '/api/chatAI';

  try {
    const response = await axios.post(apiUrl, {
      newMessage,
      messages
    });

    return response.data.responseText;
  } catch (error) {
    console.error('chatGptApi.ts:ChatGpt API Error:', error);
    return '';
  }
};

export default chatGptApi;
