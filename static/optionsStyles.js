import { StyleSheet } from "react-native";

const optionsStyle = StyleSheet.create({
    options: {
        flexDirection: 'row',
    },
    btn: {
        backgroundColor: '#2E8B57',
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        flex: 2,
    },
    btnText:{
        color: 'white',
        fontSize: 20,
        fontWeight: '600'
    }
})

export default optionsStyle