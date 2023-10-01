import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "90%",
        alignItems: "flex-start",
        marginBottom: 20,
        justifyContent: "space-between"
    },
    header: {
        marginTop: 80
    },
    headerPage2: {
        marginTop: 40
    },
    h1: {
        fontSize: 20,
        color: '#fff',
        marginBottom: 10,
        textTransform: "uppercase",
        fontWeight: '600'
    },
    h2: {
        fontSize: 28,
        color: '#fff',        
        textTransform: "uppercase",
        fontWeight: '500'
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
})

const pickerOptions = StyleSheet.create({
    inputIOS: {
        fontSize: 16,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderColor: '#fff',
        borderRadius: 4,
        color: '#fff',
        paddingBottom: 5,
        fontWeight: "500",
        alignSelf: 'flex-end',
        width: '100%',
        marginBottom: 50,
    },
    inputAndroid: {
        fontSize: 16,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderColor: '#fff',
        borderRadius: 8,
        color: '#fff',
        paddingBottom: 5,
        fontWeight: "500",
        width: '100%',
        marginBottom: 50
    },
});

export {styles, pickerOptions}