// use querySelector to get html elements 
const form = document.querySelector('form');
const message = document.querySelector('input');
const submitButton = document.querySelector('.btn');
const showMessage = document.querySelector(".showMessage");

// add event Listener to submit button 
submitButton.addEventListener('click', passMessage);

function passMessage (e) {

    // get the input value
    let msg = message.value;
    console.log(msg)

    // error message 
    let error = 'Please Enter a value!';

     // create error message to insert if input fields are blank 
     const  newItem = document.createElement("div");
    newItem.className = 'alert alert-danger text-center mt-2 role = alert' ;
     const textnode = document.createTextNode(error);
     newItem.appendChild(textnode);

     // validate input field by checking if value is empty
     // if so show an error message
     
     if (msg !== ""){
        // show message entered 
        showMessage.innerHTML = `<h5> ${msg}</h5>`;
        message.value = "";
     }
      else {
          form.insertBefore(newItem, form.childNodes[4]);
          showMessage.textContent = null;
          setTimeout(clearError, 3000);
      }

    e.preventDefault();
}

function clearError(){
    // create error message to insert if input fields are blank 
    document.querySelector(".alert").remove();
    

};

