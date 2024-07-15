import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { code, token } = req.query;

    const response = await axios.get(
      `https://api.correios.com.br/srorastro/v1/objetos/${code}?resultado=T`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const data = response.data;
    res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching tracking data:", error);
    res.status(500).json({ error: "Failed to fetch tracking data" });
  }
}
