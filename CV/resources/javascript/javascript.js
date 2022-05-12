
//  window.onscroll = function() {myFunction()};
        
//  var navbar = document.getElementById("navbar");
//  var sticky = navbar.offsetTop;
 
//  function myFunction() {
//    if (window.pageYOffset >= sticky) {
//      navbar.classList.add("sticky")
//    } else {
//      navbar.classList.remove("sticky");
//    }
//  }


// Buntton scroll Top
//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction()
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


document.addEventListener('DOMContentLoaded', init);

function init() {
  [...document.querySelectorAll('.waitload')]
  .map(e => e.classList.remove('waitload'));
}


//Fade animation 
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      document.querySelectorAll('.asta')[0].classList.add('fadeInLeft');
      document.querySelectorAll('.asta')[1].classList.add('fadeInTop');
      document.querySelectorAll('.asta')[2].classList.add('fadeInBot');
      document.querySelectorAll('.asta')[3].classList.add('fadeInRight');
      document.querySelectorAll('.asta')[3].classList.add('fadeInRight');
    };
  });

});
observer.observe(document.querySelector('.ab'));


const observer2 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      document.querySelectorAll('.abilitati')[0].classList.add('fadeInLeft');
      document.querySelectorAll('.abilitati')[1].classList.add('fadeInTop');
      document.querySelectorAll('.abilitati')[2].classList.add('fadeInRight');
    }
  })
})
observer2.observe(document.querySelector('.abc'));

/*Fisrt row progress bot */

const observer3 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const as = entry.target.querySelector('.as');
    if (entry.isIntersecting) {
      as.classList.add('circle-html');
      return; // if we added the class, exit the function
    }
  });
});
observer3.observe(document.querySelector('.progressbar__svg'));


const observer4 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const ass = entry.target.querySelector('.ass');
    if (entry.isIntersecting) {
      ass.classList.add('circle-css');
      return; // if we added the class, exit the function
    }
  });
});
observer4.observe(document.querySelector('.hh'));

const observer5 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const asss = entry.target.querySelector('.asss');
    if (entry.isIntersecting) {
      asss.classList.add('circle-scss');
      return; // if we added the class, exit the function
    }
  });
});
observer5.observe(document.querySelector('.hhh'));


/*Second row progress bot */

const observer6 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const pro22 = entry.target.querySelector('.pro22');
    if (entry.isIntersecting) {
      pro22.classList.add('circle-js');
      return; // if we added the class, exit the function
    }
  });
});
observer6.observe(document.querySelector('.pro2'));


const observer7 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const pro33 = entry.target.querySelector('.pro33');
    if (entry.isIntersecting) {
      pro33.classList.add('circle-ts');
      return; // if we added the class, exit the function
    }
  });
});
observer7.observe(document.querySelector('.pro3'));

const observer8 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const pro44 = entry.target.querySelector('.pro44');
    if (entry.isIntersecting) {
      pro44.classList.add('circle-node');
      return; // if we added the class, exit the function
    }
  });
});
observer8.observe(document.querySelector('.pro4'));


/*Third row progress bot */

const observer9 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const pro55 = entry.target.querySelector('.pro55');
    if (entry.isIntersecting) {
      pro55.classList.add('circle-react');
      return; // if we added the class, exit the function
    }
  });
});
observer9.observe(document.querySelector('.pro5'));


const observer10 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const pro66 = entry.target.querySelector('.pro66');
    if (entry.isIntersecting) {
      pro66.classList.add('circle-angular');
      return; // if we added the class, exit the function
    }
  });
});
observer10.observe(document.querySelector('.pro6'));

const observer11 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const pro77 = entry.target.querySelector('.pro77');
    if (entry.isIntersecting) {
      pro77.classList.add('circle-vue');
      return; // if we added the class, exit the function
    }
  });
});
observer11.observe(document.querySelector('.pro7'));

// Animation Top bar 



const topBar = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const top_value = entry.target.querySelector('.top_value');
    if (entry.isIntersecting) {
      top_value.classList.add('top_bar_value');
      return; // if we added the class, exit the function
    }
  });
});
topBar.observe(document.querySelector('.top_bar'));


const topBar2 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const top_value2 = entry.target.querySelector('.top_value2');
    if (entry.isIntersecting) {
      top_value2.classList.add('top_bar_value2');
      return; // if we added the class, exit the function
    }
  });
});
topBar2.observe(document.querySelector('.top_bar2'));


const topBar3 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const top_value3 = entry.target.querySelector('.top_value3');
    if (entry.isIntersecting) {
      top_value3.classList.add('top_bar_value3');
      return; // if we added the class, exit the function
    }
  });
});
topBar3.observe(document.querySelector('.top_bar3'));



const topBar4 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const top_value4 = entry.target.querySelector('.top_value4');
    if (entry.isIntersecting) {
      top_value4.classList.add('top_bar_value4');
      return; // if we added the class, exit the function
    }
  });
});
topBar4.observe(document.querySelector('.top_bar4'));


//  Animatie Experienta Profesionala

const centra = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      document.querySelectorAll('.centrul')[0].classList.add('fadeInLeft');

      document.querySelectorAll('.centrul')[1].classList.add('fadeInRight');
    }
  })
})
centra.observe(document.querySelector('.centru'));

//

const centra2 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      document.querySelectorAll('.centrul2')[0].classList.add('fadeInLeft');

      document.querySelectorAll('.centrul2')[1].classList.add('fadeInRight');
    }
  })
})
centra2.observe(document.querySelector('.centru2'));

//

const centra3 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      document.querySelectorAll('.centrul3')[0].classList.add('fadeInLeft');

      document.querySelectorAll('.centrul3')[1].classList.add('fadeInRight');
    }
  })
})
centra3.observe(document.querySelector('.centru3'));

//

const centra4 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      document.querySelectorAll('.centrul4')[0].classList.add('fadeInLeft');

      document.querySelectorAll('.centrul4')[1].classList.add('fadeInRight');
    }
  })
})
centra4.observe(document.querySelector('.centru4'));

//

const centra5 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      document.querySelectorAll('.centrul5')[0].classList.add('fadeInLeft');

      document.querySelectorAll('.centrul5')[1].classList.add('fadeInRight');
    }
  })
})
centra5.observe(document.querySelector('.centru5'));

//

const centra6 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      document.querySelectorAll('.centrul6')[0].classList.add('fadeInLeft');

      document.querySelectorAll('.centrul6')[1].classList.add('fadeInRight');
    }
  })
})
centra6.observe(document.querySelector('.centru6'));

//

const centra7 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      document.querySelectorAll('.centrul7')[0].classList.add('fadeInLeft');

      document.querySelectorAll('.centrul7')[1].classList.add('fadeInRight');
    }
  })
})
centra7.observe(document.querySelector('.centru7'));



const centra8 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      document.querySelectorAll('.centrul8')[0].classList.add('fadeInLeft');

      document.querySelectorAll('.centrul8')[1].classList.add('fadeInRight');
    }
  })
})
centra8.observe(document.querySelector('.centru8'));


//Educatie


const educatie = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      document.querySelectorAll('.educatie_fade_1')[0].classList.add('fadeInTop', );
      document.querySelectorAll('.educatie_fade_1')[1].classList.add('fadeInTop');
      document.querySelectorAll('.educatie_fade_1')[2].classList.add('fadeInBot');
      document.querySelectorAll('.educatie_fade_1')[3].classList.add('fadeInBot');
    }
  })
})
educatie.observe(document.querySelector('.educatie_fade'));


// Certifficate 

const certifficate = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      document.querySelectorAll('.cert1')[0].classList.add('fadeInLeft', );
      document.querySelectorAll('.cert1')[1].classList.add('fadeInTop');
      document.querySelectorAll('.cert1')[2].classList.add('fadeInRight');
      document.querySelectorAll('.cert1')[3].classList.add('fadeInLeft');
      document.querySelectorAll('.cert1')[4].classList.add('fadeInBot');
      document.querySelectorAll('.cert1')[5].classList.add('fadeInRight');
    }
  })
})
certifficate.observe(document.querySelector('.cert1_fade'));


const all_elements = document.qu