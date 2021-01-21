import React from 'react';
import './App.css';
import './app.scss';

function App() {
  return (
    <div className="App">
      <section className="section">
        <div className="section__inner">
          <div className="section__card card">
            <div className="card__about">
              {/* about */}
              <span className="card__about_bold">Victor Crest</span>
              <span className="about_size_l">26</span>
              London
            </div>
    
            <div className="card__followers ">
            	{/* followers */}
            	<span className="card_bold">80K</span>
            	Followers
            </div>
    
            <div className="card__likes">
              {/* likes */}
              <span className="card_bold">803K</span>
              Likes            
            </div>

    
            <div className="card__photos">
              {/* photos */}
              <span className="card_bold">1.4K</span>
              Photos
            </div>
          </div>
        </div>
      <div className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">Frontend Mentor</a>. 
        Coded by <a href="https://www.linkedin.com/in/royer-adames/" target="_blank" rel="noreferrer">Royer Adames</a>.
      </div>
    </section>
    </div>
  );
}

export default App;
