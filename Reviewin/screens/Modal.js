import React, { useState } from "react";
import { Text, View, } from 'react-native';

import { AntDesign } from '@expo/vector-icons';

export default function Popup(props) {

  const changeState = (bool) => {
    props.closePopUp(bool);
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.5)' }}>
      <View style={{ backgroundColor: 'white', justifyContent: 'center', alignItems: 'center', padding: 20, borderRadius: 10 }}>
        <View style={{ alignSelf: 'flex-end' }}>
          <AntDesign name="close" size={30} color="black" onPress={() => changeState()} />
        </View>
        <AntDesign name="checkcircle" size={150} color="green" />
        <Text style={{ marginTop: 10, fontSize: 20, fontWeight: 'bold' }}>Submit Review Berhasil</Text>
      </View>
    </View>
  );
}
