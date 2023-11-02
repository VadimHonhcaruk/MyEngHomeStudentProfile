import { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(() => {
    const preloader = document.querySelector('.container');
    preloader.classList.add('hidden');
    setTimeout(() => {
      preloader.classList.add('hiddenAll');
    }, 2000);
  }, []);

  return (
    <div className="App">

    </div>
  );
}

export default App;
