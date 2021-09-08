import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Search from "./components/Search";
import FilmDetails from "./components/FilmDetails";
import Main from "./components/Main";
import Lottie from "./components/Lottie";
import Map from "./components/Map";
import Products from './components/Products'
import ProductDetails from "./components/ProductDetails";
import Equipe from "./components/Equipe";
import MemberDetails from "./components/MemberDetails";
import WebViewCustom from "./components/WebViewCustom";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Main" component={Main} options={{title: 'Bienvenue'}}/>
          <Stack.Screen name="Search" component={Search} options={{title: 'Rechercher'}}/>
          <Stack.Screen name="FilmDetails" component={FilmDetails} options={{title: 'Détails'}}/>
          <Stack.Screen name="Lottie" component={Lottie} options={{title: 'Animation Lottie'}}/>
          <Stack.Screen name="Map" component={Map} options={{title: 'Map'}}/>
          <Stack.Screen name="Products" component={Products} options={{title: 'Product'}}/>
          <Stack.Screen name="ProductDetails" component={ProductDetails} options={({route}) => ({title: route.params.title})}/>
          <Stack.Screen name="Equipe" component={Equipe} options={{title: 'Équipe'}}/>
          <Stack.Screen name="MemberDetails" component={MemberDetails} options={({route}) => ({title: route.params.member.name})}/>
          <Stack.Screen name="WebViewCustom" component={WebViewCustom} options={({route}) => ({title: (route.params.title!==undefined?route.params.title:"prout")})}/>
        </Stack.Navigator>
      </NavigationContainer>
  );
};

export default App
