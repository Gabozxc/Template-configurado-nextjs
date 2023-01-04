import { useQuery, useQueryClient } from 'react-query';
import { getUsers } from '../api/getUsers';
import { Data } from '../interfaces/Data';

const useGetUsers = (id: number) => {
  const queryClient = useQueryClient();
  const allCharacters = queryClient
    .getQueryCache()
    .findAll(['personaje'], { exact: false });

  return useQuery<Data, Error>(['personaje', id], () => getUsers(id), {
    initialData: () => {
      const nameLoading: Data = {
        name: 'Loading...',
      };
      const defaultName =
        allCharacters.length > 0
          ? allCharacters[allCharacters.length - 1]?.state?.data
          : nameLoading;
      const character = defaultName;
      return character;
    },
    refetchOnWindowFocus: false,
  });
};

export default useGetUsers;
