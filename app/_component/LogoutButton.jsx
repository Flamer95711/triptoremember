"use client";

import { logoutAction } from "../actions/auth";
import { redirect } from "next/navigation";
import { useActionState } from "react";

export default function LogoutButton() {
  const initialState = { success: false, error: null };
  const [state, action] = useActionState(logoutAction, initialState);

  if (state.success) {
    redirect("/login");
  }

  return (
    <form action={action}>
      <button
        type="submit"
        className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg font-medium transition-all duration-200 backdrop-blur-sm border border-white/20 hover:border-white/30 hover:shadow-lg hover:scale-105 active:scale-95"
      >
        Logout
      </button>
    </form>
  );
}
