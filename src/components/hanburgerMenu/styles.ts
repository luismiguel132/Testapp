import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    hamburgerButton: {
        padding: 12,
        borderRadius: 30,
        backgroundColor: 'rgba(224, 242, 241, 0.8)', // leve tom de verde claro
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
        paddingTop: 30,
        paddingHorizontal: 20,
        shadowColor: '#000',
        shadowOffset: { width: -2, height: 0 },
        shadowOpacity: 0.2,
        shadowRadius: 6,
        elevation: 10,
    },
    closeButton: {
        alignSelf: 'flex-end',
        padding: 8,
    },
    menuContent: {
        flex: 1,
        marginTop: 20,
    },
    menuItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 16,
        paddingHorizontal: 10,
        borderRadius: 8,
        backgroundColor: '#F7F7F7',
        marginBottom: 10,
    },
    iconContainer: {
        width: 32,
        height: 32,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 12, // ainda pode usar marginRight se não usar gap
    },
    menuText: {
        fontSize: 16,
        color: '#002619',
        fontWeight: '500',
    },
    separator: {
        height: 1,
        backgroundColor: '#DADADA',
        marginVertical: 8,
    },
});
