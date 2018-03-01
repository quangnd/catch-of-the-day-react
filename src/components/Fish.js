import React from 'react';
import { formatPrice } from '../helpers';

const Fish = (props) => {
  const { details, index } = props;
  const isAvailable = details.status === 'available';
  const buttonText = isAvailable ? 'Add to Order' : 'Sold out';

  return (
    <li className="menu-fish">
      <img src={details.image} alt={details.name} />
      <h3 className="fish-name">
        {details.name}
        <span className="price">{formatPrice(details.price)}</span>
      </h3>
      <p>{details.desc}</p>
      <button disabled={!isAvailable} onClick={() => props.addToOrder(index)}>
        {buttonText}
      </button>
    </li>
  )
}

Fish.propTypes = {
  details: React.PropTypes.object.isRequired,
  index: React.PropTypes.string.isRequired,
  addToOrder: React.PropTypes.func.isRequired
}

export default Fish;