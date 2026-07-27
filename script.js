(() => {
  const target = document.getElementById('requirement-text');
  if (!target || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const examples = [
    'El sistema debe permitir registrar usuarios, asignar roles y mantener un historial de cambios.',
    'La plataforma debe recibir documentos, identificar reglas de negocio y detectar ambigüedades.',
    'El usuario debe consultar sus proyectos, revisar entidades y exportar la documentación técnica.'
  ];
  let index = 0;
  window.setInterval(() => {
    index = (index + 1) % examples.length;
    target.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 260, fill: 'forwards' }).finished.then(() => {
      target.textContent = examples[index];
      target.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 360, fill: 'forwards' });
    });
  }, 4800);
})();
