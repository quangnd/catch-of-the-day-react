import React from 'react';

class AddFirshForm extends React.Component {
  createFish(event) {
    event.preventDefault();
    const fish = {
      name: this.name.value,
      price: this.price.value,
      status: this.status.value,
      desc: this.desc.value,
      image: this.image.value
    }
    this.props.addFish(fish);
    this.fishForm.reset();
  }
  render() {
    return (
      <form ref={(input) => this.fishForm = input} className="fish-edit" onSubmit={(e) => this.createFish(e)} >
        <input type="text" ref={(input) => this.name = input} placeholder="Fish name" />
        <input type="text" ref={(input) => this.price = input} placeholder="Fish price" />
        <select ref={(input) => this.status = input}>
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold out!</option>
        </select>
        <textarea ref={(input) => this.desc = input} placeholder="Fish desc" />
        <input type="text" ref={(input) => this.image = input} placeholder="Fish image" />
        <button type="submit">+ Add Item</button>
      </form>
    )
  }
}

AddFirshForm.propTypes = {
  addFish: React.PropTypes.func.isRequired
}

export default AddFirshForm;
