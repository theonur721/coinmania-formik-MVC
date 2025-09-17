# MVC Login & Coin Listing App

Bu proje **MVC (Model-View-Controller)** mimarisi kullanılarak geliştirilmiş bir **login sistemi** ve **kripto para listeleme uygulamasıdır**.  
Kullanıcılar giriş yaptıktan sonra CoinGecko API üzerinden kripto paraların güncel verilerini tablo halinde görebilir.

---

## Proje Detayı

- **Login Sistemi:** Formik + Yup ile doğrulama yapıldı. çıkış yapılınca ana sayfaya yönlenir
- **Validasyon Kuralları:**
  - Email: Geçerli formatta olmalı.
  - Yaş: 18’den küçük olamaz, 300’den büyük olamaz.
  - Şifre: En az 5 karakter, en az bir küçük harf, bir büyük harf ve bir rakam içermeli.
  - Şifre Tekrarı: Girilen şifreyle aynı olmalı.
  - Kullanıcı: Şartları kabul etmeden devam edemez.
- **Kripto Listeleme:** CoinGecko API’den alınan veriler tablo şeklinde listelenir.
- **Daha Fazla Yükle:** Sayfalama mantığıyla her seferinde 10 yeni coin eklenir.

---

## Kullanılan Kütüphaneler

- [millify](https://www.npmjs.com/package/millify) → Sayı formatlama
- [bootstrap](https://getbootstrap.com/) → Arayüz tasarımı
- [axios](https://axios-http.com/) → API istekleri
- [formik](https://formik.org/) & [yup](https://github.com/jquense/yup) → Form yönetimi & doğrulama
- [uuid](https://www.npmjs.com/package/uuid) → Benzersiz ID üretme
- [sass](https://sass-lang.com/) → Gelişmiş CSS
- [react-router-dom](https://reactrouter.com/) → Sayfa yönlendirme
- [CoinGecko API](https://www.coingecko.com/) → Kripto verileri

---

## Ekran Görüntüsü

![](/public/ekran.gif)
# coinmania-formik-MVC
