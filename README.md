# İstanbul 29 Mayıs Üniversitesi — Kalite Güvence Sistemi Web Sitesi

Kalite Güvence Sistemi tanıtım web sitesi. **Tamamen statik** bir sitedir
(sunucu/veritabanı yoktur): tek bir `index.html`, içeriği `data/site.json`'dan okuyup
sayfaları oluşturur. Ayrı bir **Gösterge Panosu** (`dashboard/`) içerir.

> Bu depo İstanbul 29 Mayıs Üniversitesi'ne **devredilmektedir**. Yayına alma ve bakım
> için **[belgeler/DEVIR.md](belgeler/DEVIR.md)** belgesine bakın.

## Depo düzeni

Depo kökünde **yalnızca yayına giden dosyalar** durur. Diğer her şey konusuna göre
klasörlenmiştir.

| Yol | Açıklama |
|-----|----------|
| **Yayına giden site** | |
| `index.html` | Ana site (tek sayfa uygulama; menü/sayfalar `data/site.json`'dan render edilir) |
| `data/site.json` | **Tüm site içeriği** (menüler, sayfalar, duyurular, haberler, etkinlikler) |
| `data/dashboard.json` | Gösterge panosu verileri |
| `dashboard/` | Gösterge panosu (Sayılarla · Araştırma ve Teşvikler · YÖKAK göstergeleri) |
| `assets/` | Görseller, logolar, PÜKÖ şemaları, etkinlik fotoğrafları |
| **Diğer** | |
| `belgeler/` | Kuruma sunulan resmî belgeler: devir belgesi, raporlar, kılavuzlar (HTML + PDF) |
| `teslim/` | Gönderime hazır paketler — tarih klasörleri, her birinde mail metni ve ekleri |
| `kurumdan-gelen/` | Kurumun ilettiği ham veri dosyaları (arşiv, istatistik belgeleri) |
| `arsiv/` | Kullanımda olmayan dosyalar: yönetim paneli, eski belgeler, `site.json` yedekleri |
| `tools/` | Yardımcı betikler (aşağıya bakın) |

## Gösterge panosu verisi (önemli)

Pano verisi iki yerde bulunur: `dashboard/index.html` içindeki gömülü veri ve
`data/dashboard.json`. Sayfa açılırken JSON'ı çeker ve gömülü verinin **üzerine yazar** —
yani canlıda görünen `data/dashboard.json`'dır.

`dashboard/index.html` içindeki veriyi değiştirdikten sonra ikisini eşitleyin:

```bash
node tools/build-dashboard-json.js
```

Bu adım atlanırsa sitede **eski veri** görünmeye devam eder.

## Teslim paketi üretme

Kuruma gönderilecek statik site arşivini üretir (`site/` klasörü + `OKUYUN.txt`):

```bash
bash tools/paket-olustur.sh                      # teslim/<bugün>-kuruma/ altına
bash tools/paket-olustur.sh teslim/2026-09-09-kuruma
```

Üretilen `.zip` dosyaları git'e girmez (`.gitignore`).

## İçeriği güncelleme

Sitenin tüm içeriği `data/site.json`, pano verileri `data/dashboard.json` dosyasındadır.
Güncelleme, bu dosyaların yenisiyle değiştirilmesinden ibarettir.

> **Yönetim paneli hakkında:** `arsiv/yonetim-paneli/admin.html` içerik dosyasını formlarla
> düzenleyip indirmeye yarayan bir araçtır; sunucuya hiçbir şey yazmaz. Kurumun tercih
> edeceği içerik yönetim sistemi belirleneceğinden **şu an teslim kapsamında değildir**
> ve yayına konulmamaktadır.

## Yayınlama (statik)

Backend olmadığı için site herhangi bir statik web sunucusunda yayınlanabilir. Yayına
yalnızca `index.html`, `data/site.json`, `data/dashboard.json`, `dashboard/` ve `assets/`
çıkar; `belgeler/`, `teslim/`, `kurumdan-gelen/`, `arsiv/` ve `tools/` **yayınlanmaz**.

- **Kurum web sunucusu (önerilen):** `tools/paket-olustur.sh` ile üretilen arşivdeki
  `site/` klasörünün içeriğini sunucudaki bir dizine kopyalamak yeterlidir. Site
  içindeki tüm bağlantılar görelidir; alt dizinde de sorunsuz çalışır.
- **GitHub Pages:** `gh-pages` dalı yalnızca yayına giden dosyaları taşır.

Sunucu tarafında dikkat edilecek iki nokta: varsayılan belge `index.html` olmalı ve
`.json` uzantılı dosyalar sunulabilmelidir (`application/json`). İkincisi eksikse site
açılır ancak içerik ve grafikler boş görünür.

## Yerel önizleme

```bash
python3 -m http.server 8080
# tarayıcı: http://localhost:8080/
```

## Not

Statik site olduğu için **veritabanı, sunucu tarafı kod ve gizli anahtar yoktur.**
