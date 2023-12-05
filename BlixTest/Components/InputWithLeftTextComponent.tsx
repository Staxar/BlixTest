import { useState } from "react";
import { Dispatch, SetStateAction } from "react";
import { LayoutAnimation, View } from "react-native";
import { List, TextInput } from "react-native-paper";

interface TextInputInterface {
  inputType: "list" | "textInput";
  label: string;
  maxLength: number;
  secureText?: boolean;
}

interface ListInputInterface extends TextInputInterface {
  selectedValue?: string;
  onSelectValue?: Dispatch<SetStateAction<string>>;
  value?: string;
  onChangeText?: Dispatch<SetStateAction<string>>;
}

function InputWithLeftTextComponent({
  inputType,
  label,
  maxLength,
  secureText,
  selectedValue,
  onSelectValue,
  value,
  onChangeText,
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
          value={value || (selectedValue as string)}
          onChangeText={
            onChangeText || (onSelectValue as Dispatch<SetStateAction<string>>)
          }
        />
      )}
    </View>
  );
}

export default InputWithLeftTextComponent;
