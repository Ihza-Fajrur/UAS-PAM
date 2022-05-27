import React, {useState} from 'react';
import { Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import styles from "../styles/Review";
import { Ionicons, AntDesign } from '@expo/vector-icons';

const Review = ({navigation}) => {
  const [defaultRating, setdefaultRating] = useState(2)
  const [maxRating, setmaxRating] =useState([1,2,3,4,5])

  const starImgFilled = 'https://raw.githubusercontent.com/tranhonghan/images/main/star_filled.png'
  const starImgCorner = 'https://raw.githubusercontent.com/tranhonghan/images/main/star_corner.png'

  const CustomRatingBar = () => {
    return(
      <View style={styles.CustomRatingBarStyle}>{
        maxRating.map((item, key) => {
          return(
            <TouchableOpacity 
              activeOpacity={0.7} 
              key={item} 
              onPress={()=> setdefaultRating(item)}
              >
              <Image 
                style={styles.starImgStyle}
                source={
                  item <= defaultRating
                    ? {uri: starImgFilled}
                    : {uri: starImgCorner}
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
      <View style={styles.header}>
        <Pressable onPress={()=>navigation.navigate('ListBarang')}>
          <Ionicons name="chevron-back" size={30} color="black" />
        </Pressable>
        <Text style={styles.teksheader}>Review Form</Text>
        <Pressable>
          <AntDesign name="home" size={30} color="black" onPress={()=>navigation.navigate('ListBarang')}/>
        </Pressable>
      </View>
      <View style={styles.form}>
        <Text style={styles.teksform}>Nama</Text>
        <TextInput style={styles.inputnama}/>
        <Text style={styles.teksform}>Review</Text>
        <TextInput style={styles.inputreview}/>
        <Text style={styles.teksform}>Rating</Text>
        <CustomRatingBar/>
        <Pressable style={styles.submit}>
          <Text style={styles.tekssubmit}>Submit</Text>
        </Pressable>
      </View>
    </View>
  );
};
export default Review;