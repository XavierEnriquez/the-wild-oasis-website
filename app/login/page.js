import SignInButton from "../_components/SignInButton";

export const metadata = {
  title: "Login",
};

export default function Page() {
  return (
    <div className="flex flex-col gap-10 mx-4 mt-10 items-center">
      <h2 className="text-3xl font-semibold text-center">
        Sign in to access the guest area
      </h2>

      <SignInButton />
    </div>
  );
}
