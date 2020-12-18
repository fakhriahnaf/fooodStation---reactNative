import React, {useState} from 'react'
import { Pressable, StyleSheet, Text, View, Image } from 'react-native'
import ItemOrder from './item-order'
import Swipeable from 'react-native-swipeable';

const mocks = [
    {
        name: 'Salad buah mang ewok',
        vendor: 'The Plant Cafe',
        price: 15000,
        image: require('../../assets/images/salad.jpg'),
        quantity: 1,
        id: 1
    },
    {
        name: 'Mac and Cheese',
        vendor: 'Paparnz french resto',
        price: 15000,
        image: require('../../assets/images/salad.jpg'),
        quantity: 2,
        id: 2
    },

]
const ListOrder = () => {
    //const leftContent = <Text></Text>;
    const[id,setId] = useState(0);
    const[data, setData] = useState(mocks)
    const onDelete =() => {
        if(id) {
            setData((e) => e.filter((x) => x.id != id)); 
        }
    }

    const rightButtons = [
        <View style={styles.button}>
            <Pressable onPress={onDelete}>
                <Image source={require('../../assets/images/garbage.png')}/>
            </Pressable>
        </View>
    ];
    const renderFoodOrder = (item) => {
        return (
        <Swipeable 
            rightButtons ={rightButtons}
            onSwipeStart={() => setId(item.id)}
            onSwipeRelease={() => setId(item.id)}
        >
            <ItemOrder data={item} />
        </Swipeable>
        );
    };
    return (
    <View style={styles.container}>
        <View style={styles.listOrder}>
        {data.map(renderFoodOrder) }
        <ItemOrder isDelivery fee-={2.5}/>
        </View>
    </View>
    
    );

};

export default ListOrder

const styles = StyleSheet.create({
    container: {
        //backgroundColor : 'green',

    },
    listOrder:{

    },
    button: {
        justifyContent: 'center',
        marginTop: 50,
        marginLeft : 20,
    },
    total : {
        fontFamily: 'CeraPro-Bold',
        fontSize : 23,
    },
    textOrder : {
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

    }
})
