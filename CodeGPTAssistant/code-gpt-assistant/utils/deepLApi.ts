import axios from 'axios';

const deepLApi = async (text: string, sourceLang: string, targetLang: string) => {
  const apiUrl = '/api/translate';

  try {
    const response = await axios.post(apiUrl, {
      text,
      source_lang: sourceLang,
      target_lang: targetLang,
    });

    return response.data.translatedText;
  } catch (error) {
    console.error('deepLApi.ts:DeepL API Error:', error);
    return '';
  }
};

export default deepLApi;
