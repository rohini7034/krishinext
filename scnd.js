 
 const firebaseConfig = {
    apiKey: "AIzaSyA2m3QXzI5ohB_dkEhUcKcLe_ItnYcThm8",
    authDomain: "project-4feef.firebaseapp.com",
    databaseURL: "https://project-4feef-default-rtdb.firebaseio.com",
    projectId: "project-4feef",
    storageBucket: "project-4feef.firebasestorage.app",
    messagingSenderId: "828580321300",
    appId: "1:828580321300:web:d49d7440acb98a08a5af01"
  };

// Initialize Firebase
  const app = initializeApp(firebaseConfig);

  let contactInfo = firebase.database().ref("infos");
  
  document.querySelector(".form-container").addEventListener("submit",submitForm);
  
  function submitForm(e) {
    e.preventDefault(); // refresh
  
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
   
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);
  
    
    alert('Thank you for your message!');
  
    // Reset the form fields
    e.target.reset();
  
    // Return false to ensure no default form submission happens
    return false;
  
    saveContactInfo(name,email,message);
   
  }
  
  
  function saveContactInfo(name,email,message) {
    let newContactInfo = contactInfo.push();//push to firebase
  
    newContactInfo.set({
      name:name,
      email:email,
      message:message
  
    })
    
  }
   