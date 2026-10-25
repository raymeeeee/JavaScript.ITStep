document.addEventListener("DOMContentLoaded", function(){
    document.f1.search.addEventListener("change",  function(){
        console.log(this.value)
        console.log(window.location)

        //location.replace(this.value)
        location.href = this.value
        
    })

    let pic = document.getElementById("pic")
    document.f2.choosePic.addEventListener("change", function(){
        pic.src = this.value
        pic.title = this.options[this.selectedIndex].textContent
    })

    let textarea = document.getElementsByName("info")[0]
    document.f3.addEventListener("submit", function(event){
        if (textarea.value.length < 10) {
            alert("length<10")
            event.preventDefault();
            return 0;
        }

    })

    
    let end_price = document.getElementById("end_price"),
    tr = document.querySelectorAll('#edu_table tr'),
    form = document.forms['edu_options'];

    function showPrice(){
        let sum = 0, price = [0,0,0,0];
        for(let i=1, len = tr.length-1; i<len; i++){
            for(let j=0; j<2; j++){
                // console.log(form.elements['edu_lang'+i][j].dataset.price)
                if(form.elements['edu_type'+i][j].checked) price[i]+=+form.elements['edu_type'+i][j].dataset.price;
                if(form.elements['edu_lang'+i][j].checked) price[i]+=+form.elements['edu_lang'+i][j].dataset.price;
            }
            form.elements['edu_price'+i].value = price[i];
            sum+=price[i];
        }
        end_price.innerText = sum;
    }
    showPrice();

    for(let elem of form.elements){
        if(elem.type == 'radio') elem.addEventListener('click', showPrice)
    }
})