function playGame() {
  const input = document.getElementById("userInput").value.toLowerCase();
  const responseBox = document.getElementById("response");

  let responses = {
    "ai": "Artificial Intelligence is the future! 🤖",
    "python": "Python is the king of AI programming! 🐍",
    "data": "Data is the new oil. 📊",
    "cloud": "Cloud makes AI scalable! ☁️"
  };

  if (responses[input]) {
    responseBox.innerHTML = responses[input];
  } else {
    responseBox.innerHTML = "Hmm... I don’t know that word yet!";
  }
}
