"use client";

import { ReactNode, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

interface AosWrapperProps {
  children: ReactNode;
}

const AosWrapper = ({ children }: AosWrapperProps) => {
  useEffect(() => {
    AOS.init({ duration: 650 });
  }, []);

  return <>{children}</>;
};

export default AosWrapper;
