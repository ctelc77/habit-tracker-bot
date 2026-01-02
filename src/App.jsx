import React, { useEffect, useState } from 'react';
import { supabase } from './supabaseClient';
import confetti from 'canvas-confetti';

function App() {
  const [user, setUser] = useState(null);
  const tg = window.Telegram.WebApp;

  useEffect(() => {
    tg.ready();
    tg.expand();
    setUser(tg.initDataUnsafe?.user);
  }, []);

  const handleCheckIn = async () => {
    // Вібрація
    tg.HapticFeedback.impactOccurred('heavy');

    // Запис у БД
    const { error } = await supabase
      .from('checkins')
      .insert([{ 
        user_id: user?.id, 
        username: user?.username,
        created_at: new Date().toISOString() 
      }]);

    if (!error) {
      confetti({
        particleCount: 150,
        spread: 60,
        origin: { y: 0.7 }
      });
      tg.showScanQrPopup({ text: "Звичку зараховано! 🔥" });
      setTimeout(() => tg.closeScanQrPopup(), 2000);
    } else {
      alert("Помилка: " + error.message);
    }
  };

  return (
    <div style={{
      backgroundColor: 'var(--tg-theme-bg-color)',
      color: 'var(--tg-theme-text-color)',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'sans-serif'
    }}>
      <h1>Привіт, {user?.first_name || 'Герою'}!</h1>
      <div style={{
        width: '150px',
        height: '150px',
        borderRadius: '50%',
        border: '5px solid #31b545',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '40px',
        marginBottom: '20px'
      }}>
        🔥
      </div>
      <button 
        onClick={handleCheckIn}
        style={{
          backgroundColor: '#31b545',
          color: '#fff',
          border: 'none',
          padding: '15px 40px',
          borderRadius: '12px',
          fontSize: '20px',
          fontWeight: 'bold',
          cursor: 'pointer'
        }}
      >
        ЗРОБИТИ ЧЕК-ІН
      </button>
    </div>
  );
}

export default App;
