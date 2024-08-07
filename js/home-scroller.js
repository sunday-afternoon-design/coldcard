gsap.registerPlugin(ScrollTrigger);

let tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".scroll-container",
        start: "top 20%",
        end: "+=200%", 
        scrub: true,
        pin: true
    }
});

tl.to("#text1", { opacity: 1, duration: 0.5 })
  .to("#text1", { opacity: 0, duration: 0.5 }, "+=0.5")
  .to("#text2", { opacity: 1, duration: 0.5 })
  .to("#text2", { opacity: 0, duration: 0.5 }, "+=0.5")
  .to("#img1", { display: "none", duration: 0 })
  .to("#img2", { display: "inline", duration: 0 })
  .to("#text3", { opacity: 1, duration: 0.5 })
  .to("#text3", { opacity: 0, duration: 0.5 }, "+=0.5")
  .to("#img2", { display: "none", duration: 0 })
  .to("#img3", { display: "inline", duration: 0 })
  .to("#text4", { opacity: 1, duration: 0.5 })
  .to("#text4", { opacity: 0, duration: 0.5 }, "+=0.5")
  .to("#text5", { opacity: 1, duration: 0.5 })
  .to("#text5", { opacity: 0, duration: 0.5 }, "+=0.5")
  .to("#text6", { opacity: 1, duration: 0.5 })
  .to("#text6", { opacity: 0, duration: 0.5 }, "+=0.5")
  .to("#img3", { display: "none", duration: 0 })
  .to("#img1", { display: "inline", duration: 0 })


  .to("#img1", { display: "none", duration: 0.5 })
  .to(".title-q", { display: "none", duration: 0 })
  .to(".title-mk", { display: "inline", duration: 0 })
  .to("#img4", { display: "inline", duration: 0.5 })
  .to("#text1", { display: "none", duration: 0 })
  .to("#text2", { display: "none", duration: 0 })
  .to("#text3", { display: "none", duration: 0 })
  .to("#text4", { display: "none", duration: 0 })
  .to("#text5", { display: "none", duration: 0 })
  .to("#text6", { display: "none", duration: 0 })
  .to("#text7", { opacity: 1, duration: 0.5 })
  .to("#text7", { opacity: 0, duration: 0.5 }, "+=0.5")
  .to("#text8", { opacity: 1, duration: 0.5 })
  .to("#text8", { opacity: 0, duration: 0.5 }, "+=0.5")
  .to("#text9", { opacity: 1, duration: 0.5 })
  .to("#text9", { opacity: 0, duration: 0.5 }, "+=0.5")
  .to("#text10", { opacity: 1, duration: 0.5 })
  .to("#text10", { opacity: 0, duration: 0.5 }, "+=0.5")
  .to("#text11", { opacity: 1, duration: 0.5 })
  .to("#text11", { opacity: 0, duration: 0.5 }, "+=0.5")