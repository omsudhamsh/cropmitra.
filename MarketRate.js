async function fetchMarketRates() {
    const apiUrl = "https://api.example.com/market-rates"; // Replace with actual API URL
    try {
      const response = await fetch(apiUrl);
      if (!response.ok) throw new Error("Failed to fetch data");
  
      const data = await response.json();
      const tableBody = document.getElementById("market-data");
  
      // Example crop data structure: [{ crop: "Paddy", price: 25, action: "Hold" }]
      tableBody.innerHTML = data.map(crop => `
        <tr>
          <td>${crop.crop}</td>
          <td>₹${crop.price}</td>
          <td>${crop.action}</td>
        </tr>
      `).join("");
    } catch (error) {
      console.error("Error fetching market rates:", error);
      document.getElementById("market-data").innerHTML = `
        <tr>
          <td colspan="3">Unable to fetch market rates at the moment.</td>
        </tr>
      `;
    }
  }
  
  // Fetch data when the page loads
  window.onload = fetchMarketRates;
  