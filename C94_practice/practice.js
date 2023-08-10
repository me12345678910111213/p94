
//ADD YOUR FIREBASE LINKS
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAJU7QsA6Jw5EGIicrLu7j0xdwDrNgFo_s",
    authDomain: "class-test-a70da.firebaseapp.com",
    projectId: "class-test-a70da",
    storageBucket: "class-test-a70da.appspot.com",
    messagingSenderId: "358458093457",
    appId: "1:358458093457:web:1831607bc003f20fbeb430"
  };

function addUser()
{
    user_name = document.getElementById("user_name").value; 
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
}