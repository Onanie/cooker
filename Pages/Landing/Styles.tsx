import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "white" },
  heading: { margin: 25, fontSize: 25, color: "#AB0F0A", alignSelf: "center" },
  loginButton: {},
  registerButton: {},
  image: {
    height: "100%",
    width: "100%",
  },
  imageView: {
    alignItems: "center",
    flex: 3,
  },
  inputView: {
    flex: 2,
    backgroundColor: "white",
  },
  buttonsView: {
    flex: 1,
    justifyContent: "space-around",
    flexDirection: "row",
    backgroundColor: "white",
  },
});
export default Styles;
