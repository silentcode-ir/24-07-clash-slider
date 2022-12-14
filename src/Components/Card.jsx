import React from 'react';
import Buy from './Buy';
import CardImage from './CardImage';
import CardItem from './CardItem';
import UnitState from './UnitState';
import BuyAction from './BuyAction';





export default function Card({ hero }) {
    return (
        <div className="clash-card barbarian">
            <CardImage src={hero.img} name={hero.name} />
            <CardItem type={"clash-card__level clash-card__level--barbarian"} children={hero.level} />
            <CardItem type={"clash-card__unit-name"} children={`The ${hero.name}`} />
            <CardItem type={"clash-card__unit-description"} children={hero.description} />
            <Buy name={hero.name} />
            <BuyAction />
            <UnitState units={hero.units} name={hero.name} />
        </div>
        // <!-- end clash-card barbarian-->
    )
}
