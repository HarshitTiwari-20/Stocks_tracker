'use client';


import React, { useRef, memo } from 'react';


interface TradingWidgetProps {
  title?: string;
  scriptUrl?: string;
  config?: Record<string, unknown>;
  height?: number;
  className?: string;
}





function TradingWidget({
  title, scriptUrl, config, height = 600, className
}: TradingWidgetProps)

{
  const containerRef = useRef(null);



  return (
    <div className="tradingview-widget-container" ref={containerRef} style={{ height: "100%", width: "100%" }}>
      <div className="tradingview-widget-container__widget" style={{ height: "calc(100% - 32px)", width: "100%" }}></div>
      <div className="tradingview-widget-copyright"><a href="https://www.tradingview.com/symbols/XAUUSD/?exchange=OANDA" rel="noopener nofollow" target="_blank"><span className="blue-text">XAUUSD chart</span></a><span className="trademark"> by TradingView</span></div>
    </div>
  );
}

export default memo(TradingWidget);
