"use client";

import { useState } from "react";
import Header from "../Header/Header";
import Nav from "../Nav/Nav";

export default function ClientWrapper({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isNavVisible, setIsNavVisible] = useState<boolean>(false);

  return (
    <>
      <Header setIsNavVisible={setIsNavVisible} />
      <Nav isVisible={isNavVisible} setIsNavVisible={setIsNavVisible} />
    </>
  );
}
