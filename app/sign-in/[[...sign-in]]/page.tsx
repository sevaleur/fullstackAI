import { SignIn } from "@clerk/nextjs"

const SignInPage = () => {
  return (
    <div className="form__page">
      <SignIn fallbackRedirectUrl={'/dashboard'} forceRedirectUrl={'/dashboard'}/>
    </div>
  )
}

export default SignInPage