// toggle sidebar
let menu_btn = document.querySelector('.toggle-menu');
menu_btn.addEventListener('click', () => {
    let sidebar = document.getElementById('sidebar');
    sidebar.classList.add('sidebar-active');

    let overlay = document.querySelector('.overlay')
    overlay.style.right = 0;
});

let close_btn = document.querySelector('.close-sidebar')
close_btn.addEventListener('click', () => {
    let sidebar = document.getElementById('sidebar');
    sidebar.classList.remove('sidebar-active');

    let overlay = document.querySelector('.overlay')
    overlay.style.right = '-100%';
});

// sidebar dropdown
let dropbtn = document.querySelector('.sub-menu-head')
dropbtn.addEventListener('click', () => {
    let submenu = document.querySelector('.sub-menu');
    submenu.classList.toggle('sub-menu-active');

    let direction = document.querySelector('#direction');

    if (direction.classList.contains('fa-angle-up')) {
        direction.classList.add('fa-angle-down')
        direction.classList.remove('fa-angle-up')
    }
    else if (direction.classList.contains('fa-angle-down')) {
        direction.classList.add('fa-angle-up')
        direction.classList.remove('fa-angle-down')
    }
});


// opening video modal
let vid_open_btn = document.getElementById('vid-icon');

vid_open_btn.addEventListener('click', (e) => {
    e.preventDefault();
    let video_modal = document.getElementById('video-modal');

    video_modal.classList.add('video-modal-active');
});

// closing video modal
let vid_close_btn = document.getElementById('close-vide0');

vid_close_btn.addEventListener('click', (e) => {
    e.preventDefault();
    let video_modal = document.getElementById('video-modal');

    video_modal.classList.remove('video-modal-active');
});



// for FAQ's section
let head = document.querySelectorAll('.faqs-head');
let content = document.querySelectorAll('.faqs-conten');

for (let i = 0; i < head.length; i++) {

    head[i].onclick = function () {

        var next = head[i].nextElementSibling;

        // If this content is already visible, hide it
        if (next.style.display === 'block') {
            next.style.display = 'none';
        } else {
            // Hide all contents first
            for (var j = 0; j < content.length; j++) {
                content[j].style.display = 'none';
            }
            // Then show the clicked one
            next.style.display = 'block';
        }
    }

}


// back to top button
let bttb = document.getElementById('back-to-top-btn');

window.addEventListener('scroll', ()=>{
    if (window.scrollY > 100) {
        bttb.classList.add('back-to-top-btn-active');
    }else {
        bttb.classList.remove('back-to-top-btn-active');
    }
});


bttb.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
})
