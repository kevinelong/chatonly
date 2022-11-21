
class MessagesView{

    currentUser = "Me";
    isSamePerson = false;

    constructor(container, textInput){
        this.container = container;
        this.textInput = textInput;
        this.textInput.addEventListener("keyup", this.onTextInput);
    }

    makeMessage(text, who="", when=undefined) {
        this.isSamePerson = this.currentUser == who;
        this.currentUser = who;
        when = when ? when : new Date();
        const time = when.toLocaleTimeString();
        const currentUser = this.isCurrentUser ? "is-current-user" : '';
        const samePerson = this.isSamePerson ? "same-person" : '';
        return `
            <div class="message-item ${samePerson} ${currentUser} div">
                <div class="action-item person connect_person div"
                    onclick="actionClick(this, '${who}','connect_person','3')"
                ><div class="icon-frame div"><img class="icon" src="profile-picture.svg"></div></div>
                <div class="message-text div">
                    <div class="text extra">${who} - ${time}</div>
                    ${text}
                </div>
            </div>
        `;
    }

    addMessage(text, who="") {
        this.container.innerHTML += this.makeMessage(text, who, when);
    }

    onTextInput(e) {
        if (e.keyCode === 13) {
            e.preventDefault();
            mv.addMessage(e.target.value, "Me");
            e.target.value = "";
            return false;
        }
    }
}
