import React from "react";
import CollectionItem from "../collection-item/collection-item.component";
import './previewCollection.styles.css';

const PreviewCollection = ({title,items}) => {
   return(
        <div className="collection-preview">
            <h1 className="title">{title.toUpperCase()}</h1>
            <div className="preview">
                {items.filter((item, idx) =>idx < 4).map(({id, ...otherItems}) => (
                    <CollectionItem key ={id} {...otherItems}/>
                ))}
            </div>
        </div>
   )
}

export default PreviewCollection;