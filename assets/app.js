/* ── NAVIGATION STRUCTURE ── */
const NAV = [
  {
    id: 'home',
    label: 'Ana Sayfa',
    single: true
  },
  {
    id: 'politikalar',
    label: 'Politikalar',
    children: [
      { id: 'kalite-politikasi',            label: 'Kalite Politikası' },
      { id: 'arastirma-gelistirme',          label: 'Araştırma-Geliştirme Politikası' },
      { id: 'egitim-ogretim',               label: 'Eğitim-Öğretim Politikası' },
      { id: 'kurumsal-gelisim',             label: 'Kurumsal Gelişim Politikası' },
      { id: 'topluma-hizmet',               label: 'Topluma Hizmet Politikası' },
      { id: 'uluslararasilasma',            label: 'Uluslararasılaşma Politikası' },
      { id: 'uzaktan-egitim-politikasi',    label: 'Uzaktan Eğitim Politikası' },
      { id: 'bilgi-guvenligi',              label: 'Bilgi Güvenliği Politikası' },
    ]
  },
  {
    id: 'komisyonlar',
    label: 'Komisyonlar',
    children: [
      { id: 'kalite-komisyonu',                    label: 'Kalite Komisyonu' },
      { id: 'kalite-alt-komisyonlari',             label: 'Kalite Alt Komisyonları' },
      { id: 'ogrenci-kalite-komisyonu',            label: 'Öğrenci Kalite Komisyonu' },
      { id: 'izleme-degerlendirme',                label: 'İzleme ve Değerlendirme Komisyonları' },
      { id: 'akreditasyon-koordinatorlugu',        label: 'Akreditasyon Koordinatörlüğü' },
      { id: 'organizasyon-semalari',               label: 'Organizasyon Şemaları' },
    ]
  },
  {
    id: 'uzaktan',
    label: 'Uzaktan Eğitimde Kalite',
    children: [
      { id: 'uzaktan-amac-hedefler',     label: 'Amaç ve Hedefler' },
      { id: 'uzaktan-komisyon',          label: 'Uzaktan Eğitim Komisyonu' },
      { id: 'uzaktan-alt-komisyon',      label: 'Uzaktan Eğitim Alt Komisyonu' },
      { id: 'uzaktan-ogretim-sureci',    label: 'Öğretim Süreci' },
      { id: 'uzaktan-yonetimsel-surec',  label: 'Yönetimsel Süreç' },
    ]
  },
  {
    id: 'iletisim',
    label: 'İletişim',
    single: true
  }
];

/* ── PAGE CONTENT ── */
const PAGES = {

  home: {
    title: 'Kalite Güvence Sistemi',
    breadcrumb: ['Ana Sayfa'],
    render: () => `
      <div class="hero-block">
        <div class="hero-badge">İstanbul 29 Mayıs Üniversitesi</div>
        <h1>Kalite Güvence Sistemi</h1>
        <p>Eğitim öğretim, araştırma ve yönetim faaliyetlerinin ortak akıl çerçevesinde tüm paydaşlarımızca benimsenen sürekli iyileştirme ilkesiyle yönetilmesi.</p>
      </div>

      <p class="sh">Hızlı Erişim</p>
      <div class="home-grid">
        ${[
          { id:'kalite-politikasi', icon:'📋', title:'Kalite Politikası', desc:'Kurumsal kalite çerçevesi ve temel ilkeler' },
          { id:'kalite-komisyonu',  icon:'👥', title:'Kalite Komisyonu',  desc:'Komisyon üyeleri ve görevleri' },
          { id:'kalite-alt-komisyonlari', icon:'🔗', title:'Alt Komisyonlar', desc:'Dört alt komisyon ve yapıları' },
          { id:'ogrenci-kalite-komisyonu', icon:'🎓', title:'Öğrenci Kalite Komisyonu', desc:'Öğrenci temsilcileri ve birimler' },
          { id:'uzaktan-amac-hedefler', icon:'🖥️', title:'Uzaktan Eğitimde Kalite', desc:'Amaç, hedefler ve süreçler' },
          { id:'akreditasyon-koordinatorlugu', icon:'🏅', title:'Akreditasyon', desc:'Koordinatörlük ekibi ve görevler' },
          { id:'iletisim', icon:'📬', title:'İletişim', desc:'Kalite Birimi iletişim bilgileri' },
          { id:'organizasyon-semalari', icon:'🗂️', title:'Organizasyon Şemaları', desc:'Kalite yönetimi yapısı' },
        ].map(c => `
          <div class="home-card" onclick="navigate('${c.id}')">
            <div class="hc-icon">${c.icon}</div>
            <h3>${c.title}</h3>
            <p>${c.desc}</p>
            <div class="hc-arrow">→ Görüntüle</div>
          </div>
        `).join('')}
      </div>
    `
  },

  'kalite-politikasi': {
    title: 'Kalite Politikası',
    breadcrumb: ['Politikalar', 'Kalite Politikası'],
    render: () => `
      <div class="prose">
        <p>İstanbul 29 Mayıs Üniversitesi'nin kalite yaklaşımı; <strong>eğitim öğretim, araştırma ve yönetim faaliyetlerinin ortak akıl çerçevesinde tüm paydaşlarımızca benimsenen sürekli iyileştirme</strong> ilkelerine dayanmaktadır.</p>
      </div>

      <p class="sh">Politikanın Temel Bileşenleri</p>
      <div class="policy-grid">
        ${[
          { title: '1. Ölçülebilir Politikalar', body: 'Kurumsal etkinlik alanlarında somut standartlar belirleme ve bu standartların düzenli olarak ölçülmesi.' },
          { title: '2. Bilimsel Yönelim', body: 'Özgün bilgi üretim kapasitesinin ön plana alınması; keşfedici ve inşa edici nitelikte akademik çalışmalar yürütülmesi.' },
          { title: '3. Paydaş Memnuniyeti', body: 'İç ve dış paydaşların beklentilerine odaklanma; memnuniyet düzeylerinin uygun ölçme yöntemleriyle tespiti.', gold: true },
          { title: '4. Sosyal Sorumluluk', body: 'Dış paydaşlarla işbirliğinde toplumsal projeler gerçekleştirme; ülke, bölge ve insanlığın gelişimine katkı sunma.', gold: true },
          { title: '5. Katılımcı Yaklaşım', body: 'Öğrenci ve personelin kurumsal faaliyetlere dahil edilmesi; tüm paydaşların kalite süreçlerine aktif katılımının sağlanması.' },
          { title: '6. Eleştirel Düşünce', body: 'Eğitim ve akademik çalışmalarda analitik bakış açısının öncelendirilmesi; sorgulamayı teşvik eden bir öğrenme ortamının oluşturulması.' },
        ].map(c => `<div class="policy-card ${c.gold?'gold':''}"><h3>${c.title}</h3><p>${c.body}</p></div>`).join('')}
      </div>
    `
  },

  'arastirma-gelistirme': {
    title: 'Araştırma-Geliştirme Politikası',
    breadcrumb: ['Politikalar', 'Araştırma-Geliştirme Politikası'],
    render: () => `
      <div class="info-box"><strong>Temel Vizyon:</strong> İstanbul 29 Mayıs Üniversitesi, araştırma yönelimli bir kurum olarak kendisini "ülkemiz, bölgemiz ve insanlığın toplumsal gelişimine yön veren" bir üniversite olarak konumlandırmaktadır.</div>
      <div class="prose">
        <p>Üniversitenin bilimsel uğraşları <em>keşfedici ve inşa edici nitelikte</em> çalışmalar olarak tanımlanmakta; bu çalışmaların sonuçlarının toplumsal gelişime katkı sunması beklenmektedir.</p>
      </div>
      <p class="sh">Politikanın Temel Hedefleri</p>
      <div class="policy-grid">
        ${[
          { title:'1. Kurumsal Statü', body:'Örnek, önde gelen, tercih edilen ve aranır bir üniversite olmak.' },
          { title:'2. Sosyal Katkı', body:'Ülke, bölge ve insanlığın gelişimine, geleceğin inşasına katkı sunmak.' },
          { title:'3. Kurumsal Kültür', body:'Araştırma odaklı bir kurumsal kültürü tüm paydaşlarla birlikte geliştirmek.', gold:true },
          { title:'4. Politika Uyumu', body:'Araştırma çalışmalarını eğitim-öğretim ve diğer üniversite politikaları ile uyumlu hale getirmek.', gold:true },
          { title:'5. Sürdürülebilirlik', body:'Araştırma-geliştirme çalışmalarının uzun vadeli devamını sağlamak.' },
        ].map(c=>`<div class="policy-card ${c.gold?'gold':''}"><h3>${c.title}</h3><p>${c.body}</p></div>`).join('')}
      </div>
    `
  },

  'egitim-ogretim': {
    title: 'Eğitim-Öğretim Politikası',
    breadcrumb: ['Politikalar', 'Eğitim-Öğretim Politikası'],
    render: () => `
      <div class="info-box"><strong>Misyon:</strong> Gelişime açık, araştırma yönelimli insanlar yetiştirmek; mesleki ve toplumsal sorumluluk bilinci yüksek, ulusal ve uluslararası yeterlikte tercih edilen mezunlar yetiştirmek.</div>
      <p class="sh">Temel Çalışma Prensipleri</p>
      <div class="policy-grid">
        ${[
          { title:'Kalite Odaklı Yaklaşım', body:'Tüm eğitim süreçlerinde kalite odaklı yaklaşım ve sürekli iyileştirme ilkesinin benimsenmesi.' },
          { title:'Tutarlı Gelişim', body:'Öğrencilerin kurumsal değerlerle tanışmasından mezun olana kadar istikrarlı ve kesintisiz gelişiminin sağlanması.' },
          { title:'Bilim ve Etik', body:'Bilimsel bilgi, akademik beceri ve etik değerlerin eğitim-öğretim sürecinin temeline alınması.', gold:true },
          { title:'Tercih Edilen Mezunlar', body:'Ulusal ve uluslararası düzeyde tercih edilen, toplumsal sorumluluk bilinci taşıyan mezunlar yetiştirilmesi.', gold:true },
        ].map(c=>`<div class="policy-card ${c.gold?'gold':''}"><h3>${c.title}</h3><p>${c.body}</p></div>`).join('')}
      </div>
    `
  },

  'kurumsal-gelisim': {
    title: 'Kurumsal Gelişim Politikası',
    breadcrumb: ['Politikalar', 'Kurumsal Gelişim Politikası'],
    render: () => `
      <div class="prose"><p>Üniversite, kurumsal kimliğini geliştirmek için stratejik plan çalışmaları yürütmekte ve yönetim sistemlerini sürekli iyileştirmektedir.</p></div>
      <p class="sh">Politikanın Beş Temel Amacı</p>
      <div class="policy-grid">
        ${[
          { title:'1. Paydaş Memnuniyeti', body:'İç ve dış paydaşların üniversite faaliyetlerine yönelik memnuniyet düzeylerini uygun ölçme yöntemleriyle tespit edip artırıcı tedbirler almak.' },
          { title:'2. İnsan Kaynakları Gelişimi', body:'Öğrenci, akademisyen ve idari personelin motivasyonlarını geliştirme; nitelikli insan kaynağının elde tutulması.' },
          { title:'3. Risk Yönetimi', body:'İş sağlığı, güvenliği ve olası risk durumları için senaryolar oluşturma; kurumsal dayanıklılığın artırılması.', gold:true },
          { title:'4. Eğitim Gelişimi', body:'Eğitim araç-gereçlerinin gelişimine paralel olarak süreçlerin iyileştirilmesi; teknoloji entegrasyonunun sağlanması.', gold:true },
          { title:'5. Sürdürülebilirlik', body:'Tüm faaliyetlerin kurumsal gelişim stratejisine uygun ve uzun vadeli olmasının güvence altına alınması.' },
        ].map(c=>`<div class="policy-card ${c.gold?'gold':''}"><h3>${c.title}</h3><p>${c.body}</p></div>`).join('')}
      </div>
    `
  },

  'topluma-hizmet': {
    title: 'Topluma Hizmet Politikası',
    breadcrumb: ['Politikalar', 'Topluma Hizmet Politikası'],
    render: () => `
      <div class="info-box">Üniversitenin topluma hizmet anlayışı yerel sınırların ötesine geçerek ulusal ve uluslararası boyutta şekillenmektedir.</div>
      <p class="sh">Politikanın Temel Sütunları</p>
      <div class="policy-grid">
        ${[
          { title:'Güçlendirilmiş Ortaklıklar', body:'Ulusal ve uluslararası kuruluşlarla ilişkileri güçlendirmek; toplumsal sorumluluk bilincinin insanlığa fayda sağlayacak şekilde hayata geçirilmesi.' },
          { title:'Araştırma Odaklı Katkı', body:'Dezavantajlı gruplara yönelik ve genel toplum refahını ilerleten araştırma projelerini destekleme ve hayata geçirme.', gold:true },
          { title:'Değerlerin Yaygınlaştırılması', body:'Topluma hizmet anlayışının başta öğrenciler olmak üzere tüm paydaşlara, üniversitenin misyon ve vizyonuyla uyumlu biçimde aktarılması.' },
        ].map(c=>`<div class="policy-card ${c.gold?'gold':''}"><h3>${c.title}</h3><p>${c.body}</p></div>`).join('')}
      </div>
    `
  },

  'uluslararasilasma': {
    title: 'Uluslararasılaşma Politikası',
    breadcrumb: ['Politikalar', 'Uluslararasılaşma Politikası'],
    render: () => `
      <p class="sh">Politikanın Beş Temel Hedefi</p>
      <div class="policy-grid">
        ${[
          { title:'1. Uluslararası İş Birlikleri', body:'Uluslararasılaşma hedefleri doğrultusunda ve üniversitenin misyon ve vizyonuna uygun olacak şekilde uluslararası iş birliklerini geliştirmek.' },
          { title:'2. Akademik Destek', body:'Başarılı öğrenci ve akademisyenlere kurumsal imkânlar çerçevesinde destek sunmak.' },
          { title:'3. Dil Eğitimi', body:'Kaliteli ve sürdürülebilir yabancı dil eğitim sistemi oluşturmak; çok dilli akademik ortam oluşturmak.', gold:true },
          { title:'4. Uluslararası Araştırmalar', body:'Uluslararası düzeyde araştırma ve yayın faaliyetlerini desteklemek; küresel akademik ağlara entegrasyonu sağlamak.', gold:true },
          { title:'5. Uluslararası Standartlar', body:'Tüm amaç ve hedeflerde uluslararası yeterlilik şartlarını dikkate almak; Bologna Süreci gerekliliklerini karşılamak.' },
        ].map(c=>`<div class="policy-card ${c.gold?'gold':''}"><h3>${c.title}</h3><p>${c.body}</p></div>`).join('')}
      </div>
      <div class="info-box" style="margin-top:20px"><strong>Uluslararası Ofis:</strong> international.29mayis.edu.tr</div>
    `
  },

  'uzaktan-egitim-politikasi': {
    title: 'Uzaktan Eğitim Politikası',
    breadcrumb: ['Politikalar', 'Uzaktan Eğitim Politikası'],
    render: () => `
      <div class="info-box"><strong>Kurumsal Misyon:</strong> "Kadim milli kültürümüzden esinlenerek" uluslararası standartlarda eğitim vererek sorun çözme yeteneğine sahip bireyler yetiştirmek.</div>
      <p class="sh">Politikanın Beş Ana Prensibi</p>
      <div class="policy-grid">
        ${[
          { title:'1. Verimlilik ve İyileştirme', body:'Uzaktan eğitim yönteminin güçlü yönlerini maksimize ederken eksiklikleri gidermek.' },
          { title:'2. Teknik Altyapı', body:'Öğrencilere ve akademisyenlere gerekli teknik ve fiziksel kaynakları sağlamak.' },
          { title:'3. Kalite Odağı', body:'Uzaktan eğitim faaliyetlerinin niteliğini artırmak amacıyla düzenli çalışmalar yürütmek.', gold:true },
          { title:'4. Uluslararasılaşma', body:'Uzaktan eğitimin sunduğu fırsatlardan yararlanarak küresel amaçlara ulaşmak.', gold:true },
          { title:'5. Toplumsal Değer', body:'Eğitim dışındaki üniversite faaliyetlerinde kurumsal ve sosyal faydayı gözetlemek.' },
        ].map(c=>`<div class="policy-card ${c.gold?'gold':''}"><h3>${c.title}</h3><p>${c.body}</p></div>`).join('')}
      </div>
    `
  },

  'bilgi-guvenligi': {
    title: 'Bilgi Güvenliği Politikası',
    breadcrumb: ['Politikalar', 'Bilgi Güvenliği Politikası'],
    render: () => `
      <div class="info-box">Bilgi Güvenliği Politikası belgesi görsel (PDF) formatında yayımlanmaktadır. Belgeye aşağıdaki sistemler üzerinden ulaşabilirsiniz.</div>
      <p class="sh">İlgili Sistemler</p>
      <div class="policy-grid">
        ${[
          { title:'Webmail', body:'Kurumsal e-posta sistemi güvenli bağlantı üzerinden kullanılmaktadır.' },
          { title:'Öğrenci Bilgi Sistemi', body:'OBS — Kişisel verileriniz KVKK kapsamında korunmaktadır.' },
          { title:'Akademik Bilgi Sistemi', body:'ABS — Akademik veriler şifreli bağlantıyla iletilmektedir.', gold:true },
          { title:'Eğitim Öğretim Bilgi Sistemi', body:'EBS — Uzaktan eğitim platformu güvenli protokollerle çalışmaktadır.', gold:true },
        ].map(c=>`<div class="policy-card ${c.gold?'gold':''}"><h3>${c.title}</h3><p>${c.body}</p></div>`).join('')}
      </div>
      <div class="info-box" style="margin-top:20px">
        Politika belgesi ve detaylar için: <strong>kalite@29mayis.edu.tr</strong> | <strong>+90 216 474 08 60 — Dahili: 2840</strong>
      </div>
    `
  },

  'kalite-komisyonu': {
    title: 'Kalite Komisyonu',
    breadcrumb: ['Komisyonlar', 'Kalite Komisyonu'],
    render: () => `
      <div class="prose"><p>Üniversite Kalite Komisyonu; rektör başkanlığında, rektör yardımcıları, fakülte dekanları, enstitü ve yüksekokul müdürleri, idari yöneticiler ile öğrenci temsilcisinden oluşmaktadır.</p></div>
      <table class="member-table">
        <thead><tr><th>Ad Soyad</th><th>Unvan / Görev</th></tr></thead>
        <tbody>
          ${[
            ['Prof. Dr. Mustafa SİNANOĞLU','Rektör — Komisyon Başkanı','başkan'],
            ['Prof. Dr. İlyas ÇELEBİ','Rektör Yardımcısı'],
            ['Prof. Dr. Murat DOĞRUEL','Rektör Yardımcısı'],
            ['Prof. Dr. Feridun Mustafa EMECEN','Edebiyat Fakültesi Dekanı'],
            ['Prof. Dr. Halil İbrahim SAĞLAM','Eğitim Fakültesi Dekanı'],
            ['Prof. Dr. Sera REYHANİ YÜKSEL','Hukuk Fakültesi Dekan V.'],
            ['Prof. Dr. Mustafa SİNANOĞLU','İktisadi ve İdari Bilimler Fakültesi Dekan V.'],
            ['Prof. Dr. Ahmet YÜCEL','İlahiyat Fakültesi Dekanı'],
            ['Prof. Dr. Abdulsamet HAŞILOĞLU','Mühendislik ve Doğa Bilimleri Fakültesi Dekanı'],
            ['Dr. Öğr. Üyesi İbrahim HELALŞAH','Yabancı Diller Yüksekokulu Müdürü'],
            ['Dr. Öğr. Üyesi Metin DUMANLI','Bilişim Teknolojileri MYO Müdürü'],
            ['Dr. Öğr. Üyesi Gülsüm PEHLİVAN AĞIRAKÇA','Araştırma Merkezleri Kalite Komisyonu Başkanı'],
            ['Prof. Dr. Mehmet Taha BOYALIK','Sosyal Bilimler Enstitüsü Müdürü'],
            ['Doç. Dr. Talip YİĞİT','Kalite Güvencesi ve Akreditasyon Koordinatörü'],
            ['A. Rüştü MUMCU','Genel Sekreter'],
            ['Azize ÇIRTLIK','Rektör Danışmanı'],
            ['Erdal İŞCAN','İdari ve Mali İşler Daire Başkanı'],
            ['Hacer Pınar ER','Üniversite Öğrenci Kalite Komisyonu Başkanı'],
          ].map(([name,role,cls])=>`
            <tr>
              <td>${name}${cls==='başkan'?'<span class="chair-badge">Başkan</span>':''}</td>
              <td>${role}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
      <div class="info-box" style="margin-top:20px">
        Komisyon toplantı tutanakları ve Kalite Yönergesi PDF belgesi için <strong>kalite@29mayis.edu.tr</strong> adresine başvurabilirsiniz.
      </div>
    `
  },

  'kalite-alt-komisyonlari': {
    title: 'Kalite Alt Komisyonları',
    breadcrumb: ['Komisyonlar', 'Kalite Alt Komisyonları'],
    render: () => {
      const subs = [
        {
          title: 'Liderlik, Yönetim ve Kalite Alt Komisyonu',
          rows: [
            ['Prof. Dr. İlyas ÇELEBİ','Rektör Yardımcısı','Başkan'],
            ['Prof. Dr. Sera REYHANİ YÜKSEL','Hukuk Fakültesi Dekan V.','Üye'],
            ['Prof. Dr. Feridun Mustafa EMECEN','Edebiyat Fakültesi Dekanı','Üye'],
            ['Prof. Dr. Abdulsamet HAŞILOĞLU','Müh. ve Doğa Bilimleri Fakültesi Dekanı','Üye'],
            ['A. Rüştü MUMCU','Genel Sekreter','Raportör'],
          ]
        },
        {
          title: 'Eğitim-Öğretim Kalite Alt Komisyonu',
          rows: [
            ['Prof. Dr. İlyas ÇELEBİ','Rektör Yardımcısı','Başkan'],
            ['Prof. Dr. Halil İbrahim SAĞLAM','Eğitim Fakültesi Dekanı','Üye'],
            ['Prof. Dr. Ahmet YÜCEL','İlahiyat Fakültesi Dekanı','Üye'],
            ['Prof. Dr. Ahmet KOÇ','Öğretim Üyesi','Üye'],
            ['Neşe DURUKAN','Öğrenci İşleri Daire Başkanı','Raportör'],
          ]
        },
        {
          title: 'Araştırma ve Geliştirme Kalite Alt Komisyonu',
          rows: [
            ['Prof. Dr. Murat DOĞRUEL','Rektör Yardımcısı','Başkan'],
            ['Dr. Öğr. Üyesi Gülsüm PEHLİVAN AĞIRAKÇA','Araştırma Merkezleri Kalite Kom. Başkanı','Üye'],
            ['Dr. Öğr. Üyesi Ramazan ALGIN','Öğretim Üyesi','Üye'],
            ['Prof. Dr. M. Taha BOYALIK','Sosyal Bilimler Enstitüsü Müdürü','Üye'],
            ['Azize ÇIRTLIK','Rektör Danışmanı','Raportör'],
          ]
        },
        {
          title: 'Toplumsal Katkı Kalite Alt Komisyonu',
          rows: [
            ['Prof. Dr. Murat DOĞRUEL','Rektör Yardımcısı','Başkan'],
            ['Dr. Öğr. Üyesi Nida ERDEM','Öğretim Üyesi','Üye'],
            ['Dr. Öğr. Üyesi Nur AKBULUT KILIÇOĞLU','Öğretim Üyesi','Üye'],
            ['Prof. Dr. A. Ayhan ÇİTİL','Öğretim Üyesi','Üye'],
            ['Gürhan TOKTAŞ','Kurumsal İletişim ve Tanıtım Daire Başkanı V. / Sağlık, Spor ve Kültür Daire Başkanı','Raportör'],
          ]
        }
      ];
      return subs.map((s,i)=>`
        <div class="sub-section">
          <div class="sub-section-head">
            <div class="num">${i+1}</div>
            <h3>${s.title}</h3>
          </div>
          <div class="sub-section-body">
            <table class="member-table" style="border-radius:0;box-shadow:none;">
              <thead><tr><th>Ad Soyad</th><th>Birim / Görev</th><th>Komis. Görevi</th></tr></thead>
              <tbody>
                ${s.rows.map(([n,b,g])=>`<tr><td>${n}</td><td>${b}</td><td>${g}</td></tr>`).join('')}
              </tbody>
            </table>
          </div>
        </div>
      `).join('');
    }
  },

  'ogrenci-kalite-komisyonu': {
    title: 'Öğrenci Kalite Komisyonu',
    breadcrumb: ['Komisyonlar', 'Öğrenci Kalite Komisyonu'],
    render: () => `
      <div class="prose"><p>Öğrenci Kalite Komisyonu, üniversitenin tüm akademik birimlerinden öğrenci temsilcilerinden oluşmakta ve kalite güvencesi süreçlerine öğrenci sesini taşımaktadır.</p></div>
      <table class="member-table">
        <thead><tr><th>Ad Soyad</th><th>Fakülte / Birim</th><th>Bölüm</th><th>Temsil</th></tr></thead>
        <tbody>
          ${[
            ['Hacer Pınar ER','Sosyal Bilimler Enstitüsü','Temel İslam Bilimleri (Doktora)','Başkan / Enstitü Temsilcisi'],
            ['Beyzanur BİLGİN','Edebiyat Fakültesi','Tarih','Fakülte Temsilcisi'],
            ['Mina ÖZÜLKÜ','Edebiyat Fakültesi','Arapça Mütercim-Tercümanlık','Yabancı Diller YO Temsilcisi'],
            ['Murat DÖNMEZ','İİBF','Siyaset Bilimi ve Uluslararası İlişkiler','Uluslararası İlişkiler Kulübü Temsilcisi'],
            ['Mervegül ÖLÇEK','İİBF','İktisat','Fakülte Temsilcisi'],
            ['Emine Sude KESKİN','İİBF','Sosyal Hizmet','Engelli Öğrenci Temsilcisi'],
            ['Mikail MARAŞ','İİBF','Yönetim Bilişim Sistemleri','Medeniyet Araştırmaları Kulübü Temsilcisi'],
            ['Daouda CISSE','İİBF','Yönetim Bilişim Sistemleri','Uluslararası Öğrenci Temsilcisi'],
            ['Aidana ALMAS','İİBF','Yönetim Bilişim Sistemleri','Uluslararası Öğrenci Temsilcisi'],
            ['Zeynep FIRAT','Eğitim Fakültesi','Rehberlik ve Psikolojik Danışmanlık','Fakülte Temsilcisi'],
            ['Burak İLGİ','İlahiyat Fakültesi','İlahiyat','Fakülte Temsilcisi'],
            ['Esma ÇİÇEK','Hukuk Fakültesi','Hukuk','Hukuk Kulübü Temsilcisi'],
            ['Erdal İNGENÇ','Hukuk Fakültesi','Hukuk','Fakülte Temsilcisi'],
            ['Ali Orhun ERKAN','Müh. ve Doğa Bilimleri Fakültesi','Bilgisayar Mühendisliği','Fakülte Temsilcisi'],
            ['Emircan BİLECEN','Bilişim Teknolojileri MYO','Kurumsal Bilişim Uzmanlığı','MYO Temsilcisi'],
          ].map(([n,f,b,t])=>`<tr><td>${n}</td><td>${f}</td><td>${b}</td><td>${t}</td></tr>`).join('')}
        </tbody>
      </table>
    `
  },

  'izleme-degerlendirme': {
    title: 'Kalite İzleme ve Değerlendirme Komisyonları',
    breadcrumb: ['Komisyonlar', 'İzleme ve Değerlendirme Komisyonları'],
    render: () => `
      <div class="prose"><p>Üniversitenin her akademik birimi bünyesinde ayrı bir kalite izleme ve değerlendirme komisyonu faaliyet göstermektedir. Bu komisyonlar akademisyenler, yönetim personeli ve öğrenci temsilcilerinden oluşmaktadır.</p></div>
      ${[
        ['Edebiyat Fakültesi','Prof. Dr. Feridun M. EMECEN','8 akademik üye ve 1 fakülte sekreteri'],
        ['Eğitim Fakültesi','Prof. Dr. Halil İbrahim SAĞLAM','12 akademik üye ve 1 öğrenci temsilcisi'],
        ['Hukuk Fakültesi','Prof. Dr. Sera REYHANİ YÜKSEL','2 başkan yardımcısı ve 6 üye'],
        ['İktisadi ve İdari Bilimler Fakültesi','Prof. Dr. Yaşar AKGÜN','Fakülte bünyesinde oluşturulan komisyon'],
        ['İlahiyat Fakültesi','Prof. Dr. Ahmet YÜCEL','Fakülte bünyesinde oluşturulan komisyon'],
        ['Sosyal Bilimler Enstitüsü','Prof. Dr. Mehmet Taha BOYALIK','Enstitü bünyesinde oluşturulan komisyon'],
        ['Yabancı Diller Yüksekokulu','Dr. Öğr. Üyesi İbrahim HELALŞAH','Yüksekokul bünyesinde oluşturulan komisyon'],
        ['Araştırma Merkezleri','Prof. Dr. Yaşar AKGÜN','Tüm araştırma merkezlerini kapsayan komisyon'],
      ].map(([birim,baskan,yapı])=>`
        <div class="sub-section" style="margin-bottom:12px;">
          <div class="sub-section-head" style="background:var(--navy);">
            <h3>${birim}</h3>
          </div>
          <table class="member-table" style="border-radius:0;box-shadow:none;">
            <tbody>
              <tr><td style="width:160px;color:var(--muted);font-weight:400">Komisyon Başkanı</td><td>${baskan}</td></tr>
              <tr><td style="color:var(--muted);font-weight:400">Yapı</td><td>${yapı}</td></tr>
            </tbody>
          </table>
        </div>
      `).join('')}
    `
  },

  'akreditasyon-koordinatorlugu': {
    title: 'Kalite Güvencesi ve Akreditasyon Koordinatörlüğü',
    breadcrumb: ['Komisyonlar', 'Akreditasyon Koordinatörlüğü'],
    render: () => `
      <div class="prose"><p>Kalite Güvencesi ve Akreditasyon Koordinatörlüğü; kurumsal kalite güvencesi sisteminin yönetimi, akreditasyon başvuruları ve izleme süreçlerinden sorumludur.</p></div>
      <table class="member-table">
        <thead><tr><th>Ad Soyad</th><th>Görevi</th></tr></thead>
        <tbody>
          ${[
            ['Doç. Dr. Talip YİĞİT','Koordinatör','başkan'],
            ['Azize ÇIRTLIK','Üye'],
            ['Ülkü AYAZ','Üye'],
            ['Zeynep BURSA','Üye'],
            ['Mehlika ÇAKAN','Üye'],
            ['Arş. Gör. Murat DİNÇER','Üye'],
          ].map(([n,g,cls])=>`
            <tr>
              <td>${n}${cls==='başkan'?'<span class="chair-badge">Koordinatör</span>':''}</td>
              <td>${g}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
      <div class="contact-card" style="margin-top:24px;">
        <div class="contact-card-head">
          <h3>İletişim</h3>
          <p>Akreditasyon ve kalite güvencesi konularında</p>
        </div>
        <div class="contact-card-body">
          <div class="contact-row">
            <div class="contact-icon">📧</div>
            <div class="contact-detail"><label>E-Posta</label><span>kalite@29mayis.edu.tr</span></div>
          </div>
          <div class="contact-row">
            <div class="contact-icon">📞</div>
            <div class="contact-detail"><label>Telefon</label><span>0216 474 08 60 — Dahili: 2840</span></div>
          </div>
          <div class="contact-row">
            <div class="contact-icon">📍</div>
            <div class="contact-detail"><label>Adres</label><span>Elmalıkent Mah. Elmalıkent Cad. No:4, Ümraniye / İstanbul</span></div>
          </div>
        </div>
      </div>
    `
  },

  'organizasyon-semalari': {
    title: 'Kalite Yönetimi Organizasyon Şemaları',
    breadcrumb: ['Komisyonlar', 'Organizasyon Şemaları'],
    render: () => `
      <div class="prose"><p>İstanbul 29 Mayıs Üniversitesi Kalite Güvence Sistemi'nin organizasyonel yapısı üç temel şema ile belgelenmiştir.</p></div>
      <div class="policy-grid">
        ${[
          { title:'Kalite Güvence Sistemi Organizasyon Şeması', body:'Üniversitenin kalite yönetim hiyerarşisini, komisyonlar arası ilişkileri ve sorumluluk dağılımını gösteren ana şema.' },
          { title:'Araştırma Yönetimi Organizasyon Şeması', body:'Araştırma-geliştirme faaliyetlerinin yönetim yapısını ve birimler arası koordinasyon mekanizmalarını gösteren şema.', gold:true },
          { title:'Toplumsal Katkı Yönetimi Organizasyon Şeması', body:'Topluma hizmet projelerinin yönetim yapısını ve paydaşlarla ilişki modelini gösteren şema.', gold:true },
        ].map(c=>`<div class="policy-card ${c.gold?'gold':''}"><h3>${c.title}</h3><p>${c.body}</p><p style="margin-top:10px;font-size:12px;color:var(--mid)">📄 Belge için kalite@29mayis.edu.tr adresine başvurunuz.</p></div>`).join('')}
      </div>
    `
  },

  'uzaktan-amac-hedefler': {
    title: 'Uzaktan Eğitimde Kalite — Amaç ve Hedefler',
    breadcrumb: ['Uzaktan Eğitimde Kalite', 'Amaç ve Hedefler'],
    render: () => `
      <div class="info-box">
        <strong>Misyon:</strong> Uzaktan eğitim uygulamalarını üniversitenin tüm etkinlik alanlarında en verimli şekilde yürütmek ve öğrencileri olumsuz etkilerden koruyacak süreçler geliştirmek.<br><br>
        <strong>Vizyon:</strong> Öncü, aranır ve örnek üniversite olma idealini uzaktan eğitim süreçlerinde paydaş katılımıyla gerçekleştirmek.
      </div>
      <p class="sh">Stratejik Hedefler — 6 Etkinlik Alanı</p>
      ${[
        { n:'1', title:'Kalite Güvence Sistemi', items:['Kalite komisyonlarının mekanizmalarını sürece uygun hale getirme','Kalite çalışmalarını nitelik artırıcı faaliyetlerle yaygınlaştırma','Öğrenci merkezli yaklaşımla kalite anlayışını sürdürme'] },
        { n:'2', title:'Eğitim-Öğretim', items:['Erişilebilir ve kullanışlı eğitim platformları sunmak','Öğrencilerin aktif katılımını teşvik etme','Farklı öğrenme ortamlarında etkileşim fırsatları yaratma'] },
        { n:'3', title:'Araştırma-Geliştirme', items:['Kütüphane ve teşvik sistemini işlevsel tutma','Sürecin nedenlerine yönelik araştırmaları destekleme','Öncü üniversiteler arasında konumlanma'] },
        { n:'4', title:'Toplumsal Hizmet', items:['Uluslararası yeterlilikte akademisyen yetiştirme','Öğrencileri toplumsal hizmet çalışmalarına dahil etme','Akademisyen ve lisansüstü öğrencilerin üretkenliğini artırma'] },
        { n:'5', title:'Yönetişim', items:['Tüm üniversite üyelerine destekleyici hizmetler sunma','Hizmetlerin geliştirilmesini ve etkin sunulmasını sağlama','İç paydaşların ulaşabileceği politika ve uygulamalar belirleme'] },
        { n:'6', title:'Uluslararasılaşma', items:['Üniversite değerleriyle uyumlu uluslararası iş birlikleri geliştirme','Uluslararası ve engelli öğrencilerin ihtiyaçlarını takip etme','Kurumsal kültürü uzaktan eğitim çerçevesinde yaygınlaştırma'] },
      ].map(s=>`
        <div class="sub-section" style="margin-bottom:12px;">
          <div class="sub-section-head">
            <div class="num">${s.n}</div>
            <h3>${s.title}</h3>
          </div>
          <div class="sub-section-body" style="padding:14px 20px;">
            <ul style="list-style:none;display:flex;flex-direction:column;gap:8px;">
              ${s.items.map(i=>`<li style="font-size:13.5px;color:var(--text);padding-left:18px;position:relative"><span style="position:absolute;left:0;color:var(--mid);font-weight:700">›</span>${i}</li>`).join('')}
            </ul>
          </div>
        </div>
      `).join('')}
    `
  },

  'uzaktan-komisyon': {
    title: 'Uzaktan Eğitim Komisyonu',
    breadcrumb: ['Uzaktan Eğitimde Kalite', 'Uzaktan Eğitim Komisyonu'],
    render: () => `
      <div class="prose"><p>Uzaktan Eğitim Komisyonu; üniversitede uzaktan eğitim uygulamalarının altyapı hazırlığı, yönetmelik oluşturma ve geliştirme, geri bildirim toplama görevlerini yürütür. 1 başkan ve 6 üyeden oluşmaktadır.</p></div>
      <table class="member-table">
        <thead><tr><th>Ad Soyad</th><th>Görevi</th></tr></thead>
        <tbody>
          ${[
            ['Prof. Dr. İlyas ÇELEBİ','Başkan','başkan'],
            ['Prof. Dr. Mehmet Taha BOYALIK','Üye'],
            ['Doç. Dr. Alphan Yusuf AKGÜL','Üye'],
            ['Dr. Öğr. Üyesi Arzu ÖZTÜRK','Üye'],
            ['Dr. Öğr. Üyesi İbrahim HELALŞAH','Üye'],
            ['Dr. Öğr. Üyesi Merve ARBAK','Üye'],
          ].map(([n,g,cls])=>`
            <tr>
              <td>${n}${cls==='başkan'?'<span class="chair-badge">Başkan</span>':''}</td>
              <td>${g}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    `
  },

  'uzaktan-alt-komisyon': {
    title: 'Uzaktan Eğitim Alt Komisyonu',
    breadcrumb: ['Uzaktan Eğitimde Kalite', 'Uzaktan Eğitim Alt Komisyonu'],
    render: () => `
      <table class="member-table">
        <thead><tr><th>Ad Soyad</th><th>Fakülte</th><th>Görevi</th></tr></thead>
        <tbody>
          ${[
            ['Dr. Öğr. Üyesi Arzu Öztürk','Eğitim Fakültesi','Başkan'],
            ['Dr. Öğr. Üyesi Şeyma Güldal','Eğitim Fakültesi','Üye'],
            ['Dr. Öğr. Üyesi Oğuz Keleş','Eğitim Fakültesi','Üye'],
            ['Dr. Öğr. Üyesi Mehmet Akıncı','Eğitim Fakültesi','Üye'],
            ['Dr. Öğr. Üyesi Esat Burak ŞAMAN','Edebiyat Fakültesi','Üye'],
            ['Arş. Gör. Hüseyin YILDIZ','Edebiyat Fakültesi','Üye'],
            ['Dr. Öğr. Üyesi Cengiz YOLCU','Edebiyat Fakültesi','Üye'],
            ['Öğr. Gör. Ömer UZUNAĞAÇ','Edebiyat Fakültesi','Üye'],
            ['Arş. Gör. Uğur Yankı ÜÇKARDEŞLER','Edebiyat Fakültesi','Üye'],
            ['Arş. Gör. Şeyma ÖZTÜRK SAKA','Hukuk Fakültesi','Üye'],
            ['Prof. Dr. Yaşar AKGÜN','İktisadi ve İdari Bilimler Fakültesi','Üye'],
            ['Doç. Dr. Harun ŞENCAL','İktisadi ve İdari Bilimler Fakültesi','Üye'],
            ['Doç. Dr. Talip YİĞİT','İktisadi ve İdari Bilimler Fakültesi','Üye'],
            ['Arş. Gör. Sami Turan EREL','İlahiyat Fakültesi','Üye'],
            ['Arş. Gör. Ahmet AYTEP','İlahiyat Fakültesi','Üye'],
          ].map(([n,f,g])=>`<tr><td>${n}</td><td>${f}</td><td>${g}</td></tr>`).join('')}
        </tbody>
      </table>
    `
  },

  'uzaktan-ogretim-sureci': {
    title: 'Uzaktan Eğitim Öğretim Süreci',
    breadcrumb: ['Uzaktan Eğitimde Kalite', 'Öğretim Süreci'],
    render: () => `
      <div class="info-box"><strong>Tanım:</strong> Uzaktan eğitim, eğitim-öğretim faaliyetlerinin web tabanlı olarak sürdürüldüğü süreçtir. Uzaktan Eğitim Komisyonu, bu faaliyetlerin etkin yürütülmesi için gerekli planlamaları yapar.</div>
      <p class="sh">Süreç Adımları</p>
      <div class="steps">
        ${[
          ['Duyuru ve Yayın','Uzaktan eğitim kararının web kanalları üzerinden tüm paydaşlarla paylaşılması.'],
          ['Planlama','Uzaktan eğitim sürecine ilişkin gerekli planlamaların oluşturulması.'],
          ['Bilgilendirme','Öğrenci ve akademisyenlerin kullanılacak platformlar, ölçme-değerlendirme yöntemleri gibi konularda bilgilendirilmesi.'],
          ['Hedef Belirleme','Programların amaç ve hedeflerinin uzaktan eğitim koşullarına uyarlanması.'],
          ['Müfredat Revizyonu','Derslerin içeriklerinin uzaktan eğitim imkân ve koşullarına uygun hale getirilmesi.'],
          ['Değerlendirme İlkeleri','Ölçme ve değerlendirme yöntemlerinin hukuki açıdan doğru biçimde belirlenmesi.'],
          ['Ortam Tasarımı ve Şeffaflık','Değerlendirme kriterlerinin önceden belirlenmesi ve şeffaflık ilkesinin uygulanması.'],
        ].map(([t,d],i)=>`
          <div class="step">
            <div class="step-num">${i+1}</div>
            <div class="step-body"><h4>${t}</h4><p>${d}</p></div>
          </div>
        `).join('')}
      </div>
      <div class="info-box" style="margin-top:8px">
        <strong>Sorumluluk Dağılımı:</strong> Akademik Birimler, İdari Birimler, Uzaktan Eğitim Komisyonu ve Rektörlük kurumsal süreçte farklı roller üstlenmektedir.
      </div>
    `
  },

  'uzaktan-yonetimsel-surec': {
    title: 'Uzaktan Eğitim Yönetimsel Süreci',
    breadcrumb: ['Uzaktan Eğitimde Kalite', 'Yönetimsel Süreç'],
    render: () => `
      <div class="info-box"><strong>Kapsam:</strong> Uzaktan eğitimde yapısal süreç; web tabanlı eğitim faaliyetlerinin yönetimsel işleyişini ve YÖKAK ölçütleriyle uyumunu ele alır. Kullanılan platform: <strong>Microsoft Teams</strong></div>
      <p class="sh">Yönetimsel Süreç Adımları</p>
      <div class="steps">
        ${[
          ['YÖKAK Rehberinin İncelenmesi','Uzaktan eğitimde kalite güvencesi ölçütlerini belirleyen YÖKAK rehberinin incelenmesi ve kuruma uyarlanması.'],
          ['Komisyon Oluşturulması','Uzaktan eğitim süreçlerini yönetecek komisyon ve alt komisyonların oluşturulması.'],
          ['İhtiyaç Belirlenmesi','Kurumun uzaktan eğitim altyapısı ve kaynak ihtiyaçlarının tespit edilmesi.'],
          ['İş ve İşlemlerin Tanımlanması','Uzaktan eğitim sürecinde görev ve sorumluluklara ilişkin iş tanımlarının yapılması.'],
          ['Web Platformu Tanımlaması','Microsoft Teams platformunun belirlenmesi, yapılandırılması ve kullanıma hazır hale getirilmesi.'],
          ['Yaygınlaştırma ve Bilgilendirme','Tüm paydaşların platform ve süreçler hakkında bilgilendirilmesi; eğitimlerin düzenlenmesi.'],
          ['Başlatma, İzleme ve Raporlama','Uzaktan eğitimin başlatılması; süreçlerin izlenmesi ve periyodik raporlama yapılması.'],
        ].map(([t,d],i)=>`
          <div class="step">
            <div class="step-num">${i+1}</div>
            <div class="step-body"><h4>${t}</h4><p>${d}</p></div>
          </div>
        `).join('')}
      </div>
      <div class="info-box" style="margin-top:8px">
        <strong>Sorumluluk Matrisi:</strong> Komisyon, Senato ve Rektörlük arasında görevler "Sorumlu", "Bilgi", "Destek Verir" ve "Onaylayan" statüleriyle dağıtılmıştır.
      </div>
    `
  },

  iletisim: {
    title: 'İletişim',
    breadcrumb: ['İletişim'],
    render: () => `
      <div class="contact-card">
        <div class="contact-card-head">
          <h3>Kalite Güvencesi ve Akreditasyon Koordinatörlüğü</h3>
          <p>İstanbul 29 Mayıs Üniversitesi</p>
        </div>
        <div class="contact-card-body">
          <div class="contact-row">
            <div class="contact-icon">👤</div>
            <div class="contact-detail">
              <label>Koordinatör</label>
              <span>Doç. Dr. Talip YİĞİT</span>
            </div>
          </div>
          <div class="contact-row">
            <div class="contact-icon">📧</div>
            <div class="contact-detail">
              <label>E-Posta</label>
              <span>kalite@29mayis.edu.tr</span>
            </div>
          </div>
          <div class="contact-row">
            <div class="contact-icon">📞</div>
            <div class="contact-detail">
              <label>Telefon</label>
              <span>0216 474 08 60 — Dahili: 2840</span>
            </div>
          </div>
          <div class="contact-row">
            <div class="contact-icon">📠</div>
            <div class="contact-detail">
              <label>Faks</label>
              <span>+90 216 474 08 75</span>
            </div>
          </div>
          <div class="contact-row">
            <div class="contact-icon">📍</div>
            <div class="contact-detail">
              <label>Adres</label>
              <span>Elmalıkent Mah. Elmalıkent Cad. No:4, Ümraniye / İstanbul</span>
            </div>
          </div>
          <div class="contact-row">
            <div class="contact-icon">🏛️</div>
            <div class="contact-detail">
              <label>Yerleşke</label>
              <span>Ümraniye Elmalıkent Ana Yerleşkesi</span>
            </div>
          </div>
          <div class="contact-row">
            <div class="contact-icon">📬</div>
            <div class="contact-detail">
              <label>KEP Adresi</label>
              <span>29mayis@hs03.kep.tr</span>
            </div>
          </div>
        </div>
      </div>

      <p class="sh">Diğer Birimler</p>
      <div class="policy-grid">
        ${[
          { title:'Ana Yerleşke', body:'Tel: +90 216 474 08 60\nE-posta: 29mayis@29mayis.edu.tr' },
          { title:'ARÖMER', body:'Tel: +90 216 988 12 33', gold:true },
          { title:'SÜREM', body:'Tel: +90 216 474 08 61', gold:true },
          { title:'TÜRÖMER', body:'Tel: +90 216 474 08 60' },
          { title:'Uluslararası Ofis', body:'international.29mayis.edu.tr' },
        ].map(c=>`<div class="policy-card ${c.gold?'gold':''}"><h3>${c.title}</h3><p style="white-space:pre-line">${c.body}</p></div>`).join('')}
      </div>
    `
  }
};

/* ── ROUTER ── */
function navigate(pageId) {
  // Find page config
  const pageCfg = PAGES[pageId];
  if (!pageCfg) return;

  // Hide all pages, show target
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const target = document.getElementById('page-' + pageId);
  if (target) {
    target.innerHTML = renderPage(pageCfg);
    target.classList.add('active');
  }

  // Update nav active states
  document.querySelectorAll('.nav-item, .nav-single').forEach(el => {
    el.classList.toggle('active', el.dataset.page === pageId);
  });

  // Open parent group if needed
  document.querySelectorAll('.nav-group').forEach(g => {
    const items = g.querySelectorAll('.nav-item');
    const hasActive = Array.from(items).some(i => i.dataset.page === pageId);
    if (hasActive) {
      const label = g.querySelector('.nav-group-label');
      const list  = g.querySelector('.nav-items');
      if (label && list) { label.classList.add('open'); list.classList.add('open'); }
    }
  });

  // Update breadcrumb
  const bc = document.getElementById('breadcrumb-path');
  if (bc && pageCfg.breadcrumb) {
    bc.innerHTML = pageCfg.breadcrumb.map((b,i) =>
      i < pageCfg.breadcrumb.length - 1
        ? `<a href="#${pageId}">${b}</a><span class="bc-sep">›</span>`
        : `<span class="bc-current">${b}</span>`
    ).join('');
  }

  // Update hash
  history.replaceState(null, '', '#' + pageId);

  // Scroll content to top
  document.querySelector('.content')?.scrollTo(0, 0);

  // Close mobile sidebar
  document.getElementById('sidebar')?.classList.remove('open');
}

function renderPage(cfg) {
  return `
    <h1 class="page-title">${cfg.title}</h1>
    <div class="title-rule"></div>
    ${cfg.render()}
  `;
}

/* ── BUILD NAV ── */
function buildNav() {
  const sidebar = document.getElementById('sidebar');
  if (!sidebar) return;

  let html = '';
  NAV.forEach(group => {
    if (group.single) {
      html += `<div class="nav-group">
        <div class="nav-single${group.id==='home'?' active':''}" data-page="${group.id}" onclick="navigate('${group.id}')">${group.label}</div>
      </div>`;
    } else {
      html += `<div class="nav-group">
        <div class="nav-group-label" onclick="toggleGroup(this)">
          ${group.label}<span class="arrow">▾</span>
        </div>
        <div class="nav-items">
          ${group.children.map(c=>`
            <div class="nav-item" data-page="${c.id}" onclick="navigate('${c.id}')">${c.label}</div>
          `).join('')}
        </div>
      </div>`;
    }
  });
  sidebar.innerHTML = html;
}

function toggleGroup(el) {
  el.classList.toggle('open');
  el.nextElementSibling?.classList.toggle('open');
}

/* ── BUILD PAGE CONTAINERS ── */
function buildPages() {
  const content = document.querySelector('.content');
  if (!content) return;
  Object.keys(PAGES).forEach(id => {
    const div = document.createElement('div');
    div.className = 'page';
    div.id = 'page-' + id;
    content.appendChild(div);
  });
}

/* ── HAMBURGER ── */
document.getElementById('hamburger')?.addEventListener('click', () => {
  document.getElementById('sidebar')?.classList.toggle('open');
});

/* ── INIT ── */
buildNav();
buildPages();

const hash = location.hash.replace('#', '');
navigate(PAGES[hash] ? hash : 'home');
