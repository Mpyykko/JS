let valikkokuva2 = document.getElementById('valikkokuva2');

valikkokuva2.addEventListener('click', avaaMobiilivalikko);


function avaaMobiilivalikko() {
    let navigointivalikko = document.getElementById('navigointivalikko');
   
    if (navigointivalikko.style.display === 'block') {
        navigointivalikko.style.display = 'none';
      
    } else {
        navigointivalikko.style.display = 'block';
    }
}