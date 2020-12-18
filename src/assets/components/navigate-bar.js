import React from 'react'
import { StyleSheet, Text, View,Image } from 'react-native'

const tabs = [
    {
        id: 'Home',
        icon: require('../images/home.png')
    },
    {
        id: 'User',
        icon: require('../images/user.png')
    },
    {
        id: 'Tag',
        icon: require('../images/ghim.png')
    },
    {
        id: 'Notification',
        icon: require('../images/bell.png')
    },
];

const NavigationBar = ({selected=0}) => {
    const renderTab = (item, index) => {
        return (
            <View style={styles.tab}>
                <View style={[styles.tabInner, selected ==index && {backgroundColor: '#F1F2F6'}]}>
                    <Image source={item.icon} />
                    
                    {selected == index && <Text style={styles.text}>{item.id}</Text>}
                </View>
            </View>
        );
    };
    return <View style={styles.tabs}>{tabs.map(renderTab)}</View>
}

export default NavigationBar;

const styles = StyleSheet.create({
    tabs: {
        flexDirection: 'row',
        padding: 10,
        shadowOffset : {
            width: 0,
            height : 2,
        } 
    },
    tab: {
        flex: 1,
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'center',
    },
    tabInner :{
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'center',
        backgroundColor: '#F1F2F6',
        padding : 10,
        borderRadius : 20,
        paddingHorizontal: 15,

    },
    text: {
        color: '#59B79C',
        fontFamily: 'CeraPro-Bold',
        marginLeft: 5,
    },

})
