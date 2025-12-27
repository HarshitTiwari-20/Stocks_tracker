export default function SignIn() {


  const route = useRouter();

  const {
    register,
    handleSubmit,
    formState: {
      errors, isSubmitting
    },
  } =useForm<SignInFormData>({
    defaultValues:{
    email:'',
    password:''
  },
  mode:'onBlur' });
}

  return (
    <div>

    </div>
  )
}

