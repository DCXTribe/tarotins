import "./global.css";
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import Dashboard from './src/screens/Dashboard';

export default function App() {
  return (
    <View className="flex-1">
      <Dashboard />
      <StatusBar style="auto" />
    </View>
  );
}
