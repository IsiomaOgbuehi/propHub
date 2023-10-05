import React from 'react';
import { Tabs } from 'expo-router';
import { Text } from 'react-native';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { useAuth } from '../../context/AuthContext';

const TabsPage = () => {
    const { user, logout } = useAuth()
    return (
        <Tabs>
            <Tabs.Screen
                name="home"
                options={{
                    tabBarIcon: ({ color, size }) => <AntDesign name="home" size={size} color={color} />,
                    tabBarLabel: 'Home',
                }}
                redirect={!user}
            />
            <Tabs.Screen
                name="search"
                options={{
                    tabBarIcon: ({ color, size }) => <AntDesign name="search1" size={size} color={color} />,
                    tabBarLabel: 'Search',
                }}
                redirect={!user}
            />
            <Tabs.Screen
                name="wallet"
                options={{
                    tabBarIcon: ({ color, size }) => <Ionicons name="wallet-outline" size={size} color={color} />,
                    tabBarLabel: 'Wallet',
                }}
                redirect={!user}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    tabBarIcon: ({ color, size }) => <Ionicons name="person-outline" size={size} color={color} />,
                    tabBarLabel: 'Profile',
                    headerRight: () => <Text style={{ color: '#aaa' }} onPress={logout}>Step 2/3</Text>
                }}
                redirect={!user}
            />
        </Tabs>
    )
}

export default TabsPage;