var firstDivWithPicture = $('#pictureGroup div:has(img):first');


var secondToLastChild = $('#pictureGroup div:nth-last-child(-n+2)');

      // $(document).ready(function() {
      //   // Animation for the main logo

      //   setTimeout(function() {
      //   $('.mainLogo').css('transform', 'rotate(45deg)');
      // }, 1000);
      //   // Animation for the about me icon
      //   setTimeout(function() {
      //     $('.aboutMeIcon').css({
      //       'opacity': '1',
      //       'transform': 'translateY(0)'
      //     });
      //   },1500);
      
      //   // Animation for the experience icon
      //   setTimeout(function() {
      //     $('.experienceIcon').css({
      //       'opacity': '1',
      //       'transform': 'translateY(0)'
      //     });
      //   }, 2000);
      
      //   // Animation for the project icon
      //   setTimeout(function() {
      //     $('.projectIcon').css({
      //       'opacity': '1',
      //       'transform': 'translateY(0)'
      //     });
      //   }, 2500);

      //   setTimeout(function() {
      //     $('#outLineTitle').css({
      //       'opacity': '1',
      //       'transform': 'translateY(0)'
      //     });
      //   }, 3000);

      //   setTimeout(function() {
      //     $('#nameTitle').css({
      //       'opacity': '1',
      //       'transform': 'translateY(0)'
      //     });
      //   }, 3700);

      //   setTimeout(function() {
      //     $('#subTitle').css({
      //       'opacity': '1',
      //       'transform': 'translateY(0)'
      //     });
      //   }, 4000);
      //   setTimeout(function() {
      //     $('#subTitle').css({
      //       'opacity': '1',
      //       'transform': 'translateY(0)'
      //     });
      //   }, 4000);
        


      //   setTimeout(function() {
      //     $('#3rdBeam').css({
      //       'opacity': '1',
      //       'transform': 'translateY(0)'
      //     });
      //   }, 4500);
      //   setTimeout(function() {
      //     $('#2ndBeam').css({
      //       'opacity': '1',
      //       'transform': 'translateY(0)'
      //     });
      //   }, 4600);
      //   setTimeout(function() {
      //     $('#1stBeam').css({
      //       'opacity': '1',
      //       'transform': 'translateY(0)'
      //     });
      //   }, 4800);



      //   setTimeout(function() {
      //     $('#containTitle').css({
      //       'opacity': '1',
      //       'transform': 'translateY(0)'
      //     });
      //   }, 5000);
      //   setTimeout(function() {
      //     $('#objTitle').css({
      //       'opacity': '1',
      //       'transform': 'translateY(0)'
      //     });
      //   }, 5200);

      //   setTimeout(function() {
      //     $('#preResTitle').css({
      //       'opacity': '1',
      //       'transform': 'translateY(0)'
      //     });
      //   }, 5500);

      //   setTimeout(function() {
      //     $('#dowResTitle').css({
      //       'opacity': '1',
      //       'transform': 'translateY(0)'
      //     });
      //   }, 5700);
      // });

      $(document).ready(function() {
        // Reusable animation function
        function animateElement(selector, delay) {
          setTimeout(function() {
            $(selector).css({
              'opacity': '1',
              'transform': 'translateY(0)'
            });
          }, delay);
        }
      
        // Animation for the main logo
        setTimeout(function() {
          $('.mainLogo').css('transform', 'rotate(45deg)');
        }, 1000);
      
        // Animation for the about me icon
        animateElement('.aboutMeIcon', 1500);
      
        // Animation for the experience icon
        animateElement('.experienceIcon', 2000);
      
        // Animation for the project icon
        animateElement('.projectIcon', 2500);
      
        // Animation for other elements
        animateElement('#outLineTitle', 3000);
        animateElement('#nameTitle', 3700);
        animateElement('#subTitle', 4000);
        animateElement('#3rdBeam', 4500);
        animateElement('#2ndBeam', 4600);
        animateElement('#1stBeam', 4800);
        animateElement('#containTitle', 5000);
        animateElement('#objTitle', 5200);
        animateElement('#preResTitle', 5500);
        animateElement('#dowResTitle', 5700);
   
      

     function moveUp()  {
      $('#outLineTitle').addClass('removeUp');
    
      };
function moveDown(){
  $('#outLineTitle').addClass('addDown');
}



    function pleaseLook(){
      $('#outLineTitle').text('PLEASE LOOK AROUND');

    }
    function welcome(){
      $('#outLineTitle').text('WELCOME TO MY PORTFOLIO');

    }

    function animatePleaseLookHeader(){
      setTimeout(function() {
        moveUp();
      },1000);
      setTimeout(function() {
        pleaseLook();
      },1500);
      setTimeout(function() {
        moveDown();
      },2000);
      setTimeout(function() {
        $('#outLineTitle').addClass('sparkling');
      },2300);
      setTimeout(function() {
        $('#outLineTitle').removeClass('addDown');
        $('#outLineTitle').removeClass('removeUp');
        $('#outLineTitle').removeClass('sparkling');
      },3000);
  
    }

    function animateWelcomeHeader(){
      setTimeout(function() {
        moveUp();
      },1000);
      setTimeout(function() {
        welcome();
      },1500);
  
    
      setTimeout(function() {
        moveDown();
      },2000);
      setTimeout(function() {
        $('#outLineTitle').addClass('sparkling');
      },2300);
      setTimeout(function() {
        $('#outLineTitle').removeClass('addDown');
        $('#outLineTitle').removeClass('removeUp');
        $('#outLineTitle').removeClass('sparkling');
      },3000);
    }


    let firstRun = true;

      function idleScreen() {
        var t;
        window.onload = resetTimer;
        window.onmousemove = resetTimer;
        window.onmousedown = resetTimer;  // catches touchscreen presses as well      
        window.ontouchstart = resetTimer; // catches touchscreen swipes as well      
        window.ontouchmove = resetTimer;  // required by some devices 
        window.onclick = resetTimer;      // catches touchpad clicks as well
        window.onkeydown = resetTimer;   
        window.addEventListener('scroll', resetTimer, true); // improved; see comments
    
        function yourFunction() {
          animatePleaseLookHeader();
          $('.mainLogo').css('transform', 'rotate(90deg)');
          firstRun=false;
        }
    
        function resetTimer() {
             
              var headerText = $('#outLineTitle').text();
              var hasAddDown = $('#outLineTitle').hasClass('addDown');
              var hasRemoveUp = $('#outLineTitle').hasClass('removeUp');
              if( headerText=="WELCOME TO MY PORTFOLIO" || hasAddDown || hasRemoveUp || firstRun ){
             
              }else{
            
                $('.mainLogo').css('transform', 'rotate(45deg)');
                animateWelcomeHeader();
              }
            clearTimeout(t);
            t = setTimeout(yourFunction, 20000);  // time is in milliseconds
        }
    }
    idleScreen();
      
    $(window).on('scroll', function() {
      if ($(this).scrollTop() > 308) {
        $('.stickyTopNav').addClass('navShine');
      } else {
        $('.stickyTopNav').removeClass('navShine');
      }
    });




  //     $(document).ready(function() {

  //       function removePic(index){
  //         $(`.demoDiv${index}`).removeClass('hidden');
  //         $(`.picDiv${index}`).addClass('hidden');
  //         $(`.picSwitch${index}`).removeClass('hidden');
  //         $(`.demoSwitch${index}`).addClass('hidden');
  //         $(`.projectYTDemo${index}`).removeClass('hidden');
  //       }

  //       function removeDemo(index)
  //       {
  //         $(`.demoDiv${index}`).addClass('hidden');
  //         $(`.picDiv${index}`).removeClass('hidden');
  //         $(`.picSwitch${index}`).addClass('hidden');
  //         $(`.demoSwitch${index}`).removeClass('hidden');
  //         $(`.projectYTDemo${index}`).addClass('hidden');
  //       }
  //   // Toggle play/pause on button click
  //   $('.demoSwitch1').on('click', function() {


  //     if ($('.demoDiv1').hasClass('hidden')) {
       
  //       removePic(1);
  //     } else {
  //       removeDemo(1);
  //     }
  //   });


  //   $('.picSwitch1').on('click', function() {
  
  //     if ($('.demoDiv1').hasClass('hidden')) {
  //       removePic(1);

  //     } else {
  //       removeDemo(1);
  //     }


    
  //   });


  //   $('.demoSwitch2').on('click', function() {


  //     if ($('.demoDiv2').hasClass('hidden')) {
       
  //       removePic(2);
  //     } else {
  //       removeDemo(2);
  //     }
  //   });


  //   $('.picSwitch2').on('click', function() {
  
  //     if ($('.demoDiv2').hasClass('hidden')) {
  //       removePic(2);

  //     } else {
  //       removeDemo(2);
  //     }


    
  //   });

  // });


    function initializeProject(index, data) {
      const html = `
        <div class="row g-0 brit-font mt-5 py-5 projectId">
          <div class="col-12 col-lg-7">
            <div class="me-0 me-lg-4 text-start text-lg-end h-100">
              <div class="d-flex flex-column h-100">
                <div class="demoDiv${index} hidden leftInAnimate">
                  <iframe width="100%" height="315" class="projectYTDemo${index} hidden"
                      src="${data.videoSrc}" title="YouTube video player" frameborder="0" 
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                      allowfullscreen>
                  </iframe>
                </div>
                <div class="picDiv${index} leftInAnimate">
                  <img src="${data.imageSrc}" alt="" class="img-fluid">
                </div>
                <div class="text-light-emphasis"></div>
                <div class="text-light-emphasis"></div>
              </div>
            </div>
          </div>
          <div class="col-12 col-lg-5">
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
                      <div id="" class="demoSwitch${index}" >
                        <div>DEMO</div>
                      </div>
                      <div id=" "  class="picSwitch${index} hidden" >
                        <div>PICTURE</div>
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
      $('#projectContainer').append(html);
      attachEventHandlers(index);
    }
  
    function generateLanguageTags(data) {
      return data.languages.map(language => `<div class="px-2 m-1">${language}</div>`).join('');
    }
  
    function generateSiteTags(data) {
      if (data.siteLink !== '') {
        return `<a href="${data.siteLink}" class="ms-3">
          <div>SITE</div>
        </a>`;
      } else {
        return '';
      }
    }
    function removePic(index) {
      $(`.demoDiv${index}`).removeClass('hidden');
      $(`.picDiv${index}`).addClass('hidden');
      $(`.picSwitch${index}`).removeClass('hidden');
      $(`.demoSwitch${index}`).addClass('hidden');
      $(`.projectYTDemo${index}`).removeClass('hidden');
    }
  
    function removeDemo(index) {
      $(`.demoDiv${index}`).addClass('hidden');
      $(`.picDiv${index}`).removeClass('hidden');
      $(`.picSwitch${index}`).addClass('hidden');
      $(`.demoSwitch${index}`).removeClass('hidden');
      $(`.projectYTDemo${index}`).addClass('hidden');
    }
    function attachEventHandlers(index) {
      const demoSwitchSelector = `.demoSwitch${index}`;
      const picSwitchSelector = `.picSwitch${index}`;
  
      $(demoSwitchSelector).on('click', () => {
        if ($(`.demoDiv${index}`).hasClass('hidden')) {
          removePic(index);
        } else {
          removeDemo(index);
        }
      });
  
      $(picSwitchSelector).on('click', () => {
        if ($(`.demoDiv${index}`).hasClass('hidden')) {
          removePic(index);
        } else {
          removeDemo(index);
        }
      });
    }
  
   
  
    const projects = [
      {
        title: 'Right Meal <br> Registration System',
        videoSrc: 'https://www.youtube-nocookie.com/embed/w-O7tRaQPjg',
        imageSrc: 'img/Project2.png',
        siteLink: 'https://rightmeal-frontend.netlify.app/',
        languages: ['PHP', 'Bootstrap', 'MySQL'],
        description: 'During my internship at a company, I was assigned to the Quality Assurance team where I gained valuable experience in software testing. I was responsible for testing various functionalities of the company\'s website by following a provided list of test cases and comparing the expected results with the actual outcomes. I actively collaborated with the programmers, discussing any discrepancies or conflicts encountered during testing.',
      },
      {
        title: 'Go Cart <br>E-Commerce Shopping Cart System',
        videoSrc: 'https://www.youtube-nocookie.com/embed/Q732exsLt6o',
        imageSrc: 'img/Project1.png',
        siteLink: '',
        languages: ['PHP', 'Bootstrap', 'MySQL'],
        description: 'During my internship at a company, I was assigned to the Quality Assurance team where I gained valuable experience in software testing. I was responsible for testing various functionalities of the company\'s website by following a provided list of test cases and comparing the expected results with the actual outcomes. I actively collaborated with the programmers, discussing any discrepancies or conflicts encountered during testing.',
      },

      {
        title: 'BlueHats <br> Student Information Inventory System',
        videoSrc: 'https://www.youtube-nocookie.com/embed/RJEFC1zFwRA',
        imageSrc: 'img/Project1.png',
        siteLink: '',
        languages: ['PHP', 'Bootstrap', 'MySQL'],
        description: 'During my internship at a company, I was assigned to the Quality Assurance team where I gained valuable experience in software testing. I was responsible for testing various functionalities of the company\'s website by following a provided list of test cases and comparing the expected results with the actual outcomes. I actively collaborated with the programmers, discussing any discrepancies or conflicts encountered during testing.',
      },
      {
        title: 'Matech <br> Payroll Application',
        videoSrc: 'https://www.youtube-nocookie.com/embed/PDEJOf1Z9vk',
        imageSrc: 'img/Project1.png',
        siteLink: '',
        languages: ['PHP', 'CSS'],
        description: 'During my internship at a company, I was assigned to the Quality Assurance team where I gained valuable experience in software testing. I was responsible for testing various functionalities of the company\'s website by following a provided list of test cases and comparing the expected results with the actual outcomes. I actively collaborated with the programmers, discussing any discrepancies or conflicts encountered during testing.',
      },

      {
        title: 'Matech <br> Calculator Hub System',
        videoSrc: 'https://www.youtube-nocookie.com/embed/3lc9Sm5zPog',
        imageSrc: 'img/Project1.png',
        siteLink: '',
        languages: ['PHP', 'CSS'],
        description: 'During my internship at a company, I was assigned to the Quality Assurance team where I gained valuable experience in software testing. I was responsible for testing various functionalities of the company\'s website by following a provided list of test cases and comparing the expected results with the actual outcomes. I actively collaborated with the programmers, discussing any discrepancies or conflicts encountered during testing.',
      },

      {
        title: 'Talap Pinoy Company <br> Registration System',
        videoSrc: 'https://www.youtube-nocookie.com/embed/eOQ1U8fGzJM',
        imageSrc: 'img/Project1.png',
        siteLink: '',
        languages: ['PHP', 'CSS'],
        description: 'During my internship at a company, I was assigned to the Quality Assurance team where I gained valuable experience in software testing. I was responsible for testing various functionalities of the company\'s website by following a provided list of test cases and comparing the expected results with the actual outcomes. I actively collaborated with the programmers, discussing any discrepancies or conflicts encountered during testing.',
      },
      // Add more project objects here
    ];
  
    projects.forEach((project, index) => {
      initializeProject(index + 1, project);
    });
  

  $(window).resize(function() {
    var windowWidth = $(window).width();
    if (windowWidth >= 576) {
      $('#landingPage').addClass('wholePage');
    } else {
      $('#landingPage').removeClass('wholePage');
    }
  });

  var windowWidth = $(window).width();

  if (windowWidth >= 576) {
    $('#landingPage').addClass('wholePage');
  } else {
    $('#landingPage').removeClass('wholePage');
  }

});

