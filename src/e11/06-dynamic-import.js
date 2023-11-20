// from index.html ->
const button = document.getElementById('btn');

button.addEventListener('click', async function () {
    //The module import is happening only on execution
    const module = await import('./module.js');
    console.log(module);
    module.hello();
})