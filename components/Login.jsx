"use client";
import React, { useEffect } from "react";
import { FcGoogle } from "react-icons/fc";
import { signinWithGoogle } from "../server/authentication";
import { useRouter } from "next/navigation";
import { getSession } from "@/lib/utils";
import { Button } from "./ui/button";
import { useStore } from "@/store/store";

const Login = () => {
  const router = useRouter();
  const setIsLoggedIn = useStore((state) => state.setIsLoggedIn);

  const uid = getSession("uid");

  useEffect(() => {
    if (uid) {
      router.push("/");
    }
  }, [uid]);

  return (
    <div>
      <Button
        className="hover:bg-slate-100 hover:text-slate-900 hover:border hover:border-slate-900"
        onClick={() =>
          signinWithGoogle().then(() => {
            setIsLoggedIn(true);
            router.push("/");
          })
        }
      >
        Login with <FcGoogle size="1.2rem" className="ml-2" />
      </Button>
    </div>
  );
};

export default Login;
