import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { registerRootComponent } from 'expo';
import { SWRConfig } from 'swr';
import './styles/telescope-post-content.css';

import Navigation from './navigation/Navigation';

export default registerRootComponent(function App() {
  return (
    <SWRConfig
      value={{ fetcher: (resource, init) => fetch(resource, init).then((res) => res.json()) }}
    >
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </SWRConfig>
  );
});
