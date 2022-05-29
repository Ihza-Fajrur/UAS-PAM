import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    container: {
        // flex: 1,
        marginTop: 40,
        // padding: 10,
    },
    scrollView: {
        backgroundColor: '#FFF',
        borderRadius:20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    header: {

    },
    body: {
        // flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: '#E5E5E5',
        // borderRadius:20,
    },
    title:{
        // padding:20
        marginTop:20,
        marginBottom:10,
    },

    searchBar: {
        marginTop:10,
        marginBottom:30,
        padding:8, 
        backgroundColor:"#73777B", 
        borderRadius:18, 
        width:"70%",
        flexDirection:"row",
        justifyContent: 'space-between',
        borderWidth:1,
    },
    item:{
        // padding:10,
        backgroundColor:"#FFFFFF",
        width:350,
        
        borderRadius:15,
        margin:10,
        borderColor:"#EC994B",
        borderWidth:5,
    },

    itemPhoto:{
        // width:"95%",
        borderRadius:15,
        // borderTopRightRadius:20,
        // padding:10,
    },

    itemDescription:{
        padding:10,
    },

    footer: {
    },
});
export default styles;