//PARA SA OPEN AND CLOSE MENU
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

    // PANG OPEN NG MENU
    if(navToggle){
        navToggle.addEventListener('click', () =>{
            navMenu.classList.add('show-menu')
        })
    }

    // PANG CLOSE NG MENU
    if(navClose){
        navClose.addEventListener('click', () =>{
            navMenu.classList.remove('show-menu')
        })
    }

    // REMOVE MENU PANG CELLPHONE
    const navLink = document.querySelectorAll('.nav__link')

    function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // Pang remove sa naka show
    navMenu.classList.remove('show-menu')
    }
    navLink.forEach(n => n.addEventListener('click', linkAction))

    
    // QUALIFICATION BLOCKS
    const tabs = document.querySelectorAll('[data-target]'),
          tabContents = document.querySelectorAll('[data-content]')

          tabs.forEach(tab => {
            tab.addEventListener('click', () =>{
                const target = document.querySelector(tab.dataset.target)

                tabContents.forEach(tabContent => {
                    tabContent.classList.remove('qualification__active')
                })
                target.classList.add('qualification__active')

                tabs.forEach(tab =>{
                    tab.classList.remove('qualification__active')
                })
                tab.classList.add('qualification__active')
             })
          })

    //IMPORTED NA SWIPER SLIDER ANIMATIONS

    let swiperPortfolio = new Swiper('.portfolio__container', {
        cssMode: true,
        loop: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });

//-----------------------------------------------------------------------------//
      //IMPORTED SWIPER SLIDER ANIMATIONS PARA SA TESTIMONIAL
      let swiperTestimonial = new Swiper('.testimonial__container', {
        loop: true,
        grabCursor: true,
        spaceBetween: 48,
       
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          dynamicBullets: true,
        },
            breakpoints:{
                568:{
                    slidesPerView: 2,
                }
            }
      });


      /*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
      const sections = document.querySelectorAll('section[id]')

        function scrollActive(){
          const scrollY = window.pageYOffset

           sections.forEach(current =>{
              const sectionHeight = current.offsetHeight
               const sectionTop = current.offsetTop - 50;
                sectionId = current.getAttribute('id')

          if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
          }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
          }
        })
      }
      window.addEventListener('scroll', scrollActive)


      /*==================== CHANGE BACKGROUND HEADER ====================*/ 
    
    
      function scrollHeader(){
      const nav = document.getElementById('header')

     // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
     if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
     }
     window.addEventListener('scroll', scrollHeader)


    /*==================== SHOW SCROLL UP ====================*/ 


    function scrollUp(){
      const scrollUp = document.getElementById('scroll-up');

     // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
        if(this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
         }
      window.addEventListener('scroll', scrollUp)


      
            /*==================== DARK LIGHT THEME ====================*/ 
              themeButton = document.getElementById('theme-button')
              const darkTheme = 'dark-theme'
              const iconTheme = 'uil-sun'

              // Pang save sa last

              const selectedTheme = localStorage.getItem('selected-theme')
              const selectedIcon = localStorage.getItem('selected-icon')

               // pang get sa current theme
              const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
              const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

           // Pang check if activae
               if (selectedTheme) {
                  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
                  themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
            }

            // Activate / deactivate the theme manually sa button
                themeButton.addEventListener('click', () => {
                // Icon pang dm 
                   document.body.classList.toggle(darkTheme)
                   themeButton.classList.toggle(iconTheme)
            // Pang save ng theme
                localStorage.setItem('selected-theme', getCurrentTheme())
                localStorage.setItem('selected-icon', getCurrentIcon())
                })


            /* ======------ JAVASCRIPT PANG REVEAL ANIMATIONS -----===== */

            window.addEventListener('scroll', () =>{
              const reveals = document.querySelectorAll('.about__container, .about__data, .skills__container,.blog-container');

              reveals.forEach(rev =>{
                  const windowHeight = window.innerHeight;
                  const revTop = rev.getBoundingClientRect().top;

                  if (revTop < windowHeight -200) {
                      rev.classList.add('animate');
                  }
                  else{
                      rev.classList.remove('animate');
                  }
              })
          })

          // <!-- Para sa loading Screen -->
          window.addEventListener("load", () => {
            const loader = document.querySelector(".loader");
          
            loader.classList.add("loader--hidden");
          
            loader.addEventListener("transitionend", () => {
              document.body.removeChild(loader);
            });
          });
          // <!-- Para sa loading Screen -->