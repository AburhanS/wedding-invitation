/* ayarlar */
const CONFIG = {
  // Google Apps Script web app adresi:
  SCRIPT_URL: "https://script.google.com/macros/s/AKfycbweJiJr7YHETkFyD9rX4F-TtAIz2-78crv2rIePm3339iylZ1fATMr2RH_kEYrpZQZe/exec",
  MAPS_URL: "https://www.google.com/maps/place/Party+Centrum+Royal/@51.4238543,4.9320892,17z/data=!3m1!4b1!4m6!3m5!1s0x47c6babd0fa853cb:0xd7ca0a3075d330ee!8m2!3d51.423851!4d4.9346641!16s%2Fg%2F11cp7k63mk",
  DATE: "20.08.2026",
  TIME: "16.00",
  // "Takvime Ekle" için başlangıç/bitiş (UTC; 16.00–23.00 Hollanda yaz saati).
  ICS_START: "20260820T140000Z",
  ICS_END:   "20260820T210000Z",
  // harita seçenekleri (koordinat: 51.423851, 4.9346641)
  MAPS_APPLE: "https://maps.apple.com/?q=Party%20Centrum%20Royal&ll=51.423851,4.9346641",
  MAPS_WAZE:  "https://waze.com/ul?ll=51.423851,4.9346641&navigate=yes",
};

/* metinler - TR & NL */
const I18N = {
  tr: {
    deadline: "Yanıtınızı 19 Temmuz'a kadar bekliyoruz.",
    d_addr: "Adres", d_maps: "Yol Tarifi", d_cal: "Takvime Ekle",
    opt_gcal: "Google Takvim", opt_acal: "Apple Takvim",
    cal_summary: "Sinem & Ahmet — Düğün",
    countdown: "Düğüne {n} gün", countdown_1: "Düğüne 1 gün",
    countdown_today: "Bugün! 🌿",
    r_title: "Katılımınızı Bildirin",
    f_name: "İsim Soyisim", f_name_ph: "Adınız ve soyadınız",
    f_attend: "Düğünümüze katılıyor musunuz?",
    yes: "Evet", no: "Hayır",
    f_guests: "Misafirler",
    f_guests_btn: "Misafir listesi",
    count_one: "1 kişi", count_many: "{n} kişi",
    f_baby: "Eklediğiniz misafirlerden kaçı bebek?",
    f_baby_hint: "Kucakta oturacak, ayrı sandalye gerektirmeyen bebekler",
    e_baby: "Bebek sayısı misafir sayısından fazla olamaz.",
    g_note: "Bebekler dahil, gelecek herkesi ekleyin.",
    p_calc: "Özet",
    w_guest: ["misafir", "misafir"],
    w_baby: ["bebek", "bebek"],
    w_chair: ["sandalye", "sandalye"],
    f_transport: "Ulaşımınızı kendiniz sağlayabiliyor musunuz?",
    f_msg: "Çifte notunuz (isteğe bağlı)",
    f_msg_ph: "Dilerseniz bize birkaç söz bırakın...",
    f_preview: "Önizle",
    g_title: "Misafir Listesi", g_you: "(siz)",
    g_add: "+ Kişi ekle", g_save: "Kaydet", g_cancel: "Vazgeç",
    g_ph: "İsim soyisim",
    g_err_empty: "Lütfen boş isim satırlarını doldurun veya silin.",
    e_name: "Lütfen isminizi yazın.",
    e_name_first: "Önce isminizi yazın, ardından misafir listesini açabilirsiniz.",
    e_attend: "Lütfen katılım durumunuzu seçin.",
    e_transport: "Lütfen ulaşım sorusunu yanıtlayın.",
    p_title: "Önizleme",
    p_attend: "Katılım", p_guests: "Misafirler", p_baby: "Bebek",
    p_transport: "Ulaşım", p_msg: "Notunuz",
    p_yes: "Evet, katılıyoruz 🌿", p_no: "Maalesef katılamıyoruz",
    p_tr_yes: "Kendimiz sağlıyoruz", p_tr_no: "Yardıma ihtiyacımız olabilir",
    p_edit: "Düzenle", p_send: "Onayla ve Gönder", p_sending: "Gönderiliyor…",
    e_send: "Gönderilemedi, lütfen tekrar deneyin.",
    e_noscript: "Gönderim adresi henüz ayarlanmadı (KURULUM.md → Adım 2).",
    t_yes_h: "Cevabınız alındı ✓",
    t_yes_p: "En kısa sürede güzel anılarda buluşmak dileğiyle.",
    t_no_h: "Teşekkürler 🤍",
    t_no_p: "Birlikte olamasak da, güzel dileklerinizi kalbimizde taşıyacağız.",
  },
  nl: {
    deadline: "Wij ontvangen uw antwoord graag vóór 19 juli.",
    d_addr: "Adres", d_maps: "Routebeschrijving", d_cal: "Zet in agenda",
    opt_gcal: "Google Agenda", opt_acal: "Apple Agenda",
    cal_summary: "Bruiloft Sinem & Ahmet",
    countdown: "Nog {n} dagen", countdown_1: "Nog 1 dag",
    countdown_today: "Vandaag! 🌿",
    r_title: "Laat het ons weten",
    f_name: "Voor- en achternaam", f_name_ph: "Uw voor- en achternaam",
    f_attend: "Bent u aanwezig op onze bruiloft?",
    yes: "Ja", no: "Nee",
    f_guests: "Gasten",
    f_guests_btn: "Gastenlijst",
    count_one: "1 persoon", count_many: "{n} personen",
    f_baby: "Hoeveel van uw gasten zijn baby's?",
    f_baby_hint: "Baby's op schoot, zonder eigen stoel",
    e_baby: "Het aantal baby's kan niet groter zijn dan het aantal gasten.",
    g_note: "Voeg iedereen toe die meekomt, inclusief baby's.",
    p_calc: "Overzicht",
    w_guest: ["gast", "gasten"],
    w_baby: ["baby", "baby's"],
    w_chair: ["stoel", "stoelen"],
    f_transport: "Regelt u uw eigen vervoer?",
    f_msg: "Een berichtje voor het bruidspaar (optioneel)",
    f_msg_ph: "Laat gerust een paar woorden achter...",
    f_preview: "Voorbeeld",
    g_title: "Gastenlijst", g_you: "(u)",
    g_add: "+ Gast toevoegen", g_save: "Opslaan", g_cancel: "Annuleren",
    g_ph: "Voor- en achternaam",
    g_err_empty: "Vul de lege naamvelden in of verwijder ze.",
    e_name: "Vul uw naam in.",
    e_name_first: "Vul eerst uw naam in, daarna kunt u de gastenlijst openen.",
    e_attend: "Geef aan of u aanwezig bent.",
    e_transport: "Beantwoord de vervoersvraag.",
    p_title: "Voorbeeld",
    p_attend: "Aanwezigheid", p_guests: "Gasten", p_baby: "Baby",
    p_transport: "Vervoer", p_msg: "Uw bericht",
    p_yes: "Ja, wij zijn erbij 🌿", p_no: "Helaas kunnen wij er niet bij zijn",
    p_tr_yes: "Wij regelen eigen vervoer", p_tr_no: "Wij hebben mogelijk hulp nodig",
    p_edit: "Bewerken", p_send: "Bevestigen en versturen", p_sending: "Versturen…",
    e_send: "Versturen is mislukt, probeer het opnieuw.",
    e_noscript: "Verzendadres is nog niet ingesteld (KURULUM.md → stap 2).",
    t_yes_h: "Uw antwoord is ontvangen ✓",
    t_yes_p: "We kijken ernaar uit om samen mooie herinneringen te maken.",
    t_no_h: "Dank u wel 🤍",
    t_no_p: "Ook al kunnen we er niet samen zijn, uw lieve wensen dragen we in ons hart.",
  }
};

/* durum */
const state = {
  lang: "tr",
  attending: null,   // 'yes' | 'no'
  transport: null,   // 'yes' | 'no'
  extraGuests: [],   // ana kişi hariç, kaydedilmiş isimler
  babies: 0,
};
const $ = id => document.getElementById(id);
const t = key => I18N[state.lang][key];

/* dil */
function setLang(l){
  state.lang = l;
  document.documentElement.lang = l;
  $("langTR").classList.toggle("on", l === "tr");
  $("langNL").classList.toggle("on", l === "nl");
  document.querySelectorAll("[data-i18n]").forEach(el => {
    el.textContent = t(el.dataset.i18n);
  });
  document.querySelectorAll("[data-i18n-ph]").forEach(el => {
    el.placeholder = t(el.dataset.i18nPh);
  });
  renderCount();
  renderCountdown();
  $("formError").textContent = "";
  $("guestError").textContent = "";
}

/* geri sayım */
function renderCountdown(){
  const [d, m, y] = CONFIG.DATE.split(".").map(Number);
  const target = new Date(y, m - 1, d);
  const today = new Date(); today.setHours(0, 0, 0, 0);
  const days = Math.round((target - today) / 86400000);
  const el = $("countdown");
  if(days > 1)       el.textContent = t("countdown").replace("{n}", days);
  else if(days === 1) el.textContent = t("countdown_1");
  else if(days === 0) el.textContent = t("countdown_today");
  else el.textContent = "";
}

/* harita / takvim seçici */
const VENUE = "Evenementen & Partycentrum Royal, Schaluinen 11A, 5111 HB Baarle-Nassau";
function openChooser(kind){
  const list = $("chooserList");
  list.innerHTML = "";
  const opts = kind === "maps" ? [
    { label: "Google Maps", href: CONFIG.MAPS_URL },
    { label: "Apple Maps",  href: CONFIG.MAPS_APPLE },
    { label: "Waze",        href: CONFIG.MAPS_WAZE },
  ] : [
    { label: t("opt_gcal"), href: gcalURL() },
    { label: t("opt_acal"), action: downloadICS },
    { label: "Outlook",     href: outlookURL() },
  ];
  $("chooserTitle").textContent = kind === "maps" ? t("d_maps") : t("d_cal");
  opts.forEach(o => {
    let el;
    if(o.href){
      el = document.createElement("a");
      el.href = o.href; el.target = "_blank"; el.rel = "noopener";
      el.addEventListener("click", closeChooser);
    } else {
      el = document.createElement("button");
      el.type = "button";
      el.onclick = () => { o.action(); closeChooser(); };
    }
    el.className = "opt";
    el.textContent = o.label;
    list.appendChild(el);
  });
  $("chooserModal").classList.remove("hidden");
}
function closeChooser(){ $("chooserModal").classList.add("hidden"); }

function gcalURL(){
  return "https://calendar.google.com/calendar/render?action=TEMPLATE"
    + "&text=" + encodeURIComponent(t("cal_summary"))
    + "&dates=" + CONFIG.ICS_START + "/" + CONFIG.ICS_END
    + "&location=" + encodeURIComponent(VENUE)
    + "&details=" + encodeURIComponent(location.href.split("#")[0]);
}
function outlookURL(){
  const iso = s => s.replace(/^(\d{4})(\d{2})(\d{2})T(\d{2})(\d{2})(\d{2})Z$/, "$1-$2-$3T$4:$5:$6Z");
  return "https://outlook.live.com/calendar/0/deeplink/compose?path=%2Fcalendar%2Faction%2Fcompose&rru=addevent"
    + "&subject=" + encodeURIComponent(t("cal_summary"))
    + "&startdt=" + iso(CONFIG.ICS_START) + "&enddt=" + iso(CONFIG.ICS_END)
    + "&location=" + encodeURIComponent(VENUE);
}

/* takvime ekle (.ics - Apple) */
function downloadICS(){
  const ics = [
    "BEGIN:VCALENDAR", "VERSION:2.0",
    "PRODID:-//Sinem & Ahmet//Dugun//TR",
    "BEGIN:VEVENT",
    "UID:sinem-ahmet-20260820@dugun",
    "DTSTAMP:" + new Date().toISOString().replace(/[-:]/g, "").split(".")[0] + "Z",
    "DTSTART:" + CONFIG.ICS_START,
    "DTEND:" + CONFIG.ICS_END,
    "SUMMARY:" + t("cal_summary"),
    "LOCATION:Evenementen & Partycentrum Royal\\, Schaluinen 11A\\, 5111 HB Baarle-Nassau",
    "URL:" + location.href.split("#")[0],
    "END:VEVENT", "END:VCALENDAR"
  ].join("\r\n");
  const blob = new Blob([ics], { type: "text/calendar;charset=utf-8" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "sinem-ahmet-dugun.ics";
  document.body.appendChild(a);
  a.click();
  setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 400);
}

/* katılım */
function setAttend(v){
  state.attending = v;
  $("attYes").classList.toggle("on", v === "yes");
  $("attNo").classList.toggle("on", v === "no");
  $("attendExtra").classList.toggle("hidden", v !== "yes");
  $("formError").textContent = "";
}
function setTransport(v){
  state.transport = v;
  $("trYes").classList.toggle("on", v === "yes");
  $("trNo").classList.toggle("on", v === "no");
  $("formError").textContent = "";
}

/* bebek (kural: bebek <= misafir) */
function stepBaby(d){
  state.babies = Math.min(totalGuests(), Math.max(0, state.babies + d));
  $("babyNum").textContent = state.babies;
}
function clampBabies(){
  if(state.babies > totalGuests()){
    state.babies = totalGuests();
    $("babyNum").textContent = state.babies;
  }
}

/* misafir sayacı */
function totalGuests(){
  return ($("mainName").value.trim() ? 1 : 0) + state.extraGuests.length;
}
function renderCount(){
  clampBabies();
  const n = totalGuests();
  $("guestCount").textContent =
    n === 0 ? "–" : (n === 1 ? t("count_one") : t("count_many").replace("{n}", n));
}
$("mainName").addEventListener("input", renderCount);

/* misafir modalı */
function openGuests(){
  const name = $("mainName").value.trim();
  if(!name){
    $("formError").textContent = t("e_name_first");
    $("mainName").focus();
    return;
  }
  $("guestError").textContent = "";
  const box = $("guestRows");
  box.innerHTML = "";
  box.appendChild(makeRow(name, true));
  state.extraGuests.forEach(g => box.appendChild(makeRow(g, false)));
  if(state.extraGuests.length === 0) box.appendChild(makeRow("", false));
  renumber();
  $("guestModal").classList.remove("hidden");
}
function makeRow(value, locked){
  const row = document.createElement("div");
  row.className = "g-row";
  const idx = document.createElement("span");
  idx.className = "g-idx";
  const input = document.createElement("input");
  input.type = "text";
  input.value = value;
  input.placeholder = t("g_ph");
  if(locked){
    input.disabled = true;
    const you = document.createElement("span");
    you.className = "g-you";
    you.textContent = t("g_you");
    row.append(idx, input, you);
  } else {
    const del = document.createElement("button");
    del.type = "button";
    del.className = "g-del";
    del.textContent = "−";
    del.setAttribute("aria-label", "Sil / Verwijderen");
    del.onclick = () => { row.remove(); renumber(); };
    row.append(idx, input, del);
  }
  return row;
}
function renumber(){
  document.querySelectorAll("#guestRows .g-idx")
    .forEach((el, i) => el.textContent = (i + 1) + ".");
}
function addRow(){
  $("guestRows").appendChild(makeRow("", false));
  renumber();
  const inputs = document.querySelectorAll("#guestRows input:not(:disabled)");
  if(inputs.length) inputs[inputs.length - 1].focus();
}
function saveGuests(){
  const inputs = [...document.querySelectorAll("#guestRows input:not(:disabled)")];
  let bad = false;
  inputs.forEach(i => {
    const empty = !i.value.trim();
    i.classList.toggle("bad", empty);
    if(empty) bad = true;
  });
  if(bad){
    $("guestError").textContent = t("g_err_empty");
    return;
  }
  state.extraGuests = inputs.map(i => i.value.trim());
  $("guestModal").classList.add("hidden");
  renderCount();
}
function closeGuests(){ $("guestModal").classList.add("hidden"); }

/* önizleme */
function openPreview(){
  const err = $("formError");
  const name = $("mainName").value.trim();
  if(!name){ err.textContent = t("e_name"); $("mainName").focus(); return; }
  if(!state.attending){ err.textContent = t("e_attend"); return; }
  if(state.attending === "yes" && !state.transport){
    err.textContent = t("e_transport"); return;
  }
  err.textContent = "";
  $("sendError").textContent = "";

  const rows = [];
  rows.push(sumRow(t("p_attend"), state.attending === "yes" ? t("p_yes") : t("p_no")));
  if(state.attending === "yes"){
    const names = [name + " " + t("g_you"), ...state.extraGuests];
    if(state.babies > names.length){
      err.textContent = t("e_baby"); return;
    }
    const list = "<ol>" + names.map(n => "<li>" + esc(n) + "</li>").join("") + "</ol>";
    rows.push(sumRow(t("p_guests") + " · " +
      (names.length === 1 ? t("count_one") : t("count_many").replace("{n}", names.length)),
      list, true));
    rows.push(sumRow(t("p_calc"), calcLine(names.length, state.babies)));
    rows.push(sumRow(t("p_transport"),
      state.transport === "yes" ? t("p_tr_yes") : t("p_tr_no")));
  }
  const msg = $("message").value.trim();
  if(msg) rows.push(sumRow(t("p_msg"), esc(msg)));

  $("summary").innerHTML = rows.join("");
  $("previewModal").classList.remove("hidden");
}
function calcLine(guests, babies){
  const w = (n, key) => n + " " + t(key)[n === 1 ? 0 : 1];
  const chairs = guests - babies;
  const parts = [w(guests, "w_guest")];
  if(babies > 0) parts.push(w(babies, "w_baby"));
  parts.push(w(chairs, "w_chair"));
  return parts.join(" · ");
}
function sumRow(label, value, raw){
  return '<div class="sum-item"><p class="sum-l">' + esc(label) +
         '</p><div class="sum-v">' + (raw ? value : esc(value)) + "</div></div>";
}
function esc(s){
  return s.replace(/[&<>"']/g, c =>
    ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
}
function closePreview(){ $("previewModal").classList.add("hidden"); }

/* gönderim */
async function submitForm(){
  if(!CONFIG.SCRIPT_URL){
    $("sendError").textContent = t("e_noscript");
    return;
  }
  const btn = $("sendBtn");
  btn.disabled = true;
  btn.textContent = t("p_sending");

  const name = $("mainName").value.trim();
  const attendingYes = state.attending === "yes";
  const names = attendingYes ? [name, ...state.extraGuests] : [];
  const body = new URLSearchParams({
    mainName: name,
    attending: attendingYes ? "Evet" : "Hayır",
    guestCount: attendingYes ? String(names.length) : "0",
    guests: names.join(" | "),
    babies: attendingYes ? String(state.babies) : "0",
    chairs: attendingYes ? String(names.length - state.babies) : "0",
    transport: attendingYes
      ? (state.transport === "yes" ? "Kendisi" : "Yardım gerekli") : "",
    message: $("message").value.trim(),
    lang: state.lang,
    website: $("website").value, // honeypot
  });

  try{
    await fetch(CONFIG.SCRIPT_URL, { method: "POST", mode: "no-cors", body });
    $("previewModal").classList.add("hidden");
    $("thanksTitle").textContent = attendingYes ? t("t_yes_h") : t("t_no_h");
    $("thanksText").textContent  = attendingYes ? t("t_yes_p") : t("t_no_p");
    $("thanksModal").classList.remove("hidden");
  }catch(e){
    $("sendError").textContent = t("e_send");
  }finally{
    btn.disabled = false;
    btn.textContent = t("p_send");
  }
}

/* başlangıç */
$("evDate").textContent = CONFIG.DATE;
$("evTime").textContent = CONFIG.TIME;
document.querySelector("footer .f-date").textContent = CONFIG.DATE;
setLang("tr");
