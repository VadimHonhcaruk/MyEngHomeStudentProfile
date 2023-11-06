import { useEffect, useState } from 'react';
import './App.css';
import { Login } from './components/Login/Login';
import { Route, Routes } from 'react-router-dom';
import { Main } from './components/Main/Main';

function App() {
  useEffect(() => {
    const preloader = document.querySelector('.container');
    preloader.classList.add('hidden');
    setTimeout(() => {
      preloader.classList.add('hiddenAll');
    }, 2000);
  }, []);

  const [phone, setPhone] = useState('');

  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login phone={phone} setPhone={setPhone} />} />
        <Route path="/main" element={<Main />} />
        {/* <Route path="/*" element={<NotFound />} /> */}
      </Routes>
    </div>
  );
}

export default App;
