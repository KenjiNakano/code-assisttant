// pages/api/appendLog.ts
import { NextApiRequest, NextApiResponse } from "next";
import { appendLogToS3 } from "./s3";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    res.status(405).json({ message: "Method not allowed" });
    return
  }

  const { log } = req.body;
  if (!log) {
    res.status(400).json({ message: "Log data is required in the request body" });
    return;
  }

  try {
    const bucketName = <string>process.env.AWS_S3_BUCKET_NAME;
    const key = "logs/log.txt"; // Specify the file name/path in the S3 bucket where you want to append logs

    console.log(log)
    
    await appendLogToS3({ bucketName, key, log });
    res.status(200).json({ message: "Log appended successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error appending log to S3" });
  }
}
