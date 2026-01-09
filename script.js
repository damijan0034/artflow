const all = document.getElementById('alleng')
const btn = document.getElementById('menubtn')
const overlay = document.getElementById('overlay')

btn.onclick = () => all.classList.toggle("menu-open")
overlay.onclick = () => all.classList.remove("menu-open")

const paintersbtn = document.getElementById('paintersbtn')
const painterspage = document.getElementById('painterspageall')
const arrow = document.getElementById('arrow')
const sidemenu = document.getElementById('sidemenu')

paintersbtn.onclick = () => {
    all.classList.add('hidden')
    btn.classList.add('hidden')

    painterspage.classList.remove('hidden')
    arrow.classList.remove('hidden')

    window.scrollTo({ top: 0 })
    all.classList.remove("menu-open")

}

arrow.onclick = () => {
    painterspage.classList.add('hidden')

    all.classList.remove('hidden')
    btn.classList.remove('hidden')
    arrow.classList.add('hidden')

    all.classList.remove("menu-open")




    window.scrollTo({ top: 0 })
}
