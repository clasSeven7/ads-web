function toggleAccordion() {
  const content = document.getElementById('accordionContent');

  if (content.style.maxHeight) {
    content.style.maxHeight = null;
  } else {
    content.style.maxHeight = content.scrollHeight + 'rem';
  }
}
