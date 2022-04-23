class TemplateExample extends HTMLElement {
  connectedCallback() {
    // Store the content of me and hide myself.
    const name = this.getAttribute("element-name");
    const content = this.innerHTML;
    this.style.display = "none";
    // Declare the element.
    const customElement = class extends HTMLElement {
      connectedCallback() {
        // Gather templating info.
        let templateData = {};
        try {
          templateData = JSON5.parse(this.innerHTML);
        } catch (e) {
          console.error(e);
        }
        // I mustache you a question.
        const html = Mustache.render(content, templateData);
        this.outerHTML = html;
      }
    };
    customElements.define(name, customElement);
  }
}
customElements.define("template-example", TemplateExample);
