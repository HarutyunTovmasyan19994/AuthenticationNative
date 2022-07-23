import React, { useState } from "react";
import { View, Text } from "react-native";
import { styles } from "../../styled/style";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/customButton";
import {useNavigation} from "@react-navigation/native";

const ConfirmEmailScreen = () => {
  const [code, setCode] = useState("");
  const navigation =useNavigation()

  const onConfirmPressed = () => {
    navigation.navigate("Home")
  };
  const onSignInPress = () => {
    navigation.navigate("SignIn")
  };
  const onResetPressed = () => {
    console.warn("onResetPressed");
  }

  return (
    <View style={styles.root}>
      <Text style={styles.title}>Confirm your Email</Text>
      <CustomInput
        placeholder="Code"
        value={code}
        setValue={setCode}
        secureTextEntry={false}
      />
      <CustomButton
        text="Confirm"
        onPress={onConfirmPressed}
        type="PRIMARY"
      />
      <CustomButton
        text="Reset code"
        onPress={onResetPressed}
        type="SECONDARY"
      />
      <CustomButton
        text="Back to Sign IN"
        onPress={onSignInPress}
        type="TERTIARY"
      />
    </View>
  );
};


export default ConfirmEmailScreen;
