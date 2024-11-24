import axios from 'axios';

const s3appendLogApi = async (text: string) => {
  const apiUrl = '/api/appendLog';

  try {
    const response = await axios.post(apiUrl, {
      text
    });

    return response.data.responseText;
  } catch (error) {
    console.error('s3appendLogApi.ts:S3AppendLog API Error:', error);
    return '';
  }
};

export default s3appendLogApi;
