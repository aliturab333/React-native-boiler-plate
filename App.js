/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from "react";
import { StatusBar, StyleSheet } from "react-native";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { persistor, store } from "./src/store/Store";
import Router from "./src/routes/Router";
function App() {

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <StatusBar
          translucent={true}
          barStyle="light-content"
          backgroundColor={"transparent"}
        />
        <Router />
      </PersistGate>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default App;
