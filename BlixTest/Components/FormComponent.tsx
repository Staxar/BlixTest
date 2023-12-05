import { useState, useEffect } from "react";
import { View, StyleSheet, Text } from "react-native";
import InputWithLeftTextComponent from "./InputWithLeftTextComponent";
import { Button, Checkbox } from "react-native-paper";

const FormComponent = () => {
  const [accountType, setAccountType] = useState<string>("");
  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [serverAddress, setServerAddress] = useState<string>("");
  const [serverPath, setServerPath] = useState<string>("");
  const [port, setPort] = useState<string>("");
  const [useSSL, setUseSSL] = useState<boolean>(false);
  const handlePress = () => {
    if (accountType === "Manual") {
      if (
        !accountType ||
        !userName ||
        !password ||
        !serverAddress ||
        !serverPath ||
        !port
      ) {
        alert("Please fill in all fields");
        return;
      }
    } else {
      if (!accountType || !userName || !password || !serverAddress) {
        alert("Please fill in all fields");
        return;
      }
    }
  };
  return (
    <View style={styles.outerContainer}>
      <InputWithLeftTextComponent
        inputType="list"
        label="Account Type"
        maxLength={20}
        selectedValue={accountType}
        onSelectValue={setAccountType}
      />
      <InputWithLeftTextComponent
        inputType="textInput"
        label="User Name"
        maxLength={255}
        value={userName}
        onChangeText={setUserName}
      />
      <InputWithLeftTextComponent
        inputType="textInput"
        label="Password"
        maxLength={50}
        secureText={true}
        value={password}
        onChangeText={setPassword}
      />
      <InputWithLeftTextComponent
        inputType="textInput"
        label="Server Address"
        maxLength={255}
        value={serverAddress}
        onChangeText={setServerAddress}
      />
      {accountType === "Advanced" && (
        <View>
          <InputWithLeftTextComponent
            inputType="textInput"
            label="Server Path"
            maxLength={255}
            value={serverPath}
            onChangeText={setServerPath}
          />
          <InputWithLeftTextComponent
            inputType="textInput"
            label="Port"
            maxLength={4}
            value={port}
            onChangeText={setPort}
          />
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 4,
              alignSelf: "flex-end",
            }}
          >
            <Text>Use SSL</Text>
            <Checkbox
              status={useSSL ? "checked" : "unchecked"}
              onPress={() => setUseSSL(!useSSL)}
            />
          </View>
        </View>
      )}

      <Button mode="contained" onPress={handlePress}>
        Press me
      </Button>
    </View>
  );
};

export default FormComponent;

const styles = StyleSheet.create({
  outerContainer: {
    width: "100%",
    height: "auto",
    borderWidth: 1,
    padding: 14,
    borderRadius: 8,
    gap: 10,
  },
});
