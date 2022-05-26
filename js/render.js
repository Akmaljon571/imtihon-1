import UserNode from "./UserNode.js";


export default function (data, list) {
    let frg = document.createDocumentFragment()
    data.forEach(key => {
       let newNode = UserNode(key)
       frg.append(newNode)
    });
    list.innerHTML = ''
    list.append(frg)
}