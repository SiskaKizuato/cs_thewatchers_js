// selectors en vrac
const foam = document.querySelector('.foam');
const s4P2Text = document.querySelector('.s4P2Text')

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
})

midNavBtnBlog.addEventListener('mouseout', function () {
    containerDdBlog.style.display = 'none'
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
})

midNavBtnPages.addEventListener('mouseout', function () {
    containerDdPages.style.display = 'none'
})

containerDdPages.addEventListener('mouseover', function () {
    containerDdPages.style.display = 'block';
    containerDdBlog.style.display = 'none';
    containerDdLatest.style.display = 'none';
});
containerDdPages.addEventListener('mouseout', function () {
    containerDdPages.style.display = 'none';
});

// selectors en vrac


const footerIconW = document.querySelectorAll('#footerIconW')
const footerIconR = document.querySelectorAll('#footerIconR')
const footerIconB = document.querySelectorAll('#footerIconB')

const titreFooter = document.querySelectorAll('.titreFooter')
let header = document.getElementsByTagName("header")
let nav = document.getElementsByTagName("nav")


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

    // section 3
    foam.style.color = modeBlanc ? 'rgba(0, 0, 0, 0.856)' : 'white'
    s4P2Text.style.color = modeBlanc ? 'rgb(112, 111, 111)' : 'white'

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


// link page 1
document.querySelectorAll('.goBack')[0].addEventListener("click", function () {
    window.location.assign("../../index.html");
});


// section 4 
// input retirer le texte
const inputS4P2 = document.querySelector('.inputS4P2');
const btnInputS4P2 = document.querySelector('.btnInputS4P2')
inputS4P2.classList.add("input-text-white");


inputS4P2.addEventListener('focus', function () {
    inputS4P2.placeholder = '';
});
inputS4P2.addEventListener('mouseout', function () {
    inputS4P2.placeholder = 'Enter your mail';
});
btnInputS4P2.addEventListener("click", function () {
    let value = inputS4P2.value;
    console.log("L'utilisateur a entré :", value);

    if (!value.includes("@") || !value.includes(".")) {
        inputS4P2.value = "That's not a email!";
        setTimeout(function () {
            inputS4P2.value = "";
            inputS4P2.placeholder = 'Enter your mail';
        }, 1000);
        return;
    } else {
        inputS4P2.value = "";
        inputS4P2.placeholder = 'Thanks  for sharing your mail';
        setTimeout(function () {
            inputS4P2.value = "";
            inputS4P2.placeholder = 'Enter your mail';
        }, 1000);
        return;
    }
});

// carrousel
document.body.onload = function () {
    let nbr = 3;
    let p = 0;
    let containerCarrousel = document.getElementById("containerCarrousel");
    let g = document.getElementById("g");
    let d = document.getElementById("d");
    containerCarrousel.style.width = (945 * nbr) + "px";
    for (let i = 1; i <= nbr; i++) {
        let div2 = document.createElement("div");
        div2.className = "photo";
        div2.style.backgroundImage = "url('../img/carousel" + i + ".png')";
        containerCarrousel.appendChild(div2);
    }
    g.onclick = function () {
        if (p > -(nbr - 1)) {
            p--;
            containerCarrousel.style.transform = "translate(" + p * 945 + "px)";
            containerCarrousel.style.transition = "all 0.5s ease";
        } else {
            p = 0;
            containerCarrousel.style.transform = "translate(" + p * 945 + "px)";
            containerCarrousel.style.transition = "all 0.5s ease";
        }
    }
    d.onclick = function () {
        if (p < 0) {
            p++;
            containerCarrousel.style.transform = "translate(" + p * 945 + "px)";
            containerCarrousel.style.transition = "all 0.5s ease";
        } else {
            p = -(nbr - 1);
            containerCarrousel.style.transform = "translate(" + p * 945 + "px)";
            containerCarrousel.style.transition = "all 0.5s ease";
        }
    }
}

// section 3 

const boxPlus = document.querySelector('.boxPlus');
const boxMoins = document.querySelector('.boxMoins');
const quantity = document.querySelector('#quantity');
const prixP2 = document.querySelector('.prixP2');
const containerBtnS3P2 = document.querySelector('.containerBtnS3P2');

let quantiteTotale;
let total;

boxPlus.addEventListener('click', function () {
    let currentQuantity = parseInt(quantity.textContent);
    currentQuantity++;
    quantity.textContent = currentQuantity;

    let currentPrix = parseInt(prixP2.textContent.slice(1));
    currentPrix += 5;
    prixP2.textContent = '$' + currentPrix;
});

boxMoins.addEventListener("click", function () {
    if (parseInt(quantity.innerHTML) > 0) {
        quantity.innerHTML = parseInt(quantity.innerHTML) - 1;

        let currentPrix = parseInt(prixP2.textContent.slice(1));
        currentPrix -= 5;
        prixP2.textContent = '$' + currentPrix;
    }
});

containerBtnS3P2.addEventListener('click', function () {
    quantiteTotale = parseInt(quantity.textContent);
    total = parseInt(prixP2.textContent.slice(1));
    console.log("quantite : "+quantiteTotale,"; total : $"+total);
});



// btnUp et nav fixed
let mybutton = document.getElementById("myBtn");

window.onscroll = function() {
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