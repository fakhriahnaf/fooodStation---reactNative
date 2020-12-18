import Icon from 'react-native-vector-icons/MaterialIcons'

Icon.loadFont();

import React from 'react'
import { Pressable, StyleSheet, Text, View, Image } from 'react-native'
import AddressList from './address-list';
import ListOrder from './list-order';

const OrderScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Your Order</Text>
            <Pressable style={styles.clearButton}>
                <Image
                    style={styles.iconClear}
                    resizeMode="contain"
                    source={require('../../assets/images/clear.png')}
                />
            </Pressable>
            <AddressList />
            <View style={styles.body}>
                <ListOrder />
            </View>
            <View style={styles.footer}>
                <Text style={styles.total}>
                    Total : Rp.70000
                </Text>
                <Pressable style={styles.buttonOrder}>
                    <Text style={styles.textOrder}>
                        Place Order
                    </Text>
                    <Image source={require('../../assets/images/arrow.png')} />
                </Pressable>
            </View>
        </View>
    );
};

export default OrderScreen

const styles = StyleSheet.create({
    body: {
        flex: 1
    },
    title: {
        fontFamily: 'CeraPro-Bold',
        fontSize: 23,
        marginBottom: 10,
    },
    container: {
        padding: 20,
        marginTop: 40,
        backgroundColor: '#FFF',
        flex: 1,
    },
    clearButton: {
        position: 'absolute',
        right: 20,
        top: 20,
        padding: 10
    },
    iconClear: {
        width: 15,
        height: 15,
        color: '#000'
    },
    total: {
        fontFamily: 'CeraPro-Bold',
        fontSize: 23,
    },
    textOrder: {
        fontFamily: 'CeraPro-Bold',
        marginRight: 10,
    },
    buttonOrder: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#58B4C6',
        padding: 20,
        paddingHorizontal: 25,
        borderRadius: 15,
        shadowOffset: {
            width: 0,
            height: 2,
        }
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 20,
        marginBottom: 20,

    }

});
