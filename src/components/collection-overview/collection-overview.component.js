import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import PreviewCollection from "../preview-collection/previewCollection.component";
import { selectCollectionForPreview } from "../../redux/shop/shop.selectors";
import './collection-overview.styles.css';

const CollectionOverview = ({collections}) =>{
    return(
    <div className="collections-overview">
        {
            collections.map(({id, ...otherCollections}) =>(
                        <PreviewCollection key= {id} {...otherCollections}/>
            ))
        }
    </div>
    )

}

const mapStateToProps = createStructuredSelector({
    collections : selectCollectionForPreview
})

export default connect(mapStateToProps)(CollectionOverview);