import { useState } from 'react'
import '../App.css'

const initialCountries = [
    {
        "country": "United States",
        "code": "US",
        "states": [
            { "state": "New York" },
            { "state": "California" },
            { "state": "Texas" }
        ]
    },
    {
        "country": "Canada",
        "code": "CA",
        "states": [
            { "state": "Ontario" },
            { "state": "Quebec" },
            { "state": "British Columbia" }
        ]
    },
    {
        "country": "India",
        "code": "IN",
        "states": [
            { "state": "Maharashtra" },
            { "state": "Tamil Nadu" },
            { "state": "Uttar Pradesh" }
        ]
    },
    {
        "country": "United Kingdom",
        "code": "UK",
        "states": [
            { "state": "England" },
            { "state": "Scotland" },
            { "state": "Wales" }
        ]
    },
    {
        "country": "Australia",
        "code": "AU",
        "states": [
            { "state": "New South Wales" },
            { "state": "Victoria" },
            { "state": "Queensland" }
        ]
    },
    {
        "country": "Germany",
        "code": "DE",
        "states": [
            { "state": "Berlin" },
            { "state": "Bavaria" },
            { "state": "North Rhine-Westphalia" }
        ]
    },
    {
        "country": "Brazil",
        "code": "BR",
        "states": [
            { "state": "São Paulo" },
            { "state": "Rio de Janeiro" },
            { "state": "Minas Gerais" }
        ]
    },
    {
        "country": "Japan",
        "code": "JP",
        "states": [
            { "state": "Tokyo" },
            { "state": "Osaka" },
            { "state": "Hokkaido" }
        ]
    },
    {
        "country": "South Africa",
        "code": "ZA",
        "states": [
            { "state": "Gauteng" },
            { "state": "Western Cape" },
            { "state": "KwaZulu-Natal" }
        ]
    },
    {
        "country": "Mexico",
        "code": "MX",
        "states": [
            { "state": "Mexico City" },
            { "state": "Jalisco" },
            { "state": "Nuevo León" }
        ]
    }
]

function MutlipleDropdown() {

    const [countries, setCountries] = useState(initialCountries);
    const [selectedCountry, setSelectedCountry] = useState('');
    const [selectedState, setSelectedState] = useState('');

    const handleCountryChange = (event) => {
        setSelectedCountry(event.target.value);
        setSelectedState('');
    };

    const handleStateChange = (event) => {
        setSelectedState(event.target.value);
    };
    return (
        <div>
            <div className="dropdown">
                <label htmlFor="countryDropdown">Select a Country:</label>
                <select
                    id="countryDropdown"
                    value={selectedCountry}
                    onChange={handleCountryChange}
                >
                    <option value="">Select</option>
                    {countries.map((country) => (
                        <option key={country.code} value={country.code}>
                            {country.country}
                        </option>
                    ))}
                </select>
            </div>


            <div className="dropdown">
                <label htmlFor="stateDropdown">Select a State:</label>
                <select
                    id="stateDropdown"
                    value={selectedState}
                    onChange={handleStateChange}
                >
                    <option value="">Select</option>
                    {countries
                        .find((country) => country.code === selectedCountry)
                        ?.states.map((state, index) => (
                            <option key={index} value={state.state}>
                                {state.state}
                            </option>
                        ))}
                </select>
            </div>

        </div>
    )
}

export default MutlipleDropdown
