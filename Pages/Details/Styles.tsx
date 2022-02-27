import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
  container: {
    flex: 1,

    height: 100,
  },
  heading: {},
  cardUserImage: {
    marginLeft: 5,
    width: 70,
    height: 70,
    borderRadius: 150 / 2,
    alignSelf: "flex-start",
  },
  image: {
    height: "100%",
    width: "100%",
  },
  registerButton: {},
  imageView: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,

    borderRadius: 10,
    margin: 10,
    flex: 3,
    alignItems: "center",
    backgroundColor: "green",
    width: "95%",
  },
  methodView: {
    flex: 2,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,

    borderRadius: 10,
    margin: 10,
    alignItems: "center",
    width: "95%",
  },
  userDetails: {
    padding: 10,
    marginLeft: "5%",
    width: "40%",
    height: "100%",
  },
  userContact: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    width: "33%",
    height: "100%",
  },
  commentView: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,
    borderRadius: 10,
    margin: 10,
    alignItems: "center",
    width: "95%",
    height: 60,
  },
  userView: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,

    borderRadius: 10,
    margin: 10,
    alignItems: "center",
    width: "95%",
  },
  buttonsView: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,

    borderRadius: 10,
    margin: 10,
    justifyContent: "space-around",
    alignItems: "center",
    width: "95%",
    height: 60,
  },
});
export default Styles;
