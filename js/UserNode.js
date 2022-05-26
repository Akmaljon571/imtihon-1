export default function ({ id, avatar,email, first_name, last_name }, bool = true)  {
    let temp = document.getElementById('template')
    let copyTemp = temp.content.cloneNode(true)

    copyTemp.querySelector('.avatar').src = avatar
    copyTemp.querySelector('.ismfam').textContent = `${last_name} ${first_name}` 
    copyTemp.querySelector('.email').textContent = email
    copyTemp.querySelector('.link').href = id
    // copyTemp.querySelector('.avatar').src = avatar

    return copyTemp
}

