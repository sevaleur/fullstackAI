import { SignIn } from "@clerk/nextjs"

const SignInPage = () => {
  return (
    <div className="form__page">
      <SignIn fallbackRedirectUrl={'/journal'} forceRedirectUrl={'/journal'}/>
    </div>
  )
}

export default SignInPage