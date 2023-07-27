const users = [{
        userId: "USR0001",
        name: "jeff",
        profilepicture: "../images/1.jfif",
        statusMessage: "Do good be good",
        presence: 1,
    },
    {
        userId: "USR0002",
        name: "John Doe",
        profilepicture: "../images/2.jfif",
        statusMessage: "The journey of a thousad miles begin with one step",
        presence: 2,
    },
    {
        userId: "USR0003",
        name: "harsha",
        profilepicture: "../images/3.jfif",
        statusMessage: "I had which does not kill us make us stronger",
        presence: 3,
    },
    {
        userId: "USR0004",
        name: "person 4",
        profilepicture: "../images/4.jfif",
        statusMessage: "When the going gets tough, the tough get going",
        presence: 4,
    },
    {
        userId: "USR0005",
        name: "person 5",
        profilepicture: "../images/5.jfif",
        statusMessage: "You must be the change your wish to see in the world",
        presence: 3,
    },
    {
        userId: "USR0006",
        name: "person 6",
        profilepicture: "../images/6.jfif",
        statusMessage: "You only live once but if you do it right , once is enough",
        presence: 1,
    },
    {
        userId: "USR0007",
        name: "person 7",
        profilepicture: "../images/7.jfif",
        statusMessage: "you only live once, but if you do it right, once is enough",
        presence: 2,
    },
    {
        userId: "USR0008",
        name: "person 8",
        profilepicture: "../images/8.jfif",
        statusMessage: "You must be the change your wish to see in the world",
        presence: 3,
    },
    {
        userId: "USR0009",
        name: "person 9",
        profilepicture: "../images/9.jfif",
        statusMessage: "The journey of a thousad miles begin with one step",
        presence: 2,
    },
    {
        userId: "USR00010",
        name: "person 10",
        profilepicture: "../images/10.jfif",
        statusMessage: "Online",
        presence: 1,
    },
    {
        userId: "USR00011",
        name: "person 11",
        profilepicture: "../images/11.jfif",
        statusMessage: "The journey of a thousad miles begin with one step",
        presence: 4,
    },
    {
        userId: "USR00012",
        name: "person 12",
        profilepicture: "../images/12.jfif",
        statusMessage: "The journey of a thousad miles begin with one step",
        presence: 2,
    },
    {
        userId: "USR00013",
        name: "person 13",
        profilepicture: "../images/13.jfif",
        statusMessage: "Do it ",
        presence: 1,
    },
    {
        userId: "USR00014",
        name: "person 14",
        profilepicture: "../images/14.jfif",
        statusMessage: "The journey of a thousad miles begin with one step",
        presence: 1,
    },
    {
        userId: "USR00015",
        name: "person 15",
        profilepicture: "../images/5.jfif",
        statusMessage: "do good be good",
        presence: 1,
    },

];

// const chatMessages = [{
//     userId: "USR0001",
//     profilepicture: "1.jpg",
//     presence: 1,
//     messages: [
//         { text: "Hello!", presence: 1 },
//         { text: "How are you?", presence: 1 },
//         { text: "I'm doing great!", presence: 1 },
//     ],
// }];

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

        // Create the main container div for each user
        const userMainDiv = document.createElement('div');
        userMainDiv.classList.add('user-main-container');

        // Create a container div for the image and user details
        const userContainerDiv = document.createElement('div');
        userContainerDiv.classList.add('user-container');

        const img = document.createElement('img');
        const statusClassName = getUserStatusClassName(user.presence);
        const icon = document.createElement('span');
        const moreVertIcon = document.createTextNode('more_vert');
        img.src = user.profilepicture;
        img.alt = `Profile picture of ${user.name}`;
        img.classList.add('profile-picture', statusClassName);

        userContainerDiv.appendChild(img); // Add img to the user container div

        const userDiv = document.createElement('div');
        userDiv.classList.add('user-details');
        userDiv.innerHTML = `<strong>${user.name}</strong><br>${user.statusMessage}`;
        userContainerDiv.appendChild(userDiv); // Add userDiv to the user container div

        // Append the userContainerDiv to the main container div
        userMainDiv.appendChild(userContainerDiv);

        // Create a div for the span icon
        const iconDiv = document.createElement('div');
        iconDiv.classList.add('material-icons', 'more-icon', 'icon-div');
        iconDiv.appendChild(icon);
        icon.appendChild(moreVertIcon);
        icon.textContent = 'more_vert';

        // Append the iconDiv to the main container div
        userMainDiv.appendChild(iconDiv);

        // Append the main container div to the list item
        li.appendChild(userMainDiv);

        userList.appendChild(li);
    });
}



function addUser(user) {
    users.unshift(user);
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

// ul.onclick = function(event) {
//     var target = getEventTarget(event);
//     var clickedItemContent = target.innerHTML;
//     var contentDisplay = document.getElementById('chatWindow');
//     contentDisplay.innerHTML = clickedItemContent;

//     contentDisplay.classList.remove('hidden');

// }

// document.onclick = function(event) {
//         var contentDisplay = document.getElementById('chatWindow');
//         var target = getEventTarget(event);

//         // if (target !== contentDisplay && !ul.contains(target)) {
//         //     contentDisplay.classList.add('hidden');
//         // }
//     }
//     // Display users and chat messages when the page loads

document.addEventListener('DOMContentLoaded', () => {
    displayUsers();
    displayChatMessages();
});