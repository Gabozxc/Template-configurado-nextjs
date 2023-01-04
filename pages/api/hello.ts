import type { NextApiRequest, NextApiResponse } from 'next';
import { Data } from '../../interfaces/Data';

//Function type Data
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  let error: boolean = false;
  const getCharacter: Data = await fetch(
    `https://rickandmortyapi.com/api/character/${req?.query.id}`
  )
    .then((res) => res.json())
    .catch((err) => {
      error = true;
      return err.json();
    });

  if (error) return res.status(500).json(getCharacter);

  const data: Data = {
    name: getCharacter.name,
  };

  return res.status(200).json(data);
}
