import React, { useState } from 'react';
import { Modal, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import styles from "../styles/Review";
import { Ionicons, AntDesign } from '@expo/vector-icons';
import Popup from './Modal'

const Review = ({ navigation }) => {
  const [defaultRating, setdefaultRating] = useState(2)
  const [maxRating, setmaxRating] = useState([1, 2, 3, 4, 5])
  const [modalOpen, setModalOpen] = useState(false)

  const starImgFilled = 'https://raw.githubusercontent.com/tranhonghan/images/main/star_filled.png'
  const starImgCorner = 'https://raw.githubusercontent.com/tranhonghan/images/main/star_corner.png'

  const modalCloseNavigate = () => {
    setModalOpen(false)
    navigation.navigate('ListBarang')
  }

  const CustomRatingBar = () => {
    return (
      <View style={styles.CustomRatingBarStyle}>{
        maxRating.map((item, key) => {
          return (
            <TouchableOpacity
              activeOpacity={0.7}
              key={item}
              onPress={() => setdefaultRating(item)}
            >
              <Image
                style={styles.starImgStyle}
                source={
                  item <= defaultRating
                    ? { uri: starImgFilled }
                    : { uri: starImgCorner }
                }
              />
            </TouchableOpacity>
          )
        })
      }
      </View>
    )
  }

  return (
    <View style={styles.container}>

      <Modal transparent visible={modalOpen} animationType='fade'>
        <Popup closePopUp={modalCloseNavigate} />
      </Modal>

      {/* HEADER */}
      <View style={styles.header}>
        <Pressable onPress={() => navigation.navigate('ListBarang')}>
          <Ionicons name="chevron-back" size={30} color="black" />
        </Pressable>
        <Text style={{ fontSize: 22 }}>Review Form</Text>
        <Pressable>
          <AntDesign name="home" size={30} color="black" onPress={() => navigation.navigate('ListBarang')} />
        </Pressable>
      </View>

      {/* FORM */}
      <View style={{}}>
        <View>
          <Text style={{ marginBottom: 5, fontSize: 18, fontWeight: 'bold' }}>Nama</Text>
          <TextInput style={styles.inputNama} />
        </View>
        <View>
          <Text style={{ marginBottom: 5, fontSize: 18, fontWeight: 'bold' }}>Review</Text>
          <TextInput multiline={true} style={styles.inputReview} />
        </View>
        <View>
          <Text style={{ marginBottom: 5, fontSize: 18, fontWeight: 'bold' }}>Rating</Text>
          <CustomRatingBar />
        </View>
      </View>

      <View style={styles.submitContainer}>
        <Pressable style={styles.submit} onPress={() => setModalOpen(true)}>
          <Text style={{ fontWeight: 'bold', color: 'white', fontSize: 18 }}>Submit</Text>
        </Pressable>
      </View>
    </View>
  );
};
// navigation.navigate('ListBarang')
export default Review;