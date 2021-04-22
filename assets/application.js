//Mobile nav ---------------------------

$(function() {
  $( "#toggleSidebar" ).click(function(){
    if( $( "#slides" ).is( ":hidden" )){
      $( "#slides" ).slideDown();
      $('body').css('overflowY', 'hidden');
    } else {
      $( "#slides" ).slideUp();
      $('body').css('overflowY', 'auto');
    }
  });

  
  $('.navDropdown').on('click', function(){
    this.dropdownItem = $(this).parent().siblings('.navDropItem');

    this.dropdownItem.slideToggle(300);
    $(this).toggleClass('rotate');
    
  }); 
  
});

//Hamburger trigger ---------------------------

$(function(){
  $('.hamburger').click(function(e){
    e.preventDefault();
    $(this).toggleClass('is-active');
  });
});

//CartDrawer click events ---------------------------

$(function(){
    $('.cart, #addToCartBtn, #add_to_cart').click(function(e){
      e.preventDefault();
      $('.maskCartDrawer, .cart-drawer').toggle();
      $('.cart-drawer').animate({right: "0"}, 300);
      $('body').css('overflowY', 'hidden');
    });

    $('#cartDrawerExit, .maskCartDrawer').click(function(e){
      e.preventDefault();
      $('.cart-drawer').animate({right: "-18rem"}, 300, function() {
        $(this).toggle()
     });
      
      $('.maskCartDrawer').toggle();
      $('body').css('overflowY', 'auto');
    });
  });


//Search bar toggle ---------------------------
// $(function(){
//     $('#header ul li').mouseenter(function(){
//       $('.overlaySearch').fadeToggle(200);
//     });

//     $('#header ul li').mouseleave(function(){
//       $('.overlaySearch').fadeToggle(200);
//     });
  
//   }); 

//Header show after ---------------------------

// window.onscroll = function() {myFunction()};

// var header = document.getElementById("header");
// var sticky = header.offsetTop;

// function myFunction() {
//   if (window.pageYOffset > sticky) {
//     header.classList.add("stickyHeader");
//   } else {
//     header.classList.remove("stickyHeader");
//   }
// }

//Video section ---------------------------
$(function(){
    $('#play-video').on('click', function(ev) {
        $(this).fadeOut();
        player.playVideo();
        ev.preventDefault();
    });
});

//Cookie ---------------------------
var myCookie = Cookies.get('minimal');

if(!myCookie) {
  $('.cookie').toggleClass('hidden');
}

$(function(){
  $('.acceptCookie').click(function(e){
    e.preventDefault();
    Cookies.set('minimal', 'true', { expires: 7 });
    $('.cookie').animate({height: "0px"}, 300, function() {
      $('.cookie').toggleClass('hidden');
    });
  });

  $('.closeCookie').click(function(e){
    e.preventDefault();
    $('.cookie').animate({height: "0px"}, 300, function() {
      $('.cookie').toggleClass('hidden');
    });
  });
});

//On Product Description click ---------------------------
$(function(){
  $('.clickDropdown').on('click', function(){
    this.dropdownItem = $(this).siblings('.dropdownItem');

    this.dropdownItem.slideToggle(300);
    $(this).find('.chevronDesc').toggleClass('rotate');
  }); 
});

//Sticky add to cart ---------------------------
$(function() {
  if (window.location.href.indexOf("products") > -1) {
    
    jQuery.expr.filters.offscreen = function(el) {
      var rect = el.getBoundingClientRect();
      return (
                (rect.x + rect.width) < 0 
                  || (rect.y + rect.height) < 0
                  || (rect.x > window.innerWidth || rect.y > window.innerHeight)
              );
    };
  
    if ($(window).width() < 960) {
      $(window).scroll(function() { 
        if ($(window).scrollTop() >= $('.addtocart2').offset().top + $('.addtocart2').outerHeight() - window.innerHeight) { 
            
            $('.bottomMenu').slideDown(300);
        } else {
            $('.bottomMenu').slideUp(100);
        }
      });
    
    }
    else {
      $(document).scroll(function () {
        if ($('.addtocart').is(':offscreen')) {
            $('.bottomMenu').slideDown(300);
        } else {
            $('.bottomMenu').slideUp(300);
        }
    });
    }
  }
});


//Quick shop modal ---------------------------

$('.jquery-modal').addClass('z-75');

$(function(){
  $('.jquery-modal .blocker .current').click(function(e){
    e.preventDefault();
    $('.maskQuickshop').toggleClass( "invisible" );
    $('.quickShop').toggle();
    $('body').css('overflowY', 'hidden');
  });

  $('.maskQuickshop').click(function(e){
    e.preventDefault();
    $('.quickShop').toggle();
    $('.maskQuickshop').toggleClass( "invisible" );
    $('body').css('overflowY', 'auto');
  });
});

//Header Mega Animation ---------------------------
$(function(){
  $('#header ul li .megamenu-height').each(function(index, mega){
    var height = $(mega).height();
    height += 'px';
    $('#header ul li:hover .dropdown-menu').css({'--menu-open-height': height });
    console.log(height);
  });
});

$("#divId img").each(function(index, picture) {
  var height = $(picture).height();
  //Do everything you want with the height from the image now
});

// function(e) {
//   e.stopPropagation();

//   if (e.target.classList.contains('navmenu-link-parent')) {
//     _this.closeSiblings(_this);
//   }
// }

// function() {
//   clearTimeout(_this.openTimer);
//   _this.closeTimer = setTimeout(_this.close, 400);
// }

// function() {
//   clearTimeout(_this.closeTimer);

//   if (!_this.submenu.classList.contains('navmenu-depth-3')) {
//     _this.openTimer = setTimeout(_this.open, 200);
//   } else {
//     _this.open();
//   }
// }

   //Passwork reset click ---------------------------
   
   $('#clickResetPass').click(function(){
    $('#loginForm').hide();
    $('#resetPass').show();
  }); 

  // $(document).ready(function(){
  //   var $form = $('#resetPass form');
  //   $form.submit(function(){
  //      $.post($(this).attr('action'), $(this).serialize(), function(response){
  //       return
  //      },'json');
  //      return false;
  //   });
  // });

 $('#resetPassForm')
  .ajaxForm({
      url : '/account/recover',
      dataType : 'json',
      success : function (response) {
        return
      },
      error : function (response) {
        $('#status').removeClass("invisible").animate({opacity: "1"}, 300).delay(2000).animate({opacity: "0"}, 300, function() {
          $('#status').addClass("invisible")
        });
        console.log("The server says: " + response.status);
        return
      }
  })
;

  $('#resetPass #cancel').click(function(){
    $('#resetPass').hide();
    $('#loginForm').show();
  }); 

//On Document leave popup ---------------------------
    
    // $(document).one('mouseleave', function () {
    //   if (!sessionStorage.alreadyClicked) {
    //     $('.exitpopup').removeClass('hidden');
    //     sessionStorage.alreadyClicked = "true";
    //   }
    // });

$(function(){
  $("html").bind("mouseleave", function () {
    if (!sessionStorage.alreadyClicked) {
      $('#ex2').modal({
        fadeDuration: 100,
        showClose: false
      });
      sessionStorage.alreadyClicked = "true";
    }
  });
});
    
//Fastclick ---------------------------

$(function() {
	FastClick.attach(document.body);
});
