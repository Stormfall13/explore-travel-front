import React from 'react';
import bg3 from '../assets/bg3.png';

const Guides = () => {
  return (
    <section className="guides">
        <div className="guides__wrapp-main">
            <div className="guides__wrapp-left">
                <h2>Guides by Thousand Sunny</h2>
                <p>Packed with tips and advice from our
                    on-the-ground experts, our city 
                    guides app (iOS and Android) is the 
                    ultimate resource before and during a trip.
                </p>
                <button className="guides__btn">Download</button>
            </div>    
            <div className="guides__wrapp-right">
                <img src={bg3} alt="" />
            </div> 
        </div>
    </section>
  )
}

export default Guides;
