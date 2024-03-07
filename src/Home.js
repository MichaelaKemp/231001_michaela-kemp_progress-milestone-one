import React from 'react';
import ManUImage from './ManU.jpg';
import ManUImage2 from './ManU2.jpg';
import ManUImage3 from './ManU3.jpeg';
import ManUImage4 from './ManU4.jpg';
import ManUImage5 from './ManU5.jpg';
import ManUImage6 from './ManU6.jpg';
import ButtonPopup from './ButtonPopup';

function Home() {
    return (
        <div className = "content">
            <h1>Welcome to my Home Page</h1>
            <h4>Today I will be giving you the reasons on why I should get high marks for all my assignments</h4>
            <p>They are the following:</p>
            <ol>
                <li>I deserve it</li>
                <li></li>
                <li>I have included these Man U images for you</li>
            </ol>
            <br></br>
            <div className="image-collage">
                <img src={ManUImage} alt="ManU1" />
                <img src={ManUImage2} alt="ManU2" />
                <img src={ManUImage3} alt="ManU3" />
                <img src={ManUImage4} alt="ManU4" />
                <img src={ManUImage5} alt="ManU5" />
                <img src={ManUImage6} alt="ManU6" />                
            </div>
            <br></br>
            <p><b>(If people repeat, I apologize, but I do not watch any sports and do not know who these people are)</b></p>
            <br></br>
            <h2>Am I getting good marks?</h2>
            <ButtonPopup />
        </div>
    );
}

export default Home;
