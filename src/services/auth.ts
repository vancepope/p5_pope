import firebase from 'firebase';

export class AuthService{
    signup(name: string, email: string, phone: string, username: string, password: string){
        return firebase.auth().createUserAndRetrieveDataWithEmailAndPassword(email,password);
    }
    signin(email: string, password: string){
        return firebase.auth().signInWithEmailAndPassword(email,password);
    }
    logout(){
        firebase.auth().signOut();
    }
    getActiveUser(){
        return firebase.auth().currentUser;
    }
}