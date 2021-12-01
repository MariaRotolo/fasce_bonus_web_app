let ages = ["18", "29", "30", "23", "50", "68", "80", "27", "44", "32" ];
let usersRanges = [];
let usersList = [];

const getUsersList = async() => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    const usersList = data.map((element, index) => {
        element.age = ages[index]
        return element 
    });
    console.log(usersList);
    const usersListOne = usersList.filter((element) => 
    element.age >= 18 && element.age <= 35);

    const usersListTwo = usersList.filter((element) => 
    element.age >= 36 && element.age <= 64);

    const usersListThree = usersList.filter((element) => 
    element.age > 64 );

    renderUsersOne(usersListOne);
    renderUsersTwo(usersListTwo);
    renderUsersThree(usersListThree);
   

 
    
};
  getUsersList();  


const wrapperUsersOne = document.querySelector(".flex_item_one")
const wrapperUsersTwo = document.querySelector(".flex_item_two")
const wrapperUsersThree = document.querySelector(".flex_item_three")


function createUser(parent, nameUser, phoneUser, ageUser,){
   const user = document.createElement("div");
   user.className = "user_div";
   
   createName(user, nameUser);
   createPhone(user, phoneUser);
   createAge(user, ageUser);
   parent.appendChild(user);
}

function createName(parent, nameUser){
    const name = document.createElement("h3")
    name.textContent = nameUser;
    parent.appendChild(name);
}

function createPhone(parent, phoneUser){
    const phone = document.createElement("p")
    phone.textContent = phoneUser;
    parent.appendChild(phone)
}

function createAge(parent, ageUser){
    const age = document.createElement("span")
    age.textContent = ageUser;
    parent.appendChild(age)
}


  function renderUsersOne(usersListOne) {
    
    usersListOne.map((element) => {
          createUser(
              wrapperUsersOne,  //deve cambiare
              element.name,
              element.phone,
              element.age 
          );
      });
  }

  function renderUsersTwo(usersListTwo) {
    
    usersListTwo.map((element) => {
          createUser(
              wrapperUsersTwo,  //deve cambiare
              element.name,
              element.phone,
              element.age 
          );
      });
  }

  function renderUsersThree(usersListThree) {
    
    usersListThree.map((element) => {
          createUser(
              wrapperUsersThree,  
              element.name,
              element.phone,
              element.age 
          );
      });
  }
  


  
 









