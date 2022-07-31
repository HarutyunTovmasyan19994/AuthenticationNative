import React, { useState } from "react";
import { View, Text, Image, useWindowDimensions, Alert } from "react-native";
import Logo from "../../../assets/images/Logo_1.png";
import { styles } from "../../styled/style";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/customButton";
import SocialSignInButtons from "../../components/SocialSignInButtons";
import { useNavigation } from "@react-navigation/native";
import { useForm, Controller } from "react-hook-form";
import { Auth } from "aws-amplify";

const SignInScreen = () => {
  const [loading, setLoading] = useState(false);
  const { height } = useWindowDimensions();
  const navigation = useNavigation();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSinInPress = async (data) => {
    if (loading) {
      return;
    }
    setLoading(true);
    try {
      const response = await Auth.signIn(data.username, data.password);
      console.log(response);
      navigation.navigate("Home");
    } catch (e) {
      Alert.alert("Ops", e.message);
    }
    setLoading(false);
  };
  const onForgotPasswordPress = () => {
    navigation.navigate("ForgotPassword");
  };
  const onSignUpPress = () => {
    navigation.navigate("SignUp");
  };
  return (
    <View style={styles.root}>
      <Image source={Logo} style={[styles.logo, { height: height * 0.3 }]} resizeMode="contain" />
      <CustomInput
        control={control}
        name="username"
        placeholder="Username"
        secureTextEntry={false}
        rules={{ required: "Username is required" }}
      />
      <CustomInput
        control={control}
        name="password"
        placeholder="Password"
        secureTextEntry={true}
        rules={{
          required: "Password is required",
          minLength: {
            value: 3,
            message: "Password should be minimum 3 characters long",
          },

        }}
      />

      <CustomButton
        text={loading ? "Loading...":"Sign In"}
        onPress={handleSubmit(onSinInPress)}
        type="PRIMARY"
      />
      <CustomButton
        text="Forgot Password"
        onPress={onForgotPasswordPress}
        type="TERTIARY"
      />
      <SocialSignInButtons />
      <CustomButton
        text="Don't have account ? create one"
        onPress={onSignUpPress}
        type="TERTIARY"
      />
    </View>
  );
};


export default SignInScreen;
