import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { shippingItem } from '../../../../actions/authAction';  
import { withRouter } from 'react-router-dom';
import TextFieldGroup from '../../../common/TextFieldGroup';
import Payments from '../../../payments/Payments'

 class Shipping extends Component {
  constructor() {  
    super();
    this.state= {
      name: '',
      email: '',
      company: '',
      zipcode: '',
      country: '',
      addressline1:'',
      addressline2: '',
      cityname: '',
      stateprovince: '',  
      phonenumber: '',
      errors: {}
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  componentWillReceiveProps(nextProps){
    if(nextProps.errors){
      this.setState({errors: nextProps.errors})
    }
  }
  onSubmit(e){
    e.preventDefault();
    const shippingOrder = {
      fullname: this.state.fullname,
      email: this.state.email,
      company: this.state.company,     
      zipcode: this.state.zipcode,
      country: this.state.country,
      addressline1: this.state.addressline1,
      addressline2: this.state.addressline2,
      cityname: this.state.cityname,
      stateprovince: this.state.stateprovince,
      phonenumber: this.state.phonenumber
   
    }; 
    console.log(shippingOrder); 
    this.props.shippingItem(shippingOrder, this.props.history);
   
    }
  onChange(e){
    this.setState({ [e.target.fullname]: e.target.value});
  }
  render(){
    const { errors } = this.state;

    return (
      <div>
      <div className="container-fluid">
          <div className="banner-section">
              <div className="banner-title">
                  <h1>Shipping </h1>
              </div>
          </div>

      </div>
      
      <div className="container-box">
      
      <div className="register">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-md-offset-3 m-auto">
            <div className="form-layout">
              <h1 className="display-4 text-center">Shipping Details</h1>
              
              <form noValidate onSubmit={this.onSubmit}>
                  <TextFieldGroup
                    placeholder="Full Name"
                    name="name"
                    type="name"
                    value={this.state.fullname}
                    onChange={this.onChange}
                    error={errors.fullname}
                  />
                  <TextFieldGroup
                    placeholder="Email Address"
                    name="email"
                    type="email"
                    value={this.state.email}
                    onChange={this.onChange}
                    error={errors.email}
                  />                  
                  <TextFieldGroup
                    placeholder="Company"
                    name="company"
                    type="text"
                    value={this.state.company}
                    onChange={this.onChange}
                    error={errors.company}
                  />
                  <TextFieldGroup
                    placeholder="Zip / Postal Code"
                    name="zipCode"
                    type="text"
                    value={this.state.zipCode}
                    onChange={this.onChange}
                    error={errors.zipCode}
                  />
                   <TextFieldGroup
                    placeholder="Country"
                    name="country"
                    type="text"
                    value={this.state.country}
                    onChange={this.onChange}
                    error={errors.country}
                  />
                   <TextFieldGroup
                    placeholder="Address Line 1"
                    name="addressline1"
                    type="text"
                    value={this.state.addressline1}
                    onChange={this.onChange}
                    error={errors.addressline1}
                  />
                   <TextFieldGroup
                    placeholder="Address Line 2"
                    name="addressline2"
                    type="text"
                    value={this.state.addressline2}
                    onChange={this.onChange}
                    error={errors.addressline2}
                  />
                  <TextFieldGroup
                    placeholder="City Name"
                    name="cityname"
                    type="name"
                    value={this.state.cityname}
                    onChange={this.onChange}
                    error={errors.cityname}
                  />
                  <TextFieldGroup
                    placeholder="State Province"
                    name="stateprovince"
                    type="name"
                    value={this.state.stateprovince}
                    onChange={this.onChange}
                    error={errors.stateprovince}
                  />
                   <TextFieldGroup
                    placeholder="Phone Number"
                    name="phonenumber"
                    type="number"
                    value={this.state.phonenumber}
                    onChange={this.onChange}
                    error={errors.phonenumber}
                  />
                 <a href= "/success" ><input type="submit" className="btn btn-info btn-block mt-4" /></a>
                {/* <center><Payments /></center>  */}
              </form></div>
            </div>
            {/* <Payments  className="col-md-6"/>   */}
          </div>   
        </div>
      </div></div>
      </div>
    );
  }
} 
Shipping.propTypes = {
  shippingItem: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
})

export default connect(mapStateToProps, {shippingItem})(withRouter(Shipping));
