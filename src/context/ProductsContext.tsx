import { createContext, useContext, useState } from "react";

export type Product = {
  id: string;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
};

type ProductsContextType = {
  products: Product[];
  addProduct: (name: string, price: number, description: string) => void;
  updateProduct: (
    id: string,
    name: string,
    price: number,
    description: string,
  ) => void;
};

const initialProducts: Product[] = [
  {
    id: "1",
    name: "iPhone 15",
    price: 1900,
    description: "Apple smartphone, 128GB",
    imageUrl: "",
  },
  {
    id: "2",
    name: "Samsung S24",
    price: 1700,
    description: "Samsung smartphone, 256GB",
    imageUrl: "",
  },
  {
    id: "3",
    name: "AirPods Pro",
    price: 450,
    description: "Wireless headphones",
    imageUrl: "",
  },
];

const ProductsContext = createContext<ProductsContextType | undefined>(
  undefined,
);

export function ProductsProvider({ children }: { children: React.ReactNode }) {
  const [products, setProducts] = useState<Product[]>(initialProducts);

  const addProduct = (name: string, price: number, description: string) => {
    const newProduct: Product = {
      id: Date.now().toString(),
      name,
      price,
      description,
      imageUrl: "",
    };

    setProducts((prev) => [...prev, newProduct]);
  };

  const updateProduct = (
    id: string,
    name: string,
    price: number,
    description: string,
  ) => {
    setProducts((prev) =>
      prev.map((product) =>
        product.id === id
          ? { ...product, name, price, description }
          : product,
      ),
    );
  };

  return (
    <ProductsContext.Provider value={{ products, addProduct, updateProduct }}>
      {children}
    </ProductsContext.Provider>
  );
}

export default function useProducts() {
  const context = useContext(ProductsContext);

  if (!context) {
    throw new Error("useProducts must be used inside ProductsProvider");
  }
  return context;
}
