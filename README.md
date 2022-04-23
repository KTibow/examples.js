# examples.js
Lightweight "library" that allows you to put templates in your HTML and
fill them with [Mustache](https://mustache.github.io/mustache.5.html).
## Example of using it
```html
<template-example element-name="download-option">
    <h2>{{name}}</h2>
    <img src="{{image}}" />
    <ul>
        {{#items}}
        <li>{{.}}</li>
        {{/items}}
    </ul>
</template-example>
<download-option
    name="Windows"
    image="assets/windows.png"
    items="[
        'Not made by me',
        'Made with C#',
        'Requires Windows'
    ]">
</download-option>
<script src="https://unpkg.com/json5@^2.0.0/dist/index.min.js"></script>
<script src="https://unpkg.com/mustache@^4.2.0/mustache.min.js"></script>
<script src="/examples.js"></script>
```
You could probably guess how that would turn out.
## Get it
Check out the file `examples.js`.