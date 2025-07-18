import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    button: {
        width: "100%",
        height: 56,
        
        justifyContent: "center",
        alignItems: "center",
    },
    buttonSecondary: {
        backgroundColor: "transparent",
        borderWidth: 2,
        borderColor: "#017C4B",
        shadowOpacity: 0.1,
        elevation: 2,
    },
    buttonDisabled: {
        backgroundColor: "#C8D6CC",
        shadowOpacity: 0,
        elevation: 0,
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#0A543D",
    },
    titleSecondary: {
        color: "#017C4B",
    },
});