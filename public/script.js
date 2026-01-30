const form = document.getElementById("chat-form");
const input = document.getElementById("user-input");
const chatBox = document.getElementById("chat-box");

if (form && input && chatBox) {
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const userMessage = input.value.trim();
    if (!userMessage) return;

    appendMessage("user", userMessage);
    input.value = "";
    input.focus();

    const thinkingEl = appendMessage("bot", "Thinking<<.");

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          conversation: [{ role: "user", content: userMessage }],
        }),
      });

      let data = null;
      const isJson = response.headers
        ?.get("content-type")
        ?.includes("application/json");

      if (isJson) {
        data = await response.json();
      }

      if (!response.ok) {
        const errorMessage =
          data?.error || data?.message || "Failed to get response from server.";
        throw new Error(errorMessage);
      }

      const reply = data?.result?.trim();

      if (reply) {
        thinkingEl.textContent = reply;
      } else {
        thinkingEl.textContent = "Sorry, no response received.";
      }
    } catch (error) {
      thinkingEl.textContent =
        error?.message || "Failed to get response from server.";
    }
  });
}

function appendMessage(sender, text) {
  const msg = document.createElement("div");
  msg.classList.add("message", sender);
  msg.textContent = text;
  chatBox.appendChild(msg);
  chatBox.scrollTop = chatBox.scrollHeight;
  return msg;
}
