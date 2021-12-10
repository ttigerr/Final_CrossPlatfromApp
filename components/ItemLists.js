import React, { useEffect, useState } from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image, TextInput, FlatList, ScrollView} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export function ItemLists (props) 
{
    const [ listData, setListData ] = useState()

    useEffect( () => {
        setListData( props.data )
    }, [props.data])
    
    const data = { time: new Date().getTime(), user: Math.random() * 100 }
    
    const renderItem = ({item}) => (
        <View><Text>{item.time}</Text></View>
      )

    const ItemCardsView = (props) => {
        return (
            <View style={styles.innerCardView}>
                <View style={styles.innerCardView2}>
                    <Image source = {props.image} style={styles.foodImage}/>
                </View>
                <View style={{flex: 1}}>
                    <Text style={styles.texrtInnerCard}>{props.title}</Text>
                    <Text style={styles.texrtInnerCard2}>340 kcal</Text>
                </View>
            </View>
        )
    }
    return(

        <View style={styles.container}>
            <ScrollView>
                <View style={styles.inner}>
                    <View style={styles.itemsCardView}>
                        <Text style={styles.title}>Your Plans</Text>
                            <View style={styles.innerCardView}>
                                {/* <Image style={styles.itemsImage} source={require('../assets/morning.png')} /> */}
                            </View>
                            <View style={styles.innerCardView}>
                                {/* <Image style={styles.itemsImage} source={require('../assets/lunch.png')} /> */}
                            </View>
                            <View style={styles.innerCardView}>
                                {/* <Image style={styles.itemsImage} source={require('../assets/night.png')} /> */}
                            </View>
                    </View>
                </View>
            </ScrollView>
            
            {/* <TouchableOpacity style={styles.button} onPress={ () => { props.add('foods', data ) }}>
                <Text>Add something</Text>
            </TouchableOpacity>
            <FlatList data={ listData } renderItem={ renderItem} keyExtractor={item => item.id} /> */}

        </View>
    )

}

 // Style of Home
const styles = StyleSheet.create ({
    container:{
        flex: 1,
        backgroundColor: 'white',
    },
    metaText: {
        textAlign: 'center'
    },
    inner: {
        marginHorizontal: 20
    },
    title: {
        margin: 20,
        fontSize: 25,
        fontWeight: "bold"
    },
    itemsCardView: {
        height: 370,
        elevation: 15,
        marginVertical: 20,
        borderRadius: 20
    },
    innerCardView: {
        height: 80,
        width: 20,
        elevation: 15,
        borderWidth: 0.2,  
        borderRadius: 10,

        marginLeft: 20,
        marginBottom: 15
    },
    innerCardView2: {
        flex: 2,
        alignItems: "center",
        marginVertical: 10,
   },
   itemsImage: {
       flex: 1,
       width: 80,
       height: 100,
       borderRadius: 70,
       resizeMode: 'cover',
   },
   texrtInnerCard: {
       fontWeight: "bold",
        marginLeft: 10,
        marginBottom: 5
   },
   texrtInnerCard2: {
    marginLeft: 10
    },
})