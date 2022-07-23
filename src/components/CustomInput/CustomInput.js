import React from "react";
import {View,TextInput} from "react-native";
import { styles } from "../../styled/style";
import { Controller } from "react-hook-form";

const CustomInput = ({control,name,placeholder,secureTextEntry}) => {
  return (
    <View style={styles.container}>
      <Controller
        control={control}
        name={name}
        render={({ field: { value, onChange, onBlur } }) => (
          <TextInput
            placeholder={placeholder}
            value={value}
            style={styles.logo}
            onChangeText={onChange}
            onBlur={onBlur}
            secureTextEntry={secureTextEntry}
          />

        )}
      />
    </View>
  );
};

export default CustomInput;
