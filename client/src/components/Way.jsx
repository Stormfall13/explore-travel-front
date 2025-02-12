import React from 'react';
import bg2 from '../assets/bg2.png';

const Way = () => {
  return (
    <section className="way">
        <div className="way__wrapp-main">
            <div className="way__wrapp-left">
                <img src={bg2} alt="" />
            </div>
            <div className="way__wrapp-right">
                <h2>A new way to explore the world</h2>
                <p>For decades travellers have reached for Lonely 
                    Planet books when looking to plan and execute 
                    their perfect trip, but now, they can also 
                    let Lonely Planet Experiences lead the way
                </p>
                <a href="#">Learn more</a>
            </div> 
        </div>
    </section>
  )
}

export default Way;
