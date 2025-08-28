import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}>
      <SignIn path="/sign-in" routing="path" signUpUrl="/sign-up"  />
    </div>
  );
}


