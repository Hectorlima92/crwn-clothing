import React from 'react';
import { connect } from 'react-redux';

import { addItem } from '../../redux/cart/cart.actions';

import { CollectionItemContainer, ImageContainer, CollectionFooterContainer,
        NameContainer, PriceContainer, CustomButtonContainer } from './collection-item.styles.jsx';

const CollectionItem = ({ item, addItem }) => {
    const { name, price, imageUrl } = item;
    return (
    <CollectionItemContainer>
        <ImageContainer
            style={{
                backgroundImage: `url(${imageUrl})`
            }}
            />
            <CollectionFooterContainer>
                <NameContainer>{name}</NameContainer>
                <PriceContainer>{price}</PriceContainer>
            </CollectionFooterContainer>
            <CustomButtonContainer onClick={() => addItem(item)} inverted>
                Add to cart
            </CustomButtonContainer>
        </CollectionItemContainer>
)};

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem);