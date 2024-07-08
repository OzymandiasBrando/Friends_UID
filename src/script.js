document.addEventListener("DOMContentLoaded", function () {
  const genshinButton = document.getElementById("genshin_button");
  const starRailButton = document.getElementById("star_rail_button");
  const honkaiImpactButton = document.getElementById("honkai_impact_button");
  const zzzButton = document.getElementById("zzz");

  const genshinImpactDiv = document.querySelector(".genshin_impact");
  const starRailDiv = document.querySelector(".star_rail");
  const honkaiImpactDiv = document.querySelector(".honkai_impact");
  const zzzDiv = document.querySelector(".zzz");

  genshinButton.addEventListener("click", function () {
    toggleActive(genshinImpactDiv);
  });

  starRailButton.addEventListener("click", function () {
    toggleActive(starRailDiv);
  });

  honkaiImpactButton.addEventListener("click", function () {
    toggleActive(honkaiImpactDiv);
  });

  zzzButton.addEventListener("click", function () {
    toggleActive(zzzDiv);
  });

  function toggleActive(activeDiv) {
    genshinImpactDiv.classList.remove("ativo");
    starRailDiv.classList.remove("ativo");
    honkaiImpactDiv.classList.remove("ativo");
    zzzDiv.classList.remove("ativo");

    activeDiv.classList.add("ativo");
  }
});
