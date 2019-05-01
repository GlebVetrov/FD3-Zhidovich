import React from 'react';
import PropTypes from 'prop-types';


export default class Product extends React.Component {  

    constructor(props) {
        super(props);
         
      }

    static propTypes = {
        data: 
        PropTypes.shape({          
          name: PropTypes.string.isRequired,
          prise: PropTypes.number.isRequired,
          url: PropTypes.string.isRequired,
          quantity: PropTypes.number.isRequired,
        }),
        num: PropTypes.number, 
        cbAdd: PropTypes.func,
    }
    
    state = {
        productData: this.props.data,
        productId: this.props.num,
        disButton: false,
        statusValidName: false,
        statusValidUrl: false,
        statusValidPrise: false,
        statusValidQuantity: false,
    }

    addValue = () => {

    }

    changeText = (EO) => {        
        if (EO.target.name === 'name') {
            if (EO.target.value === '') {
                this.setState({statusValidName: true});
            }
            else {
                this.setState({statusValidName: null});
            }
            let name = this.state.productData;            
            name['name'] = EO.target.value;            
            this.setState({productData: name}, this.checkForm);
        }
        if (EO.target.name == 'url') {
            if (EO.target.value === '') {
                this.setState({statusValidUrl: true});
            }
            else {
                this.setState({statusValidUrl: null});
            }
            let url = this.state.productData;
            url['url'] = EO.target.value;            
            this.setState({productData: url}, this.checkForm);
        }
        if (EO.target.name == 'prise') {
            if (EO.target.value === '') {
                this.setState({statusValidPrise: true});
            }
            else {
                this.setState({statusValidPrise: null});
            }
            let prise = this.state.productData;
            prise['prise'] = EO.target.value;            
            this.setState({productData: prise}, this.checkForm);
        }
        if (EO.target.name == 'quantity') { 
            if (EO.target.value === '') {
                this.setState({statusValidQuantity: true});
            }
            else {
                this.setState({statusValidQuantity: null});
            }           
            let quantity = this.state.productData;
            quantity['quantity'] = EO.target.value;            
            this.setState({productData: quantity}, this.checkForm);
        }
    }

    checkForm = () => {
        let obj = this.state.productData;
        
        for (let key in obj) {
            if (obj[key] === '') {
                  this.setState({disButton: true});
                  return;
            }
        }

        this.setState({disButton: false});
        return;
    }

    render() {

        return (
            // <div>
            //     <h2>Product{productNumber}</h2>
            //     <ul>
            //         <li>{productData.name}</li>
            //         <li>{productData.prise}</li>
            //         <li>{productData.url}</li>
            //         <li>{productData.quantity}</li>
            //     </ul>
            // </div>
            <div>
                <h2>Edit Product</h2>
                <p>ID:{this.state.productId}</p>
                <p>
                    <label>
                    Name<br/> <input type="text" name = "name"  defaultValue= {this.state.productData.name} onChange = {this.changeText}/>
                    </label><br/>
                <span>{this.state.statusValidName ? 'Please, fill the field': null }</span></p>
                <p>
                    <label>
                    Url<br/> <input type="text" name = 'url' defaultValue={this.state.productData.url} onChange = {this.changeText}/>
                    </label><br/>
                <span>{this.state.statusValidUrl ? 'Please, fill the field': null }</span></p>
                <p>
                    <label>
                    Prise<br/> <input type="text" name = 'prise' defaultValue={this.state.productData.prise} onChange = {this.changeText}/>
                    </label><br/>
                <span>{this.state.statusValidPrise ? 'Please, fill the field': null }</span></p>
                <p>
                    <label>
                    Quantity<br/> <input type="text" name = 'quantity' defaultValue={this.state.productData.quantity} onChange = {this.changeText}/>
                    </label><br/>
                <span>{this.state.statusValidQuantity ? 'Please, fill the field': null }</span></p>
                <p><input type="button" value="Save" disabled = {this.state.disButton}/><input type="button" value="Cansel"/></p>
            </div>
        )
    }
}