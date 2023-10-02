import React from 'react';
import { Stack } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { Text } from 'react-native';

const authLayout = () => {
  const router = useRouter()
  const handleGoBack = () => {
    router.back();
  }
  return (
    <Stack>
      <Stack.Screen
        name="loginPage"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="personalDetailsPage"
        options={{
          headerTransparent: true,
          headerTitle: '',
          headerShown: true,
          headerRight: () => <Text style={{ color: '#aaa' }}>Step 1/3</Text>,
        }}
      />
      <Stack.Screen
        name="authDetailsPage"
        options={{
          headerTransparent: true,
          headerTitle: '',
          headerShown: true,
          headerLeft: () => <Ionicons name="arrow-back-outline" color={'#fff'} size={24} marginTop={10} onPress={handleGoBack} />,
          headerRight: () => <Text style={{ color: '#aaa' }}>Step 2/3</Text>
        }}
      />
      <Stack.Screen
        name="locationDetailsPage"
        options={{
          headerTransparent: true,
          headerTitle: '',
          headerShown: true,
          headerLeft: () => <Ionicons name="arrow-back-outline" color={'#fff'} size={24} marginTop={10} onPress={handleGoBack} />,
          headerRight: () => <Text style={{ color: '#aaa' }}>Step 3/3</Text>
        }}
      />
    </Stack>
  );
};

export default authLayout;
