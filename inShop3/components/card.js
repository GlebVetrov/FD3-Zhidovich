import React from 'react';
import PropTypes from 'prop-types';


export default class Product extends React.Component {  

    constructor(props) {
        super(props);
         
      }

    static propTypes = {
        data: 
        PropTypes.shape({          
          name: PropTypes.string,
          prise: PropTypes.number,
          url: PropTypes.string,
          quantity: PropTypes.number,
        }),
        num: PropTypes.number, 
        cbAdd: PropTypes.func,
    }
    
    state = {
        productData: Object.assign({}, this.props.data),
        productId: this.props.num,
        disButton: this.props.add ? true : false,
        statusValidName: false,
        statusValidUrl: false,
        statusValidPrise: false,
        statusValidQuantity: false,
    }

    addValue = () => {
        let data = this.state.productData;
        let num = this.state.productId;
        
        this.props.cbAdd(data, num);
    }

    cancel = () => {        
        this.props.cbCancel();
    }

    changeProduct = (EO) => {
        
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
            return;
        }
        if (EO.target.name === 'url') {
            if (EO.target.value === '') {
                this.setState({statusValidUrl: true});
            }
            else {
                this.setState({statusValidUrl: null});
            }
            let url = this.state.productData;
            url['url'] = EO.target.value;            
            this.setState({productData: url}, this.checkForm);
            return;
        }
        if (EO.target.name === 'prise') {
            if (EO.target.value === '') {
                this.setState({statusValidPrise: true});
            }
            else {
                this.setState({statusValidPrise: null});
            }
            let prise = this.state.productData;
            prise['prise'] = EO.target.value;            
            this.setState({productData: prise}, this.checkForm);
            return;
        }
        if (EO.target.name === 'quantity') { 
            if (EO.target.value === '') {
                this.setState({statusValidQuantity: true});
            }
            else {
                this.setState({statusValidQuantity: null});
            }           
            let quantity = this.state.productData;
            quantity['quantity'] = EO.target.value;            
            this.setState({productData: quantity}, this.checkForm);
            return;
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
            this.props.edit ?

            <div>
            {true && <h2>Edit Product</h2>}
            <p>ID:{this.state.productId}</p>
            <p>
                <label>
                Name<br/> <input type="text" name = "name"  defaultValue= {this.state.productData.name} onChange = {this.changeProduct}/>
                </label><br/>
            <span>{this.state.statusValidName && 'Please, fill the field'}</span></p>
            <p>
                <label>
                Url<br/> <input type="text" name = 'url' defaultValue={this.state.productData.url} onChange = {this.changeProduct}/>
                </label><br/>
            <span>{this.state.statusValidUrl && 'Please, fill the field'}</span></p>
            <p>
                <label>
                Prise<br/> <input type="text" name = 'prise' defaultValue={this.state.productData.prise} onChange = {this.changeProduct}/>
                </label><br/>
            <span>{this.state.statusValidPrise && 'Please, fill the field'}</span></p>
            <p>
                <label>
                Quantity<br/> <input type="text" name = 'quantity' defaultValue={this.state.productData.quantity} onChange = {this.changeProduct}/>
                </label><br/>
            <span>{this.state.statusValidQuantity && 'Please, fill the field'}</span></p>
            <p><input type="button" value="Save" disabled = {this.state.disButton} onClick = {this.addValue}/><input type="button" value="Cansel" onClick = {this.cancel}/></p>
            </div>
            :
             <div>
                <h2>Product{this.state.productId}</h2>
                <ul>
                    <li>{this.state.productData.name}</li>
                    <li>{this.state.productData.prise}</li>
                    <li>{this.state.productData.url}</li>
                    <li>{this.state.productData.quantity}</li>
                </ul>
            </div>
        )
    }
}