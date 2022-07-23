import React from "react";
import {View,Text,Pressable} from "react-native";
import { styles } from "../../styled/style";

const CustomButton =({onPress,text,type,bgColor,fgColor}) =>{
  return(
    <Pressable
      onPress={onPress}
      style={[
        styles.containerButton,
        styles[`container_${type}`],
        bgColor ? {backgroundColor:bgColor} : {}
      ]}>
      <Text style={[
        styles.text,
        styles[`text_${type}`],
        fgColor ? {color:fgColor} : {}
      ]}>  {text}</Text>
    </Pressable>
  )
}

export default CustomButton
