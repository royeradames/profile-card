import React from 'react';
import 'normalize.css'
import './css/border-box_fix_and_easy_rem.css';
import './css/app.scss';

function App() {
  return (
    <div className="App">
      <section className="section">
        <div className="section__inner">
          <div className="card section__card ">
            <div><img className="card__image" src={"./images/image-victor.jpg"} alt="Vicor Crest front facing "/></div>
            <div className="card__about">
              {/* about */}
              <p>
                <span className="card_bold">Victor Crest</span> 26
              </p>
              
            </div>
            <div className="card__location">
              <p>
                London
              </p>

            </div>
    
            <hr className="card_social_media_divider"/>
            <div className="card__followers ">
              {/* followers */}
              <p>
                <span className="card_bold">80K</span> Followers
              </p>
            </div>
    
            <div className="card__likes">
              {/* likes */}
              <p>
                <span className="card_bold">803K</span>
                Likes
              </p>            
            </div>
    
            <div className="card__photos">
              {/* photos */}
              <p>
                <span className="card_bold">1.4K</span>
                Photos
              </p>
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
