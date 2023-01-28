
const tabs = document.querySelectorAll(".tabheader__item")
const tabsParent = document.querySelector(".tabheader__items")
const tabsContent = document.querySelectorAll(".tabcontent")


const hideTabcontent = () => {
    tabsContent.forEach((item) => {
        item.style.display = "none"
    })
    tabs.forEach((item) => {
        item.classList.remove("tabheader__item_active")
    })
}

const showTabContent = (i = 0) => {
    tabsContent[i].style.display = "block"
    tabs[i].classList.add("tabheader__item_active")
}

let slide = 0;
function autoSlider () {
    const slider = setInterval( (i) => {
        slide++
        if (slide > 3) {
            slide = 0
        }
        hideTabcontent()
        showTabContent(slide)
    },1000)
}

hideTabcontent()
showTabContent()
autoSlider()

tabsParent.addEventListener("click", (e) => {
    const target = e.target

    if(target.classList.contains("tabheader__item")){
        tabs.forEach((item, i) => {
            if (target === item) {
                hideTabcontent()
                showTabContent(i)
                slide = i;
            }
        })
    }
})



const modalTrigger = document.querySelector(".btn_white")
const modal = document.querySelector(".modal")
const closeModalBtn = document.querySelector(".modal__close")

const openModal = () => {
    modal.classList.add('show')
    modal.classList.remove('hide')
    document.body.style.overflow = "hidden"
}
modalTrigger.addEventListener("click", openModal)

const closeModal = () => {
    modal.classList.add('hide')
    modal.classList.remove('show')
    document.body.style.overflow = ""
}
closeModalBtn.addEventListener("click", closeModal)

modal.addEventListener("click", (e) => {
    if (e.target.classList.contains("modal")){
        closeModal()
    }
})

const openScrollModal = () => {
    const page = document.documentElement
    if (page.scrollTop + page.clientHeight >= page.scrollHeight-1) {
        openModal()
        document.body.style.overflow = "hidden"
    }
}
window.addEventListener("scroll" , openScrollModal)


/////////////////////////////////////////////////////////////////

const forms = document.querySelectorAll("form")

const postData = (form) => {
    form.addEventListener("input", (e) => {
        e.preventDefault()
        const req = new XMLHttpRequest()
        req.open("POST", "server.php")
        req.setRequestHeader("Content-Type", "application/json")
        const formData = new FormData(form)
        const obj = {}
        formData.forEach((item, name ) => {
            obj[name] = item
        })
        console.log(obj)
        const json = JSON.stringify(obj)
        req.send(json)
    })
}
forms.forEach((form) => {
    postData(form)
})