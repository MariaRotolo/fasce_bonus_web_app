let ages = ["18", "29", "30", "23", "50", "68", "80", "27", "44", "32" ];
let usersRanges = [];

const getUsersList = async() => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    const usersList = data.map((element, index) => {
        element.age = ages[index]
        return element 
    });

    const usersListOne = usersList.filter((element) => 
    element.age.value >= 18 && element.age.value <= 35);

    const usersListTwo = usersList.filter((element) => 
    element.age.value >= 36 && element.age.value <= 64);

    const usersListThree = usersList.filter((element) => 
    element.age.value > 64 );

   /* usersRanges =*/ {usersListOne, usersListTwo, usersListThree}
    return usersRanges;
    
};

//console.log(usersRanges, "data");
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



const renderUsers = (usersList, container) => {
    
}

async function render () {
    usersRanges = await getUsersList();
    usersRanges.usersListOne,
    usersRanges.usersListTwo,
    usersRanges.usersListThree

    
    renderUsers(usersRanges.usersListOne, wrapperUsersOne);
}



render();



/*const ranges = usersList.filter((element) => 
    element.age.search(value) >= 18 && 
    element.age.search(value) <= 35

)
*/

