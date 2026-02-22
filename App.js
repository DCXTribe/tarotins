import "./global.css";
import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import Dashboard from './src/screens/Dashboard';
import Deck from './src/screens/Deck';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('Dashboard');

  const renderScreen = () => {
    switch (currentScreen) {
      case 'Dashboard':
        return <Dashboard onNavigate={setCurrentScreen} />;
      case 'Deck':
        return <Deck onNavigate={setCurrentScreen} />;
      default:
        return <Dashboard onNavigate={setCurrentScreen} />;
    }
  };

  return (
    <View className="flex-1">
      {renderScreen()}
      <StatusBar style="auto" />
    </View>
  );
}
