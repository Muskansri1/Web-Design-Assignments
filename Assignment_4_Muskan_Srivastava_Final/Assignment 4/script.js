function printError(elemId, hintMsg) {
  document.getElementById(elemId).innerHTML = hintMsg;
}

var textField = document.getElementById("hiddenTextField");
function RegExValidation(object, type, nameType) {
  var NameValidation = /^[a-zA-Z]+$/;
  var EmailValidation = /([a-zA-Z0-9_.+-]+@?northeastern\.edu)$/;
  var PhoneValidation = /\d{3}-?\d{3}-\d{4}$/;
  var AddressValidation = /[A-Za-z0-9'\.\-\s\,]/;
  var ZipValidation = /^([0-9]{5})$/;
  var name = 'errorMsg' + nameType;
 
  switch (type) {
      case 1:
          if (!object.value.trim().match(NameValidation)) {
              object.style.border = "2px solid red";
              document.getElementById(name).style.display = "block";
              object.value = "";
          } else {
              object.style.border = "";
              document.getElementById(name).style.display = "none";
          }
          break;
      case 2:
          if (!object.value.match(EmailValidation)) {
              object.style.border = "2px solid red";
              document.getElementById("errorMsgEmail").style.display = "block";
              object.value = "";
          } else {
              object.style.border = "";
              document.getElementById("errorMsgEmail").style.display = "none";
          }
          break;
      case 3:
          if (!object.value.match(PhoneValidation)) {
              object.style.border = "2px solid red";
              document.getElementById("errorMsgPhone").style.display = "block";
              object.value = "";
          } else {
              object.style.border = "";
              document.getElementById("errorMsgPhone").style.display = "none";
          }
          break;
      case 4:
          if (!object.value.match(ZipValidation)) {
              object.style.border = "2px solid red";
              document.getElementById("errorMsgZip").style.display = "block";
              object.value = "";
          } else {
              object.style.border = "";
              document.getElementById("errorMsgZip").style.display = "none";
          }
          break;
      case 5:
          if (object.value == null || object.value == "") {
              object.style.border = "2px solid red";
              document.getElementById(name).style.display = "block";
              object.value = "";
          } else {
              object.style.border = "";
              document.getElementById(name).style.display = "none";
          }
  }
}

function confirm() {
  var radioBtn = document.getElementsByName("title");
  var formValidation = false;
  var i = 0;
  while (!formValidation && i < radioBtn.length) {
      if (radioBtn[i].checked) formValidation = true;
      i++;
  }

  if (!formValidation) {
      document.getElementById("errorRadio").style.display = "none";

  } else {
      document.getElementById("errorRadio").style.display = "block";
  }
}

function onCheck(checkboxElem) {
  if (checkboxElem.checked) {
      textField.attributes["required"] = "required";
      textField.style.display = "block";
  } else {
      textField.value = ""
      textField.style.display = "none";
  }
}


const form = document.querySelector("form");

const titles = document.querySelectorAll('input[name="title"]');
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const emailId = document.getElementById("emailId");
const phoneNumber = document.getElementById("phoneNumber");
const streetAddress1 = document.getElementById("streetAddress1");
const streetAddress2 = document.getElementById("streetAddress2");
const city = document.getElementById("city");
const state = document.getElementById("state");
const zipcode = document.getElementById("zipcode");
const source = document.querySelectorAll("#source");
const comments = document.getElementById("comments");
const ratingSelect = document.getElementById("rating");
const FeedbackCheckbox = document.getElementById("FeedbackCheckbox");
const textReason = document.getElementById("textReason");
const MoreFeedback = document.getElementById("MoreFeedback");

const submitBtn = document.getElementById("submitBtn");
const resetBtn = document.getElementById("resetBtn");

let table = document.getElementById("tableData");

let validatationBool = false;
let validationErrors = {};



form.addEventListener("submit", e => {
  e.preventDefault();

  let title;

  for (let i=0; i<titles.length; i++) {
    // console.log(titles[i].checked);
    if (titles[i].checked) {
      validatationBool = true;
      title = titles[i].value;
    }
  }


  if (
    // Validate Rating selected
    validatationBool &&
    firstName.value != "" &&
    lastName.value != "" &&
    emailId.value != "" && validateEmail(emailId.value) &&
    phoneNumber.value != "" && validatePhoneNo(phoneNumber.value) &&
    streetAddress1.value != "" &&
    city.value != "" &&
    state.value != "" &&
    zipcode.value != "" && validateZipCode(zipcode.value) &&
    ratingSelect.value != "select" &&
    MoreFeedback.value != ""
  ) {

    let myString = "";

    source.forEach(item => {
      if (item.checked) {
        myString += item.value + ", ";
      }
    })

    let feedbackString = "";

    if (Checkbox1.checked && Checkbox2.checked && Checkbox3.checked ) {
      feedbackString = "Service, Food, Ambience";
    }
    else if (Checkbox1.checked && Checkbox2.checked && !(Checkbox3.checked) ) {
      feedbackString = "Service, Food";
    }
    else if (Checkbox1.checked && !(Checkbox2.checked) && Checkbox3.checked ) {
      feedbackString = "Service, Ambience";
    }
    else if (Checkbox1.checked && !(Checkbox2.checked) && !(Checkbox3.checked)) {
      feedbackString = "Service";
    }
    else if (!(Checkbox1.checked) && Checkbox2.checked && Checkbox3.checked) {
      feedbackString = "Food, Ambience";
    }
    else if (!(Checkbox1.checked) && Checkbox2.checked && !(Checkbox3.checked)) {
      feedbackString = "Food";
    }
    else if (!(Checkbox1.checked) && !(Checkbox2.checked) && !(Checkbox3.checked)) {
      feedbackString = "Ambience";
    }
 

    tableData.innerHTML += `
      <tr>
        <td>${title.charAt(0).toUpperCase() + title.slice(1)}. ${firstName.value} ${lastName.value}</td>
        <td>${emailId.value}</td>
        <td>${phoneNumber.value}</td>
        <td>${streetAddress1.value}</td>
        <td>${streetAddress2.value}</td>
        <td>${city.value}</td>
        <td>${state.value}</td>
        <td>${zipcode.value}</td>
        <td>${myString}</td>
        <td>${comments.value}</td>
        <td>${ratingSelect.value}</td>
        <td>${feedbackString}</td>
        <td>${MoreFeedback.value}</td>
      </tr>
    `;

    alert("Details have been uploaded to the table!");
    form.reset();
    validatationBool = false;
  } else {
    alert("Please enter details correctly!");
  }
})

phoneNumber.addEventListener("keyup", () => {
  if(validatePhoneNo(phoneNumber.value)) {
    phoneNumber.style.color = "green";
  } else {
    phoneNumber.style.color = "red";
  };
})

zipcode.addEventListener("keyup", () => {
  if(validateZipCode(zipcode.value)) {
    zipcode.style.color = "green";
  } else {
    zipcode.style.color = "red";
  };
})

emailId.addEventListener("keyup", () => {

  const domain = "northeastern.edu";

  if(validateEmail(emailId.value) && emailId.value.indexOf(domain) != -1) {
    emailId.style.color = "green";
  } else if (emailId.value.indexOf(domain) === -1) {
    emailId.style.color = "red";
  };
})

const validatePhoneNo = no => {
    const validateMobileRegex = /\d{3}-?\d{3}-\d{4}$/;

    if (no.match(validateMobileRegex)) {
      return true;
    } else {
      return false;
    }
}

const validateZipCode = zipcode => {
  const validateZip = /^([0-9]{5})$/;

  if (zipcode.match(validateZip)) {
    return true;
  } else {
    return false;
  }
}

const validateEmail = email => {
  const validateEmailId = /([a-zA-Z0-9_.+-]+@?northeastern\.edu)$/;

  if (email.match(validateEmailId)) {
    return true;
  } else {
    return false;
  }
}



ratingSelect.onchange = (e) => {
  
  if (e.target.value == "5") {

    FeedbackCheckbox.style.display = "block";
    textReason.style.display = "none";

    FeedbackCheckbox.innerHTML = `
      <p>5 Stars! Thank you. Tell us what we can do more!</p>      
      <input id="Checkbox1" type='checkbox' name="source" value="service" /> Service
      <input id="Checkbox2" type='checkbox' name="source" value="food" /> Food
      <input id="Checkbox3" type='checkbox' name="source" value="Ambience" /> Ambience
      <br><br>
      <input id="Checkboxrating5" type='checkbox' name="sourcerating" value="amazing" /> *Aren't we amazing! Let us know more below
      <br><br>
    `;

    const Checkbox1 = document.getElementById("Checkbox1");
    const Checkbox2 = document.getElementById("Checkbox2");
    const Checkbox3 = document.getElementById("Checkbox3");
    

    Checkboxrating5.addEventListener("click", () => {
      if (Checkboxrating5.checked) {
        textReason.style.display = "block";
      } else {
        textReason.style.display = "none";
      }
    })

  } else if (e.target.value == "4") {
    
    FeedbackCheckbox.style.display = "block";
    textReason.style.display = "none";

    FeedbackCheckbox.innerHTML = `
      <p>4 Stars! Thank you. We would like to serve you even better. Tell us what we can do more</p>      
      <input id="Checkbox1" class="Checkbox1" type='checkbox' name="source" value="service" /> Service
      <input id="Checkbox2" class="Checkbox2" type='checkbox' name="source" value="food" /> Food
      <input id="Checkbox3" class="Checkbox3" type='checkbox' name="source" value="Ambience" /> Ambience 
      <br><br>
      <input id="Checkboxrating4" type='checkbox' name="sourcerating" value="amazing" /> *Missed by a little! Let us know more below
      <br><br>
    `;

    const Checkbox1 = document.getElementById("Checkbox1");
    const Checkbox2 = document.getElementById("Checkbox2");
    const Checkbox3 = document.getElementById("Checkbox3");
    

   
    Checkboxrating4.addEventListener("click", () => {
      if (Checkboxrating4.checked) {
        textReason.style.display = "block";
      } else {
        textReason.style.display = "none";
      }
    })


  } else if (e.target.value == "3") {
    
    FeedbackCheckbox.style.display = "block";

    FeedbackCheckbox.innerHTML = `
      <p>Thanks for the 3 rating. What can we do better? Please help us imporve.</p>
      <input id="Checkbox1" class="Checkbox1" type='checkbox' name="source" value="service" /> Service
      <input id="Checkbox2" class="Checkbox2" type='checkbox' name="source" value="food" /> Food
      <input id="Checkbox3" class="Checkbox3" type='checkbox' name="source" value="Ambience" /> Ambience 
      <br><br>
      <input id="Checkboxrating3" type='checkbox' name="sourcerating" value="amazing" /> *It's just us or does it seem quite average? Let us know more below
      <br><br>
    `;

    const Checkbox1 = document.getElementById("Checkbox1");
    const Checkbox2 = document.getElementById("Checkbox2");
    const Checkbox3 = document.getElementById("Checkbox3");
    

   
    Checkboxrating3.addEventListener("click", () => {
      if (Checkboxrating3.checked) {
        textReason.style.display = "block";
      } else {
        textReason.style.display = "none";
      }
    })

  } else if (e.target.value == "2") {
    
    FeedbackCheckbox.style.display = "block";
    textReason.style.display = "none";

    FeedbackCheckbox.innerHTML = `
      <p>Thank you for providing feedback! 2 Stars - We are sure we can do better! Please tell us what we can do more</p>
      <input id="Checkbox1" class="Checkbox1" type='checkbox' name="source" value="service" /> Service
      <input id="Checkbox2" class="Checkbox2" type='checkbox' name="source" value="food" /> Food
      <input id="Checkbox3" class="Checkbox3" type='checkbox' name="source" value="Ambience" /> Ambience 
      <br><br>
      <input id="Checkboxrating2" type='checkbox' name="sourcerating" value="amazing" /> *Where did the other three go?! Let us know more below
      <br><br>
    `;

    const Checkbox1 = document.getElementById("Checkbox1");
    const Checkbox2 = document.getElementById("Checkbox2");
    const Checkbox3 = document.getElementById("Checkbox3");
    

    Checkboxrating2.addEventListener("click", () => {
      if (Checkboxrating2.checked) {
        textReason.style.display = "block";
      } else {
        textReason.style.display = "none";
      }
    })

  } else if (e.target.value == "1") {
    
    FeedbackCheckbox.style.display = "block";
    textReason.style.display = "none";

    FeedbackCheckbox.innerHTML = `
      <p>1 star. Our bad. Please let us know how to imporve and we'll get it done. Thank you for being with us!</p>
      <input id="Checkbox1" class="Checkbox1" type='checkbox' name="source" value="service" /> Service
      <input id="Checkbox2" class="Checkbox2" type='checkbox' name="source" value="food" /> Food
      <input id="Checkbox3" class="Checkbox3" type='checkbox' name="source" value="Ambience" /> Ambience 
      <br><br>
      <input id="Checkboxrating1" type='checkbox' name="sourcerating" value="amazing" /> *Lord save us. Let us know more below
      <br><br>
    `;

    const Checkbox1 = document.getElementById("Checkbox1");
    const Checkbox2 = document.getElementById("Checkbox2");
    const Checkbox3 = document.getElementById("Checkbox3");
    

    Checkboxrating1.addEventListener("click", () => {
      if (Checkboxrating1.checked) {
        textReason.style.display = "block";
      } else {
        textReason.style.display = "none";
      }
    })

  } else {
    FeedbackCheckbox.style.display = "none";
    textReason.style.display = "none";

    FeedbackCheckbox.innerHTML = "";
  }

}

// End Block
