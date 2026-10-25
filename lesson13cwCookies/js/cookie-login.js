// const userName = document.getElementById('userName'),
//  userPass = document.getElementById('userPass'),
//  loginBtn = document.getElementById('loginBtn'),
//  alertDiv= document.querySelector('.alert.alert-primary') ;

// loginBtn.addEventListener('click', function(evt){
// 	evt.preventDefault();
// 	if(userName.value.length <4){
// 		alert("Login mast have 4 and more characters!");
// 		userName.focus();
// 		return false;
// 	}
// 	if(userPass.value.length <4){
// 		alert("Password mast have 4 and more characters!");
// 		userPass.focus();
// 		return false;
// 	}
// 	setCookie('login', userName.value);
// 	setCookie('pass', userPass.value);
// })

// function setCookie(name, value, options = {}) {

//   options = {
//     path: '/',
//     // при необходимости добавьте другие значения по умолчанию
// 		expires: new Date(Date.now() + 259.2e7),
//     ...options
//   };

//   if (options.expires instanceof Date) {
//     options.expires = options.expires.toUTCString();
//   }

//   let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);

//   for (let optionKey in options) {
//     updatedCookie += "; " + optionKey;
//     let optionValue = options[optionKey];
//     if (optionValue !== true) {
//       updatedCookie += "=" + optionValue;
//     }
//   }

//   document.cookie = updatedCookie;
// }


// function getCookie(name) {
//   let arr = document.cookie.split('; ');
// 	let str = undefined;
// 	arr.forEach(item => {
// 		if(item.indexOf(name) > -1){
// 			str = decodeURIComponent(item.slice(item.indexOf('=')+1));
// 		}
// 	})
// 	return str;
// }



// function checkUser(){
//  if(getCookie('login')) {
// 	document.loginForm.hidden = true;
// 	alertDiv.hidden = false;
// 	alertDiv.firstElementChild.textContent = 'Вы зашли с логином '+getCookie('login');
//  } 
// }
// checkUser()








const userName = document.getElementById('userName'),
 userPass = document.getElementById('userPass'),
 loginBtn = document.getElementById('loginBtn'),
 alertDiv= document.querySelector('.alert.alert-primary') ;

loginBtn.addEventListener('click', function(evt){
	evt.preventDefault();
	if(userName.value.length <4){
		alert("Login mast have 4 and more characters!");
		userName.focus();
		return false;
	}
	if(userPass.value.length <4){
		alert("Password mast have 4 and more characters!");
		userPass.focus();
		return false;
	}
	// setCookie('login', userName.value);
	// setCookie('pass', userPass.value);
	Cookies.set('login',  userName.value, { expires: 10 })
	Cookies.set('pass',  userPass.value, { expires: 10 })
})

function setCookie(name, value, options = {}) {

  options = {
    path: '/',
    // при необходимости добавьте другие значения по умолчанию
		expires: new Date(Date.now() + 259.2e7),
    ...options
  };

  if (options.expires instanceof Date) {
    options.expires = options.expires.toUTCString();
  }

  let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);

  for (let optionKey in options) {
    updatedCookie += "; " + optionKey;
    let optionValue = options[optionKey];
    if (optionValue !== true) {
      updatedCookie += "=" + optionValue;
    }
  }

  document.cookie = updatedCookie;
}


function getCookie(name) {
  let arr = document.cookie.split('; ');
	let str = undefined;
	arr.forEach(item => {
		if(item.indexOf(name) > -1){
			str = decodeURIComponent(item.slice(item.indexOf('=')+1));
		}
	})
	return str;
}



function checkUser(){
 //if(getCookie('login')) {
 if(Cookies.get('login')){
	document.loginForm.hidden = true;
	alertDiv.hidden = false;
	alertDiv.firstElementChild.textContent = 'Вы зашли с логином '+Cookies.get('login');
 } 
}
checkUser()