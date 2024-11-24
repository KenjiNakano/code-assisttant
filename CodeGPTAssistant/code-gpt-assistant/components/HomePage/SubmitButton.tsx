import { useRouter } from 'next/router';
import { useState } from 'react';
import deepLApi from '../../utils/deepLApi';
import chatGptApi from '../../utils/chatGptApi';
import axios from 'axios';

const SubmitButton = ({ description, setResponse, onSubmit}: { description: string, setResponse: Function, onSubmit: Function }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<Array<{ role:string; content: string; }>>([]);

  const handleClick = async () => {
    setLoading(true);

    onSubmit(description);

    // Translate the description to English
    const translatedDescription = await deepLApi(description, 'JA', 'EN-US');
    const askToChatGPT = {"role": "user", "content": translatedDescription}

    const chatGptResponse = await chatGptApi(askToChatGPT, messages);
    const chatGptResponseContent = chatGptResponse.content;

    setMessages([
      ...messages,
      {"role": "user", "content": translatedDescription},
      {"role": "assistant", "content": chatGptResponseContent}
    ]);

    const translatedChatGptResponse: string = await deepLApi(chatGptResponseContent, 'EN', 'JA');

    setResponse(translatedChatGptResponse);

    axios.post('/api/appendLog', { log: translatedChatGptResponse })
      .then(response => console.log(response.data))
      .catch(error => console.error(error))

    setLoading(false);
  };

  return (
    <div className="submit-button">
      <button onClick={handleClick} disabled={loading}>
        {loading ? 'Loading...' : 'AIに質問をする'}
      </button>
      <style jsx>{`
        .submit-button {
          display: flex;
          justify-content: center;
          margin-top: 20px;
        }
      `}</style>
    </div>
  );
};

export default SubmitButton;
