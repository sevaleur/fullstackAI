import { SignUp } from "@clerk/nextjs"

const SignUpPage = () => {
  return (
    <div className="form__page">
      <SignUp fallbackRedirectUrl={'/new-user'} forceRedirectUrl={'/new-user'}/>
    </div>
  )
}

export default SignUpPage