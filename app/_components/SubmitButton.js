"use client";

import { useFormStatus } from "react-dom";

// useFormStatus can only be consumed INSIDE a form. SubmitButton needs to be inside the form when clicked
export default function SubmitButton({ children, pendingLabel }) {
  const { pending } = useFormStatus();

  return (
    <button
      className="bg-accent-500 px-8 py-4 text-primary-800 font-semibold rounded-lg hover:text-primary-100 hover:bg-accent-600 transition-all disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-gray-300"
      disabled={pending}
    >
      {pending ? pendingLabel : children}
    </button>
  );
}
