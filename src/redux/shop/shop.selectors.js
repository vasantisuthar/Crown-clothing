
import { createSelector } from "reselect";
import memoize from 'lodash.memoize';

const selectShop = (state) => state.shop;

export const selectShopSection = createSelector(
    [selectShop],
    shop => shop.collections
)


export const selectCollection = memoize(collectionUrlParam =>  createSelector(
    [selectShopSection],
    collections => collections ? collections[collectionUrlParam] : null
))

export const selectCollectionForPreview = createSelector(
    [selectShopSection],
    collections => collections ? Object.keys(collections).map(key => collections[key]) : []
)
