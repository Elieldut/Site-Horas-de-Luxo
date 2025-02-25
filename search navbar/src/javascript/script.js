const searchinput = document.getElementById('isearch');

searchinput.addEventListener('input',(event) => {
    const value = event.target.value;

    const items = document.querySelectorAll('.items .items');

    items.forEach(item => {
        if(formatString(item.textContent).indexof(value)!== -1){
            item.style.display = 'flex';
        } else{
            item.style.display = 'none';
        }
    })
});

function formatString(value){
    return value
    .toLowerCase()
    .trim();

}