const RATE_LIMIT = 20; // requests
const WINDOW = 60;     // seconds

export default {
  async fetch(request, env) {

    const ip = request.headers.get("CF-Connecting-IP");
    const key = `rate:${ip}`;

    let count = await env.RATE_LIMIT_KV.get(key);

    count = count ? parseInt(count) : 0;

    if (count > RATE_LIMIT) {
      return new Response("Rate limit exceeded", { status: 429 });
    }

    await env.RATE_LIMIT_KV.put(key, count + 1, { expirationTtl: WINDOW });

    // continue processing request
  }
};
