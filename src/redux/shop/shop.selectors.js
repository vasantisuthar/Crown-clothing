
import { createSelector } from "reselect";
import memoize from 'lodash.memoize';

const selectShop = (state) => state.shop;

export const selectShopSection = createSelector(
    [selectShop],
    shop => shop.collections
)


export const selectCollection = memoize(collectionUrlParam =>  createSelector(
    [selectShopSection],
    collections => collections[collectionUrlParam]
))

export const selectCollectionForPreview = createSelector(
    [selectShopSection],
    collections => Object.keys(collections).map(key => collections[key])
)
