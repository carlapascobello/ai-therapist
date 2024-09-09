function displayOutput(response) {
  console.log("hello output");
  console.log(response.data.answer);

  let conversationBoxElement = document.querySelector("#ai-reply");
  let conversationBox =
    (conversationBoxElement.innerHTML = `<div class=""><strong>Athena:</strong> ${response.data.answer}</div>`);
  new Typewriter("#ai-reply", {
    strings: `${conversationBox}`,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function getInput(event) {
  event.preventDefault();
  console.log("hello input");

  let optionsElement = document.querySelector("#options");
  optionsElement.classList.add("hidden");

  let promptInput = document.querySelector("#advice-input");
  let userPrompt = promptInput.value;

  let apiKey = "cfdo22bb3e4ct447ead942a949a20eb3";
  let prompt = `User instruction: ${userPrompt}`;
  let context =
    "You are an expert psychologist/ therapist that has 50 years of experience. Engage in a conversation with the topic following the user instruction, please. Also, use and HTML format so you can write paragraphs properly and at a <strong> tag for important notes. All font sizes should be the same so avoid using heading tags. And you can provide however long your advice is. Keep your answer direct and concise.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(displayOutput);

  let conversationBoxElement = document.querySelector("#conversation-box");
  let conversationBox = `<strong>You:</strong> ${userPrompt} <br/>`;
  new Typewriter("#conversation-box", {
    strings: `${conversationBox}`,
    autoStart: true,
    delay: 2,
    cursor: "",
  });
}

let submitBtnElement = document.querySelector("#submit-button");
submitBtnElement.addEventListener("click", getInput);
console.log("hello");

function displayOptionOutput(response) {
  let conversationBoxElement = document.querySelector("#ai-reply");
  let conversationBox =
    (conversationBoxElement.innerHTML = `<div class=""><strong>Athena:</strong> ${response.data.answer}</div>`);
  new Typewriter("#ai-reply", {
    strings: `${conversationBox}`,
    autoStart: true,
    delay: 0.1,
    cursor: "",
  });
}

function getOptionsInput(event) {
  event.preventDefault();
  console.log("hello input");

  let optionsElement = document.querySelector("#options");
  optionsElement.classList.add("hidden");

  let promptInput = document.querySelector("#option-1");
  let userPrompt = promptInput.value;
  console.log(promptInput.value);

  let apiKey = "cfdo22bb3e4ct447ead942a949a20eb3";
  let prompt = `User instruction: ${userPrompt}`;
  let context =
    "You are an expert psychologist/ therapist that has 50 years of experience.  Create a top 10 list on the topic following the user instruction, please. Also, use and HTML format so you can write paragraphs properly and emphasize important items. Number each item of your top 10 list. Write the first paragraph without any HTML element. Separate each paragraph properly and points. All font sizes should be the same so avoid using tags like <h1>, <h2>, etc. Keep your answer direct and concise.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log(prompt);
  console.log(apiUrl);

  axios.get(apiUrl).then(displayOptionOutput);

  let conversationBoxElement = document.querySelector("#conversation-box");
  let conversationBox = `<strong>You:</strong> ${userPrompt} <br/>`;
  new Typewriter("#conversation-box", {
    strings: `${conversationBox}`,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let option1BtnElement = document.querySelector("#option-1");
option1BtnElement.addEventListener("click", getOptionsInput);
