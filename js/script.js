const users = [{
        userId: "USR0001",
        name: "jeff",
        profilepicture: "image.jfif",
        statusMessage: "Do good be good",
        presence: 1, // 1 - online, 2 - busy, 3 - idle, 4 - not logged in
    },
    {
        userId: "USR0002",
        name: "John Doe",
        profilepicture: "image.jfif",
        statusMessage: "no",
        presence: 2, // 1 - online, 2 - busy, 3 - idle, 4 - not logged in
    },
    {
        userId: "USR0003",
        name: "harsha",
        profilepicture: "image.jfif",
        statusMessage: "yes",
        presence: 3, // 1 - online, 2 - busy, 3 - idle, 4 - not logged in
    },
    {
        userId: "USR0004",
        name: "person 4",
        profilepicture: "image.jfif",
        statusMessage: "jhadfjfa",
        presence: 4, // 1 - online, 2 - busy, 3 - idle, 4 - not logged in
    },
    {
        userId: "USR0005",
        name: "person 5",
        profilepicture: "image.jfif",
        statusMessage: "Onljfkdfkjkaine",
        presence: 3, // 1 - online, 2 - busy, 3 - idle, 4 - not logged in
    },
    {
        userId: "USR0006",
        name: "person 6",
        profilepicture: "image.jfif",
        statusMessage: "Ondnfandline",
        presence: 1, // 1 - online, 2 - busy, 3 - idle, 4 - not logged in
    },
    {
        userId: "USR0007",
        name: "person 7",
        profilepicture: "image.jfif",
        statusMessage: "yesss",
        presence: 1, // 1 - online, 2 - busy, 3 - idle, 4 - not logged in
    },
    {
        userId: "USR0008",
        name: "person 8",
        profilepicture: "image.jfif",
        statusMessage: "nooo",
        presence: 1, // 1 - online, 2 - busy, 3 - idle, 4 - not logged in
    },
    {
        userId: "USR0009",
        name: "person 9",
        profilepicture: "image.jfif",
        statusMessage: "Online",
        presence: 1, // 1 - online, 2 - busy, 3 - idle, 4 - not logged in
    },
    {
        userId: "USR00010",
        name: "person 10",
        profilepicture: "image.jfif",
        statusMessage: "Online",
        presence: 1, // 1 - online, 2 - busy, 3 - idle, 4 - not logged in
    },
    {
        userId: "USR00011",
        name: "person 11",
        profilepicture: "image.jfif",
        statusMessage: "Online",
        presence: 1, // 1 - online, 2 - busy, 3 - idle, 4 - not logged in
    },
    {
        userId: "USR00012",
        name: "person 12",
        profilepicture: "image.jfif",
        statusMessage: "Online",
        presence: 1, // 1 - online, 2 - busy, 3 - idle, 4 - not logged in
    },
    {
        userId: "USR00013",
        name: "person 13",
        profilepicture: "image.jfif",
        statusMessage: "Online",
        presence: 1, // 1 - online, 2 - busy, 3 - idle, 4 - not logged in
    },
    {
        userId: "USR00014",
        name: "person 14",
        profilepicture: "image.jfif",
        statusMessage: "Online",
        presence: 1, // 1 - online, 2 - busy, 3 - idle, 4 - not logged in
    },
    {
        userId: "USR00015",
        name: "person 15",
        profilepicture: "image.jfif",
        statusMessage: "Online",
        presence: 1, // 1 - online, 2 - busy, 3 - idle, 4 - not logged in
    },
    // Add more users here...
];

const chatMessages = [{
    userId: "USR0001",
    profilepicture: "1.jpg",
    presence: 1,
    messages: [
        { text: "Hello!", presence: 1 },
        { text: "How are you?", presence: 1 },
        { text: "I'm doing great!", presence: 1 },
    ],
}];

function getUserStatusClassName(presence) {
    switch (presence) {
        case 1:
            return 'online';
        case 2:
            return 'busy';
        case 3:
            return 'idle';
        default:
            return 'not-logged-in';
    }
}

function displayUsers() {
    const userList = document.getElementById('userList');
    userList.innerHTML = '';

    users.forEach((user) => {
        const li = document.createElement('li');
        const img = document.createElement('img');
        const statusClassName = getUserStatusClassName(user.presence);

        img.src = user.profilepicture;
        img.alt = `Profile picture of ${user.name}`;
        img.classList.add('profile-picture', statusClassName);

        li.appendChild(img);

        const userDiv = document.createElement('div');
        userDiv.classList.add('user-details');
        userDiv.innerHTML = `<strong>${user.name}</strong><br>${user.statusMessage}`;
        li.appendChild(userDiv);

        userList.appendChild(li);
        // li.innerHTML += user.name;
        // userList.appendChild(li);
    });
}

function displayChatMessages() {
    const chatList = document.getElementById('chatList');
    chatList.innerHTML = '';

    chatMessages.forEach((message) => {
        const li = document.createElement('li');
        const img = document.createElement('img');
        const chatDiv = document.createElement('div');
        const statusClassName = getUserStatusClassName(message.presence);

        img.src = message.profilepicture;
        img.alt = `Profile picture of ${message.name}`;
        img.classList.add('profile-picture', statusClassName);

        chatDiv.textContent = message.text;
        chatDiv.classList.add('chat');

        li.appendChild(img);
        li.appendChild(chatDiv);
        chatList.appendChild(li);
    });
}

function addUser(user) {
    users.push(user);
    displayUsers();
}

function removeUser(userId) {
    const index = users.findIndex((user) => user.userId === userId);
    if (index !== -1) {
        users.splice(index, 1);
        displayUsers();
    }
}

function getEventTarget(e) {
    e = e || window.event;
    return e.target || e.srcElement;
}

var ul = document.getElementById('userList');

ul.onclick = function(event) {
    var target = getEventTarget(event);
    var clickedItemContent = target.innerHTML;
    var contentDisplay = document.getElementById('chatWindow');
    contentDisplay.innerHTML = clickedItemContent;

    contentDisplay.classList.remove('hidden');

}
document.onclick = function(event) {
        var contentDisplay = document.getElementById('chatWindow');
        var target = getEventTarget(event);

        if (target !== contentDisplay && !ul.contains(target)) {
            contentDisplay.classList.add('hidden');
        }
    }
    // Display users and chat messages when the page loads
document.addEventListener('DOMContentLoaded', () => {
    displayUsers();
    displayChatMessages();
});