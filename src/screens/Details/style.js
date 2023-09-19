import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#141414',
        alignItems: 'center',
        overflow: 'scroll',
        paddingBottom: '25px'
    },
    img:{
        width: '100vw',
        height: '23vh'
    },
    title:{
        color: '#fff',
        fontSize: '1.6rem',
        fontWeight: 'bold',
        marginTop: '2.5vh',
        marginBottom: '2vh',
        textAlign: 'center',
        width: '85%'
    },

    overview:{
        textAlign: "justify",
        width: "75%",
        fontSize: '18px',
        color:'#fff',
        fontWeight:'475',
        paddingTop: '20px'
    }
})

export default style