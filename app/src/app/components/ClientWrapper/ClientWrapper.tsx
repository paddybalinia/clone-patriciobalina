"use client";

import { useState } from "react";
import Header from "../Header/Header";
import Nav from "../Nav/Nav";

export default function ClientWrapper() {
  const [isNavVisible, setIsNavVisible] = useState<boolean>(false);

  return (
    <>
      <Header setIsNavVisible={setIsNavVisible} />
      <Nav isVisible={isNavVisible} setIsNavVisible={setIsNavVisible} />
    </>
  );
}
