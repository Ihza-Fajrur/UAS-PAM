import React, { useState, Component } from 'react';
import styles from '../styles/style.js';
import { Text, View, Button, TextInput, SafeAreaView, TouchableOpacity,ScrollView, Modal, FlatList, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
export default function ListBarang({navigation}) {
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
                <Text style={[{fontSize:20, color:"black" }]}>
                MACBOOK RETINA 256GB
                </Text>
                <Text style={[{color:"#EC9948", fontWeight:"bold"}]}>
                Rp. 17.000.000
                </Text>
                <View style={[{justifyContent: 'space-between', flexDirection:"row"}]}>
                <View style={[{flexDirection:"row",justifyContent: 'space-between', marginTop:5}]}>
                <FontAwesome5 name="star" size={20} color="black" />
                    <Text style={[{fontSize:14, fontWeight:"bold", marginLeft:5}]}>
                    5.0
                    </Text>
                </View>
                <View style={[{alignItems:"flex-end"}]}>
                    <TouchableOpacity style={[{alignSelf:"flex-end", flexDirection:"row"}]} onPress={()=>navigation.navigate('DetailProduk')}>
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

            {/* Item Card */}
            <View style={styles.item}>
            <View style={styles.itemPhoto}>
                <Image source={require('../assets/images/macbook-pro-13-og-202011.jpg')} style={{width: "100%", height: 200, borderTopRightRadius:10, borderTopLeftRadius:10,}}/>
            </View>
            <View style={styles.itemDescription}>
                <Text style={[{fontSize:20, color:"black" }]}>
                MACBOOK RETINA 256GB
                </Text>
                <Text style={[{color:"#EC9948", fontWeight:"bold"}]}>
                Rp. 17.000.000
                </Text>
                <View style={[{justifyContent: 'space-between', flexDirection:"row"}]}>
                <View style={[{flexDirection:"row",justifyContent: 'space-between', marginTop:5}]}>
                <FontAwesome5 name="star" size={20} color="black" />
                    <Text style={[{fontSize:14, fontWeight:"bold", marginLeft:5}]}>
                    5.0
                    </Text>
                </View>
                <View style={[{alignItems:"flex-end"}]}>
                    <TouchableOpacity style={[{alignSelf:"flex-end", flexDirection:"row"}]}>
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