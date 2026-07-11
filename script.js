function calculateInterest(principal, rate, time) {
  principal = Number(principal);
  rate = Number(rate);
  time = Number(time);

  if (isNaN(principal) || isNaN(rate) || isNaN(time)) {
    throw new Error("Invalid input: all fields must be numbers");
  }

  return (principal * rate * time) / 100;
}

// Only attach DOM logic if running in a browser (so Jasmine/Node doesn't error)
if (typeof document !== "undefined") {
  const btn = document.getElementById("calculate-btn");
  if (btn) {
    btn.addEventListener("click", () => {
      const principal = document.getElementById("principal").value;
      const rate = document.getElementById("rate").value;
      const time = document.getElementById("time").value;

      const interest = calculateInterest(principal, rate, time);
      document.getElementById("result").textContent = `Interest: ${interest}`;
    });
  }
}

// Export for Jasmine (Node)
if (typeof module !== "undefined") {
  module.exports = calculateInterest;
}
