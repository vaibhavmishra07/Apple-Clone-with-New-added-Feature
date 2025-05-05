const products = [
    "MacBook Air", "MacBook Pro", "iMac",
    "iPad Air", "iPad Pro", "iPad Mini",
    "iPhone 15 Pro", "iPhone 13", "iPhone SE",
    "Apple Watch SE", "Apple Watch Series 7"
  ];
  
  function liveSearch() {
    const input = document.getElementById("searchInput").value.toLowerCase();
    const suggestionBox = document.getElementById("suggestions");
    suggestionBox.innerHTML = "";
    if (!input) return (suggestionBox.style.display = "none");
  
    const matches = products.filter(p => p.toLowerCase().includes(input));
    matches.forEach(match => {
      const li = document.createElement("li");
      li.textContent = match;
      suggestionBox.appendChild(li);
    });
    suggestionBox.style.display = matches.length ? "block" : "none";
  }
  
  function compareProducts() {
    const selected = Array.from(document.querySelectorAll(".compare-list input:checked")).map(cb => cb.value);
    const resultBox = document.getElementById("comparisonResult");
  
    if (selected.length < 2) {
      resultBox.innerHTML = "<p>Please select at least two products to compare.</p>";
      return;
    }
  
    let html = "<h3>Comparison</h3><ul>";
    selected.forEach(product => {
      html += `<li><strong>${product}</strong>: Lorem ipsum dolor sit amet, feature-rich, Apple-designed excellence.</li>`;
    });
    html += "</ul>";
    resultBox.innerHTML = html;
  }
  