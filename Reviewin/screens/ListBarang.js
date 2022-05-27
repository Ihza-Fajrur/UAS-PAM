import React, { useState, Component, useEffect } from 'react';
import styles from '../styles/style.js';
import { Text, View, Button, TextInput, SafeAreaView, TouchableOpacity,ScrollView, Modal, FlatList, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
export default function ListBarang({navigation}) {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('http://192.168.1.2:19002/products_list',{
            method:'GET'
        })
        .then((res)=> res.json())
        .then((products)=>{
            setProducts(products) 
        })
    }, [])
    return (
        // <Navigator/>
        <SafeAreaView style={styles.container}>
        <ScrollView style={styles.ScrollView}>
        <View style={styles.header}>
        </View>
        <View style={styles.body}>
            <View style={styles.title}>
            <Text style={[{fontSize:40, fontWeight:"bold", }]}>
                REVIEWIN
            </Text>
            </View>
            <View style={styles.searchBar}>
            <Text style={[{fontSize:18, fontWeight:"bold", color:"white" }]}>
                Search
            </Text>
            <Text alignSelf="flex-end">
                <AntDesign name="search1" size={24} color="white" />
            </Text>
            </View>
            {/* Item Card */}
            <View style={styles.item}>
            <View style={styles.itemPhoto}>
                <Image source={require('../assets/images/macbook-pro-13-og-202011.jpg')} style={{width: "100%", height: 200, borderTopRightRadius:10, borderTopLeftRadius:10,}}/>
            </View>
            
            <View style={styles.itemDescription}>
                <Text style={[{fontSize:20, color:"black" }]} >
                    {products.map(product => product.nama)}
                </Text>
                <Text style={[{color:"#EC9948", fontWeight:"bold"}]}>
                    Rp.{products.map(product => product.harga)}
                </Text>
                <View style={[{justifyContent: 'space-between', flexDirection:"row"}]}>
                <View style={[{flexDirection:"row",justifyContent: 'space-between', marginTop:5}]}>
                <AntDesign name="star" size={24} color="#FFCD3C" />
                    <Text style={[{fontSize:14, fontWeight:"bold", marginLeft:5}]}>
                    {products.map(product => product.rating)}
                    </Text>
                </View>
                <View style={[{alignItems:"flex-end"}]}>
                    <TouchableOpacity style={[{alignSelf:"flex-end", flexDirection:"row"}]} onPress={()=>navigation.navigate('DetailProduk', {
                        nama: products.map(product => product.nama),
                        harga: products.map(product => product.harga),
                        rating: products.map(product => product.rating),
                        spesifikasi: products.map(product => product.spesifikasi)
                    })}>
                    <Text>
                        Detail
                    </Text>
                    <AntDesign name="arrowright" size={20} color="black" />
                    </TouchableOpacity>
                </View>
                </View>
            </View>
            
            </View>
            {/* End of item card */}
        </View>
        <View style={styles.footer}>
        </View>
        </ScrollView>
    </SafeAreaView>
    );
}