function displayAdvice(response) {
  console.log(response.data.answer);

  let conversationBoxElement = document.querySelector("#conversation-box");
  let optionsElement = document.querySelector(".search-suggestions-container");
  optionsElement.classList.add("hidden");
}

function generateAdvice(event) {
  event.preventDefault();

  let adviceOutput = document.querySelector("#advice-input");

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
