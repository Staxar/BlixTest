import { View, StyleSheet } from "react-native";
import InputWithLeftTextComponent from "./InputWithLeftTextComponent";
import { Button, Checkbox } from "react-native-paper";

const FormComponent = () => {
  return (
    <View style={styles.outerContainer}>
      <InputWithLeftTextComponent
        inputType="list"
        label="Account Type"
        maxLength={20}
      />
      <InputWithLeftTextComponent
        inputType="textInput"
        label="User Name"
        maxLength={255}
      />
      <InputWithLeftTextComponent
        inputType="textInput"
        label="Password"
        maxLength={50}
      />
      <InputWithLeftTextComponent
        inputType="textInput"
        label="Server Address"
        maxLength={255}
      />
      <InputWithLeftTextComponent
        inputType="textInput"
        label="Server Path"
        maxLength={255}
      />
      <InputWithLeftTextComponent
        inputType="textInput"
        label="Port"
        maxLength={4}
      />
      <Checkbox status="checked" />

      <Button mode="contained" onPress={() => console.log("Pressed")}>
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
