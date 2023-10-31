import { Slot, useRouter, useSegments } from 'expo-router';
import { useContext, useEffect } from 'react';
import { AuthContext, AuthProvider } from '../context/AuthContext';
import { Text } from 'react-native';
function RootLayoutNav() {
  const { user, initialized } = useContext(AuthContext);
  const router = useRouter();
  const segments = useSegments();

  useEffect(() => {
    console.log(user, initialized)
    if (!initialized) return;

    const inTabsGroup = segments[0] === '(tabs)';

    if (user && !inTabsGroup) {
      router.replace('/home');
    } else if (!user) {
      router.replace('/personalDetailsPage');
    }
  }, [user, initialized]);
  return (

    <>
      {
        initialized ? <Slot /> : <Text>Loading...</Text>
      }
    </>
  );
}


export default function RootLayout() {
  return (
    <AuthProvider>
      <RootLayoutNav />
    </AuthProvider>
  );
}
