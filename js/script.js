// Basic behavior: dropdown and mobile menu toggle + simple form handler
(function () {
    // Dropdown (both nav instances)
    document.querySelectorAll(".dropdown").forEach((dd) => {
      const btn = dd.querySelector(".drop-btn");
      if (!btn) return;
      btn.addEventListener("click", (e) => {
        dd.classList.toggle("open");
        const expanded = dd.classList.contains("open");
        btn.setAttribute("aria-expanded", expanded);
      });
    });
  
    // Close dropdown when click outside
    document.addEventListener("click", (e) => {
      document.querySelectorAll(".dropdown").forEach((dd) => {
        if (!dd.contains(e.target)) {
          dd.classList.remove("open");
          const btn = dd.querySelector(".drop-btn");
          if (btn) btn.setAttribute("aria-expanded", "false");
        }
      });
    });
  
    // Mobile toggle: show/hide .menu by toggling class .open
    document.querySelectorAll(".mobile-toggle").forEach((btn) => {
      btn.addEventListener("click", () => {
        const nav = btn.closest(".nav");
        const menu = nav.querySelector(".menu");
        const expanded = menu.classList.toggle("open");
        btn.setAttribute("aria-expanded", expanded);
        if (menu.classList.contains("open")) menu.style.display = "flex";
        else menu.style.display = "";
      });
    });
  
    // Simple contact form handler (no backend) — show alert and reset
    const form = document.getElementById("contactForm");
    if (form) {
      form.addEventListener("submit", function (e) {
        e.preventDefault();
        alert(
          "Terima kasih! Pesanmu telah diterima. (ini demo, belum ada backend)"
        );
        form.reset();
      });
    }
  })();
  