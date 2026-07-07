/**
  Düğün RSVP backend
  Siteden gelen cevapları Google Sheet'e yazar,
  Tabloyu otomatik biçimlendirir ve canlı bir "Özet" sekmesi tutar.
*/

var SHEET_NAME = "Cevaplar";
var SUMMARY_NAME = "Özet";

var HEADERS = [
  "Zaman", "Ana İsim", "Katılım", "Kişi Sayısı",
  "Misafirler", "Bebek", "Sandalye", "Ulaşım", "Mesaj", "Dil"
];

// Davetiye paletiyle uyumlu renkler
var C_INK = "#38320d", C_PAPER = "#f6f5f1", C_BAND = "#eceadf", C_LEAF = "#43602b";

function doPost(e) {
  try {
    var p = (e && e.parameter) || {};

    // Honeypot: gerçek misafirler bu alanı görmez; doluysa bot demektir, sessizce yut.
    if (p.website) return jsonOut({ ok: true });

    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sh = ss.getSheetByName(SHEET_NAME) || ss.insertSheet(SHEET_NAME);

    if (sh.getLastRow() === 0) initSheet(sh);

    sh.appendRow([
      new Date(),
      p.mainName   || "",
      p.attending  || "",
      Number(p.guestCount || 0),
      p.guests     || "",
      Number(p.babies || 0),
      Number(p.chairs || 0),
      p.transport  || "",
      p.message    || "",
      p.lang       || ""
    ]);

    formatLastRow(sh);
    ensureSummary(ss);
    return jsonOut({ ok: true });
  } catch (err) {
    return jsonOut({ ok: false, error: String(err) });
  }
}

/* Tablo kurulumu ve biçimlendirme */

function initSheet(sh) {
  sh.appendRow(HEADERS);
  var head = sh.getRange(1, 1, 1, HEADERS.length);
  head.setBackground(C_INK).setFontColor(C_PAPER)
      .setFontWeight("bold").setFontFamily("Georgia")
      .setVerticalAlignment("middle").setHorizontalAlignment("left");
  sh.setFrozenRows(1);
  sh.setRowHeight(1, 34);
  // sütun genişlikleri
  var widths = [150, 170, 90, 90, 300, 70, 90, 140, 260, 60];
  for (var i = 0; i < widths.length; i++) sh.setColumnWidth(i + 1, widths[i]);
  // sayısal sütunları ortala
  sh.getRange("D2:D").setHorizontalAlignment("center");
  sh.getRange("F2:G").setHorizontalAlignment("center");
}

function formatLastRow(sh) {
  var r = sh.getLastRow();
  var row = sh.getRange(r, 1, 1, HEADERS.length);
  row.setFontFamily("Georgia").setVerticalAlignment("middle").setWrap(true);
  // zaman biçimi
  sh.getRange(r, 1).setNumberFormat("dd.MM.yyyy HH:mm");
  // zebra deseni (çift satırlara hafif bant)
  if (r % 2 === 0) row.setBackground(C_BAND);
  else row.setBackground(C_PAPER);
  // Katılım rengi: Evet=yeşil, Hayır=soluk
  var att = String(sh.getRange(r, 3).getValue());
  sh.getRange(r, 3).setFontColor(att === "Evet" ? C_LEAF : "#8c3b2e")
                   .setFontWeight("bold");
  // ince kenarlık
  row.setBorder(true, true, true, true, true, false, "#cfceb2",
                SpreadsheetApp.BorderStyle.SOLID);
}

/* Canlı Özet sekmesi */

function ensureSummary(ss) {
  var s = ss.getSheetByName(SUMMARY_NAME);
  if (!s) s = ss.insertSheet(SUMMARY_NAME, 0); // en başa koy
  if (s.getRange("A1").isBlank()) buildSummary(s);
}

function buildSummary(s) {
  var C = SHEET_NAME;
  var rows = [
    ["SİNEM & AHMET · RSVP", ""],
    ["", ""],
    ["Gelen toplam kişi (bebek dahil)", '=SUMIF(' + C + '!C:C,"Evet",' + C + '!D:D)'],
    ["Sandalye toplamı (Royal\u0027e verilecek)", '=SUMIF(' + C + '!C:C,"Evet",' + C + '!G:G)'],
    ["Bebek toplamı", '=SUMIF(' + C + '!C:C,"Evet",' + C + '!F:F)'],
    ["", ""],
    ["Evet diyen aile", '=COUNTIF(' + C + '!C:C,"Evet")'],
    ["Hayır diyen aile", '=COUNTIF(' + C + '!C:C,"Hayır")'],
    ["Toplam yanıt", '=COUNTA(' + C + '!B:B)-1'],
    ["", ""],
    ["Ulaşımda yardım isteyen aile", '=COUNTIF(' + C + '!H:H,"Yardım gerekli")'],
  ];
  s.getRange(1, 1, rows.length, 2).setValues(rows);

  // başlık
  s.getRange("A1:B1").merge().setBackground(C_INK).setFontColor(C_PAPER)
    .setFontFamily("Georgia").setFontWeight("bold").setFontSize(13)
    .setHorizontalAlignment("center").setVerticalAlignment("middle");
  s.setRowHeight(1, 40);

  // etiket sütunu
  s.getRange("A3:A11").setFontFamily("Georgia").setFontColor(C_INK);
  // rakam sütunu — büyük, yeşil, ortalı
  s.getRange("B3:B11").setFontFamily("Georgia").setFontSize(16)
    .setFontWeight("bold").setFontColor(C_LEAF).setHorizontalAlignment("center");

  s.setColumnWidth(1, 300);
  s.setColumnWidth(2, 130);
  s.setHiddenGridlines(true);
}

function jsonOut(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
