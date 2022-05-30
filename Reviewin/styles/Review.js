import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 40
    },
    inputNama: {
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 20,
        paddingVertical: 3,
        paddingHorizontal: 10
    },
    inputReview: {
        textAlignVertical: 'top',
        height: 100,
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 20,
        paddingVertical: 10,
        paddingHorizontal: 10
    },
    CustomRatingBarStyle: {
        justifyContent: 'center',
        flexDirection: 'row',
    },
    starImgStyle: {
        width: 40,
        height: 40,
    },
    submitContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 50
    },
    submit: {
        backgroundColor: '#ec994b',
        width: '60%',
        height: 50,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default styles;