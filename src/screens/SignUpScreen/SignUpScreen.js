import React from "react";
import { View, Text, ScrollView, Alert } from "react-native";
import { styles } from "../../styled/style";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/customButton";
import SocialSignInButtons from "../../components/SocialSignInButtons";
import { useNavigation } from "@react-navigation/native";
import { useForm } from "react-hook-form";
import { Auth } from "aws-amplify";

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

const SignUpScreen = () => {
  const { control, handleSubmit,watch } = useForm();
  const pwd = watch("password")
  const navigation = useNavigation();


  const onRegisterPress = async (data) => {
    const {username,password,email,name} = data
    try {
    await Auth.signUp({
      username,
      password,
      attributes:{email,name,preferred_username:username}
    })
      navigation.navigate("ConfirmEmail",{username});
    }catch (e) {
      Alert.alert("Oops",e.message)
    }



  };

  const onSignInPress = () => {
    navigation.navigate("SignIn");
  };
  const onTermsOfUserPressed = () => {
    console.warn("onTermsOfUserPressed");
  };
  const onPrivacyPressed = () => {
    console.warn("onPrivacyPressed");
  };
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Create an account</Text>
        <CustomInput
          name="name"
          control={control}
          placeholder="Name"
          secureTextEntry={false}
          rules={{
            required: "Name is required",
            minLength: {
              value: 3,
              message: "Name should be at least 3 characters long",
            },
            maxLength: {
              value: 24,
              message: "Name should be at least 24 characters long",
            },
          }}
        />
        <CustomInput
          name="username"
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
        <CustomInput
          name="email"
          control={control}
          placeholder="Email"
          secureTextEntry={false}
          rules={{
            pattern:{
              value:EMAIL_REGEX,
              message:"Email invalid"
            }
          }}
        />
        <CustomInput
          name="password"
          control={control}
          placeholder="Password"
          secureTextEntry={true}
          rules={{
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Password should be at least 8 characters long",
            },
          }}
        />
        <CustomInput
          name="repeatPassword"
          control={control}
          placeholder="Repeat Password"
          secureTextEntry={true}
          rules={{
            validate: value => value === pwd || "Password do not match",
          }}
        />
        <CustomButton
          text="Register"
          onPress={handleSubmit(onRegisterPress)}
          type="PRIMARY"
        />

        <Text style={styles.textRegister}>
          By Registering, you confirm that you accept our{" "}
          <Text style={styles.link} onPress={onTermsOfUserPressed}>Terms of Use</Text> and{"  "}
          <Text style={styles.link} onPress={onPrivacyPressed}>Privacy Policy</Text>
        </Text>
        <SocialSignInButtons />
        <CustomButton
          text="Have an account ? Sign IN"
          onPress={onSignInPress}
          type="TERTIARY"
        />
      </View>
    </ScrollView>
  );
};


export default SignUpScreen;
