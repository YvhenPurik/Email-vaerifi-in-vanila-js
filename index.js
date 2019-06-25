 /**
  * Dfkblfwbz bvtqkf
  * 
  * @param {string} inpData - содержимое инпута Email
  * @param {DomNode} btn - Кнопка по которой отправляем fetch c содержимым инпута
  * @param {string} access_key - ключ к API
  * @param {DomNode} small - содержимое тега small для ответа валидации
  */



        let inpData = document.getElementById('input')
        let btn = document.getElementById('btn')
        let small = document.getElementById('small')
        btn.addEventListener('click',()=>{

            if(inpData.value === ''){
              document.getElementById('small').innerHTML = 'Email cannot be empty'
              document.getElementById('small').style.color = "red";
            }else{
                document.getElementById('small').innerHTML = 'mailboxlayer.com API'
                document.getElementById('small').style.color = "grey";
                console.log(inpData.value)
                let access_key = '333d64ccc8ad0d0051adf39d6ed460fc';
                let email_address = inpData.value;

                fetch('https://apilayer.net/api/check?access_key=' + access_key + '&email=' + email_address, {method: 'POST', dataType: 'jsonp',}
                    ).then(function(response) {
                let contentType = response.headers.get("content-type");
                if(contentType && contentType.includes("application/json")) {
                  return response.json();
                }
                throw new TypeError("Oops, we haven't got JSON!");
              })
              .then(function(json) {  

                if(json.format_valid === false){
                   document.getElementById('small').innerHTML = 'Email not valid'
                   document.getElementById('small').style.color = "red";
                }else if(json.format_valid === true){
                   document.getElementById('small').innerHTML = 'Email valid'
                   document.getElementById('small').style.color = "green";
                }
                console.log(json.format_valid);//Response valid
                console.log(json.smtp_check);
                console.log(json.score);
                console.log(json);

             }).catch(function(error) { console.log(error); });


              $(document).ready(function() {
                let $click = $('.clickhere');
                $click.mbClicker({
                        size: 300, //Maximum size of circle
                        speed: 750, //Time of animation in miliseconds
                        colour: 'rgba(0,0,0,0.11)', //Colour of circle and shadow
                        shadow: false, //Whether or not to have a shadow on the circle
                        buttonAnimation: true //Only use if button doesn't have a style attribute
                });
            });


            }
             
})



