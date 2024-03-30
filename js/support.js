window.addEventListener("DOMContentLoaded", (event) => {
document.getElementById('oceanwise').addEventListener('click', () => {
    document.getElementById('oceanwisesection').style.visibility = 'visible';
    document.getElementById('oceanwisesection').style.display = 'unset';
    document.getElementById('oceanconservancysection').style.visibility = 'hidden';
    document.getElementById('oceanconservancysection').style.display = 'none';
    document.getElementById('treesforthefuturesection').style.visibility = 'hidden';
    document.getElementById('treesforthefuturesection').style.display = 'none';
    document.getElementById('arbordayfoundationsection').style.visibility = 'hidden';
    document.getElementById('arbordayfoundationsection').style.display = 'none';
})
document.getElementById('oceanconservancy').addEventListener('click', () => {
    document.getElementById('oceanwisesection').style.visibility = 'hidden';
    document.getElementById('oceanwisesection').style.display = 'none';
    document.getElementById('oceanconservancysection').style.visibility = 'visible';
    document.getElementById('oceanconservancysection').style.display = 'unset';
    document.getElementById('treesforthefuturesection').style.visibility = 'hidden';
    document.getElementById('treesforthefuturesection').style.display = 'none';
    document.getElementById('arbordayfoundationsection').style.visibility = 'hidden';
    document.getElementById('arbordayfoundationsection').style.display = 'none';
})
document.getElementById('treesforthefuture').addEventListener('click', () => {
    document.getElementById('oceanwisesection').style.visibility = 'hidden';
    document.getElementById('oceanwisesection').style.display = 'none';
    document.getElementById('oceanconservancysection').style.visibility = 'hidden';
    document.getElementById('oceanconservancysection').style.display = 'none';
    document.getElementById('treesforthefuturesection').style.visibility = 'visible';
    document.getElementById('treesforthefuturesection').style.display = 'unset';
    document.getElementById('arbordayfoundationsection').style.visibility = 'hidden';
    document.getElementById('arbordayfoundationsection').style.display = 'none';
})
document.getElementById('arbordayfoundation').addEventListener('click', () => {
    document.getElementById('oceanwisesection').style.visibility = 'hidden';
    document.getElementById('oceanwisesection').style.display = 'none';
    document.getElementById('oceanconservancysection').style.visibility = 'hidden';
    document.getElementById('oceanconservancysection').style.display = 'none';
    document.getElementById('treesforthefuturesection').style.visibility = 'hidden';
    document.getElementById('treesforthefuturesection').style.display = 'none';
    document.getElementById('arbordayfoundationsection').style.visibility = 'visible';
    document.getElementById('arbordayfoundationsection').style.display = 'unset';
})
document.getElementById('openoceanwise').addEventListener('click', () => {
    window.open('https://ocean.org', '_blank')
})
document.getElementById('openoceanconservancy').addEventListener('click', () => {
    window.open('https://oceanconservancy.org', '_blank')
})
document.getElementById('opentreesforthefuture').addEventListener('click', () => {
    window.open('https://trees.org', '_blank')
})
document.getElementById('openarbordayfoundation').addEventListener('click', () => {
    window.open('https://arborday.org', '_blank')
})
});