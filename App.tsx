import React from 'react';
import HomeScreen from './src/screens/HomeScreen';
import Notch from './src/components/ui/Notch';
import { ThemeProvider } from './src/context/ThemeContext';
import { LanguageProvider } from './src/context/LanguageContext';
import { ThemeColorProvider } from './src/context/ThemeColorContext';

const App = () => {
  return (
    <ThemeProvider>
      <ThemeColorProvider>
        <LanguageProvider>
          <Notch />
          <HomeScreen />
        </LanguageProvider>
      </ThemeColorProvider>
    </ThemeProvider>
  );
};

export default App;
