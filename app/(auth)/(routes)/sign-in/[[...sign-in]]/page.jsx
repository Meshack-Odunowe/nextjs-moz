import { SignIn } from "@clerk/nextjs";
export default function Page() {
  return (
    <div className=" mx-auto">
      <SignIn className=" mx-auto" />
    </div>
  );
}
