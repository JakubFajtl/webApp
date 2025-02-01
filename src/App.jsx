import { useState } from 'react';
import './App.css';
import VideoBackground from '../components/VideoBackground';
import PanelWithOverlay from '../components/NavigationPanel/PanelWithOverlay';
import QuoteScene from '../components/Quotes/QuoteScene';
import GameContainer from '../components/Games/GameContainer';

function App() {
  const [currentPage, setCurrentPage] = useState('Quotes'); // State to track the current page

  // Function to handle navigation
  
  const handleNavigation = (page) => {
    setCurrentPage(page);
  };

  const quotes = [
    {
      text: 'The only limit to our realization of tomorrow is our doubts of today.',
      author: 'Franklin D. Roosevelt',
      year: 1941,
    },
    {
      text: 'In the middle of difficulty lies opportunity.',
      author: 'Albert Einstein',
      year: 1932,
    },
    {
      text: 'Life is 10% what happens to us and 90% how we react to it.',
      author: 'Charles R. Swindoll',
      year: 1982,
    },
  ];

  return (
    <>
      {/* <Background /> */}
      <PanelWithOverlay onNavigate={handleNavigation}/>
        {/* <NavigationPanel onNavigate={handleNavigation} /> */}
        <VideoBackground />
      {/* Main Content */}
      <div className="content">
        {currentPage === 'Quotes' && (
          <QuoteScene quotes={quotes} />
        )}

        {currentPage === 'Gallery' && (
          <section>
            <h1>Gallery</h1>
            <p>Image gallery will be displayed here.</p>
          </section>
        )}

        {currentPage === 'Games' && (
          <section>
            <GameContainer/>
          </section>
        )}

        {currentPage === 'CV' && (
          <section>
            <h1>CV</h1>
            <p>My professional resume will be shown here.</p>
          </section>
        )}

        {currentPage === 'QnA' && (
          <section>
            <h1>QnA</h1>
            <p>Questions and answers will be listed here.</p>
          </section>
        )}
        
      </div>
    </>
  );
}

export default App;