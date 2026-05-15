---
title: "Bir blokzincire ilk ödenen AI acentesini göndermek"
slug: "/blog/shipping-paid-ai-on-chain"
seo_title: "Bir blokzincire ilk ödenen AI acentesini göndermek — Sage inşa günlüğü"
meta_description: "Sage — ergoblockchain.org'daki acenta ekonomisi kapıcısı — Accord Protokolü kullanılarak Ergo testnet üzerinde uçtan uca nasıl inşa edildi. Mimari, kod yüzeyi, karşılaştığımız üç gerçek hata ve verify-only modu ne anlama geliyor."
excerpt: "Sage, premium cevaplar için Accord Note aracılığıyla 0.001 testnet ERG alan, Ergo üzerinde kapatılan bir Claude kapıcısıdır. Site, şimdi savunduğu acenta ekonomisi tezini göstermektedir. Bu inşa günlüğüdür."
author: "Ergo Developer Relations"
date_published: "2026-05-15"
date_modified: "2026-05-15"
tags: ["Agent Economy", "Accord Protocol", "Sage", "build log", "Ergo testnet", "AI agent payments", "Claude", "Fleet SDK"]
target_keywords: ["paid AI agent on blockchain", "Sage Ergo concierge", "Accord Protocol live demo", "AI agent on-chain payment", "agent economy working demo"]
---

# Bir blokzincire ilk ödenen AI acentesini göndermek

Son altı ay boyunca [bulunduğunuz site](https://www.ergoblockchain.org) bir tez savundu: özerk AI acenteleri programlanabilir paraya ihtiyaç duyacak — sınırlı kredi, makine tarafından okunabilir şartlar, iş doğrulaması, kapatma makbuzları. [Agent Economy Manifestosu](/blog/agent-economy-manifesto) davayı yaptı. Mimari sayfası [dört primitifi](/build/agent-payments) gösterdi. Blog açıkladı [acenteler neden Stripe kullanamıyor](/blog/agents-cant-use-stripe).

O teori idi. Bu haftadan itibaren, site kendisi çalışan demoya dönüştü.

**Sage** her sayfanın sağ altında sohbet widget'ıdır. Ona Ergo, acenta ekonomisi veya Accord hakkında herhangi bir önemli şey sorun. Ücretsiz katman, belgeler dizini üzerinde Claude Haiku 4.5'tir. `/code` sorun veya premium algılama kapısını tetikleyen herhangi bir şey sorun ve Sage HTTP 402 ile bir teklif döndürür: 0.001 testnet ERG, bir Accord Note olarak bir görev hash'ine sabitlenmiş şekilde ödenebilir. Bunu ödeyin. Sage'in rail adaptörü Note'u chain üzerinde doğrular, ardından Claude Sonnet 4.6 cevabı akışa döker. Her ödenen dönem `/r/sage/<box_id>` konumunda arama motorları ve AI motorları kapatmayı dizinleyebilir şekilde Schema.org `Action` işaretlemesi ile genel bir makbuz haline gelir.

Bu gönderi inşa günlüğüdür. Ne yaptığı, ne gerektiği, saatleri yutan üç hata ve dürüstçe ne kadar tamamlanmadığı.

## Sage nedir ve ne yapar

Sage tek kiracılı acenta ekonomisi kapıcısıdır:

- **Ücretsiz katman** — Haiku 4.5 dizine eklenmiş Ergo belgeleri ve blog üzerinde BM25 alımı. ~250 kelimelik cevaplar. Kodu icat etmeyi reddeder, fiyat konuşmasını reddeder, konudan başka şeyleri reddeder. Anthropic tarafında ~$0.001'e mal olur; IP başına hız sınırlandırılmıştır.
- **Premium katman** — Sonnet 4.6 daha derin alımla (RAG_K=10 vs 5), 800 vs 2400 max_tokens ve açık akıl yürütme. Ergo testnet'te ödenen bir Note tarafından kapatılan 402 mücadelesi ile kapılandırılmıştır: bir ödenen Note bir premium dönemi açar.
- **Makbuzlar** — her ödenen dönem, Note kutusu kimliği, çıkış tx'i, değeri, son tarihi ve arama motorları ile AI motorlarının okuyabileceği bir Schema.org `Action` bloğu içeren genel bir URL üretir.

Premium kapı şu durumlarda tetiklenir: açık `/command` öneki, kod şeklindeki niyet, derin araştırma ifadeleri, 400 karakterin üzerinde uzunluk veya uzun bir iş parçacığında çoklu dönem takibi. `src/lib/sage/payments/gate.ts` içindeki buluşsal yöntemler. Yanlış negatiflere karşı önyargılı — eksik ücretlendirmek ilk 100 kullanıcıyı şaşırtmaktan daha iyi.

## Dört primitif işte

Sage özel bir ödeme SDK'sı üzerine kurulu değildir. [Accord Protokolü](https://github.com/accord-protocol/accord-protocol) 'nin tanımladığı ve manifestonun savunduğu aynı dört primitifi oluşturur:

| Primitif | Sage'de ne yapar |
|-----------|----------------------|
| **Reserve** | Ergo testnet üzerinde her Note'u destekleyen 0.1-ERG kutusu. Bir kez kurulum. Kutu kimliği `4af1816c…` ([explorer'da doğrulanabilir](https://testnet.ergoplatform.com/transactions/195f769dc25d36244c271ff8bdc2be65b3f184a0440459fb67116f9b55d1f041)). |
| **Note** | Reserve'ye karşı çıkarılan bir taşıyıcı araç. 0.001 ERG taşır, `+120 blokta` sona erer ve sorunun görev hash'ini R6 register'ında taşır. |
| **Acceptance Predicate** | Note'a gömülü ErgoScript harcama koşulu: blake2b256(task_output) == R6. İtfaiye doğru işi teslim etmeyi saptar. |
| **Tracker** | v0'da isteğe bağlı — Sage'in ücretsiz katmanında buna gerek yoktur çünkü her Note benzersiz bir görev hash'ine bağlanır; çifte itfaiye chain durumu tarafından algılanır. |

Birlikte bunlar ödemeyi işin küçük bir sözleşmesine dönüştürür. Note, bir makbuz eklenmiş bir aktarım değildir — it *is* makbuz, itfaiye kuralı gömülü.

## Bir ödenen sorgunun uçtan uca yaşam döngüsü

```text
1.  Kullanıcı yazıyor: "/code show me a Fleet SDK example"
2.  Widget POST /api/sage/chat → sunucu 402 döndürür gerekçesiyle
3.  Widget POST /api/sage/quote → sunucu SageQuote döndürür:
      receiver_address  3Wz1Lmu…AY28w        (Sage testnet cüzdanı)
      reserve_box_id    4af1816c…628a4d       (chain üzerinde gerçek Reserve)
      task_hash         9674cd…ced33          (kanonikleştirilmiş sorunun blake2b256)
      price             0.001 testnet ERG
      deadline          +120 bloklar
      expires_at        T+10min                (sunucu tarafı teklif tazeliği)
4.  PaymentPanel kopyalama düğmeleri + "nasıl ödenecek" kılavuzu ile teklifi gösterir
5.  Alıcı cüzdanı (Nautilus / bizim bootstrap CLI'si / herhangi uyumlu cüzdan)
    R4=reserve, R5=expiry, R6=task_hash ile bir Note çıkarır
6.  Note tx Ergo testnet üzerinde onaylanır (~2 dakika)
7.  Alıcı note_box_id'yi panele yapıştırır → Doğrula
8.  Sunucu POST /api/sage/verify-payment:
      • rails-ergo verifyPayment chain'den Note'u alır
      • R4 reserve bağlaması, R5 expiry, R6 görev hash, değer ≥ fiyat kontrol eder
      • doğrulanmış
9.  Sunucu HMAC ödeme token'ı + makbuz kimliği + (isteğe bağlı) kapatma tx döndürür
10. Widget sohbeti paymentToken ile devam ettirir
11. /api/sage/chat geçerli token görür → Sonnet 4.6 + daha derin RAG'e yönlendir
12. Premium cevap "PREMIUM · paid" rozeti ile SSE aracılığıyla akışa döner
13. "makbuzu görüntüle →" bağlantısı /r/sage/<box_or_tx_id>'ye işaret eder
14. Makbuz sayfası Schema.org Action işaretlemesi ile sunucu tarafı render edilir
```

On iki ayrı adım. Chain üzerinde iki işlem (Note çıkarma + isteğe bağlı kapatma). Bir LLM çağrısı. Dünyadaki her arama ve AI motoru tarafından dizinlenebilen genel bir makbuz sayfası.

## Kod yüzeyi — gerçekte ne inşa ettik

Bütün şey küçük bir dosya seti içinde uyar. Karmaşıklığın çoğu iki yerde yaşar: rail adaptörü sarmalı (testnet explorer'ın API'sinin tuhaflıkları olduğu için) ve cüzdan soyutlaması (Vercel'e imzalama anahtarı koymadığımız için).

```
src/lib/sage/
├── retrieve.ts                 Doc dizini üzerinde BM25 alımı
├── rate-limit.ts               IP başına kayan pencere
├── payments/
│   ├── agreement.ts            buildSageQuote() + canonicalizeQuestion()
│   ├── gate.ts                 decidePremium() buluşsal yöntemler
│   ├── note-ops.ts             Normalize eden ErgoNoteOps sarmalı
│   │                           v1 explorer'ın nesne formatı register'ları
│   ├── token.ts                HMAC-SHA256 ödeme token'ı, 30 dakika TTL,
│   │                           görev hash'ine bağlı böyle çalıntı
│   │                           token farklı soru açamaz
│   ├── verify.ts               rails-ergo verifyPayment + kapatma
│   ├── wallet.ts               getSageAgent(): ErgoAgentPay singleton,
│   │                           imzalayan = uzak URL veya yerel tohum (veya
│   │                           verify-only modu ne yapılmışsa)
│   └── types.ts                SageQuote, PaymentProof, vb.
└── explorer/
    └── fetch-tx.ts             Testnet explorer alıcısı v1 tuhaflıkları ile

src/app/api/sage/
├── chat/route.ts               SSE akış uç noktası, premium farkında
├── quote/route.ts              POST { soru } → SageQuote | { premium: yanlış }
└── verify-payment/route.ts     POST { teklif, soru, noteBoxId } → token

src/components/sage/
├── SageWidget.tsx              Yüzen sohbet, ödeme akışını yönetir
├── PaymentPanel.tsx            402 → teklif → giriş → doğrula
└── MessageBody.tsx             Minimal markdown işleyicisi

src/app/[locale]/r/sage/[id]/
└── page.tsx                    Genel makbuz, Schema.org Action

scripts/sage-signer/
├── bootstrap.mjs               --reserve, --issue-note, --balance, --env-out
└── signer.mjs                  Standalone HTTP imzalayıcısı, Fleet SDK Prover
```

Toplam Sage kodu: sohbet, ödeme kitaplığı, widget, makbuz sayfası ve bootstrap CLI'si arasında ~2500 satır. Bootstrap CLI, chain üzerinde Reserve'yi oluşturan ve kendi kendini test eden Note'ları çıkarmak için kullandığımız şeydir — aynı zamanda Ergo'da bootstrap CLI'si yazmadan ödenen-MCP hizmetini göndermek isteyen herkes için yararlı bir referanstır.

## Karşılaştığımız üç gerçek sorun

### 1. Testnet explorer'ın `/boxes/{id}` uç noktası harcanan olmayan kutular için sessizce bozuk

Sage'in `verifyPayment` işlemi `ergo-agent-pay.checkNote(boxId)` çağırır. Bu, v1 explorer'ı `/boxes/{box_id}` konumunda çarpar. HARCANMıŞ çıktılar için çalışır. HARCANAN OLMAYAN kutular için — aslında önemli olan durum, çünkü yeni çıkarılan bir Note doğruluyoruz henüz itfaiye edilmemiş — 404 döner. Aynı kutu `/boxes/unspent/byAddress/{addr}` içinde mükemmel şekilde görünür.

Makbuz sayfası aynı duvara çarptı.

`fetch-tx.ts` içinde bir geri dönüş ile çalışıyoruz: tek başına arama kaçırırsa, cüzdan'ın harcanan olmayan listesini tara ve eşleşmeyi bul. Çirkin. v1 uç noktasından tamamen çıkana veya hstream upstream onarım dosyasına kadar doğru hamle.

### 2. v1 explorer register'ları hex stringler olarak değil nesneler olarak döndürür

`ergo-agent-pay@0.3.0` `additionalRegisters` öğesini `Record<string, string>` olarak yazıyor ve sigma türü önekini kaldırmak için `regs.R5.slice(2)` çağırıyor. v1 testnet explorer aslında her register'ı `{ serializedValue, sigmaType, renderedValue }` olarak döndürür. `.slice()` çağrısı `e.slice is not a function` ile ölür ve çevreleyen rails-ergo `verifyPayment` hatayı `NOTE_NOT_FOUND` olarak eşler.

`note-ops.ts` içinde acenteyi `network.getBox` öğesini ele alan bir Proxy ile sarıyoruz ve herhangi bir nesne şeklindeki register'ları `serializedValue` hex stringine düzleştir. Bırak-in `ErgoNoteOps` değiştirme. ~30 satır ithalatlar dahil. `ergo-agent-pay@0.4` her iki şekli upstream kabul ettiğinde, sarmalı gider.

### 3. Rail'e yanlış `task_output` gönderiyorduk

Bu bir öğleden sonra mal oldu. rails-ergo'nun `verifyPayment` işlemi `blake2b256(task_output)` hesapla ve Note'un R6 ile karşılaştır. Note, `R6 = blake2b256(canonicalize(soru))` ile çıkarıldı. Yani `task_output` `canonicalize(soru)` öğesine eşit olmalı — hash'i R6 ile eşleşen ham bayt.

Bunun yerine `hashQuestionForToken(soru)` göndermişiz — token bağlama için başka yerde kullanılan tamamen farklı bir HMAC hash. Sonuç: her ödenen dönüşte `TASK_HASH_MISMATCH`.

Düzeltme `verify-payment/route.ts` içinde bir satırıdır. Ders, yanında bıraktığımız yorumdur: iki katman da hashing içerdiğinde, değişkenleri protokoldeki adları değil, ne hash'ledikleri için adlandır.

## "Verify-only modu" ne anlama geliyor ve neden bunu gönderdik

Sage şu anda **verify-only modunda** çalışıyor: `verifyPayment` adımı her ödenen dönüşte çalışır (salt okunur — imza gerekli değil), ancak ikinci chain üzerinde işlem (Note'u itfa eden ve 0.001 ERG'yi Sage'in cüzdanına taşıyan) **ertelenmiş**.

Bu kasıtlı, hata değil. İki neden:

1. **İmzalama anahtarı Vercel dışında yaşıyor.** Satıcı cüzdanının özel anahtarını sunucusuz ortam değişkenine koymak kötü operasyonel hijyenidir. `ANTHROPIC_API_KEY` uzlaştırılması cüzdanı boşaltmamalıdır. Böylece itfaiye imzalama, işletçinin kendi makinelerinde çalıştırdıkları ve `cloudflared tunnel` aracılığıyla açığa çıkardıkları yerel bir HTTP imzalayıcısı (`scripts/sage-signer/signer.mjs`) aracılığıyla gerçekleşir. Sage, işaretlenmemiş tx'leri buna POSTA'lar; imzalayan, imzalamadan önce per-tx harcama kapağı + alıcı beyaz listesine karşı doğrula.
2. **Note süresi dolduğunda otomatik geri ödenir.** Sage Note'u, `+120 bloklar` son tarihinden önce itfa etmezse, Note'un harcama koşulu fonları alıcının reserve'sine geri döndürür. Yani ertelenmiş bir itfaiye parayı kapsamaz — en kötü durum bu ücretsiz premium cevaptır, testnet kalkış aşamasında sorun değil.

Verify-only modundaki makbuzlar sarı `verified · pending redemption` rozeti gösterir. Imzalayan teli takılı olduğunda ve sonraki ödenen sorgu geldiğinde, hem o dönüş hem de herhangi bir itfa edilmemiş geçmiş Noteler otomatik olarak yeşil `settled` görünüme çevirler — sayfa chain durumu değiştiğinde kendini yükseltir.

Twitter duyurusu "doğrulanmış, bu çalışmada kapatma bekleniyor" dürüstçe söyleyecek. İmzalayan teli bir akşam işi; aşırı bildirme istemiyor.

## Sırada ne var

- **Settler çevrimiçi.** Tüneli açık hale getir, Vercel üzerinde `SAGE_SIGNER_URL` ayarla, sonraki ödenen Note'u beklemede gerçek chain üzerinde itfaiye tx'i ile yeşile çevir.
- **Accord uyumluluğu.** `@accord-protocol/conformance --target https://www.ergoblockchain.org/api/sage/quote` çalıştır, sonucu bir ed25519 anahtarı ile imzala, imzalı artefaktı yayımla, Sage'in [registry giriş](https://github.com/accord-protocol/accord-protocol/blob/main/registry/providers/sage.json)ını uyumluluk hash'i ile güncelle. Sage genel Accord registry'sinde ilk L4 sertifikalı sağlayıcısı haline gelir.
- **Agent registry sitede gösterildi.** `/ergo-watch/agents` Accord registry'sini alır ve her listelenmiş sağlayıcıyı kabiliyetleri, raileri ve son makbuzları ile gösterir. Sage'in profil sayfası birçok arasından biri haline gelir.
- **Ana sayfa üzerinde canlı acenta aktivitesi şeridi.** Registry genelinde en son ödenen makbuzlar, ağ istatistikleri altında kaydırılıyor. Site "acenta ekonomisini tanımlarız" konumundan "şimdi ne yaptığını burada" konumuna gider.
- **Çoklu kiracı Sage.** Widget'ı bağımsız `@accord/sage-widget` npm paketine çıkar. Herhangi bir doc sitesi `<script src="…/sage.js" data-rag="…" data-receiver="9f…">` bırakabilir ve kendi ödenen kapıcısına sahip olabilir, kendi Ergo cüzdanı ile. Dağıtım çarpanı — her embed yeni bir Ergo alıcı adresidir yeni alan adında.

## Dene

[Ergoblockchain.org'u aç](https://www.ergoblockchain.org). Sağ alt, turuncu **Ask Sage** düğmesi. Ücretsiz sorular ücretsiz kalır. `/code` sorun veya herhangi bir önemli şey — ödeme paneli sizi testnet Note çıkarmada yönlendir. Testnet cüzdanı kullan ([Nautilus](https://github.com/capt-nemo429/nautilus-wallet) standarttır, veya repo klonundan `node scripts/sage-signer/bootstrap.mjs --issue-note` çalıştır) ve `0.001` testnet ERG ([faucet](https://testnet.ergoplatform.com/faucet) ~1 ERG istek başına verir).

Kaynak: [ergoblockchain.org repo](https://github.com/ergoplatform) yukarıda tanımlanan her şeyi gönderi. Sage'in kullandığı Accord deseni [`examples/16-paid-mcp-ergo-testnet`](https://github.com/accord-protocol/accord-protocol/tree/main/examples/16-paid-mcp-ergo-testnet) konumundaki kanonik alıcı/satıcı yöntemi.

Manifesto ve çalışan acenta şimdi aynı şey. O bütün nokta.

## SSS

### Neden testnet ve mainnet değil?

İki neden. İlk olarak, itfaiye sözleşmesi Sage'in satıcı cüzdanını denetim olmadan harcama koşulu olarak kullanır. Mainnet yazıları denetlenmemiş ErgoScript'e karşı asla olmamalı — `ergo-agent-pay` içindeki üretim güvenliği kapıları aktif olarak bunları engeller. İkinci olarak, tüm Accord yığını v0.4'tedir ve uyumluluk manifestoları hala `draft-pre-audit` konumundadır. Mainnet yol haritasında; bugünün kanıtı testnet.

### Bu x402 veya Stripe Agentic Commerce'dan farkı nedir?

x402 ödeme gerekli protokolüdür — "402 mücadelesi" deseni aynıdır. Fark rail'dir. x402 tipik olarak bir kart / Stripe ödemesini sarar ve zinciri bir raporlama katmanı olarak ele alır. Accord, iş kabul kuralını harcama koşulunun içine koyar: Note, satıcı gerçekte görev hash'iyle eşleşen işi teslim etmedikçe itfa edilemez. Stripe Agentic Commerce, alıcı tarafı aynalanmıştır — kart tutan acenteler. İnsan tarafından yetkilendirilen satınalmalar için yararlı. Acenta-acenta kapatmadan farklı katman.

### Signer olmadan çalışır mı?

Evet. Yukarıda tanımlanan verify-only modu. Premium cevap her başarılı doğrulama üzerinde akar; yalnızca ikinci chain üzerinde işlem (Sage'in itfaiyesi) ertelenir. Makbuzlar imzalayan çevrimiçi olana kadar "kapatma bekleniyor" gösterir.

### Kendi Sage'imi çalıştırabilir miyim?

Yakında, uygun şekilde — bu "What's next" bölümündeki çoklu kiracı işidir. Bugün, repo'yu klonlayabilir, kendi cüzdanınızı `scripts/sage-signer/bootstrap.mjs` aracılığıyla yapılandırabilir ve kendi deploy'unuzdan bir Sage örneğini çalıştırabilirsiniz. Belgeleme [`docs/sage-provisioning.md`](https://github.com/ergoplatform) konumundadır.

### Anthropic API maliyetleri nereye gidiyor?

Anthropic API anahtarı Vercel env'dedir. Ücretsiz katman trafiği için ödeme yapıyoruz. Premium dönüşler LLM maliyetini Note aracılığıyla kurtarır (0.001 ERG ≈ $0.0007 testnet "oranlarında" eğer onları gerçek olarak hayal ederseniz). Mainnet fiyatlandırmasının ekonomisi açık — v0 gemi bir kanıt noktasıdır, marj modeli değil.