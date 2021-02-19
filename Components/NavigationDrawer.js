import React from 'react'
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { DrawerContent } from "./DrawerContent";
import { About } from "./About";
import { Home } from "./Home";


export const NavigationDrawer = () => {
    const Drawer = createDrawerNavigator();

    return <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home" drawerContent={val => <DrawerContent {...val} />} >
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="Profile" component={About} />
        </Drawer.Navigator>
    </NavigationContainer>
}