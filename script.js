let sad = document.getElementById('sad');
let output = document.getElementById('output');
let sadQo = [
    "احبك اكثر من اي شيء",
    "Sadness is not depression",
    "Have confidence that things will improve. You need to trust that your sad feelings will lessen with time and effort.",
    "Do things that you enjoy and that are good for you.",
    "Tackle one problem at a time. It doesn’t matter if you start with the biggest or smallest problem, just make a list and begin",
    "try Writing your thoughts in a diary",
    "is part of life’s regular ups and downs, but it is not constant",
    "sadness is a valid emotion, and can be overcome.",
    "this will pass i promise",
    "i am always by your side ",
    "i love you",
    "every thing will be okay just give it time",
];
sad.addEventListener('click',function(){
let randomSad = Math.floor(Math.random()* (sadQo.length));
document.getElementById('output').innerHTML=sadQo[randomSad];
});

let happy = document.getElementById('happy');
let output2 = document.getElementById('output');
let happyQo = [
    "bitch you are happy what do you want me to say?",
];
happy.addEventListener('click',function(){
let randomHappy = Math.floor(Math.random()* (happyQo.length));
document.getElementById('output').innerHTML=happyQo[randomHappy];
});

let angry = document.getElementById('angry');
let output3 = document.getElementById('output');
let angeryQo = [
    "Take a bath.",
    "Listen to some music you really like.ميتال مثلا ههههه",
    "اخذي نفس عميق وتذكري ثلاث اشياء ممتنه لها",
    "حاولي تتأملين لو خمس دقايق عشان يهدأ عقلك",
    "Try to pinpoint the exact reasons why you feel angry.",
    "Once you have identified the problem, consider coming up with different strategies for how to remedy the situation.",
    "f you turn your attention elsewhere, it will help you focus on the present moment",
    " count to ten or repeat a phrase that helps you relax. Keep doing so until you feel centered again.",
    "Sometimes all you need is a change in environment ",
    "see if you can think of ways to cut down or cut out the triggers that are making you angry.",
    "Watch a Funny Movie/Show",
    "If you feel extremely angry because of something that’s out of your control,",
];
angry.addEventListener('click',function(){
let randomAngery = Math.floor(Math.random()* (angeryQo.length));
document.getElementById('output').innerHTML=angeryQo[randomAngery];
});

let scared = document.getElementById('scared');
let output4 = document.getElementById('output');
let scaQo = [
    
    "The key to change… is to let go of fear.",
    "Im not afraid of storms, for Im learning how to sail my ship.",
    "Fear keeps us focused on the past or worried about the future. If we can acknowledge our fear, we can realize that right now we are okay. Right now, today, we are still alive, and our bodies are working marvelously. Our eyes can still see the beautiful sky. Our ears can still hear the voices of our loved ones.",
    "Fear is a darkroom where negatives develop",
    "No power so effectually robs the mind of all its powers of acting and reasoning as fear",
    "Fear has a large shadow, but he himself is small.",
];
scared.addEventListener('click',function(){
let randomsc = Math.floor(Math.random()* (scaQo.length));
document.getElementById('output').innerHTML=scaQo[randomsc];
});

let anxious = document.getElementById('anxious');
let output5 = document.getElementById('output');
let anxQo = [
    "you got this",
    "ركزي على اللحظه الحاليه كل شيء غيرها وهم ماله وجود و حرفيا",
    "وش اسوء شيء ممكن يحصل؟",
    "كلها مخاوف بعقلك مالها اي اساس من الصحه ولا بتصير",
    "Trust yourself. You’ve survived a lot, and you’ll survive whatever is coming.",
    "Inner peace begins the moment you choose not to allow another person or event to control your emotions.",
    "Surrender to what is. Let go of what was. Have faith in what will be.",
    "Maybe it’s not always about trying to fix something broken. Maybe it’s about starting over and creating something better.",
    "You will never be free until you free yourself from the prison of your own false thoughts.",
    "Let go of fear",
    "I promise you nothing is as chaotic as it seems",
    "Nothing is worth poisoning yourself into stress, anxiety, and fear",
];
anxious.addEventListener('click',function(){
let randomAnx = Math.floor(Math.random()* (anxQo.length));
document.getElementById('output').innerHTML=anxQo[randomAnx];
});
