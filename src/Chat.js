import React from 'react';
import Graphs from './Graphs';


function ChatPage() {
  const salesData = { 'January': 100, 'February': 200, 'March': 150 };
  const trafficSourcesData = { 'Organic': 50, 'Direct': 30, 'Referral': 20 };
  const stockPricesData = { 'AAPL': 150, 'GOOGL': 250, 'MSFT': 200 };

  return (
    <div>

    <h1>Showcasing my amazing coding skills with some random graphs that I totally didn't reuse from a previous hand-in:</h1> 

      <Graphs 
        salesData={salesData} 
        trafficSourcesData={trafficSourcesData} 
        stockPricesData={stockPricesData} 
      />
    </div>
  );
}

export default ChatPage;
