class API {
    constructor(baseURL="") {
        this.baseURL = baseURL;
    }
    registerUser(user = {username: "", email: "", password: ""}, callbackFunction) {
        fetch(`${this.baseURL}/api/register/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
        })
            .then((response) => {
                return response.json();
            })
            .then((data) => callbackFunction(data))
            .catch((error) => console.log(error.message));
    }

    getUsers(token, callbackFunction) {
        fetch(`${this.baseURL}/api/users/`, {
            headers: {
                Authorization: `Token ${token}`,
            },
        })
            .then((response) => {
                return response.json();
            })
            .then((data) => callbackFunction(data))
            .catch((error) => console.log(error.message));
    }

    getUser(token, id, callbackFunction) {
        fetch(`${this.baseURL}/api/users/${id}`, {
            headers: {
                Authorization: `Token ${token}`,
            },
        })
            .then((response) => {
                return response.json();
            })
            .then((data) => callbackFunction(data))
            .catch((error) => console.log(error.message));
    }

    async getToken(loginInfo={username:"",password:""}) {
        let token;
        await fetch(`${this.baseURL}/api-token-auth/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(loginInfo),
        })
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                token = data.token;
                // return token;
            })
            .catch((error) => console.log(error.message));
            this.token = token;
        return token;
    }

    async getChats(token) {
        let chats;
        await fetch(`${this.baseURL}/api/chat/`, {
            headers: {
                Authorization: `Token ${token}`,
            },
        })
            .then((response) => {
                if (!response.ok) {
                    const message = `${response.status}: invalid token`;
                    throw new Error(message);
                }
                return response.json();
            })
            .then((data) => {
                if (!data.length) {
                    console.log("No chat messages for this user exist.");
                } else {
                    console.log(data);
                    chats = data;
                    // return chats;
                }
            })
            .catch((error) => console.log(error.message));
        return chats;
    }

    async createMessage(token, message={
        chat: 1,
        sender_id: 1,
        message: "",
        is_read: false,
    }) {
        let id;
        await fetch(`${this.baseURL}/api/messages/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Token ${token}`,
            },
            body: JSON.stringify(message),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log("SEND MESSAGE RESPONSE:", data);
                id = data.chat;
                console.log(`Message for chat id: ${id} created without an activity.`);
                return id;
            });
        return id;
    }
}

