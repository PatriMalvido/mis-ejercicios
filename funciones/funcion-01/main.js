function getEmoji() {
    fetch("https://rand.fun/number/integer")
      .then(response => response.json())
      .then(data => {
        document.querySelector('.js-result').innerHTML = data.result
      });
  }
  document.querySelector('.js-emoji').addEventListener("click", getEmoji);
