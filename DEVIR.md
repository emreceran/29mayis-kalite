# DEVİR BELGESİ — Kalite Güvence Sistemi Web Sitesi

**Devreden:** Emre Ceran · **Devralan:** İstanbul 29 Mayıs Üniversitesi Bilgi İşlem
**Depo:** (devir sonrası okul GitHub organizasyonuna taşınacaktır)

---

## 1) Proje nedir?
Kalite Güvence Sistemi tanıtım web sitesi. **Tamamen statik** (sunucu/veritabanı yok):
`index.html` içeriği `data/site.json`'dan okur. Teknik özet için **README.md**.

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

## 3) İçerik nasıl güncellenir?
Kod bilgisi **gerekmez**:
1. `admin.html` panelini açın → içeriği yükleyin → formlarla düzenleyin →
   **"Değişiklikleri İndir"**.
2. İnen `site.json`'ı `data/site.json` ile değiştirip siteyi yeniden yayınlayın.

Personel için ayrıntılı kılavuz: **`panel-kullanim-kilavuzu.html`**.

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
| `panel-kullanim-kilavuzu.html` | Yönetim paneli kullanım kılavuzu (personel için) |
| `Yapilan-Guncellemeler.docx` | Geçmiş güncelleme kayıtları (referans) |

## 6) Bakım notları
- Site statik → bakım yükü çok düşüktür; içerik güncellemesi panelden yapılır.
- Gösterge panosundaki (`dashboard/`) fakülte kırılımı bazı yerlerde **temsilî**dir
  (sayfada uyarısı vardır); kurumdan gerçek "Fakültelere Göre Öğrenci Dağılımı" verisi
  gelince `data/dashboard.json` / ilgili veri güncellenip yeniden yayınlanabilir.
- Paydaş geri bildirim butonu şu an `https://kalite.29mayis.edu.tr/geri-bildirim/`
  adresine gider; farklı bir form isteniyorsa panelden/ayarlardan değiştirilebilir.
