let ages = ["18", "29", "30", "65", "40", "20", "80", "27", "44", "32" ];
let usersRanges = [];
let usersList = [];

const getUsersList = async() => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    const usersList = data.map((element, index) => {
        element.age = ages[index]
        return element 
    });
    //console.log(usersList);
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
    const name = document.createElement("h4")
    name.textContent = " Name:" + " " + nameUser;
    parent.appendChild(name);
}

function createPhone(parent, phoneUser){
    const phone = document.createElement("p")
    phone.textContent = "Phone:" + " " + phoneUser;
    parent.appendChild(phone)
}

function createAge(parent, ageUser){
    const age = document.createElement("span")
    age.textContent = "Age:" + " " +ageUser;
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
              wrapperUsersTwo,  
              element.name,
              element.phone,
              element.age 
          );
      });
  }

  function renderUsersThree(usersListThree) {
    console.log(usersListThree.length > 0, "maggiore di 0"); 
        if(usersListThree.length > 0){
            usersListThree.map((element) => {
                
            createUser(
                wrapperUsersThree,  
                element.name,
                element.phone,
                element.age 
            )
        });
            } else {
                console.log(usersListThree, "secondo");
                wrapperUsersThree.innerHTML = "Non ci sono utenti in questa fascia";
            }
      
      
  }
  
  ///////////////////////// SLIDER //////////////////////

                  const imgs = [ "https://media.istockphoto.com/photos/young-asian-business-woman-receiving-salary-or-bonus-money-from-boss-picture-id1092112282",
                                  "https://media.istockphoto.com/photos/red-pin-push-on-day-30-of-end-month-on-white-calendar-mark-this-day-picture-id806269928",
                                  "https://media.istockphoto.com/photos/happy-millennial-woman-reading-paper-correspondence-letter-picture-id1290230615"];
                  
                  const slider = document.querySelector(".slider_img");

                  let imagesIndex = 0;
                  
                  let changeImg = setInterval(() => {
                    slider.style.backgroundImage = `url(${imgs[imagesIndex]})`;
                  
                    if (imagesIndex < imgs.length - 1) {
                      imagesIndex++;
                    } else {
                      imagesIndex = 0;
                    }
                  }, 3000);
 
//////////// MODALI ARTICOLI

const modalOne = document.querySelector("#modal_one");
const closeModal = document.querySelector("#modal_button_one");
const openModal = document.querySelector("#open_modal_one");
const modalTwo = document.querySelector("#modal_two");
const openModalTwo = document.querySelector("#open_modal_two");
const closeModalTwo = document.querySelector("#modal_button_two");
const modalThree = document.querySelector("#modal_three");
const openModalThree = document.querySelector("#open_modal_three");
const closeModalThree = document.querySelector("#modal_button_three");

openModal.addEventListener("click", () => {
    modalOne.classList = ("modal_visible");
})
closeModal.addEventListener("click", () => {
    modalOne.classList = ("modal_hidden");
})


openModalTwo.addEventListener("click", () => {
    modalTwo.classList = ("modal_visible");
})
closeModalTwo.addEventListener("click", () => {
    modalTwo.classList = ("modal_hidden");
})


openModalThree.addEventListener("click", () => {
    modalThree.classList = ("modal_visible");
})
closeModalThree.addEventListener("click", () => {
    modalThree.classList = ("modal_hidden");
})










