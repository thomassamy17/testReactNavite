import React, {useState} from "react";
import {Platform, StatusBar, Text, TouchableOpacity} from "react-native";
import Main from "./components/Main";
import Search from "./components/Search";
import FilmDetails from "./components/FilmDetails";
import Lottie from "./components/Lottie";
import Map from "./components/Map";
import Products from "./components/Products";
import ProductDetails from "./components/ProductDetails";
import Equipe from "./components/Equipe";
import MemberDetails from "./components/MemberDetails";
import WebViewCustom from "./components/WebViewCustom";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import CustomModalDarkMode from "./components/CustomModalDarkMode";
import TestNFC from "./components/NFC";

const Stack = createNativeStackNavigator();

const Navigation = (props) => {
    const colors = props.colors
    const [modalVisible, setModalVisible] = useState(false);

    const darkMode = (value) => {
        const action = {type: "TOGGLE_DARK", value: value}
        props.dispatch(action)
        setModalVisible(false)
    }

    return (
        <NavigationContainer>
            <StatusBar backgroundColor={colors.red_light}/>
            <CustomModalDarkMode modalVisible={modalVisible} darkMode={darkMode}/>
            <Stack.Navigator screenOptions={{
                headerBackTitleVisible: false,
                headerRight: () => (
                    <TouchableOpacity
                        onPress={() => setModalVisible(true)}>
                        <Text style={{color: colors.black, margin: 5}}>Dark Mode</Text>
                    </TouchableOpacity>
                ),
                headerTitleAlign: 'center',
                headerTintColor: colors.black,
                headerStyle: {backgroundColor: colors.red_light, shadowColor: "transparent", fontSize: 10}
            }}>
                <Stack.Screen name="Main" component={Main} options={{title: 'Bienvenue'}}/>
                <Stack.Screen name="Search" component={Search} options={{title: 'Rechercher'}}/>
                <Stack.Screen name="FilmDetails" component={FilmDetails} options={{title: 'Détails'}}/>
                <Stack.Screen name="Lottie" component={Lottie} options={{title: 'Animation Lottie'}}/>
                <Stack.Screen name="Map" component={Map} options={{title: 'Map'}}/>
                <Stack.Screen name="Products" component={Products} options={{title: 'Product'}}/>
                <Stack.Screen name="ProductDetails" component={ProductDetails}
                              options={({route}) => ({title: route.params.title})}/>
                <Stack.Screen name="Equipe" component={Equipe} options={{title: 'Équipe'}}/>
                <Stack.Screen name="MemberDetails" component={MemberDetails}
                              options={({route}) => ({title: route.params.member.name})}/>
                <Stack.Screen name="WebViewCustom" component={WebViewCustom}
                              options={({route}) => ({title: (route.params.title !== undefined ? route.params.title : "No Title Test")})}/>
                <Stack.Screen name="NFC" component={TestNFC} options={{title: 'NFC Test'}}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation
