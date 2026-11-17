/* Entre Atos · I Oscar ENSA 2026 — comportamento das três páginas */
var VOTE="https://docs.google.com/forms/d/e/1FAIpQLSeQ3g8DbniPOikSQEBfi3-MFi8w9YhtvsVWeGaP23VTjQNOIw/viewform?usp=header";
var LV=[
  "https://youtu.be/GZS9VAI3CIk", 
  "https://youtu.be/kTuZKYo07WU", 
  "https://drive.google.com/file/d/18zI5MwgJr_AX_PEsqZL8-ISSnJcQUf_D/view?pli=1", 
  "https://youtu.be/6qtADsjjcqE", 
  "https://youtu.be/9owwny1hquk", 
  "https://youtu.be/BYbNMQAgm6E", 
  "https://youtu.be/nU4IacQs-Zw", 
  "https://drive.google.com/file/d/1C0wZ5ZRlFQwHmlm-1y1-uQvqyaUlDxLI/view?usp=sharing", 
  "https://youtu.be/Mj1LSNYW0pk", 
  "https://youtu.be/01el5h8RtPk", 
  "https://youtu.be/GfbbdmOCbcY?si=w5jsdxsUCLC84pjW", 
  "https://youtu.be/jeYtUViQDZo", 
  "https://youtu.be/OcDN1hxhA50", 
  "https://youtu.be/WB-EpyQrzLI", 
  "https://youtu.be/38nf3BVvtyA?si=pcx1y-376KMFh9ry", 
  "https://youtu.be/TRUXcxXudzc", 
  "https://youtu.be/qndCj1w0vHg", 
  "https://youtu.be/I9ZrDxVGTDU", 
  "https://youtu.be/ZIfAmWl1WRU", 
  "https://youtu.be/_54c9pz7s-c", 
  "https://youtu.be/DPTGlTh2ygo", 
  "https://youtu.be/1s7SgZFpMgE", 
  "https://youtu.be/t341-H5uQo8", 
  "https://youtu.be/IG29fbcdhqk", 
  "https://youtu.be/nIENfcSgVbI", 
  "https://youtu.be/O8_D6csHmuw", 
  "https://youtu.be/CUs7kiZjy0Q", 
  "https://drive.google.com/file/d/10qZXEkTougfVx01qh43Db7aLRDcB4LXf/view?usp=drivesdk", 
  "https://youtu.be/rY3dWU7iV3k", 
  "https://youtu.be/XVmYkDCYg7s", 
  "https://youtu.be/CRXXfP_avL8", 
  "https://youtu.be/Vs_LfaeU9iI", 
  "https://youtu.be/WGLc1BocCRU"];
var IMG=["assets/cartazes/01.jpg", "assets/cartazes/02.jpg", "assets/cartazes/03.jpg", "assets/cartazes/04.jpg", "assets/cartazes/05.jpg", "assets/cartazes/06.jpg", "assets/cartazes/07.jpg", "assets/cartazes/08.jpg", "assets/cartazes/09.jpg", "assets/cartazes/10.jpg", "assets/cartazes/11.jpg", "assets/cartazes/12.jpg", "assets/cartazes/13.jpg", "assets/cartazes/14.jpg", "assets/cartazes/15.jpg", "assets/cartazes/16.jpg", "assets/cartazes/17.jpg", "assets/cartazes/18.jpg", "assets/cartazes/19.jpg", "assets/cartazes/20.jpg", "assets/cartazes/21.jpg", "assets/cartazes/22.jpg", "assets/cartazes/23.jpg", "assets/cartazes/24.jpg", "assets/cartazes/25.jpg", "assets/cartazes/26.jpg", "assets/cartazes/27.jpg", "assets/cartazes/28.jpg", "assets/cartazes/29.jpg", "assets/cartazes/30.jpg", "assets/cartazes/31.jpg", "assets/cartazes/32.jpg", "assets/cartazes/33.jpg"];
var F=[
["Até quando?","1ª A","6:22","Drama","16","Uma jovem vive um namoro que vira ciúmes e agressões: a violência de gênero vai além da física.",1],
["Ruído branco","1ª A","4:55","Drama","16","Sem diálogos nem trilha, um jovem se isola nas redes até a luz do sol reabrir a conexão com a vida.",1],
["A juventude e a crise de identidade","1ª A","8:29","Drama","15","Uma garota em busca de si sofre bullying e pressão; as amigas viram sua rede de apoio."],
["Nunca o bastante","1ª A","7:57","Drama","14","Lara se compara tanto que não aguenta mais. E se tudo pudesse ter outro final?"],
["O preço do agora","1ª A","7:25","Drama","Livre","Obcecado por status, Lucas perde o amigo Mateus e descobre o valor das amizades verdadeiras."],
["Além do like","1ª B","3:10","Drama","14","Um jovem muda quem é para ser aceito nas redes e se afasta de si mesmo."],
["Algoritmo – O preço de uma escolha","1ª B","10:49","Ficção","14","O celular de Lucas sabe o que ele nunca contou. Quem está no controle?"],
["Mente recomendada","1ª B","6:14","Romance","10","Helena recebe a mensagem “não confie em ninguém”… mas não foi Rafael quem mandou."],
["Insuficiente","1ª B","14:51","Suspense","14","Mirella se compara a uma influenciadora e ganha um Salgueiro dos Desejos com consequências trágicas."],
["Versões: o peso do silêncio","1ª B","13:45","Drama","16","Jade, 16, se compara excessivamente online e enfrenta um grave transtorno alimentar."],
["Cicatrizes invisíveis","1ª B","26:57","Drama","16","Mariana vive um namoro controlador e agressivo até decidir fazer um boletim de ocorrência."],
["Viver ou performar?","1ª B","4:41","Drama","13","Solitário e pressionado a produzir sempre, um jovem esquece de viver com amigos e família."],
["Fake News","1ª B","4:41","Suspense","12","Um boato absurdo corre pela escola até o próprio Felipe desmenti-lo."],
["Quimera","1ª B","—","Ficção","16","Entre julgamentos e narrativas paralelas, a desinformação coloca a identidade em xeque."],
["Em busca de sentido","2ª A","14:49","Documentário","Livre","Entrevistas num parque de São Paulo perguntam: o que dá sentido à vida?"],
["Quanto custa ser alguém?","2ª A","—","Documentário","14","Os efeitos emocionais do consumo excessivo: você busca ter ou ser?"],
["Contra luz","2ª A","10:47","Drama","14","Estela reprimia quem era para evitar julgamentos, até confrontar o passado."],
["Quanto custa pertencer?","2ª A","8:15","Drama","10","Maria Fernanda associa consumo à aceitação social e começa a questionar sua imagem."],
["O peso de ser invisível","2ª A","—","Documentário","Livre","Uma jovem negra enfrenta o racismo na escola e no trabalho."],
["Vidas editadas","2ª A","13:37","Drama","14","Por trás da foto perfeita existe alguém tentando se encaixar."],
["Viver ou Sobreviver?","2ª B","14:09","Drama","Livre","O tempo também é uma pressão na sociedade do desempenho."],
["Invisível aos olhos nus","2ª B","0:57","Animação","Livre","Animação sobre a indiferença de um empresário diante de uma mãe em situação de rua."],
["Reflexos: nem sempre é você","2ª B","9:25","Drama","12","Anne, pressionada pelos padrões de beleza, faz uma cirurgia numa clínica clandestina."],
["Do outro lado da tela","2ª B","10:39","Drama","12","Larissa e Yasmin invejam a vida uma da outra e descobrem que nada é tão perfeito."],
["Entre nós: Nada","2ª B","15:23","Drama","16","Hiroshi e Pedro parecem próximos, mas a solidão se esconde na presença."],
["A desconexão da vida","2ª B","11:12","Suspense","12","Mike supera a timidez e o vício em redes, faz amigos e aprende a se sentir bem."],
["O silêncio do meu grito","3ª A","11:43","Drama","—","Angela e Luís têm um romance exposto nas redes que termina em enganação."],
["Âmago","3ª A","12:41","Drama","16","Cinco jovens, cinco dores, e a importância de se reconstruir e recomeçar."],
["A cultura da comparação","3ª A","5:13","Doc/Drama","Livre","Quatro adolescentes escondem inseguranças atrás de uma aparência feliz."],
["A era do fake","3ª A","2:13","Comédia","12","Com humor, mostra como notícias falsas viram bola de neve."],
["Até que ponto?","3ª A","8:26","Drama","—","Uma piada ofensiva leva Lívia a um cancelamento: justiça ou crueldade?"],
["Vitrine","3ª A","11:37","Drama","—","Quanto da própria vida alguém está disposto a vender para ser visto?"],
["O preço de se encaixar…","3ª A","4:27","Ficção","—","Crítica aos padrões estéticos e ao perigo das clínicas clandestinas."]];var AW=[
["🎬","Melhor Direção",[["ÂMAGO",27],["INSUFICIENTE",8],["EM BUSCA DE SENTIDO",14],["CONTRA LUZ!!!",16],["O PREÇO DO AGORA!",4],["QUIMERA",13],["ATÉ QUANDO?",0]]],
["📝","Melhor Roteiro",[["ÂMAGO",27],["INSUFICIENTE",8],["EM BUSCA DE SENTIDO",14],["CONTRA LUZ",16],["ENTRE NÓS: NADA!",24],["ATÉ QUANDO?",0],["NUNCA O BASTANTE.",3],["VERSÕES",9],["QUIMERA",13],["MENTE RECOMENDADA.",7],["RUÍDO BRANCO",1]]],
["📸","Melhor Fotografia",[["EM BUSCA DE SENTIDO",14],["CONTRA LUZ",16],["ENTRE NÓS: NADA!",24],["VITRINE",31],["VERSÕES",9]]],
["🎵","Melhor Trilha Sonora",[["CONTRA LUZ!!!",16],["MENTE RECOMENDADA",7],["ÂMAGO",27],["VIVER OU SOBREVIVER",20],["VERSÕES",9]]],
["🎭","Melhor Ator / Melhor Atriz",[["ÂMAGO",27],["INSUFICIENTE",8],["CONTRA LUZ!!!",16],["VITRINE",31],["MENTE RECOMENDADA",7],["A DESCONEXÃO DA VIDA.",25]]],
["🏆","Melhor Curta-Metragem – Júri Popular",[["ÂMAGO",27],["INSUFICIENTE",8],["CONTRA LUZ",16],["EM BUSCA DE SENTIDO",14],["VIDAS EDITADAS",19],["VIVER OU SOBREVIVER",20],["ENTRE NÓS: NADA!",24]],1]];

/* Todos os 33 curtas concorrem ao Júri Popular. */
AW[5][2] = F.map(function (f, i) { return [f[0].toUpperCase(), i]; });

var APURACAO_MANUAL = window.APURACAO_MANUAL || {};
var VENCEDORES_MANUAIS = window.VENCEDORES_MANUAIS || {};
var PAGE = document.body.getAttribute("data-page") || "mostra";
var fl = "Todas";
var qv = "";
var ci = 0;
var ph = 0;
var ceremonyTimer = null;

function $(id) { return document.getElementById(id); }
function escapeHtml(value) {
  return String(value == null ? "" : value).replace(/[&<>"']/g, function (ch) {
    return ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[ch];
  });
}
function tags(index) {
  return AW.filter(function (category) {
    return category[2].some(function (nominee) { return nominee[1] === index; });
  });
}
function shortCategory(name) {
  return name.replace("Melhor Curta-Metragem – ", "");
}
function observeReveals() {
  var items = document.querySelectorAll(".rv:not(.in)");
  if (!("IntersectionObserver" in window)) {
    Array.prototype.forEach.call(items, function (el) { el.classList.add("in"); });
    return;
  }
  if (!window.__entreAtosObserver) {
    window.__entreAtosObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          window.__entreAtosObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
  }
  Array.prototype.forEach.call(items, function (el) { window.__entreAtosObserver.observe(el); });
}
function initMosaic() {
  var mosaic = $("mos");
  if (!mosaic) return;
  var html = "";
  for (var col = 0; col < 4; col++) {
    html += "<div>";
    IMG.slice(col * 8, col * 8 + 8).forEach(function (src) {
      html += '<img alt="" loading="lazy" src="' + src + '">';
    });
    html += "</div>";
  }
  mosaic.innerHTML = html;
}
function indicationText(index) {
  var names = tags(index).map(function (category) { return shortCategory(category[1]); });
  return names.length ? "🏆 Indicado para: " + names.join(" · ") : "Sem indicação cadastrada";
}
function renderTiles() {
  var grid = $("tg");
  if (!grid) return;
  var html = "";
  F.forEach(function (film, index) {
    if (fl !== "Todas" && film[1].charAt(0) !== fl.charAt(0)) return;
    if (qv && (film[0] + " " + film[5]).toLowerCase().indexOf(qv) < 0) return;
    html += '<button class="tl rv" type="button" data-movie="' + index + '">' +
      '<img loading="lazy" alt="Cartaz de ' + escapeHtml(film[0]) + '" src="' + IMG[index] + '">' +
      '<span class="tc"><small>' + escapeHtml(film[1] + " · " + film[2]) + '</small>' +
      '<b>' + escapeHtml(film[0]) + '</b><em>' + escapeHtml(indicationText(index)) + '</em></span></button>';
  });
  grid.innerHTML = html || '<p style="color:var(--mu)">Nenhum curta encontrado.</p>';
  observeReveals();
}
function renderCategoryCards() {
  var grid = $("cg");
  if (!grid) return;
  var html = "";
  AW.forEach(function (category, categoryIndex) {
    var isPopular = categoryIndex === 5;
    html += '<article class="cc rv' + (isPopular ? ' jj' : '') + '">' +
      '<div class="ch"><span class="no">0' + (categoryIndex + 1) + '</span>' +
      '<span class="ic">' + category[0] + '</span><div><h3>' + escapeHtml(category[1]) +
      '</h3><small>' + category[2].length + ' indicados</small></div></div>' +
      (isPopular ? '<span class="bd">⭐ VOTAÇÃO DO PÚBLICO · TODOS OS CURTAS</span>' : '') +
      '<ol>' + category[2].map(function (nominee, nomineeIndex) {
        var movieIndex = nominee[1];
        return '<li style="--d:' + nomineeIndex + '"><button type="button" data-movie="' + movieIndex + '">' +
          '<img loading="lazy" alt="" src="' + IMG[movieIndex] + '"><span>' +
          escapeHtml(F[movieIndex][0]) + '</span></button></li>';
      }).join("") + '</ol>' +
      (isPopular ? '<a class="btn g" target="_blank" rel="noopener" href="' + VOTE + '">⭐ Votar no Júri Popular</a>' : '') +
      '</article>';
  });
  grid.innerHTML = html;
  observeReveals();
}
function renderPopularList() {
  var grid = $("popular-list");
  if (!grid) return;
  grid.innerHTML = F.map(function (film, index) {
    return '<button class="people-card rv" type="button" data-movie="' + index + '">' +
      '<img loading="lazy" src="' + IMG[index] + '" alt="Cartaz de ' + escapeHtml(film[0]) + '">' +
      '<b>' + escapeHtml(film[0]) + '</b><small>' + escapeHtml(film[1]) + '</small></button>';
  }).join("");
  observeReveals();
}
function openMovie(index) {
  var film = F[index];
  if (!film || !$("dw")) return;
  var categories = tags(index);
  var categoryHtml = categories.length
    ? categories.map(function (category) { return '<span>' + escapeHtml(category[1]) + '</span>'; }).join("")
    : '<span class="no-indication">Nenhuma indicação cadastrada.</span>';
  var videoButton = LV[index]
    ? '<a class="btn g" target="_blank" rel="noopener" href="' + LV[index] + '">▶ Assistir ao curta</a>'
    : '<span class="no-indication">Vídeo ainda não disponível.</span>';
  $("dw").innerHTML = '<div class="dwb" data-close-modal></div>' +
    '<div class="dwp"><button class="x" type="button" data-close-modal aria-label="Fechar">✕</button>' +
    '<div class="dwi"><img src="' + IMG[index] + '" alt="Cartaz de ' + escapeHtml(film[0]) + '">' +
    '<div><p class="k">' + escapeHtml(film[1]) + '</p><h3>' + escapeHtml(film[0]) + '</h3>' +
    '<p class="m">⏱ ' + escapeHtml(film[2]) + ' · ' + escapeHtml(film[3]) + ' · ' +
    escapeHtml(film[4]) + (film[4] !== "Livre" && film[4] !== "—" ? "+" : "") + '</p>' +
    '<p>' + escapeHtml(film[5]) + '</p><div class="ac">' + videoButton + '</div>' +
    '<div class="indication-panel"><h4>Indicado para</h4><div class="indication-tags">' + categoryHtml +
    '</div></div></div></div></div>';
  $("dw").className = "on";
  document.body.style.overflow = "hidden";
}
function closeMovie() {
  var modal = $("dw");
  if (modal) modal.className = "";
  document.body.style.overflow = "";
}
function getPopularResults() {
  var values = [];
  F.forEach(function (film, index) {
    var raw = APURACAO_MANUAL[film[0]];
    if (raw === null || raw === undefined || raw === "") return;
    var votes = Number(raw);
    if (!Number.isFinite(votes) || votes < 0) return;
    values.push({ index: index, votes: Math.floor(votes) });
  });
  return values.sort(function (a, b) { return b.votes - a.votes || F[a.index][0].localeCompare(F[b.index][0]); });
}
function renderBoard() {
  var board = $("bd");
  if (!board) return;
  var results = getPopularResults();
  if (!results.length) {
    board.innerHTML = '<div class="board-empty">A apuração ainda não foi preenchida. Abra o arquivo <b>apuracao.js</b> e informe a quantidade de votos de cada curta em <b>APURACAO_MANUAL</b>.</div>';
    return;
  }
  var top = results.slice(0, 5);
  var max = Math.max.apply(null, top.map(function (item) { return item.votes; }).concat([1]));
  board.innerHTML = top.map(function (item, position) {
    return '<div class="bl"><b>' + (position + 1) + '</b><img src="' + IMG[item.index] + '" alt="">' +
      '<div><span>' + escapeHtml(F[item.index][0]) + '</span><div class="trk"><i class="fill" data-w="' +
      Math.round(item.votes / max * 100) + '"></i></div></div><em>' + item.votes + '</em></div>';
  }).join("");
  setTimeout(function () {
    Array.prototype.forEach.call(board.querySelectorAll(".fill"), function (bar) {
      bar.style.width = bar.getAttribute("data-w") + "%";
    });
  }, 80);
}
function findMovieByTitle(title) {
  if (!title) return -1;
  var normalized = String(title).trim().toLocaleLowerCase("pt-BR");
  return F.findIndex(function (film) { return film[0].toLocaleLowerCase("pt-BR") === normalized; });
}
function ceremonyWinner(categoryIndex) {
  if (categoryIndex === 5) {
    var results = getPopularResults();
    if (!results.length) return { indexes: [], votes: null };
    var highest = results[0].votes;
    return { indexes: results.filter(function (item) { return item.votes === highest; }).map(function (item) { return item.index; }), votes: highest };
  }
  var title = VENCEDORES_MANUAIS[AW[categoryIndex][1]];
  var movieIndex = findMovieByTitle(title);
  return { indexes: movieIndex >= 0 ? [movieIndex] : [], votes: null };
}
function openCeremony() {
  if (!$("cer")) return;
  if (ceremonyTimer) clearTimeout(ceremonyTimer);
  $("cer").className = "on";
  ci = 0;
  ph = 0;
  try { if (document.documentElement.requestFullscreen) document.documentElement.requestFullscreen(); } catch (e) {}
  drawCeremony();
}
function drawCeremony() {
  var target = $("cs");
  if (!target) return;
  var category = AW[ci];
  if (!category) return;
  var isPopular = ci === 5;
  var nominees = category[2];
  if (ph === 0) {
    target.innerHTML = '<div class="k">Categoria ' + (ci + 1) + ' de ' + AW.length + '</div><h2>' +
      escapeHtml(category[1]) + '</h2><div class="k">E os indicados são…</div><div class="cn ' +
      (isPopular ? 'popular-nominees' : '') + '">' + nominees.map(function (nominee, position) {
        var index = nominee[1];
        return '<figure style="animation-delay:' + (Math.min(position, 8) * .06) + 's"><img src="' + IMG[index] +
          '" alt=""><figcaption>' + escapeHtml(F[index][0]) + '</figcaption></figure>';
      }).join("") + '</div><button class="btn g" type="button" onclick="nextCeremonyStep()">✉️ ABRIR O ENVELOPE</button>';
  } else if (ph === 1) {
    target.innerHTML = '<div class="k">' + escapeHtml(category[1]) + '</div><div class="env">✉️</div><h2>E O VENCEDOR É…</h2>';
  } else {
    var result = ceremonyWinner(ci);
    if (!result.indexes.length) {
      target.innerHTML = '<div class="k">' + escapeHtml(category[1]) + '</div><div class="tro">⏳</div>' +
        '<h2>Resultado ainda não lançado</h2><p class="tema cer-wait">' +
        (isPopular ? 'Preencha os votos em APURACAO_MANUAL, no arquivo apuracao.js.' :
          'Preencha o título do curta vencedor em VENCEDORES_MANUAIS, no arquivo apuracao.js.') +
        '</p><button class="btn g" type="button" onclick="nextCeremonyStep()">' +
        (ci < AW.length - 1 ? 'PRÓXIMA CATEGORIA ▶' : 'ENCERRAR 🏆') + '</button>';
      return;
    }
    target.innerHTML = '<div class="k">' + escapeHtml(category[1]) + '</div><div class="win">' +
      result.indexes.map(function (index) {
        return '<img src="' + IMG[index] + '" alt="Cartaz de ' + escapeHtml(F[index][0]) + '"><div><h1>' +
          escapeHtml(F[index][0]) + '</h1>' + (result.votes !== null ? '<p class="cer-winner-count">' + result.votes +
            ' voto(s)</p>' : '<p class="tema">Vencedor cadastrado manualmente</p>') + '</div>';
      }).join("") + '</div>' + (result.indexes.length > 1 ? '<p class="tema">Empate na apuração.</p>' : '') +
      '<button class="btn g" type="button" onclick="nextCeremonyStep()">' +
      (ci < AW.length - 1 ? 'PRÓXIMA CATEGORIA ▶' : 'ENCERRAR 🏆') + '</button>';
    celebrate();
  }
}
function nextCeremonyStep() {
  if (ph === 0) {
    ph = 1;
    drawCeremony();
    ceremonyTimer = setTimeout(function () { ph = 2; drawCeremony(); }, 1900);
  } else if (ph === 2) {
    if (ceremonyTimer) clearTimeout(ceremonyTimer);
    if (ci < AW.length - 1) { ci++; ph = 0; drawCeremony(); }
    else endCeremony();
  }
}
function endCeremony() {
  var target = $("cs");
  if (target) target.innerHTML = '<div class="tro">🏆</div><h1>OBRIGADO!</h1><p class="tema">I Oscar ENSA 2026 · Colégio Nossa Senhora Aparecida</p><button class="btn o" onclick="closeCeremony()">FECHAR</button>';
  celebrate();
}
function closeCeremony() {
  if (ceremonyTimer) clearTimeout(ceremonyTimer);
  if ($("cer")) $("cer").className = "";
  try { if (document.fullscreenElement && document.exitFullscreen) document.exitFullscreen(); } catch (e) {}
}
function celebrate() {
  for (var i = 0; i < 48; i++) {
    var piece = document.createElement("i");
    piece.className = "cf";
    piece.style.left = Math.random() * 100 + "vw";
    piece.style.background = ["#d4af37", "#f6e7a8", "#e63946", "#0b5aa8", "#fff"][i % 5];
    piece.style.animationDuration = 2 + Math.random() * 2.5 + "s";
    piece.style.animationDelay = Math.random() * .6 + "s";
    document.body.appendChild(piece);
    setTimeout(function (el) { if (el.parentNode) el.remove(); }, 5500, piece);
  }
}
function initFilters() {
  var filterBox = $("fl");
  var search = $("q");
  if (!filterBox || !search) return;
  ["Todas", "1ª série", "2ª série", "3ª série"].forEach(function (label, index) {
    var button = document.createElement("button");
    button.type = "button";
    button.textContent = label;
    if (index === 0) button.className = "on";
    button.addEventListener("click", function () {
      fl = label;
      Array.prototype.forEach.call(filterBox.querySelectorAll("button"), function (item) { item.className = ""; });
      button.className = "on";
      renderTiles();
    });
    filterBox.insertBefore(button, search);
  });
  search.addEventListener("input", function () { qv = this.value.toLowerCase(); renderTiles(); });
}
function initPage() {
  initMosaic();
  Array.prototype.forEach.call(document.querySelectorAll("[data-vote]"), function (link) { link.href = VOTE; });
  if (PAGE === "mostra") { initFilters(); renderTiles(); }
  if (PAGE === "indicados") renderCategoryCards();
  if (PAGE === "cerimonia") { renderPopularList(); renderBoard(); }
  document.addEventListener("click", function (event) {
    var movie = event.target.closest("[data-movie]");
    if (movie) { openMovie(Number(movie.getAttribute("data-movie"))); return; }
    if (event.target.closest("[data-close-modal]")) closeMovie();
  });
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") { closeMovie(); closeCeremony(); }
    if ($("cer") && $("cer").className === "on" && (event.key === "Enter" || event.key === " " || event.key === "ArrowRight")) {
      event.preventDefault();
      nextCeremonyStep();
    }
  });
  observeReveals();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initPage);
} else {
  initPage();
}
