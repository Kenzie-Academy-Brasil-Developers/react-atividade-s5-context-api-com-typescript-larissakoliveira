import { ReactNode } from "react";
import { CartProvider } from "./Cart";

interface CartProps {
    children: ReactNode;
}

export const Providers = ({ children }:CartProps) => {
  return (
    <CartProvider>
        {children}
    </CartProvider>
  );
};
