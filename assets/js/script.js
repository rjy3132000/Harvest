/* Author: 

*/

var pageCheck = document.querySelector("body > div");
let hamburg = document.querySelector(".hamburg");
let menu = document.querySelector(".menu");


if (pageCheck.className == "container index_page") {

  let img = document.querySelectorAll(".profile img");
  let modal = document.querySelector(".modal");
  let modalImg = document.querySelector(".modal img");
  let closeBtn = document.querySelector(".closeBtn");
  let home = document.querySelector(".home-page");
  home.classList.add("nav_active");

  // form value
  let select = document.getElementById("enquiry");
  let fname = document.getElementById("name");
  let email = document.getElementById("email");
  let company = document.getElementById("company");
  let message = document.getElementById("message");
  let checkMe = document.getElementById("check");
  let error = document.querySelectorAll(".error");
  let submitBtn = document.querySelector(".submit-btn");


  // Slick Slider
  $(".slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    autoplay: true,
    infinite: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
  });

  // EventListener on Input Fields
  fname.addEventListener("input", nameValidations);
  email.addEventListener("input", emailValidations);
  company.addEventListener("input", companyValidations);
  message.addEventListener("input", messageValidations);
  checkMe.addEventListener("change", checkValidations);

  // For Common Functions
  let reg;
  let txt;
  function Validations(regex, text, number) {
    if (regex === true) {
      error[number].innerText = "validated";
      error[number].classList.add("active");
    } else {
      error[number].innerText = text;
      error[number].classList.remove("active");
    }
  }
 

  // nameValidations
  function nameValidations() {
    reg = /^[a-zA-Z ]{2,30}$/;
    txt = "** please choose correct name"
    result = reg.test(fname.value);
    Validations(result, txt, 0);
  }

  // emailValidations
  function emailValidations() {
    reg = /^([a-zA-Z0-9\_\-])+\@([a-zA-Z])+\.([a-zA-Z]){2,5}$/;
    result = reg.test(email.value);
    txt = "** please choose correct mail-id";
    Validations(result, txt, 1);
  }

  // companyValidations
  function companyValidations() {
    reg = /^[a-zA-Z ]{2,30}$/;
    txt = "** please choose conpany name"
    result = reg.test(company.value);
    Validations(result, txt, 2);
  }

  // messageValidations
  function messageValidations() {
    reg = /^[A-Za-z0-9 \,\-\.\?\(\)\&\$\%]{10,80}$/;
    result = reg.test(message.value);
    txt = "** aleast 10 character";
    Validations(result, txt, 3);
  }

  // checkValidations
  function checkValidations() {
    let check = checkMe.checked;
    txt = "** not checked";
    Validations(check, txt, 4);
  }

  // submitBtn
  submitBtn.addEventListener("click", function (e) {
    e.preventDefault();
    if (
      fname.value == "" || email.value == "" || company.value == "" || message.value == "" || checkMe.checked == false || select.hidden != false) {
      error.forEach(function (elem) {
        if (elem.innerText == "validated") {
          elem.innerText = "validated";
          elem.classList.add("active");
        } else {
          elem.innerText = "** required";
          elem.classList.remove("active");
        }
      });
    } else {
      document.getElementById("myForm").reset();
      error.forEach(function (elem) {
        if ((elem.innerText = "validated")) {
          elem.innerText = "";
        }
      });
    }
  });


  // Modal for Index Page
  img.forEach(function (im) {
    im.onclick = function () {
      modal.classList.add("show");
      modalImg.src = im.getAttribute("src");
    };
  });
  closeBtn.addEventListener("click", function () {
    modal.classList.remove("show");
  });

  window.addEventListener("click", function (e) {
    if (e.target == modal) {
      modal.classList.remove("show");
    }
  });

  window.addEventListener("keydown", function (event) {
    if (event.key == "Escape") {
      modal.classList.remove("show");
    }
  });
}

// Join Us Page JS

if (pageCheck.className == "container joinus") {
  // EventListener On Select Tag

  let valueTab = document.querySelectorAll(".job li");
  let sel = document.getElementById("myJob");
  let join = document.querySelector(".join-page");
  join.classList.add("nav_active");

  sel.addEventListener("change", function () {
    let v = sel.value;
    
    valueTab.forEach(function (elem) {
      if (elem.getAttribute("data-job") == v.toLowerCase() || v == "all job") {
        elem.classList.remove("hide");
      } else {
        elem.classList.add("hide");
      }
    });
  });

}

// Our Work Page JS

if (pageCheck.className == "container ourwork") {
  let btnTab = document.querySelectorAll(".tabs li");
  let img = document.querySelectorAll(".product img");
  let zoom = document.querySelector(".popUp-image");
  let zoomImg = document.querySelector(".popUp-image img");
  let closeBtn = document.querySelector(".closeBtn");
  let work = document.querySelector(".work-page");
  work.classList.add("nav_active");
  

  btnTab.forEach(function (li) {
    li.onclick = function () {
      btnTab.forEach(function (elem) {
        elem.className = "";
      });

      li.className = "active";

      let value = li.textContent;
      img.forEach(function (elem) {
        if (
          elem.getAttribute("data-filter") == value.toLowerCase() ||
          value == "all"
        ) {
          elem.classList.remove("hide");
        } else {
          elem.classList.add("hide");
        }
      });
    };
  });

  // EventListener For Modal in our page

  img.forEach(function (im) {
    im.onclick = function () {
      zoom.classList.add("show");
      zoomImg.src = im.getAttribute("src");
    };
  });

  closeBtn.addEventListener("click", function () {
    zoom.classList.remove("show");
  });

  window.addEventListener("click", function (e) {
    if (e.target == zoom) {
      zoom.classList.remove("show");
    }
  });

  window.addEventListener("keydown", function (event) {
    if (event.key == "Escape") {
      zoom.classList.remove("show");
    }
  });
}

// Hamburg

hamburg.addEventListener("click", function () {
  if (hamburg.classList.contains("active_bar")) {
    hamburg.classList.remove("active_bar");
    menu.classList.remove("active_menu");
  } else {
    hamburg.classList.add("active_bar");
    menu.classList.add("active_menu");
  }
});
