import React,{useState} from "react";
import { View, Text, Image, useWindowDimensions, TextInput } from "react-native";
import Logo from "../../../assets/images/Logo_1.png";
import { styles } from "../../styled/style";
import CustomInput from "../../components/CustomInput";
import CustomButton from '../../components/customButton'
import SocialSignInButtons from "../../components/SocialSignInButtons";
import {useNavigation} from "@react-navigation/native";

const SignInScreen = () => {
  const [username,setUsername] = useState('')
  const [password,setPassword] = useState('')
  const { height } = useWindowDimensions();
  const navigation = useNavigation()

  const onSinInPress =()=>{
    navigation.navigate("Home")
  }
  const onForgotPasswordPress =()=>{
    navigation.navigate("ForgotPassword")
  }
  const onSignUpPress =() =>{
    navigation.navigate("SignUp")
  }
  return (
    <View style={styles.root}>
      <Image source={Logo} style={[styles.logo, { height: height * 0.3 }]} resizeMode="contain" />
      {/*<CustomInput*/}
      {/*  placeholder='Username'*/}
      {/*  value={username}*/}
      {/*  setValue={setUsername}*/}
      {/*  secureTextEntry={false }*/}
      {/*/>*/}
      {/*<CustomInput*/}
      {/*  placeholder="Password"*/}
      {/*  value={password}*/}
      {/*  setValue={setPassword}*/}
      {/*  secureTextEntry={true}*/}
      {/*/>*/}
      <TextInput placeholder="username"/>
      <TextInput placeholder="Password"/>
      <CustomButton
        text="Sign In"
        onPress={onSinInPress}
        type="PRIMARY"
      />
      <CustomButton
        text="Forgot Password"
        onPress={onForgotPasswordPress}
        type="TERTIARY"
      />
      <SocialSignInButtons/>
      <CustomButton
        text="Don't have account ? create one"
        onPress={onSignUpPress}
        type="TERTIARY"
      />
    </View>
  );
};


export default SignInScreen;
