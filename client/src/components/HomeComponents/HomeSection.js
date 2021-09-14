import React from 'react'
import { Link } from 'react-router-dom'
import './HomeSection.css'
import rightColImage from '../../assets/wallet-earn-interest.png'
import fiat from '../../assets/exchange-fiat-currencies.png'
import Footer from './Footer'
const HomeSection = () => {
    return (
        <div className="homeSection">
            <div className="homeSectionContainer">
                <div className="featureSection">
                    <div className="leftCol">
                        <h2>The Easiest and Most Powerful Crypto Wallet</h2>
                        <div className="featuresContent">
                            <div className="featuresContentWrapper">
                                <h3>Buy and Sell Crypto in Minutes</h3>
                                <p>Instantly buy Bitcoin with credit card, debit card, or by linking your bank.</p>
                            </div>
                        </div>
                        <div className="featuresContent">
                            <div className="featuresContentWrapper">
                                <h3>Earn up to 13.5% in rewards</h3>
                                
                            </div>
                        </div>
                        <div className="featuresContent">
                            <div className="featuresContentWrapper">
                                <h3>Control your funds with Private Key Wallet</h3>
                                
                            </div>
                        </div>
                        <div className="featuresContent">
                            <div className="featuresContentWrapper">
                                <h3>At home or on the go</h3>
                            </div>
                        </div>
                        <div className="featuresContent">
                            <div className="featuresContentWrapper">
                                <h3>All your crypto in one place</h3>
                            </div>
                        </div>
                        <Link className="getStarted">Get Started</Link>
                    </div>
                    <div className="rightCol">
                        <div className="rightColFeatureImage">
                            <div className="rightColImageWrapper">
                                <img className="rightColImage" src={rightColImage} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="exchangeSection">
                <div className="exachangeSectionContainer">
                    <div className="exchangeFeature">
                        <div className="exachngeLeft">
                            <div className="exchangeLeftWrapper">
                                <div className="leftWrapper">
                                    <img className="exchangeImg" src={fiat} alt=""/>
                                </div>
                            </div>
                           
                        </div>
                        <div className="exchangeFeatureRight">
                           <h2>Lightning-Fast Crypto Trading</h2>
                        <div className="featuresContent">
                            <div className="featuresContentWrapper">
                                <h3>Trade in 3 fiat currencies</h3>
                                <p>The Exchange supports USD, EUR, and GBP.</p>
                            </div>
                        </div>
                        <div className="featuresContent">
                            <div className="featuresContentWrapper">
                                <h3>A matching engine that can keep up with you</h3>
                                
                            </div>
                        </div>
                        <div className="featuresContent">
                            <div className="featuresContentWrapper">
                                <h3>24/7 live support</h3>
                                
                            </div>
                        </div>
                        <div className="featuresContent">
                            <div className="featuresContentWrapper">
                                <h3>Coming soon: Margin Trading</h3>
                            </div>
                        </div>
                        <Link className="getStarted">Trade Now</Link>
                         </div>
                    </div>
                </div>
            </div>
            <div className="banner">
                <div className="bannerWrapper">
                    <h2>From zero to crypto in minutes</h2>
                        <Link className="link">Get Started</Link>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default HomeSection
