'use client';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';

import InputField from '@/components/forms/InputField';
import { signInWithEmail } from '@/lib/actions/auth';


interface SignInFormData {
  email: string;
  password: string;
}


export default function SignIn() {

const route = useRouter();



  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormData>({
    defaultValues: {
      email: '',
      password: ''
    },
    mode: 'onBlur'
  },);

  const onSubmit = async ( data: SignInFormData) => {
    try {
      const result = await signInWithEmail(data);
      if (result.success) route.push('/');
    }
    catch (error) {
      console.error('Sign in failed: ', error);
    }
  }




  return (
    <div>

     <h1 className=" form-title pt-7 ">Sign In</h1>
     <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <InputField
        email="email"
        label="Email"
        register= { register }
        error= { errors.email }
        valdation= {{ required: 'Valid email is required', pattern: { value: /^\w+@\w+\.\w+$/, message: 'Invalid email address' } }}

      />

     </form>

    </div>
  )
}

