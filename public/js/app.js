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

