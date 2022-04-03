import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { registerRootComponent } from 'expo';
import './styles/telescope-post-content.css';

import Navigation from './navigation/Navigation';

export default registerRootComponent(function App() {
  return (
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
  );
});
