// Implementa la misma API que window.storage usa dentro de Claude.ai
// (get/set/delete/list) pero respaldada por localStorage del navegador,
// para que "Pizarra 8" guarde y cargue jugadas de forma autónoma una vez
// alojada fuera de Claude.
(function () {
  if (window.storage) return; // no pisar un storage ya provisto por el host

  const NS = 'pizarra8:';
  const ns = (shared) => NS + (shared ? 'shared:' : 'local:');
  const fullKey = (key, shared) => ns(shared) + key;

  window.storage = {
    async get(key, shared) {
      try {
        const raw = localStorage.getItem(fullKey(key, shared));
        if (raw === null) return null;
        return { key, value: raw, shared: !!shared };
      } catch (e) {
        return null;
      }
    },

    async set(key, value, shared) {
      try {
        localStorage.setItem(fullKey(key, shared), value);
        return { key, value, shared: !!shared };
      } catch (e) {
        return null;
      }
    },

    async delete(key, shared) {
      try {
        localStorage.removeItem(fullKey(key, shared));
        return { key, deleted: true, shared: !!shared };
      } catch (e) {
        return null;
      }
    },

    async list(prefix, shared) {
      try {
        const base = ns(shared);
        const wanted = base + (prefix || '');
        const keys = [];
        for (let i = 0; i < localStorage.length; i++) {
          const k = localStorage.key(i);
          if (k && k.startsWith(wanted)) keys.push(k.slice(base.length));
        }
        return { keys, prefix, shared: !!shared };
      } catch (e) {
        return null;
      }
    },
  };
})();
