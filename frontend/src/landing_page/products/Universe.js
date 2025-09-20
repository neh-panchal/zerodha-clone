import React from "react";

function Universe() {
  return (
    <div className="container mt-5">
      <div className="row text-center">
        <h1>The Zerodha Universe</h1>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        <div className="col-4 p-3 mt-5">
           <a href="https://www.zerodhafundhouse.com/ " style={{textDecoration: "none"}}>
          <img style={{height: "55px" , width: "198.19px"}} src="media/images/ZerodhaFundHouse.png" />
          <p className="text-small text-muted mt-3" style={{fontSize:"12px"}}>Our asset management venture
          <br />
          that is creating simple
          <br/>
          and transparent index funds 
          <br/>
          to help you save for your goals.</p>
          </a>
        </div>
        <div className="col-4 p-3 mt-5">
          <a href="https://sensibull.com/ " style={{textDecoration: "none"}}>
          <img style={{height: "55px" , width: "198.19px"}} src="media/images/sensibullLogo.svg" />
          <p  className="text-small text-muted mt-3"style={{fontSize:"12px"}} > Options trading platform that lets you
          <br />
          create strategies, analyze positions, and examine
          <br /> 
          data points like open interest, FII/DII, and more.</p>
          </a>
        </div>
        <div className="col-4 p-3 mt-5" >
           <a href="https://www.tijorifinance.com/ideas-dashboard// " style={{textDecoration: "none"}}>
          <img style={{height: "55px" , width: "198.49px"}} src="media/images/goldenpiLogo.png" />
          <p className="text-small text-muted mt-3" style={{fontSize: "12px"}}>Investment research platform
          <br />
          that offers detailed insights on stocks
          <br/>
          sectors, supply chains, and more.</p>
          </a>
        </div>
        <div className="col-4 p-3 mt-5">
           <a href="https://www.streak.tech/home " style={{textDecoration: "none"}}>
          <img style={{height: "55px" , width: "166.48px"}} src="media/images/streakLogo.png" />
          <p className="text-small text-muted mt-3" style={{ fontSize: "12px"}}>Systematic trading platform
          <br />
          that allows you to create and backtest
          <br />
          strategies without coding.</p>
          </a>
        </div>
        <div className="col-4 p-3 mt-5">
           <a href="https://smallcase.zerodha.com/ " style={{textDecoration: "none"}}>
          <img style={{height: "55px" , width: "198.19px"}} src="media/images/smallcaseLogo.png" />
          <p className="text-small text-muted mt-3" style={{fontSize: "12px"}}>Thematic investing platform
          <br />
          that helps you invest in diversified
          <br />
          baskets of stocks on ETFs.</p>
          </a>
        </div>
        <div className="col-4 p-3 mt-5">
           <a href="https://joinditto.in " style={{textDecoration: "none"}}>
          <img style={{height: "55px" , width: "143.43px"}} src="media/images/dittoLogo.png" />
          <p className="text-small text-muted mt-3"  style={{fontSize: "12px"}} >Personalized advice on life
          <br />
          and health insurance. No spam
          <br />
          and no mis-selling.</p>
          </a>
        </div>
        <button
          className="p-2 btn btn-primary fs-5 mb-5"
          style={{ width: "20%", margin: "0 auto" }}
        >
          Signup Now
        </button>
      </div>
    </div>
  );
}

export default Universe;