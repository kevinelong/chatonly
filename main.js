
// const api = new API("http://dev.bblcht.com");
const api = new API("http://dev.bblcht.com");
localStorage.token = await api.getToken({username:"kevinelong", password:"S!mpl312"});
console.log("LOCAL TOKEN:", localStorage.token);

const mv = new MessagesView(
    document.getElementsByClassName("message-panel")[0]
);

function testMessageView(){
    mv.addMessage("Hello?", "Me");
    mv.addMessage("Anyone there?", "Me");
    mv.addMessage("What's up doc?", "Betty Ford");
    mv.addMessage("Where you at?", "Betty Ford");
}
testMessageView();

const textInput = document.getElementsByClassName("input-message")[0];
async function onTextInput(e) {
    if (e.keyCode === 13) {
        e.preventDefault();
        mv.addMessage(e.target.value, "Me");
        const result = await api.createMessage(localStorage.token, {
            chat: 44,
            sender_id: 6,
            message: e.target.value,
            is_read: false,
        });
        console.log("API CREATE MESSAGE RESULT:", result);
        e.target.value = "";
        return false;
    }
}
textInput.addEventListener("keyup", onTextInput);

api.getUser(localStorage.token,6, data=>{
    console.log("USER 6:", data);
});

const chatList = await api.getChats(localStorage.token);
console.log("CHAT LIST:", chatList);
chatList.forEach(chat=>{
   chat.messages.forEach(message=>{
       mv.addMessage(message.message, message.sender);
   })
});

// function onUserCreated(data){
//     console.log(data);
// }
// const newUser = api.registerUser({
//     username: "kevinelong2",
//     email: "kevinelong@gmail.com",
//     password: "S!mpl312"
// }, onUserCreated);
//
// function onGotToken(data){
//     console.log("TOKEN:", data);
//     localStorage.token = data.token;
// }