import Navbar from "../components/Navbar"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import cities from '../../cities'
import { Combobox, ComboboxInput, ComboboxOption, ComboboxOptions } from '@headlessui/react'

const AddLoad = () => {
    const navigate=useNavigate();
    const [source,setSource]=useState('');
    const [destination,setDestination]=useState("");
    const [material,setMaterial]=useState("");
    const [weight,setWeight]=useState(0);
    const [lorry,setLorry]=useState("");
    const [rate,setRate]=useState(0);
    const [date,setDate]=useState(0);
    const [remark,setRemark]=useState("");
    const [query, setQuery] = useState('')

  const filteredCities =
    query.length<3?[]:
      cities.filter((city) => {
          return city.name.toLowerCase().includes(query.toLowerCase())
        });
    const handleSubmit = async (e)=>{
        e.preventDefault();
        const formData={
            source,destination,material,weight,lorry,rate,date,remark
        };
        await fetch('http://localhost:8080/load', {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
          })
            .then((response) => response.json())
            .then((json) => console.log(json)).then(navigate('/'));
    }
  return (
    <div>
      <Navbar/>
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
      <h1 className="mb-2 text-2xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Add a new Load</h1>
      </div>
  <form className="max-w-sm mx-auto mb-5" onSubmit={handleSubmit}>
  <div className="mb-5">
  <Combobox value={source} onChange={setSource} onClose={() => setQuery('')}>
    <label htmlFor="source" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Source City</label>
      <ComboboxInput
        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
        aria-label="Assignee"
        displayValue={(city) => city?.name}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Agra"
      />
      <ComboboxOptions anchor="bottom-start" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
      >
        {filteredCities.map((city) => (
          <ComboboxOption key={city.id} value={city} className="data-[focus]:bg-blue-100">
            {city.name}
          </ComboboxOption>
        ))}
      </ComboboxOptions>
    </Combobox></div>
  <div className="mb-5">
  <Combobox value={destination} onChange={setDestination} onClose={() => setQuery('')}>
    <label htmlFor="destination" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Destination City</label>
      <ComboboxInput
        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
        aria-label="Assignee"
        displayValue={(city) => city?.name}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Delhi"
      />
      <ComboboxOptions anchor="bottom-start" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
      >
        {filteredCities.map((city) => (
          <ComboboxOption key={city.id} value={city} className="data-[focus]:bg-blue-100">
            {city.name}
          </ComboboxOption>
        ))}
      </ComboboxOptions>
    </Combobox></div>
  <div className="mb-5">
    <label htmlFor="material" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Material</label>
    <input type="text" id="material" name="material" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Cotton" value={material}  onChange={(e) => setMaterial(e.target.value)} required />
  </div>
  <div className="mb-5">
    <label htmlFor="weight" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Weight (in Tonnes)</label>
    <input type="number" id="weight" name="weight" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="100" value={weight}  onChange={(e) => setWeight(e.target.value)} required />
  </div>
  <div className="mb-5">
    <label htmlFor="lorrytype" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select Lorry Type </label>
    <select name="lorrytype" id="lorrytype" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={(e)=>setLorry(e.target.value)}>
        <option value="Lorry1">L1</option>
        <option value="Lorry2">L2</option>
        <option value="Lorry3">L3</option>
    </select>
  </div>
  <div className="mb-5">
    <label htmlFor="rate" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Rate per Tonne per km</label>
    <input type="number" id="rate" name="rate" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="1000" value={rate}  onChange={(e) => setRate(e.target.value)} required />
  </div>
  <div className="mb-5">
    <label htmlFor="date" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Loading Date</label>
    <input type="datetime-local" id="date" name="date" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" value={date}  onChange={(e) => setDate(e.target.value)} required />
  </div>
  <div className="mb-5">
  <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Additional Remark</label>
  <textarea id="message" name="message" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Any special instructions..." value={remark}  onChange={(e) => setRemark(e.target.value)}></textarea>

  </div>
  
  <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add Load</button>
</form>

    </div>
  )
}

export default AddLoad
