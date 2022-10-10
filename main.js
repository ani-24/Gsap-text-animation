const text = new SplitType("#text");

gsap.from(".char", {
  y: 100,
  stagger: 0.05,
  duration: 0.5,
  rotate: 25,
  ease: "back.out(1.7)",
});
