interface SignUpData {
  fullName: string;
  email: string;
  password: string;
  investmentGoals: string;
}

interface SignInData {
  email: string;
  password: string;
}

export const signUpWithEmail = async (data: SignUpData) => {
  // TODO: Implement actual sign up logic, e.g., call API or auth provider
  console.log('Signing up with:', data);
  // Simulate success
  return { success: true };
};

export const signInWithEmail = async (data: SignInData) => {
  // TODO: Implement actual sign in logic, e.g., call API or auth provider
  console.log('Signing in with:', data);
  // Simulate success
  return { success: true };
};