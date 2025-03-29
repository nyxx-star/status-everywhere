export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const path = url.pathname;

    // Roteamento de arquivos
    if (path === "/inject.js") {
      const file = await env.ASSETS.fetch("https://raw.githubusercontent.com/SEU_USUARIO/SEU_REPO/main/inject.js");
      return new Response(file.body, { headers: { "Content-Type": "application/javascript" } });
    }
    else if (path === "/plugin.json") {
      const file = await env.ASSETS.fetch("https://raw.githubusercontent.com/SEU_USUARIO/SEU_REPO/main/plugin.json");
      return new Response(file.body, { headers: { "Content-Type": "application/json" } });
    }
    else if (path === "/styles.css") {
      const file = await env.ASSETS.fetch("https://raw.githubusercontent.com/SEU_USUARIO/SEU_REPO/main/styles.css");
      return new Response(file.body, { headers: { "Content-Type": "text/css" } });
    }

    // Página inicial (opcional)
    return new Response(`
      <h1>Plugin Pyoncord</h1>
      <p>Arquivos disponíveis:</p>
      <ul>
        <li><a href="/inject.js">inject.js</a></li>
        <li><a href="/plugin.json">plugin.json</a></li>
        <li><a href="/styles.css">styles.css</a></li>
      </ul>
    `, { headers: { "Content-Type": "text/html" } });
  }
};