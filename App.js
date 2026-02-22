import "./global.css";
import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import Dashboard from './src/screens/Dashboard';
import Deck from './src/screens/Deck';
import Journal from './src/screens/Journal';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('Dashboard');

  const renderScreen = () => {
    switch (currentScreen) {
      case 'Dashboard':
        return <Dashboard onNavigate={setCurrentScreen} />;
      case 'Deck':
        return <Deck onNavigate={setCurrentScreen} />;
      case 'Journal':
        return <Journal onNavigate={setCurrentScreen} />;
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
