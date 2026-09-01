// ============================================================
// MERCADO AYMORÉ — script.js
// Cada bloco abaixo controla uma funcionalidade independente.
// ============================================================

document.addEventListener('DOMContentLoaded', function () {

  // ---- 1. Menu mobile: abre/fecha ao clicar no botão hambúrguer ----
  var botaoMenu = document.getElementById('botaoMenu');
  var navMobile = document.getElementById('navMobile');

  if (botaoMenu && navMobile) {
    botaoMenu.addEventListener('click', function () {
      var estaAberto = navMobile.classList.toggle('aberto');
      botaoMenu.classList.toggle('aberto', estaAberto);
      botaoMenu.setAttribute('aria-expanded', estaAberto ? 'true' : 'false');
    });

    // Fecha o menu automaticamente ao clicar em um link
    navMobile.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navMobile.classList.remove('aberto');
        botaoMenu.classList.remove('aberto');
        botaoMenu.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // ---- 2. Cabeçalho ganha sombra ao rolar a página ----
  var cabecalho = document.getElementById('cabecalho');
  var botaoTopo = document.getElementById('botaoTopo');

  function aoRolar() {
    var rolou = window.scrollY > 12;
    if (cabecalho) cabecalho.classList.toggle('rolou', rolou);

    // Mostra o botão "voltar ao topo" só depois de rolar um pouco mais
    var mostrarTopo = window.scrollY > 480;
    if (botaoTopo) botaoTopo.classList.toggle('visivel', mostrarTopo);
  }
  window.addEventListener('scroll', aoRolar, { passive: true });
  aoRolar(); // roda uma vez ao carregar

  // ---- 3. Botão "voltar ao topo" ----
  if (botaoTopo) {
    botaoTopo.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ---- 4. Animação leve de revelar seções ao rolar (IntersectionObserver) ----
  var elementosRevelar = document.querySelectorAll('.revelar');

  if ('IntersectionObserver' in window && elementosRevelar.length) {
    var observador = new IntersectionObserver(function (entradas) {
      entradas.forEach(function (entrada) {
        if (entrada.isIntersecting) {
          entrada.target.classList.add('visivel');
          observador.unobserve(entrada.target); // anima só uma vez, economiza processamento
        }
      });
    }, { threshold: 0.15 });

    elementosRevelar.forEach(function (el) { observador.observe(el); });
  } else {
    // navegadores muito antigos: mostra tudo direto, sem animação
    elementosRevelar.forEach(function (el) { el.classList.add('visivel'); });
  }

  // ---- 5. Ano automático no rodapé ----
  var spanAno = document.getElementById('ano');
  if (spanAno) spanAno.textContent = new Date().getFullYear();

});
