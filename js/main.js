import render from "./render.js";
let list = document.getElementById('list')

async function main() {
    let newFetch = await fetch('https://reqres.in/api/users')
    let copyFetch = (await newFetch.json()).data
    render(copyFetch, list)
}

main()