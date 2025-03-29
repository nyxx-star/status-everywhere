// StatusEverywhere - Injeta estilos e lógica de status
(() => {
    console.log("[StatusEverywhere] Plugin carregado!");

    const applyStatus = () => {
        document.querySelectorAll('[class*="avatar"]').forEach(avatar => {
            const userId = avatar.getAttribute("data-user-id");
            if (!userId) return;

            // Lógica real: Substitua pelo acesso à API do Bunny/Pyoncord
            const user = window.Bunny?.users?.cache?.get(userId);
            if (!user) return;

            avatar.setAttribute("data-status", user.status || "offline");
        });
    };

    // Observa mudanças na interface
    new MutationObserver(applyStatus).observe(document.body, {
        childList: true,
        subtree: true
    });

    // Aplica imediatamente
    applyStatus();
})();