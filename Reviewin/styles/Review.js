import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        position: 'absolute',
        top: 70,
    },
    teksheader: {
        fontSize: 30,
        paddingLeft: 50,
        paddingRight: 50,
        bottom: 5,
    },
    form: {
        position: 'absolute',
        top: 150,
        left: 30,
        justifyContent: 'center',
    },
    inputnama: {
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 20,
    },
    inputreview: {
        borderWidth: 1,
        height: 200,
        width: 300,
        borderRadius: 10,
        marginBottom: 20,
    },
    teksform: {
        marginBottom: 5,
    },
    CustomRatingBarStyle: {
        justifyContent: 'center',
        flexDirection: 'row',
    },
    starImgStyle: {
        width: 40,
        height: 40,
    },
    submit: {
        position: 'absolute',
        alignSelf: 'center',
        backgroundColor: 'orange',
        bottom: -225,
        width: 200,
        height: 40,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    tekssubmit: {
        fontWeight: 'bold',
        color: 'white'
    },
});

export default styles;