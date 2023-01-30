// dropdown Latest
const containerDdLatest = document.querySelector('.containerDdLatest');
const btnLatest = document.querySelector('.btnLatest');

btnLatest.addEventListener('mouseover', function () {
    containerDdLatest.style.display = 'block';
    containerDdBlog.style.display = 'none';
    containerDdPages.style.display = 'none';
});

btnLatest.addEventListener('mouseout', function () {
    containerDdLatest.style.display = 'block';
});

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

btnBlog.addEventListener('mouseover', function () {
    containerDdBlog.style.display = 'block';
    containerDdPages.style.display = 'none';
    containerDdLatest.style.display = 'none';
});

btnBlog.addEventListener('mouseout', function () {
    containerDdBlog.style.display = 'block';
});

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

btnPages.addEventListener('mouseover', function () {
    containerDdPages.style.display = 'block';
    containerDdBlog.style.display = 'none';
    containerDdLatest.style.display = 'none';
});

btnPages.addEventListener('mouseout', function () {
    containerDdPages.style.display = 'block';
});

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

let modeBlanc = true;

boule.addEventListener('click', () => {
    modeBlanc = !modeBlanc;

    document.body.style.backgroundColor = modeBlanc ? 'black' : 'white';
    barre.style.backgroundColor = modeBlanc ? 'firebrick' : 'rgb(135, 206, 235)'
    containerT.style.borderColor = modeBlanc ? 'firebrick' : 'rgb(135, 206, 235)'
    containerT.style.borderWidth = modeBlanc ? '1px' : '1.5px'
    barre.style.borderColor = modeBlanc ? 'firebrick' : 'black'
    barre.style.justifyContent = modeBlanc ? 'right' : 'left'
    boule.style.right = modeBlanc ? '-1px' : '1px'
    input.style.backgroundColor = modeBlanc ? 'rgba(178, 34, 34, 0.765)' : 'rgb(135, 206, 235)'
    input.style.boxShadow = modeBlanc ? '0 0 0 1px white' : '0 0 0 1px black';

    for (let i = 0; i < paragraphs.length; i++) {
        paragraphs[i].style.borderColor = modeBlanc ? 'white' : 'black'
        paragraphs[i].style.borderWidth = modeBlanc ? '1px' : '1.5px'
        paragraphs[i].style.color = modeBlanc ? 'firebrick' : 'black'
        paragraphs[i].style.backgroundColor = modeBlanc ? 'black' : 'rgb(135, 206, 235)'
    }
    boule.style.float = modeBlanc ? 'right' : 'left'
});