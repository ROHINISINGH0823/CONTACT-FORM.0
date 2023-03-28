var firebaseConfig = {
    apiKey: "AIzaSyCvSxH1p1TLdJQSVJBxCUAAiU9GZBffqvw",
    authDomain: "contactform-a20c2.firebaseapp.com",
    projectId: "contactform-a20c2",
    storageBucket: "contactform-a20c2.appspot.com",
    messagingSenderId: "1059668681323",
    appId: "1:1059668681323:web:d5622c93a0ea7b5087072e"
  };
  firebase.initializeApp(firebaseConfig);
  var firestore= firebase.firestore()

  const db= firestore.collection("formdata")

 let submitButton = document.getElementById('submit')

 submitButton.addEventListener("click",(e)=>
 {
    e.preventDefault()

    let firstName=document.getElementById('name').value
    let email=document.getElementById('email').value
    let number=document.getElementById('PHONENUMBER').value
    let mess=document.getElementById('mess').value


    db.doc().set({
        name:firstName,
        email:email,
        PHONENUMBER:number
    }).then(()=>
    {
        console.log("Data saved")
    }).catch((error)=>{
        console.log(error)
    })

 })