
// loading page <=>
const loader = document.getElementById("loader");
window.addEventListener("load", function () {
   loader.style.display = "none";
});

// 100vh form mobile <=>
const documentHeight = () => {
   const doc = document.documentElement
   doc.style.setProperty('--doc-height', `${window.innerHeight}px`)
}
window.addEventListener('resize', documentHeight)
documentHeight()

// sections control
const home = document.getElementById('home');
const secHome = document.getElementById('secHome');
const projects = document.getElementById('projects');
const secProjects = document.getElementById('secProjects');
const contact = document.getElementById('contact');
const secContact = document.getElementById('secContact');

home.onclick = function () {
   secHome.classList.add('active');
   secProjects.classList.remove('active');
   secContact.classList.remove('active');
};
projects.onclick = function () {
   secProjects.classList.add('active');
   secHome.classList.remove('active');
   secContact.classList.remove('active');
};
contact.onclick = function () {
   secContact.classList.add('active');
   secHome.classList.remove('active');
   secProjects.classList.remove('active');
};