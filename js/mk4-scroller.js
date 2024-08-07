gsap.registerPlugin(ScrollTrigger);

let t2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".highlight-mk",
        start: "top 20%",
        end: "+=200%", 
        scrub: true,
        pin: true
    }
});

t2.to("#text1", { opacity: 1, duration: 0.5 })
  .to("#text1", { opacity: 0, duration: 0.5 }, "+=0.5")
  .to("#text2", { opacity: 1, duration: 0.5 })
  .to("#text2", { opacity: 0, duration: 0.5 }, "+=0.5")
  .to("#text3", { opacity: 1, duration: 0.5 })
  .to("#text3", { opacity: 0, duration: 0.5 }, "+=0.5")
  .to("#text4", { opacity: 1, duration: 0.5 })
  .to("#text4", { opacity: 0, duration: 0.5 }, "+=0.5")
  .to("#text5", { opacity: 1, duration: 0.5 })
  .to("#text5", { opacity: 0, duration: 0.5 }, "+=0.5")