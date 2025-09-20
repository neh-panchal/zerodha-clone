import React from "react";

import Hero from "./Hero";
import LeftSection from "./LeftSection";
import LeftSection2 from "./LeftSection2";
import LeftSection3 from "./LeftSection3";
import RightSection from "./RightSection";
import Universe from "./Universe";



function PricingPage() {
  return (
    <>
      <Hero />
      <LeftSection
        imageURL="media/images/kite.png"
        productName="Kite"
        productDesription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        tryDemo="https://kite-demo.zerodha.com/dashboard"
        learnMore="https://zerodha.com/products/kite"
        googlePlay="https://play.google.com/store/apps/details?id=com.zerodha.kite3"
        appStore="https://apps.apple.com/in/app/zerodha-kite-trade-invest/id1449453802"
      />
      <RightSection
        imageURL="media/images/console.png"
        productName="Console"
        productDesription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        learnMore="https://zerodha.com/products/console"
      />
      <LeftSection2
        imageURL="media/images/coin.png"
        productName="Coin"
        productDesription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        coin= "https://coin.zerodha.com"
        googlePlay="https://play.google.com/store/apps/details?id=com.zerodha.coin"
        appStore="https://apps.apple.com/in/app/coin-by-zerodha-mutual-funds/id1392892554"
      />
      <RightSection
        imageURL="media/images/kiteconnect.png"
        productName="Kite Connect API"
        productDesription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        learnMore="https://zerodha.com/products/api/"
      />
      <LeftSection3 
        imageURL="media/images/varsity.png"
        productName="Varsity mobile"
        productDesription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        googlePlay="https://play.google.com/store/apps/details?id=com.zerodha.varsity"
        appStore="https://apps.apple.com/in/app/varsity-by-zerodha/id1474610753"
      />
      <p className="text-center mt-5 mb-5">
        Want to know more about our technology stack? Check out the Zerodha.tech
        blog.
      </p>
      <Universe />
    </>
  );
}

export default PricingPage;