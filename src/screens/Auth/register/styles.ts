import { StyleSheet, Platform, StatusBar  } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "90%",
        alignItems: "flex-start",
        justifyContent: "space-between",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight ? StatusBar.currentHeight + 50 : 0 : 0,
    },
    header: {
        marginTop: 50
    },
    h1: {
        color: '#fff',
        textTransform: "uppercase",
        fontWeight: '600',
        marginBottom: 10,
        ...Platform.select({
            ios: {
                fontSize: 28,
            },
            android: {
                fontSize: 20,
            },
        }),
    },
    h2: {
        color: '#fff',        
        textTransform: "uppercase",
        fontWeight: '500',
        ...Platform.select({
            ios: {
                fontSize: 28,
            },
            android: {
                fontSize: 20,
            },
        }),
    },
    label: {
        alignSelf: 'flex-start',
        color: "#aaa",
        fontWeight: "500",
        marginBottom: Platform.OS === 'ios' ? 10 : 0,
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
        marginBottom: 30,
    }

});

const pickerOptions = StyleSheet.create({
    inputIOS: {
        fontSize: 16,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderColor: '#fff',
        borderRadius: 4,
        color: '#fff',
        paddingBottom: 5,
        fontWeight: "500",
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
        marginBottom: 50,
    },
})

export {styles, pickerOptions}