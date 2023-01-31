// hover color red  btn Nav sans Dd
const midNavBtnHome = document.querySelector('.midNavBtnHome')
const btnHome = document.querySelector('.btnHome');

const midNavBtnShop = document.querySelector('.midNavBtnShop')
const btnShop = document.querySelector('.btnShop');

const midNavBtnAbout = document.querySelector('.midNavBtnAbout')
const btnAbout = document.querySelector('.btnAbout');

const midNavBtnContact = document.querySelector('.midNavBtnContact')
const btnContact = document.querySelector('.btnContact');


// midNavBtnHome.addEventListener('mouseover', function (){
//     btnHome.style.color = '#f61f1f'
// })
// midNavBtnHome.addEventListener('mouseout', function (){
//     btnHome.style.color = 'black'
// })

// midNavBtnShop.addEventListener('mouseover', function () {
//     btnShop.style.color = '#f61f1f'
// })
// midNavBtnShop.addEventListener('mouseout', function () {
//     btnShop.style.color = 'black'
// })

// midNavBtnAbout.addEventListener('mouseover', function () {
//     btnAbout.style.color = '#f61f1f'
// })

// midNavBtnAbout.addEventListener('mouseout', function () {
//     btnAbout.style.color = 'black'
// })

// midNavBtnContact.addEventListener('mouseover', function () {
//     btnContact.style.color = '#f61f1f'
// })

// midNavBtnContact.addEventListener('mouseout', function () {
//     btnContact.style.color = 'black'
// })

// dropdown Latest
const containerDdLatest = document.querySelector('.containerDdLatest');
const btnLatest = document.querySelector('.btnLatest');
const midNavBtnLatest = document.querySelector('.midNavBtnLatest')

btnLatest.addEventListener('mouseover', function () {
    containerDdLatest.style.display = 'block';
    containerDdBlog.style.display = 'none';
    containerDdPages.style.display = 'none';
});

btnLatest.addEventListener('mouseout', function () {
    containerDdLatest.style.display = 'block';
});

midNavBtnLatest.addEventListener('mouseover', function () {
    containerDdLatest.style.display = 'block'
    // btnLatest.style.color = '#f61f1f'
})

midNavBtnLatest.addEventListener('mouseout', function () {
    containerDdLatest.style.display = 'none'
    // btnLatest.style.color = 'black'
})

containerDdLatest.addEventListener('mouseover', function () {
    containerDdLatest.style.display = 'block';
    containerDdBlog.style.display = 'none';
    containerDdPages.style.display = 'none';
});
containerDdLatest.addEventListener('mouseout', function () {
    containerDdLatest.style.display = 'none';
});



// dropdown Blog
const containerDdBlog = document.querySelector('.containerDdBlog');
const btnBlog = document.querySelector('.btnBlog');
const midNavBtnBlog = document.querySelector('.midNavBtnBlog')

btnBlog.addEventListener('mouseover', function () {
    containerDdBlog.style.display = 'block';
    containerDdPages.style.display = 'none';
    containerDdLatest.style.display = 'none';
});

btnBlog.addEventListener('mouseout', function () {
    containerDdBlog.style.display = 'block';
});

midNavBtnBlog.addEventListener('mouseover', function () {
    containerDdBlog.style.display = 'block'
    // btnBlog.style.color = '#f61f1f'
})

midNavBtnBlog.addEventListener('mouseout', function () {
    containerDdBlog.style.display = 'none'
    // btnBlog.style.color = 'black'
})

containerDdBlog.addEventListener('mouseover', function () {
    containerDdBlog.style.display = 'block';
    containerDdPages.style.display = 'none';
    containerDdLatest.style.display = 'none';
});
containerDdBlog.addEventListener('mouseout', function () {
    containerDdBlog.style.display = 'none';
});

// dropdown Pages
const containerDdPages = document.querySelector('.containerDdPages');
const btnPages = document.querySelector('.btnPages');
const midNavBtnPages = document.querySelector('.midNavBtnPages')


btnPages.addEventListener('mouseover', function () {
    containerDdPages.style.display = 'block';
    containerDdBlog.style.display = 'none';
    containerDdLatest.style.display = 'none';
});

btnPages.addEventListener('mouseout', function () {
    containerDdPages.style.display = 'block';
});

midNavBtnPages.addEventListener('mouseover', function () {
    containerDdPages.style.display = 'block'
    // btnPages.style.color = '#f61f1f'
})

midNavBtnPages.addEventListener('mouseout', function () {
    containerDdPages.style.display = 'none'
    // btnPages.style.color = 'black'
})

containerDdPages.addEventListener('mouseover', function () {
    containerDdPages.style.display = 'block';
    containerDdBlog.style.display = 'none';
    containerDdLatest.style.display = 'none';
});
containerDdPages.addEventListener('mouseout', function () {
    containerDdPages.style.display = 'none';
});


// mode lightdark
const barre = document.getElementsByClassName('barre')[0]

const boule = document.getElementsByClassName('boule')[0]

const paragraphs = document.getElementsByTagName('p');

const iconWhite = document.querySelectorAll('#iconWhite')
const iconRed = document.querySelectorAll('#iconRed')
const linkNav = document.querySelectorAll('.linkNav')
const bgDropDown = document.querySelectorAll('.bgDropDown')
console.log(linkNav[0]);


const a = document.getElementsByTagName('a')

let modeBlanc = true;

boule.addEventListener('click', () => {
    modeBlanc = !modeBlanc;
    document.body.style.backgroundColor = modeBlanc ? 'white' : 'black';
    barre.style.backgroundColor = modeBlanc ? '#a02424ca' : 'rgb(135, 206, 235)'
    barre.style.borderColor = modeBlanc ? 'black' : 'white'
    barre.style.justifyContent = modeBlanc ? 'right' : 'left'
    boule.style.right = modeBlanc ? '-1px' : '1px'
    iconWhite[0].style.display = modeBlanc ? 'none' : 'block'
    iconWhite[1].style.display = modeBlanc ? 'none' : 'block'
    iconWhite[2].style.display = modeBlanc ? 'none' : 'block'
    bgDropDown[0].style.backgroundColor = modeBlanc ? 'white' : 'black'
    bgDropDown[1].style.backgroundColor = modeBlanc ? 'white' : 'black'
    bgDropDown[2].style.backgroundColor = modeBlanc ? 'white' : 'black'

    for (let i = 0; i < a.length; i++) {
        a[i].classList.toggle('lightmode')
    }
    boule.style.float = modeBlanc ? 'right' : 'left'
});

// icon nav hover en mode dark
iconWhite[0].addEventListener('mouseover', function () {
    iconWhite[0].style.display = 'none'
    iconRed[0].style.display = 'block'
})
iconWhite[0].addEventListener('mouseout', function () {
    iconRed[0].style.display = 'none'
    iconWhite[0].style.display = 'block'
})

iconWhite[1].addEventListener('mouseover', function () {
    iconWhite[1].style.display = 'none'
    iconRed[1].style.display = 'block'
})
iconWhite[1].addEventListener('mouseout', function () {
    iconRed[1].style.display = 'none'
    iconWhite[1].style.display = 'block'
})

iconWhite[2].addEventListener('mouseover', function () {
    iconWhite[2].style.display = 'none'
    iconRed[2].style.display = 'block'
})
iconWhite[2].addEventListener('mouseout', function () {
    iconRed[2].style.display = 'none'
    iconWhite[2].style.display = 'block'
})