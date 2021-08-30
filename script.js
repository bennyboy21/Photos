var ImgName, ImgUrl
var files = []
var reader;

var ImgCount = 0;

const firebaseConfig = {
    apiKey: "AIzaSyAp9nxb2iAkYRw31T72dIFLnI0pHPQZtIY",
    authDomain: "photo-grabber.firebaseapp.com",
    projectId: "photo-grabber",
    storageBucket: "photo-grabber.appspot.com",
    messagingSenderId: "1040450755611",
    appId: "1:1040450755611:web:4c559ad792806325836cbe",
    measurementId: "G-CPYPKKJH8S"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig)


// document.getElementById('select').onclick = function(e) {

//     var input = document.createElement('input');
//     input.type = 'file';

//     input.onchange = e => {
//         files = e.target.files;
//         reader = new FileReader();
//         reader.onload = function(){
//             document.getElementById("myimg").src = reader.result;
//         }
//         reader.readAsDataURL(files[0]);
//     }
//     input.click();



//     document.getElementById('upload').onclick = function(){
//         var uploadTask = firebase.storage().ref('Image/'+ImgCount+".png").put(files[0]);

//         uploadTask.on('state_changed', function(snapshot){
//             // var progress = snapshot.bytesTranferred / snapshot.totalBytes * 100;
//             // document.getElementById('upProgress').innerHTML = 'Upload'+progress+'%';
//         },
//         function(error){
//             alert('error in saving image')
//         },
        
//         function(){
//             uploadTask.snapshot.ref.getDownloadURL().then(function(url){
//                 ImgUrl = url;

//                 firebase.database().ref('Pictures/'+ImgCount).set({
//                     Name: ImgCount,
//                     Link: ImgUrl
//                 });
//             alert('image added successfully')
//             ImgCount++;
//             }
//             );
//         });
//     }
// }

document.getElementById('retrieve').onclick = function(){
    var randomNumber = Math.floor(Math.random() * (49 - 0 + 1)) + 0;
    ImgName = randomNumber
    firebase.database().ref('Pictures/'+ImgName).on('value', function(snapshot){
        document.getElementById('myimg').src = snapshot.val().Link;
        console.log(snapshot.val().Link)
    });
    console.log(randomNumber)
}