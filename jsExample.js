const form=document.getElementById('form');
const username=document.getElementById('username');
const email = document.getElementById('email');
//const password=document.getElementById('password');
//const password2=document.getElementById('password2');
const designation=document.getElementById('desi');

const usersList = [
    {
        username: "Edwin",
        email: "edwin@gmail.com",
        designation: "Software Engineer",
    },
    {
        username: "Anu",
        email: "anu@gmail.com",
        designation: "Developer",
    },
    {
        username: "edwincccccc",
        email: "edwin@gmail.com",
        designation: "Developer",
    }, 
]

form.addEventListener('submit', e => {
    e.preventDefault();
    validateInputs();
    usersList.push({
        username:username.value,
        email:email.value,
        designation:designation.value,
    })
    const box1 = document.createElement("div");
    box1.className = "User-box";
    const image =document.createElement("img");
    image.className="pic";
    image.src="person1.png";
    const para2 = document.createElement("p");
    para2.id="user-content";
    para2.innerHTML = username.value;
    const para3 = document.createElement("p");
    para3.innerHTML =email.value;
    const para4 = document.createElement("p");
    para4.innerHTML = designation.value;
    
  
    document.getElementById("flex-container").appendChild(box1);
    box1.appendChild(image);
    box1.appendChild(para2);
    box1.appendChild(para3);
    box1.appendChild(para4);
    document.querySelector(".popup").style.display = "none";

});



const setError = (elememt,message) =>{
    const inputControl=elememt.parentElement;
    const errorDisplay =inputControl.querySelector('.error');

    errorDisplay.innerText =message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');

}


const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText ='';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');

}

const isValidEmail=email => {
    const re = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    
    const usernameValue=username.value.trim();
    const emailValue=email.value.trim();
    const designationValue=designation.value.trim();

    //const  passwordValue =password.value.trim();
    //const  passwordValue2 =password2.value.trim();
   // console.log(passwordValue2);

    if(usernameValue === '') {
        setError(username,'Username is required');
    } else{
        setSuccess(username);
    }

    if(emailValue === '') {
        setError(email,'Email is required');
    } else if(!isValidEmail(emailValue)){
        setError(email,'Provide valid Email id');
    }else{
        setSuccess(email);
    }

    if(designationValue === '') {
        setError(designation,'Designation is required');
    } else{
        setSuccess(designation);
    }

   /* if(passwordValue === ' '){

        setError(password,'Password is required');
    }else if(passwordValue.length < 8){
        setError(password,'Password must be atleast 8 character');
    }else{
        setSuccess(password);
    }

    if(passwordValue2 === ' '){

        setError(password2,'Please confirm your password');
    }else if(passwordValue2 !== passwordValue){
        setError(password2,'Passwords does not match');
    }else{
        setSuccess(password2);
    }*/
};

//display Details
usersList.map((item) => {
    // debugger;
   
    const box1 = document.createElement("div");
    box1.className = "User-box";
    box1.id = "table";
    const image =document.createElement("img");
    image.className="pic";
    image.src="person1.png";
    const para2 = document.createElement("p");
    para2.id="user-content";
    para2.innerHTML = item.username;
    const para3 = document.createElement("p");
    para3.innerHTML = item.email;
    const para4 = document.createElement("p");
    para4.innerHTML = item.designation;
    
  
    document.getElementById("flex-container").appendChild(box1);
    box1.appendChild(image);
    box1.appendChild(para2);
    box1.appendChild(para3);
    box1.appendChild(para4);
    

 })
