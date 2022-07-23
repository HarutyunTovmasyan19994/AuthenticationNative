/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from "react";
import { View, Text, SafeAreaView } from "react-native";
<<<<<<< HEAD

import Navigation from './src/navigation/mavigation'
import { styles } from "./src/styled/style";


const App: () => Node = () => {
  return (
    <SafeAreaView style={styles.rootApp}>
      <Navigation/>
=======
import Navigation from "./src/navigation/mavigation";
import { styles } from "./src/styled/style";
import Amplify,{Auth} from "aws-amplify";
import config from "./src/aws-exports";
Amplify.configure(config);

const App = () => {

  return (
    <SafeAreaView style={styles.rootApp}>
      <Navigation />
>>>>>>> bb5d1fb (hgjhgbjh)
    </SafeAreaView>
  );
};


<<<<<<< HEAD
export default App;
=======
export default App
>>>>>>> bb5d1fb (hgjhgbjh)
