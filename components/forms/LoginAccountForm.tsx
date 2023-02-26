import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import { ILogin } from '../interfaces/user/IUser';

const schema = yup
  .object({
    email: yup
      .string()
      .required('El correo debe ser obligatorio')
      .email('El correo no es válido'),
    password: yup.string().required('La contraseña es obligatoria'),
  })
  .required();

export default function LoginAccountForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILogin>({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data: ILogin) => {
    console.log(data);
    return false;
  };
  return (
    <section className="flex flex-col justify-center items-center h-full">
      <form
        className="transparent rounded p-2 text-black dark:text-white "
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className="font-bold text-lg md:text-2xl">
          Inicia sesion en admisin
        </h1>
        <div className="flex flex-col m-1 min-w-[250px]">
          <label htmlFor="email">Nombre completo:</label>
          <input
            type="text"
            id="email"
            className="border rounded p-2"
            placeholder="Nombre completo"
            {...register('email')}
          />
          <p className="text-red-600 font-bold">{errors.email?.message}</p>
        </div>
        <div className="flex flex-col m-1">
          <label htmlFor="password">Correo:</label>
          <input
            type="password"
            id="password"
            className="border rounded p-2"
            placeholder="example@example.com"
            {...register('password')}
          />
          <p className="text-red-600 font-bold">{errors.email?.message}</p>
        </div>
        <div className="flex flex-col my-2 mx-1">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            type="submit"
          >
            Iniciar sesion
          </button>
        </div>
        <div className="flex flex-col m-1">
          <p className="text-gray-600 bold dark:text-gray-300">
            No puedo iniciar sesion
          </p>
        </div>
      </form>
    </section>
  );
}
