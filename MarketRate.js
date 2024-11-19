const cropPrices = {
    paddy: 1850,
    cotton: 6200,
    maize: 2000,
    jowar: 2500,
    peanut: 5500,
  };
  
  function displayCropPrices() {
    document.getElementById("paddy-price").innerText = `₹${cropPrices.paddy}`;
    document.getElementById("cotton-price").innerText = `₹${cropPrices.cotton}`;
    document.getElementById("maize-price").innerText = `₹${cropPrices.maize}`;
    document.getElementById("jowar-price").innerText = `₹${cropPrices.jowar}`;
    document.getElementById("peanut-price").innerText = `₹${cropPrices.peanut}`;
  }
  
  window.onload = displayCropPricess;
  