import React, { useState } from "react";
import { View, Text } from "react-native";
import { styles } from "../../styled/style";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/customButton";
import { useNavigation } from "@react-navigation/native";

const ForgotPasswordScreen = () => {
  const [username, setUsername] = useState("");
  const navigation = useNavigation();

  const onSendPressed = () => {
    navigation.navigate("NewPassword")
  };
  const onSignInPress = () => {
   navigation.navigate("SignIn")
  };

  return (
    <View style={styles.root}>
      <Text style={styles.title}>Reset your Password</Text>
      <CustomInput
        placeholder="Username"
        value={username}
        setValue={setUsername}
        secureTextEntry={false}
      />
      <CustomButton
        text="Send"
        onPress={onSendPressed}
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


export default ForgotPasswordScreen;
