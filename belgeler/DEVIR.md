# DEVİR BELGESİ — Kalite Güvence Sistemi Web Sitesi

**Devreden:** Emre Ceran · **Devralan:** İstanbul 29 Mayıs Üniversitesi Bilgi İşlem
**Depo:** (devir sonrası okul GitHub organizasyonuna taşınacaktır)

---

## 1) Proje nedir?
Kalite Güvence Sistemi tanıtım web sitesi. **Tamamen statik** (sunucu/veritabanı yok):
`index.html` içeriği `data/site.json`'dan okur. Teknik özet için depo kökündeki **README.md**.

## 2) Mevcut yayın durumu — ÖNEMLİ
- Site şu an **Emre'nin kişisel Netlify hesabındaki** "kalite" takımında yayında:
  `https://29mayis-kalite.netlify.app`
- Devir kapsamında bu bağımlılık **kaldırılmalıdır**. İki seçenek:
  - **(Önerilen) Kurum kendi sunucusunda yayınlar.** Site statik olduğu için klasör
    içeriğini kurumun web sunucusuna kopyalamak yeterlidir. Böylece hiçbir dış hesaba
    bağımlılık kalmaz. Sonra alan adı (varsa) kurum sunucusuna yönlendirilir.
  - **(Alternatif) Netlify sitesi kuruma devredilir.** Netlify, siteyi başka bir
    takıma/hesaba taşımaya izin verir; kurumun Netlify hesabına transfer edilebilir.

> Karar kurumundur. Önerimiz statik olduğu için **kurum sunucusunda barındırmaktır**
> (dış servise bağımlılık ve ücret riski olmaz).

> **9 Eylül 2026 güncellemesi:** Site bu aşamada **statik olarak** teslim edilmektedir;
> yönetim paneli teslim kapsamına dâhil edilmemiştir. Kurumun tercih edeceği içerik
> yönetim sistemi belirlendiğinde devreye alınacaktır. O tarihe kadar içerik
> güncellemeleri tarafımızca hazırlanıp iletilecektir. Aşağıdaki 3. madde, panel
> devreye alındığında geçerli olacaktır.

## 3) İçerik nasıl güncellenir?
Kod bilgisi **gerekmez**:
1. `arsiv/yonetim-paneli/admin.html` panelini açın → içeriği yükleyin → formlarla düzenleyin →
   **"Değişiklikleri İndir"**.
2. İnen `site.json`'ı `data/site.json` ile değiştirip siteyi yeniden yayınlayın.

Personel için ayrıntılı kılavuz: **`arsiv/yonetim-paneli/panel-kullanim-kilavuzu.html`**.

## 4) Gizli bilgi / hesap durumu
- Sitede **backend, veritabanı, gizli anahtar YOKTUR.** Devralınacak sır yoktur.
- Tek "hesap" bağımlılığı yukarıdaki **Netlify** yayınıdır; madde 2'ye göre kaldırılır.
- Alan adı (kullanılıyorsa) DNS kayıtlarının kurum sunucusuna/hedefe yönlendirilmesi
  gerekir — bu, kurumun DNS yönetimiyle yapılır.

## 5) Teslim edilen dokümanlar
| Dosya | İçerik |
|-------|--------|
| `README.md` | Proje tanıtımı, yapı, içerik güncelleme, yayınlama |
| `DEVIR.md` | Bu belge |
| `arsiv/yonetim-paneli/panel-kullanim-kilavuzu.html` | Yönetim paneli kullanım kılavuzu (panel devreye alındığında) |
| `Yapilan-Guncellemeler.docx` | Geçmiş güncelleme kayıtları (referans) |

## 6) Bakım notları
- Site statik → bakım yükü çok düşüktür; içerik güncellemesi panelden yapılır.
- Gösterge panosundaki (`dashboard/`) tüm veriler **kurumun resmî rakamlarına** dayanır
  (öğrenci ve akademik personel: 31.08.2026; araştırma/teşvik: kurum istatistik belgesi).
  Daha önceki temsilî fakülte kırılımı kaldırılmıştır.
- ⚠️ **Pano verisi iki yerde durur:** `dashboard/index.html` içindeki gömülü veri ve
  `data/dashboard.json`. Sayfa açılırken JSON'ı çekip gömülü verinin **üzerine yazar**.
  Bu yüzden `dashboard/index.html` içindeki veriyi değiştirdikten sonra mutlaka
  `node tools/build-dashboard-json.js` çalıştırılmalıdır; aksi hâlde sitede eski veri görünür.
- Paydaş geri bildirim butonu şu an `https://kalite.29mayis.edu.tr/geri-bildirim/`
  adresine gider; farklı bir form isteniyorsa panelden/ayarlardan değiştirilebilir.
