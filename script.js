 var screen=document.querySelector('#screen');
    var btn=document.querySelectorAll('.btn');

    /*For getting the value of btn, use for loop*/
    for(item of btn)
    {
        item.addEventListener('click',(e)=>{
            btntext=e.target.innerText;

            if(btntext =='×')
            {
                btntext= '*';
            }

            if(btntext=='÷')
            {
                btntext='/';
            }
            screen.value+=btntext;
        });
   }


    function e()
    {
        screen.value=2.71828182846;
    }

   

    function back()
    {
        screen.value=screen.value.substr(0,screen.value.length-1);
    }
