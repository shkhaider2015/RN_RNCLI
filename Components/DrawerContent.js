import React from 'react'
import { View, StyleSheet } from "react-native";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { Avatar, Title, Caption, Paragraph, Drawer, Text, TouchableRipple, Switch } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";




    export const DrawerContent = (...val) => {

        const [isDarkTheme, setIsDarkTheme] = React.useState(false)

        const toggleTheme = () =>
        {
            setIsDarkTheme(!isDarkTheme)
        }

        return (
            <View style={{ flex: 1 }} >
                <DrawerContentScrollView {...val} >
                    <View style={styles.drawerContent} >
                        <View style={styles.userInfoSection} >
                            <View style={{ flexDirection: 'row', marginTop: 15 }} >
                                <Avatar.Image
                                    source={{ uri: "https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png" }}
                                    size={50}
                                />
                                <View style={{ flexDirection: 'column', marginLeft: 15 }} >
                                    <Title style={styles.title} >Shakeel Haider</Title>
                                    <Caption style={styles.caption} >shkhaider@gmail.com</Caption>
                                </View>
                            </View>
                            <View style={styles.row} >
                                <View style={styles.section}>
                                    <Paragraph style={styles.paragraph, styles.caption} >60</Paragraph>
                                    <Caption style={styles.caption} > Following</Caption>
                                </View>
                                <View style={styles.section} >
                                    <Paragraph style={styles.paragraph, styles.caption} >100</Paragraph>
                                    <Caption style={styles.caption} > Followers</Caption>
                                </View>
                            </View>

                        </View>
                        <Drawer.Section style={styles.drawerSection} >
                            <Drawer.Item
                                icon={({ color, size }) => (<Icon name="home-outline" color={color} size={size} />)}
                                label="Home"
                                onPress={() => {val.navigation.navigate('Home')} }
                            />
                            <Drawer.Item
                                icon={({ color, size }) => (<Icon name="account-outline" color={color} size={size} />)}
                                label="Profile"
                                onPress={() => {val.navigation.navigate('About')} }
                            />
                            <Drawer.Item
                                icon={({ color, size }) => (<Icon name="bookmark-outline" color={color} size={size} />)}
                                label="Bookmarks"
                                onPress={() => {} }
                            />
                            <Drawer.Item
                                icon={({ color, size }) => (<Icon name="settings-outline" color={color} size={size} />)}
                                label="Settings"
                                onPress={() => {} }
                            />
                            <Drawer.Item
                                icon={({ color, size }) => (<Icon name="account-check-outline" color={color} size={size} />)}
                                label="Support"
                                onPress={() => {} }
                            />
                        </Drawer.Section>
                        <Drawer.Section title="Preferences" >
                            <TouchableRipple onPress={() => toggleTheme() } >
                                <View style={styles.preference} >
                                    <Text>Dark Theme</Text>
                                    <View pointerEvents="none" >
                                    <Switch value={isDarkTheme} />
                                    </View>
                                    
                                </View>
                            </TouchableRipple>
                        </Drawer.Section>
                    </View>

                </DrawerContentScrollView>
                <Drawer.Section style={styles.bottomDrawerSection} >
                    <Drawer.Item
                        icon={({ color, size }) => (<Icon name="exit-to-app" color={color} size={size} />)}
                        label="Sign Out"
                    />

                </Drawer.Section>

            </View>
        )
    }


const styles = StyleSheet.create({
    drawerContent: {
        flex: 1
    },
    userInfoSection: {
        paddingLeft: 20
    },
    title: {
        fontSize: 16,
        marginTop: 3,
        fontWeight: "bold"
    },
    caption: {
        fontSize: 14,
        lineHeight: 14
    },
    row: {
        marginTop: 20,
        flexDirection: "row",
        alignItems: "center"
    },
    section: {
        flexDirection: "row",
        alignItems: "center",
        marginRight: 15
    },
    paragraph: {
        fontWeight: "bold",
        marginRight: 3
    },
    drawerSection: {
        marginTop: 15
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: "#F4F4F4",
        borderTopWidth: 1
    },
    preference: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 12,
        paddingHorizontal: 16
    }
})