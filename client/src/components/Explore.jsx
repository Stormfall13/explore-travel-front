import React from 'react';
import bg1 from '../assets/bg1.png';

const Explore = () => {
  return (
    <section className="explore">
        <div className="explore__wrapp-main">
            <div className="explore__wrapp-left">
                <div className="explore__wrapp-text">
                    <h1>Explore and <br/> Tralver</h1>
                    <p>Holiday finder</p>
                </div>
                <form>
                    <input list="location" placeholder="Location" />
                    <datalist id="location">
                        <option value="Moscow"></option>
                        <option value="Brazil"></option>
                        <option value="Dominicana Republic"></option>
                    </datalist>
                    <input list="activity" placeholder="Activity" />
                    <datalist id="activity">
                        <option value="Working"></option>
                        <option value="Chill"></option>
                    </datalist>
                    <input list="grade" placeholder="Grade" />
                    <datalist id="grade">
                        <option value="1"></option>
                        <option value="2"></option>
                        <option value="3"></option>
                        <option value="4"></option>
                        <option value="5"></option>
                    </datalist>
                    <input type="date" className="date" />
                    <button>Explore</button>
                </form>
            </div>
            <div className="explore__wrapp-right">
                <img src={bg1} alt="" />
            </div> 
        </div>
    </section> 
  )
}

export default Explore;
