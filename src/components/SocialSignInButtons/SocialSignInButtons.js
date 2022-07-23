import React from 'react'
import {View,Text} from "react-native";
import CustomButton from "../customButton";

const SocialSignInButtons =() => {
  const onSinInFacebook = () => {
    console.warn("  Sign In With Facebook");
  };
  const onSinInGoogle = () => {
    console.warn("  Sign In With Google");
  };
  const onSinInApple = () => {
    console.warn("  Sign In With Apple");
  };
  return(
    <>
      <CustomButton
        text="Sign In with Facebook"
        onPress={onSinInFacebook}
        bgColor="#e7eaf4"
        fgColor="#4765a9"
      />
      <CustomButton
        text="Sign In with Google"
        onPress={onSinInGoogle}
        bgColor="#fae9ea"
        fgColor="#dd4d44"
      />
      <CustomButton
        text="Sign In with Apple"
        onPress={onSinInApple}
        bgColor="#e3e3e3"
        fgColor="#363636"
      />
    </>
  )
}
export default SocialSignInButtons
