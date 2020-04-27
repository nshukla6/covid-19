import React, { Component } from 'react';
import styles from './App.module.css';
import { Chart, Cards, CountryPicker} from './components';
import { fetchData } from './api';
import coronaImage from '../src/assets/images/image.png'

export default class App extends Component {

  state = {
    data: {},
    country:''
  }
  countryHandler = async (country) => {
    const data = await fetchData(country);
    this.setState({ data,country })
  }

  async componentDidMount(){
    const data = await fetchData();
    this.setState({ data });
  }
  render() {
    const { data, country } = this.state;
    return (
      <div className={styles.container}>
        <img src={coronaImage}/>
        <Cards data = {data} />
        <CountryPicker handleCountry={this.countryHandler} />
        <Chart data={data} country={country} />
      </div>
    )
  }
}
