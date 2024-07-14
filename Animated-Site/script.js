const crsr=document.querySelector("#cursor");
const crsr_blur=document.querySelector("#cursor-blur");

document.addEventListener("mousemove",(e)=>{
    // e.preventDefault();
    crsr.style.left=e.x+"px";
    crsr.style.top=e.y+"px";
    crsr_blur.style.left=e.x-85+"px";
    crsr_blur.style.top=e.y-85+"px";

    
})

gsap.to("#nav",{
    backgroundColor:"black" ,
    duration:0.5,
    height:"100px",
    delay:1   ,
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        // markers:true,
        start:"top -10%",
        end:"top -11%",
        scrub:1
    }
})


gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body", 
        markers:true,
        start:"top -20%",
        end:"top -70%",
        scrub:2,

    }
})