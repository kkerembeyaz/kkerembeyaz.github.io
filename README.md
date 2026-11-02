# kkerembeyaz.github.io

Kişisel portfolyo sitem. Saf HTML, CSS ve JavaScript; derleme adımı, framework ya da bağımlılık yok.

## Dosyalar

| Dosya | Ne işe yarar |
|---|---|
| `index.html` | Sayfa iskeleti ve bölümler |
| `style.css` | Tasarım; renkler en üstteki `:root` değişkenlerinde |
| `script.js` | İçerik (projeler, deneyim, eğitim, sertifikalar, yetenekler), TR/EN metinler, terminal, animasyonlar, tarayıcıda çalışan model, GitHub akışı |
| `model.js` | `machine-failure-type-classifier` projesinin PyTorch ağırlıkları + StandardScaler değerleri (JSON). Model yeniden eğitilirse bu dosya da yenilenmeli |

## Öne çıkan özellikler

- **Tarayıcıda çalışan model:** PyTorch `state_dict` ve scaler dışa aktarıldı, ileri geçiş (forward pass) JavaScript ile yeniden yazıldı. Sunucuya veri gitmez, Render'ın soğuk başlangıcını beklemez.
- **Canlı GitHub akışı:** Sayfa açılınca GitHub REST API'den son 90 günün commit'leri çekilir (kimlik doğrulama yok; saatte 60 istek sınırı vardır, ziyaret başına ~10 istek kullanılır).
- Etkileşimli terminal, yazı animasyonu, fareyle etkileşen ağ animasyonu: hero bölümünde yoğun, sayfanın geri kalanında seyrek bir arka plan ağı (düğümleri iter, bağ çizer, tıklayınca dalga yayar), özel imleç, kart eğilme efekti, kaydırmalı açılış, TR/EN ve açık/koyu tema.
- `prefers-reduced-motion` açık olan kullanıcılar için animasyonlar kapalıdır.

## Yayınlama (GitHub Pages, ücretsiz)

1. GitHub'da **`kkerembeyaz.github.io`** adında yeni, public bir depo oluşturun (ad birebir bu olmalı).
2. Bu klasördeki dosyaları depoya yükleyin:

   ```bash
   git init
   git add .
   git commit -m "Portfolyo sitesi"
   git branch -M main
   git remote add origin https://github.com/kkerembeyaz/kkerembeyaz.github.io.git
   git push -u origin main
   ```

3. Depo sayfasında **Settings → Pages** bölümüne gidin. *Source* olarak `Deploy from a branch`, branch olarak `main` / `/ (root)` seçin ve kaydedin.
4. Birkaç dakika içinde site **https://kkerembeyaz.github.io** adresinde yayında olur.

## İçeriği güncelleme

- Projeler, deneyim, eğitim, sertifikalar ve yetenekler `script.js` dosyasının başındaki `PROJECTS`, `EXPERIENCE`, `EDUCATION`, `BEYOND` ve `SKILLS` dizilerinde tutuluyor. Yeni kayıt eklemek için diziye bir nesne ekleyip push etmeniz yeterli.
- `style.css`, `script.js` veya `model.js` değiştiğinde `index.html` içindeki `?v=` sürüm numarasını bir artırın; böylece ziyaretçilerin tarayıcısı eski kopyayı kullanmaz.
- Site varsayılan olarak koyu temada ve İngilizce açılır; tema düğmesiyle açık temaya geçilir, ziyaretçi üstteki TR/EN düğmesiyle dil değiştirir, tercih tarayıcısında saklanır. Metinler `script.js` içindeki `I18N` nesnesinde.
- Renkler ve yazı tipleri `style.css` dosyasının en üstündeki `:root` değişkenlerinde.

## Yerelde görüntüleme

Klasörde `index.html` dosyasını çift tıklamak yeterli. Ya da:

```bash
python3 -m http.server 8080
```

ardından tarayıcıda http://localhost:8080 adresini açın.
