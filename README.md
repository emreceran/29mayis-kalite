# İstanbul 29 Mayıs Üniversitesi — Kalite Güvence Sistemi Web Sitesi

Kalite Güvence Sistemi tanıtım web sitesi. **Tamamen statik** bir sitedir
(sunucu/veritabanı yoktur): tek bir `index.html` içeriği `data/site.json`'dan okuyup
sayfaları oluşturur. Ayrı bir **Gösterge Panosu** (`dashboard/`) ve içerik güncellemek
için kod bilgisi gerektirmeyen bir **Yönetim Paneli** (`admin.html`) içerir.

> Bu depo İstanbul 29 Mayıs Üniversitesi'ne **devredilmiştir**. Yayına alma, içerik
> güncelleme ve bakım için **[DEVIR.md](DEVIR.md)** belgesine bakın.

## Yapı
| Yol | Açıklama |
|-----|----------|
| `index.html` | Ana site (tek sayfa uygulama; menü/sayfalar `data/site.json`'dan render edilir) |
| `data/site.json` | **Tüm içerik burada** (menüler, sayfalar, duyurular, haberler, etkinlikler) |
| `data/dashboard.json` | Gösterge panosu verileri |
| `dashboard/` | Ayrı gösterge panosu uygulaması (Sayılarla + YÖKAK göstergeleri) |
| `assets/` | Görseller, logolar, PÜKÖ şemaları, etkinlik fotoğrafları |
| `admin.html` | **İçerik Yönetim Paneli** (aşağıya bakın) |
| `panel-kullanim-kilavuzu.html` | Panelin kullanım kılavuzu (yazdırılabilir) |

## İçeriği güncelleme (kod bilmeden)
1. `admin.html` dosyasını tarayıcıda açın.
2. İçeriği (`data/site.json`) yükleyin, formlarla düzenleyin.
3. **"Değişiklikleri İndir"** ile güncel `site.json`'ı indirin.
4. İndirilen dosyayı `data/site.json` ile değiştirip siteyi yeniden yayınlayın.

Ayrıntı: **`panel-kullanim-kilavuzu.html`** (tarayıcıda açıp Ctrl+P ile yazdırılabilir).

## Yayınlama (statik)
Backend olmadığı için site herhangi bir statik web sunucusunda yayınlanabilir:
- **Kurum web sunucusu:** Bu klasörün içeriğini (`index.html`, `data/`, `assets/`,
  `dashboard/`) sunucudaki bir dizine kopyalamak yeterlidir.
- **Netlify/benzeri:** Klasörü sürükle-bırak ya da git ile bağlayarak yayınlayın.

> Not: Yönetim panelinin (`admin.html`) siteyle birlikte herkese açık yayınlanması
> zorunlu değildir; sunucuya yazamaz, yalnızca `site.json` indirir. İsterseniz yalnızca
> yerelde tutabilir ya da erişimi kısıtlayabilirsiniz.

## Yerel önizleme
```bash
python3 -m http.server 8080
# tarayıcı: http://localhost:8080/
```

## Not
Statik site olduğu için **veritabanı, sunucu tarafı kod ve gizli anahtar yoktur.**
