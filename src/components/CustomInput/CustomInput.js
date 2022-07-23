import React from "react";
import {View,TextInput} from "react-native";
import { styles } from "../../styled/style";

const CustomInput = ({value,setValue,placeholder,secureTextEntry}) => {
  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        onChangeText={setValue}
        placeholder={placeholder}
        style={styles.logo}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

export default CustomInput;
