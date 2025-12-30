'use server'

import { headers } from "next/headers"
import { auth } from "../better-auth/auth"
import { inngest } from "../inngest/client"



//---------------------------------------------------------------
// Sign Up
//---------------------------------------------------------------
export const signUpWithEmail = async ({ email, password, fullName }: SignUpFormData)=>{
  try{
    const response = await auth.api.signUpEmail({ body: { email, password, name: fullName }})

    if ( response ) {
      await inngest.send({
        name:'app/user.create',
        data:{ email, name: fullName }
      })
    }
    return { success: true, data: response}
  } catch (e) {
    console.log(' Sign up failed', e)
    return { success: false, error: ' Sign Up failed'}
  }
}

//---------------------------------------------------------------
// Sign In
//---------------------------------------------------------------


export const signInWithEmail = async ({ email, password }: SignInFormData ) => {
  try {
    const response = await auth.api.signInEmail({ body: { email, password }})
    return { success: true, data: response}
  } catch (e) {
    console.log(' Sign In fail', e)
    return { success: false, error: ' Sign in failed'}
  }
}



//---------------------------------------------------------------
// Sign Out
//---------------------------------------------------------------



export const singOut = async () => {
  try {
    await auth.api.signOut({ headers: await headers()})
  } catch (e) {
    console.log(' DignOut fail', e)
    return { success: false, error: ' Sign out failed'}
  }

}
