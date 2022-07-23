/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from "react";
import { View, Text, SafeAreaView } from "react-native";

import Navigation from './src/navigation/mavigation'
import { styles } from "./src/styled/style";


const App: () => Node = () => {
  return (
    <SafeAreaView style={styles.rootApp}>
      <Navigation/>
    </SafeAreaView>
  );
};


export default App;
