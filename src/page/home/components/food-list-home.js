import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

const FoodList = ({ data }) => {
    return (
        <View style={styles.container}>
            <View>
                <Image source={data.background} style={styles.image} />
                <View style={styles.milesView}>
                    <Text style={styles.milesText}>{data.miles} Km</Text>
                </View>
            </View>
            <Text style={styles.name}>{data.type}</Text>
            <Text style={styles.description}>
                {data.type} • {data.vendor}• {data.price}
            </Text>
            <View style={styles.ratingList}>
                <Image
                    style={styles.icon}
                    source={require ('../../../assets/images/smileh.png')} />
                <Text style={styles.rating}>{data.rating}</Text>
            </View>
        </View>
    )
}

export default FoodList

const styles = StyleSheet.create({
    container: {
        //flex : 1,
        padding: 10,
        backgroundColor: '#F1F2F6',
        borderRadius: 10,
        marginTop: 15,
    },
    image: {
        width: '100%',
        height: 180,
        borderRadius: 10,
    },
    name: {
        fontFamily: 'CeraPro-Bold',
        fontSize: 16,
        marginTop: 15,
    },
    description: {
        fontFamily: 'CeraPro-Medium',
        color: 'gray',
        marginVertical: 8,
    },
    rating: {
        color: '#5987C9',
        fontFamily: 'CeraPro-Bold',
        marginLeft: 5,

    },
    ratingList: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    milesView : {
        position: 'absolute',
        backgroundColor : 'rgba(255,255,255,0.9)',
        padding : 12,
        borderRadius: 10,
        bottom: 20,
        left: 20,
    },
    milesText : {
        color : '#222'
    }
})
