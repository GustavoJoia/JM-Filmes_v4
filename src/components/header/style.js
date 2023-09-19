import { StyleSheet } from "react-native";

const style = StyleSheet.create({

    container:{
        flex: 1,
        backgroundColor: '#141414',
        alignItems: "center",
        justifyContent: "space-between",
        paddingTop: '5vh',
        overflow: 'scroll'
    },
    viewHeader:{
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 8,
        marginLeft: 10
    },
    textHeader:{
        fontSize: 25,
        color: '#fff',
        fontWeight: 'bold',
       
    }

})

export default style;