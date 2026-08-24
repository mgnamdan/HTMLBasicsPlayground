// This small bridge powers the live HTML demo.
// The lesson itself remains focused on the HTML being rendered.

const demoForm = document.querySelector("#demo-form");
const sourceEditor = document.querySelector("#source-editor");
const renderedDocument = document.querySelector("#rendered-document");
const demoStatus = document.querySelector("#demo-status");

function renderDemoDocument() {
  renderedDocument.srcdoc = sourceEditor.value;
  demoStatus.textContent = "Document rendered. Compare the source and result.";
}

demoForm.addEventListener("submit", function (event) {
  event.preventDefault();
  renderDemoDocument();
});

demoForm.addEventListener("reset", function () {
  demoStatus.textContent = "Restoring the starting source…";

  requestAnimationFrame(function () {
    renderDemoDocument();
  });
});

renderDemoDocument();
