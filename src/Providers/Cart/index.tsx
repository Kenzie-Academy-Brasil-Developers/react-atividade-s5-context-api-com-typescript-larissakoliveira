import { createContext, ReactNode, useContext, useState } from "react";

interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    image: string;
}

interface Product {
    productToBeDeleted: Product[];
}


interface CartProps {
    children: ReactNode;
}

interface CartProviderData {
    cart: Product[];
    addProduct: (product: Product) => void;
    deleteProduct: (product: Product) => void;
}

export const CartContext = createContext<CartProviderData>({} as CartProviderData);

export const CartProvider = ({ children }: CartProps) => {
    const [cart, setCart] = useState<Product[]>([]);

    const addProduct = (product: Product) => {
        setCart([...cart, product]);
    };

    const deleteProduct = (productToBeDeleted: number) => {
        const newCart = cart.filter(
            (product) => product.id !== productToBeDeleted.id
        );
    
    setCart(newCart);
};

return (
    <CartContext.Provider value={{ cart, addProduct, deleteProduct }}>{children}</CartContext.Provider>
);

};

export const useCart = () => useContext(CartContext);