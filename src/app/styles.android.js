import { StyleSheet, Dimensions } from 'react-native';

const {width, height} = Dimensions.get('window');
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: `grey`,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 50
    },
    box: {
        backgroundColor: 'yellow',
        width: width / 2,
        height: height / 3,
        position: 'absolute',
        top: 20,
        left: 30,
        borderRadius: 30
    },
    text: {
        color: 'white',
        fontSize: 34,
        fontWeight: 'bold'
    }
});