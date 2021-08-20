function explain_callback(name,age,task){
        console.log('Hello',name);
        console.log('Your Age',age);
        task();
}

function washhand(){
    console.log('Wash hand with Soap');
}
function takeShower(){
    console.log('take shower');
}
function scrollFacebook(){
    console.log('Scroll Facebook but do not like any post');
}

explain_callback('Sagir',17,washhand);
explain_callback('Mugir',16,takeShower);
explain_callback('jugir',15,scrollFacebook);