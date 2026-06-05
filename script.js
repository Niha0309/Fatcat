async function sendMessage() {
  const input = document.getElementById("input");
  const messages = document.getElementById("messages");

  const text = input.value;
  if (!text) return;

  // user message
  messages.innerHTML += `<div class="msg user">${text}</div>`;
  input.value = "";

  // loading message
  const loading = document.createElement("div");
  loading.className = "msg ai";
  loading.innerText = "Thinking...";
  messages.appendChild(loading);

  // call backend
  const res = await fetch("/api/chat", {
    method: "POST",
    body: JSON.stringify({ message: text })
  });

  const data = await res.json();

  loading.innerText = data.reply;
}