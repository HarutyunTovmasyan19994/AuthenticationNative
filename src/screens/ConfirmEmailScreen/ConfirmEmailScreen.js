import React from "react";
import { View, Text, Alert } from "react-native";
import { styles } from "../../styled/style";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/customButton";
import { useNavigation } from "@react-navigation/native";
import { useForm } from "react-hook-form";
import { Auth } from "aws-amplify";
import { useRoute } from "@react-navigation/native";

const ConfirmEmailScreen = () => {
  const route = useRoute();
  const { control, handleSubmit,watch } = useForm({
    defaultValues: { username: route?.params?.username },
  });
  const username = watch("username")
  const navigation = useNavigation();

  const onConfirmPressed = async (data) => {
    try {
      await Auth.confirmSignUp(data.username, data.code);
      navigation.navigate("SignIn");
    } catch (e) {
      Alert.alert("Oops", e.message);
    }
  };
  const onSignInPress = () => {
    navigation.navigate("SignIn");
  };
  const onResetPressed = async () => {
    try {
      await Auth.resendSignUp(username);
      Alert.alert("Success", "Cod was reset to your name");
    } catch (e) {
      Alert.alert("Oops", e.message);
    }
  };

  return (
    <View style={styles.root}>
      <Text style={styles.title}>Confirm your Email</Text>
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
        }}
      />
      <CustomButton
        text="Confirm"
        onPress={handleSubmit(onConfirmPressed)}
        type="PRIMARY"
      />
      <CustomButton
        text="Reset code"
        onPress={onResetPressed}
        type="SECONDARY"
      />
      <CustomButton
        text="Back to Sign IN"
        onPress={onSignInPress}
        type="TERTIARY"
      />
    </View>
  );
};


export default ConfirmEmailScreen;
