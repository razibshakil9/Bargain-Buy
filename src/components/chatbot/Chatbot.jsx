// // src/Chatbot.js
// import React, { useState } from "react";
// import '../styles/chatbot.css'

// const Chatbot = () => {
//   const [messages, setMessages] = useState([
//     { text: "Hello! How can I assist you today?", sender: "bot" }
//   ]);
//   const [userInput, setUserInput] = useState("");
//   const [listening, setListening] = useState(false);

//   // Text-to-Speech: Read out bot's message
//   const speakMessage = (message) => {
//     const synth = window.speechSynthesis;
//     const utterance = new SpeechSynthesisUtterance(message);
//     synth.speak(utterance);
//   };

//   // Speech-to-Text: Handle user audio input
//   const startListening = () => {
//     const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
//     recognition.lang = "en-US";
//     recognition.interimResults = false;
//     recognition.maxAlternatives = 1;

//     recognition.onstart = () => setListening(true);
//     recognition.onend = () => setListening(false);

//     recognition.onresult = (event) => {
//       const userSpeech = event.results[0][0].transcript;
//       setUserInput(userSpeech);
//       handleSend(userSpeech);
//     };

//     recognition.start();
//   };

//   const handleSend = (userMessage) => {
//     if (!userMessage || userMessage.trim() === "") return;

//     // Add user's message
//     const newMessages = [...messages, { text: userMessage, sender: "user" }];
//     setMessages(newMessages);

//     // Simulate bot response
//     setTimeout(() => {
//       const botMessage = "This is a static response with audio input.";
//       setMessages((prevMessages) => [
//         ...prevMessages,
//         { text: botMessage, sender: "bot" }
//       ]);
//       speakMessage(botMessage); // Speak bot's message
//     }, 1000);

//     // Clear user input
//     setUserInput("");
//   };

//   return (
//     <div className="container mt-4">
//       <div className="card">
//         <div className="card-header bg-primary text-white">AI Chatbot</div>
//         <div className="card-body chat-body" style={{ height: "400px", overflowY: "scroll" }}>
//           {messages.map((msg, index) => (
//             <div key={index} className={`d-flex ${msg.sender === "user" ? "justify-content-end" : "justify-content-start"}`}>
//               <div className={`msg-box mb-2 p-2 ${msg.sender === "user" ? "bg-info text-white" : "bg-light"}`}>
//                 {msg.text}
//               </div>
//             </div>
//           ))}
//         </div>
//         <div className="card-footer">
//           <div className="input-group">
//             <input
//               type="text"
//               className="form-control"
//               placeholder="Type or speak your message"
//               value={userInput}
//               onChange={(e) => setUserInput(e.target.value)}
//               onKeyPress={(e) => e.key === "Enter" && handleSend(userInput)}
//             />
//             <button className="btn btn-primary" onClick={() => handleSend(userInput)}>
//               Send
//             </button>
//             <button className="btn btn-secondary ms-2" onClick={startListening}>
//               {listening ? "Listening..." : "Speak"}
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Chatbot;
// src/Chatbot.js
// import React, { useState } from "react";
// import '../styles/chatbot.css'

// const Chatbot = () => {
//   const [messages, setMessages] = useState([
//     { text: "Hello! How can I assist you today?", sender: "bot" }
//   ]);
//   const [userInput, setUserInput] = useState("");
//   const [listening, setListening] = useState(false);
//   const [showChatbot, setShowChatbot] = useState(false); // Toggle state

//   // Text-to-Speech: Read out bot's message
//   const speakMessage = (message) => {
//     const synth = window.speechSynthesis;
//     const utterance = new SpeechSynthesisUtterance(message);
//     synth.speak(utterance);
//   };

//   // Speech-to-Text: Handle user audio input
//   const startListening = () => {
//     const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
//     recognition.lang = "en-US";
//     recognition.interimResults = false;
//     recognition.maxAlternatives = 1;

//     recognition.onstart = () => setListening(true);
//     recognition.onend = () => setListening(false);

//     recognition.onresult = (event) => {
//       const userSpeech = event.results[0][0].transcript;
//       setUserInput(userSpeech);
//       handleSend(userSpeech);
//     };

//     recognition.start();
//   };

//   const handleSend = (userMessage) => {
//     if (!userMessage || userMessage.trim() === "") return;

//     // Add user's message
//     const newMessages = [...messages, { text: userMessage, sender: "user" }];
//     setMessages(newMessages);

//     // Simulate bot response
//     setTimeout(() => {
//       const botMessage = "This is a static response with audio input.";
//       setMessages((prevMessages) => [
//         ...prevMessages,
//         { text: botMessage, sender: "bot" }
//       ]);
//       speakMessage(botMessage); // Speak bot's message
//     }, 1000);

//     // Clear user input
//     setUserInput("");
//   };

//   // Toggle chatbot visibility
//   const toggleChatbot = () => {
//     setShowChatbot((prevShowChatbot) => !prevShowChatbot);
//   };

//   return (
//     <div className="container mt-4">
//       <button className="btn btn-primary mb-3" onClick={toggleChatbot}>
//         {showChatbot ? "Close Chatbot" : "Open Chatbot"}
//       </button>

//       {showChatbot && (
//         <div className="card">
//           <div className="card-header bg-primary text-white">AI Chatbot</div>
//           <div className="card-body chat-body" style={{ height: "400px", overflowY: "scroll" }}>
//             {messages.map((msg, index) => (
//               <div key={index} className={`d-flex ${msg.sender === "user" ? "justify-content-end" : "justify-content-start"}`}>
//                 <div className={`msg-box mb-2 p-2 ${msg.sender === "user" ? "bg-info text-white" : "bg-light"}`}>
//                   {msg.text}
//                 </div>
//               </div>
//             ))}
//           </div>
//           <div className="card-footer">
//             <div className="input-group">
//               <input
//                 type="text"
//                 className="form-control"
//                 placeholder="Type or speak your message"
//                 value={userInput}
//                 onChange={(e) => setUserInput(e.target.value)}
//                 onKeyPress={(e) => e.key === "Enter" && handleSend(userInput)}
//               />
//               <button className="btn btn-primary" onClick={() => handleSend(userInput)}>
//                 Send
//               </button>
//               <button className="btn btn-secondary ms-2" onClick={startListening}>
//                 {listening ? "Listening..." : "Speak"}
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Chatbot;

// src/Chatbot.js
import React, { useState } from "react";
import './chatbot.css'

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { text: "Hello! How can I assist you today?", sender: "bot" }
  ]);
  const [userInput, setUserInput] = useState("");
  const [listening, setListening] = useState(false);
  const [showChatbot, setShowChatbot] = useState(false); // Toggle state for chatbot visibility

  // Text-to-Speech: Read out bot's message
  const speakMessage = (message) => {
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(message);
    synth.speak(utterance);
  };

  // Speech-to-Text: Handle user audio input
  const startListening = () => {
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = "en-US";
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onstart = () => setListening(true);
    recognition.onend = () => setListening(false);

    recognition.onresult = (event) => {
      const userSpeech = event.results[0][0].transcript;
      setUserInput(userSpeech);
      handleSend(userSpeech);
    };

    recognition.start();
  };

  const handleSend = (userMessage) => {
    if (!userMessage || userMessage.trim() === "") return;

    // Add user's message
    const newMessages = [...messages, { text: userMessage, sender: "user" }];
    setMessages(newMessages);

    // Simulate bot response
    setTimeout(() => {
      const botMessage = "This is a static response with audio input.";
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: botMessage, sender: "bot" }
      ]);
      speakMessage(botMessage); // Speak bot's message
    }, 1000);

    // Clear user input
    setUserInput("");
  };

  // Toggle chatbot visibility when header is clicked
  const toggleChatbot = () => {
    setShowChatbot((prevShowChatbot) => !prevShowChatbot);
  };

  return (
    <div className="chatbox-fixed">
      <div className="container mt-4">
        <div className="row justify-content-end">
          <div className="col-md-4"><div className="card">
            {/* Clickable header to toggle chatbot */}
            <div className="card-header bg-primary text-white d-flex justify-content-between" onClick={toggleChatbot} style={{ cursor: "pointer" }}>
              <span>AI Chatbot</span> {showChatbot ? "▲" : "▼"}
            </div>
            {showChatbot && (
              <>
                <div className="card-body chat-body" style={{ height: "400px", overflowY: "scroll" }}>
                  {messages.map((msg, index) => (
                    <div key={index} className={`d-flex ${msg.sender === "user" ? "justify-content-end" : "justify-content-start"}`}>
                      <div className={`msg-box mb-2 p-2 ${msg.sender === "user" ? "bg-info text-white" : "bg-msg"}`}>
                        {msg.text}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="card-footer">
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Type or speak your message"
                      value={userInput}
                      onChange={(e) => setUserInput(e.target.value)}
                      onKeyPress={(e) => e.key === "Enter" && handleSend(userInput)}
                    />
                    <button className="btn btn-primary" onClick={() => handleSend(userInput)}>
                      Send
                    </button>
                    <button className="btn btn-secondary ms-2" onClick={startListening}>
                      {listening ? "Listening..." : "Speak"}
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
