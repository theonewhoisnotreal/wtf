const BLACKLISTED_KEY_CODES = [ 38 ];
const COMMANDS = {
  help:
    'Supported commands: <span class="code">about</span>, <span class="code">experience</span>, <span class="code">education</span>, <span class="code">skills</span>, <span class="code">contact</span>, <span class="code">downloads</span>, <span class="code">docs</span>',
  about:
    "Hello 👋,<br>I'm Jawad and I make lot of errors and break a lot of shit. But I try my best to fix them. ",
  skills:
    '<span class="code">Languages:</span> Python, C++, C, HTML, CSS, JavaScript<br><span class="code">Technologies:</span> Git, SQL<br><span class="code">Frameworks:</span> React.js, Vue.js, Django',
  education:
    "Still in college lul<br>Computer Science is not even my major, I'm studying Automotive Technology.",
  experience: "No Experience 😥, I just make things I enjoy!",
  contact:
    "You can contact me on any of following links:<br><a href='mailto: kipo@jawad.wtf' class='success link'>Email</a>, <a href='https://discord.gg/R5T4rAN' class='success link'>Discord</a><br>Do not contact me on any of my social medias, I will not respond.",
  downloads:
    'To download one of my projects, use the parent command along with your choice (e.g., downloadsurena)<br><br> Supported download commands: <span class="code">surena</span>, <span class="code">tokenchecker</span>, <span class="code">mcc</span>, <span class="code">disbump</span>',
  downloadsurena:
    "<a href='https://cdn.discordapp.com/attachments/737567704403411005/738811295729582110/Surena2.0.rar' class='success link'>Surena2.0.rar</a>",
  downloadtokenchecker:
    "<a href='https://cdn.discordapp.com/attachments/737567704403411005/738811721342255174/TokenChecker3.0.rar' class='success link'>TokenChecker3.0.rar</a>",
  downloadmcc:
    "<a href='https://cdn.discordapp.com/attachments/737567704403411005/738812433870880768/MCC.rar' class='success link'>MCC3.1.rar</a>",
  downloaddisbump:
    "<a href='https://cdn.discordapp.com/attachments/737567704403411005/739358950805209108/Disbump.rar' class='success link'>Disbump.rar</a>",
  docs:
    "<a href='https://jawad-dev.github.io/Tool-Documentation/' class='success link'>Documentation</a>",

};
let userInput, terminalOutput;

const app = () => {
  userInput = document.getElementById("userInput");
  terminalOutput = document.getElementById("terminalOutput");
  document.getElementById("dummyKeyboard").focus();
  console.log("Application loaded");
};

const execute = function executeCommand(input) {
  let output;
  input = input.toLowerCase();
  if (input.length === 0) {
    return;
  }
  output = `<div class="terminal-line"><span class="success">➜</span> <span class="directory">~</span> ${input}</div>`;
  if (!COMMANDS.hasOwnProperty(input)) {
    output += `<div class="terminal-line">no such command: ${input}</div>`;
    console.log("Oops! no such command");
  } else {
    output += COMMANDS[input];
  }

  terminalOutput.innerHTML = `${
    terminalOutput.innerHTML
  }<div class="terminal-line">${output}</div>`;
  terminalOutput.scrollTop = terminalOutput.scrollHeight;
};

const key = function keyEvent(e) {
  const input = userInput.innerHTML;

  if (BLACKLISTED_KEY_CODES.includes(e.keyCode)) {
    return;
  }

  if (e.key === "Enter") {
    execute(input);
    userInput.innerHTML = "";
    return;
  }

  userInput.innerHTML = input + e.key;
};

const backspace = function backSpaceKeyEvent(e) {
  if (e.keyCode !== 8 && e.keyCode !== 46) {
    return;
  }
  userInput.innerHTML = userInput.innerHTML.slice(
    0,
    userInput.innerHTML.length - 1
  );
};

document.addEventListener("keydown", backspace);
document.addEventListener("keypress", key);
document.addEventListener("DOMContentLoaded", app);
