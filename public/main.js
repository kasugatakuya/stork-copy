// トップスクロール

$(function() {
  let gotop = $(".gotop");
  // gotop.hide();
  gotop.css('bottom', '-60px');
  
  $(window).scroll(function() {
    // if($(this).scrollTop() > 100) {
    //   gotop.fadeIn();
    // } else {
    //   gotop.fadeOut();
    // }
    if($(this).scrollTop() > 100) {
      gotop.stop().animate({'bottom' : '10px'}, 50);   
    } else {
      gotop.stop().animate({'bottom' : '-60px'}, 50); 
    }
  });
  gotop.click(function() {
    $('html,body').animate({scrollTop:0}, 300);
  });
  

  let toptitle = $(".head__main__title")
  toptitle.hide();
  toptitle.slideDown();
});


// カーソルポインター
$(function() {
  $(".concon").hover(function() {
    $(".iconcon").css("position","relative");
    $(".iconcon").css("left","2px");
  },
  function() {
    $(".iconcon").css("position","relative");
    $(".iconcon").css("left","0px");
  }
  );
  $(".concon2").hover(function() {
    $(".iconcon2").css("position","relative");
    $(".iconcon2").css("left","2px");
  },
  function() {
    $(".iconcon2").css("position","relative");
    $(".iconcon2").css("left","0px");
  }
  );
  $(".concon3").hover(function() {
    $(".iconcon3").css("position","relative");
    $(".iconcon3").css("left","2px");
  },
  function() {
    $(".iconcon3").css("position","relative");
    $(".iconcon3").css("left","0px");
  }
  );
  $(".concon4").hover(function() {
    $(".iconcon4").css("position","relative");
    $(".iconcon4").css("left","2px");
  },
  function() {
    $(".iconcon4").css("position","relative");
    $(".iconcon4").css("left","0px");
  }
  );






  $(".con").hover(function() {
    $(".iicon").css("position","relative");
    $(".iicon").css("left","2px");
  },
  function() {
    $(".iicon").css("position","relative");
    $(".iicon").css("left","0px");
  }
  );
  $(".con2").hover(function() {
    $(".iicon2").css("position","relative");
    $(".iicon2").css("left","2px");
  },
  function() {
    $(".iicon2").css("position","relative");
    $(".iicon2").css("left","0px");
  }
  );
  $(".con3").hover(function() {
    $(".iicon3").css("position","relative");
    $(".iicon3").css("left","2px");
  },
  function() {
    $(".iicon3").css("position","relative");
    $(".iicon3").css("left","0px");
  }
  );
  $(".con4").hover(function() {
    $(".iicon4").css("position","relative");
    $(".iicon4").css("left","2px");
  },
  function() {
    $(".iicon4").css("position","relative");
    $(".iicon4").css("left","0px");
  }
  );
  $(".con5").hover(function() {
    $(".iicon5").css("position","relative");
    $(".iicon5").css("left","2px");
  },
  function() {
    $(".iicon5").css("position","relative");
    $(".iicon5").css("left","0px");
  }
  );





  $(".co").hover(function() {
    $(".ii").css("position","relative");
    $(".ii").css("left","2px");
  },
  function() {
    $(".ii").css("position","relative");
    $(".ii").css("left","0px");
  }
  );
  $(".co2").hover(function() {
    $(".ii2").css("position","relative");
    $(".ii2").css("left","2px");
  },
  function() {
    $(".ii2").css("position","relative");
    $(".ii2").css("left","0px");
  }
  );
  $(".co3").hover(function() {
    $(".ii3").css("position","relative");
    $(".ii3").css("left","2px");
  },
  function() {
    $(".ii3").css("position","relative");
    $(".ii3").css("left","0px");
  }
  );
  $(".co4").hover(function() {
    $(".ii4").css("position","relative");
    $(".ii4").css("left","2px");
  },
  function() {
    $(".ii4").css("position","relative");
    $(".ii4").css("left","0px");
  }
  );
  $(".co5").hover(function() {
    $(".ii5").css("position","relative");
    $(".ii5").css("left","2px");
  },
  function() {
    $(".ii5").css("position","relative");
    $(".ii5").css("left","0px");
  }
  );
  $(".co6").hover(function() {
    $(".ii6").css("position","relative");
    $(".ii6").css("left","2px");
  },
  function() {
    $(".ii6").css("position","relative");
    $(".ii6").css("left","0px");
  }
  );
  $(".co7").hover(function() {
    $(".ii7").css("position","relative");
    $(".ii7").css("left","2px");
  },
  function() {
    $(".ii7").css("position","relative");
    $(".ii7").css("left","0px");
  }
  );
  $(".co8").hover(function() {
    $(".ii8").css("position","relative");
    $(".ii8").css("left","2px");
  },
  function() {
    $(".ii8").css("position","relative");
    $(".ii8").css("left","0px");
  }
  );
});





// 検索モーダル
$(function() {
  $('#search').click(function() {
    $('.model').fadeIn();
  });

  $('.close').click(function() {
    $('.model').fadeOut();
  });
});

// ハンバーガーメニュー
$(function() {
  $('#burger').click(function() {
    $('.burger').fadeIn();
  });

  $('.close2').click(function() {
    $('.burger').fadeOut();
  });
  $('.close3').click(function() {
    $('.burger').fadeOut();
  });
});

// スリックスライドショー
$(function() {
  $('.slider').slick({
    autoplay:true,
    autoplaySpeed:5000,
    dots:true,
    slidesToShow:4,
    responsive:[
        {
            breakpoint: 1024,
            settings:{
                slidesToShow:3,
            }
        },
        {
            breakpoint: 768,
            settings:{
                slidesToShow:2,
            }
        },
        {
            breakpoint: 480,
            settings:{
                slidesToShow:1,
            }
        },
    ]
  });
});