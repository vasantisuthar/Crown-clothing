import React from "react";
import { Component } from "react/cjs/react.production.min";
import PreviewCollection from "../../components/preview-collection/previewCollection.component";
import shop_data from "./shop.data";

class ShopPage extends Component{
    constructor(props){
        super(props);

        this.state={
            collections: shop_data
        }
    }

    render(){
        
        return(
            <div className="shop-page">
                {
                    this.state.collections.map(({id, ...otherCollections}) =>(
                        <PreviewCollection key= {id} {...otherCollections}/>
                    ))
                }
            </div>
        )
    }
}

export default ShopPage;