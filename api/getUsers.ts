import axiosClient from '../config/axiosClient';
import { Data } from '../interfaces/Data';

export const getUsers = async (id: number) => {
  const response: Data = await axiosClient
    .get(`api/hello?id=${id}`)
    .then((res): Data => res.data)
    .catch((err) => err);
  return response;
};
