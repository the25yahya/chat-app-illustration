//variables 
const options = document.querySelector('.options');
const price = document.querySelectorAll('.price')
const check1 = document.querySelector('.check1');

const  checked1 = document.createElement('p');
     checked1.innerText='nice choice, be there soon!';
     checked1.classList.add('received-msg')

     const checked2 = document.createElement('p');
     checked2.innerText='you truly love here, be there soon!';
     checked2.classList.add('received-msg')


const check2 =document.querySelector('.check2');
const input = document.querySelector('.input');
const camera = document.querySelector('.camera');
const mic = document.querySelector('.vocal');
const image = document.querySelector('.image');
const received = document.querySelectorAll('.received-msg');
const sent = document.querySelectorAll('.sent-msg');
const send = document.querySelector('.send-btn');
const user = document.querySelector('.user-pic');
const usercon = document.querySelector('.user')
const chat = document.querySelector('.chat');
const dropdown = document.querySelector('.dropdown');
const darkbtn = document.querySelector('.darkbtn');
const msgInput = document.querySelector('.msg-input')
let theme = 'light'
let state = 'not checked';
let state2 = 'one is not checked';
let state3 = 'two is not checked';
///////////////////////////////////////


//event listeners 
options.addEventListener('click',showOptions);
send.addEventListener('click',sendMsg);

darkbtn.addEventListener('click',changeTheme);
check1.addEventListener('click', firstOption);
check2.addEventListener('click',secondOption);



//////////////////////////////

//functions 
function showOptions(){
dropdown.classList.toggle('show');
}

function sendMsg(){

const value = input.value;

if (value){

    const newmsg = document.createElement('p');
    newmsg.classList.add('sent-text');
    newmsg.innerText=value;
    chat.append(newmsg);
    input.value='';
}

}
function changeTheme(){
   if (theme === 'light'){
    options.style.color='white'
    checked1.classList.toggle('received-msg-background')
    checked2.classList.toggle('received-msg-background')
    camera.classList.toggle('camera-background');
    mic.classList.toggle('mic-background');
    image.classList.toggle('image-background');
    chat.classList.toggle('chat-background');
    msgInput.classList.toggle('input-background');
    send.classList.toggle('send-background');
    usercon.classList.toggle('user-background');


    received.forEach(function(item){

       item.classList.toggle('received-msg-background');

    })
    price.forEach((item)=> {
        item.classList.toggle('price-background');
    })
    theme = 'dark';
    darkbtn.innerHTML = '<i class="fa-solid fa-sun"></i>'
   }else{
      darkbtn.innerHTML = '<i class="fa-regular fa-moon"></i>';
      theme = 'light'
      options.style.color='black'
      checked1.classList.remove('received-msg-background')
      checked2.classList.remove('received-msg-background')
      camera.classList.remove('camera-background');
      mic.classList.remove('mic-background');
      image.classList.remove('image-background');
      chat.classList.remove('chat-background');
      msgInput.classList.remove('input-background');
      send.classList.remove('send-background');
      usercon.classList.remove('user-background');
  
  
      received.forEach(function(item){
  
         item.classList.remove('received-msg-background');
  
      })
      price.forEach((item)=> {
          item.classList.remove('price-background');
      })

   }
}

function firstOption(){

if (state === 'not checked' && state3 === 'two is not checked'){

    check1.classList.toggle('checked');
    chat.append( checked1)

}
state = 'checked';
state2 = 'one is checked';

}

function secondOption(){

    if (state === 'not checked' && state2 === 'one is not checked'){

        check2.classList.toggle('checked');
        chat.append(checked2)
    
    }
    state = 'checked';
    state3 = 'two is checked'
    

}


////////////////////////////////////////




//click profil pic

//delete msgs 

//options:
//dark mode 
//clear chat 
//media 
//about




//input holder :
//send msgs 
//access gallery to send msgs 
//acces mic to record vocals
//access cam to take photos 


//price 
//click check btn => receive msg : nice choice i'll be there in no time