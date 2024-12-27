"use client";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const GoBack = () => {
  const router = useRouter();
  return (
    <div onClick={() => router.back()}>
      <div className="md:inline-flex items-center gap-2 px-4 py-2 text-sm text-green-50 bg-green-600 rounded-full hover:bg-green-500 transition-colors fixed hidden top-32 left-64">
        <ArrowLeft className="w-4 h-4" />
        Go Back
      </div>
    </div>
  );
};

export default GoBack;
