import type { NextApiRequest, NextApiResponse } from 'next';
import { Data } from '../../interfaces/Data';

//Function type Data
export default async function handler(
  req: NextApiRequest,
  response: NextApiResponse<Data>
) {
  let error = false;
  const getCharacter: Data = await fetch(
    `https://rickandmortyapi.com/api/character/${req?.query.id}`
  )
    .then((res) => res.json())
    .catch((err) => {
      error = true;
      return err.json();
    });

  if (error) return response.status(500).json(getCharacter);

  const data: Data = {
    name: getCharacter.name,
  };

  return response.status(200).json(data);
}
