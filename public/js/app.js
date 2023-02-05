// hover color red  btn Nav sans Dd
const midNavBtnHome = document.querySelector('.midNavBtnHome')
const btnHome = document.querySelector('.btnHome');

const midNavBtnShop = document.querySelector('.midNavBtnShop')
const btnShop = document.querySelector('.btnShop');

const midNavBtnAbout = document.querySelector('.midNavBtnAbout')
const btnAbout = document.querySelector('.btnAbout');

const midNavBtnContact = document.querySelector('.midNavBtnContact')
const btnContact = document.querySelector('.btnContact');
let btn = document.getElementById("profileBtn");


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
let section3 = document.querySelector(".section3");


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

    let divContientImg = document.createElement("div")
    divContientImg.classList.add("divContientImg")
    containerImgPrix.appendChild(divContientImg)

    let cadreImgS2 = document.createElement("div");
    cadreImgS2.classList.add("cadreImgS2");
    cadreImgS2.classList.add("product" + i);
    divContientImg.appendChild(cadreImgS2);

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

// selectors en vrac
let pS = document.querySelectorAll('p')
let premierNom = pS[3]
let deuxiemeNom = pS[5]
let troisiemeNom = pS[7]

let containerTxtWatch = document.querySelectorAll('.containerTxtWatch')
let containerTxtWatch1 = containerTxtWatch[0]
let containerTxtWatch2 = containerTxtWatch[1]
let containerTxtWatch3 = containerTxtWatch[2]
let containerTxtWatch4 = containerTxtWatch[3]
let containerTxtWatch5 = containerTxtWatch[4]
let containerTxtWatch6 = containerTxtWatch[5]

let nomArticleS2 = document.querySelectorAll(".nomArticleS2")
let nomArticleS2A = nomArticleS2[3]
let nomArticleS2B = nomArticleS2[4]
let nomArticleS2C = nomArticleS2[5]
let nomArticleS2D = nomArticleS2[6]
let nomArticleS2F = nomArticleS2[7]
let nomArticleS2E = nomArticleS2[8]

let prixS4 = document.querySelectorAll(".prixS4")
let prixS4A = prixS4[0]
let prixS4B = prixS4[1]
let prixS4C = prixS4[2]
let prixS4D = prixS4[3]
let prixS4F = prixS4[4]
let prixS4E = prixS4[5]

let newArrivalsS4 = document.querySelectorAll(".newArrivals")[1]
let loremS4 = document.querySelectorAll(".loremS4")[0]

let section6 = document.querySelectorAll(".section6")[0]
let newArrivalsS6_1 = document.querySelectorAll(".newArrivals")[2]
let newArrivalsS6_2 = document.querySelectorAll(".newArrivals")[3]
let loremS6 = document.querySelectorAll('.loremS6')
let loremS6_1 = loremS6[0]
let loremS6_2 = loremS6[1]

const footerIconW = document.querySelectorAll('#footerIconW')
const footerIconR = document.querySelectorAll('#footerIconR')
const footerIconB = document.querySelectorAll('#footerIconB')

const titreFooter = document.querySelectorAll('.titreFooter')

let header = document.getElementsByTagName("header")
let nav = document.getElementsByTagName("nav")
let iFrame = document.getElementsByTagName("iFrame")

let playBtn = document.querySelectorAll(".playBtn")[0]


// mode lightdark
const barre = document.getElementsByClassName('barre')[0]

const boule = document.getElementsByClassName('boule')[0]

const paragraphs = document.getElementsByTagName('p');

// const iconWhite = document.querySelectorAll('#iconWhite')
// const iconRed = document.querySelectorAll('#iconRed')
const linkNav = document.querySelectorAll('.linkNav')
const bgDropDown = document.querySelectorAll('.bgDropDown')


const a = document.getElementsByTagName('a')

let modeBlanc = true;

boule.addEventListener('click', () => {

    // navbar
    modeBlanc = !modeBlanc;
    nav[0].style.backgroundColor = modeBlanc ? 'white' : 'black';
    document.body.style.backgroundColor = modeBlanc ? 'white' : 'black';
    barre.style.backgroundColor = modeBlanc ? '#a02424ca' : 'rgb(135, 206, 235)'
    barre.style.borderColor = modeBlanc ? 'black' : 'white'
    barre.style.justifyContent = modeBlanc ? 'right' : 'left'
    boule.style.right = modeBlanc ? '-1px' : '1px'
    // iconWhite[0].style.display = modeBlanc ? 'none' : 'block'
    // iconWhite[1].style.display = modeBlanc ? 'none' : 'block'
    // iconWhite[2].style.display = modeBlanc ? 'none' : 'block'
    btn.style.color = modeBlanc ? 'black' : 'white'
    btn.addEventListener('mouseover', function () {
        btn.style.color = '#f61f1f'
    })

    btn.addEventListener('mouseout', function () {
        btn.style.color = 'white'
    })

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
    section3.style.backgroundColor = modeBlanc ? 'white' : '#4a4a4bd'

    // section 4
    nomArticleS2A.style.color = modeBlanc ? 'rgba(3, 6, 46, 0.79)' : 'white'
    nomArticleS2B.style.color = modeBlanc ? 'rgba(3, 6, 46, 0.79)' : 'white'
    nomArticleS2C.style.color = modeBlanc ? 'rgba(3, 6, 46, 0.79)' : 'white'
    nomArticleS2D.style.color = modeBlanc ? 'rgba(3, 6, 46, 0.79)' : 'white'
    nomArticleS2F.style.color = modeBlanc ? 'rgba(3, 6, 46, 0.79)' : 'white'
    nomArticleS2E.style.color = modeBlanc ? 'rgba(3, 6, 46, 0.79)' : 'white'
    prixS4A.style.color = modeBlanc ? 'rgba(3, 6, 46, 0.79)' : 'white'
    prixS4B.style.color = modeBlanc ? 'rgba(3, 6, 46, 0.79)' : 'white'
    prixS4C.style.color = modeBlanc ? 'rgba(3, 6, 46, 0.79)' : 'white'
    prixS4D.style.color = modeBlanc ? 'rgba(3, 6, 46, 0.79)' : 'white'
    prixS4F.style.color = modeBlanc ? 'rgba(3, 6, 46, 0.79)' : 'white'
    prixS4E.style.color = modeBlanc ? 'rgba(3, 6, 46, 0.79)' : 'white'
    newArrivalsS4.style.color = modeBlanc ? 'rgba(3, 6, 46, 0.913)' : 'white'
    loremS4.style.color = modeBlanc ? '#4a4a4bb1' : 'white'

    // section 6
    loremS6_1.style.color = modeBlanc ? '#656565b1a4a4bb1' : 'white'
    loremS6_2.style.color = modeBlanc ? '#656565b1a4a4bb1' : 'white'
    newArrivalsS6_1.style.color = modeBlanc ? 'rgba(3, 6, 46, 0.913)' : 'white'
    newArrivalsS6_2.style.color = modeBlanc ? 'rgba(3, 6, 46, 0.913)' : 'white'
    // section6.style.backgroundColor = modeBlanc ? 'white' : '#4a4a4b'

    // footer
    footerIconW[0].style.display = modeBlanc ? 'none' : 'block'
    footerIconW[1].style.display = modeBlanc ? 'none' : 'block'
    footerIconW[2].style.display = modeBlanc ? 'none' : 'block'
    footerIconW[3].style.display = modeBlanc ? 'none' : 'block'

    footerIconB[0].style.display = modeBlanc ? 'block' : 'none'
    footerIconB[1].style.display = modeBlanc ? 'block' : 'none'
    footerIconB[2].style.display = modeBlanc ? 'block' : 'none'
    footerIconB[3].style.display = modeBlanc ? 'block' : 'none'

    titreFooter.style.color = modeBlanc ? '#4a4a4b' : '#99999b'

});

// icon nav hover en mode dark
// iconWhite[0].addEventListener('mouseover', function () {
//     iconWhite[0].style.display = 'none'
//     iconRed[0].style.display = 'block'
// })
// iconWhite[0].addEventListener('mouseout', function () {
//     iconRed[0].style.display = 'none'
//     iconWhite[0].style.display = 'block'
// })

// iconWhite[1].addEventListener('mouseover', function () {
//     iconWhite[1].style.display = 'none'
//     iconRed[1].style.display = 'block'
// })
// iconWhite[1].addEventListener('mouseout', function () {
//     iconRed[1].style.display = 'none'
//     iconWhite[1].style.display = 'block'
// })

// iconWhite[2].addEventListener('mouseover', function () {
//     iconWhite[2].style.display = 'none'
//     iconRed[2].style.display = 'block'
// })
// iconWhite[2].addEventListener('mouseout', function () {
//     iconRed[2].style.display = 'none'
//     iconWhite[2].style.display = 'block'
// })

// icon footer hover en mode dark
footerIconW[0].addEventListener('mouseover', function () {
    footerIconW[0].style.display = 'none'
    footerIconR[0].style.display = 'block'
})
footerIconW[0].addEventListener('mouseout', function () {
    footerIconR[0].style.display = 'none'
    footerIconW[0].style.display = 'block'
})

footerIconW[1].addEventListener('mouseover', function () {
    footerIconW[1].style.display = 'none'
    footerIconR[1].style.display = 'block'
})
footerIconW[1].addEventListener('mouseout', function () {
    footerIconR[1].style.display = 'none'
    footerIconW[1].style.display = 'block'
})

footerIconW[2].addEventListener('mouseover', function () {
    footerIconW[2].style.display = 'none'
    footerIconR[2].style.display = 'block'
})
footerIconW[2].addEventListener('mouseout', function () {
    footerIconR[2].style.display = 'none'
    footerIconW[2].style.display = 'block'
})
footerIconW[3].addEventListener('mouseover', function () {
    footerIconW[3].style.display = 'none'
    footerIconR[3].style.display = 'block'
})
footerIconW[3].addEventListener('mouseout', function () {
    footerIconR[3].style.display = 'none'
    footerIconW[3].style.display = 'block'
})

// icon footer hover en mode light
footerIconB[0].addEventListener('mouseover', function () {
    footerIconB[0].style.display = 'none'
    footerIconR[0].style.display = 'block'
})
footerIconB[0].addEventListener('mouseout', function () {
    footerIconR[0].style.display = 'none'
    footerIconB[0].style.display = 'block'
})

footerIconB[1].addEventListener('mouseover', function () {
    footerIconB[1].style.display = 'none'
    footerIconR[1].style.display = 'block'
})
footerIconB[1].addEventListener('mouseout', function () {
    footerIconR[1].style.display = 'none'
    footerIconB[1].style.display = 'block'
})

footerIconB[2].addEventListener('mouseover', function () {
    footerIconB[2].style.display = 'none'
    footerIconR[2].style.display = 'block'
})
footerIconB[2].addEventListener('mouseout', function () {
    footerIconR[2].style.display = 'none'
    footerIconB[2].style.display = 'block'
})
footerIconB[3].addEventListener('mouseover', function () {
    footerIconB[3].style.display = 'none'
    footerIconR[3].style.display = 'block'
})
footerIconB[3].addEventListener('mouseout', function () {
    footerIconR[3].style.display = 'none'
    footerIconB[3].style.display = 'block'
})


// link section3
document.querySelectorAll(".divWatch")[0].addEventListener("click", function () {
    window.location.assign("./public/pages/page2.html");
});
document.querySelectorAll(".divWatch")[1].addEventListener("click", function () {
    window.location.assign("./public/pages/page2.html");
});
document.querySelectorAll(".divWatch")[2].addEventListener("click", function () {
    window.location.assign("./public/pages/page2.html");
});
document.querySelectorAll(".divWatch")[3].addEventListener("click", function () {
    window.location.assign("./public/pages/page2.html");
});
document.querySelectorAll(".divWatch")[4].addEventListener("click", function () {
    window.location.assign("./public/pages/page2.html");
});
document.querySelectorAll(".divWatch")[5].addEventListener("click", function () {
    window.location.assign("./public/pages/page2.html");
});


// btnUp et nav fixed

let mybutton = document.getElementById("myBtn");

window.onscroll = function () {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }

    if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
        header[0].style.position = "fixed"
    } else {
        header[0].style.position = "relative";
    }
};

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// youtube
// playBtn.addEventListener('click', () => {

// })
let containerVideo = document.querySelector(".containerVideo")



playBtn.onclick = function () {
    playBtn.style.display = "none";
    iFrame[0].style.display = "block";
    containerVideo.style.backgroundColor = "rgba(255, 166, 0, 0.272)";
};

containerVideo.onclick = function (event) {
    if (event.target !== iFrame[0]) {
        playBtn.style.display = "block";
        iFrame[0].style.display = "none";
        containerVideo.style.backgroundColor = "transparent";
    }
};
// modal

// Get the modal
let modal = document.getElementById("myModal");


// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];
// get the button creat account
let createAccount = document.getElementById("inscription");

// When the user clicks the button, open the modal
btn.onclick = function () {
    modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
};





createAccount.addEventListener("click", function () {
    let modalContent = document.getElementsByClassName("modal-content")[0];
    let nom = document.createElement("input");
    let prenom = document.createElement("input");
    let password = document.createElement("input");
    password.setAttribute("type", "password");
    let nomTexte = document.createElement("p");
    nomTexte.textContent = "nom";
    let prenomTexte = document.createElement("p");
    prenomTexte.textContent = "prenom";
    let passwordTexte = document.createElement("p");
    passwordTexte.textContent = "password";
    let div = document.getElementById("confirmerPassword");

    div.append(passwordTexte);
    div.append(password);
    modalContent.prepend(prenom);
    modalContent.prepend(prenomTexte);
    modalContent.prepend(nom);
    modalContent.prepend(nomTexte);
    let btn = document.createElement("button");
    btn.textContent = "Confirmer";
    modalContent.append(btn);
    let connection = document.getElementById("connection");
    connection.style.display = "none";
    createAccount.style.display = "none";
    let br = document.getElementsByClassName("br");
    btn.onclick = function () {
        modal.style.display = "none";
        passwordTexte.remove();
        password.remove();
        prenomTexte.remove();
        nom.remove();
        prenom.remove();
        nomTexte.remove();
        connection.style.display = "inline-block";
        createAccount.style.display = "inline-block";
        btn.remove();
    };
    // When the user clicks anywhere outside of the modal, close it


});

window.onclick = function (e) {
    if (e.target == modal) {
        modal.style.display = "none";
    }
};