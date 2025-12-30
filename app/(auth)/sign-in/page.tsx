'use client';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';

import InputField from '@/components/forms/InputField';
import { signInWithEmail } from '@/lib/actions/auth';
import { Button } from '@/components/ui/button';
import FooterLink from '@/components/forms/FooterLink';

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
        name="email"
        label="Email"
        type="email"
        register= { register }
        error= { errors.email }
        validation= {{ required: 'Valid email is required', pattern: { value: /^\w+@\w+\.\w+$/, message: 'Invalid email address' } }}

      />
      <InputField
        name="password"
        label=" Password"
        placeholder=" Enter your Password"
        type="password"
        register = { register }
        error= { errors.password }
        validation = {{ required: ' Password is required', minLength: 8}}
      />
      <Button type="submit" disabled={isSubmitting}  className=" bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded" >
        {isSubmitting ? 'Signing In' : 'Sign In'}
      </Button>

       <FooterLink text="Don't have an account?" linkText="Create an account" href="/sign-up" />
     </form>

    </div>
  )
}

