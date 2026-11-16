import { ProductsProvider } from "@/context/ProductsContext";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <ProductsProvider>
      <Stack>
        <Stack.Screen name="index" options={{ title: "Home" }} />
      </Stack>
    </ProductsProvider>
  );
}
