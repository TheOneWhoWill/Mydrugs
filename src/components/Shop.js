import React from 'react';
import { Carousel, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons'

import SmallSlide1 from '../images/SliderImages/SmallerSliders/bp_b.jpg';
import SmallSlide2 from '../images/SliderImages/SmallerSliders/gp_b.jpg';
import SmallSlide3 from '../images/SliderImages/SmallerSliders/pp_b.jpg';
import SmallSlide4 from '../images/SliderImages/SmallerSliders/rp_b.jpg';

import BluePill from '../images/products/blue_pill.png';
import GreenPill from '../images/products/green_pill.png';
import PurplePill from '../images/products/purple_pill.png';
import RedPill from '../images/products/red_pill.png';
import PinkDevil from '../images/products/pink_pill.png';
import Confused from '../images/products/yellow_pill.png';

function Shop() {
  return (
    <div className="Shop">
      <div className="productsContainer">
        <Carousel className="shopCarousel" indicators={false} interval={3000}>
          <Carousel.Item className="shopCarouselItem">
            <img src={SmallSlide1} alt="ss"/>
            <Carousel.Caption className="shopCarouselCaption">
              <div className="altText">MyDrugs.to</div>
              <h1>MyDrugs.to</h1>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="shopCarouselItem">
            <img src={SmallSlide2} alt="ss"/>
            <Carousel.Caption className="shopCarouselCaption">
              <h1>10% OFF TODAY</h1>
              <div className="altText">Fast, Secure, Reliable</div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="shopCarouselItem">
            <img src={SmallSlide3} alt="ss"/>
            <Carousel.Caption className="shopCarouselCaption">
              <h5>MyDrugs.to</h5>
              <h4>Visit the new clearweb shop!</h4>
              <div className="altText">10% OFF using HTSDOF</div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="shopCarouselItem">
            <img src={SmallSlide4} alt="ss"/>
            <Carousel.Caption className="shopCarouselCaption">
              <h2>Fast, Secure, Reliable</h2>
              <div className="altText">A GoodTimes Partner</div>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <h1 className="shopHeader">Shop</h1>
        <h1 className="rowLabel">Most Popular</h1>
        <div className="mostPopular">
          <Card className="productCard">
            <Card.Img className="productImage" variant="top" src={PurplePill} />
            <Card.Body>
              <Card.Title>Purple FLower</Card.Title>
              <div className="cardBottom">
                <div className="prices">
                  <div className="btcPrice">0.0021 BTC</div>
                  <div className="ethPrice">0.0802 ETH</div>
                </div>
                <Card.Text className="cardText">
                  70MG OF MDMA PER PILL
                </Card.Text>
              </div>
            </Card.Body>
          </Card>
          <Card className="productCard">
            <Card.Img className="productImage" variant="top" src={GreenPill} />
            <Card.Body>
              <Card.Title>Green Snowflake</Card.Title>
              <div className="cardBottom">
                <div className="prices">
                  <div className="btcPrice">0.0045 BTC</div>
                  <div className="ethPrice">0.1667 ETH</div>
                </div>
                <Card.Text className="cardText">
                  150MG OF MDMA PER PILL
                </Card.Text>
              </div>
            </Card.Body>
          </Card>
          <Card className="productCard">
            <Card.Img className="productImage" variant="top" src={BluePill} />
            <Card.Body>
              <Card.Title>Blue Clover</Card.Title>
              <div className="cardBottom">
                  <div className="prices">
                  <div className="btcPrice">0.0029 BTC</div>
                  <div className="ethPrice">0.1114 ETH</div>
                </div>
                <Card.Text className="cardText">
                  100MG OF MDMA PER PILL
                </Card.Text>
              </div>
            </Card.Body>
          </Card>
          <Card className="productCard">
            <Card.Img className="productImage" variant="top" src={RedPill} />
            <Card.Body>
              <Card.Title>Red Pill</Card.Title>
              <div className="cardBottom">
                <div className="prices">
                  <div className="btcPrice">0.0013 BTC</div>
                  <div className="ethPrice">0.0523 ETH</div>
                </div>
                <Card.Text className="cardText">
                  90MG OF MDMA PER PILL
                </Card.Text>
              </div>
            </Card.Body>
          </Card>
        </div>
        <h1 className="newLabel">NEW ADDITONS</h1>
        <div className="newAddition">
          <div className="newAdditionImg">
            <img src={PinkDevil} alt="smiling devil"/>
          </div>
          <div className="blurb">
            <h1>SMILING DEVIL</h1>
            <div className="stars"><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStarHalfAlt} /></div>
            <span className="newMark">NEW ADDITON</span>
            <p className="blurbParagraph">MEET THE NEWEST EDITION TO OUR LINEUP OF EXCLUSIVE PILLS FROM OUR PARTNER GOODTIMES. HAVE A RASBERRY FLAVORED BLISS, EACH PILL CONTAINS 130MG OF MDMA, AND SOME NATURAL FLAVORING. AVALIBLE STARTING NEXT MONTH.</p>
          </div>
        </div>
        <div className="newAddition">
          <div className="newAdditionImg">
            <img src={Confused} alt="confused"/>
          </div>
          <div className="blurb">
            <h1>CONFUSED</h1>
            <div className="stars"><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></div>
            <span className="newMark">NEW ADDITON</span>
            <p className="blurbParagraph">
              EVER WONDER WHY ECSTACY LOOKS LIKE CANDY BUT IS NEVER FLAVORED? TASTE THE CITRUS LEMON FLAVORED ECSTACY IN YOUR MOUTHS. EACH PILL CONTAINS 125MG OF MDMA, AND SOME NATURAL FLAVORING. AVALIBLE FOR A LIMITED TIME ONLY FOR OUR PREMIUM MEMBERS.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shop;