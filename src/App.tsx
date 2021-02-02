import React from 'react';
import 'normalize.css'
import './css/border-box_fix_and_easy_rem.css';
import './css/app.scss';

function App() {
  return (
          <div className="card section__card ">
            <div ><img className="card__image" src={"./images/image-victor.jpg"} alt="Vicor Crest front facing "/></div>
            <div className="card__about">
              <p>
                <span className="card_bold">Victor Crest </span> 
                <span className="card_age">26</span> 
                <span className="card_new_line"> London</span>
              </p>
            </div>
    
            <div className="card_social_media_divider">
              <p className="card__followers">
                <span className="card_bold">80K</span> 
                <span className="card_new_line">Followers</span>
              </p>
    
              <p className="card__likes">
                <span className="card_bold">803K</span>
                <span className="card_new_line">Likes</span>
              </p>            
    
              <p className="card__photos">
                <span className="card_bold">1.4K</span>
                
                <span className="card_new_line">Photos</span>
              </p>
            </div>
          </div>
  );
}

export default App;
