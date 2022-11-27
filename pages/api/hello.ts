import type { NextApiRequest, NextApiResponse } from 'next';
import type { Data } from '../interfaces/Data';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ name: 'Soy la api prueba' });
}
