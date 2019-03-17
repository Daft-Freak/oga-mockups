import * as sapper from '../__sapper__/client.js';

sapper.start({
	target: document.querySelector('#sapper')
});

// a little hacky
if(new URLSearchParams(location.search).has("dark"))
	document.body.classList.add("dark-mode");