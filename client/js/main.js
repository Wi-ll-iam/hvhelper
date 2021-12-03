var csInterface = new CSInterface();

var testButton = document.getElementById('testButton');
testButton.addEventListener('click', test);

function test() {
    csInterface.evalScript("alert('hello world')");
};
