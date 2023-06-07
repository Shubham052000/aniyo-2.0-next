"use client";
import { Input } from "@/components/ui/input";
import React, { useEffect, useRef } from "react";

const page = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div className="mx-auto mt-8 w-1/2">
      <Input
        ref={inputRef}
        className="h-16 text-xl"
        placeholder="What's on your mind today?"
      />
    </div>
  );
};

export default page;
