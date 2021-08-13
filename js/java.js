const mediaQuery = window.matchMedia('(min-width: 845px)')
function handleTabletChange(e) {
  if (e.matches) {
    const link = document.querySelectorAll('.media_skills');
        for (var i = 0; i < link.length; ++i) {
        link[i].setAttribute('cx', '100')
        link[i].setAttribute('cy', '100')
        link[i].setAttribute('r', '100')
    }
  }else{
    const link = document.querySelectorAll('.media_skills');

        for (var i = 0; i < link.length; ++i) {
        link[i].setAttribute('cx', '70')
        link[i].setAttribute('cy', '70')
        link[i].setAttribute('r', '70')
    }
  }
}
mediaQuery.addListener(handleTabletChange)
handleTabletChange(mediaQuery)


const mediaQuery_2 = window.matchMedia('(min-width: 595px)')
function handleTabletChange_2(e) {
  if (e.matches) {
      const link = document.querySelectorAll('.media_skills');

        for (var i = 0; i < link.length; ++i) {
        link[i].setAttribute('cx', '100')
        link[i].setAttribute('cy', '100')
        link[i].setAttribute('r', '100')
    }
  }else{
    const link = document.querySelectorAll('.media_skills');
        for (var i = 0; i < link.length; ++i) {
        link[i].setAttribute('cx', '100')
        link[i].setAttribute('cy', '100')
        link[i].setAttribute('r', '100')
    }
  }
}
mediaQuery_2.addListener(handleTabletChange_2)
handleTabletChange_2(mediaQuery_2)




document.addEventListener("DOMContentLoaded", function(event)
{
    window.onresize = function() {
        name();
    };
});



function name(){
    let b = document.querySelector('.add_image:nth-child(1)').offsetHeight;
    b = b * 2
    document.addEventListener("change", e=> {
        document.documentElement.style.setProperty("--portfolio_witdh", b + "px");
    });

    document.documentElement.style.setProperty("--portfolio_witdh", b + "px");

};

name();

$(document).ready(function(){

    $('.header__current:first').on('click', function(){
        $('.slect_body:first').toggleClass('active')
        $('.select_arrow:first').toggleClass('arrow_active')
        $(this).toggleClass('current_active')
    });

    $('.header__current_time').on('click', function(){
        $('.slect_body_time').toggleClass('active')
        $('.select_arrow_time').toggleClass('arrow_active')
        $(this).toggleClass('current_active')
    });


    $('.select_values').on('click', function(){
    	var value,
    	    text_value,

        value = $(this).attr('data-img-path');
 
        $('.slect_body').removeClass('active')


        $('.header_text').text(value)
    });


    $('.select_values_time').on('click', function(){
        var value2,
            text_value2,

        value2 = $(this).attr('data-img-path');
 
        $('.slect_body_time').removeClass('active')


        $('.header_text_time').text(value2)
    });

    $('.icon_active_f').hover(
        function(){
            $(this).addClass('footer_icon_active_f')
            $('.icon_active_color_f').addClass('footer_icon_active_color')
        },function(){
            $(this).removeClass('footer_icon_active_f')
            $('.icon_active_color_f').removeClass('footer_icon_active_color')
        }


    )


     $('.icon_active_t').hover(
        function(){
            $(this).addClass('footer_icon_active_t')
            $('.icon_active_color_t').addClass('footer_icon_active_color')
        },function(){
            $(this).removeClass('footer_icon_active_t')
            $('.icon_active_color_t').removeClass('footer_icon_active_color')
        }
    )

    $('.header_burger').on('click', function burger(){
        $('.header_burger, .nav').toggleClass('active_burger')
        $('body').toggleClass('lock')
    });

    $('.nav_link').on('click', function(){
        $('.header_burger, .nav').removeClass('active_burger')
        $('body').removeClass('lock')
    });



    $('.rewies_inner').slick({
        dots: true,
        infinite: true,
        speed: 500,
        arrows: false,
    });


     $('.experience_inner').slick({
        dots: true,
        infinite: true,
        speed: 500,
        arrows: false,
    });

 });




function scrollTo(element) {
  window.scroll({
    left: 0, 
    top: element.offsetTop, 
    behavior: 'smooth'
  })
}

var button = document.querySelector('.down');
var footer = document.querySelector('.footer');
var portfolio_link = document.querySelector('.nav_link:nth-child(2)');
    contact_link = document.querySelector('.nav_link:last-child');
    portfolio = document.querySelector('.portfolio');
    contact = document.querySelector('.contact');
    experience = document.querySelector('.experience');



button.addEventListener('click', () => {
  scrollTo(experience);
});

portfolio_link.addEventListener('click', () => {
  scrollTo(portfolio)
});

contact_link.addEventListener('click', () => {
  scrollTo(contact)
});