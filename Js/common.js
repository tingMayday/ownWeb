// 主页头部的动态效果
var particles = $('#particles');
if(particles.length){
  particlesJS('particles',
    {
      "particles": {
        "number": {
          "value": 80,
          "density": {
            "enable": true,
            "value_area": 800
          }
        },
        "color": {
          "value": "#ffffff"
        },
        "shape": {
          "type": "circle",
          "stroke": {
            "width": 0,
            "color": "#000000"
          },
          "polygon": {
            "nb_sides": 5
          },
          "image": {
            "src": "img/github.svg",
            "width": 100,
            "height": 100
          }
        },
        "opacity": {
          "value": 0.5,
          "random": false,
          "anim": {
            "enable": false,
            "speed": 1,
            "opacity_min": 0.1,
            "sync": false
          }
        },
        "size": {
          "value": 5,
          "random": true,
          "anim": {
            "enable": false,
            "speed": 40,
            "size_min": 0.1,
            "sync": false
          }
        },
        "line_linked": {
          "enable": true,
          "distance": 150,
          "color": "#ffffff",
          "opacity": 0.4,
          "width": 1
        },
        "move": {
          "enable": true,
          "speed": 6,
          "direction": "none",
          "random": false,
          "straight": false,
          "out_mode": "out",
          "attract": {
            "enable": false,
            "rotateX": 600,
            "rotateY": 1200
          }
        }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": {
            "enable": true,
            "mode": "repulse"
          },
          "onclick": {
            "enable": true,
            "mode": "push"
          },
          "resize": true
        },
        "modes": {
          "grab": {
            "distance": 400,
            "line_linked": {
              "opacity": 1
            }
          },
          "bubble": {
            "distance": 400,
            "size": 40,
            "duration": 2,
            "opacity": 8,
            "speed": 3
          },
          "repulse": {
            "distance": 200
          },
          "push": {
            "particles_nb": 4
          },
          "remove": {
            "particles_nb": 2
          }
        }
      },
      "retina_detect": true,
      "config_demo": {
        "hide_card": false,
        "background_color": "#b61924",
        "background_image": "",
        "background_position": "50% 50%",
        "background_repeat": "no-repeat",
        "background_size": "cover"
      }
    }
  );
}
  

$(function(){
  var body = $('.body'),
      header = body.find('header'),
      contactForm = body.find('.contact-form'),
      sectionH = body.find('.section1').height(),
      siteCanvas = body.find('.site-canvas');
  // 副页头部的动态canvas
  if(siteCanvas.length){
    new Vue({
      el: '.site-canvas',
      data: {
        sequence: [] 
      },
      mounted() {
        this.sequence = new Array(Math.round(document.body.clientWidth/70)); 
      }
    });
  }
  // 联系页面输入框效果
  contactForm.on('blur','input,textarea',function(){
    var _this = $(this);
    if(_this.val() == ''){
      _this.parents('li').removeClass('active');
    }else{
      _this.parents('li').addClass('active');
    }
  })
  // 页面滚动导航添加背景
  $(window).scroll(function(){
    var _this = $(this);
    if(_this.scrollTop() >= sectionH){
      header.addClass('bg');
    }else{
      header.removeClass('bg');
    }
  })
  //移动端导航显示隐藏切换
  header.on('click','.menu-btn',function(){
    var _this = $(this);
        _this.toggleClass('on');
        _this.next().slideToggle();
  })
});