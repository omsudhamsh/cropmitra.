// Optional: Add any dynamic fetching logic if needed in the future.
window.onload = function() {
  // Sample static data as placeholders for crop prices
  const cropPrices = {
    paddy: "₹1850",
    cotton: "₹6200",
    maize: "₹2000",
    jowar: "₹2500",
    peanut: "₹5500"
  };

  // Display crop prices dynamically (in case you fetch this data from an API)
  document.getElementById("paddy-box").innerHTML = `
    <h3>Paddy</h3>
    <p><strong>Expected Price: ${cropPrices.paddy} per Quintal</strong></p>
    <p>Paddy is one of the most widely grown crops in India, essential for food security. The price can vary based on the region and market conditions.</p>
  `;
  document.getElementById("cotton-box").innerHTML = `
    <h3>Cotton</h3>
    <p><strong>Expected Price: ${cropPrices.cotton} per Quintal</strong></p>
    <p>Cotton is a key cash crop in India. The price fluctuates based on demand from textile industries and international market trends.</p>
  `;
  document.getElementById("maize-box").innerHTML = `
    <h3>Maize</h3>
    <p><strong>Expected Price: ${cropPrices.maize} per Quintal</strong></p>
    <p>Maize is used both for food and fodder. Prices can vary based on the harvest season and availability in the market.</p>
  `;
  document.getElementById("jowar-box").innerHTML = `
    <h3>Jowar</h3>
    <p><strong>Expected Price: ${cropPrices.jowar} per Quintal</strong></p>
    <p>Jowar is an important crop in dry regions of India, with prices varying based on production and demand in the agricultural markets.</p>
  `;
  document.getElementById("peanut-box").innerHTML = `
    <h3>Peanut</h3>
    <p><strong>Expected Price: ${cropPrices.peanut} per Quintal</strong></p>
    <p>Peanut is a crucial oilseed crop grown mainly in southern and western India. Prices depend on weather patterns and international demand.</p>
  `;
};
