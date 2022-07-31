import React, { useState } from "react";
import { View, Text, Alert } from "react-native";
import { styles } from "../../styled/style";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/customButton";
import { useNavigation } from "@react-navigation/native";
import { useForm } from "react-hook-form";
import { Auth } from "aws-amplify";

const ForgotPasswordScreen = () => {
  const { control, handleSubmit } = useForm();
  const navigation = useNavigation();

  const onSendPressed = async (data) => {
    try {
      await Auth.forgotPassword(data.username);
      navigation.navigate("NewPassword")
    } catch (e) {
      Alert.alert("Oops", e.message);
    }
  };
  const onSignInPress = () => {
    navigation.navigate("SignIn");
  };

  return (
    <View style={styles.root}>
      <Text style={styles.title}>Reset your Password</Text>
      <CustomInput
        name="forgotPassword"
        control={control}
        placeholder="Username"
        secureTextEntry={false}
        rules={{
          required: "Username is required",
          minLength: {
            value: 3,
            message: "Username should be at least 3 characters long",
          },
          maxLength: {
            value: 24,
            message: "Username should be at least 24 characters long",
          },
        }}
      />
      <CustomButton
        text="Send"
        onPress={handleSubmit(onSendPressed)}
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
