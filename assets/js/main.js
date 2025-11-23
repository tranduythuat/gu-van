// Kích hoạt ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Gọi các hiệu ứng có sẵn
document.addEventListener("DOMContentLoaded", () => {
  gsapFlipIn(".animate-flip");
  gsapFadeIn(".fade-in");
  gsapFadeRight(".fade-right");
  gsapFadeLeft(".fade-left");
  gsapFadeUp(".fade-up");
  gsapFadeDown(".fade-down");
  gsapRotateBottomLeft(".rotate-bl");
  gsapRotateBottomRight(".rotate-br");
  gsapFlipVerticalLeft(".flip-vertical-left");
  gsapRollInLeft(".roll-in-left");
  gsap_rotate_bl__float(".rotate-bl--float");

  // Tạo timeline
  const tl = gsap.timeline({
    repeatDelay: 0,  // delay giữa các lần lặp
    defaults: { duration: .8, ease: "power2.out" }, // giá trị mặc định
    scrollTrigger: {
      trigger: ".timeline",
      start: "top 85%", // khi phần tử xuất hiện 80% trong viewport
    }
  });

  // Thêm các animation theo thứ tự
  tl.from(".timeline-1", { y: 80, opacity: 0 })        
    .from(".timeline-2", { y: 80, opacity: 0 }, "-=0.5")     
    .from(".timeline-3", { y: 80, opacity: 0 }, "-=0.5")  
    .from(".timeline-4", { y: 80, opacity: 0 }, "-=0.5")   
    .from(".timeline-5", { y: 80, opacity: 0 }, "-=0.5")  
    .from(".timeline-6", { y: 80, opacity: 0 }, "-=0.5");   

  const tldresscode = gsap.timeline({
    repeatDelay: 0,  // delay giữa các lần lặp
    defaults: { duration: .8, ease: "power2.out" }, // giá trị mặc định
    scrollTrigger: {
      trigger: ".dresscode",
      start: "top 85%", // khi phần tử xuất hiện 80% trong viewport
    }
  });
  tldresscode.from(".color-1", { x: -80, opacity: 0 })        
    .from(".color-2", { x: -100, opacity: 0 }, "-=0.5")     
    .from(".color-3", { x: -100, opacity: 0 }, "-=0.5")  
    .from(".color-4", { x: -100, opacity: 0 }, "-=0.5")   
    .from(".color-5", { x: -100, opacity: 0 }, "-=0.5")  
    .from(".color-6", { x: -100, opacity: 0 }, "-=0.5");   


  async function toggleMusic(e) {
    console.log('togle')
    const audio = document.getElementById('audio');
    const iconSvg = document.getElementById('iconSvg');
    if (!audio.src) {
        alert('Chưa có nhạc, vui lòng thêm src cho audio.');
        return;
    }
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }

    audio.addEventListener('play', () => {
        iconSvg.classList.add('spin');
    });
    audio.addEventListener('pause', () => {
        iconSvg.classList.remove('spin');
    });
  }
  const btn = document.getElementById('player-btn');
  btn.addEventListener('click', toggleMusic);

  const qrcode = document.getElementById('qr-btn');
  qrcode.addEventListener("click", toggleQR);

  function toggleQR(e) {
      e.preventDefault();
      Swal.fire({
          title: "",
          text: "국민 506-502-0438-6633",
          confirmButtonColor: "#000"
      });
  }
});
