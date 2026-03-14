export default {
  async fetch(request, env) {

    if (request.method !== "POST") {
      return new Response("POST only", { status: 405 });
    }

    const body = await request.json();

    const response = await fetch(
      "https://api.openai.com/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${env.OPENAI_KEY}`
        },
        body: JSON.stringify(body)
      }
    );

    const data = await response.text();

    return new Response(data, {
      headers: { "Content-Type": "application/json" }
    });
  }
}
