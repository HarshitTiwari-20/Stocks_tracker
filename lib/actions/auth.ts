interface SignUpData {
  fullName: string;
  email: string;
  password: string;
  investmentGoals: string;
}

export const signUpWithEmail = async (data: SignUpData) => {
  // TODO: Implement actual sign up logic, e.g., call API or auth provider
  console.log('Signing up with:', data);
  // Simulate success
  return { success: true };
};