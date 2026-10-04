/* ============================================================
   CONFIG.JS — Àgora
   Esquelet comú (mateix ordre a totes les webs):
   1 Negoci · 2 Rutes · 3 Imatges · 4 Navbar · 5 Hero · 6 Qui som
   7 Contingut del projecte · 8 On som · 9 Seguretat · 10 Altres
   ============================================================ */

const CONFIG = {

// ═══ 1. NEGOCI ═══════════════════════════════════════════════════════════
COOK:           "cookies_agora",
NOM:            "àgora",
LOGO:           "logo/logoAGtrans.png",
LOGO_T:         "",
SLOGAN:         "Plaça Vella",
TELEFON:        "93 788 72 91",     TELEFON_LABEL:  "Teléfono",    TELEFON_ICO: "📞",
MOBIL:          "625 52 52 79",
WHATSAPP:       "https://wa.me/34", WHATSAPPLABEL:  "💬 Escríbenos por WhatsApp",
EMAIL:          "agora@alterwebstudio.com",   EMAIL_LABEL: "",   EMAIL_ICO: "",   // alternativa: agora26vella@gmail.com
ADRECA:         "Carrer de Jaume Cantarer, 4, 08221 Terrassa, Barcelona",
ADRECA_LABEL:   "Dirección",
ADRECA_ICO:     "📍",
HORA_0:         "Horaris",   HR: "",
HORA_1:         "Dilluns a dijous: 08:00 – 23:00h",
HORA_2:         "Divendres i dissabte: 08:00 – 24:00h",
HORA_3:         "Diumenge: 09:00 - 23:00h",
INSTAGRAM:      "https://www.instagram.com/agoraplazavella",
FACEBOOK:       "https://www.facebook.com/profile.php?id=100054618451503",
EMAIL_SUPORT:   "info@alterwebstudio.com",

// ═══ 2. RUTES ════════════════════════════════════════════════════════════
REPO_URL:       "https://altervector.github.io/agora/",
BASE_URL:       "./",
BASE_WORKER:    "https://agora.altervector.workers.dev",
URL_OFICIAL:    "https://agora.alterwebstudio.com",
ASSETS:         "https://avsets.pages.dev/",
URL_MAPS:       "https://www.google.com/maps/search/?api=1&query=Agora+Plaza+Vella",
URL_RESSENYES:  "https://search.google.com/local/writereview?placeid=ChIJGU4gT-qSpBIRLvqRcvS-P7E&source=g.page.m.ia._&laa=nmx-review-solicitation-ia2",

// ═══ 3. IMATGES ══════════════════════════════════════════════════════════
BACKGROUND:     "",   // ← es canvia al CSS (html{})
BLOC_HERO:      "images/agora/hero-agora.png",
QR:             "qr/qr-agoraplazavella.png",

// ═══ 4. NAVBAR ═══════════════════════════════════════════════════════════
// (pendent: aquí anirà la llista NAV de la hamburguesa)

// ═══ 5. HERO ═════════════════════════════════════════════════════════════
HERO_EYEBROW:   "",
HERO_TITOL:     "",
HERO_BOTO_PRI:  "",
HERO_BOTO_SEC:  "",
HERO_BOTO:      "Descobreix-nos",

// ═══ 6. QUI SOM ══════════════════════════════════════════════════════════
QUI_SOM:        "Qui som...",
QUI_SOM_TIT:    "",
QUI_SOM_DESC:   "El nostre local està dedicat als serveis de restauració. Oferim cuina mediterrània i espanyola, incloent esmorzars, dinars, sopars i tapes, amb opcions per menjar al local, a la terrassa o per emportar. Us brindem un menjar de qualitat, ambient acollidor i servei amable.",

// ═══ 7. CONTINGUT DEL PROJECTE (diferent a cada web) ═════════════════════

// ── 7.1 Blocs de menús ──
SECCIO_TITOL:   "Els nostres Menús",

BLOC1:          "images/agora/diari.png",
BLOC1_TITOL:    "Menú Diari",
BLOC1_DESC:     "De dilluns a divendres al migdia. Primer, segon, postre i beguda.",

BLOC2:          "images/agora/finde.png",
BLOC2_TITOL:    "Menú Cap de Setmana",
BLOC2_DESC:     "Dissabte i diumenge. Una selecció especial per gaudir en família.",

BLOC3:          "images/agora/grups.png",
BLOC3_TITOL:    "Menú Grups",
BLOC3_DESC:     "Per a celebracions i esdeveniments. Per a un mínim de 10 persones i amb reserva concertada.",

BLOC4:          "",
BLOC4_TITOL:    "",
BLOC4_DESC:     "",

// ── 7.2 Reserves ──
RESERVES:       "Fes la teva Reserva",

// ═══ 8. ON SOM ═══════════════════════════════════════════════════════════
ON_SOM:         "",
ON_SOM_TIT:     "",

// ═══ 9. SEGURETAT ════════════════════════════════════════════════════════
//SITIOS_SEGUROS: ["alterwebstudio.com", "altervector.com", "pages.dev", "altervector.github.io", "localhost", "127.0.0.1"],
SITIOS_SEGUROS: ["alterwebstudio.com", "altervector.com", "pages.dev", "altervector.github.io"],

// ═══ 10. ALTRES ══════════════════════════════════════════════════════════

// ── 10.1 Colors (per si cal canviar-los des de JS) ──
COLOR_PRINCIPAL: "#2c3e35",
COLOR_ACCENT:    "#c8973a",

// ── 10.2 Colors de l'administrador (optimitzats per a fons fosc) ──
COLORS_SECCIONS: {
    "Entrants":       "#00fe83", // Verd neó clar
    "Primer":         "#00aeff", // Blau cel elèctric
    "Segon":          "#FFB74D", // Turquesa brillant
    "Para picar":     "#1DE9B6", // Taronja pastís clar
    "Cocas":          "#ed8efd", // Violeta neó
    "Hamburguesas":   "#A7FFEB", // Rosa fúcsia brillant
    "Fríos":          "#ff2c73", // Aquamarina molt clar
    "Combinados":     "#e5d436", // Taronja corall elèctric
    "Postres":        "#FF6E40", // Grog llimona (destaca moltíssim)
    "Vins Blancs":    "#d2ff9e", // Verd llima clar
    "Vins Negres":    "#ba92ff", // Espígol / lila clar (no es perd amb el fons)
    "Vins Rosats":    "#ff357c", // Rosa pastís clar
    "Vins Escumosos": "#80DEEA", // Blau cian clar
    "Cocteles":       "#FFFF00", // Grog pur elèctric
    "Peu":            "#E0E0E0"  // Blanc grisós clar (perfectament legible)
},
};