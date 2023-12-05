import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  GestureResponderEvent,
  LayoutAnimation,
} from "react-native";
import { List, TextInput } from "react-native-paper";

interface TextInputInterface {
  inputType: "list" | "textInput";
  label: string;
  maxLength: number;
  //   password: string;
  //   serverAddress: string;
  //   serverPath?: string;
  //   port?: number;
}
function InputWithLeftTextComponent({
  inputType,
  label,
  maxLength,
}: TextInputInterface) {
  const [selectedItem, setSelectedItem] = useState<string>("");
  const [expanded, setExpanded] = useState(false);
  const handlePress = () => {
    setExpanded(!expanded);
    LayoutAnimation.easeInEaseOut();
  };
  const handleItemPress = (item: string) => {
    setSelectedItem(item);
    setExpanded(false);
    LayoutAnimation.easeInEaseOut();
  };

  return (
    <View>
      {inputType === "list" ? (
        <List.Accordion
          title={selectedItem ? selectedItem : label}
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
      ) : inputType === "textInput" ? (
        <TextInput label={label} maxLength={maxLength} />
      ) : null}
    </View>
  );
}

export default InputWithLeftTextComponent;
const styles = StyleSheet.create({
  inputText: {
    padding: 4,
    marginLeft: 4,
    width: "100%",
  },
});
