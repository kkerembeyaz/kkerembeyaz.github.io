/* =========================================================
   Kerem Beyaz · Portfolyo
   İçerik bu dosyada tutuluyor. Yeni proje eklemek için
   PROJECTS dizisine yeni bir nesne eklemeniz yeterli.
   ========================================================= */

const GITHUB = "https://github.com/kkerembeyaz";

const PROJECTS = [
  {
    id: "machine-failure",
    featured: true,
    date: { tr: "Ekim 2026", en: "Oct 2026" },
    live: "https://machine-failure-type-classifier.onrender.com",
    repo: `${GITHUB}/machine-failure-type-classifier`,
    title: { tr: "Makine Arıza Türü Sınıflandırıcı", en: "Machine Failure Type Classifier" },
    desc: {
      tr: "AI4I 2020 tahminsel bakım veri seti üzerinde, sensör verilerinden (sıcaklık, devir, tork, takım aşınması) bir makinenin arızalanıp arızalanmayacağını ve arıza türünü tahmin eden 6 sınıflı PyTorch modeli. Model FastAPI ile servis edildi, Docker ile paketlendi ve Render'da canlıya alındı.",
      en: "A 6-class PyTorch model on the AI4I 2020 predictive-maintenance dataset that predicts whether a machine will fail, and which failure type, from sensor readings (temperature, rpm, torque, tool wear). Served with FastAPI, packaged with Docker and deployed on Render."
    },
    highlights: {
      tr: [
        "%96,7 çoğunluk sınıfı: 4 farklı class-weight stratejisi sistematik olarak karşılaştırıldı, nihai ağırlıklar sınıf bazlı elle belirlendi",
        "Tutarsız 33 satır tespit edilip çıkarıldı; stratified 70/15/15 bölme ile 18 örneklik sınıf bile her sette korundu",
        "Test seti model seçimi bitene kadar hiç açılmadı; scaler ve etiket haritaları inference için modelle birlikte kaydedildi"
      ],
      en: [
        "96.7% majority class: 4 class-weight strategies compared systematically, final per-class weights set manually with rationale",
        "33 inconsistent rows detected and dropped; stratified 70/15/15 split kept even an 18-sample class in every subset",
        "Test set untouched until model selection ended; scaler and label maps saved alongside the model for inference"
      ]
    },
    metrics: [
      { label: { tr: "No Failure precision", en: "No Failure precision" }, value: "~%99" },
      { label: { tr: "OSF recall (test)", en: "OSF recall (test)" }, value: "%100" },
      { label: { tr: "Mimari", en: "Architecture" }, value: "6→16→16→6" }
    ],
    tags: ["PyTorch", "FastAPI", "Docker", "Render", "scikit-learn", "pandas"]
  },
  {
    id: "steel-energy",
    featured: true,
    date: { tr: "Ağustos 2026", en: "Aug 2026" },
    repo: `${GITHUB}/steel_industry_energy_forecasting`,
    title: { tr: "Çelik Fabrikası Enerji Tüketimi Tahmini", en: "Steel Plant Energy Consumption Forecasting" },
    desc: {
      tr: "Güney Kore'deki bir çelik fabrikasının 15 dakikalık 35.040 ölçümüyle anlık elektrik tüketimini (kWh) tahmin eden regresyon hattı. Sızıntı tespiti, döngüsel zaman kodlaması, Pipeline içinde ölçekleme ve 5 modelin çapraz doğrulamayla karşılaştırılması.",
      en: "A regression pipeline predicting real-time electricity usage (kWh) of a South Korean steel plant from 35,040 fifteen-minute readings. Leakage detection, cyclical time encoding, scaling inside a Pipeline and cross-validated comparison of 5 models."
    },
    highlights: {
      tr: [
        "CO2 (korelasyon 0,988) ve Load_Type sütunları hedeften türetilmiş olduğu için sızıntı kaynağı olarak tespit edilip çıkarıldı",
        "Saat bilgisi sin/cos ile döngüsel kodlandı; ColumnTransformer + Pipeline sayesinde CV sırasında sızıntı riski sıfırlandı",
        "Random Forest'ın beklenmedik düşük hatası max_depth kısıtı ve shuffle'lı KFold ile ayrıca doğrulandı"
      ],
      en: [
        "CO2 (0.988 correlation) and Load_Type identified as target-derived leakage and removed",
        "Hour encoded cyclically with sin/cos; ColumnTransformer + Pipeline eliminated leakage during CV",
        "Random Forest's surprisingly low error was stress-tested with max_depth limits and shuffled KFold"
      ]
    },
    metrics: [
      { label: { tr: "Test RMSE", en: "Test RMSE" }, value: "0,744 kWh" },
      { label: { tr: "Test R²", en: "Test R²" }, value: "1,000" },
      { label: { tr: "Model", en: "Model" }, value: "Random Forest" }
    ],
    tags: ["scikit-learn", "Random Forest", "SVR", "pandas", "seaborn"]
  },
  {
    id: "churn",
    featured: true,
    date: { tr: "Ağustos 2026", en: "Aug 2026" },
    repo: `${GITHUB}/customer-churn-prediction-ml`,
    title: { tr: "Müşteri Kaybı (Churn) Tahmini", en: "Customer Churn Prediction" },
    desc: {
      tr: "Telco veri setindeki 7.043 müşteri için ayrılma tahmini: ön işleme, encoding, stratified bölme ve 5-fold CV ile 5 modelin (Logistic Regression, KNN, Decision Tree, Random Forest, SVM) karşılaştırılması.",
      en: "Churn prediction for 7,043 Telco customers: preprocessing, encoding, stratified split and 5-fold CV comparison of 5 models (Logistic Regression, KNN, Decision Tree, Random Forest, SVM)."
    },
    highlights: {
      tr: [
        "Logistic Regression en dengeli sonucu verdi; sınırsız Decision Tree'nin overfitting'i Random Forest ile kıyaslanarak açıklandı",
        "Churn sınıfındaki düşük recall (0,57) iş maliyeti açısından yorumlandı; class_weight ve eşik ayarı iyileştirme olarak önerildi"
      ],
      en: [
        "Logistic Regression gave the most balanced result; the unconstrained Decision Tree's overfitting was explained against Random Forest",
        "Low churn recall (0.57) interpreted in business-cost terms; class_weight and threshold tuning proposed as next steps"
      ]
    },
    metrics: [
      { label: { tr: "Accuracy", en: "Accuracy" }, value: "0,80" },
      { label: { tr: "F1 (CV)", en: "F1 (CV)" }, value: "0,60" }
    ],
    tags: ["scikit-learn", "Logistic Regression", "pandas", "matplotlib"]
  },
  {
    id: "fraud-eda",
    featured: false,
    date: { tr: "Temmuz 2026", en: "Jul 2026" },
    repo: `${GITHUB}/credit-card-fraud-eda`,
    title: { tr: "Kredi Kartı Dolandırıcılığı · EDA", en: "Credit Card Fraud · EDA" },
    desc: {
      tr: "284.807 işlemlik veri setinde keşifsel analiz: 1.081 tekrar satırın temizlenmesi, %0,17'lik aşırı sınıf dengesizliğinin log ölçekle görselleştirilmesi, tutar/saat dağılımları ve PCA bileşenlerinin fraud ile korelasyonu.",
      en: "Exploratory analysis of 284,807 transactions: removing 1,081 duplicates, visualising the extreme 0.17% class imbalance on a log scale, amount/hour distributions and correlation of PCA components with fraud."
    },
    tags: ["pandas", "seaborn", "Jupyter"]
  },
  {
    id: "spotify-eda",
    featured: false,
    date: { tr: "Temmuz 2026", en: "Jul 2026" },
    repo: `${GITHUB}/spotify-2023-eda`,
    title: { tr: "Spotify 2023 En Çok Dinlenenler · EDA", en: "Spotify 2023 Top Songs · EDA" },
    desc: {
      tr: "Kaggle veri setinde dtype bozukluklarının temizlenmesi, IQR ile aykırı değer analizi, korelasyon matrisi ve zaman trendi. Bulgular ayrı bir raporda belgelendi.",
      en: "Cleaning broken dtypes in the Kaggle dataset, IQR outlier analysis, correlation matrix and time trends, with findings documented in a separate report."
    },
    tags: ["pandas", "matplotlib", "Jupyter"]
  },
  {
    id: "transit",
    featured: false,
    team: true,
    date: { tr: "Nisan 2026", en: "Apr 2026" },
    repo: `${GITHUB}/akilli-toplu-tasima-navigasyon`,
    title: { tr: "Akıllı Toplu Taşıma Navigasyon Sistemi", en: "Smart Public Transit Navigation System" },
    desc: {
      tr: "Veri Yapıları dersi grup projesi. Duraklar KD-Tree ile indekslenip en yakın K durak bulunuyor; ulaşım ağı çok kenarlı graf olarak modellenip Dijkstra (opsiyonel A*) ve min-heap ile en uygun rota hesaplanıyor.",
      en: "Data Structures course team project. Stops are indexed in a KD-Tree to find the K nearest; the network is modelled as a multigraph and the best route is computed with Dijkstra (optionally A*) and a min-heap."
    },
    tags: ["Veri Yapıları", "Graf", "Dijkstra", "KD-Tree"]
  },
  {
    id: "dl-notes",
    featured: false,
    date: { tr: "Eylül – Ekim 2026", en: "Sep – Oct 2026" },
    repo: `${GITHUB}/dl-course-notes`,
    title: { tr: "Derin Öğrenme Notları (PyTorch)", en: "Deep Learning Notes (PyTorch)" },
    desc: {
      tr: "Tensör işlemleri, matris çarpımı, cihaz ayarları, eğitim döngüleri, doğrusal/doğrusal olmayan modeller, bilgisayarlı görüye giriş ve CNN derinlemesine inceleme. Öğrenirken yazdığım kodlar.",
      en: "Tensor ops, matrix multiplication, device setup, training loops, linear vs non-linear models, intro to computer vision and a CNN deep dive. Code written while learning."
    },
    tags: ["PyTorch", "CNN", "Computer Vision"]
  },
  {
    id: "ml-notes",
    featured: false,
    date: { tr: "Ağustos 2026", en: "Aug 2026" },
    repo: `${GITHUB}/ml-course-notes`,
    title: { tr: "Makine Öğrenmesi Kurs Notları", en: "Machine Learning Course Notes" },
    desc: {
      tr: "Türkiye Yapay Zeka Akademisi ML kursu boyunca yazdığım 7 modül: ön işleme, öznitelik mühendisliği, gözetimli/gözetimsiz öğrenme, boyut indirgeme (PCA, t-SNE) ve çapraz doğrulama.",
      en: "7 modules written during the Türkiye AI Academy ML course: preprocessing, feature engineering, supervised/unsupervised learning, dimensionality reduction (PCA, t-SNE) and cross-validation."
    },
    tags: ["scikit-learn", "PCA", "K-Means"]
  }
];

const SKILLS = [
  { title: { tr: "Makine ve Derin Öğrenme", en: "Machine & Deep Learning" },
    items: ["PyTorch", "scikit-learn", "Regresyon & Sınıflandırma", "Class Imbalance", "Cross-Validation", "Hiperparametre Optimizasyonu", "CNN"] },
  { title: { tr: "Veri Analizi", en: "Data Analysis" },
    items: ["pandas", "NumPy", "matplotlib", "seaborn", "Jupyter", "EDA", "Feature Engineering", "Leakage Tespiti"] },
  { title: { tr: "LLM ve Yapay Zeka Ajanları", en: "LLMs & AI Agents" },
    items: ["LLM", "RAG", "AI Agents", "Prompt Tasarımı", "Otomasyon"] },
  { title: { tr: "MLOps ve Dağıtım", en: "MLOps & Deployment" },
    items: ["FastAPI", "Docker", "Render", "REST API", "Model Serileştirme"] },
  { title: { tr: "Temel ve Araçlar", en: "Fundamentals & Tools" },
    items: ["Python", "Veri Yapıları", "Algoritmalar", "Git & GitHub", "HTML/CSS", "Linux"] }
];

const EXPERIENCE = [
  {
    date: { tr: "Eyl 2026 – devam", en: "Sep 2026 – present" },
    title: { tr: "Know-How Departmanı Başkanı", en: "Head of Know-How Department" },
    org: { tr: "GENIN · Uludağ Yenilikçi Nesil Öğrenci Topluluğu", en: "GENIN · Uludağ Innovative Generation Student Society" },
    desc: {
      tr: "Topluluğun bilgi birikimi ve eğitim içeriklerinden sorumlu departmanı yönetiyorum. 2026–2027 dönemi yönetim kurulunda görev alıyorum.",
      en: "Leading the department responsible for the society's knowledge base and training content. Member of the 2026–2027 board."
    },
    tags: ["Liderlik", "Eğitim", "Topluluk"]
  },
  {
    date: { tr: "Tem – Ağu 2026", en: "Jul – Aug 2026" },
    title: { tr: "Yapay Zeka Stajyeri", en: "AI Summer Intern" },
    org: { tr: "Sual Hub · Bursa", en: "Sual Hub · Bursa" },
    desc: {
      tr: "İki LLM tabanlı ajan geliştirdim: AB fon fırsatlarını tarayıp analiz eden ve Türkçe özetler üreten EUFIS ile proje fikirlerini yapılandırılmış konsept notlarına dönüştüren Concept Note Generation Agent. Ajan mimarisi ve gerçek problemlere yapay zeka çözümü üretme konusunda pratik deneyim.",
      en: "Built two LLM-based agents: EUFIS, which scans and analyses EU funding opportunities and produces Turkish summaries, and a Concept Note Generation Agent that turns project ideas into structured concept notes. Hands-on experience with agent architecture and applying AI to real problems."
    },
    tags: ["LLM", "AI Agents", "RAG", "Python"]
  },
  {
    date: { tr: "Şub 2026 – devam", en: "Feb 2026 – present" },
    title: { tr: "Eğitim Koordinatörü · Yönetim Kurulu Üyesi", en: "Training Coordinator · Board Member" },
    org: { tr: "Bursa Uludağ Üniversitesi Veri Bilimi Topluluğu", en: "Bursa Uludağ University Data Science Society" },
    desc: {
      tr: "Eğitim faaliyetlerini koordine ediyor, eğitmenlerle iletişimi yürütüyor, teknik atölye ve etkinliklerin organizasyonunu destekliyorum. DATAMIND Zirvesi'nde aktif görev aldım.",
      en: "Coordinating training activities, liaising with instructors and supporting technical workshops and events. Took an active role in the DATAMIND Summit."
    },
    tags: ["Organizasyon", "Veri Bilimi", "Etkinlik"]
  },
  {
    date: { tr: "Kas 2024 – Nis 2025", en: "Nov 2024 – Apr 2025" },
    title: { tr: "Yapay Zeka Uzmanlık Eğitimi (AkademIQ)", en: "AI Specialist Training (AkademIQ)" },
    org: { tr: "Acunmedya Akademi · İstanbul (hibrit)", en: "Acunmedya Akademi · Istanbul (hybrid)" },
    desc: {
      tr: "60 saatlik profesyonel yapay zeka eğitimi. Python ve NumPy, pandas, Matplotlib, Seaborn, scikit-learn ile veri analizi, görselleştirme ve temel makine öğrenmesi uygulamaları.",
      en: "60-hour professional AI programme. Data analysis, visualisation and foundational machine learning with Python, NumPy, pandas, Matplotlib, Seaborn and scikit-learn."
    },
    tags: ["Python", "pandas", "scikit-learn"]
  }
];

const EDUCATION = [
  {
    date: { tr: "2023 – 2028 (beklenen)", en: "2023 – 2028 (expected)" },
    title: { tr: "Bilgisayar Mühendisliği, Lisans", en: "B.Sc. Computer Engineering" },
    org: { tr: "Bursa Uludağ Üniversitesi", en: "Bursa Uludağ University" },
    desc: {
      tr: "Veri Yapıları, Algoritmalar ve yapay zeka odaklı dersler. Dönem projelerinde gerçek endüstriyel veri setleriyle çalışma.",
      en: "Data Structures, Algorithms and AI-focused coursework. Term projects built on real industrial datasets."
    }
  },
  {
    date: { tr: "Eyl 2025 – Oca 2026", en: "Sep 2025 – Jan 2026" },
    title: { tr: "Erasmus+ Değişim Öğrencisi, Bilgisayar Bilimleri", en: "Erasmus+ Exchange Student, Computer Science" },
    org: { tr: "International Balkan University · Üsküp", en: "International Balkan University · Skopje" },
    desc: {
      tr: "IBUISC'25 Uluslararası Öğrenci Kongresi'nde \"AI-Driven Edge Computing for Sustainable Smart Cities: Real-Time Optimization of Agricultural Water Usage\" başlıklı bildiri özetim kabul edildi ve sunuldu.",
      en: "My abstract \"AI-Driven Edge Computing for Sustainable Smart Cities: Real-Time Optimization of Agricultural Water Usage\" was accepted and presented at the IBUISC'25 International Student Congress."
    }
  },
  {
    date: { tr: "2018 – 2022", en: "2018 – 2022" },
    title: { tr: "İçel Anadolu Lisesi", en: "İçel Anatolian High School" },
    org: { tr: "Mersin", en: "Mersin" },
    desc: { tr: "", en: "" }
  }
];

const BEYOND = [
  { name: { tr: "Erasmus+ Gençlik Değişimi · \"Together For Body Positivity\"", en: "Erasmus+ Youth Exchange · \"Together For Body Positivity\"" }, org: { tr: "Türkiye'yi temsil ettim · Osterholz-Scharmbeck, Almanya · 6 ülkeden katılımcılarla", en: "Represented Türkiye · Osterholz-Scharmbeck, Germany · participants from 6 countries" }, date: { tr: "Tem 2026", en: "Jul 2026" } },
  { name: { tr: "Seed4Feed Programı", en: "Seed4Feed Programme" }, org: { tr: "GENIN · Sual Hub · IGEA — liderlik, tasarım odaklı düşünme, AI ajanları ve otomasyon, proje yönetimi, fonlar", en: "GENIN · Sual Hub · IGEA — leadership, design thinking, AI agents & automation, project management, funding" }, date: { tr: "Tem 2026", en: "Jul 2026" } },
  { name: { tr: "Diller", en: "Languages" }, org: { tr: "Türkçe (ana dil) · İngilizce (profesyonel çalışma yetkinliği)", en: "Turkish (native) · English (professional working proficiency)" }, date: "" }
];

const I18N = {
  tr: {
    skip: "İçeriğe geç",
    nav_about: "Hakkımda", nav_projects: "Projeler", nav_skills: "Yetenekler", nav_edu: "Eğitim", nav_contact: "İletişim",
    hero_eyebrow: "Bilgisayar Mühendisliği Öğrencisi · AI Engineering & MLOps",
    hero_h1: 'Merhaba, ben <span class="accent">Kerem Beyaz</span>.',
    hero_lead: "Bursa Uludağ Üniversitesi'nde Bilgisayar Mühendisliği okuyorum. Gerçek endüstriyel veri setleri üzerinde makine öğrenmesi modelleri geliştiriyor, LLM tabanlı ajanlar kuruyor ve bunları çalışan uygulamalara dönüştürüyorum.",
    hero_cta1: "Projelerimi İncele",
    hero_loc: "Bursa, Türkiye",
    hero_focus: "PyTorch · scikit-learn · FastAPI",
    about_title: "Hakkımda",
    about_p1: "Veriyle çalışmayı seviyorum: ham bir veri setini alıp temizlemek, sızıntıları (leakage) yakalamak, doğru doğrulama stratejisini kurmak ve sonunda gerçekten çalışan bir model ortaya çıkarmak. Projelerimde \"tutorial seviyesi\" veri setleri yerine Bursa sanayisine yakın gerçek endüstriyel problemleri seçmeye çalışıyorum: çelik fabrikasında enerji tüketimi tahmini, üretim makinelerinde tahminsel bakım gibi.",
    about_p2: "Model geliştirmenin yanı sıra modeli bir ürüne dönüştürmekle de ilgileniyorum. Son projemde PyTorch ile eğittiğim sınıflandırıcıyı FastAPI ile servis edip Docker ile paketledim ve Render üzerinde canlıya aldım. Sual Hub'daki yaz stajımda ise AB fon fırsatlarını tarayan ve proje fikirlerini konsept notlarına dönüştüren iki LLM tabanlı ajan geliştirdim. İlgi alanlarım derin öğrenme, LLM'ler, RAG ve yapay zeka destekli uygulamalar; hedefim bu sistemleri kurup canlıya alma tarafında derinleşmek.",
    about_p3: "Kampüste de boş durmuyorum: Veri Bilimi Topluluğu'nda eğitim koordinatörü, GENIN'de Know-How departmanı başkanıyım. Her projeyi, aldığım kararları ve karşılaştığım sorunları gerekçeleriyle belgeleyerek yürütüyorum; bu yüzden GitHub README'lerim biraz uzundur.",
    stat_repos: "Açık kaynak depo", stat_live: "Canlıda çalışan ML uygulaması", stat_e2e: "Uçtan uca ML projesi", stat_agents: "Stajda geliştirilen LLM ajanı",
    projects_title: "Öne Çıkan Projeler", projects_more: "Diğer Projeler ve Notlar",
    skills_title: "Yetenekler", edu_title: "Eğitim", exp_title: "Deneyim", nav_exp: "Deneyim", beyond_title: "Kod Dışında",
    contact_title: "Birlikte çalışalım",
    contact_p: "Staj, proje iş birliği ya da sadece veri ve makine öğrenmesi üzerine sohbet için bana LinkedIn üzerinden ulaşabilirsiniz.",
    contact_btn: "LinkedIn'den Yaz",
    footer_note: "HTML · CSS · JS ile elle yazıldı, GitHub Pages'te yayında",
    live: "Canlı Demo", code: "Kaynak Kod", team: "Grup projesi", theme: "Tema değiştir",
    nav_demo: "Canlı Demo", nav_github: "GitHub", menu_open: "Menüyü aç", menu_close: "Menüyü kapat",
    hero_cta1: "Modeli Tarayıcıda Dene",
    term_title: 'terminal — "help" yazmayı dene',
    typed: ["pytorch ile model eğitiyorum", "llm tabanlı ajanlar geliştiriyorum", "veri sızıntısını yakalıyorum", "fastapi ile modeli canlıya alıyorum", "class imbalance ile uğraşıyorum", "readme'yi uzun yazıyorum"],
    demo_title: "Canlı Demo: Arıza Tahmini",
    demo_intro: "Aşağıdaki model, makine arıza sınıflandırıcı projesinde PyTorch ile eğittiğim ağın ta kendisi. Ağırlıkları dışa aktarıp ileri geçişi JavaScript ile yeniden yazdım; yani sunucuya hiçbir veri gitmiyor, tahmin tarayıcınızda hesaplanıyor. Kaydırıcıları oynatın.",
    f_type: "Ürün kalite sınıfı", f_air: "Hava sıcaklığı", f_proc: "Proses sıcaklığı", f_rpm: "Devir", f_torque: "Tork", f_wear: "Takım aşınması",
    pred_label: "Tahmin",
    demo_note: "Model: Linear(6,16) → ReLU → Linear(16,16) → ReLU → Linear(16,6). Girdi, eğitimdeki StandardScaler ile ölçekleniyor. Kural satırları AI4I veri setinin arıza üretme koşulları; modelin bunlara ne kadar yaklaştığını görebilirsiniz.",
    demo_repo: "Projenin kaynak kodu ve README",
    preset_normal: "Normal çalışma", preset_hdf: "Isı dağılımı (HDF)", preset_pwf: "Güç arızası (PWF)", preset_osf: "Aşırı yük (OSF)", preset_twf: "Takım aşınması (TWF)",
    rule_hdf: "HDF kuralı: sıcaklık farkı < 8,6 K ve devir < 1380", rule_pwf: "PWF kuralı: güç < 3500 W veya > 9000 W", rule_osf: "OSF kuralı: aşınma × tork > eşik (L 11000 / M 12000 / H 13000)", rule_twf: "TWF kuralı: aşınma 200–240 dk arası",
    nf: "Arıza yok", conf: "güven",
    gh_title: "GitHub'da Neler Oluyor", gh_live: "canlı · GitHub API", gh_off: "API limitine takıldı, sonra tekrar deneyin",
    gh_heat: "son 90 gün · commit aktivitesi", gh_less: "az", gh_more: "çok", gh_loading: "yükleniyor…",
    gh_commits: "commit / 90 gün", gh_active: "aktif gün", gh_repos: "public repo", gh_followers: "takipçi", gh_streak: "en uzun seri (gün)",
    ago_m: "dk önce", ago_h: "sa önce", ago_d: "gün önce"
  },
  en: {
    skip: "Skip to content",
    nav_about: "About", nav_projects: "Projects", nav_skills: "Skills", nav_edu: "Education", nav_contact: "Contact",
    hero_eyebrow: "Computer Engineering Student · AI Engineering & MLOps",
    hero_h1: 'Hi, I\'m <span class="accent">Kerem Beyaz</span>.',
    hero_lead: "I study Computer Engineering at Bursa Uludağ University. I build machine learning models on real industrial datasets, develop LLM-based agents and turn them into working applications.",
    hero_cta1: "View My Projects",
    hero_loc: "Bursa, Türkiye",
    hero_focus: "PyTorch · scikit-learn · FastAPI",
    about_title: "About Me",
    about_p1: "I enjoy working with data: taking a raw dataset, cleaning it, catching leakage, setting up the right validation strategy and ending with a model that actually works. Instead of tutorial-level datasets I try to pick real industrial problems close to Bursa's manufacturing industry, such as energy forecasting in a steel plant or predictive maintenance of production machines.",
    about_p2: "Beyond modelling, I care about turning a model into a product. In my latest project I served a PyTorch classifier with FastAPI, packaged it with Docker and deployed it on Render. During my summer internship at Sual Hub I built two LLM-based agents: one that scans EU funding opportunities and one that turns project ideas into concept notes. My interests are deep learning, LLMs, RAG and AI-powered applications, and I want to go deeper into building and deploying such systems.",
    about_p3: "On campus I'm the training coordinator of the Data Science Society and head of the Know-How department at GENIN. I document every decision and every problem I hit, with reasoning, which is why my GitHub READMEs tend to run long.",
    stat_repos: "Open-source repos", stat_live: "ML app running live", stat_e2e: "End-to-end ML projects", stat_agents: "LLM agents built during internship",
    projects_title: "Featured Projects", projects_more: "Other Projects & Notes",
    skills_title: "Skills", edu_title: "Education", exp_title: "Experience", nav_exp: "Experience", beyond_title: "Beyond Code",
    contact_title: "Let's work together",
    contact_p: "For internships, project collaboration or just a chat about data and machine learning, reach out on LinkedIn.",
    contact_btn: "Message on LinkedIn",
    footer_note: "Hand-written in HTML · CSS · JS, hosted on GitHub Pages",
    live: "Live Demo", code: "Source Code", team: "Team project", theme: "Toggle theme",
    nav_demo: "Live Demo", nav_github: "GitHub", menu_open: "Open menu", menu_close: "Close menu",
    hero_cta1: "Try the Model in Your Browser",
    term_title: 'terminal — try typing "help"',
    typed: ["training models with pytorch", "building llm-based agents", "hunting data leakage", "shipping models with fastapi", "fighting class imbalance", "writing long readmes"],
    demo_title: "Live Demo: Failure Prediction",
    demo_intro: "The model below is the exact network I trained with PyTorch for the machine failure classifier. I exported the weights and rewrote the forward pass in JavaScript, so nothing is sent to a server: the prediction is computed in your browser. Play with the sliders.",
    f_type: "Product quality class", f_air: "Air temperature", f_proc: "Process temperature", f_rpm: "Rotational speed", f_torque: "Torque", f_wear: "Tool wear",
    pred_label: "Prediction",
    demo_note: "Model: Linear(6,16) → ReLU → Linear(16,16) → ReLU → Linear(16,6). Inputs are scaled with the StandardScaler from training. The rule lines are the failure-generation conditions of the AI4I dataset, so you can see how closely the model tracks them.",
    demo_repo: "Source code and README",
    preset_normal: "Normal operation", preset_hdf: "Heat dissipation (HDF)", preset_pwf: "Power failure (PWF)", preset_osf: "Overstrain (OSF)", preset_twf: "Tool wear (TWF)",
    rule_hdf: "HDF rule: temp difference < 8.6 K and rpm < 1380", rule_pwf: "PWF rule: power < 3500 W or > 9000 W", rule_osf: "OSF rule: wear × torque > threshold (L 11000 / M 12000 / H 13000)", rule_twf: "TWF rule: tool wear between 200–240 min",
    nf: "No failure", conf: "confidence",
    gh_title: "What's Happening on GitHub", gh_live: "live · GitHub API", gh_off: "API rate-limited, try again later",
    gh_heat: "last 90 days · commit activity", gh_less: "less", gh_more: "more", gh_loading: "loading…",
    gh_commits: "commits / 90 days", gh_active: "active days", gh_repos: "public repos", gh_followers: "followers", gh_streak: "longest streak (days)",
    ago_m: "min ago", ago_h: "h ago", ago_d: "d ago"
  }
};

/* ===== Helpers ===== */
let lang = "en"; // varsayılan İngilizce; ziyaretçi üstteki düğmeyle TR'ye geçebilir, tercih localStorage'da saklanır
try { lang = localStorage.getItem("lang") || "en"; } catch (_) {}
const t = (k) => I18N[lang][k] ?? k;
const pick = (v) => (typeof v === "object" && v !== null && !Array.isArray(v)) ? (v[lang] ?? v.tr) : v;
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const $ = (id) => document.getElementById(id);
const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;

function projectCard(p) {
  const badges = [
    p.live ? `<span class="badge badge-live">${t("live")}</span>` : "",
    p.team ? `<span class="badge badge-team">${t("team")}</span>` : ""
  ].join("");
  const highlights = p.highlights
    ? `<ul class="highlights">${pick(p.highlights).map((h) => `<li>${esc(h)}</li>`).join("")}</ul>` : "";
  const metrics = p.metrics
    ? `<div class="metrics">${p.metrics.map((m) => `<span class="metric">${esc(pick(m.label))}: <b>${esc(m.value)}</b></span>`).join("")}</div>` : "";
  const links = `
    <div class="card-links">
      ${p.live ? `<a class="btn btn-primary btn-sm" href="${p.live}" target="_blank" rel="noopener">${t("live")} ↗</a>` : ""}
      <a class="btn btn-ghost btn-sm" href="${p.repo}" target="_blank" rel="noopener">${t("code")}</a>
    </div>`;
  return `
    <article class="card reveal" data-tilt>
      <div class="card-top"><span class="card-date">${esc(pick(p.date))}</span><span>${badges}</span></div>
      <h3><a href="${p.repo}" target="_blank" rel="noopener">${esc(pick(p.title))}</a></h3>
      <p>${esc(pick(p.desc))}</p>
      ${highlights}${metrics}
      <div class="tags">${p.tags.map((x) => `<span class="tag">${esc(x)}</span>`).join("")}</div>
      ${links}
    </article>`;
}

function render() {
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const k = el.dataset.i18n;
    if (I18N[lang][k] !== undefined) el.innerHTML = I18N[lang][k];
  });
  $("heroTitle").innerHTML = t("hero_h1");
  $("langToggle").textContent = lang === "tr" ? "EN" : "TR";
  $("themeToggle").setAttribute("aria-label", t("theme"));

  $("featuredProjects").innerHTML = PROJECTS.filter((p) => p.featured).map(projectCard).join("");
  $("otherProjects").innerHTML = PROJECTS.filter((p) => !p.featured).map(projectCard).join("");

  $("skillsGrid").innerHTML = SKILLS.map((g) => `
    <div class="skill-group reveal">
      <h3>${esc(pick(g.title))}</h3>
      <div class="skill-list">${g.items.map((s) => `<span class="skill">${esc(s)}</span>`).join("")}</div>
    </div>`).join("");

  const tl = (e) => `
    <li class="reveal">
      <span class="t-date">${esc(pick(e.date))}</span>
      <h3>${esc(pick(e.title))}</h3>
      <div class="t-org">${esc(pick(e.org))}</div>
      ${pick(e.desc) ? `<p>${esc(pick(e.desc))}</p>` : ""}
      ${e.tags ? `<div class="t-tags">${e.tags.map((x) => `<span>${esc(x)}</span>`).join("")}</div>` : ""}
    </li>`;
  $("expTimeline").innerHTML = EXPERIENCE.map(tl).join("");
  $("timeline").innerHTML = EDUCATION.map(tl).join("");
  const certLi = (c) => `<li class="reveal"><div><b>${esc(pick(c.name))}</b><span>${esc(pick(c.org))}</span></div><span class="c-date">${esc(pick(c.date))}</span></li>`;
  $("beyond").innerHTML = BEYOND.map(certLi).join("");

  $("presets").innerHTML = Object.entries(PRESETS).map(([k]) => `<button type="button" data-preset="${k}">${t("preset_" + k)}</button>`).join("");
  $("termChips").innerHTML = ["help", "projects", "experience", "predict", "sudo hire kerem"].map((c) => `<button type="button" data-cmd="${c}">${c}</button>`).join("");

  demoUpdate();
  initTilt();
  revealCheck();
  if (ghCache) renderGithub(ghCache);
}

/* ===== Theme ===== */
(function initTheme() {
  // Varsayılan tema koyu; ziyaretçi üstteki düğmeyle açık temaya geçebilir, tercih localStorage'da saklanır.
  let saved = null;
  try { saved = localStorage.getItem("theme"); } catch (_) {}
  document.documentElement.dataset.theme = saved === "light" ? "light" : "dark";
})();
$("themeToggle").addEventListener("click", () => {
  const root = document.documentElement;
  const current = root.dataset.theme || "dark";
  const next = current === "dark" ? "light" : "dark";
  root.dataset.theme = next;
  try { localStorage.setItem("theme", next); } catch (_) {}
  netColors();
});

/* ===== Language ===== */
$("langToggle").addEventListener("click", () => {
  lang = lang === "tr" ? "en" : "tr";
  try { localStorage.setItem("lang", lang); } catch (_) {}
  render();
  typeRestart();
});

/* ===== Mobile menu ===== */
(function initMenu() {
  const btn = $("navToggle"), menu = $("mobileMenu");
  function setOpen(v) { btn.setAttribute("aria-expanded", String(v)); menu.hidden = !v; menu.dataset.open = String(v); btn.setAttribute("aria-label", v ? t("menu_close") : t("menu_open")); }
  btn.addEventListener("click", () => setOpen(btn.getAttribute("aria-expanded") !== "true"));
  menu.addEventListener("click", (e) => { if (e.target.closest("a")) setOpen(false); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") setOpen(false); });
  document.addEventListener("click", (e) => { if (!e.target.closest(".nav")) setOpen(false); });
})();

/* ===== Clock + progress ===== */
function tickClock() {
  try {
    $("clock").textContent = "Bursa · " + new Intl.DateTimeFormat("tr-TR", { timeZone: "Europe/Istanbul", hour: "2-digit", minute: "2-digit" }).format(new Date());
  } catch (_) {}
}
tickClock(); setInterval(tickClock, 15000);
function onScroll() {
  const h = document.documentElement;
  const p = h.scrollTop / Math.max(1, h.scrollHeight - h.clientHeight);
  $("progress").style.width = (p * 100).toFixed(2) + "%";
  revealCheck();
}
let ticking = false;
addEventListener("scroll", () => { if (!ticking) { ticking = true; requestAnimationFrame(() => { onScroll(); ticking = false; }); } }, { passive: true });
addEventListener("resize", revealCheck);

/* ===== Reveal (deterministic, no IntersectionObserver dependency) ===== */
function revealCheck() {
  const vh = innerHeight;
  document.querySelectorAll(".reveal:not(.in)").forEach((el) => {
    const r = el.getBoundingClientRect();
    if (r.top < vh * 0.92 && r.bottom > 0) el.classList.add("in");
  });
  countUp();
}
// Safety net: whatever happens, nothing stays hidden for long.
setTimeout(() => document.documentElement.classList.add("no-reveal"), 6000);

/* ===== Count-up ===== */
function countUp() {
  document.querySelectorAll(".count:not([data-done])").forEach((el) => {
    if (!el.closest(".reveal.in")) return;
    el.dataset.done = "1";
    const to = +el.dataset.to; const start = performance.now(); const dur = 900;
    if (reduced) { el.textContent = to; return; }
    const step = (now) => {
      const k = Math.min(1, (now - start) / dur); const e = 1 - Math.pow(1 - k, 3);
      el.textContent = Math.round(to * e);
      if (k < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  });
}

/* ===== Typewriter ===== */
let typeTimer = null;
function typeRestart() {
  clearTimeout(typeTimer);
  const el = $("typed"); const phrases = t("typed"); let i = 0, j = 0, del = false;
  if (reduced) { el.textContent = phrases[0]; return; }
  const loop = () => {
    const cur = phrases[i];
    el.textContent = cur.slice(0, j);
    if (!del && j < cur.length) { j++; typeTimer = setTimeout(loop, 45); }
    else if (!del) { del = true; typeTimer = setTimeout(loop, 1700); }
    else if (j > 0) { j--; typeTimer = setTimeout(loop, 22); }
    else { del = false; i = (i + 1) % phrases.length; typeTimer = setTimeout(loop, 300); }
  };
  loop();
}

/* ===== Interactive network (factory: hero + page background) ===== */
function makeNet(c, opts) {
  const ctx = c.getContext("2d");
  const { density, minN, maxN, link: LINK, radius: R, mouseTarget, getRect, world } = opts;
  // world=true: düğümler belge koordinatında yaşar (y = sayfa içi konum), tuval sabit kalır,
  // kaydırdıkça düğümler içerikle birlikte akar ve aşağıdan yenileri gelir.
  let w, h, nodes = [], raf = null, colA = "#38bdf8", colB = "#a78bfa", running = false, enabled = true;
  let top = 0, bottom = 0;         // world modunda dikey aralık (belge px)
  const mouse = { x: -9999, y: -9999, active: false };
  let burst = 0;
  function colors() {
    const cs = getComputedStyle(document.documentElement);
    colA = cs.getPropertyValue("--accent").trim(); colB = cs.getPropertyValue("--accent-2").trim();
  }
  function spawn(x, y) {
    const vx = (Math.random() - .5) * .35, vy = (Math.random() - .5) * .35;
    return { x, y, vx, vy, bx: vx, by: vy, r: 1.6 + Math.random() * 2.2 };
  }
  function size() {
    const r = getRect();
    const dpr = Math.min(2, devicePixelRatio || 1);
    w = r.width; h = r.height; c.width = w * dpr; c.height = h * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    if (world) { const wr = world(); top = wr.top; bottom = wr.bottom; }
    const span = world ? Math.max(1, bottom - top) : h;
    const n = Math.round(Math.min(maxN, Math.max(minN, (w * span) / density)));
    nodes = Array.from({ length: n }, () => spawn(Math.random() * w, world ? top + Math.random() * span : Math.random() * h));
  }
  function frame() {
    ctx.clearRect(0, 0, w, h);
    const sy = world ? (scrollY || 0) : 0;
    const yMin = world ? top : 0, yMax = world ? bottom : h;
    const mx = mouse.x, my = mouse.y + sy;      // fare, düğüm koordinat uzayında
    // görünür düğümler (ekran dışındakiler çizilmez, bağ hesabına girmez)
    const vis = [];
    for (const p of nodes) {
      if (mouse.active) {
        const dx = p.x - mx, dy = p.y - my; const d = Math.hypot(dx, dy);
        if (d < R && d > 0.01) {
          const f = (1 - d / R) * (0.9 + burst * 6);
          p.vx += (dx / d) * f * 0.12; p.vy += (dy / d) * f * 0.12;
        }
      }
      p.vx += (p.bx - p.vx) * 0.03; p.vy += (p.by - p.vy) * 0.03;
      const sp = Math.hypot(p.vx, p.vy); if (sp > 3.2) { p.vx *= 3.2 / sp; p.vy *= 3.2 / sp; }
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0) { p.x = 0; p.vx = Math.abs(p.vx); p.bx = Math.abs(p.bx); }
      if (p.x > w) { p.x = w; p.vx = -Math.abs(p.vx); p.bx = -Math.abs(p.bx); }
      if (p.y < yMin) { p.y = yMin; p.vy = Math.abs(p.vy); p.by = Math.abs(p.by); }
      if (p.y > yMax) { p.y = yMax; p.vy = -Math.abs(p.vy); p.by = -Math.abs(p.by); }
      const py = p.y - sy;
      if (py > -LINK && py < h + LINK) vis.push(p);
    }
    burst *= 0.9;
    ctx.lineWidth = 1;
    for (let i = 0; i < vis.length; i++) for (let k = i + 1; k < vis.length; k++) {
      const a = vis[i], b = vis[k]; const dx = a.x - b.x, dy = a.y - b.y; const d2 = dx * dx + dy * dy;
      if (d2 < LINK * LINK) {
        ctx.globalAlpha = (1 - Math.sqrt(d2) / LINK) * .55; ctx.strokeStyle = colA;
        ctx.beginPath(); ctx.moveTo(a.x, a.y - sy); ctx.lineTo(b.x, b.y - sy); ctx.stroke();
      }
    }
    if (mouse.active) {
      ctx.lineWidth = 1.2;
      for (const p of vis) {
        const d = Math.hypot(p.x - mx, p.y - my);
        if (d < R) {
          ctx.globalAlpha = (1 - d / R) * .9; ctx.strokeStyle = colB;
          ctx.beginPath(); ctx.moveTo(mx, my - sy); ctx.lineTo(p.x, p.y - sy); ctx.stroke();
        }
      }
      ctx.globalAlpha = .25 + burst; ctx.strokeStyle = colB; ctx.lineWidth = 1;
      ctx.beginPath(); ctx.arc(mx, my - sy, R * (0.35 + burst * 0.6), 0, Math.PI * 2); ctx.stroke();
    }
    ctx.globalAlpha = .9;
    vis.forEach((p, i) => {
      const near = mouse.active && Math.hypot(p.x - mx, p.y - my) < R;
      ctx.fillStyle = near ? colB : (i % 5 ? colA : colB);
      ctx.beginPath(); ctx.arc(p.x, p.y - sy, near ? p.r * 1.6 : p.r, 0, Math.PI * 2); ctx.fill();
    });
    ctx.globalAlpha = 1;
    raf = running ? requestAnimationFrame(frame) : null;
  }
  function start() { if (running || reduced || !enabled) return; running = true; frame(); }
  function stop() { running = false; if (raf) cancelAnimationFrame(raf); raf = null; }
  function drawOnce() { const r = running; running = false; frame(); running = r; }
  function toLocal(e) { const r = c.getBoundingClientRect(); return { x: e.clientX - r.left, y: e.clientY - r.top }; }
  const tgt = mouseTarget;
  tgt.addEventListener("mousemove", (e) => { const p = toLocal(e); mouse.x = p.x; mouse.y = p.y; mouse.active = true; }, { passive: true });
  tgt.addEventListener("mouseleave", () => { mouse.active = false; mouse.x = mouse.y = -9999; });
  tgt.addEventListener("mousedown", (e) => { if (!(e.target.closest && e.target.closest("a,button,input,select,label,.term,.demo,.gh-card,.card,.panel"))) burst = 1; });
  tgt.addEventListener("touchmove", (e) => { const t = e.touches[0]; if (t) { const p = toLocal(t); mouse.x = p.x; mouse.y = p.y; mouse.active = true; } }, { passive: true });
  tgt.addEventListener("touchend", () => { mouse.active = false; });
  colors(); size();
  addEventListener("resize", () => { size(); if (!running) drawOnce(); });
  if (reduced) { drawOnce(); if (world) addEventListener("scroll", drawOnce, { passive: true }); }
  return { colors, start, stop, resize: size, setEnabled(v) { enabled = v; if (v) start(); else stop(); }, isRunning: () => running };
}

// Hero: yoğun ağ, sadece hero alanında
const heroCanvas = $("net");
const net = makeNet(heroCanvas, {
  density: 7000, minN: 70, maxN: 190, link: 130, radius: 170,
  mouseTarget: heroCanvas.parentElement,
  getRect: () => heroCanvas.parentElement.getBoundingClientRect()
});
// Sayfa arka planı: seyrek ağ, belge koordinatında yaşar; hero'nun altından başlar, sayfayla kayar
const bgCanvas = $("netBg");
const netBg = makeNet(bgCanvas, {
  density: 30000, minN: 40, maxN: 320, link: 170, radius: 180, world: () => {
    const hr = heroCanvas.parentElement.getBoundingClientRect();
    return { top: hr.bottom + (scrollY || 0) + 40, bottom: document.documentElement.scrollHeight - 40 };
  },
  mouseTarget: document.documentElement,
  getRect: () => ({ width: innerWidth, height: innerHeight })
});
bgCanvas.classList.add("on");
let lastDocH = document.documentElement.scrollHeight;
function netVisibility() {
  const hr = heroCanvas.getBoundingClientRect();
  if (document.hidden) { net.stop(); netBg.stop(); return; }
  (hr.bottom > 0 && hr.top < innerHeight) ? net.start() : net.stop();
  netBg.start();
  const dh = document.documentElement.scrollHeight;
  if (Math.abs(dh - lastDocH) > 200) { lastDocH = dh; netBg.resize(); }   // içerik (GitHub verisi vb.) yüklenince aralığı güncelle
}
addEventListener("scroll", netVisibility, { passive: true });
document.addEventListener("visibilitychange", netVisibility);
addEventListener("load", () => setTimeout(() => { lastDocH = 0; netVisibility(); }, 1500));
netVisibility();
function netColors() { setTimeout(() => { net.colors(); netBg.colors(); }, 30); }

/* ===== Tilt ===== */
function initTilt() {
  if (reduced || !matchMedia("(hover: hover)").matches) return;
  document.querySelectorAll("[data-tilt]").forEach((el) => {
    el.addEventListener("mousemove", (e) => {
      const r = el.getBoundingClientRect(); const x = (e.clientX - r.left) / r.width, y = (e.clientY - r.top) / r.height;
      el.style.setProperty("--mx", (x * 100) + "%"); el.style.setProperty("--my", (y * 100) + "%");
      el.style.transform = `perspective(900px) rotateX(${(0.5 - y) * 6}deg) rotateY(${(x - 0.5) * 8}deg) translateY(-3px)`;
    });
    el.addEventListener("mouseleave", () => { el.style.transform = ""; });
  });
}

/* ===== Terminal ===== */
const termOut = $("termOut"); const termIn = $("termIn"); const history = [];
function tprint(html, cls = "") { const d = document.createElement("div"); if (cls) d.className = cls; d.innerHTML = html; termOut.appendChild(d); termOut.scrollTop = termOut.scrollHeight; }
const TERM = {
  help: () => tprint(lang === "tr"
    ? `komutlar: <span class="ok">help</span> · <span class="ok">whoami</span> · <span class="ok">projects</span> · <span class="ok">experience</span> · <span class="ok">skills</span> · <span class="ok">predict</span> · <span class="ok">github</span> · <span class="ok">linkedin</span> · <span class="ok">clear</span>\n<span class="dim">ipucu: "sudo hire kerem" de bir şey yapıyor.</span>`
    : `commands: <span class="ok">help</span> · <span class="ok">whoami</span> · <span class="ok">projects</span> · <span class="ok">experience</span> · <span class="ok">skills</span> · <span class="ok">predict</span> · <span class="ok">github</span> · <span class="ok">linkedin</span> · <span class="ok">clear</span>\n<span class="dim">hint: "sudo hire kerem" does something too.</span>`),
  whoami: () => tprint(lang === "tr" ? "kerem beyaz — bilgisayar mühendisliği öğrencisi, bursa uludağ üniversitesi. ml, llm ajanları, mlops." : "kerem beyaz — computer engineering student, bursa uludağ university. ml, llm agents, mlops."),
  experience: () => EXPERIENCE.forEach((e) => tprint(`<span class="ok">${esc(pick(e.title))}</span> @ ${esc(pick(e.org))} <span class="dim">(${esc(pick(e.date))})</span>`)),
  projects: () => { PROJECTS.filter((p) => p.featured).forEach((p, i) => tprint(`${i + 1}. <a href="${p.repo}" target="_blank" rel="noopener">${esc(pick(p.title))}</a> <span class="dim">${p.tags.slice(0, 3).join(", ")}</span>`)); tprint(`<span class="dim">${lang === "tr" ? "tamamı için aşağı kaydır ↓" : "scroll down for all ↓"}</span>`); },
  skills: () => SKILLS.forEach((g) => tprint(`<span class="ok">${esc(pick(g.title))}:</span> ${g.items.join(", ")}`)),
  predict: () => { tprint(lang === "tr" ? "canlı modele gidiliyor…" : "jumping to the live model…", "dim"); location.hash = "#demo"; },
  github: () => { tprint('<a href="https://github.com/kkerembeyaz" target="_blank" rel="noopener">github.com/kkerembeyaz</a>'); },
  linkedin: () => { tprint('<a href="https://www.linkedin.com/in/kkerembeyaz" target="_blank" rel="noopener">linkedin.com/in/kkerembeyaz</a>'); },
  clear: () => { termOut.innerHTML = ""; },
  "sudo hire kerem": () => tprint(lang === "tr"
    ? `<span class="ok">[sudo] işlem onaylandı.</span> staj / proje için: <a href="https://www.linkedin.com/in/kkerembeyaz" target="_blank" rel="noopener">linkedin'den yaz</a> 🚀`
    : `<span class="ok">[sudo] request approved.</span> for internships / projects: <a href="https://www.linkedin.com/in/kkerembeyaz" target="_blank" rel="noopener">message me on linkedin</a> 🚀`),
  ls: () => tprint(PROJECTS.map((p) => p.repo.split("/").pop()).join("  "), "dim"),
  pwd: () => tprint("/home/kerem/portfolio", "dim"),
  date: () => tprint(new Date().toString(), "dim"),
};
function runCmd(raw) {
  const cmd = raw.trim().toLowerCase();
  if (!cmd) return;
  tprint(`<span class="ok">visitor@kerem:~$</span> <span class="cmd">${esc(raw)}</span>`);
  history.push(raw);
  if (TERM[cmd]) TERM[cmd]();
  else if (cmd.startsWith("cd ")) tprint(lang === "tr" ? "burada her şey tek sayfada, kaydırman yeterli." : "everything is on one page here, just scroll.", "dim");
  else tprint((lang === "tr" ? `komut bulunamadı: ${esc(cmd)}. "help" dene.` : `command not found: ${esc(cmd)}. try "help".`), "dim");
}
$("termForm").addEventListener("submit", (e) => { e.preventDefault(); runCmd(termIn.value); termIn.value = ""; });
$("termChips").addEventListener("click", (e) => { const b = e.target.closest("[data-cmd]"); if (b) { runCmd(b.dataset.cmd); termIn.focus(); } });
$("term").addEventListener("click", (e) => { if (!e.target.closest("a,button")) termIn.focus(); });
tprint(lang === "tr" ? `kerem_os 1.0 — <span class="dim">"help" yaz ya da chip'lere tıkla. hiçbir şey bozulmaz.</span>` : `kerem_os 1.0 — <span class="dim">type "help" or click a chip. nothing breaks.</span>`);

/* ===== In-browser model (exported PyTorch weights) ===== */
const M = window.KB_MODEL;
function predict(type, air, proc, rpm, torque, wear) {
  const raw = [air, proc, rpm, torque, wear];
  let v = [M.type_order[type], ...raw.map((x, i) => (x - M.scaler.mean[i]) / M.scaler.scale[i])];
  M.layers.forEach((L, li) => {
    v = L.W.map((row, r) => { let s = L.b[r]; for (let k = 0; k < row.length; k++) s += row[k] * v[k]; return li < 2 ? Math.max(0, s) : s; });
  });
  const mx = Math.max(...v); const ex = v.map((z) => Math.exp(z - mx)); const sum = ex.reduce((a, b) => a + b, 0);
  return ex.map((e) => e / sum);
}
const PRESETS = {
  normal: { type: "M", air: 298.1, proc: 308.6, rpm: 1551, torque: 42.8, wear: 0 },
  hdf:    { type: "L", air: 300.4, proc: 308.9, rpm: 1310, torque: 51.5, wear: 60 },
  pwf:    { type: "H", air: 299.0, proc: 309.5, rpm: 1210, torque: 76.0, wear: 40 },
  osf:    { type: "L", air: 298.9, proc: 309.1, rpm: 1420, torque: 62.0, wear: 205 },
  twf:    { type: "M", air: 298.5, proc: 308.7, rpm: 1560, torque: 40.0, wear: 225 },
};
let curType = "L";
const inputs = { air: $("air"), proc: $("proc"), rpm: $("rpm"), torque: $("torque"), wear: $("wear") };
function demoUpdate() {
  const air = +inputs.air.value, proc = +inputs.proc.value, rpm = +inputs.rpm.value, torque = +inputs.torque.value, wear = +inputs.wear.value;
  $("o_air").textContent = air.toFixed(1) + " K"; $("o_proc").textContent = proc.toFixed(1) + " K";
  $("o_rpm").textContent = rpm + " rpm"; $("o_torque").textContent = torque.toFixed(1) + " Nm"; $("o_wear").textContent = wear + " min";
  const p = predict(curType, air, proc, rpm, torque, wear);
  const top = p.indexOf(Math.max(...p));
  const name = M.labels[top];
  $("predName").textContent = name === "No Failure" ? t("nf") : name;
  $("predConf").textContent = `${t("conf")}: ${(p[top] * 100).toFixed(1)}%`;
  $("pred").className = "pred " + (top === 0 ? "ok" : "bad");
  $("bars").innerHTML = M.labels.map((l, i) => `
    <div class="bar ${i === top ? "top" : ""}"><span>${l === "No Failure" ? t("nf") : l}</span><div class="track"><div class="fill" style="width:${(p[i] * 100).toFixed(1)}%"></div></div><span class="pct">${(p[i] * 100).toFixed(1)}%</span></div>`).join("");
  // AI4I generation rules
  const power = torque * rpm * 2 * Math.PI / 60;
  const osfT = { L: 11000, M: 12000, H: 13000 }[curType];
  const rules = [
    ["rule_hdf", (proc - air) < 8.6 && rpm < 1380],
    ["rule_pwf", power < 3500 || power > 9000],
    ["rule_osf", wear * torque > osfT],
    ["rule_twf", wear >= 200 && wear <= 240],
  ];
  $("rules").innerHTML = rules.map(([k, hit]) => `<span class="${hit ? "hit" : "no"}">${t(k)}</span>`).join("")
    + `<span class="no">P = ${Math.round(power)} W · ΔT = ${(proc - air).toFixed(1)} K · ${lang === "tr" ? "aşınma×tork" : "wear×torque"} = ${Math.round(wear * torque)}</span>`;
}
Object.values(inputs).forEach((i) => i.addEventListener("input", demoUpdate));
$("typeSeg").addEventListener("click", (e) => {
  const b = e.target.closest("button"); if (!b) return;
  curType = b.dataset.v; $("typeSeg").querySelectorAll("button").forEach((x) => x.classList.toggle("on", x === b)); demoUpdate();
});
$("presets").addEventListener("click", (e) => {
  const b = e.target.closest("[data-preset]"); if (!b) return;
  const p = PRESETS[b.dataset.preset];
  curType = p.type; $("typeSeg").querySelectorAll("button").forEach((x) => x.classList.toggle("on", x.dataset.v === p.type));
  for (const k of Object.keys(inputs)) inputs[k].value = p[k];
  demoUpdate();
});

/* ===== GitHub live (repos + commits, last 90 days) ===== */
let ghCache = null;
const GH = "https://api.github.com";
async function gj(url) { const r = await fetch(url); if (!r.ok) throw new Error(r.status); return r.json(); }
async function loadGithub() {
  try {
    const since = new Date(Date.now() - 90 * 86400000).toISOString();
    const [u, repos] = await Promise.all([gj(`${GH}/users/kkerembeyaz`), gj(`${GH}/users/kkerembeyaz/repos?per_page=100&sort=pushed`)]);
    const own = repos.filter((r) => !r.fork).slice(0, 10);
    const lists = await Promise.all(own.map((r) => gj(`${GH}/repos/${r.full_name}/commits?since=${since}&per_page=100`).catch(() => [])));
    const commits = [];
    own.forEach((r, i) => lists[i].forEach((c) => commits.push({ sha: c.sha, msg: (c.commit.message || "").split("\n")[0], date: c.commit.author?.date || c.commit.committer?.date, repo: r.name, url: c.html_url })));
    commits.sort((a, b) => new Date(b.date) - new Date(a.date));
    ghCache = { u, commits }; renderGithub(ghCache);
  } catch (_) {
    $("ghStatus").classList.add("err"); $("ghStatus").querySelector("[data-i18n]").textContent = t("gh_off");
    $("gitlog").innerHTML = `<li class="muted">${t("gh_off")}</li>`;
  }
}
function ago(d) {
  const s = (Date.now() - new Date(d)) / 1000;
  if (s < 3600) return Math.max(1, Math.round(s / 60)) + " " + t("ago_m");
  if (s < 86400) return Math.round(s / 3600) + " " + t("ago_h");
  return Math.round(s / 86400) + " " + t("ago_d");
}
function dayKey(d) { const x = new Date(d); return x.getFullYear() + "-" + String(x.getMonth() + 1).padStart(2, "0") + "-" + String(x.getDate()).padStart(2, "0"); }
function renderGithub({ u, commits }) {
  const days = 91; const today = new Date(); today.setHours(0, 0, 0, 0);
  const counts = new Map();
  commits.forEach((c) => { const k = dayKey(c.date); counts.set(k, (counts.get(k) || 0) + 1); });
  const start = new Date(today); start.setDate(start.getDate() - days + 1); start.setDate(start.getDate() - start.getDay());
  let cells = "", total = 0, active = 0, streak = 0, best = 0;
  for (let d = new Date(start); d <= today; d.setDate(d.getDate() + 1)) {
    const k = dayKey(d); const n = counts.get(k) || 0;
    total += n; if (n) { active++; streak++; best = Math.max(best, streak); } else streak = 0;
    const lvl = n === 0 ? 0 : n < 2 ? 1 : n < 4 ? 2 : n < 7 ? 3 : 4;
    cells += `<i class="l${lvl}" title="${k}: ${n} commit"></i>`;
  }
  $("heat").innerHTML = cells;
  $("ghStats").innerHTML = [[total, "gh_commits"], [active, "gh_active"], [best, "gh_streak"], [u.public_repos, "gh_repos"], [u.followers, "gh_followers"]]
    .map(([v, k]) => `<div><strong>${v}</strong><span>${t(k)}</span></div>`).join("");
  const log = commits.slice(0, 8);
  $("gitlog").innerHTML = log.length ? log.map((c) => `<li><span class="sha">${c.sha.slice(0, 7)}</span><span class="msg"><a href="${c.url}" target="_blank" rel="noopener">${esc(c.msg)}</a><br><span class="repo">${esc(c.repo)}</span></span><span class="when">${ago(c.date)}</span></li>`).join("")
    : `<li class="muted">—</li>`;
}

/* ===== Custom cursor ===== */
(function initCursor() {
  const fine = matchMedia("(hover: hover) and (pointer: fine)").matches;
  if (!fine || reduced) return;
  const root = document.documentElement, dot = $("cursorDot"), ring = $("cursorRing");
  let mx = -100, my = -100, rx = -100, ry = -100, shown = false, raf = null;
  function loop() {
    rx += (mx - rx) * 0.18; ry += (my - ry) * 0.18;
    dot.style.transform = `translate(${mx}px, ${my}px) translate(-50%, -50%)`;
    ring.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`;
    if (Math.abs(mx - rx) > 0.1 || Math.abs(my - ry) > 0.1) raf = requestAnimationFrame(loop); else raf = null;
  }
  addEventListener("mousemove", (e) => {
    mx = e.clientX; my = e.clientY;
    if (!shown) { shown = true; rx = mx; ry = my; root.classList.add("has-cursor"); }
    root.classList.remove("cursor-out");
    const el = e.target.closest ? e.target.closest("a, button, [data-tilt], input[type=range], select, label") : null;
    const txt = e.target.closest ? e.target.closest("input[type=text], textarea, p, li, h1, h2, h3, pre") : null;
    root.classList.toggle("cursor-hover", !!el);
    root.classList.toggle("cursor-text", !el && !!txt && !e.target.closest("[data-tilt]"));
    if (!raf) raf = requestAnimationFrame(loop);
  }, { passive: true });
  document.addEventListener("mouseleave", () => root.classList.add("cursor-out"));
  document.addEventListener("mouseenter", () => root.classList.remove("cursor-out"));
  addEventListener("mousedown", () => root.classList.add("cursor-down"));
  addEventListener("mouseup", () => root.classList.remove("cursor-down"));
  addEventListener("blur", () => root.classList.add("cursor-out"));
})();

/* ===== Boot ===== */
$("year").textContent = new Date().getFullYear();
render();
typeRestart();
loadGithub();
onScroll();
