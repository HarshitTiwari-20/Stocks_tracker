'use client';

// TradingViewWidget.jsx
import React, { useEffect, useRef, memo } from 'react';

function TradingWidget() {
  const container = useRef(null);

  useEffect(
    () => {
      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
      script.type = "text/javascript";
      script.async = true;
      script.innerHTML = ``;
      container.current.appendChild(script);
    },
    []
  );

  return (
    <div className="tradingview-widget-container" ref={container} style={{ height: "100%", width: "100%" }}>
      <div className="tradingview-widget-container__widget" style={{ height: "calc(100% - 32px)", width: "100%" }}></div>
      <div className="tradingview-widget-copyright"><a href="https://www.tradingview.com/symbols/XAUUSD/?exchange=OANDA" rel="noopener nofollow" target="_blank"><span className="blue-text">XAUUSD chart</span></a><span className="trademark"> by TradingView</span></div>
    </div>
  );
}

export default memo(TradingWidget);
