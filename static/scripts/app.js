const chatButton = document.querySelector('.chatbox__button');
const chatContent = document.querySelector('.chatbox__support');
const icons = {
    isClicked: '</p>Clicked!</p>',
    isNotClicked: '<p>Not clicked!</p>'
}
const chatbox = new InteractiveChatbox(chatButton, chatContent, icons);
chatbox.display();
chatbox.toggleIcon(false, chatButton);

// Get chatbot elements
const chatbot = document.getElementById('chatbot');
const conversation = document.getElementById('conversation');
const inputForm = document.getElementById('input-form');
const inputField = document.getElementById('input-field');

// Add event listener to input form
inputForm.addEventListener('submit', function(event) {
  // Prevent form submission
  event.preventDefault();

  // Get user input
  const input = inputField.value;

  // Clear input field
  inputField.value = '';
  const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: "2-digit" });

  // Add user input to conversation
  let message = document.createElement('div');
  message.classList.add('messages__item', 'messages__item--visitor');
  message.innerHTML = `${input}`;
//   message.innerHTML = `<p class="chatbot-text" sentTime="${currentTime}">${input}</p>`;
  conversation.appendChild(message);

  // Generate chatbot response
  generateResponse(input);
//   const response = generateResponse(input);
//   console.log("response: ", response);

});

// Generate chatbot response function
function generateResponse(input) {
    $.get("/get/chatbot", { prediction_input: input }).done(function (msg) {
        console.log(input);
        console.log(msg);
        const response = msg;
        console.log("response: ",response);
        
        // Add chatbot response to conversation
        message = document.createElement('div');
        message.classList.add('messages__item','messages__item--operator');
        message.innerHTML = `${response}`;
        conversation.appendChild(message);
        message.scrollIntoView({behavior: "smooth"});
        
        // return msgText;
        // appendMessage(BOT_NAME, BOT_IMG, "left", msgText);
    });

  }