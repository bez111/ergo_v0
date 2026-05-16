---
title: "Notes vs Tokens: AI Agent Ödemeleri İçin Programlanabilir Taşıyıcı Enstrümanlar"
slug: "/blog/notes-vs-tokens"
seo_title: "Notes vs Tokens: AI Agent Ödemeleri İçin Programlanabilir Taşıyıcı Enstrümanlar"
meta_description: "Ergo Notes ve yerli token'ları karşılaştırın: AI ajanlarının programlanabilir IOU'lara, Reserve desteğine, sona erme tarihine, kabul yüklemiş ve ertelenmiş kapatmaya ihtiyaç duyduğu durumlar."
excerpt: "Token'lar sahiplik için harikadır. Note'lar sınırlandırılmış, sona eren, koşullu olarak kullanılabilir otonom ajan iş akışlarındaki kredi için daha iyidir."
author: "Ergo Developer Relations"
date_published: "2026-02-26"
date_modified: "2026-05-08"
status: "Kavramsal açıklayıcı. ChainCash/Basis Note uygulamaları denetlenene kadar prototip/testnet-first olarak kalır."
tags: ["Ergo Notes", "native tokens", "AI agent payments", "bearer instruments", "programmable credit"]
target_keywords: ["Notes vs tokens", "Ergo Notes", "programmable bearer instruments", "AI agent credit", "Reserve backed Notes"]
---

# Notes vs Tokens: AI Agent Ödemeleri İçin Programlanabilir Taşıyıcı Enstrümanlar

**Mayıs 2026 itibariyle Durum:** Ergo yerli token'ları canlı bir protokol özelliğidir. Burada tartışılan Note/Reserve/Tracker sistemleri, belirli bir uygulamanın denetlenmiş ve üretim için hazır olarak işaretlenmiş olmadığı sürece referans kalıpları ve prototipleridir.

Blokzincirler token'larda iyidir. Bir token sahipliği, üyeliği, likiditeyi, oylama gücünü, koleksiyonu, istikrarlı madeni para talebini veya basit değer birimini temsil edebilir. Token'lar tanıdık, birleştirilebilir ve aktarması kolaydır.

Ama AI ajanları sadece varlıklara ihtiyaç duymaz. Bütçelere ihtiyaç duyarlar.

Bir ebeveyn ajan, Cuma gününden önce veri çağrılarına harcamak için 0,5 ERG'ye kadar harcama izni verici bir alt ajana ihtiyaç duyabilir. Bir hizmet sağlayıcı, görev çıktısı bir yüklemi eşleşirse daha sonra geri alınabilen bir talep kabul edebilir. Çok ajanıyla iş akışı, son kapatmadan önce dolaşan küçük, sona eren, koşullu olarak kullanılabilir enstrümanlar gerektirebilir.

Bu, basit bir token'ın amacı değildir.

Bu, bir **Note**'un amacıdır.

## TL;DR

### Token'lar sahipliği temsil eder

Yerli bir token aktarılabilir bir varlıktır. Fungible bakiyeler, yönetişim, NFT'ler, LP pozisyonları ve basit ödemeler için mükemmeldir.

### Note'lar koşullu krediyi temsil eder

Note programlanabilir bir taşıyıcı enstrümanıdır. Bir Reserve'e referans yapabilir, sona erme tarihini taşıyabilir, değeri kodlayabilir ve kabul koşullarını içerebilir.

### Ajanlar iş olduğunda Note'lara ihtiyaç duyar

Bir ödeme yalnızca bir görev kabul edildikten sonra geri alınmalı veya bir alt ajan sınırlandırılmış bir bütçe almalıysa, Note'lar token'lardan daha ifade edicidir.

### Note'lar ve token'lar birleşir

Bu bir rekabet değildir. Gerçek bir ajan ekonomisi sahiplik için token'ları ve programlanabilir ödeme akışları için Note'ları kullanabilir.

## Token nedir?

Bir Ergo yerli token'ı eUTXO modelinde birinci sınıf bir varlıktır. Basılabilir, aktarılabilir ve doğrudan UTxO'larda tutulabilir. Bir ERC-20 tarzı sarmalayıcı sözleşmesine ihtiyaç duymaz.

Token'lar soru basit olduğunda iyi çalışır:

> Bu varlığın kaç birimi sahibinin kimdir?

Token'ları şu durumlarda kullanın:

- topluluk para birimleri;
- yönetişim hakları;
- NFT'ler;
- likidite pozisyonları;
- protokol payları;
- basit koşulsuz ödemeler;
- ödül puanları;
- istikrarlı varlıklar veya sarmalı varlıklar;
- otomatik olarak sona ermemesi gereken varlıklar.

Bir token aktarımı doğrudandır. Alıcı token'ı alırsa sahiplik değişti. Bu basitlik güçtür.

## Note nedir?

Note eUTXO üzerine inşa edilmiş daha yüksek seviye bir enstrümandır. Kuralları olan UTxO şeklinde bir talepdir. Bir Reserve'e işaret edebilir, değeri belirtebilir, blok yüksekliğinde sona erebilir ve itfa öncesi bir kabul yüklemesi gerektirebilir.

Ekonomik benzetme, nakitten çek, kupon, tahvil kupon veya taşıyıcı IOU'ya daha yakındır.

Note, bir token'ın kendisi tarafından genellikle yanıtlayamayacağı soruları yanıtlayabilir:

- Hangi Reserve bu talebi destekliyor?
- Ne zaman sona eriyor?
- İtfa öncesi hangi çalışma kabul edilmeli?
- Bu Note zaten itfa edildi mi?
- Hangi doğrulayıcı veya yüklem kabulu kontrol ediyor?
- Bu Note toplu olarak kapatılabilir mi?

## Temel farklar

| Mülk | Token | Note |
|---|---|---|
| Temel anlam | Bir varlığın sahipliği | Bir Reserve veya ihraçcı politikasına karşı talep |
| Takas | Anında aktarım | Ertelenmiş itfa |
| Sona erme | Genellikle yok | Yerleşik |
| Kabul koşulları | Aktarıma yerli değil | Temel özellik |
| Destek | İsteğe bağlı veya harici | Reserve referansı açık olabilir |
| Ajan bütçe kullanımı | Sınırlı | Güçlü |
| Toplu takas | Ana model değil | Doğal uyum |
| Yönetişim kullanımı | Güçlü | Zayıf |
| Uzun yaşamış likidite | Güçlü | Genellikle yanlış araç |
| Görev koşullu ödeme | Ekstra mantık gerektirir | Yerli tasarım amacı |

## Note yaşam döngüsü

Kullanışlı bir Note sistemi tam bir yaşam döngüsüne ihtiyaç duyar.

### 1. Reserve oluşturun

Reserve destek kaynağıdır. Teminat tutar veya ihraçcı kurallarını tanımlar. Karşı taraf Note'ları kabul etmeden önce Reserve'i inceleyebilir.

### 2. Note çıkarın

İhraçcı Reserve'e referans yapan bir Note oluşturur. Note değer, sona erme, alıcı kısıtlamaları, görev karması veya doğrulayıcı politikası kodlayabilir.

### 3. Note'u aktarın

Note ajanlar arasında taşıyıcı enstrüman olarak hareket edebilir. Alıcı Reserve ve koşulların kabul edilebilir olup olmadığını değerlendirir.

### 4. Çalışma yapın

Alıcı veya alt akış ajan görevi tamamlar, bir API çağırır, çıktı gönderir veya doğrulayıcı makbuzu alır.

### 5. Note'u itfa edin

Note, yüklemini karşılayan bir işlemde harcanır. Reserve kurallar doğrultusunda geri ödeme yapar veya durumu günceller.

### 6. Tracker'ı güncelleyin

Tracker çift itfa'yı önler. Harcanan Note kimliklerini veya eşdeğer durum geçişlerini kaydeder.

### 7. Toplu kapatma

Birçok küçük ödeme için, alıcılar birden fazla kabul edilen Note'u tek bir toplu işlemde itfa edebilir, ek yükü azaltır.

## Ajanların Note'a ihtiyaç duyduğu durumlar

### Görev koşullu ödemeler

Ajan A, Ajan B'ye yalnızca B çıktıyı taahhütlü karma veya kabul edilen doğrulayıcı makbuzu eşleştirir döndürürse ödeme yapmak istiyor. Bir token aktarımı bu koşulu kendisi tarafından ifade edemez. Bir Note yapabilir.

### Çok ajanı bütçeleri

Bir orkestratör alt ajanları sınırlı harcama gücü verir. Bütçe sona ermeli, Reserve limitinde kalmalı ve muhtemelen hizmet kategorisine kısıtlanmalıdır. Note bu kaynağın doğal enstrümanıdır.

### Ertelenmiş takas

Hizmet sağlayıcı gün boyunca birçok küçük Note'u kabul edebilir ve daha sonra itfa edebilir. Bu her küçük etkileşimi hemen kapatmayı önler.

### İç kredi

Güvenilir bir ihraçcı sınırlandırılmış ağ içinde harcayıcı kredi oluşturmak isteyebilir. Note'lar bir Reserve veya ihraçcı politikasına karşı talepleri temsil edebilir.

### Çalışma pazarları

Alıcı görev gönderir. Çalışan Note'u kabul eder. Doğrulayıcı makbuzu imzalar. Çalışan kabul'ten sonra itfa eder. Bu "şimdi token gönder ve çalışmanın geliş umudunu yapıştır"dan daha temiz bir ilkeldir.

## Token'lar ne zaman daha iyidir?

### Uzun yaşamış sahiplik

Yönetişim hakları, bahis pozisyonları, NFT'ler ve LP payları genellikle token olmalıdır. Bunlar geçici ödeme talepleri değildir.

### Basit koşulsuz aktarımlar

Hedef "bu adrese 10 birim gönder" ise, token kullanın. Note karmaşıklığı hiçbir koşulun gerekli olmadığı yere eklemeyin.

### Likit pazarlar

Token'lar değişim, pazar yapımı ve genel likidite için daha iyidir. Note'lar daha bağlamsal ve ihraçcı, sona erme ve yüklem riskini taşıyabilir.

### Kamu varlıkları

Birçok ilgisiz kullanıcı bir varlığı sonsuza kadar tanıymalı ve tutmalıysa, token semantikleri daha uygunudur.

## Note'ları ne zaman kullanmayın

Note'ları kullanmayın çünkü gelişmiş ses gibi. Bunlardan kaçının:

- sona erme gerekmez;
- kabul koşulu gerekmez;
- enstrüman standartlaştırılmış varlık olarak serbestçe ticaret yapmalıdır;
- Reserve kullanıcılara anlaşılır değildir;
- uygulama denetlenmemiş ve gerçek para söz konusudur;
- görev nesnel veya güvenilir doğrulayıcı tarafından doğrulanamaz;
- kullanıcılar Note'ları istikrarlı madeni paralar veya garantili mevduatla karıştırırlar.

Note'lar spesifik olduğu için güçlüdürler. Token'lar için evrensel bir yedek değillerdir.

## Örnek: ajan API bütçesi

Ücretli veri API'lerini çağırması gereken bir araştırma ajanı hayal edin. İnsan operatörü ajana sınırsız bir cüzdan vermek istemez.

Operatör bir Reserve oluşturur ve üç Note çıkarır:

- Hava tahmini verisi için 0,05 ERG Note, 24 saatte sona eriyor.
- Pazar verisi için 0,10 ERG Note, 12 saatte sona eriyor.
- Belge alımı için 0,20 ERG Note, makbuz karma gerektirir.

Ajan bu sınırlar içinde harcayabilir. Tavaya düşerse, çıkarılan Note'ları aşamaz. Note'lar sona erer, bütçe kapanır. Hizmet kabul yüklemini karşılayamıyorsa, itfa edemez.

Bu ajana ham cüzdan bakiyesi vermekten daha güvenlidir.

## Örnek: çok ajanı iş akışı

Koordinatör üç alt ajanı işe alır:

1. Extractor ajan: belgeleri ayrıştır.
2. Analist ajan: bulguları özetle.
3. Doğrulayıcı ajan: çıktıları doğrula.

Koordinatör her birine Note çıkarır. Extractor'ın Note'u şema-geçerli çıktı gerektirir. Analistin Note'u kabul edilen özet karması gerektirir. Doğrulayıcının Note'u imzalı doğrulama makbuzu gerektirir. Her Note daha sonra Reserve'e karşı kapatılabilir.

Ödeme grafiği artık çalışma grafiğini yansıtır.

## Risk modeli

Bir Note, Reserve'i, yüklemini ve uygulamasından yalnızca iyi olabilir.

Sorun:

- Reserve gerçek ve yeterli mi?
- Not'u kimler çıkarabilir?
- Ödenmemiş Note'lar desteklemeden fazla olabilir mi?
- Çift itfa nasıl önlenmiş?
- Sona ermeden sonra ne olur?
- Çalışmayı kimler doğrular?
- Komut dosyası denetlendi mi?
- Kullanıcılar riski anlayabilir mi?

Bu cevaplar net değilse, gerçek paralarla konuşlandırmayın.

## SSS

### Ajan ödemeleri için Ergo yerli token'larını kullanabilir misiniz?

Evet. Basit koşulsuz ödemeler için yerli token'lar iyi çalışır. Note'lar ödemenin sona erme, Reserve desteği, ertelenmiş takas veya iş kabul koşuluna ihtiyaç duyduğunda yararlı hale gelir.

### Taşıyıcı enstrüman nedir?

Taşıyıcı enstrüman, sahibinin itfa veya değer aktarımı için sunabileceği bir şeydir. Bu bağlamda Note, ajanlar arasında aktarılabilen ve komut dosyası kurallarına göre itfa edilebilen programlanabilir bir talepdir.

### Note'lar istikrarlı madeni paralarla aynı mı?

Hayır. İstikrarlı madeni para genellikle harici bir muhasebe birimini izlemek için tasarlanmış fungible bir token'dır. Note, bir Reserve veya ihraçcı politikasına karşı bağlamsal bir talepdir. ERG, token veya başka bir birimde gösterilmiş olabilir, ama tanımlayıcı özelliği programlanabilir itfadır.

### Note'lar DeFi'de ticaret yapılabilir mi?

Muhtemelen, ama bu birincil amaçları değildir. Note'lar sona erme, ihraçcı ve yüklem riski taşıyabildiği için fungible token'lardan daha karmaşıktırlar. Herhangi bir DeFi entegrasyonu bu riskleri açık yapmalıdır.

### Note'lar bugün üretim açısından hazır mı?

Kavram güçlüdür ve Ergo'nun eUTXO modeli deseni destekler. ChainCash/Basis referans sözleşmeleri gibi belirli Note sistemleri denetlenene ve açık şekilde üretim hazırı olarak işaretlenene kadar prototip veya testnet-first olarak değerlendirilmelidir.

## Makale JSON-LD taslağı

```json
{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Notes vs Tokens: AI Agent Ödemeleri İçin Programlanabilir Taşıyıcı Enstrümanlar",
  "description": "Ergo Notes ve yerli token'ları karşılaştırın: AI ajanlarının programlanabilir IOU'lara, Reserve desteğine, sona erme tarihine, kabul yüklemş ve ertelenmiş kapatmaya ihtiyaç duyduğu durumlar.",
  "datePublished": "2026-02-26",
  "dateModified": "2026-05-08",
  "author": { "@type": "Organization", "name": "Ergo Developer Relations" },
  "publisher": { "@type": "Organization", "name": "Ergo Platform" },
  "mainEntityOfPage": "https://www.ergoblockchain.org/blog/notes-vs-tokens",
  "keywords": ["Ergo Notes", "native tokens", "AI agent payments", "programmable credit", "bearer instruments"]
}
```

## Kaynak notları

- Orijinal makale: https://www.ergoblockchain.org/blog/notes-vs-tokens
- Accord Protocol repo: https://github.com/accord-protocol/accord-protocol
- Ergo teknoloji sayfası: https://www.ergoblockchain.org/technology