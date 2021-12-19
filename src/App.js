import React from 'react';
import {Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/header/header.component';
import HomePage from './pages/homePage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignIn from './pages/sign-in-and-sign-up/sign-in-sign-up.component';
import {doc, onSnapshot} from 'firebase/firestore' 
import {db,auth, createUserProfileDocument} from './firebase/firebase.utils'
class App extends React.Component{
  constructor(){
    super();

    this.state = {
      currentUser : null
    }
  }

  unsubscribeFromAuth = null;
  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async user =>{
      if(user){
        await createUserProfileDocument(user)
        onSnapshot(doc(db, "users", user.uid), (doc) => {
          this.setState({
            currentUser: {
              id: doc.id,
              ...doc.data()
            }
          })
          console.log(this.state.currentUser)
        });
      }else{
        this.setState({currentUser:user})
      }
      
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

render() {
  return (
    <div className="App">
    <Header currentUser={this.state.currentUser}/>
      <Routes>
        <Route  exact path="/" element={<HomePage />} />
        <Route exact path="/shop" element={<ShopPage/>} />
        <Route exact path="/signin" element={<SignIn/>}/>
      </Routes>
    </div>
  );
}
}
export default App;
