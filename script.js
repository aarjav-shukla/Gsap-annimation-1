const tl1=gsap.timeline();

const menubtn = document.querySelector(".right-nav h2");
const closebtn=document.querySelector(".main-menu i")



tl1.from(".navbar h2",{
    opacity:0,
    y:-30,
    duration:1,
    delay:1,
    stagger:.5,

})

tl1.from(".japan",{
    y:40,
    duration:1,
    delay:1,
    opacity:0,
},"-=1")

tl1.from(".center-btn",{
    opacity:0,
    duration:1
})

const tl2=gsap.timeline();
tl2.to(".main-menu",{
    right:0,
    duration:.7,
    
    
})
tl2.from(".main-menu h4",{
    x:150,
    duration:.6,
    stagger:0.2,
    ease:"none",
    opacity:0

},"-=.7")
tl2.pause()


menubtn.addEventListener("click", function () {
    tl2.play()
});
closebtn.addEventListener("click",function(){
    tl2.reverse()
})


const tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".second-page .container-1",
    scroller: "body",
    // markers: true,
    start: "top 70%",
    end:"top 10%",
    scrub: 2,
  },
});
tl3.from(".box-1-1",{
    x:-200,
    opacity:0,
    duration:1
},"abc")
tl3.from(".box-1-2", {
  x: 200,
  opacity: 0,
  duration:1
},"abc");


tl3.from(".box-2-2",{
     x: 200,
  duration: 1,
  // 
  opacity: 0,
},"def")
tl3.from(
  ".box-2-1",
  {
    x: -200,
    opacity: 0,
    duration: 1,
  },
  "def",
);


var initial = `M 0 50 Q 1050 80 2100 50`;
var final = `M 0 80 Q 1050 80 2100 80`;
var path="";
let string=document.querySelector(".string")
string.addEventListener("mousemove",function(elem){
   if(elem.y<160){
  path = `M 0 80 Q ${elem.x} ${elem.y} 2100 80`;
  gsap.to("svg path",{
    attr:{d:path},
    duration:0.3,
    ease:"power3.out"
  })}
  else{
      path = `M 0 80 Q ${elem.x} 160 2100 80`;
  gsap.to("svg path",{
    attr:{d:path},
    duration:0.3,
    ease:"power3.out"

  })
}})

string.addEventListener("mouseleave", function (elem) {
  
  gsap.to("svg path", {
    attr: { d: final },
    duration: 0.5,
    ease: "elastic.out(1,0.1)",
  });
});

// var tl4=gsap.timeline({
//     scrollTrigger:{
//         trigger:"third-page div",
//         scroller:"body",
//         markers:true,
//         start:"top 50%",
//         end:"top:0%",
//         scrub:2,
//     }
// })

// tl4.from("form",{
//     opacity:0,
//    duration:2
    
// })

var text=document.querySelector(".form-text h2");
var temptext=text.innerHTML;
console.log(temptext)
let x=0;
var split=temptext.split(" ")
console.log(split)
var clutter="";
split.forEach(function(elem){
    if(x===split.length/2){
        clutter += `<span>${elem}</span>`;
        clutter+=`<br>`
    }
else{clutter+=`<span>${elem}</span>`;}
x++;
})
text.innerHTML=clutter;

gsap.from(".form-text h2 span",{
   duration:1,
   opacity:0,
  stagger:1,
  x:100,

    
    scrollTrigger:{
        trigger:".third-page",
        scroller:"body",
        scrub:2,
        // markers:true,
        start:"top 60%",
        end:"top 20%"
    }
})

gsap.from("form", {
     duration:1,
  opacity: 0,
  x:-300,

  scrollTrigger: {
    trigger: ".third-page",
    scroller: "body",
    scrub: 2,
    // markers: true,
    start: "top 30%",
    end: "top 0",
  },
});