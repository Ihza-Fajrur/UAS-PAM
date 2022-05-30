import * as React from 'react';
// import React, { useState, useEffect } from 'react';
// import ListBarang from './screens/list_barang';
// import Navigator from './routes/homeStack';
import ListBarang from './screens/ListBarang'
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StackRouter } from 'react-navigation';
import DetailProduk from './screens/DetailProduk';
import Review from './screens/Review';

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='ListBarang' screenOptions={{ headerShown: false }}>
        <Stack.Screen name="ListBarang" component={ListBarang} />
        <Stack.Screen name="DetailProduk" component={DetailProduk} />
        <Stack.Screen name="Review" component={Review} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

