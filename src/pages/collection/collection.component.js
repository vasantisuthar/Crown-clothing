import React from "react";
import { useParams } from "react-router-dom";
import { selectCollection } from "../../redux/shop/shop.selectors";
// import { connect } from "react-redux";
// import collectionItemComponent from "../../components/collection-item/collection-item.component";
import './collection.styles.css';
import { useSelector } from 'react-redux'
 
// import { createStructuredSelector } from "reselect";
import CollectionItem from "../../components/collection-item/collection-item.component";

const CollectionPage = () => {
    
    let params = useParams();
    const collection = useSelector(selectCollection(params.categoryId))
    const {title, items} = collection;
    return ( 
        <div className="collection-page"> 
            <h2 className="title">{title}</h2>
            <div className="items">
                {
                    items.map(item => <CollectionItem key={item.id} item={item}/>)
                }
            </div>
            {/* <h3>{params.categoryId}</h3> */}
        </div>
     );
}
 
// const mapStateToProps = (state, ownProps) => createStructuredSelector({
//     collection:selectCollection(ownProps.params.categoryId)(state)
// })
export default CollectionPage;
