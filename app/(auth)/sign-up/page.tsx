'use client';
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import InputField from "@/components/forms/InputField";
import SelectField from "@/components/forms/SelectField";
import { INVESTMENT_GOALS, } from "@/lib/const";
import FooterLink from "@/components/forms/FooterLink";
import { signUpWithEmail } from "@/lib/actions/auth.actions";
import { useRouter } from "next/navigation";

interface SignUpFormData {
  fullName: string;
  email: string;
  password: string;
  investmentGoals: string;
}


const SignUp = () => {

  const route = useRouter()

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<SignUpFormData>({
    defaultValues: {
      fullName: '',
      email: '',
      password: '',
      investmentGoals: ''
    },
    mode: 'onBlur'
  },);

  const onSubmit = async (data: SignUpFormData) => {
    try {
      const result = await signUpWithEmail(data);
      if (result.success) route.push('/');
    } catch (error) {
      console.error('Sign up failed:', error);
    }
  }




  return (
    <div>
      <h1 className="form-title pt-7">Sign Up</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <InputField
          name="fullName"
          label="Full Name"
          register={register}
          error={errors.fullName}
          validation={{ required: 'Full Name is required' }}
        />
        <InputField
          name="email"
          label="Email"
          register={register}
          error={errors.email}
          validation={{ required: 'Email is required', pattern: { value: /^\w+@\w+\.\w+$/, message: 'Invalid email address' } }}
        />
        <InputField
          name="password"
          label="Password"
          placeholder="At least 8 characters"
          type="password"
          register={register}
          error={errors.password}
          validation={{ required: 'Strong password is required', minLength: { value: 8, message: 'Password must be at least 8 characters' } }}
        />

        <SelectField
          name="investmentGoals"
          label="Investment Goals"
          placeholder="Select your investment goal"
          options={INVESTMENT_GOALS}
          control={control}
          error={errors.investmentGoals}
          required
        />

        <Button type="submit" disabled={isSubmitting} className="w-full mt-5 bg-blue-700 hover:bg-blue-400 text-white">
          {isSubmitting ? 'Creating Account...' : 'Start Your Journey'}

        </Button>
        <FooterLink text="Already have an account? " linkText="Sign In" href="/sign-in" />

      </form>

    </div>
  )
}

export default SignUp;