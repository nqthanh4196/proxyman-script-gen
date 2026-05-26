# Proxyman Script Generator

Generate Proxyman mock response scripts from JSON.

## Setup

```bash
cd proxyman-script-gen-app
npm install
```

## Commands

```bash
# Run app
proxyman --open

# Or use npm
npm start
```

## Usage

1. Copy the API response JSON you want to mock
2. Paste into the input field on the left
3. Click **Generate** to create the script
4. Click **Copy Script** to copy to clipboard
5. Paste into Proxyman (Menu > Scripts > Add Script)

## Example

Input JSON:
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

Output script:
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

## Requirements

- Node.js >= 18
- Electron (installed via npm)

---

# Proxyman Script Generator

Tool tạo Proxyman mock response script từ JSON.

## Cài đặt

```bash
cd proxyman-script-gen-app
npm install
```

## Bang lệnh

```bash
# Chạy app
proxyman --open

# Hoặc dùng npm
npm start
```

## Cách sử dụng

1. Copy JSON response cần mock
2. Paste vào ô nhập liệu bên trái
3. Bấm **Generate** để tạo script
4. Bấm **Copy Script** để copy sang clipboard
5. Paste vào Proxyman (Menu > Scripts > Add Script)

## Ví dụ

JSON đầu vào:
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

Script đầu ra:
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

## Yêu cầu

- Node.js >= 18
- Electron (đã được cài qua npm)
