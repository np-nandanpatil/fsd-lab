function sendMessage() {
     let message = document.getElementById("user-message").value;

     if (message.trim() !== "") {
          let chatBox = document.getElementById("chat-box");
          let newMessage = document.createElement("p");
          newMessage.innerHTML = `<strong>You:</strong> ${message}`;
          chatBox.appendChild(newMessage);

          // Auto-scroll to the latest message
          chatBox.scrollTop = chatBox.scrollHeight;

          // Clear input field
          document.getElementById("user-message").value = "";
     }
}
