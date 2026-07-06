/**
  Düğün RSVP arka ucu
  Siteden gelen cevapları Google Sheet'e yazar.
 */

var SHEET_NAME = "Cevaplar";

function doPost(e) {
  try {
    var p = (e && e.parameter) || {};

    // Honeypot: gerçek misafirler bu alanı görmez; doluysa bot demektir, sessizce yut.
    if (p.website) return jsonOut({ ok: true });

    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sh = ss.getSheetByName(SHEET_NAME) || ss.insertSheet(SHEET_NAME);

    // İlk cevapta başlık satırını oluştur
    if (sh.getLastRow() === 0) {
      sh.appendRow([
        "Zaman", "Ana İsim", "Katılım", "Kişi Sayısı",
        "Misafirler", "Bebek", "Ulaşım", "Mesaj", "Dil"
      ]);
      sh.setFrozenRows(1);
    }

    sh.appendRow([
      new Date(),
      p.mainName   || "",
      p.attending  || "",
      Number(p.guestCount || 0),
      p.guests     || "",
      Number(p.babies || 0),
      p.transport  || "",
      p.message    || "",
      p.lang       || ""
    ]);

    return jsonOut({ ok: true });
  } catch (err) {
    return jsonOut({ ok: false, error: String(err) });
  }
}

function jsonOut(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}