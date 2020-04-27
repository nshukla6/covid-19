import React,{useState, useEffect} from 'react';
import {NativeSelect, FormControl} from '@material-ui/core'
import styles from './CountryPicker.module.css';
import { fetchCountries } from '../../api';


const CountryPicker = ({ handleCountry }) => {
  const [countries, setCountries] = useState([]);

  useEffect(()=> {
    const getCountries = async () => {
      const countries = await fetchCountries();
      setCountries(countries);
    }
    getCountries();
  },[])
  return (
    <FormControl className={styles.formControl}>
      <NativeSelect defaultValue="" onChange={(e)=>handleCountry(e.target.value)}>
        <option value="">Global</option>
        {countries.map((country) => (
            <option key={country} value={country}>{country}</option>
        ))}
      </NativeSelect>
    </FormControl>
  )
}
export default CountryPicker;
