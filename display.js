const usersList = [
    {
        username: 'edwin',
        email: 'edwin@gmail.com',
        password: 'edwin@12345',
    },
    {
        username: 'edwindcddddd',
        email: 'edwin@gmail.com',
        password: 'edwin@12345',
    },
    {
        username: 'edwincccccc',
        email: 'edwin@gmail.com',
        password: 'edwin@12345',
    },
    {
        username: 'edwincccccc',
        email: 'edwin@gmail.com',
        password: 'edwin@12345',
    },
    {
        username: 'sonu',
        email: 'sonu@gmail.com',
        password: 'sonu@12345',
    },
];

usersList.map((item) => {
    debugger;
    const box1 = document.createElement("div");
    box1.className = "User-box";
    box1.id = "table";
    const para2 = document.createElement("p");
    para2.innerHTML = item.username;

    document.getElementById("flex-container").appendChild(box1);
    box1.appendChild(para2)
})

// let item = document.getElementById("table");
// const container = document.createElement("div");
// container.innerHTML = "edwoinjxncz"
// item.appendChild(container);
