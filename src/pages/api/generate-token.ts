import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // try {

  //   const username = process.env.NEXT_PUBLIC_API_USERNAME;
  //   const password = process.env.NEXT_PUBLIC_API_PASSWORD;
  //   const contract = process.env.NEXT_PUBLIC_API_CONTRACT;
  //   const token = Buffer.from(`${username}:${password}`, 'utf-8').toString('base64');

  //   const response = await axios.post(
  //     `https://api.correios.com.br/token/v1/autentica/cartaopostagem`,
  //     {
  //       "numero": contract
  //     },
  //     {
  //       headers: {
  //         Authorization: `Basic ${token}`,
  //       },
  //     }
  //   );

  //   const data = response.data;
  //   res.status(200).json(data);
  // } catch (error) {
  //   console.error("Error fetching generate token:", error);
  //   res.status(500).json({ error: "Failed to fetch generate token" });
  // }
}
