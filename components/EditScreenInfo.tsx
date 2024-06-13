import React, { useState } from "react";
import { Button, StyleSheet, TextInput } from "react-native";
import { View } from "./Themed";

export default function LoginForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const data = { name, email, password };
  if (data.name === "Miguel Reina") console.log("Hola Miguel");
  return (
    <View style={styles.content}>
      <TextInput
        value={name}
        onChangeText={(name) => setName(name)}
        placeholder="Nombre"
        style={styles.input}
      />
      <TextInput
        value={email}
        onChangeText={(email) => setEmail(email)}
        placeholder="Correo electrónico"
        style={styles.input}
      />
      <TextInput
        value={password}
        onChangeText={(pass) => setPassword(pass)}
        placeholder="Contraseña"
        style={styles.input}
      />
      <Button title="Iniciar sesión" onPress={() => console.log(data)} />
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: "center",
    marginHorizontal: 20,
  },
  input: {
    alignItems: "center",
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 20,
    width: "100%",
    height: 50,
    marginBottom: 20,
    paddingLeft: 10,
  },
});
