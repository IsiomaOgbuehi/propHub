import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "90%",
    alignItems: "center",
    marginBottom: 50,
    justifyContent: "space-between"
  },
  header: {
    marginTop: 40,
    alignItems: "center",
  },
  h1: {
      fontSize: 20,
      color: '#fff',
      marginBottom: 10,
      textTransform: "uppercase",
      fontWeight: '600'
  },
  label: {
    alignSelf: 'flex-start',
    color: "#aaa",
    fontWeight: "500",
    marginBottom: 10,
  },
  inputField: {
    borderColor: '#ccc',
    borderRadius: 4,
    paddingBottom: 5,
    backgroundColor: 'transparent',
    width: '100%',
    color: '#fff',
    borderBottomColor: '#666',
    borderBottomWidth: 1.5,
    fontWeight: "500",
  },
  margin: {
      marginBottom: 20
  },
  button: {
    width: '98%',
    backgroundColor: '#5b7c99',
    alignItems: 'center',
    borderRadius: 4,
    marginBottom: 20,
    alignSelf: 'center',
  },
  buttonValue: {
      fontSize: 16,
      paddingVertical: 12,
      fontWeight: "700",
      color: '#fff'
  },
  signIn: {
      alignSelf: 'center',
      marginBottom: 10,
  }
});

  export default styles
  