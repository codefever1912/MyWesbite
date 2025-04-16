function showFact() {
    const facts = [
      "GitHub Pages is completely free!",
      "HTML stands for HyperText Markup Language.",
      "JavaScript can make websites interactive.",
      "CSS makes your website look awesome!",
      "You can host personal portfolios, blogs, and more on GitHub Pages."
    ];
  
    const randomIndex = Math.floor(Math.random() * facts.length);
    document.getElementById("fact-output").innerText = facts[randomIndex];
  }
  