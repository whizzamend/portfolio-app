import React from "react";
import Navbar from "./Navbar";

export default function Footer({ givenDataAos }: { givenDataAos?: string }) {
  return (
    <div className="border-t mt-10">
      <Navbar className="flex-col gap-5" givenDataAos={givenDataAos} />
    </div>
  );
}
