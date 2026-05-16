---
title: "Mimari Öğretici: Ergo Testnet'te API Çağrıları için Ödeme Yapan AI Ajanı Oluşturun"
slug: "/blog/build-agent-pays-for-api"
seo_title: "Mimari Öğretici: Ergo Testnet'te API Çağrıları için Ödeme Yapan AI Ajanı"
meta_description: "Ergo testnet'te ödenen API uç noktası ve AI ajan ödeme döngüsü için mimari öğretici: HTTP 402 challenge, zincir üstü ödeme doğrulaması, tekrar oynatma koruması ve güvenlik kontrol listesi."
excerpt: "Bir AI ajanın yalnızca doğrulanabilir bir Ergo ödeme makbuzu sunmasından sonra arayabileceği ödenen API uç noktası için mimari öğretici. Mock modu ve testnet modu imza notlarını içerir."
author: "Ergo Developer Relations"
date_published: "2026-03-26"
date_modified: "2026-05-08"
status: "Mimari öğretici. Mock modu tamamen çalışabilir uçtan uca (402 challenge, ajan istemcisi ve Express sunucusu hepsi çalışır). Testnet modu bir cüzdan (Nautilus veya sigma-rust) ve verifyErgoPayment() içinde gerçek bir explorer/API araması gerektirir. Bu bir mainnet saklama rehberi değildir ve üretim güvenliği planı değildir — denetlenmemiş kodu veya örnek saklama akışlarını gerçek fonlarla dağıtmayın."
tags: ["Ergo", "AI agent payments", "API monetization", "x402", "developer tutorial", "testnet"]
target_keywords: ["build AI agent payments", "paid API with Ergo", "AI agent pays API calls", "HTTP 402 payments", "Ergo testnet tutorial"]
---

# Mimari Öğretici: Ergo Testnet'te API Çağrıları için Ödeme Yapan AI Ajanı Oluşturun

**Mayıs 2026 itibariyle durum:** bu bir **mimari öğretici**dir, kopyala-yapıştır üretim betiği değildir. İki modda gemi halinde verilir:

- **Mock modu** — `verifyErgoPayment()` bir cüzdan olmadan Express sunucusu, 402 challenge ve ajan istemcisinin hepsi uçtan uca çalışması için kütüphaneleme yapılmış bir makbu döndürür. Akışın şeklini öğrenmek için bunu kullanın.
- **Testnet modu** — `verifyErgoPayment()` gerçek bir explorer/API aramasına bağlayın ve işlemi Nautilus veya sigma-rust aracılığıyla imzalayın. Öğretici nelerin değiştiğini açıklar.

Bu bir mainnet saklama rehberi değildir, üretim güvenliği planı değildir ve denetlenmemiş sözleşmeleri gerçek fonlarla dağıtmaya yönelik bir tavsiye değildir.

Ödenen bir API çağrısı basit görünüyor. Ajan veri ister, sunucu küçük bir ücret talep eder, ajan öder ve sunucu sonucu döndürür.

Uygulamada, çoğu API hala insan operatörüne faturalandırır. Bir geliştirici bir hesap oluşturur, kredi kartı ekler, bir API anahtarı alır ve bir faturayı öder. Bu SaaS için işe yarar. Otonom ajanlar için makine hızında başlayan, araçları çağıran, alt görevleri devredilen ve maliyetleri yapan ajanlar için iyi çalışmaz.

Bu öğretici minimal testnet modelini gösterir:

1. Sunucu ödenen bir uç noktayı ortaya koymaktadır.
2. Ajan uç noktayı ister.
3. Sunucu makine tarafından okunabilir bir ödeme gereksinimini döndürür.
4. Ajan bir Ergo testnet ödeme oluşturur veya gönderir.
5. Sunucu ödemeyi zincir üstünde doğrular.
6. Sunucu ödenen sonucu döndürür.

Bu ruh olarak HTTP 402 stilindeki ödeme akışlarına benzer, ancak uygulamayı basit ve Ergo özel tutalım.

## Neleri oluşturacaksınız

İki küçük parça oluşturacaksınız:

- **Ödenen bir Express API'si** `/price`, `/verify` ve `/data` uç noktaları ile.
- **Testnet ajan istemcisi** ödenen bir kaynağı isteyen, bunun için ödeyen, makbu gönderen ve sonucu alan.

Ödeme adımını iki modda uygulayabilirsiniz:

### Başlangıç modu: manuel imzalama

Ajan bir ödeme işlemi oluşturur veya ister, bunu testnet cüzdanınızla imzalarsınız ve sunucu gönderilen işlem kimliğini doğrular. Bu akışı anlamanın en güvenli yoludur.

### Başsız modu: harici imzacı

Kontrol edilen bir imzacı hizmeti veya cüzdan modülü katı ilke sınırları altında testnet işlemlerini otomatik olarak imzalar. Bu, gerçek ajanların nasıl çalışacağına daha yakındır, ancak anahtar yönetimi riskini ortaya çıkarır.

Bu makale mimari ve doğrulama üzerine odaklanır. Kesin SDK adları ve API'ler Accord ve Ergo referans reyine evrimleştiğinde değişebilir, bu nedenle kodu bir projeye kopyalamadan önce her zaman güncel repo'yu kontrol edin.

## Ön Koşullar

İhtiyacınız olan:

- Node.js 20 veya daha yenisi.
- Temel TypeScript veya JavaScript deneyimi.
- Ergo testnet adresi.
- Testnet musluğundan az miktarda testnet ERG.
- Ergo testnet explorer/API uç noktası.
- Ödeme politikası: fiyat, alıcı adresi, son kullanma tarihi ve tekrar oynatma kuralları.

İsteğe bağlı:

- Örnekler için Accord Protocol repo'su.
- İşlem oluşturma için Fleet SDK veya Ergo SDK.
- Nautilus testnet modu veya uyumlu başka bir imzacı gibi testnet cüzdanı.

## Mimari

Sağlam bir ödenen API sadece "bu cüzdan bana para göndermedi mi?" Diye sormamalı. Ödemeyi belirli bir isteğe bağlamalı.

En basit bağlama bir `callId`'dir:

```text
client -> GET /data?query=weather
server -> 402 Payment Required
server -> { callId, price, receiver, expiresAt, memoHash }
client -> sends payment with callId commitment
client -> POST /verify { callId, txId }
server -> checks tx output, amount, receiver, callId, expiry, replay
server -> marks callId as paid
client -> GET /data?callId=...
server -> returns result
```

`callId` olmadan, tek bir ödeme birden fazla API çağrısına karşı tekrar oynatılabilir. Son kullanma tarihi olmadan, eski ödeme gereksinimleri sonsuza kadar geçerli kalır. Alıcı ve tutar kontrolleri olmadan, ajan ilgisiz bir işlem gönderebilir. Onay politikası olmadan, sunucu ödenen veri tarafından sunucuya gönderilmeden önce hizmet verebilir.

## Adım 1: projeyi oluşturun

```bash
mkdir ergo-paid-api-demo
cd ergo-paid-api-demo
npm init -y
npm install express zod nanoid
npm install --save-dev typescript tsx @types/node @types/express
```

Minimal bir `tsconfig.json` oluşturun:

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "ESNext",
    "moduleResolution": "Bundler",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true
  }
}
```

## Adım 2: ödeme gereksinimini tanımlayın

`src/policy.ts` oluşturun:

```ts
export const PAYMENT_POLICY = {
  network: "ergo-testnet",
  receiverAddress: process.env.ERGO_RECEIVER_ADDRESS || "PUT_TESTNET_ADDRESS_HERE",
  priceNanoErg: 1_000_000n, // 0.001 ERG for demo only
  expiryMs: 10 * 60 * 1000,
  minConfirmations: 1
};
```

Üretimde, adresler veya fiyatları asla kod içinde sabitlemeyin. Bunları imzalı bir politika dosyasından veya yapılandırma hizmetinden yükleyin.

## Adım 3: ödenen API sunucusunu oluşturun

`src/server.ts` oluşturun:

```ts
import express from "express";
import { nanoid } from "nanoid";
import { z } from "zod";
import { PAYMENT_POLICY } from "./policy";

const app = express();
app.use(express.json());

type PaymentRequest = {
  callId: string;
  query: string;
  priceNanoErg: string;
  receiverAddress: string;
  expiresAt: number;
  paid: boolean;
  txId?: string;
};

const requests = new Map<string, PaymentRequest>();

app.get("/price", (req, res) => {
  const query = String(req.query.query || "demo");
  const callId = nanoid();
  const expiresAt = Date.now() + PAYMENT_POLICY.expiryMs;

  const paymentRequest: PaymentRequest = {
    callId,
    query,
    priceNanoErg: PAYMENT_POLICY.priceNanoErg.toString(),
    receiverAddress: PAYMENT_POLICY.receiverAddress,
    expiresAt,
    paid: false
  };

  requests.set(callId, paymentRequest);

  res.status(402).json({
    error: "PAYMENT_REQUIRED",
    callId,
    network: PAYMENT_POLICY.network,
    priceNanoErg: paymentRequest.priceNanoErg,
    receiverAddress: paymentRequest.receiverAddress,
    expiresAt,
    instructions: "Send an Ergo testnet payment that commits to this callId, then POST { callId, txId } to /verify."
  });
});

const VerifyBody = z.object({
  callId: z.string(),
  txId: z.string().min(20)
});

app.post("/verify", async (req, res) => {
  const body = VerifyBody.parse(req.body);
  const paymentRequest = requests.get(body.callId);

  if (!paymentRequest) {
    return res.status(404).json({ error: "UNKNOWN_CALL_ID" });
  }

  if (Date.now() > paymentRequest.expiresAt) {
    return res.status(400).json({ error: "PAYMENT_REQUEST_EXPIRED" });
  }

  if (paymentRequest.paid) {
    return res.json({ ok: true, alreadyPaid: true });
  }

  const verified = await verifyErgoPayment({
    txId: body.txId,
    callId: body.callId,
    receiverAddress: paymentRequest.receiverAddress,
    minAmountNanoErg: BigInt(paymentRequest.priceNanoErg)
  });

  if (!verified.ok) {
    return res.status(400).json({ error: "PAYMENT_NOT_VERIFIED", reason: verified.reason });
  }

  paymentRequest.paid = true;
  paymentRequest.txId = body.txId;
  requests.set(body.callId, paymentRequest);

  return res.json({ ok: true, callId: body.callId, txId: body.txId });
});

app.get("/data", (req, res) => {
  const callId = String(req.query.callId || "");
  const paymentRequest = requests.get(callId);

  if (!paymentRequest || !paymentRequest.paid) {
    return res.status(402).json({ error: "PAYMENT_REQUIRED", callId });
  }

  return res.json({
    callId,
    query: paymentRequest.query,
    answer: `Paid testnet response for query: ${paymentRequest.query}`,
    paidByTx: paymentRequest.txId
  });
});

async function verifyErgoPayment(input: {
  txId: string;
  callId: string;
  receiverAddress: string;
  minAmountNanoErg: bigint;
}): Promise<{ ok: boolean; reason?: string }> {
  // Replace this stub with a real Ergo testnet explorer/API lookup.
  // Verification must check:
  // 1. transaction exists;
  // 2. transaction is on the expected network;
  // 3. output pays receiverAddress;
  // 4. output value >= minAmountNanoErg;
  // 5. callId is committed in a register, token name, memo convention, or agreed receipt;
  // 6. transaction has enough confirmations for your policy;
  // 7. txId has not been used for another callId.
  return { ok: false, reason: "verification stub not implemented" };
}

app.listen(3000, () => {
  console.log("Paid API listening on http://localhost:3000");
});
```

Bu, gerçek bir Ergo testnet araması bağlanana kadar ödemeyi ısmarlı olarak başarısız olur. Bu, bir ödemenin doğrulandığını sessizce taklit etmekten daha iyidir.

## Adım 4: gerçek doğrulamayı uygulayın

Üretim kalitesinde bir doğrulayıcı işlemi incelemeye ihtiyaç duyar. Bir öğretici için testnet explorer API'sini kullanabilirsiniz. Çekirdek mantık:

```ts
async function verifyErgoPayment(input: {
  txId: string;
  callId: string;
  receiverAddress: string;
  minAmountNanoErg: bigint;
}) {
  const tx = await fetchTestnetTransaction(input.txId);
  if (!tx) return { ok: false, reason: "tx not found" };

  const paidOutput = tx.outputs.find((out: any) =>
    out.address === input.receiverAddress &&
    BigInt(out.value) >= input.minAmountNanoErg
  );

  if (!paidOutput) return { ok: false, reason: "required output not found" };

  const commitsToCall = outputCommitsToCallId(paidOutput, input.callId);
  if (!commitsToCall) return { ok: false, reason: "callId commitment missing" };

  return { ok: true };
}
```

Taahhüt yöntemi bir tasarım seçimidir. Basit bir demo için, `callId` kararlaştırılmış bir kayıtta veya makbu nesnesinde kodlayabilirsiniz. Daha ciddi bir Ergo Note akışı için, Not'ın kendisi görevle ilgili verileri ve itfa kurallarını kodlamalıdır.

## Adım 5: ajan istemcisini yazın

`src/agent.ts` oluşturun:

```ts
async function main() {
  const query = "weather in Lisbon";

  const priceResponse = await fetch(`http://localhost:3000/price?query=${encodeURIComponent(query)}`);
  const paymentRequirement = await priceResponse.json();

  console.log("Payment required:", paymentRequirement);

  // Beginner mode: build or manually create a testnet payment using your wallet.
  // The payment must satisfy receiver, amount and callId commitment.
  const txId = await getSignedTestnetPaymentTxId(paymentRequirement);

  const verifyResponse = await fetch("http://localhost:3000/verify", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ callId: paymentRequirement.callId, txId })
  });

  const verifyResult = await verifyResponse.json();
  console.log("Verification:", verifyResult);

  if (!verifyResult.ok) throw new Error("Payment failed verification");

  const dataResponse = await fetch(`http://localhost:3000/data?callId=${paymentRequirement.callId}`);
  const data = await dataResponse.json();
  console.log("Paid result:", data);
}

async function getSignedTestnetPaymentTxId(requirement: any): Promise<string> {
  console.log("Create a testnet payment with these terms:");
  console.log(requirement);
  console.log("After signing/submitting, paste the txId into this demo.");

  // Replace with CLI prompt, wallet integration, or external signer.
  throw new Error("manual txId input not implemented in this snippet");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
```

Ana öğretici iyileştirmesi dürüstlüktür: imzalama ve doğrulama uygulanana kadar, örnek tamamen uçtan uca olduğunu iddia etmemelidir. Eksiksiz bir demo bir işlem üretmelidir, göndermeli, doğrulamalı ve uç noktanın kilidini açmalıdır.

## Adım 6: bunu HTTP 402 ve x402 stilindeki akışlara eşleyin

Demo açıklık için `/price` kullanır, ancak web tarafından yerel sürüm doğrudan 402 yanıtıdır:

```http
GET /data?query=weather

HTTP/1.1 402 Payment Required
Content-Type: application/json

{
  "network": "ergo-testnet",
  "priceNanoErg": "1000000",
  "receiverAddress": "...",
  "callId": "...",
  "expiresAt": 1770000000000,
  "verification": "ergo-output-with-callid"
}
```

Gelecekteki Accord/402 sürümü şunları içerebilir:

- sözleşme kimliği;
- raya adaptörü;
- varlık;
- fiyat;
- doğrulayıcı;
- geri ödeme politikası;
- kabul yüklemi;
- anlaşma makbuzu biçimi.

Ödeme, doğrulama başarısından sonra erişimi açması gerekir.

## Güvenlik kontrol listesi

Bu deseni localhost'un ötesine taşımadan önce aşağıdakileri ele alın.

### Tekrar oynatma koruması

Bir işlem kimliği, bu davranış açık olmadığı sürece ikiden fazla çağrıyı açmamalı. Kullanılan txId'leri ve callId'leri saklayın.

### Son kullanma tarihi

Ödeme gereksinimleri sona ermelidir. Aksi takdirde, eski bir teklif fiyat, politika veya alıcı değişikliğinden sonra kullanılabilir.

### Onay Politikası

Sıfır onaylı erişim risklidir. Değer, gecikme ve risk toleransına bağlı olarak kaç tane onayın gerektiğine karar verin.

### Anahtar Saklama

Özel anahtarları ajan talimatlarına, kaynak koduna veya tarayıcıya maruz kalan değişkenlere koymayın. Bir cüzdan, donanım destekli imzacı, KMS, yerel ilke ajanı veya adanmış bir imzalama hizmeti kullanın.

### Harcama Limitleri

Otonom bir ajanın günlük, çağrı başına ve muhatap başına harcama limitleri olmalı. Bir hata bir cüzdanı boşaltmamalı.

### Geri ödemeler ve başarısız çalışma

API ödeme sonrasında başarısız olursa, ne olacağını tanımlayın. Yeniden dene? Geri ödeme? Kredi Notu? El ile destek? Ajanlar belirleyici politikalara ihtiyaç duyar.

### Doğrulama Günlükleri

Ödeme gereksinimini, işlem kimliğini, doğrulama sonucunu ve yanıtı günlüğe kaydedin. Gelecekteki bir Accord makbuzu bunu taşınabilir hale getirebilir.

## Sorun Giderme

### "Sunucu ödemenin bulunamadığını söylüyor"

İşlemin testnet'te olduğunu kontrol edin, mainnet'te değil. Ardından explorer/API'nin onu görebildiğini ve doğrulayıcınızın doğru ağı kontrol ettiğini doğrulayın.

### "Tx doğru adresi ödedi ancak yine de başarısız oldu"

callId taahhüdü eksik olabilir veya doğrulayıcının beklediğinden farklı şekilde kodlanmış olabilir. Ödeme belirli isteğe bağlanmalı.

### "Ajan iki kez ödedi"

Etkisizlik ekleyin. Ajan, zaman aşımından sonra ikinci tanesini oluşturmak yerine aynı callId için mevcut bir beklemede ödemeyi yeniden kullanmalı.

### "Ödeme isteğin süresi dolduktan sonra onaylandı"

Geç ödemelerin geri ödeneceğine, reddedileceğine veya krediye alınacağına karar verin. Geç ödemeleri belirsiz bırakmayın.

### "Zincir üstü doğrulamayı atla yapabilir miyim?"

Oyuncak demoları için evet. Gerçek ödeme akışları için hayır. Bütün nokta sunucunun istemciye güvenmek yerine ödemeyi veya anlaşmayı bağımsız olarak doğrulayabilmesidir.

## Notlar bu tasarımı nasıl geliştir

Kütüphaneleme ERG ödeme merhaba-dünya demoları için yararlıdır. Notlar, ajan programlanabilir bütçeye ihtiyaç duyduğunda faydalı olur.

Bir ana ajan bir alt ajanı Nota şu ile düzenleyebilir:

- maksimum değer;
- son kullanma tarihi;
- izin verilen hizmet kategorisi;
- görev karması;
- itfa yüklemi;
- Rezerv referansı.

Ödenen API, Not geçerli ise ve API'nin politikası altında itfa edilebilir ise Notu kabul edebilir. Bu model "ajanın madeni para harcaması" yerine "ajanın sınırlı, denetlenebilir, programlanabilir kredi harcaması"na kayar.

## SSS

### AI ajanı gerçekten Ergo'da bir API çağrısı için ödeme yapabilir mi?

Testnet'te evet, geliştirici tarafından kontrol edilen bir cüzdan veya imzacı kullanarak. Ajan ödeme koşullarını talep edebilir, bir işlem gönderebilir ve doğrulama için bir işlem kimliği veya makbu sağlayabilir. Üretim sorunu ödemenin kendisi değildir; anahtar yönetim, harcama politikası, tekrar oynatma koruması, geri ödemeler ve denetim hazırlığıdır.

### Bu x402 ile aynı mı?

Kullanıcı akışında benzer, ancak aynı değil. x402, HTTP ödeme zorlukları ve ödeme doğrulamasını standartlaştırır. Bu demo Ergo'ya özel bir deseni gösterir. Gelecekteki bir Accord/402 akışı x402 stilindeki keşfi Accord iş makbuzları ve Ergo anlaşması ile birleştirebilir.

### Ödenen API için Notes'a ihtiyacım var mı?

Hayır. Basit testnet API'si kütüphaneleme ERG ödemelerini kullanabilir. Notlar, süresi dolan bütçelere, koşullu itfaya, toplu anlaşmaya veya alt ajan kredisine ihtiyaç duyduğunda değerli olur.

### Bunu mainnet'te çalıştır yapabilir miyim?

Yalnızca öğretici kodu denetlenen sözleşmelerle, gerçek doğrulamayı, güvenli saklama, net kullanıcı açıklama ve muhafazakar sınırlarla değiştirdikten sonra. Geçerli referans SDK'ları ve sözleşmeleri testnet öncü olarak ele alınmalıdır.

### Minimum canlı üretim mimarisi nedir?

Gerçek dağıtım harici bir imzacı veya cüzdan politikası motoru, kalıcı depolama, işlem doğrulama, etkisizlik, tekrar oynatma koruması, günlüğe kaydetme, geri ödeme işleme, izleme ve belgelenmiş güvenlik incelemesi gerektirir.

## Makale JSON-LD taslağı

```json
{
  "@context": "https://schema.org",
  "@type": "TechArticle",
  "headline": "Build an AI Agent That Pays for API Calls on Ergo Testnet",
  "description": "Step-by-step tutorial for building a paid API with an AI agent wallet, Ergo testnet payment, on-chain verification, replay protection and an HTTP 402-style flow.",
  "datePublished": "2026-03-26",
  "dateModified": "2026-05-08",
  "author": { "@type": "Organization", "name": "Ergo Developer Relations" },
  "publisher": { "@type": "Organization", "name": "Ergo Platform" },
  "mainEntityOfPage": "https://www.ergoblockchain.org/blog/build-agent-pays-for-api",
  "keywords": ["Ergo testnet", "AI agent payments", "paid API", "HTTP 402", "x402", "Accord Protocol"]
}
```

## Kaynak Notları

- Orijinal makale: https://www.ergoblockchain.org/blog/build-agent-pays-for-api
- Accord Protocol repo: https://github.com/accord-protocol/accord-protocol
- x402 belgeleri: https://docs.cdp.coinbase.com/x402/welcome
- Fleet SDK docs: https://fleet-sdk.github.io/docs