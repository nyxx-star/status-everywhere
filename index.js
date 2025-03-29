export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const path = url.pathname;

    // Roteamento de arquivos
    if (path === "/inject.js") {
      const file = await env.ASSETS.fetch("https://raw.githubusercontent.com/nyxx-star/status-everywhere/main/inject.js");
      return new Response(file.body, { headers: { "Content-Type": "application/javascript" } });
    }
    else if (path === "/plugin.json") {
      const file = await env.ASSETS.fetch("https://raw.githubusercontent.com/nyxx-star/status-everywhere/main/plugin.json");
      return new Response(file.body, { headers: { "Content-Type": "application/json" } });
    }
    else if (path === "/styles.css") {
      const file = await env.ASSETS.fetch("https://raw.githubusercontent.com/nyxx-star/status-everywhere/main/styles.css");
      return new Response(file.body, { headers: { "Content-Type": "text/css" } });
    }
