import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    button: {
        width: "60%",
        height: 56,
        backgroundColor: "#017C4B",
        borderRadius: 16,
        justifyContent: "center",
        alignItems: "center",
        shadowColor: "#002619",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        elevation: 8,
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
        fontSize: 18,
        fontWeight: "bold",
        color: "#FFFFFF",
    },
    titleSecondary: {
        color: "#017C4B",
    },
});