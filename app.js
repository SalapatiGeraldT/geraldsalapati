
var firstDivWithPicture = $("#pictureGroup div:has(img):first");

var secondToLastChild = $("#pictureGroup div:nth-last-child(-n+2)");


$(document).ready(function () {
  // Reusable animation function
 
  $(window).resize(function () {
    var windowWidth = $(window).width();
    if (windowWidth >= 576) {
      $("#landingPage").addClass("wholePage");


      $("#outLineTitle").addClass("titles");
      $("#nameTitle").addClass("titles");
      $("#subTitle").addClass("titles");
      $("#containTitle").addClass("titles");
      $("#objTitle").addClass("titles");
      $("#preResTitle").addClass("titles");
      $("#1stBeam").addClass("titles");
      $("#2ndBeam").addClass("titles");
      $("#3rdBeam").addClass("titles");
      $("#AboutMe").addClass("titles");
      $("#Experience").addClass("titles");
      $("#Project").addClass("titles");

    } else {
      $("#landingPage").removeClass("wholePage");
      
      $("#outLineTitle").removeClass("titles");
      $("#nameTitle").removeClass("titles");
      $("#subTitle").removeClass("titles");
      $("#containTitle").removeClass("titles");
      $("#objTitle").removeClass("titles");
      $("#preResTitle").removeClass("titles");
      $("#1stBeam").removeClass("titles");
      $("#2ndBeam").removeClass("titles");
      $("#3rdBeam").removeClass("titles");
      $("#AboutMe").removeClass("titles");
      $("#Experience").removeClass("titles");
      $("#Project").removeClass("titles");
      
    }
  });

  var windowWidth = $(window).width();

  if (windowWidth >= 576) {
    $("#landingPage").addClass("wholePage");

    $("#outLineTitle").addClass("titles");
    $("#nameTitle").addClass("titles");
    $("#subTitle").addClass("titles");
    $("#containTitle").addClass("titles");
    $("#objTitle").addClass("titles");
    $("#preResTitle").addClass("titles");
    $("#1stBeam").addClass("titles");
    $("#2ndBeam").addClass("titles");
    $("#3rdBeam").addClass("titles");
    $("#AboutMe").addClass("titles");
    $("#Experience").addClass("titles");
    $("#Project").addClass("titles");
  } else {
    $("#landingPage").removeClass("wholePage");

    $("#outLineTitle").removeClass("titles");
    $("#nameTitle").removeClass("titles");
    $("#subTitle").removeClass("titles");
    $("#containTitle").removeClass("titles");
    $("#objTitle").removeClass("titles");
    $("#preResTitle").removeClass("titles");
    $("#1stBeam").removeClass("titles");
    $("#2ndBeam").removeClass("titles");
    $("#3rdBeam").removeClass("titles");
    $("#AboutMe").removeClass("titles");
    $("#Experience").removeClass("titles");
    $("#Project").removeClass("titles");
  }




  // Animation for the main logo
  setTimeout(function () {
    $(".mainLogo").css("transform", "rotate(45deg)");
  }, 800);



  // Animation for the about me icon

  

  // Animation for the experience icon
 

  // Animation for the project icon

  // Animation for other elements
 
  function animateElement(selector, delay, callback) {
    setTimeout(function () {
      $(selector).css({
        opacity: "1",
        transform: "translateY(0)",
      });
      if (callback) {
        callback();
      }
    }, delay);
  }
  
  const animations = [
    { selector: ".aboutMeIcon", duration: 1000 },
    { selector: ".experienceIcon", duration: 500 },
    { selector: ".projectIcon", duration: 500 },
    { selector: "#outLineTitle", duration: 500 },
    { selector: "#nameTitle", duration: 200 },
    { selector: "#subTitle", duration: 300 },
    { selector: "#3rdBeam", duration: 500 },
    { selector: "#2ndBeam", duration: 100 },
    { selector: "#1stBeam", duration: 200 },
    { selector: "#containTitle", duration: 200 },
    { selector: "#objTitle", duration: 200 },
    { selector: "#preResTitle", duration: 200 },
    { selector: "#dowResTitle", duration: 200 }
  ];
  
  function animateElements(index) {
    if (index >= animations.length) {
      return;
    }
  
    const animation = animations[index];
    animateElement(animation.selector, animation.duration, function() {
      animateElements(index + 1);
    });
  }
  
  animateElements(0);
  
  
 

  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 308) {
      $(".stickyTopNav").addClass("itemBgNav");

    

    } else {
      $(".stickyTopNav").removeClass("itemBgNav");


    }
  });

  

  function initializeProject(index, data) {
    const html = `
        <div class="row g-0 brit-font mt-3 mb-4 projectId  px-3 py-4 rounded-1 itemBg"  data-aos="fade-up" data-aos-delay="200">
          <div class="col-12 col-lg-5">
            <div class="me-0 me-lg-4 text-start text-lg-end h-100">
              <div class="d-flex flex-column h-100">
                <div class="demoDiv${index} hidden leftInAnimate">
                  <iframe width="100%" height="315" class="projectYTDemo${index} hidden"
                      src="${
                        data.videoSrc
                      }" title="YouTube video player" frameborder="0" 
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                      allowfullscreen>
                  </iframe>
                </div>
                <div class="picDiv${index} leftInAnimate">
                  <img src="${data.imageSrc}" alt="${data.imageDesc}" class="img-fluid">
                </div>
                <div class="text-light-emphasis"></div>
                <div class="text-light-emphasis"></div>
              </div>
            </div>
          </div>
          <div class="col-12 col-lg-7">
            <div class="position-relative mt-1">
              <div>
                <div>
                  <div>
                    <div>${data.title}</div>
                  </div>
                </div>
                <div class="mt-3">
                  <div class="d-flex align-items-center justify-content-between flex-wrap">
                    <div class="d-flex py-1 linkDiv">
                      <div id="" class="position-relative demoSwitch${index}" >
                          <div class="horiShine">
                            <div class="bgBody px-2 rounded-1">
                              DEMO
                            </div>
                          </div>
                        </div>
                      
                      <div id=" "  class="position-relative picSwitch${index} hidden" >
                        <div class="horiShine">
                        <div  class="bgBody px-2 rounded-1">
                        PICTURE
                        </div>

                        </div>
                     
                        
                      </div>
                      ${generateSiteTags(data)}
                    </div>
                    <div class="d-flex py-1 flex-wrap langDiv">
                      ${generateLanguageTags(data)}
                    </div>
                  </div>
                </div>
                <div>
                  <div class="mt-3 text-light-emphasis">
                    ${data.description}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      `;
    $("#projectContainer").append(html);
    attachEventHandlers(index);
  }

  function generateLanguageTags(data) {
    return data.languages
      .map((language) => `<div class="px-2 m-1">${language}</div>`)
      .join("");
  }

  function generateSiteTags(data) {
    if (data.siteLink !== "") {
      return `<a href="${data.siteLink}" target="_blank" class="ms-3">
          <div class="horiShine">
          <div class="bgBody px-2 rounded-1">
            SITE
          </div>
        </div>
        </a>`;
    } else {
      return "";
    }
  }
  function removePic(index) {
    $(`.demoDiv${index}`).removeClass("hidden");
    $(`.picDiv${index}`).addClass("hidden");
    $(`.picSwitch${index}`).removeClass("hidden");
    $(`.demoSwitch${index}`).addClass("hidden");
    $(`.projectYTDemo${index}`).removeClass("hidden");
  }

  function removeDemo(index) {
    $(`.demoDiv${index}`).addClass("hidden");
    $(`.picDiv${index}`).removeClass("hidden");
    $(`.picSwitch${index}`).addClass("hidden");
    $(`.demoSwitch${index}`).removeClass("hidden");
    $(`.projectYTDemo${index}`).addClass("hidden");
  }
  function attachEventHandlers(index) {
    const demoSwitchSelector = `.demoSwitch${index}`;
    const picSwitchSelector = `.picSwitch${index}, .picDiv${index}`;

    $(demoSwitchSelector).on("click", () => {
      if ($(`.demoDiv${index}`).hasClass("hidden")) {
        removePic(index);
      } else {
        removeDemo(index);
      }
    });

    $(picSwitchSelector).on("click", () => {
      if ($(`.demoDiv${index}`).hasClass("hidden")) {
        removePic(index);
      } else {
        removeDemo(index);
      }
    });
  }

  const projects = [
    {
      title: "RTU UCCAE <br> Form Management System <br> <span class='text-light-emphasis'>Full-stack Developer</span>",
      videoSrc: "https://www.youtube-nocookie.com/embed/5WHEDc3-qME",
      imageSrc: "img/Project1.png",
      imageDesc: "RTU UCCAE Form Management Dashboard",
      siteLink: "http://rtu-uccae-fms.site/",
      languages: ["Laravel", "jQuery", "Bootstrap", "MySQL"],
      description:
      "As our final project this website help the organization overcome operational challenges encountered during the audition, membership, and scholarship processes. By providing a digital platform to manage all necessary forms and documents, the system streamlines processes, reduces difficulties, and ensures that required documents are submitted promptly."
    },
    {
      title: "Right Meal <br> Registration System <br> <span class='text-light-emphasis'>Full-stack Developer</span>",
      videoSrc: "https://www.youtube-nocookie.com/embed/w-O7tRaQPjg",
      imageSrc: "img/Project2.png",
      imageDesc: "Right Meal Dashboard",
      siteLink: "https://rightmeal-frontend.netlify.app/",
      languages: ["PHP", "Javascript", "Bootstrap", "MySQL"],
      description:
        "For our project in a subject, we were told to create a business website with a registration feature. We chose a restaurant theme and recreated our previous design using Bootstrap. The restaurant's concept focuses on serving healthy, low-calorie food. Inspired by websites like The Aristocrat, we designed every section accordingly. Our website earned a perfect score, and I take pride in programming it entirely by myself.",
    },
    {
      title: "Go Cart <br>E-Commerce Shopping Cart System <br> <span class='text-light-emphasis'>Support Back-end & Front-end Developer</span>",
      videoSrc: "https://www.youtube-nocookie.com/embed/Q732exsLt6o",
      imageSrc: "img/Project3.png",
      imageDesc: "Go Cart Cart Summary",
      siteLink: "",
      languages: ["PHP", "Javascript", "Bootstrap"],
      description:
        "Given a backend, we were tasked to create a frontend and modify the given code. Despite encountering errors, we successfully fixed them and made the code functional. Opting for a pink color palette, we designed interactive components to enhance user experience and promote user retention.",
    },

    {
      title: "BlueHats <br> Student Information Inventory System <br> <span class='text-light-emphasis'>Full-stack Developer</span>",
      videoSrc: "https://www.youtube-nocookie.com/embed/RJEFC1zFwRA",
      imageSrc: "img/Project4.png",
      imageDesc: "Blue Hats SIIS Dashboard",
      siteLink: "",
      languages: ["PHP", "Javascript", "Bootstrap", "MySQL"],
      description:
        "This is a system that allows you to perform CRUD operations on student records.  You can add new students, edit their details, view their information, and delete them from the database. This system has two types of users: admin and user. The admin can perform all CRUD operations, while the user can only add new students. This system is simple but has its own identity with the design.",
    },
    {
      title: "Matech <br> Payroll Application <br> <span class='text-light-emphasis'>Back-end Developer</span>",
      videoSrc: "https://www.youtube-nocookie.com/embed/PDEJOf1Z9vk",
      imageSrc: "img/Project5.png",
      imageDesc: "Matech Website",
      siteLink: "",
      languages: ["PHP",  "CSS"],
      description:
        "In our collaborative effort, we were tasked with creating a payroll application, granting us the freedom to choose which components to include. We developed a payroll application collectively, dedicating extensive research to determine the essential components. I formulated the logic and generated a comprehensive table illustrating the calculation process for each item. A teammate ensured responsiveness, while another chose the color palette. This is also the first time we have made the website interactive, which was done by one of our team members.",
    },

    {
      title: "Matech <br> Calculator Hub System <br> <span class='text-light-emphasis'>Back-end & Lead Front-end Developer</span>",
      videoSrc: "https://www.youtube-nocookie.com/embed/8Ijxga32iiI",
      imageSrc: "img/Project6.png",
      imageDesc: "Matech Dashboard",
      siteLink: "",
      languages: ["PHP",  "CSS"],
      description:
        "As a full stack developer, I implemented all the logic for calculations and designed a child-friendly website theme with a unique brand. I utilized CSS selectors to create interactive form components and incorporated playful graphics created using Adobe Illustrator. The graphics are not only visually appealing but also informative, as I include meanings and formulas on the result page. Additionally, I included a warning message during the third attempt of calculation to confirm if the user wishes to continue with their session, as instructed by our professor.",
    },

    {
      title: "Talap Pinoy Company <br> Registration System <br> <span class='text-light-emphasis'>Back-end & Lead Front-end Developer</span>",
      videoSrc: "https://www.youtube-nocookie.com/embed/eOQ1U8fGzJM",
      imageSrc: "img/Project7.png",
      imageDesc: "Talap Pinoy Registration Interface",
      siteLink: "",
      languages: ["PHP","Javascript", "CSS"],
      description:
        "We were asked to create a registration form with restrictions. In order to make it a unique website, our team decided to design it as a registration form for a business restaurant website. As a backend developer, I implemented most of the restrictions using attributes of the HTML input elements and JavaScript codes. I also decided to incorporate a glass theme and animated borders in CSS to add interactive features. Additionally, my colleague created promotional graphics and selected a suitable background to truly give it the appearance of a restaurant website."
    },
    // Add more project objects here
  ];

  projects.forEach((project, index) => {
    initializeProject(index + 1, project);
  });



  $("#preResTitle").click(function() {
    var fileUrl = 'file/Salapati_Resume.pdf';
    window.open(fileUrl, '_blank');
  });

  $('#dowResTitle').click(function() {
    var fileUrl = 'file/Salapati_Resume.pdf';
    var fileName = 'Salapati_Resume.pdf';
    var link = document.createElement('a');
    link.href = fileUrl;
    link.download = fileName;
    link.style.display = 'none';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });


  $("#backAtTheTop").click(function() {
    $(window).scrollTop(0);
  });

});



function moveUp() {
  $("#outLineTitle").addClass("removeUp");
}
function moveDown() {
  $("#outLineTitle").addClass("addDown");
}

function pleaseLook() {
  $("#outLineTitle").text("PLEASE LOOK AROUND");
}
function welcome() {
  $("#outLineTitle").text("WELCOME TO MY PORTFOLIO");
}

function animatePleaseLookHeader() {
  setTimeout(function () {
    moveUp();
  }, 1000);
  setTimeout(function () {
    pleaseLook();
  }, 1500);
  setTimeout(function () {
    moveDown();
  }, 2000);
  setTimeout(function () {
    $("#outLineTitle").addClass("sparkling");
  }, 2300);
  setTimeout(function () {
    $("#outLineTitle").removeClass("addDown");
    $("#outLineTitle").removeClass("removeUp");
    $("#outLineTitle").removeClass("sparkling");
  }, 3000);
}

function animateWelcomeHeader() {
  setTimeout(function () {
    moveUp();
  }, 1000);
  setTimeout(function () {
    welcome();
  }, 1500);

  setTimeout(function () {
    moveDown();
  }, 2000);
  setTimeout(function () {
    $("#outLineTitle").addClass("sparkling");
  }, 2300);
  setTimeout(function () {
    $("#outLineTitle").removeClass("addDown");
    $("#outLineTitle").removeClass("removeUp");
    $("#outLineTitle").removeClass("sparkling");
  }, 3000);
}

let firstRun = true;

function idleScreen() {
  var t;
  window.onload = resetTimer;
  window.onmousemove = resetTimer;
  window.onmousedown = resetTimer; // catches touchscreen presses as well
  window.ontouchstart = resetTimer; // catches touchscreen swipes as well
  window.ontouchmove = resetTimer; // required by some devices
  window.onclick = resetTimer; // catches touchpad clicks as well
  window.onkeydown = resetTimer;
  window.addEventListener("scroll", resetTimer, true); // improved; see comments

  function yourFunction() {
    animatePleaseLookHeader();
    $(".mainLogo").css("transform", "rotate(0deg)");
    firstRun = false;
  }

  function resetTimer() {
    var headerText = $("#outLineTitle").text();
    var hasAddDown = $("#outLineTitle").hasClass("addDown");
    var hasRemoveUp = $("#outLineTitle").hasClass("removeUp");
    if (
      headerText == "WELCOME TO MY PORTFOLIO" ||
      hasAddDown ||
      hasRemoveUp ||
      firstRun
    ) {
    } else {
      $(".mainLogo").css("transform", "rotate(45deg)");
      animateWelcomeHeader();
    }
    clearTimeout(t);
    t = setTimeout(yourFunction, 5000); // time is in milliseconds
  }
}
idleScreen();



