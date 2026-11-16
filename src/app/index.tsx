import useProducts from "@/context/ProductsContext";
import { router } from "expo-router";
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

      <TouchableOpacity
        style={styles.addBtn}
        onPress={() => router.push("/add-product")}
      >
        <Text style={styles.addBtnText}>+ Add Product</Text>
      </TouchableOpacity>

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
  addBtn: {
    backgroundColor: "skyblue",
    padding: 12,
    borderRadius: 8,
    marginBottom: 20,
  },
  addBtnText: {
    fontSize: 18,
    fontWeight: "bold",
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
