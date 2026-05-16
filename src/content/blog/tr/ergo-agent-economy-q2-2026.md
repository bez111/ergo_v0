---
title: "Accord Protocol Q2 2026 Güncellemesi: Ergo'nun Agent Economy Stack'inde Neler Gönderildi"
slug: "/blog/ergo-agent-economy-q2-2026"
seo_title: "Accord Protocol Q2 2026: AI Agent Payments SDK, MCP Server ve Ergo Testnet Demoları"
meta_description: "Accord Protocol Q2 2026 güncellemesi: AI agent ödeme SDK'ları, Ergo Notes, MCP sunucusu, LangChain/OpenAI/CrewAI/AutoGen adaptörleri, testnet demoları ve denetim kapılı mainnet yol haritası."
excerpt: "İlk Ergo agent-ödeme SDK sürümünden iki ay sonra, Accord Protocol artık testnet-first anlaşma katmanı, tam Note yaşam döngüsü, framework adaptörleri, MCP araçları ve on çalışan örnek sunuyor."
author: "Ergo Developer Relations"
date_published: "2026-05-06"
date_modified: "2026-05-08"
status: "Testnet beta. Accord, ChainCash/Basis referans kontratları ve agent-ödeme SDK akışlarının Mainnet kullanımı imzalı denetim manifestoları tarafından kapılı kalır."
tags: ["Accord Protocol", "Ergo", "AI agent payments", "MCP", "x402", "developer update"]
target_keywords: ["Accord Protocol", "AI agent payments SDK", "Ergo agent payments", "MCP server payments", "x402 work verification", "autonomous agent settlement"]
---

# Accord Protocol Q2 2026 Güncellemesi: Ergo'nun Agent Economy Stack'inde Neler Gönderildi

**Durum Mayıs 2026 itibarıyla:** Ergo'nun temel protokol primitifleri mainnet'te canlıdır. Accord Protocol, Ergo agent-ödeme SDK'ları, ChainCash/Basis referans kontratları ve herkese açık demolar **testnet-first** olup, açıkça belirtilmedikçe başka türlü işaretlenmemiştir. Mainnet üretim kullanımı imzalı denetim manifestoları yayınlanana ve doğrulanana kadar engellenmeli kalmalıdır.

İki ay önce ilk herkese açık Ergo agent-ödeme SDK'sı dar bir soruya cevap verdi: otonom bir yazılım ajanı bir insanın döngüde olması olmadan Ergo üzerinde ödeme yapabilir mi? Cevap evet idi, ancak ilk sürüm kasıtlı olarak küçüktü. Değer gönderebilir, temel bir Note yayınlayabilir, birkaç yardımcıyı sunabilir ve yönü kanıtlayabilirdi.

Q2, projenin şeklini değiştiriyor. İş, tek bir Ergo rail SDK'sından **Accord Protocol**'e taşındı: otonom agent çalışması için açık bir anlaşma protokolü. Ergo rail hala ilk uçtan uca referans uygulaması olmaya devam ediyor, ancak çerçeve artık daha geniş. MCP ajanların araçları nasıl çağırdığını açıklıyor. A2A tarzı protokoller ajanların nasıl iletişim kurduğunu açıklıyor. x402 tarzı akışlar ödenen bir HTTP isteğinin nasıl gerçekleştirilebileceğini açıklıyor. Accord, ne söz verildiğini, tamamlanmanın nasıl doğrulandığını ve ödemenin nasıl kaydedildiğini açıklıyor.

Bu ayrım önemli. Ödeme tek başına tüm sorun değildir. Ödenen bir API çağrısı yalnızca paranın hareket ettiğini söyler. Agent ticareti aynı zamanda bir anlaşmaya ihtiyaç duyar: işi kim istedi, hangi çıktı beklendi, hangi doğrulayıcı kabul etti, hangi rail ödeme yaptı ve iş kısmi, geç veya geçersiz ise ne olur. Accord, ödemeyi doğrulanabilir bir iş kontratına dönüştüren katman.

## TL;DR

### Accord artık şemsiye protokolü

Eski `ergo-agent-economy` deposu Accord Protocol'e göç etti. Repo artık Ergo, Rosen, Base/EVM ve x402 uyumlu referans rail'leri ile rail-agnostik bir anlaşma katmanını açıklıyor. Ergo rail, eUTXO, ErgoScript, Notes, Reserves ve acceptance predicate'leri doğal olarak tasarıma uyduğu için hala en eksiksiz uçtan uca uygulamayı sağlıyor.

### Stack testnet-first ve denetim kapılı

Proje açık kaynaklı ve çalışır durumda, ancak üretim sertifikası değildir. Repo durumu açıktır: **testnet beta** ve **imzalı denetim manifestoları kadar mainnet engellendi**. Yapıcılar mevcut kodu prototipler, demolar ve testnet dağıtımları için referans uygulama olarak ele almalıdır.

### Note yaşam döngüsü artık uçtan uca uygulandı

Ergo rail artık tam Reserve → Note → Tracker → Acceptance Predicate yolunu kapsar: Reserve oluşturma, Notes yayınlama, Notes kontrol etme, Notes itfa etme, partileri ödeme ve Tracker durumunu dağıtma. Bu, programlanabilir taşıyıcı enstrümanlar için minimum uygun yaşam döngüsüdür.

### Üç geliştirici yüzeyi mevcut

TypeScript/Node, Python ve MCP araçları yapıcıların yığına farklı çalışma zamanlarından yaklaşmasına olanak sağlar. Bir JavaScript ajanı Notes yayınlayabilir. Bir Python ajanı bir API için ödeme yapabilir. MCP uyumlu bir ana bilgisayar, ödeme araçlarını bir AI asistanı veya geliştirici ortamında sunabilir.

### Sonraki engel hayal gücü değil; doğrulama

Sonraki faz denetim, standardizasyon ve geliştirici kanıtıdır: harici güvenlik incelemesi, net durum manifestoları, barındırılan testnet referans dApp'i, daha fazla framework entegrasyonu ve daha iyi uygunluk testleri.

## Adlandırma ve göç

Yeniden markalandırma, her geliştirici inşa etmeden önce anlaması gereken gerekli bir ayrım oluşturdu.

| Katman | Kanonik ad | Ne anlama gelir |
|---|---|---|
| Şemsiye protokolü | Accord Protocol | Anlaşma, doğrulama makbuzları, ödeme makbuzları ve çapraz-rail spesifikasyonları. |
| Kanonik paketler | `@accord-protocol/*` | Paylaşılan türler, uygunluk araçları, Accord/MCP, Accord/402 ve çapraz-rail protokol nesneleri. |
| Ergo referans rail | `ergo-agent-*` paketleri | Notes, Reserves, Trackers, acceptance predicate'leri ve testnet demoları için Ergo'ya özgü SDK'lar. |
| Referans kontratlar | ChainCash / Basis prototipleri | Programlanabilir Notes ve kredi akışlarının açık kaynaklı referans uygulaması; denetimi yapılmadı. |

Basit bir kural: çapraz-rail spesifikasyonunu okuyorsanız `@accord-protocol/*` ile başlayın. Bugün Ergo testnet ajanı inşa ediyorsanız `ergo-agent-*` rail paketleri ile başlayın. Gerçek kullanıcı fonlarını içeren herhangi bir şey dağıtıyorsanız denetim kapısında durun.

## Neler gönderildi

### 1. Tam Note yaşam döngüsü

Temel kilometre taşı Note yaşam döngüsüdür. Bir Note yalnızca bir token değildir. Programlanabilir bir taşıyıcı enstrüman: bir Reserve'a karşı bir UTxO şekilli talep, değer, sona erme, itfa kuralları ve isteğe bağlı acceptance mantığı ile.

Mevcut yaşam döngüsü şunları içerir:

1. **Reserve oluşturma** — teminat dağıt ve yayınlama kurallarını tanımla.
2. **Note yayınlama** — Reserve'a karşı programlanabilir bir talep oluştur.
3. **Note kontrol etme** — register'ları, sona ermeyi ve acceptance parametrelerini kod çöz.
4. **Note itfa etme** — predicate tatmin olunca Note'u harca.
5. **Batch ödeme** — settlement yükünü azaltmak için birden fazla Note'u birlikte itfa et.
6. **Tracker güncelleme** — kredi sistemi genelinde çift itfayı önle.

Ajanlar için bu, "coin gönder" ile "kuralları olan harcanabilir bütçe yayınla" arasındaki farktır. Bir ana ajan, sınırlandırılmış bir Note'u bir alt ajan'a yayınlayabilir. Alt ajan, bir araç sağlayıcısını ödeyebilir. Araç sağlayıcı daha sonra kabul edilen Notes'u batch'de itfa edebilir. Reserve, yedeklemenin denetlenebilir kaynağı olarak kalır.

### 2. Anlaşma, doğrulama ve ödeme makbuzları

Accord ray'in üstüne bir sözcük dağarcığı ekler.

Bir **Accord Anlaşması** şunları yanıtlar: ne istendi, kimin tarafından, ne kadar için, hangi doğrulama kuralı altında?

Bir **Doğrulama Makbuzu** şunları yanıtlar: bir doğrulayıcı işi kabul etti, reddetti mi, yoksa kısmi olarak kabul etti mi?

Bir **Ödeme Makbuzu** şunları yanıtlar: değer ödeme yaptı mı, hangi ray'de, hangi işlem veya ödeme kanıtı ile?

Bu ayrım ana stratejik yükseltmedir. Accord, eUTXO, ErgoScript, Notes, Reserves ve acceptance predicate'leri doğal olarak tasarıma uyduğu için hala en eksiksiz uçtan uca uygulamayı sağlar.

## Yapıcıların çalıştırabileceği on örnek

Repo artık tek bir merhaba dünya yerine pratik bir dizi içeriyor:

1. Temel agent-to-agent ödeme.
2. Raw ERG yerine Note ödeme.
3. Task çıktısına eklenmiş acceptance predicate.
4. Alt ajanlar için orchestrator bütçesi.
5. Ödenen API sunucusu.
6. Bir API çağrısı için ödeme yapan Python ajanı.
7. Kullanım tabanlı hizmetler için streaming ödeme.
8. Multi-agent bütçeleri için Treasury multisig.
9. CrewAI multi-agent settlement örneği.
10. Ergo ödeme aracı ile AutoGen ajanı.

Örnekler testnet-first olarak kalmalıdır. Bu bir zayıflık değil, bir özelliğidir. Agent ödemeleri yeni bir yüzey alanıdır: anahtar özel saklama, replay koruması, geri ödeme, kısmi iş, doğrulayıcı güveni ve başarısız ödeme hepsi mainnet akışları önerilmeden önce dikkatli işleme ihtiyaç duyar.

## Framework adaptörleri

Agent yapıcıları bir blockchain uzmanı olmak istemiyor, onları bir prototip göndermeden evvel. SDK yönü bu nedenle doğru: geliştiricileri zaten kullandıkları framework'ler içinde karşıla.

### LangChain

LangChain örnekleri ödeme ve Note işlemleri araçlar olarak sunur. Bir zincir veya ajan ödenen bir kaynağı isteyebilir, bir Note'un kabul edilip edilmediğini kontrol edebilir ve ödeme veya doğrulama tamamlandıktan sonra devam edebilir.

### OpenAI fonksiyon çağırma

OpenAI tarzı fonksiyon arayüzü ödemeyi çağrılabilir bir operasyona dönüştürür. Model UTxO ayrıntılarını anlamak zorunda değildir; sınırlandırılmış bir araç tanımı alır ve ana bilgisayar uygulaması ilkeyi uygular.

### CrewAI ve AutoGen

Multi-agent framework'leri ödeme sorununu daha belirgin hale getirir. Bir koordinatör ajanlar'a iş atar. Ajanlar API'ları çağırır, alt görevleri devreder ve çıktılar üretirler. İç bütçe enstrümanları olmadan, tüm maliyetler insan operatöre geri düşer. Notes, bütçenin görevle birlikte hareket etmesini sağlar.

### MCP

MCP önemlidir çünkü AI asistanları, geliştirici araçları ve harici özellikleri arasında pratik bir köprüdür. MCP ödeme sunucusu "ödeme", "Note yayınla", "Note kontrol et" veya "işi doğrula"yı uyumlu bir ana bilgisayara sunabilir. Bu, ödemeyi özel bir entegrasyon değil, bir araç haline getirir.

## x402'nin nereye uyduğu

x402 önemlidir çünkü HTTP 402 Payment Required'ı gerçek bir programlı ödeme deseni olarak geri getirir. Bir sunucu ödeme talimatları ile yanıt verebilir, istemci bir ödeme yükü ekleyebilir ve bir kolaylaştırıcı ödemeyi doğrulayabilir ve ödeme yapabilir. Bu ödenen API'lar, duvar arkası içerik ve makine-makine istekleri için temiz bir arayüzdür.

Accord, x402'nin yerini aldığını iddia etmemelidir. Daha güçlü konumlandırma:

> **x402 ödemeyi doğrular. Accord tamamlamayı doğrular. Ergo programlanabilir değeri halleder.**

Ödenen istek x402 tarzı bir zorluk kullanabilir. Iş anlaşması Accord'da kaydedilebilir. Ödeme Ergo Notes, Rosen varlıkları, bir EVM stablecoin ray'i veya başka bir adaptör aracılığıyla gerçekleşebilir. Önemli nokta her ödemenin hangi ray'i kazandığı değildir; anlaşma, doğrulama ve ödemenin besteleşebilir olup olmadığıdır.

## Bugün neler inşa edebilirsin

Testnet deneyleri için mevcut yığını kullan, örneğin:

- doğrulanmış testnet ödemesinden sonra veri döndüren ödenen API uç noktası;
- çağrı başına ücret alan MCP aracı;
- harcama limitleri ile alt ajanlar'a Notes yayınlayan ana ajan;
- doğrulayıcı çıktıyı kabul ettikten sonra alıcının ödeme yaptığı çalışma pazarı;
- küçük ölçümlü ödemelerle streaming inference demosu;
- ödeme doğrulaması ile iş doğrulaması arasındaki farkı gösteren belge demosu.

Denetimden geçmemiş referans kontratları gerçek para kredi yayınlamak için kullanma. Kullanıcı fonlarını tutma. Denetim manifestoları var olmadan üretim hazırlığını reklamla tanıtma.

## 2026'nın geri kalanı için yol haritası

### 1. Harici denetim ve imzalı manifestolar

En yüksek öncelik güvenlik incelemesidir. İmzalı denetim manifestosu tam script hash'i, derlenmiş ErgoTree'i, paket versiyonunu, ray adaptörünü ve dağıtım ağını belirtmelidir. "Denetimi yapılan" geniş bir iddia değil, spesifik bir yapı anlamına gelmelidir.

### 2. Standart keşif

Ajanlar ödeme şartlarını keşfetmek için öngörülebilir bir yol gereksinim duyar. Gelecekteki bir standart `.well-known/accord.json`, HTTP başlıkları veya fiyat, ray, kabul edilen varlıklar, doğrulama kuralı ve geri ödeme ilkesi açıklayan x402 uyumlu bir uzantı sunabilir.

### 3. Barındırılan testnet referans dApp

Herkese açık demo başka bir manifesto'dan daha fazla önemlidir. Bir yapıcı bir sayfayı açabilmeli, ödenen bir görev isteyebilmeli, 402 tarzı bir zorluk görebilmeli, testnet cüzdanı ile ödeme yapabilmeli, bir Note itfa edişini izleyebilmeli ve makbuzları inceleyebilmelidir.

### 4. Uygunluk testleri

Her ray adaptörü karşılaştırılabilir anlaşma, doğrulama ve ödeme makbuzları üretmelidir. Uygunluk testleri Accord'u örnekler koleksiyonu yerine protokole yapan şeydir.

### 5. Daha fazla framework entegrasyonu

LangGraph, LlamaIndex, Vercel AI SDK, DSPy ve yerel agent framework'leri hepsi basit ödeme kancaları sahip olmalıdır. En iyi SDK, yapıcının uygulama mimarisini değiştirmeden ekleyebileceği olandır.

## Yapıcılar için uygulama notları

Testnet'te başla. Küçük değerler kullan. Açık allowlist'ler kullan. Özel anahtarları kaynak kodundan uzak tut. Her ödenen işleme replay koruması ekle. Doğrulamayı ödeme'den ayrı bir adım olarak ele al. Hem ödeme makbuzları hem de iş makbuzlarını kaydedilme. Geri ödeme ve başarısız iş işlemesini açık yap.

İyi bir demo başarısız modları gizlemez. Onları gösterir.

## SSS

### Accord Protocol üretim hazır mı?

Hayır. Mevcut herkese açık repo testnet-first referans uygulamasıdır. Prototipler, demolar ve geliştirici araştırması için faydalıdır. Mainnet üretim kullanımı imzalı denetim manifestoları incelenen script'leri, paket sürümlerini ve ray adaptörlerini tanımlayana kadar engellenmeli kalmalıdır.

### Accord ile Ergo agent ödelemeleri arasındaki fark nedir?

Accord anlaşma katmanıdır: şartlar, doğrulama makbuzları ve ödeme makbuzları. Ergo agent ödelemeleri bir ray uygulamasıdır: Ergo üzerinde Notes, Reserves, Trackers ve acceptance predicate'ler. Accord işi anlaşmalarını ray'ler arasında açıklayabilir; Ergo bugün en eksiksiz programlanabilir ödeme primitif setini sağlar.

### Accord yeniden markalaması sonrasında neden `ergo-agent-*` paketleri tutuyorsun?

Çünkü Ergo'ya özgü giriş noktaları olarak faydalı olmaya devam ediyor. Kanonik şemsiye Accord olabilir, ancak Ergo Notes oluşturmak veya testnet Ergo örnekleri çalıştırmak isteyen yapıcılar hala ray'e özgü SDK'lara ihtiyaç duyar. Önemli olan onları referans ray paketleri olarak net etiketlemektir.

### Accord x402'den nasıl farklı?

x402 HTTP üzerinden ödemeye odaklanır: bir kaynak ödeme gerektirir, istemci ödeme yükü gönderir ve doğrulama/ödeme erişimi açar. Accord iş anlaşmalarına odaklanır: ne söz verildi, nasıl doğrulandı ve ödeme nasıl kaydedildi. İyi bir şekilde besteleşebilirler.

### Sonraki demo ne göstermeli?

HTTP 402 döndüren barındırılan testnet API'sı, Accord/402 ödeme akışını kabul eden, görev tamamlamasını doğrulayan, doğrulama makbuzu yayan ve Ergo Note aracılığıyla ödeme yapan en güçlü herkese açık kanıt olur.

## Makale JSON-LD taslağı

```json
{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Accord Protocol Q2 2026 Güncellemesi: Ergo'nun Agent Economy Stack'inde Neler Gönderildi",
  "description": "Accord Protocol Q2 2026 güncellemesi: AI agent ödeme SDK'ları, Ergo Notes, MCP sunucusu, framework adaptörleri, testnet demoları ve denetim kapılı mainnet yol haritası.",
  "datePublished": "2026-05-06",
  "dateModified": "2026-05-08",
  "author": { "@type": "Organization", "name": "Ergo Developer Relations" },
  "publisher": { "@type": "Organization", "name": "Ergo Platform" },
  "mainEntityOfPage": "https://www.ergoblockchain.org/blog/ergo-agent-economy-q2-2026",
  "keywords": ["Accord Protocol", "AI agent payments", "Ergo", "MCP", "x402", "testnet"]
}
```

## Kaynak notları

- Mevcut blog makalesi: https://www.ergoblockchain.org/blog/ergo-agent-economy-q2-2026
- Accord Protocol deposu: https://github.com/accord-protocol/accord-protocol
- x402 belgelendirmesi: https://docs.cdp.coinbase.com/x402/welcome
- Makale yapılandırılmış veri rehberi: https://developers.google.com/search/docs/appearance/structured-data/article