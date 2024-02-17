const dark=document.getElementById('dark');
const body=document.body;
dark.addEventListener('click',()=>{
    body.classList.toggle('dark-mode');
});
function change(){
    let change=dark.querySelector('i');
    if(body.classList.contains('dark-mode')){
        change.classList.remove("fa-sun");
        change.classList.add("fa-moon");
    }
    else{
        change.classList.remove("fa-moon");
        change.classList.add("fa-sun");
    }
}
document.addEventListener('DOMContentLoaded', function() {
    const text = "Devipriya";
    const delay = 300; // Adjust the delay between each character

    let index = 0;
    const intervalId = setInterval(function() {
        const char = text[index];
        const animateText = document.getElementById('dev');
        animateText.textContent += char;
        index++;

        if (index === text.length) {
            clearInterval(intervalId);
        }
    }, delay);
});