import { useState, useEffect } from "react";
import { View, StyleSheet, Text } from "react-native";
import InputComponent from "./InputComponent";
import { Button, Checkbox } from "react-native-paper";

const FormComponent = () => {
  const [accountType, setAccountType] = useState<string>("");
  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [serverAddress, setServerAddress] = useState<string>("");
  const [serverPath, setServerPath] = useState<string>("");
  const [port, setPort] = useState<string>("");
  const [useSSL, setUseSSL] = useState<boolean>(false);

  useEffect(() => {
    setServerPath("");
    setPort("");
    setUseSSL(false);
  }, [accountType]);

  const validateServerAddress = (address: string): boolean => {
    const urlRegex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
    return urlRegex.test(address);
  };

  const validateUsername = (username: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(username);
  };

  const validateServerPath = (path: string): boolean => {
    const alphanumericRegex = /^[a-zA-Z0-9]*$/;
    return alphanumericRegex.test(path);
  };

  const handlePress = () => {
    let alertMessage = "Please fill in all fields";
    let decimal =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    if (!password.match(decimal)) {
      return alert("Wrong password!");
    }
    if (!validateServerAddress(serverAddress)) {
      return alert("Invalid Server Address! Please enter a valid URL.");
    }

    if (!validateUsername(userName)) {
      return alert("Invalid Username! Please enter a valid email address.");
    }

    if (serverPath && !validateServerPath(serverPath)) {
      return alert(
        "Invalid Server Path! Please use only alphanumeric characters."
      );
    }

    if (accountType === "Advanced") {
      if (
        !accountType ||
        !userName ||
        !password ||
        !serverAddress ||
        !serverPath ||
        !port
      ) {
        alert(alertMessage);
        return;
      } else {
        const formData = {
          accountType,
          userName,
          password,
          serverAddress,
          serverPath,
          port,
          useSSL,
        };
        alertMessage = `\n\nForm Data:\n${JSON.stringify(formData, null, 2)}`;
        alert(alertMessage);
      }
    } else {
      if (!accountType || !userName || !password || !serverAddress) {
        alert(alertMessage);
        return;
      } else {
        const formData = {
          accountType,
          userName,
          password,
          serverAddress,
          useSSL,
        };
        alertMessage = `\n\nForm Data:\n${JSON.stringify(formData, null, 2)}`;
        return alert(alertMessage);
      }
    }
  };
  return (
    <View style={styles.outerContainer}>
      <InputComponent
        inputType="list"
        label="Account Type"
        maxLength={20}
        selectedValue={accountType}
        onSelectValue={setAccountType}
      />
      <InputComponent
        inputType="textInput"
        label="User Name"
        maxLength={255}
        value={userName}
        onChangeText={setUserName}
        contentType="username"
      />
      <InputComponent
        inputType="textInput"
        label="Password"
        maxLength={50}
        secureText={true}
        value={password}
        onChangeText={setPassword}
        contentType="password"
      />
      <InputComponent
        inputType="textInput"
        label="Server Address"
        maxLength={255}
        value={serverAddress}
        onChangeText={setServerAddress}
        contentType="URL"
      />
      {accountType === "Advanced" && (
        <View>
          <InputComponent
            inputType="textInput"
            label="Server Path"
            maxLength={255}
            value={serverPath}
            onChangeText={setServerPath}
          />
          <InputComponent
            inputType="textInput"
            label="Port"
            maxLength={4}
            value={port}
            onChangeText={setPort}
            keyBoardType="numberInput"
          />
          <View style={styles.checkbox}>
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
  checkbox: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    alignSelf: "flex-end",
  },
});
