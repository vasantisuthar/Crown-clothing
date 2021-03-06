import React from 'react';
import {Routes, Route , Navigate} from 'react-router-dom';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';
import './App.css';
import Header from './components/header/header.component';
import HomePage from './pages/homePage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import {doc, onSnapshot} from 'firebase/firestore' 
import {db,auth, createUserProfileDocument, addCollectionAndDocuments} from './firebase/firebase.utils'
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-sign-up.component';
import {selectCurrentUser} from './redux/user/user.selector'
import {createStructuredSelector} from 'reselect'
import CheckoutPage from './pages/checkout/checkout.component';
import { selectCollectionForPreview } from './redux/shop/shop.selectors';
// import CategoryPage from './pages/collection/collection.component';
class App extends React.Component{

  unsubscribeFromAuth = null;
  
  componentDidMount(){

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async user =>{
      if(user){
        await createUserProfileDocument(user)
        onSnapshot(doc(db, "users", user.uid), (doc) => {
            this.props.setCurrentUser({
              id: doc.id,
              ...doc.data()
            })
        });
      }else{
        setCurrentUser(user)
      }
      
      addCollectionAndDocuments('collections', this.props.collectionsArray.map(({title, items}) => ({title, items})))
      
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

render() {

  return (
    <div className="App">
    <Header/>
      <Routes>

        <Route path="/" element={<HomePage />} />
        <Route path="shop/*" element={<ShopPage/>} />
        <Route path="/checkout" element={<CheckoutPage/>} />
        <Route path="/signin" element={this.props.currentUser ? (<Navigate replace to="/" />) : (<SignInAndSignUp />)
    }
/> 
    </Routes>
    </div>
  );
}
}

const mapStateToProps = createStructuredSelector ({
  currentUser : selectCurrentUser,
  collectionsArray : selectCollectionForPreview
})

const mapDispatchToProps = dispatch =>({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})
export default connect(mapStateToProps,mapDispatchToProps)(App);
