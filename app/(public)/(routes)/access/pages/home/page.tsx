"use client"
import { useEffect } from "react";

/* this page just redirect the user to https://access.oui-connect.fr/ */

export default function Page() {
    
  useEffect(() => {
    window.location.href = "https://access.oui-connect.fr/";
  }, []);
  return null;
}