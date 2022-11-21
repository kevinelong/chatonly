
class MessagesView{

    currentUser = "Me";
    recentUser = "Me";
    isSamePerson = false;

    constructor(container){
        this.container = container;
    }

    makeMessage(text, who="", when=undefined) {
        this.isSamePerson = this.recentUser == who;
        this.isCurrentUser = this.currentUser == who;
        this.recentUser = who;
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
        this.container.innerHTML += this.makeMessage(text, who);
    }

}
