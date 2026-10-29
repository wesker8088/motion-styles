/* motion-video-styles license unlock — hashes only; plaintext codes are NOT here */
(function (global) {
  const HASHES = ['11e2dc6cc90f78dd0c9e546add053a7457721a3c88a49c2059fc3e46bbb59e20', '05216a2e6b0cc80a6d8ecb3e7add59d8a0a6fc88ea64c8b0119d38fce9745b4d', 'dae3e605e6450ac6ea9677d05e8980e6a063ddeac6094e75e0e4a087b6eaba06', 'b76c5eb363cd5f3e6070fe3016357d51809f4adb701b3f108ca3c29d74a3c504', '117fb905b75049b6151ecef2bb8d9bfcefcccfbdc7dd2ba8f100010fde3f6bee', '1598ed7112e98194481b6a47661b28b72bbc5105a370c4586485d19323b12518', 'd63f14efe18c470d046dc6139fdab73471d0b8de041163b665e4185b026cf702', '869211920b8809011cfb0a0584ad7747803baa7fe63ed5e5e72a8748aab58386'];
  const PATH_SEG = 'c983007b';
  const BASE = "downloads/full/";
  const FILE_PREFIX = "mvs-full-v0.1.0-";
  const FILE_SUFFIX = ".zip";
  const VERSION = "v0.1.0-full";

  async function sha256Hex(text) {
    const data = new TextEncoder().encode(text.trim().toUpperCase());
    const buf = await crypto.subtle.digest("SHA-256", data);
    return Array.from(new Uint8Array(buf)).map(b => b.toString(16).padStart(2, "0")).join("");
  }

  function normalizeCode(raw) {
    return String(raw || "").trim().toUpperCase().replace(/\s+/g, "");
  }

  async function unlock(rawCode) {
    const code = normalizeCode(rawCode);
    if (!code) return { ok: false, error: "请先粘贴兑换码。" };
    if (!/^BT-[A-Z0-9]{4}-[A-Z0-9]{4}-[A-Z0-9]{4}$/.test(code)) {
      return { ok: false, error: "兑换码格式不对。应为 BT-XXXX-XXXX-XXXX（字母数字）。" };
    }
    const hex = await sha256Hex(code);
    if (!HASHES.includes(hex)) {
      return { ok: false, error: "兑换码无效或已停用。请核对后再试；不要在评论区追问网盘。" };
    }
    const url = BASE + FILE_PREFIX + PATH_SEG + FILE_SUFFIX;
    return { ok: true, url, version: VERSION };
  }

  global.MVSLicense = { unlock, VERSION, PATH_SEG };
})(typeof window !== "undefined" ? window : globalThis);
