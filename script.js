let slider = document.getElementById("myRange");
let output = document.getElementById("value");
let valueChange = document.querySelector("b");
let priceRange = document.querySelector(".amount");


slider.addEventListener("mousemove", function(){
    let x = slider.value;
    let color = `linear-gradient(90deg, var( --slider-background) ${x}%, var(--empty-slider-bar) ${x}%)`;
    slider.style.backgroundImage = color;
    if(x == 10){
        console.log(x);
        valueChange.innerHTML = "10k";
        priceRange.innerHTML = 8;
    }else if(x == 30){
        console.log(x);
        valueChange.innerHTML = "50k";
        priceRange.innerHTML = 12;
    }else if(x == 50){
        console.log(x);
        valueChange.innerHTML = "100k";
        priceRange.innerHTML = 16;
    }else if(x == 70){
        console.log(x);
        valueChange.innerHTML = "500k";
        priceRange.innerHTML = 24;
    }else if(x == 100){
        console.log(x);
        valueChange.innerHTML = "1M";
        priceRange.innerHTML = 36;
    };
    // console.log(x)
    // console.log(color);
});

