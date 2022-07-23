import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  rootApp: {
    flex: 1,
    backgroundColor: "#f9fbfc",
  },
  root: {
    alignItems: "center",
    padding: 20,
  },
  logo: {
    width: "70%",
    maxWidth: 300,
    maxHeight: 200,
  },
  container: {
    backgroundColor: "white",
    width: "100%",
    borderColor: "#e8e8e8",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 5,
  },
  input: {},
  containerButton: {

    width: "100%",
    padding: 15,
    marginVertical: 5,
    alignItems: "center",
    borderRadius: 5,
  },
  text: {
    fontWeight: "bold",
    color: "white",
  },
  container_PRIMARY: {
    backgroundColor: "#3b71f3",
  },
  container_SECONDARY: {
    borderColor: "#3b71f3",
    borderWidth:2
  },
  container_TERTIARY: {

  },
  text_TERTIARY: {
    color: "grey",
  },
  text_SECONDARY:{
  color:"#3b71f3"
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#051c60",
    margin: 10,
  },
  textRegister: {
    color: "grey",
    marginVertical: 10,
  },
  link: {
    color: "#fdb075",
  },
});
