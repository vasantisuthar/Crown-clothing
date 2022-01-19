import React from "react";
import { useParams } from "react-router-dom";
import { selectCollection } from "../../redux/shop/shop.selectors";
import './collection.styles.css';
import { useSelector } from 'react-redux'
 import CollectionItem from "../../components/collection-item/collection-item.component";

const CollectionPage = () => {
    
    let params = useParams();
    const collection = useSelector(selectCollection(params.categoryId))
    // const {title, items} = collection;
    return ( 
        <div className="collection-page"> 
            <h2 className="title">{collection.title}</h2>
            <div className="items">
                {
                    collection.items.map(item => <CollectionItem key={item.id} item={item}/>)
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
