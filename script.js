const navMenu = document.getElementById("nav-menu"),
      navToggle = document.getElementById("nav-toggle"),
      navClose = document.getElementById("nav-close")

    if(navToggle){
        navToggle.addEventListener("click", ()=>{
            navMenu.classList.add("show-menu");
        })
    }
    if(navClose){
        navClose.addEventListener("click",()=>{
            navMenu.classList.remove("show-menu")
        })
    }

const navLink = document.querySelectorAll(".nav_link")

function linkAction(){
    const navMenu=document.getElementById("nav-menu")
    navMenu.classList.remove("show-menu")
}
navLink.forEach(n => n.addEventListener("click",linkAction))



// ACCORDION SKILLS

const skillsContent = document.getElementsByClassName("skills_content"),
      skillsHeader = document.querySelectorAll(".skills_header")

function toggleSkills(){
    let itemClass = this.parentNode.className;

    for(i=0; i<skillsContent.length;i++){
        skillsContent[i].className = "skills_content skills_close";
    }
    if(itemClass === "skills_content skills_close"){
        this.parentNode.className = "skills_content skills_open";
    }
}

skillsHeader.forEach((el)=>{
    el.addEventListener("click",toggleSkills);
})



// QUALIFICATION TABS
const tabs = document.querySelectorAll("[data-target]"),
      tabContents = document.querySelectorAll("[data-content]")

tabs.forEach(tab =>{
    tab.addEventListener("click", ()=>{
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tabContent =>{
            tabContent.classList.remove("qualification_active");
        })
        target.classList.add("qualification_active");

        tab.forEach(tab =>{
            tab.classList.remove("qualification_active");
        })
        tab.classList.add("qualification_active");
    })
})


// SERVICES MODAL
const modalViews = document.querySelectorAll(".services_modal"),
    modalBtns = document.querySelectorAll(".services_button"),
    modalClose = document.querySelectorAll(".services_modal-close")

    let modal = function(modalClick){
        modalViews[modalClick].classList.add("active-modal");
    }

    modalBtns.forEach((modalBtn, i) =>{
        modalBtn.addEventListener("click", ()=>{
            modal(i);
        })
    })

    modalClose.forEach((modalClose)=>{
        modalClose.addEventListener("click",()=>{
            modalViews.forEach((modalView)=>{
                modalView.classList.remove("active-modal");
            })
        })
    })