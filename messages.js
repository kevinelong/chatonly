function message(text, isCurrentUser=true, isSamePerson=false, who="", when=undefined) {
    when = when ? when : new Date();
    time = when.toLocaleTimeString();
    const currentUser = isCurrentUser ? "is-current-user" : '';
    const samePerson = isSamePerson ? "same-person" : '';
    return `
    <div class="message-item ${samePerson} ${currentUser} div">
            <div class="action-item person connect_person div"
                onclick="actionClick(this, '${who}','connect_person','3')">
                <div class="icon-frame div"><img class="icon" src="profile-picture.svg"></div>
                <div class="text wc-1">${who}</div>
                <div class="text wc-1">${time}</div>
            </div>
            <div class="message-text div">${text}</div>
        </div>
    `;
}
