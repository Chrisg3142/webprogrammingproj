const inputnums = document.querySelectorAll('.likebuttons'); 
inputnums.forEach((container) => { 
    // get buttons and give value
    const plus = container.querySelector('.like');
    const showNumber = container.querySelector('.display');
    
    //const plus = inputDiv.querySelector(`#like${index}`);
    //const showNumber = inputDiv.querySelector(`#display${index}`);
    showNumber.setAttribute('readonly', true)
    let isliked = false;
    //make function to for changing values
    plus.addEventListener('click', () => { 
        isliked = !isliked;

        if (isliked){
            let currentValue = parseInt(showNumber.value); 
            showNumber.value = currentValue +1;
            plus.textContent = 'Liked'
            plus.style.backgroundColor = 'rgb(245, 60, 60)';
        } else {
            let currentValue = parseInt(showNumber.value); 
            if (currentValue > 0) { 
                showNumber.value = currentValue - 1; 
                plus.textContent = 'Like'
                plus.style.backgroundColor = 'skyblue'
            }; 
        }
     });
});

    
    