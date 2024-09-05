function displayAdvice(response) {
  console.log(response.data.answer);

  let adviceOutput = document.querySelector("#advice-input");
  let conversationBox = document.querySelector("#conversation-box");
  conversationBox.innerHTML = `<div class="user-reply">${adviceOutput.value}</div>`;
  conversationBox.innerHTML = `<div class="user-reply">${response.data.answer}</div>`;
}

function uncalled() {
  new Typewriter("#conversation-box", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1.5,
    cursor: "│",
  });
}

function generateAdvice(event) {
  event.preventDefault();

  //let adviceOutput = document.querySelector("#advice-input");
  //let conversationBox = document.querySelector("#conversation-box");
  //conversationBox.innerHTML = `<div class="user-reply">${adviceOutput.value}</div>`;
  let adviceOutput = document.querySelector("#advice-input");

  let optionsElement = document.querySelector(".search-suggestions-container");
  optionsElement.classList.add("hidden");

  let apiKey = "cfdo22bb3e4ct447ead942a949a20eb3";
  let prompt = `User instruction: ${adviceOutput.value}`;
  let context =
    "You are an expert psychologist/ therapist that has 50 years of experience. Engage in a conversation with the topic following the user instruction, please.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log(prompt);

  axios.get(apiUrl).then(displayAdvice);
}

let adviceContentElement = document.querySelector("#advice-input-form");
adviceContentElement.addEventListener("submit", generateAdvice);

console.log("hi");
