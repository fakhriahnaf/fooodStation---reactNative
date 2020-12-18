import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

//declare variable
const CategoriesItem = ({ type, image, selected }) => {
    return (
        <View style={styles.container}>
            <View style={[styles.imageBg, selected && {backgroundColor: '#59B7C9'}]}>
                <Image source={image} style={[styles.icon, selected && {tintColor: '#FFF'}]} resizeMode='contain' />
            </View>
            <Text style={styles.text}>{type}</Text>
        </View>
    );
};

export default CategoriesItem;

const styles = StyleSheet.create({
    container: {
        marginRight: 20,
        alignItems: 'center',
        marginVertical: 20,
    },
    imageBg: {
        backgroundColor: '#F1F2F6',
        padding: 20,
        borderRadius: 20,
    },
    text: {
        color: '#4E4F50',
        fontFamily: 'CeraPro-Medium',
        marginTop: 10,
        
    },
    icon: {
        width: 40,
        height: 40,
        tintColor: '#222',

    }

})
