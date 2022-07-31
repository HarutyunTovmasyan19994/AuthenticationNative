import React, { useState } from "react";
import { View, Text, Alert } from "react-native";
import { styles } from "../../styled/style";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/customButton";
import {useNavigation} from "@react-navigation/native";
import {useForm} from "react-hook-form";
import { Auth } from "aws-amplify";

const NewPasswordScreen = () => {
  const {control,handleSubmit} = useForm()
  const navigation = useNavigation()

  const onSubmitPressed = async (data) => {
    try {
      await Auth.forgotPasswordSubmit(data.username,data.code,data.password);
      navigation.navigate("SignIn")
    } catch (e) {
      Alert.alert("Oops", e.message);
    }
    // navigation.navigate("Home")
  };
  const onSignInPress = () => {
   navigation.navigate("SignIn")
  };

  return (
    <View style={styles.root}>
      <Text style={styles.title}>Reset your Password</Text>
      <CustomInput
        name="username"
        control={control}
        placeholder="Username"
        secureTextEntry={false}
        rules={{
          required: "Username is required",
        }}
      />
      <CustomInput
        name="code"
        control={control}
        placeholder="Code"
        secureTextEntry={false}
        rules={{
          required: "Code is required",
          maxLength: {
            value: 4,
            message: "Username should be at least 4 characters long",
          },
        }}
      />
      <CustomInput
        name="password"
        control={control}
        placeholder="Enter your new password"
        secureTextEntry={true}
        rules={{
          required: "Password is required",
          minLength: {
            value: 8,
            message: "Password should be at least 8 characters long",
          },
        }}
      />
      <CustomButton
        text="Submit"
        onPress={handleSubmit(onSubmitPressed)}
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
