import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import { ICreateAccount } from '../interfaces/user/IUser';

const schema = yup
  .object({
    names: yup.string().required('El nombre es obligatorio'),
    email: yup
      .string()
      .required('El correo debe ser obligatorio')
      .email('El correo no es válido'),
    validEmail: yup
      .string()
      .required('Confirmar el correo es obligatorio')
      .email('El correo no es válido')
      .oneOf([yup.ref('email'), null], 'Los correos no coinciden'),
    password: yup.string().required('La contraseña es obligatoria'),
    validPassword: yup
      .string()
      .oneOf([yup.ref('password'), null], 'Las contraseñas no coinciden'),
    phone: yup.string().required('El teléfono es obligatorio'),
  })
  .required();

export default function CreateAccountForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ICreateAccount>({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data: ICreateAccount) => {
    console.log(data);
    return false;
  };
  return (
    <section className="flex flex-col justify-center items-center h-full md:h-[105vh]">
      <form
        className="transparent rounded p-2 text-black dark:text-white"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className="font-bold text-lg md:text-2xl">
          Crea tu cuenta en adminsin
        </h1>
        <div className="flex flex-col m-1">
          <label htmlFor="names">Nombre completo:</label>
          <input
            type="text"
            id="names"
            className="border rounded p-2"
            placeholder="Nombre completo"
            {...register('names')}
          />
          <p className="text-red-600 font-bold">{errors.names?.message}</p>
        </div>
        <div className="flex flex-col m-1">
          <label htmlFor="email">Correo:</label>
          <input
            type="email"
            id="email"
            className="border rounded p-2"
            placeholder="example@example.com"
            {...register('email')}
          />
          <p className="text-red-600 font-bold">{errors.email?.message}</p>
        </div>
        <div className="flex flex-col m-1">
          <label htmlFor="validEmail">Confirmar correo:</label>
          <input
            type="email"
            id="validEmail"
            className="border rounded p-2"
            placeholder="Confirmar correo"
            {...register('validEmail')}
          />
        </div>
        <p className="text-red-600 font-bold">{errors.validEmail?.message}</p>
        <div className="flex flex-col m-1">
          <label htmlFor="password">Contraseña:</label>
          <input
            type="text"
            id="password"
            className="border rounded p-2"
            placeholder="Contraseña"
            {...register('password')}
          />
        </div>
        <p className="text-red-600 font-bold">{errors.password?.message}</p>
        <div className="flex flex-col m-1">
          <label htmlFor="validPassword">Confirmar contraseña:</label>
          <input
            type="text"
            id="validPassword"
            className="border rounded p-2"
            placeholder="Confirmar Contraseña"
            {...register('validPassword')}
          />
        </div>
        <p className="text-red-600 font-bold">
          {errors.validPassword?.message}
        </p>
        <div className="flex flex-col m-1">
          <label htmlFor="phone">Teléfono:</label>
          <input
            type="text"
            id="phone"
            className="border rounded p-2"
            placeholder="+58 04241865695"
            {...register('phone')}
          />
          <p className="text-red-600 font-bold">{errors.phone?.message}</p>
        </div>
        <div className="flex flex-col my-2 mx-1">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            type="submit"
          >
            Crear cuenta
          </button>
        </div>
      </form>
    </section>
  );
}
