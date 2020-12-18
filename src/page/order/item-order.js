import React from 'react'
import { StyleSheet, Text, View, Image, Dimensions, Number } from 'react-native'

const w = Dimensions.get('screen').width;
const ItemOrder = ({ data, isDelivery, fee }) => {
    if (isDelivery) {
        return (
            <View style={styles.container}>
                <View style={styles.imgCon}>
                    <Image style={styles.imgCon} source={require('../../assets/images/car.png')} />
                </View>
                <View style={styles.body}>
                    <Text style={styles.name}>Delivery Fee</Text>
                </View>
                <View style={styles.end}>
                    <Text style={styles.harga}>Rp. 2000</Text>
                </View>
            </View>
        );
    }
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={data.image} />
            <View style={styles.body}>
                <Text style={styles.name}>{data.name}</Text>
                <Text style={styles.vendor}>{data.vendor}</Text>
            </View>
            <View style={styles.end}>
                <Text style={styles.harga}>
                    Rp.{data.price}x{data.quantity}
                </Text>
            </View>
        </View>
    );
}

export default ItemOrder;

const styles = StyleSheet.create({
    image: {
        width: w / 4,
        height: w / 4.8,
        borderRadius: 10,
    },
    name: {
        fontFamily: 'CeraPro-Bold',
        lineHeight: 20,
    },
    container: {
        flexDirection: 'row',
        paddingVertical: 20,
    },
    vendor: {
        fontFamily: 'CeraPro-Medium',
        fontSize: 13,
        color: '#222',
        marginTop: 5,
    },
    body: {
        flex: 1,
        justifyContent: 'center',
        paddingLeft: 10,
    },
    harga: {
        fontFamily: 'CeraPro-Medium',
        fontSize: 14,
        color: '#222',
    },
    end: {
        padding: 10,
        paddingRight: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    imgCon : {
        backgroundColor: '#F4E5C1',
        width : w /4 ,
        padding: 20,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems : 'center',
    }



});
