function toggleAccordion() {
  const content = document.getElementById('accordionContent');

  // Se já estiver expandido, colapsa
  if (content.style.maxHeight) {
    content.style.maxHeight = null;
  } else {
    // Expande o conteúdo
    content.style.maxHeight = content.scrollHeight + 'px';
  }
}
