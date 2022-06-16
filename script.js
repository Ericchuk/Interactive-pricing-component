let slider = document.getElementById("myRange");
let output = document.getElementById("value");
output.innerHTML = slider.value;

slider.oninput = function(){
    output.innerHTML = this.value;
}

slider.addEventListener("mousemove", function(){
    let x = slider.value;
    let color = `linear-gradient(90deg, var(--full-slider-bar) ${x}%, var(--empty-slider-bar) ${x}%)`;
    slider.style.backgroundImage = color;
    console.log(x)
    console.log(color);
});

