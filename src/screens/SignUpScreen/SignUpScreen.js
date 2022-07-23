import React, { useState } from "react";
import { View, Text, ScrollView } from "react-native";
import { styles } from "../../styled/style";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/customButton";
import SocialSignInButtons from "../../components/SocialSignInButtons";
import {useNavigation} from "@react-navigation/native";

const SignUpScreen = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");
  const navigation = useNavigation()


  const onRegisterPress = () => {
    navigation.navigate("ConfirmEmail")
  };

  const onSignInPress = () => {
    navigation.navigate("SignIn")
  };
  const onTermsOfUserPressed = () => {
    console.warn("onTermsOfUserPressed")
  };
  const onPrivacyPressed = () => {
    console.warn("onPrivacyPressed")
  };
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Create an account</Text>
        <CustomInput
          placeholder="Username"
          value={username}
          setValue={setUsername}
          secureTextEntry={false}
        />
        <CustomInput
          placeholder="Email"
          value={email}
          setValue={setEmail}
          secureTextEntry={false}
        />
        <CustomInput
          placeholder="Password"
          value={password}
          setValue={setPassword}
          secureTextEntry={true}
        />
        <CustomInput
          placeholder="Repeat Password"
          value={passwordRepeat}
          setValue={setPasswordRepeat}
          secureTextEntry={true}
        />
        <CustomButton
          text="Register"
          onPress={onRegisterPress}
          type="PRIMARY"
        />

        <Text style={styles.textRegister}>
          By Registering, you confirm that you accept our{" "}
          <Text style={styles.link} onPress={onTermsOfUserPressed}>Terms of Use</Text> and{"  "}
          <Text style={styles.link} onPress={onPrivacyPressed}>Privacy Policy</Text>
        </Text>
        <SocialSignInButtons/>
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
