import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AppNavigation from './src/navigation/appNavigation';
import { Provider } from 'react-redux';
import store from './src/app/store';
import Toast from 'react-native-toast-message';

export default function App() {
  return (
    <Provider store={store}>
      <AppNavigation />
      <Toast />
    </Provider>
  );
}
