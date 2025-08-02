import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    hamburgerButton: {
        padding: 8,
        borderRadius: 4,
    },
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'stretch',
    },
    overlayTouchable: {
        flex: 1,
    },
    menuContainer: {
        backgroundColor: '#ffffff',
        width: 250,
        height: '100%',
        paddingTop: 20,
        paddingHorizontal: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: -2,
            height: 0,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    closeButton: {
        alignSelf: 'flex-end',
        marginBottom: 20,
    },
    menuContent: {
        flex: 1,
    },
    menuItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 20,
        paddingHorizontal: 10,
        borderRadius: 8,
    },
    iconContainer: {
        width: 32,
        height: 32,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 15,
    },
    menuText: {
        fontSize: 18,
        color: '#002619',
        fontWeight: '500',
    },
    separator: {
        height: 1,
        backgroundColor: '#E0E0E0',
        marginHorizontal: 10,
        marginVertical: 5,
    },
});