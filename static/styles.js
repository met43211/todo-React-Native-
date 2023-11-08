import { StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    wrapper:{
        flex:1,
        flexDirection: 'column',
        justifyContent: 'flex-start'
    },
    todo:{
        paddingTop: 10,
        paddingBottom: 10,
        fontSize: 15,
        marginTop: 10,
        paddingLeft: 10,
        borderRadius: 10,
        borderColor: '#2E8B57',
        borderWidth: 3,
        marginLeft: 10,
        marginRight: 10,
    },
    todos:{
        justifyContent: 'flex-start',
    },
    nothing:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    nothingText:{
        fontSize: 30,
        fontWeight: "900",
        color: '#2E8B57',
    },
    input:{
        height:50,
        paddingLeft: 10,
        fontSize: 15,
    }
})

export default styles