import React, { useState } from "react";
import { View, Text } from "react-native";
import { styles } from "../../styled/style";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/customButton";
import {useNavigation} from "@react-navigation/native";

const NewPasswordScreen = () => {
  const [code, setCode] = useState("");
  const [newPassword,setNewPassword] = useState("")
  const navigation = useNavigation()

  const onSubmitPressed = () => {
    navigation.navigate("Home")
  };
  const onSignInPress = () => {
   navigation.navigate("SignIn")
  };

  return (
    <View style={styles.root}>
      <Text style={styles.title}>Reset your Password</Text>
      <CustomInput
        placeholder="Code"
        value={code}
        setValue={setCode}
        secureTextEntry={false}
      />
      <CustomInput
        placeholder="Enter your new password"
        value={newPassword}
        setValue={setNewPassword}
        secureTextEntry={true}
      />
      <CustomButton
        text="Submit"
        onPress={onSubmitPressed}
        type="PRIMARY"
      />

      <CustomButton
        text="Back to Sign IN"
        onPress={onSignInPress}
        type="TERTIARY"
      />
    </View>
  );
};


export default NewPasswordScreen;
