const { createElement } = React

const divApp = document.querySelector('#app')
const root = ReactDOM.createRoot(divApp)

const h1 = createElement("h1", {}, "Hello World!")
const p = createElement("p", {}, "Estamos utilizando React 😍")
const main = createElement("main", {}, h1, p)

root.render(main)