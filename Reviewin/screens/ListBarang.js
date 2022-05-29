import React, { useState, Component, useEffect } from 'react';
import styles from '../styles/style.js';
import { Text, View, Button, TextInput, SafeAreaView, TouchableOpacity,ScrollView, Modal, FlatList, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { NetworkInfo } from 'react-native-network-info';
export default function ListBarang({navigation}) {
    const [products, setProducts] = useState([])
    // NetworkInfo.getIPAddress().then(ip => {
    //     console.log(ip)
    // });
    useEffect(() => {
        fetch(`https://reviewin-api.herokuapp.com/produk`,{
            method:'GET'
        })
        .then((res)=> res.json())
        .then((products)=>{
            setProducts(products) 
        })
    }, [])
    
    var itemcard = [];
    // for (let i = 0; i < products.length; i++) {
    //     itemcard.push(
    //     <View style={styles.item}>
    //     <View style={styles.itemPhoto}>
    //         {/* <Image source={{ uri:`${products.map(product => product.image.indexOf(products[i].image) > -1 ? product.image : null)}`}} style={{width: "100%", height: 200, borderTopRightRadius:10, borderTopLeftRadius:10,}}/> */}
    //     </View>
    //     <View style={styles.itemDescription}>
    //         <Text style={[{fontSize:20, color:"black" }]} >
    //             {products.map(product => product.nama.indexOf(products[i].nama) > -1 ? product.nama : null)}
    //             {/* {products.map(product => product.image.indexOf(products[i].image) > -1 ? product.image : null)} */}
    //         </Text>
    //         <Text style={[{color:"#EC9948", fontWeight:"bold"}]}>
    //             Rp.{products.map(product => product.harga.indexOf(products[i].harga) > -1 ? product.harga : null)}
    //         </Text>
    //         <View style={[{justifyContent: 'space-between', flexDirection:"row"}]}>
    //         <View style={[{flexDirection:"row",justifyContent: 'space-between', marginTop:5}]}>
    //             <AntDesign name="star" size={24} color="#FFCD3C" />
    //             <Text style={[{fontSize:14, fontWeight:"bold", marginLeft:5}]}>
    //             {products.map(product => product.rating.indexOf(products[i].rating) > -1 ? product.rating : null)}
    //             </Text>
    //         </View>
    //         <View style={[{alignItems:"flex-end"}]}>
    //             <TouchableOpacity style={[{alignSelf:"flex-end", flexDirection:"row"}]} onPress={()=>navigation.navigate('DetailProduk', {

    //                 nama: products.map(product => product.nama.indexOf(products[i].nama) > -1 ? product.nama : null),
    //                 harga: products.map(product => product.harga.indexOf(products[i].harga) > -1 ? product.harga : null),
    //                 rating: products.map(product => product.rating.indexOf(products[i].rating) > -1 ? product.rating : null),
    //                 // image: products.map(product => product.image.indexOf(products[i].image) > -1 ? product.image : null),
    //                 spesifikasi: products.map(product => product.spesifikasi.indexOf(products[i].spesifikasi) > -1 ? product.spesifikasi : null),
    //             })}>
    //             <Text>
    //                 Detail
    //             </Text>
    //             <AntDesign name="arrowright" size={20} color="black" />
    //             </TouchableOpacity>
    //         </View>
    //         </View>
    //     </View>
        
    //     </View>
    //     )
        
    // }
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
            <Text>
            </Text>
            {/* {itemcard} */}
            {products.map(product =>  (<View key= {product.id}>
            

                <View style={styles.item}>
                        <View style={styles.itemPhoto}>
                        <Image 
                                style={{width: "100%", height: 200,borderTopRightRadius:10, borderTopLeftRadius:10,}}
                                source={{uri:product.image}}
                            />
                        </View>
                        <View style={styles.itemDescription}>
                            <Text style={[{fontSize:20, color:"black" }]} >
                                {product.nama}
                                {/* {products.map(product => product.nama.indexOf(products[i].nama) > -1 ? product.nama : null)} */}
                                {/* {products.map(product => product.image.indexOf(products[i].image) > -1 ? product.image : null)} */}
                            </Text>
                            <Text style={[{color:"#EC9948", fontWeight:"bold"}]}>
                                Rp. {product.harga}
                                {/* {products.map(product => product.harga.indexOf(products[i].harga) > -1 ? product.harga : null)} */}
                            </Text>
                            <View style={[{justifyContent: 'space-between', flexDirection:"row"}]}>
                            <View style={[{flexDirection:"row",justifyContent: 'space-between', marginTop:5}]}>
                                <AntDesign name="star" size={24} color="#FFCD3C" />
                                <Text style={[{fontSize:14, fontWeight:"bold", marginLeft:5}]}>
                                    {product.rating}
                                {/* {products.map(product => product.rating.indexOf(products[i].rating) > -1 ? product.rating : null)} */}
                                </Text>
                            </View>
                            <View style={[{alignItems:"flex-end"}]}>
                                <TouchableOpacity style={[{alignSelf:"flex-end", flexDirection:"row"}]} onPress={()=>navigation.navigate('DetailProduk', {
                                    nama: product.nama,
                                    harga: product.harga,
                                    rating: product.rating,
                                    image: product.image,
                                    spesifikasi: product.spesifikasi,
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
                            </View>
                )
                )}
        </View>
        <View style={styles.footer}>
        </View>
        </ScrollView>
    </SafeAreaView>
    );
}