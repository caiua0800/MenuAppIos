import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';


export default function Item({Nome, Desc, Valor, Img}){

    return (
        <View style={styles.Item}>
            <View style={styles.ItemBox}>
                <View style={styles.ItemInfo}>
                    <Text style={styles.ItemTitle}>{Nome}</Text>
                    <Text style={styles.ItemDesc}>{Desc}</Text>
                </View>
                <View style={styles.itemFotoView}>
                    <Image source={{ uri: Img }} style={styles.ItemFoto}></Image>
                </View>
            </View>
            <Text style={styles.ItemValue}>{Valor}</Text>

        </View>
    );
}

const styles = StyleSheet.create({

    Item: {
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        height: 180,
        borderRadius: 20,
        color: 'white',
        width: '100%',
        overflow: 'hidden',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingTop: 30 ,
        position: 'relative'
    },
    ItemBox: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    ItemInfo: {
        width: 'auto',
        marginLeft: 20,
        textAlign: 'left',
        overflow: 'hidden',

    },
    itemFotoView: {
        width: 120,
        height: 90,
        borderRadius: 8,
        backgroundColor: 'white',
        marginRight: 20,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        opacity: 0.8
    },
    ItemFoto: {
        width: '100%',
        height: '100%'
    },
    ItemTitle: {
        color: 'white',
        fontSize: 22,
        fontWeight: '600',
        marginTop: 5,
        marginLeft: 10,
    },
    ItemDesc: {
        marginTop: 10,
        marginLeft: 10,
        color: 'white',
        maxWidth: 200,

    },
    ItemValue: {
        color: 'white',
        position: 'absolute',
        bottom: 20,
        left: 30,
        fontSize: 18
    },

})