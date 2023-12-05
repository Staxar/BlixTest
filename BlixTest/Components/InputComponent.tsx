import { useState } from "react";
import { Dispatch, SetStateAction } from "react";
import { LayoutAnimation, View } from "react-native";
import { List, TextInput } from "react-native-paper";

interface TextInputInterface {
  inputType: "list" | "textInput";
  keyBoardType?: "numberInput" | "default";
  label: string;
  maxLength: number;
  secureText?: boolean;
  contentType?: "username" | "URL" | "password" | "none";
}

interface ListInputInterface extends TextInputInterface {
  selectedValue?: string;
  onSelectValue?: Dispatch<SetStateAction<string>>;
  value?: string;
  onChangeText?: Dispatch<SetStateAction<string>>;
}

function InputComponent({
  inputType,
  label,
  maxLength,
  secureText,
  selectedValue,
  onSelectValue,
  value,
  onChangeText,
  keyBoardType,
  contentType,
}: ListInputInterface) {
  const [expanded, setExpanded] = useState(false);

  const handlePress = () => {
    setExpanded(!expanded);
    LayoutAnimation.easeInEaseOut();
  };

  const handleItemPress = (item: string) => {
    onSelectValue && onSelectValue(item);
    setExpanded(false);
    LayoutAnimation.easeInEaseOut();
  };

  return (
    <View>
      {inputType === "list" && (
        <List.Accordion
          title={selectedValue || label}
          expanded={expanded}
          onPress={handlePress}
          key={"Account Type"}
        >
          <List.Item
            title="Advanced"
            onPress={() => handleItemPress("Advanced")}
          />
          <List.Item title="Manual" onPress={() => handleItemPress("Manual")} />
        </List.Accordion>
      )}
      {inputType === "textInput" && (
        <TextInput
          label={label}
          maxLength={maxLength}
          contentStyle={{ backgroundColor: "#fff" }}
          secureTextEntry={secureText}
          value={value}
          onChangeText={onChangeText}
          keyboardType={
            keyBoardType === "numberInput" ? "number-pad" : "default"
          }
          textContentType={contentType}
        />
      )}
    </View>
  );
}

export default InputComponent;
