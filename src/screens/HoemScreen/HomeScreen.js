import React from "react"
import {View,Text,Alert} from "react-native";
import {Auth} from "aws-amplify";

const HomeScreen = () =>{
  const signOut =  () =>{
      Auth.signOut()
  }
  return(
    <View style={{flex:1}}>
      <Text style={{fontSize:24,alignSelf:"center"}}>
        Home, sweet home
      </Text>
      <Text
        onPress={signOut}
      style={{
        width:"100%",
        textAlign:"center",
        color:"red",
        marginTop:"auto",
        marginVertical:20,
        fontSize:20
      }}>
        Sign Up
      </Text>
    </View>
  )
}

export default HomeScreen
