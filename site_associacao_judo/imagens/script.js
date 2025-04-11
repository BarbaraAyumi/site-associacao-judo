document.addEventListener("DOMContentLoaded", () => {
    // Interação de Boas-vindas
    const welcomeBanner = document.createElement("div");
    welcomeBanner.textContent = "Bem-vindo(a) à Associação Valentim! Role para explorar 🥋";
    welcomeBanner.classList.add("welcome-banner");
    document.body.appendChild(welcomeBanner);
  
    setTimeout(() => {
      welcomeBanner.classList.add("fade-out");
      setTimeout(() => {
        welcomeBanner.remove();
      }, 1000);
    }, 4000);
  
    // Scroll suave para seções com links âncora
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
        }
      });
    });
  });
  