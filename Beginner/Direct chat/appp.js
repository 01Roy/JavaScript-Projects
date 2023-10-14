const inputBox = document.getElementById("input_box");
const btnSend = document.getElementById("btn_send");
const messageInput = document.getElementById("input_message");

let newLink = "https://web.whatsapp.com/send?phone=";
let contactNumber;
let whatsappApi = "&web.whatsapp.com%2F";
let finalNumber;
let currentMessage;

inputBox.addEventListener("keyup", (e) => {
  e.preventDefault();
  let phoneNUmber = e.target.value;
  contactNumber = phoneNUmber;
  console.log(phoneNUmber);
  let targetNumber = `${newLink}${contactNumber}${whatsappApi}`;
  finalNumber = targetNumber;
});
messageInput.addEventListener("keyup", (e) => {
  e.preventDefault();
  let valueMessage = e.target.value;
  currentMessage = valueMessage;
  console.log(currentMessage);
});

const sendMessage = () => {
  // console.log(`this is btn call =>${finalNumber}`)
  window.open(`${finalNumber}`);
  contactNumber = "";
};
btnSend.addEventListener("click", sendMessage);

const sendMessages = () => {
  var inputEvent = new InputEvent("input", {
    bubbles: true,
    cancelable: true,
  });
  var clickEvent = new InputEvent("click", {
    bubbles: true,
    cancelable: true,
  });

  var selectableTextDiv = document.querySelectorAll("._13NKt");
  selectableTextDiv[1].innerText = currentMessage;
  selectableTextDiv[1].dispatchEvent(inputEvent);
  // After triggeing input event.. you will see the send button
  let btn = document.querySelectorAll(".tvf2evcx");
  btn[btn.length - 1].dispatchEvent(clickEvent);
};

setTimeout(sendMessage, 5000);
