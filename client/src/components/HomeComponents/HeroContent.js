import React from 'react'
import { Link } from 'react-router-dom'
import './HeroContent.css'
const HeroContent = () => {
    return (
        <div className="heroContent">
           <div className="heroContentWrapper">
               <div className="heroContentContainer">
                   <h2>
                   The world’s most popular way to buy, sell, and trade crypto
               </h2>
               <p className="heroContentPara">
                   Trusted by millions since 2011 with over $1 Trillion in crypto transactions.
               </p>
               <div className="btnContainer">
                   <button className="btn btnGetStarted" type="">Get Started</button>
                   <button className="btn btnLogin" type="">Login</button>
               </div>
               </div>
               <div className="valueContainer">
                   <div className="valueContainerWrapper">
                       <div className="valueContainerContent">
                           <div className="valueWrapper">
                               <div className="values">
                                   <Link to="" className="bitCoin">
                                       <div className="header">
                                           <div className="iconContainer">
                                               <img src="https://www.blockchain.com/static/img/prices/prices-btc.svg" alt="" className="imgContainer"/>
                                           </div>
                                           <div className="priceContainer">
                                               <button className="btnBuy" type="">Buy</button>
                                               <button className="btnBuy btnTrade" type="">Trade</button>
                                           </div>
                                       </div>
                                       <div className="priceCoinNameContent">
                                           <p>Bitcoin</p>
                                           <p className="coinValue">BTC</p>
                                       </div>
                                       <div className="priceInfo">
                                         <p className="price">$47,047.90</p>  
                                         <p className="pricePercent">+1.24%</p>
                                       </div>
                                   </Link>
                                   <Link to="" className="bitCoin">
                                       <div className="header">
                                           <div className="iconContainer">
                                               <img src="https://www.blockchain.com/static/img/prices/prices-eth.svg" alt="" className="imgContainer"/>
                                           </div>
                                           <div className="priceContainer">
                                               <button className="btnBuy" type="">Buy</button>
                                               <button className="btnBuy btnTrade" type="">Trade</button>
                                           </div>
                                       </div>
                                       <div className="priceCoinNameContent">
                                           <p>Ethereum</p>
                                           <p className="coinValue">ETH</p>
                                       </div>
                                       <div className="priceInfo">
                                         <p className="price">$3,371.40</p>  
                                         <p className="pricePercent">-2.86%</p>
                                       </div>
                                   </Link>
                                   <Link to="" className="bitCoin">
                                       <div className="header">
                                           <div className="iconContainer">
                                               <img src="https://www.blockchain.com/static/img/prices/prices-xlm.svg" alt="" className="imgContainer"/>
                                           </div>
                                           <div className="priceContainer">
                                               <button className="btnBuy" type="">Buy</button>
                                               <button className="btnBuy btnTrade" type="">Trade</button>
                                           </div>
                                       </div>
                                       <div className="priceCoinNameContent">
                                           <p>Steller</p>
                                           <p className="coinValue">XLM</p>
                                       </div>
                                       <div className="priceInfo">
                                         <p className="price">$0.36</p>  
                                         <p className="pricePercent">-0.33%</p>
                                       </div>
                                   </Link>
                                   <Link to="" className="bitCoin">
                                       <div className="header">
                                           <div className="iconContainer">
                                               <img src="https://www.blockchain.com/static/img/prices/prices-clout.svg" alt="" className="imgContainer"/>
                                           </div>
                                           <div className="priceContainer">
                                               <button className="btnBuy" type="">Buy</button>
                                               <button className="btnBuy btnTrade" type="">Trade</button>
                                           </div>
                                       </div>
                                       <div className="priceCoinNameContent">
                                           <p>BitClout</p>
                                           <p className="coinValue">CLOUT</p>
                                       </div>
                                       <div className="priceInfo">
                                         <p className="price">$87.43</p>  
                                         {/* <p className="pricePercent">+1.24%</p> */}
                                       </div>
                                   </Link>
                               </div>
                           </div>
                           <Link className="viewMore">View More Prices</Link>
                       </div>
                   </div>
               </div>
           </div>
        </div>
    )
}

export default HeroContent
