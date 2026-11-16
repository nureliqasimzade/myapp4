import useProducts from "@/context/ProductsContext";
import { useEffect } from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function HomeScreen() {
  const { products } = useProducts();

  useEffect(() => {
    console.log(products);
  }, [products]);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Products</Text>

      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.item}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.price}>{item.price} AZN</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  item: {
    padding: 15,
    backgroundColor: "#e0e0e0",
    marginBottom: 10,
    borderRadius: 8,
    width: 300,
  },
  name: {
    fontSize: 22,
  },
  price: {
    fontSize: 18,
    color: "green",
  },
});
