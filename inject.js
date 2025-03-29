// StatusEverywhere - Injeta CSS e busca status dinamicamente
(() => {
  console.log("[StatusEverywhere] Plugin carregado!");

  // Mapeamento de cores para status
  const statusColors = {
    online: "#3BA55D",
    idle: "#FAA81A",
    dnd: "#ED4245",
    streaming: "#593695",
    offline: "#747F8D"
  };

  // Aplica bordas coloridas nos avatares
  const applyStatusStyles = () => {
    document.querySelectorAll('[class*="avatar"]').forEach(avatar => {
      const userId = avatar.getAttribute("data-user-id");
      if (!userId) return;

      // --- ESTRATÉGIAS PARA OBTER O STATUS ---
      // 1. Tentativa: Verifica se o Bunny expõe os dados no window
      const user = window.Bunny?.users?.cache?.get(userId) || 
                   window.Vendetta?.API?.getUser(userId);

      // 2. Fallback: Mock para teste (remova depois)
      const mockStatus = "online"; // Troque para testar (online/idle/dnd/offline)
      const status = user?.status || mockStatus;

      // Aplica o estilo
      avatar.style.border = `2px solid ${statusColors[status]}`;
      avatar.setAttribute("data-status", status);
    });
  };

  // Observa mudanças na interface (novos avatares carregados)
  new MutationObserver(applyStatusStyles).observe(document.body, {
    childList: true,
    subtree: true
  });

  // Aplica imediatamente
  applyStatusStyles();
})();
