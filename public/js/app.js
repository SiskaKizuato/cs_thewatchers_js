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




// creation section 2
let section2 = document.querySelector(".section2");

let containerS2 = document.createElement("div");
containerS2.classList.add("containerS2");
section2.appendChild(containerS2);

let containerArrivals = document.createElement("div");
containerArrivals.classList.add("containerArrivals");
containerS2.appendChild(containerArrivals);

let newArrivals = document.createElement("p");
newArrivals.classList.add("newArrivals");
newArrivals.innerHTML = "New Arrivals";
containerArrivals.appendChild(newArrivals);

let container3img = document.createElement("div");
container3img.classList.add("container3img");
containerS2.appendChild(container3img);

for (let i = 1; i <= 3; i++) {
    let containerImgPrix = document.createElement("div");
    containerImgPrix.classList.add("containerImgPrix");
    container3img.appendChild(containerImgPrix);

    let videS2 = document.createElement("div");
    videS2.classList.add("videS2");
    containerImgPrix.appendChild(videS2);

    let cadreImgS2 = document.createElement("div");
    cadreImgS2.classList.add("cadreImgS2");
    cadreImgS2.classList.add("product" + i);
    containerImgPrix.appendChild(cadreImgS2);

    let txtS2 = document.createElement("div");
    txtS2.classList.add("txtS2");
    containerImgPrix.appendChild(txtS2);

    let nomArticleS2 = document.createElement("p");
    nomArticleS2.classList.add("nomArticleS2");
    nomArticleS2.innerHTML = "Thermo Ball Etip Gloves";
    txtS2.appendChild(nomArticleS2);

    let prixS2 = document.createElement("p");
    prixS2.classList.add("prixS2");
    prixS2.innerHTML = "$ 45,743";
    txtS2.appendChild(prixS2);
}
document.body.appendChild(section2);

let pS = document.querySelectorAll('p')
let premierNom = pS[3]
let deuxiemeNom = pS[5]
let troisiemeNom = pS[7]


// mode lightdark
const barre = document.getElementsByClassName('barre')[0]

const boule = document.getElementsByClassName('boule')[0]

const paragraphs = document.getElementsByTagName('p');

const iconWhite = document.querySelectorAll('#iconWhite')
const iconRed = document.querySelectorAll('#iconRed')
const linkNav = document.querySelectorAll('.linkNav')
const bgDropDown = document.querySelectorAll('.bgDropDown')


const a = document.getElementsByTagName('a')

let modeBlanc = true;

boule.addEventListener('click', () => {
    
    // navbar
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
    boule.style.float = modeBlanc ? 'right' : 'left';

    // section 1
    const bgGrey = document.querySelectorAll('.bgGrey')
    bgGrey[0].style.backgroundColor = modeBlanc ? '#f0f0f2' : '#4a4a4b'
    const select = document.getElementsByClassName('select')[0]
    select.style.color = modeBlanc ? 'black' : 'white'
    const loremS1 = document.getElementsByClassName('loremS1')[0]
    loremS1.style.color = modeBlanc ? 'black' : 'white'
    const bgBlack = document.querySelectorAll('.bgBlack')
    bgBlack[0].style.backgroundColor = modeBlanc ? '#4a4a4b' : 'black'

    // section 2 
    newArrivals.style.color = modeBlanc ? 'rgba(3, 6, 46, 0.913)' : 'white'
    premierNom.style.color = modeBlanc ? 'rgba(3, 6, 46, 0.79)' : 'white'
    deuxiemeNom.style.color = modeBlanc ? 'rgba(3, 6, 46, 0.79)' : 'white'
    troisiemeNom.style.color = modeBlanc ? 'rgba(3, 6, 46, 0.79)' : 'white'
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
