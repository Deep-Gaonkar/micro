"use client";

import { RenameModal } from "@/components/modal/rename-modal";
import { ProModal } from "@/components/modal/pro-modal";
import { useEffect, useState } from "react";

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <>
      <RenameModal />
      <ProModal />
    </>
  );
};
