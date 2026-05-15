---
title: "ErgoScript Kabul Yüklemleri: AI Aracı Ödemeleri için Zincir-Üstü İş Doğrulaması"
slug: "/blog/ergoscript-acceptance-predicates-agent-payments"
seo_title: "ErgoScript Kabul Yüklemleri: AI Aracı Görevleri için Zincir-Üstü Doğrulama"
meta_description: "ErgoScript kabul yüklemlerinin ödeme UTxO'larına görev tamamlama koşullarını nasıl kodladığını ve AI aracılarının daha az zincir-dışı güven varsayımıyla işi nasıl doğrulayabileceğini öğrenin."
excerpt: "Kabul yüklemleri bir ödemeyi koşullu kullanılabilir bir iş sözleşmesine dönüştürür: alıcı yalnızca üzerinde anlaşılan görev koşulu karşılandığında kullanabilir."
author: "Ergo Developer Relations"
date_published: "2026-03-12"
date_modified: "2026-05-08"
status: "Teknik açıklama. Örnek yüklemler eğitici amaçlıdır; üretim betikleri denetim ve tam test vektörleri gerektirir."
tags: ["ErgoScript", "AI agent payments", "acceptance predicates", "eUTXO", "work verification"]
target_keywords: ["ErgoScript acceptance predicate", "AI agent task verification", "on-chain work verification", "programmable payment conditions", "Ergo smart contracts"]
---

# ErgoScript Kabul Yüklemleri: AI Aracı Ödemeleri için Zincir-Üstü İş Doğrulaması

**Mayıs 2026 itibariyle durum:** kabul yüklemleri ErgoScript ve eUTXO üzerine inşa edilen bir tasarım desenidir. Aşağıdaki örnekler eğitici amaçlıdır ve gerçek parayla denetim, test vektörleri ve denetim olmadan kullanılmamalıdır.

Çoğu ödeme sistemi bir soruyu yanıtlar: ödeme yapan para gönderdi mi?

Aracı ticareti daha zor bir soru sorar: alıcı ödemenin karşılığı olan işi tamamladı mı?

Bir AI aracı statik bir API yanıtı için ödeme yaparsa, basit bir ödeme makbuzu yeterli olabilir. Ancak aracı başka bir aracıya bir belgeyi özetlemek, bir görev çözmek, bir ispat üretmek, kod oluşturmak, veri sınıflandırmak veya imzalı bir sonuç döndürmek için ödeme yaparsa, yalnızca ödeme yetersizdir. Ödeme yapan kişi kullanımı kabule bağlamak için bir yönteme ihtiyaç duyar.

Bir **kabul yüklemi** bu bağlamadır. Ödeme aracının kendisine gömülü bir koşuldur. Alıcı yalnızca yüklem doğru değerlendirilirse kullanabilir.

Ergo açısından, yüklem bir ErgoScript harcama koşulunda yaşar. Bir Note veya ödeme kutusunu kullanmak için harcayan, o koşulu karşılayan bir işlem oluşturmalıdır. Sonuç, kör bir transferden çok kendi kendini uygulayan bir iş sözleşmesi gibi davranan bir ödeme olur.

## Özet

### Ödeme, kabul ile aynı şey değildir

Bir işlem değerin hareket ettiğini kanıtlar. İşin teslim edildiğini kanıtlamaz. Kabul yüklemleri ödemeye bir doğrulama kuralı ekler.

### eUTXO yüklemi açık hale getirir

Ergo'da, bir UTxO bir harcama koşuluna sahiptir. Bir Note veya ödeme kutusunu kullanmak için harcayan, bu koşulu karşılayan bir işlem oluşturmalıdır. Kural görünürdür ve belirleyicidir.

### En basit yüklem bir görev hash'ini kontrol eder

Örneğin: "Bu Note'u yalnızca gönderilen çıktı son tarihten önce beklenen özete hash'lendiyse kullan." Bu her görev için yeterli değildir, ama en minimal desendir.

### Yüklemler güveni azaltır; tüm güveni ortadan kaldırmazlar

Yüklem bilinen bir çıktının hash'ini doğrularsa, güven düşüktür. Üçüncü taraf bir doğrulayıcıya güvenirse, doğrulayıcı güven modelinin parçası olur. Yüklem varsayımları açık hale getirir; imkansız görevleri sihirli olarak doğrulanabilir yapmaz.

## Sorun: aracılar erişim için değil, sonuçlar için ödeme yapar

İnsan belirsizlik ile başa çıkabilir. Bir yüklenici kötü iş yaparsa, insan şikayetçi olabilir, tartışabilir, yeniden müzakere edebilir veya gelecek ödemeyi reddedebilir. Otonom bir aracının daha açık kuralları vardır.

Basit bir aracı ardışık düzenini göz önünde bulundurun:

1. Araştırma aracısı veri aracısına bir veri kümesi için ödeme yapar.
2. Veri aracısı temizleme aracısına normalleştirilmiş kayıtlar için ödeme yapar.
3. Temizleme aracısı model aracısına çıkarım için ödeme yapar.
4. Araştırma aracısı editör aracısına son çıktı için ödeme yapar.

Her adımın başarısının farklı bir tanımı vardır. "Ödeme gerçekleşti" yeterli değildir. Ardışık düzen kabul kurallarına ihtiyaç duyar:

- Veri kümesi beklenen sağlayıcı tarafından imzalandı mı?
- Temizlenen veriler beklenen şemayı eşleştirdi mi?
- Model çıktısı hash'i taahhüt edilen sonuçla eşleşti mi?
- Yanıt son tarihten önce teslim edildi mi?
- Doğrulayıcı kabulu imzaladı mı?

Programlanabilir kabul olmadan her kural uygulama kodunda zincir-dışı yaşar. Bu merkezi bir güven noktası oluşturur.

## Temel desen

Minimal bir kabul yükleminin dört bölümü vardır:

1. **Görev taahhüdü** — hangi çıktı veya ispat bekleniyor?
2. **Son tarih** — Note ne kadar süreyle kullanılabilir?
3. **Alıcı veya doğrulayıcı yetkilendirmesi** — kim kullanabilir veya kabul edebilir?
4. **Kullanım kuralı** — harcama işleminde ne doğru olmalı?

Basitleştirilmiş bir yüklem şu şekilde denebilir:

```scala
val submittedOutput = getVar[Coll[Byte]](0).get
val outputHashOk = blake2b256(submittedOutput) == TASK_HASH
val beforeDeadline = HEIGHT < EXPIRY_HEIGHT
val receiverOk = proveDlog(RECEIVER_PK)

sigmaProp(outputHashOk && beforeDeadline) && receiverOk
```

Bu şöyle der: alıcı, işlem taahhüt edilen görev hash'iyle eşleşen blake2b-256 hash'ine sahip görev çıktısı içeriyorsa, son tarihten önce kullanabilir.

Gerçek bir sistemde, çıktı tam görev sonucu olmayabilir. İmzalı bir makbuz, ispat, doğrulayıcı beyanı, Merkle kökü veya dışarıda depolanan bir yapıtın özeti olabilir.

## Blake2b Tutarlılığı Neden Önemli

ErgoScript yüklemi `blake2b256` kullanırsa, istemci kodu aynı özeti hesaplamalıdır. Kodda SHA-256 hesaplayıp sözleşmede Blake2b hesaplamayın; makale kodun sözde kod olduğunu açıkça söylemediği sürece.

Bir JavaScript yardımcısı şuna benzer olmalıdır:

```ts
import { blake2b } from "@noble/hashes/blake2b";
import { bytesToHex, utf8ToBytes } from "@noble/hashes/utils";

export function taskHash(output: string): string {
  const digest = blake2b(utf8ToBytes(output), { dkLen: 32 });
  return bytesToHex(digest);
}

const expected = taskHash("the answer is 42");
console.log(expected);
```

Tam baytlar önemli. Hashlemeden önce dizeleri, kodlamaları ve satır sonlarını normalleştirin. Aksi takdirde iki aracı aynı okunabilir çıktının özeti konusunda anlaşamayabilir.

## Kabul Yüklemleri vs Emanet

Geleneksel emanet şöyle der: parayı ortada tutun, sonra birisi işin tamamlandığına karar verdikten sonra serbest bırakın.

Kabul yüklemleri şöyle der: serbest bırakma kuralını harcama koşuluna koyun. Kural objektif, kısmen objektif veya doğrulayıcı tabanlı olabilir.

| Model | Kim karar verir? | Güç | Zayıflık |
|---|---|---|---|
| Manuel emanet | İnsan hakemi | Esnek | Yavaş, merkezi, pahalı |
| API tarafı faturalandırması | Hizmet sunucusu | Basit | Sunucu güvenilir |
| Oracle tabanlı serbest bırakma | Dış oracle | Dış gerçekler için çalışır | Oracle güveni ve latensi |
| HTLC | Hash ön görüntüsü | Basit ve sağlam | Sınırlı koşul ifadelendirme |
| Ergo kabul yüklemi | ErgoScript kuralı | Programlanabilir ve açık | Yalnızca betiğin gözlemleyebileceği veya doğrulayıcının imzalayabileceği şeyi doğrular |

Doğru tasarım göreve bağlıdır. Hash yüklemi taahhüt edilen çıktılar için işe yarar. Doğrulayıcı imzası öznel kalite için işe yarar. Sıfır-bilgi kimliği gizlilik-koruyan kabul için işe yarayabilir. Yüklem güven modelini görünür kılar.

## Yüklemler neyi doğrulayabilir

Kabul yüklemleri şu durumlar için iyi işleyebilir:

- tam çıktı hash'leri;
- imzalı doğrulayıcı makbuzları;
- son tarih kontrolleri;
- bütçe sınırları;
- alıcı yetkilendirmesi;
- token veya Note özellikleri;
- Reserve referansları;
- Tracker güncellemeleri;
- basit veri taahhütleri;
- işlem bağlamı üzerinden iletilen ispatlar.

## Yüklemler tek başına neyi doğrulayamaz

Yüklem keyfi zincir-dışı gerçekliği sihirli bir şekilde inceleyemez. Kalite kriteri kodlanmadığı veya doğrulayıcı bir makbuz imzalamadığı sürece oluşturulan bir eserin "iyi" olup olmadığını bilemez. Yararlılık kontrol edilebilir bir koşula indirgenmediği sürece bir API yanıtının yararlı olup olmadığını bilemez.

Bu bir kusur değil. Bu bir disiplindir: kabul tanımlayamazsan, ödemeyi güvenli şekilde otomatikleştiremezsin.

## Register düzeni örneği

Bir Note tarzı ödeme, görev verilerini register'larda kodlayabilir:

| Register | Anlam |
|---|---|
| R4 | Reserve kutusu kimliği veya anlaşma kimliği |
| R5 | Son tarih blok yüksekliği |
| R6 | Görev hash'i veya görev taahhüdü |
| R7 | Doğrulayıcı açık anahtarı, politika kimliği veya hizmet meta verisi |

Kullanım işlemi daha sonra bağlam değişkenlerini sağlayabilir:

| Bağlam değişkeni | Anlam |
|---|---|
| Var 0 | Gönderilen çıktı veya makbuz baytları |
| Var 1 | İsteğe bağlı doğrulayıcı imzası |
| Var 2 | İsteğe bağlı meta veri veya Merkle ispatı |

Düzeni belgelendi tutun. Hiç kimsenin kodu çözemediği bir yüklem kullanılabilir bir protokol değildir.

## Doğrulayıcı tabanlı yüklem

Bazı görevler öznel kabul gerektirir. Bu durumda, yüklem bir doğrulayıcı imzası gerektirebilir.

```scala
val receipt = getVar[Coll[Byte]](0).get
val receiptHashOk = blake2b256(receipt) == RECEIPT_HASH
val verifierOk = proveDlog(VERIFIER_PK)
val beforeDeadline = HEIGHT < EXPIRY_HEIGHT

sigmaProp(receiptHashOk && beforeDeadline) && verifierOk
```

Bu doğrulayıcı güvenini ortadan kaldırmaz. Kapsamını belirler. Doğrulayıcının rolü açık ve makbuz uygulama politikası tarafından arşivlenebilir, denetlenebilir veya sorgulanabilir.

## Accord için Neden Bu Önemli

Accord iş anlaşmalarını ve doğrulama makbuzlarını tanımlar. ErgoScript kabul yüklemleri bu makbuzları bir ödeme rayında uygulamanın bir yoludur.

Gelecekteki bir akış şöyle görünebilir:

1. Accord Anlaşması, görev, fiyat ve doğrulayıcı tanımlar.
2. Ergo Note, ödeme değerini, son tarihi ve yüklemi kodlar.
3. Çalışan görevi tamamlar.
4. Doğrulayıcı Doğrulama Makbuzu yayınlar.
5. Çalışan, yüklem makbuzu kabul ederse Note'u kullanır.
6. Ödeme Makbuzu, kullanım işlemini kaydeder.

Bu tam bir iş-ödeme döngüsüdür: anlaşma, doğrulama, ödeme.

## Tehdit modeli

### Yeniden oynatma saldırısı

Bir çalışan aynı makbuzu birden fazla ödeme için yeniden kullanır. Azaltma: çağrı kimliği, anlaşma kimliği veya Note kimliğini imzalanan/doğrulanabilir makbuza dahil edin.

### Geç kullanım

Bir çalışan son tarihten sonra kullanır. Azaltma: yükleme `HEIGHT < expiry` ekleyin.

### Yanlış görev çıktısı

Bir çalışan başka bir görev için çıktı gönderir. Azaltma: görev hash'ini, anlaşma kimliğini ve ödeyen/alıcı verilerini taahhüte dahil edin.

### Doğrulayıcı ele geçirme

Doğrulayıcı kötü işi kabul eder. Azaltma: itibar, çok-doğrulayıcı eşik, hisse, denetim günlükleri veya mümkün olduğunda objektif yüklemler kullanın.

### Kodlama uyuşmazlığı

Aracılar farklı bayt gösterimlerini hashleyin. Azaltma: kanonik kodlamayı ve test vektörlerini yayınlayın.

### Sözleşme hatası

Yüklemde bir mantık hatası vardır. Azaltma: testnet, resmi inceleme, harici denetim ve imzalı bildirimler.

## En İyi Uygulamalar

- Yüklem kaynağını ve derlenmiş hash'ini yayınlayın.
- Kanonik kodlamaları kullanın.
- Test vektörlerini dahil edin.
- Yüklemleri dar tutun.
- Ödeme makbuzunu iş makbuzundan ayırın.
- Son tarih ekleyin.
- Yeniden oynatma koruması ekleyin.
- Açık bir doğrulayıcı olmadığı sürece öznel yüklemlerden kaçının.
- Gerçek parayla denetimlenmiş örnek yüklemleri kullanmayın.

## SSS

### Kabul yüklemi nedir?

Kabul yüklemi, bir ödeme aracının kullanılabilmesi için karşılanması gereken programlanabilir bir koşuldur. Ergo aracı-ödeme bağlamında, kullanımı görev çıktısına, doğrulayıcı makbuzuna, son tarihe veya ErgoScript'te kodlanmış başka bir koşula bağlayabilir.

### Bu emanet ihtiyacını ortadan kaldırır mı?

Bazı emanet kullanım durumlarını ortadan kaldırabilir, özellikle kabul kuralı objektif olduğunda. İş öznel yargıya gerektirirse, yine de bir doğrulayıcıya veya uyuşmazlık sürecine ihtiyacınız olabilir. Fark, doğrulayıcının rolünün kodlanabilmesi ve denetlenebilmesidir.

### Ethereum aynı fikri uygulayabilir mi?

Ethereum koşullu ödeme sözleşmeleri uygulayabilir, ancak tasarım genellikle uygulama düzeyinde ve emanet sözleşmeleri, değiştirilebilirlik seçimleri, oracle tasarımı, gaz dinamikleri ve hesap modeli riskleri içerebilir. Ergo'nun eUTXO modeli, ödeme nesnesini ve harcama kuralını açık hale getirir.

### Kabul yüklemleri üretime hazır mı?

Temel ErgoScript yeteneği gerçektir, ancak herhangi bir özel yüklem incelenmelidir. Demo yüklemi üretim sözleşmesi değildir. Testnet kullanın, test vektörlerini yayınlayın ve mainnet kullanımından önce denetimi bekleyin.

### En basit yararlı yüklem nedir?

En basit yararlı yüklem, görev hash'ini ve son tarihi kontrol eder: gönderilen çıktı taahhüt edilen özete hash'lendiyse ve son tarihten önce yalnızca kullanın. Sınırlıdır, ama temel kavramı gösterir.

## Makale JSON-LD taslağı

```json
{
  "@context": "https://schema.org",
  "@type": "TechArticle",
  "headline": "ErgoScript Kabul Yüklemleri: AI Aracı Ödemeleri için Zincir-Üstü İş Doğrulaması",
  "description": "ErgoScript kabul yüklemlerinin ödeme UTxO'larına görev tamamlama koşullarını nasıl kodladığını ve AI aracılarının daha az zincir-dışı güven varsayımıyla işi nasıl doğrulayabileceğini öğrenin.",
  "datePublished": "2026-03-12",
  "dateModified": "2026-05-08",
  "author": { "@type": "Organization", "name": "Ergo Developer Relations" },
  "publisher": { "@type": "Organization", "name": "Ergo Platform" },
  "mainEntityOfPage": "https://www.ergoblockchain.org/blog/ergoscript-acceptance-predicates-agent-payments",
  "keywords": ["ErgoScript", "acceptance predicates", "AI agent payments", "eUTXO", "work verification"]
}
```

## Kaynak notları

- Orijinal makale: https://www.ergoblockchain.org/blog/ergoscript-acceptance-predicates
- Accord Protocol repo: https://github.com/accord-protocol/accord-protocol
- Ergo teknoloji sayfası: https://www.ergoblockchain.org/technology