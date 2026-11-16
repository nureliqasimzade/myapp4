import useProducts from "@/context/ProductsContext";
import { router } from "expo-router";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function AddProductScreen() {
  const { addProduct } = useProducts();

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const addHandler = () => {
    if (!name.trim() || !price.trim()) {
      return;
    }

    addProduct(name, Number(price), description);

    router.back();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>New Product</Text>

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

      <TouchableOpacity style={styles.btn} onPress={addHandler}>
        <Text style={styles.btnText}>Add Product</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.back()}>
        <Text style={styles.cancel}>Cancel</Text>
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
    color: "red",
    marginTop: 20,
  },
});
