import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Results.css';
import { Link } from "react-router-dom";

// Desi images
import desi1 from '../Assets/Desi-1.jpg';
import desi2 from '../Assets/Desi-2.jpg';
import desiclothes1 from '../Assets/desiclothes1.jpg';
import desiclothes2 from '../Assets/desiclothes2.jpg';
import desiclothes3 from '../Assets/desiclothes3.jpg';

// Classic images (placeholders, replace with actual paths)
import classic1 from '../Assets/Classic-1.jpg';
import classic2 from '../Assets/Classic-2.jpg';
import classicclothes1 from '../Assets/classicclothes1.jpg';
import classicclothes2 from '../Assets/classicclothes2.jpg';
import classicclothes3 from '../Assets/classicclothes3.jpg';

// Trendy images (placeholders, replace with actual paths)
import trendy1 from '../Assets/Trendy-1.jpg';
import trendy2 from '../Assets/Trendy-2.jpg';
import trendyclothes1 from '../Assets/trendyclothes1.jpg';
import trendyclothes2 from '../Assets/trendyclothes2.jpg';
import trendyclothes3 from '../Assets/trendyclothes3.jpg';

// Vintage images (placeholders, replace with actual paths)
import vintage1 from '../Assets/Vintage-1.jpg';
import vintage2 from '../Assets/Vintage-2.jpg';
import vintageclothes1 from '../Assets/vintageclothes1.jpg';
import vintageclothes2 from '../Assets/vintageclothes2.jpg';
import vintageclothes3 from '../Assets/vintageclothes3.jpg';

// Goth images (placeholders, replace with actual paths)
import goth1 from '../Assets/Goth-1.jpg';
import goth2 from '../Assets/Goth-2.jpg';
import gothclothes1 from '../Assets/gothclothes1.jpg';
import gothclothes2 from '../Assets/gothclothes2.jpg';
import gothclothes3 from '../Assets/gothclothes3.jpg';

// Y2K images (placeholders, replace with actual paths)
import y2k1 from '../Assets/Y2K-1.jpg';
import y2k2 from '../Assets/Y2K-2.jpg';
import y2kclothes1 from '../Assets/y2kclothes1.jpg';
import y2kclothes2 from '../Assets/y2kclothes2.jpg';
import y2kclothes3 from '../Assets/y2kclothes3.jpg';

// OldMoney images (placeholders, replace with actual paths)
import oldmoney1 from '../Assets/OldMoney-1.jpg';
import oldmoney2 from '../Assets/OldMoney-2.jpg';
import oldmoneyclothes1 from '../Assets/oldmoneyclothes1.jpg';
import oldmoneyclothes2 from '../Assets/oldmoneyclothes2.jpg';
import oldmoneyclothes3 from '../Assets/oldmoneyclothes3.jpg';

// Fairycore images (placeholders, replace with actual paths)
import fairycore1 from '../Assets/Fairycore-1.jpg';
import fairycore2 from '../Assets/Fairycore-2.jpg';
import fairycoreclothes1 from '../Assets/fairycoreclothes1.jpg';
import fairycoreclothes2 from '../Assets/fairycoreclothes2.jpg';
import fairycoreclothes3 from '../Assets/fairycoreclothes3.jpg';

const Results = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const scores = location.state?.scores;

  if (!scores) {
    navigate('/');
    return null;
  }

  // Get an array of [style, score] pairs and sort by score in descending order
  const sortedScores = Object.entries(scores).sort(([, a], [, b]) => b - a);

  // Get the top style
  const topStyle = sortedScores[0][0];

  const images = {
    'Desi': [desi1, desi2],
    'Classic': [classic1, classic2],
    'Trendy': [trendy1, trendy2],
    'Vintage': [vintage1, vintage2],
    'Goth': [goth1, goth2],
    'Y2K': [y2k1, y2k2],
    'OldMoney': [oldmoney1, oldmoney2],
    'Fairycore': [fairycore1, fairycore2],
  };

  const recommendedClothes = {
    'Desi': [
      { img: desiclothes1, link: 'https://www.myntra.com/sarees/tikhi%2Bimli/tikhi-imli-embellished-floral-saree/21569212/buy' },
      { img: desiclothes2, link: 'https://www.myntra.com/dress/street-9/street-9-orange-floral-printed-dress/17451298/buy' },
      { img: desiclothes3, link: 'https://www.myntra.com/saree/kalini/kalini-floral-printed-saree/23193654/buy' },
    ],
    'Classic': [
      { img: classicclothes1, link: 'https://www.myntra.com/shirts/shaye/shaye-smart-opaque-v-neck-casual-shirt/25771652/buy' },
      { img: classicclothes2, link: 'https://www.myntra.com/dresses/magre/magre-beige-satin-sheath-midi-dress/16459158/buy' },
      { img: classicclothes3, link: 'https://www.myntra.com/18709036?query=%7B%7D' },
    ],
    'Trendy': [
      { img: trendyclothes1, link: 'https://www.myntra.com/tops/sassafras/sassafras-black-sleeveless-cotton-corset-top/22944862/buy' },
      { img: trendyclothes2, link: 'https://www.myntra.com/24541580' },
      { img: trendyclothes3, link: 'https://www.myntra.com/tops/tokyo%2Btalkies/tokyo-talkies-floral-printed-sweetheart-neck-twisted-crop-top/21980344/buy' },
    ],
    'Vintage': [
      { img: vintageclothes1, link: 'https://www.myntra.com/20264924?query=%7B%7D' },
      { img: vintageclothes2, link: 'https://www.myntra.com/18526892?query=%7B%7D' },
      { img: vintageclothes3, link: 'https://www.myntra.com/19227078?query=%7B%7D' },
    ],
    'Goth': [
      { img: gothclothes1, link: 'https://www.myntra.com/jeans/lulu+%26+sky/lulu--sky-women-straight-fit-high-rise-retro-jeans/29836205/buy' },
      { img: gothclothes2, link: 'https://www.myntra.com/dresses/lulu+%26+sky/lulu--sky-women-ruched-tie-up-shoulder-bodycon-dress/28885768/buy' },
      { img: gothclothes3, link: 'https://www.myntra.com/22037122?query=%7B%7D' },
    ],
    'Y2K': [
      { img: y2kclothes1, link: 'https://www.myntra.com/dresses/antheaa/antheaa-chiffon-fit--flare-dress/23936328/buy' },
      { img: y2kclothes2, link: 'https://www.myntra.com/jeans/roadster/roadster-women-pink-solid-flared-stretchable-jeans/14094112/buy' },
      { img: y2kclothes3, link: 'https://www.myntra.com/tshirts/berrylush/berrylush-women--multi-coloured-graphic-graphic-tee/20243834/buy' },
    ],
    'OldMoney': [
      { img: oldmoneyclothes1, link: 'https://www.myntra.com/dresses/trendyol/trendyol-mini-dress/25131120/buy' },
      { img: oldmoneyclothes2, link: 'https://www.myntra.com/dresses/trendyol/trendyol-dress/21509708/buy'},
      { img: oldmoneyclothes3, link: 'https://www.myntra.com/dresses/trendyol/trendyol-maxi-dress/21426490/buy' },
    ],
    'Fairycore': [
      { img: fairycoreclothes1, link: 'https://www.myntra.com/dresses/lulu+%26+sky/lulu--sky-self-design-shoulder-straps-fit--flare-mini-dress/26523766/buy' },
      { img: fairycoreclothes2, link: 'https://www.myntra.com/23384320?query=%7B%7D' },
      { img: fairycoreclothes3, link: 'https://www.myntra.com/dresses/antheaa/antheaa-floral-print-flared-sleeve-chiffon-a-line-dress/23136676/buy' },
    ],
  };

  return (
    <div className="results-container">
      <h1>Congratulations!</h1>
      <h2>You are a {topStyle} Girl</h2>
      <div className="image-gallery">
        {images[topStyle]?.map((imgSrc, index) => (
          <img
            key={index}
            src={imgSrc}
            alt={topStyle}
            className={`staggered-image ${index % 2 === 0 ? 'image-bottom-left' : 'image-top-right'} image-${index}`}
          />
        ))}
      </div>
      <h3>Shop related fits</h3>
      <div className="clothes-gallery">
        {recommendedClothes[topStyle]?.map((item, index) => (
          <div className="clothes-card" key={index}>
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              <img src={item.img} alt={item.title} />
            </a>
          </div>
        ))}
      </div>
      <div className='backToHome'>
      <Link to="/app" basename="/">
          <a href="#app">Didn't like the fits? Choose one yourself</a>
        </Link>
        </div>
    </div>
  );
};

export default Results;

