"use client"

import { useState, useEffect, ReactNode, FC } from "react";

interface WebsiteMountedProps {
  children: ReactNode;
}

const WebsiteMounted: FC<WebsiteMountedProps> = ({ children }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return children;
};

export default WebsiteMounted;
