let valikkokuva2 = document.getElementById('valikkokuva2');
let navigointivalikko = document.getElementById('navigointivalikko');

valikkokuva2.addEventListener('click', avaaMobiilivalikko);


function avaaMobiilivalikko() {
    navigointivalikko.classList.toggle('open');
    
   
    if (navigointivalikko.style.display === 'block') {
        navigointivalikko.style.display = 'none';
      
    } else {
        navigointivalikko.style.display = 'block';
    }
}