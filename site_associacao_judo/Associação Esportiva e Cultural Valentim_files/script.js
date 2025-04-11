// Banner animado de boas-vindas
window.addEventListener("DOMContentLoaded", () => {
  const banner = document.createElement("div");
  banner.id = "welcome-banner";
  banner.textContent = "Bem-vindo(a) à Associação Valentim!";
  document.body.prepend(banner);

  setTimeout(() => {
    banner.classList.add("show");
  }, 300);

  setTimeout(() => {
    banner.classList.remove("show");
  }, 4000);
});

// Scroll suave ao clicar em âncoras
document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const destino = document.querySelector(this.getAttribute("href"));
      if (destino) {
        destino.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
});
