document.querySelectorAll('.accordion-toggle').forEach(btn => {
  btn.addEventListener('click', function () {
    const content = this.previousElementSibling;
    const isOpen = content.style.maxHeight && content.style.maxHeight !== "0px";

    // Cierra todos
    document.querySelectorAll('.accordion-content').forEach(c => c.style.maxHeight = "0");

    if (!isOpen) {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
});
