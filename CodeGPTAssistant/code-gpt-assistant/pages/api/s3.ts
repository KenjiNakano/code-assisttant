import AWS from "aws-sdk";

const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
});

interface AppendLogToS3Params {
  bucketName: string;
  key: string;
  log: string;
}

export async function appendLogToS3({ bucketName, key, log }: AppendLogToS3Params) {
  try {
    const getObjectResponse = await s3.getObject({ Bucket: bucketName, Key: key }).promise();
    const updatedLog = getObjectResponse.Body?.toString() + "\n" + log;

    const putObjectResponse = await s3
      .putObject({ Bucket: bucketName, Key: key, Body: updatedLog, ContentType: "text/plain" })
      .promise();

    return putObjectResponse;
  } catch (error) {
    console.error("Error appending log to S3:", error);
    throw error;
  }
}