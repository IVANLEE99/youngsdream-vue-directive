import crypto from "crypto";

const SECRET_KEY = "YOUR_SECRET_KEY"; // 企业私钥

// 生成 License（发给付费用户）
export function generateLicense(userId: string, expire?: Date): string {
  const payload = JSON.stringify({
    userId,
    expire: expire?.getTime() || null,
  });
  const cipher = crypto.createHmac("sha256", SECRET_KEY);
  cipher.update(payload);
  return `${Buffer.from(payload).toString("base64")}.${cipher.digest("hex")}`;
}

// 校验 License
export function validateLicense(license: string): boolean {
  try {
    const [payloadB64, signature] = license.split(".");
    const payload = Buffer.from(payloadB64, "base64").toString("utf8");
    const cipher = crypto.createHmac("sha256", SECRET_KEY);
    cipher.update(payload);
    const expected = cipher.digest("hex");
    if (signature !== expected) return false;

    const { expire } = JSON.parse(payload);
    if (expire && Date.now() > expire) return false;

    return true;
  } catch (e) {
    return false;
  }
}
