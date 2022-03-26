window.examples = {};
class TemplateExample extends HTMLTemplateElement {
  connectedCallback() {
    // Store the content of me and hide myself.
    const name = this.getAttribute("element-name");
    window.examples[name] = this.innerHTML;
    this.style.display = "none";
    // Declare the element.
    const customElement = class extends HTMLElement {
      connectedCallback() {
        // Gather templating info.
        const content = window.examples[name];
        const attributeDict = {};
        for (let attribute of this.attributes) {
          const name = attribute.name;
          let value = attribute.value;
          if (!name.includes("array")) {
            attributeDict[name] = value;
          } else {
            // Allow arrays being made from multiple attributes.
            const arrayName = name.split("-")[0];
            if (!attributeDict[arrayName]) {
              attributeDict[arrayName] = [];
            }
            attributeDict[arrayName].push(value);
          }
        }
        // I mustache you a question.
        const html = Mustache.render(content, attributeDict);
        this.outerHTML = html;
      }
    };
    customElements.define(name, customElement);
  }
}
customElements.define("template-example", TemplateExample, { extends: "template" });
