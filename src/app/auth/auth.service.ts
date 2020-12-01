import { Injectable } from '@angular/core';
import { User } from '../user';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from  "@angular/router";
import  firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  afAuth: any;

  user:any;
  userInfo:User
  constructor(private db :AngularFirestore) { }

  signUpUser(user){

    let message = ""
    firebase.auth().createUserWithEmailAndPassword(user.email, user.password).catch((error) =>{
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      message = errorMessage
      console.log(errorMessage);

    }).then( results =>{
      console.log(results);
      if(results){
        message = "successfully registered"
        firebase.database().ref('customers/' + results.user.uid).set({
          firstName: user.firstName,
          email: user.email,
          lastName:user.lastName,
          password:user.password
          
        });
        console.log(message);
      
      }else{
       
      }
      
    });
    
  }
signInUser(email,password){
  let user :any
  let message = ""
  firebase.auth().signInWithEmailAndPassword(email, password).catch((error) =>{
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    message = errorMessage
    console.log(errorMessage);
    // ...
  }).then(result =>{
    user = result


    if(user){
      message = user.user.email + " has successfully logged in"
      console.log(message);
    }else{
      
      console.log(message);
    }
    
    return user.user.email
  });
 
}
resetPassword(email: string) {
  const fbAuth = firebase.auth();

  return fbAuth.sendPasswordResetEmail(email)
    .then(() => console.log('sent Password Reset Email!'))
    .catch((error) => console.log(error))
}

logout(){
  firebase.auth().signOut().then(()  =>{
    // Sign-out successful.
    console.log("Sign-out successful.");
    
  }).catch(function(error) {
    console.log(error);
    
  });
}

getCurrentUser(){
   
  firebase.auth().onAuthStateChanged((user) =>{
    if (user) {
      var userId = user.uid;
     firebase.database().ref('/customers/' + userId).once('value').then( userProfile =>{
        this.userInfo = new User (userProfile.val().firstName, userProfile.val().lastName, userProfile.val().email)
        console.log(this.userInfo);
        // return userInfo
      })
    } else {
      console.log("user not logged in");
      
    }
  });

}
}
  


