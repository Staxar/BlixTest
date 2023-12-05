import { StyleSheet, Text, View } from "react-native";
import FormComponent from "./Components/FormComponent";
import { PaperProvider } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
export default function App() {
  return (
    <PaperProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.innerContainer}>
          <FormComponent />
        </View>
      </SafeAreaView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 14,
    backgroundColor: "#fff",
  },
  innerContainer: {
    flex: 1,
    width: "100%",
    padding: 14,
    alignItems: "center",
    justifyContent: "center",
  },
});
