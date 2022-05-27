import React,{ useState } from 'react';
import { FlatList, StyleSheet, Text, View, Image, ScrollView, Pressable } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

export default function DetailProduk({navigation,route}) {
    const [productNama, setProductNama] = useState(route.params.nama);
    const [productHarga, setProductHarga] = useState(route.params.harga);
    const [productRating, setProductRating] = useState(route.params.rating);
    const [productReview, setProductReview] = useState(route.params.review);
    const [productSpesifikasi, setProductSpesifikasi] = useState(route.params.spesifikasi);

    const dummyReview = [
        { name: 'Ihza' , rating: productRating, review: 'Lorem' },
        { name: 'Widodo', rating: 3, review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
    ]

    const [defaultRating, setdefaultRating] = useState(5)
    const [rating, setRating] = useState([1, 2, 3, 4, 5])

    const ratingFilled = 'https://raw.githubusercontent.com/tranhonghan/images/main/star_filled.png'
    const ratingCorner = 'https://raw.githubusercontent.com/tranhonghan/images/main/star_corner.png'

    const ProductRating = () => {
        return (
            <View style={{ flexDirection: 'row' }}>
                {
                    rating.map((item, key) => {
                        return (
                            <View key={item}>
                                <Image
                                    style={styles.productRatingStar}
                                    source={
                                        item <= defaultRating ? { uri: ratingFilled } : { uri: ratingCorner }
                                    }
                                />
                            </View>
                        )
                    })
                }
            </View>
        )
    }

    return (
        <View style={styles.container}>


            {/* HEADER */}
            <View style={styles.header}>
                <Ionicons name="chevron-back" size={24} color="black" onPress={()=>navigation.navigate('ListBarang')} />
                <Text style={{ fontSize: 18 }}>Detail Product</Text>
                <AntDesign name="home" size={24} color="black" onPress={()=>navigation.navigate('ListBarang')}/>
            </View>

            <ScrollView>
                {/* PRODUCT */}
                <Image source={require('../assets/images/macbook-pro-13-og-202011.jpg')} style={styles.Image} />
                <View style={{ paddingHorizontal: 10 }}>
                    <Text style={{ fontSize: 28, fontWeight: 'bold', color: '#ec994b' }}>IDR {productHarga}</Text>
                    <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{productNama}</Text>
                    <View style={styles.ratingContainer} >
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <ProductRating />
                            <Text style={{ marginLeft: 5, fontSize: 18 }}>{productRating}</Text>
                        </View>
                        <Text style={{ alignSelf: 'flex-end', fontSize: 14, color: '#adadad' }}>100 Review</Text>
                    </View>
                </View>

                {/* SPESIFIKASI */}
                <View style={styles.spesifikasiContainer}>
                    <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 5, color: '#ec994b' }}>Spesifikasi</Text>
                    <Text>
                        {productSpesifikasi}
                    </Text>
                </View>

                {/* REVIEW */}
                <View>
                    <Text style={{ marginLeft: 10, fontSize: 18, fontWeight: 'bold', marginBottom: 5, color: '#ec994b' }}>Review</Text>
                    <FlatList
                        data={dummyReview}
                        renderItem={({ item }) => (
                            <View style={styles.reviewContainer}>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    {
                                        rating.map((rate, key) => {
                                            return (
                                                <View key={rate}>
                                                    <Image
                                                        style={styles.customerRatingStar}
                                                        source={
                                                            rate <= item.rating ? { uri: ratingFilled } : { uri: ratingCorner }
                                                        }
                                                    />
                                                </View>
                                            )
                                        })
                                    }
                                    <Text style={{ marginLeft: 10 }}>oleh {item.name}</Text>
                                </View>
                                <Text>{item.review}</Text>
                            </View>
                        )}
                    />
                </View>

            </ScrollView>

            {/* FOOTER */}
            <View style={styles.footer}>
                <Pressable style={styles.reviewButton} onPress={()=>navigation.navigate('Review')}>
                    <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 16 }}>Review</Text>
                </Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 40,
    },
    Image: {
        height: 250,
        resizeMode: 'cover',
        width: '100%'
    },
    header: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 5,
    },
    productRatingStar: {
        width: 20,
        height: 20,
        resizeMode: 'cover'
    },
    spesifikasiContainer: {
        padding: 10,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: '#bababa',
        borderTopWidth: StyleSheet.hairlineWidth,
        borderTopColor: '#bababa',
        marginVertical: 10,
    },
    reviewContainer: {
        paddingHorizontal: 10,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: '#bababa',
        paddingBottom: 5,
        marginBottom: 5
    },
    customerRatingStar: {
        width: 14,
        height: 14,
        resizeMode: 'cover'
    },
    footer: {
        elevation: 10,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 5,
    },
    reviewButton: {
        backgroundColor: '#ec994b',
        paddingVertical: 10,
        width: '60%',
        alignItems: 'center',
        borderRadius: 20,
    }
});
