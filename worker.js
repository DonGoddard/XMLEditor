var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

// worker.js
var RATE_LIMIT = 30;
var RATE_WINDOW = 60;
var WORKER_VERSION = "nos-ai-2026-03-15-01";
var ipRequests = /* @__PURE__ */ new Map();
var worker_default = {
  async fetch(request, env) {
    const ip = request.headers.get("CF-Connecting-IP") || "unknown";
const now = Date.now();
const windowStart = now - RATE_WINDOW * 1e3;
if (!ipRequests.has(ip))
{
    ipRequests.set(ip, []);
}
let timestamps = ipRequests.get(ip).filter((t) => t > windowStart);
if (timestamps.length >= RATE_LIMIT)
{
    return new Response("Rate limit exceeded", { status: 429 });
}
timestamps.push(now);
ipRequests.set(ip, timestamps);
if (request.method === "OPTIONS")
{
    return new Response(null, { headers: corsHeaders() });
}
if (request.method === "GET")
{
    const url = new URL(request.url);
    if (url.pathname === "/whoami")
    {
        const openaiResp = await fetch("https://api.openai.com/v1/models", {
        headers: { "Authorization": `Bearer ${ env.OPENAI_KEY}` }
        });
        const openaiOk = openaiResp.ok;
        const openaiText = await openaiResp.text();
        return new Response(JSON.stringify({
            worker_version: WORKER_VERSION,
            openai_ok: openaiOk,
            openai_status: openaiResp.status,
            openai_body: openaiText.slice(0, 500)
        }), {
        headers: { "Content-Type": "application/json", ...corsHeaders() }
        });
    }
}
if (request.method !== "POST")
{
    return new Response("POST only", { status: 405 });
}
const body = await request.json();
console.log("provider:", body?.provider, "model:", body?.model);
let response;
switch (body.provider)
{
    case "github": {
      const ghMethod = body.ghMethod || "GET";
      const ghUrl = `https://api.github.com${body.path}`;
      const ghInit = {
        method: ghMethod,
        headers: {
          "Authorization": `token ${env.GITHUB_TOKEN}`,
          "Accept": "application/vnd.github.v3+json",
          "Content-Type": "application/json",
          "User-Agent": "NOS-App"
        }
      };
      if (body.payload) {
        ghInit.body = JSON.stringify(body.payload);
      }
      response = await fetch(ghUrl, ghInit);
      break;
    }
    case "openai":
        response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
          headers:
            {
                "Content-Type": "application/json",
            "Authorization": `Bearer ${ env.OPENAI_KEY}`
          },
          body: JSON.stringify({
            model: body.model,
            messages: body.messages
          })
        });
        break;
    case "gemini":
        response = await fetch(
          `https://generativelanguage.googleapis.com/v1beta/models/${body.model}:generateContent?key=${env.GEMINI_KEY}`,
          {
        method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
            contents: [{ parts: [{ text: body.prompt }] }]
            })
          }
        );
        break;
    case "anthropic":
        response = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
          headers:
            {
                "Content-Type": "application/json",
            "x-api-key": env.ANTHROPIC_KEY,
            "anthropic-version": "2023-06-01"
          },
          body: JSON.stringify({
            model: body.model,
            max_tokens: 1024,
            messages: body.messages
          })
        });
        break;
    
    default:
        return new Response("Unknown provider", { status: 400 });
}
const data = await response.text();
return new Response(data, {
    headers: {
        "Content-Type": "application/json",
        "X-Worker-Version": WORKER_VERSION,
        "X-Worker-Provider": body?.provider || "none",
        ...corsHeaders()
      }
});
  }
};
function corsHeaders()
{
    return {
        "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, User-Agent, X-NOS-Client"
  };
}
__name(corsHeaders, "corsHeaders");
export {
  worker_default as default
};
//# sourceMappingURL=worker.js.map
