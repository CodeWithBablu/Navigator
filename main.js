gsap.to("#circle",{
  rotate:0,
  ease:Expo.easeInOut,
  duration:2
});

var active=3;

var miniCircles=document.querySelectorAll('.minicircle');
var secondElements=document.querySelectorAll('.second');

gsap.to(miniCircles[active-1],{
  opacity:1,
  duration:2,
})

gsap.to(secondElements[active-1],{
  opacity:1,
  duration:2,
})

miniCircles.forEach((dot,index)=>{
  dot.addEventListener("click",function(){

    gsap.to('#circle',{
      rotate:(3-(index+1))*10,
      ease:Expo.easeInOut,
      duration:2,
    }) 

    greyOut();

    gsap.to(secondElements[index],{
      opacity:1,
      duration:2,
    })

    gsap.to(dot,{
      opacity:1,
    })

  })
})

function greyOut(){

  gsap.to('.second',{
    opacity:0.4,
  })

  gsap.to('.minicircle',{
    opacity:0.2,
  })
}
