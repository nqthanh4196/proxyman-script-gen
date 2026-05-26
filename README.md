# Proxyman Script Generator

Tool tao Proxyman mock script tu JSON response.

## Bang lenh

```bash
# Chay app
proxyman --open

# Hoac su dung npm
cd proxyman-script-gen-app
npm start
```

## Cach su dung

1. Copy JSON response can mock
2. Paste vao o nhap lieu ben trai
3. Bam **Generate** de tao script
4. Bam **Copy Script** de copy sang clipboard
5. Paste vao Proxyman (Menu > Scripts > Add Script)

## Vi du

JSON dau vao:
```json
{
  "message": "",
  "status": 200,
  "data": [
    {
      "voucher_id": 1,
      "gift_code": "ABC123"
    }
  ]
}
```

Script dau ra:
```javascript
console.log("🔥 SCRIPT LOADED");

sharedState.savedResponse = null;

async function onRequest(context, url, request) {
  // ...
}

async function onResponse(context, url, request, response) {
  const MOCK_RESPONSE = { ... };
  response.body = MOCK_RESPONSE;
  return response;
}
```

## Yeu cau

- Node.js >= 18
- Electron (da duoc install qua npm)
