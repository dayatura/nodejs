console.log(__filename);
function print() {
	console.log(__dirname);
}
setTimeout(print, 2000);
setInterval(print, 2000);