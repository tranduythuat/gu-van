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

  async function handleFormSubmit(e) {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    console.log("🚀 ~ handleFormSubmit ~ data:", data);

    const {
      name: name,
      confirm: confirm
    } = data;
    console.log("🚀 ~ handleFormSubmit 2~ data:", data);

    // Thông báo khi bắt đầu gửi
    Swal.fire({
      title: '전송 중 ...',
      text: "잠시만 기다려 주세요",
      icon: "info",
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });

    const url = "https://script.google.com/macros/s/AKfycbwhBuNO6S1DC2XCDe8qKp8lccTSvBK_NLqhH1j81FpUAd1__vdd48-wQOSng6H8udHaGg/exec?sheet=confirm";

    try {
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          name,
          confirm,
        }),
      });

      const result = await res.json().catch(() => ({}));
      console.log("Server response:", result);

      form.reset();

      // Thông báo thành công
      Swal.fire({
        title: "성공!",
        text: "답장을 보내주셔서 감사합니다, 정보는 신랑신부에게 전달되었어요",
        icon: "success",
        confirmButtonText: "OK",
        confirmButtonColor: "#000",
      });
    } catch (error) {
      console.error("Error:", error);

      // Thông báo lỗi
      Swal.fire({
        title: "Lỗi!",
        text: "OPPS! Something went wrong: " + error.message,
        icon: "error",
        confirmButtonText: "Try again.",
        confirmButtonColor: "#000",
      });
    }
  }

  const form = document.forms["rsvpForm"];
  if (form) {
    form.addEventListener("submit", (e) => handleFormSubmit(e));
  }
});
