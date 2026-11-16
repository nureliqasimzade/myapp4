import useProducts from "@/context/ProductsContext";
import { router, useLocalSearchParams } from "expo-router";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function ProductDetailsScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();

  const { products, updateProduct } = useProducts();

  const product = products.find((p) => p.id === id);

  const [name, setName] = useState(product?.name ?? "");
  const [price, setPrice] = useState(product?.price.toString() ?? "");
  const [description, setDescription] = useState(product?.description ?? "");

  const saveHandler = () => {
    if (!product || !name.trim() || !price.trim()) {
      return;
    }

    updateProduct(id, name, Number(price), description);

    router.back();
  };

  if (!product) {
    return (
      <View style={styles.container}>
        <Text>Product not found</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Edit Product</Text>

      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="Name"
      />

      <TextInput
        style={styles.input}
        value={price}
        onChangeText={setPrice}
        placeholder="Price"
        keyboardType="numeric"
      />

      <TextInput
        style={styles.input}
        value={description}
        onChangeText={setDescription}
        placeholder="Description"
      />

      <TouchableOpacity style={styles.btn} onPress={saveHandler}>
        <Text style={styles.btnText}>Save</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.back()}>
        <Text style={styles.cancel}>Go Back</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 25,
  },
  input: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 8,
    padding: 12,
    fontSize: 18,
    width: "100%",
    marginBottom: 15,
  },
  btn: {
    backgroundColor: "skyblue",
    padding: 15,
    borderRadius: 8,
  },
  btnText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  cancel: {
    fontSize: 18,
    color: "blue",
    marginTop: 20,
  },
});
