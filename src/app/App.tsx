import React, { useState } from 'react';
import { LoginScreen } from './components/LoginScreen';
import { TetCard } from './components/TetCard';
import { AnimatePresence, motion } from 'motion/react';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');

  const handleLogin = (name: string) => {
    setUserName(name);
    setIsLoggedIn(true);
  };

  return (
    <div className="w-full h-full bg-red-900 text-white font-sans overflow-hidden">
      <AnimatePresence mode="wait">
        {!isLoggedIn ? (
          <motion.div
            key="login"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, x: -100, transition: { duration: 0.5 } }}
            className="w-full h-full"
          >
            <LoginScreen onLogin={handleLogin} />
          </motion.div>
        ) : (
          <motion.div
            key="tet-card"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="w-full h-full"
          >
            <TetCard userName={userName} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
