let ages = ["18", "29", "30", "23", "50", "68", "80", "27", "44", "32" ];
let usersList = [];

const getUsersList = async() => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    usersList = data.map((element, index) => {
        element.age = ages[index]
        return element 
    });
   // console.log(usersList, "data");
};




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

const wrapperUsersOne = document.querySelector(".flex_item_one")
const wrapperUsersTwo = document.querySelector(".flex_item_two")
const wrapperUsersThree = document.querySelector(".flex_item_three")

function renderUsers(usersList) {
  //  console.log(usersList);
    usersList.map((element) => {
        createUser(
            wrapperUsersOne,
            element.name,
            element.phone,
            element.age 
        );
    });
}

async function render () {
    await getUsersList();
    renderUsers(usersList);
}

render();





/*const ranges = usersList.filter((element) => 
    element.age.search(value) >= 18 && 
    element.age.search(value) <= 35

)
*/

