import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  methodContainer: {
    flex: 1,
    width: "100%",
    flexDirection: "row",
  },
  ingridientsView: {
    borderRightColor: "#666A6D",
    borderRightWidth: 1,
    flex: 2,
    width: 40,
  },
  methodView: {
    flex: 2,
  },
  heading: {},
  loginButton: {},
  Headercontainer: {
    flex: 1,
    marginTop: 10,
  },
  HeaderbuttonContainer: {
    margin: 10,
  },
  HeaderbuttonRowContainer: {
    flexDirection: "row",
    margin: 10,
  },
  HeaderbuttonRow: {
    flex: 1,
    marginLeft: 5,
    marginRight: 5,
  },
  header: {
    flex: 0,
    backgroundColor: "white",
    marginTop: 25, // only for IOS to give StatusBar Space
    padding: 10,
    height: 125,
    borderBottomColor: "#666A6D",
    borderBottomWidth: 0.5,
  },
  headerTop: {
    flexDirection: "row",
  },
  headerLeft: {},
  headerCenter: {
    flex: 1,
    right: 0,
    justifyContent: "center",
    alignContent: "center",
  },
  headerTitle: {
    top: 10,
    fontSize: 21,
    color: "#666A6D",
    fontWeight: "bold",
    alignSelf: "center",
  },
  headerSubTitle: {
    top: 15,
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
  },
  headerRight: {
    flex: 1,
    right: "0%",
    position: "absolute",
  },
  subHeader: {
    flexDirection: "row",
    paddingTop: 10,
  },
  subHeaderLeft: {
    backgroundColor: "yellow",
    padding: 5,
  },
  subHeaderCenter: {
    justifyContent: "flex-start",
    alignItems: "center",
  },
  subHeaderName: {
    color: "white",
    marginLeft: 10,
  },
  searchBar: {
    marginTop: 15,
    backgroundColor: "#F0EEEE",
    height: 50,
    borderRadius: 10,
    marginHorizontal: 0,
    flexDirection: "row",
    marginBottom: 10,
  },
  addIcon: {
    fontSize: 35,
    alignSelf: "flex-end",
    top: -20,
    color: "#666A6D",
  },
  searchInput: {
    flex: 1,
    fontSize: 18,
  },
  searchIcon: {
    fontSize: 25,
    alignSelf: "center",
    color: "#666A6D",
    marginHorizontal: 15,
  },
  button: {
    width: 150,
    height: 50,
    borderRadius: 25,
    borderWidth: 0,
    margin: 10,
  },
  buttonText: {
    fontSize: 15,
    alignSelf: "center",
    color: "white",
    top: "30%",
  },
  image: {
    height: 70,
    width: 100,
  },
  productCard: {
    flex: 1,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,

    borderRadius: 10,
    height: 300,
    width: "90%",
    backgroundColor: "white",
    marginLeft: 10,
    marginRight: 10,
    marginTop: 20,
    borderBottomWidth: 0,
    alignItems: "center",
    position: "relative",
  },
  productImage: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    marginBottom: 5,
    height: "100%",
    width: "100%",
  },
  productImageContainer: {
    flex: 3,
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  productFooterContainer: {
    flexDirection: "row",
    flex: 1,
  },
  textContainer: {
    flex: 1,
  },
  productTitle: { color: "black", fontSize: 17, fontWeight: "bold", margin: 5 },
  productContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  productRatingContainer: {
    borderColor: "gray",
    borderTopColor: "white",
    borderRadius: 10,
    borderWidth: 1,
    height: 40,
    width: "100%",
    flexDirection: "row",

    borderTopEndRadius: 0,
    borderTopStartRadius: 0,
  },
  footerContainer: {
    flex: 1,
    justifyContent: "center",
    height: 30,
    position: "absolute",
    bottom: 10,
    left: 0,
    right: 0,
  },
  footerText: {
    fontSize: 16,
    color: "#fff",
    textAlign: "center",
    marginBottom: 10,
  },
  userImage: {
    margin: 15,
    width: 130,
    height: 130,
    borderRadius: 200 / 2,
  },
  profileImage: {
    left: 40,
    marginTop: -3,
    margin: 15,
    width: 130,
    height: 130,
    borderRadius: 200 / 2,
  },
  cardUserImage: {
    margin: 15,
    width: 40,
    height: 40,
    borderRadius: 150 / 2,
    alignSelf: "flex-start",
  },
  centerText: {
    bottom: "45%",
    fontSize: 21,
    color: "green",
    fontWeight: "bold",
    alignSelf: "center",
  },
  backIcon: {
    color: "green",
    fontSize: 25,
    margin: 20,
    top: "20%",
  },
});
export default Styles;
