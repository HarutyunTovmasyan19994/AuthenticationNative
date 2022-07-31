import React from "react";
import { View, TextInput,Text } from "react-native";
import { styles } from "../../styled/style";
import { Controller } from "react-hook-form";

const CustomInput = ({ control, name, rules = {}, placeholder, secureTextEntry }) => {
  return (

    <Controller
      control={control}
      rules={rules}
      name={name}
      render={({ field: { value, onChange, onBlur }, fieldState: { error } }) => (
        <>
        <View style={[styles.container,{borderColor: error ? "red":"#e8e8e8"}]}>
          <TextInput
            placeholder={placeholder}
            value={value}
            style={styles.logo}
            onChangeText={onChange}
            onBlur={onBlur}
            secureTextEntry={secureTextEntry}
          />
        </View>
          {error &&
            <Text style={{ color: "red", alignSelf: "stretch" }}>{error.message || "Error"}</Text>
          }
        </>
      )}
    />

  );
};

export default CustomInput;
