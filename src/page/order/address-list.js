import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

const AddressList = () => {
    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <Text style={styles.text}>Duta Kencana 2</Text>
                <Text style={styles.address}>Edit Addres List</Text>
            </View>
            <View style={styles.row}>
                <View style={styles.timeContainer}>
                    <View style={styles.iconTime}>
                        <Image source={require('../../assets/images/clock.png')} />
                    </View>
                    <Text style={styles.textTime}>30 mins</Text>
                </View>
                <Text style={styles.address}>Choose Time</Text>
            </View>
        </View>
    )
};

export default AddressList

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F7CB6B',
        paddingVertical: 20,
        borderRadius: 10,
        marginTop : 15,
    },
    address: {
        fontFamily: 'CeraPro-Medium',
        flex: 1,
        textAlign: 'center'
    },
    timeContainer: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center'
    },
    iconTime: {
        padding : 8,
        backgroundColor: 'rgba(0,0,0,0.4)',
        borderRadius: 7,
    },
    text : {
        fontFamily: 'CeraPro-Bold',
        flex: 1,
        textAlign: 'center',
    },
    row : {
        flexDirection :'row',
        marginVertical: 15,
        alignItems: 'center'
    },
    textTime: {
        fontFamily: 'CeraPro-Bold',
        marginLeft: 10,
        alignItems : 'center',
        marginTop : 10,
    }

});
