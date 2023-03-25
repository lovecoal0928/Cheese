import fs from "fs";
import { NextApiRequest, NextApiResponse } from "next";
import fetch from "node-fetch";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {
    const { image } = req.body;

    // APIキーを環境変数から取得する
    const apiKey = process.env.NEXT_PUBLIC_GCP_KEY_SUB;

    // 画像をBase64エンコードする
    const imageData = fs.readFileSync(image);
    const base64Image = imageData.toString("base64");

    // Cloud Vision APIにリクエストを送信する
    const url = `https://vision.googleapis.com/v1/images:annotate?key=${apiKey}`;
    const body = {
        requests: [
            {
                image: {
                    content: base64Image,
                },
                features: [
                    {
                        type: "LABEL_DETECTION",
                        maxResults: 5,
                    },
                ],
            },
        ],
    };
    const response = await fetch(url, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
    });
    const data = await response.json();

    res.status(200).json(data);
}
