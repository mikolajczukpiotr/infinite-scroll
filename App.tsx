import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { UserList } from "./src/UserList";
import { QueryClientProvider } from "react-query";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { queryClient } from "./src/utils";

export default function App() {
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <QueryClientProvider client={queryClient}>
          <UserList />
          <StatusBar style="auto" />
        </QueryClientProvider>
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
