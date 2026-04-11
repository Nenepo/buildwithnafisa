"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Loading from "./Loading";

export default function LoadingProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 600);

    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <>
      {isLoading && <Loading />}
      {children}
    </>
  );
}
