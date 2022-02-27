import React from "react";
import { useParams } from "react-router-dom";
import { selectCollection } from "../../redux/shop/shop.selectors";
import './collection.styles.css';
import { useSelector } from 'react-redux'
import CollectionItem from "../../components/collection-item/collection-item.component";

const CollectionPage = () => {
    
    let params = useParams();
    const collection = useSelector(selectCollection(params.categoryId))
    return ( 
        <div className="collection-page"> 
            <h2 className="title">{collection.title}</h2>
            <div className="items">
                {
                    collection.items.map(item => <CollectionItem key={item.id} item={item}/>)
                }
            </div>
        </div>
    );
}

export default CollectionPage;
