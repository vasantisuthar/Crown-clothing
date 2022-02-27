import React from "react";
import { Route,Routes } from "react-router-dom";
import { connect } from "react-redux";
import CollectionOverview from "../../components/collection-overview/collection-overview.component";
import { UpdateCollections } from "../../redux/shop/shop.actions";
import CollectionPage from "../collection/collection.component";
import { firestore,convertCollectionsSnapshotToMap } from "../../firebase/firebase.utils";
import { getFirestore,collection, onSnapshot } from "firebase/firestore";
import WithSpinner from "../../components/with-spinner/with-spinner.component";

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);
class ShopPage extends React.Component {
    state = {
        loading : true
    };
    
    unsubscribeFromSnapshot = null;

    componentDidMount(){
        const {updateCollection}  = this.props;
        const db = getFirestore();
        const collectionRef = collection(db,'collections');
        onSnapshot(collectionRef, async snapShot => {
            const collectionMap = convertCollectionsSnapshotToMap(snapShot)
            updateCollection(collectionMap)
            this.setState({loading: false});
        })
    }
    render(){
    return(
            <div className="shop-page">
                <Routes>
                    <Route path='/' element={<CollectionOverviewWithSpinner isLoading= {this.state.loading}{...this.props}/>}/>
                    <Route path=':categoryId' element= {<CollectionPageWithSpinner isLoading={this.state.loading} {...this.props}/>}/>
                </Routes>
            </div>

        )
    }
    }

const mapDispatchToProps = dispatch => ({
    updateCollection : collectionsMap => dispatch(UpdateCollections(collectionsMap))
})
export default connect(null,mapDispatchToProps)(ShopPage);