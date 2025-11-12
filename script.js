const quotes = [
  "Not your keys, not your coins.",
  "Code is law.",
  "The future is decentralized.",
  "Trust the math, not the man.",
  "Blocks may be chained, but minds are free.",
  "Bitcoin: 21 million reasons to believe.",
  "Your freedom starts with a private key.",
  "Stay humble, stack sats.",
  "HODL the vision, not just the token.",
  "Every block builds the revolution."
];

const colors = [
  "#0ea5e9", "#22c55e", "#a855f7", "#f97316", "#ef4444", "#14b8a6", "#facc15"
];

const quoteEl = document.getElementById("quote");
const btn = document.getElementById("newQuote");

btn.addEventListener("click", () => {
  const newQuote = quotes[Math.floor(Math.random() * quotes.length)];
  const newColor = colors[Math.floor(Math.random() * colors.length)];
  quoteEl.textContent = `"${newQuote}"`;
  document.body.style.background = `linear-gradient(120deg, #000, ${newColor})`;
});
