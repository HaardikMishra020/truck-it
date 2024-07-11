import axios from "axios";

const LoadCard = (props) => {
  const isAdmin=props.isAdmin;
  const handleDelete = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.delete(`http://localhost:8080/load/${props.id}`);
      if (response.status === 200) {
        alert('Load deleted successfully');
        // Optionally, you can refresh the list or call a parent function to update the UI
        props.onDelete(props.id);
      }
    } catch (error) {
      console.error('Error deleting load:', error);
      alert('Failed to delete load');
    }
  };
  return (
    <div className="border w-full max-w-sm md:w-1/2 lg:w-1/3 mx-3 rounded-lg shadow-lg mt-5 dark:shadow-blue-900">
      <div className="flex flex-col items-center md:items-start px-6 py-4">
        <div className="flex flex-col w-52 min-h-28">
        <div className="flex flex-row "><svg xmlns="http://www.w3.org/2000/svg" height="30" width="20" viewBox="0 0 384 512" className="mr-2"><path fill="#02b102" d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg>
          <h2 className="font-bold text-xl dark:text-gray-100">{props.source}</h2></div>
          <div className="flex flex-row">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 my-auto">
  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5" />
</svg>
<p className="m-2 text-xs">{props.distance} kms (approx)</p>
</div>
<div className="flex flex-row "><svg xmlns="http://www.w3.org/2000/svg" height="30" width="20" viewBox="0 0 384 512" className="mr-2"><path fill="#d00606" d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg>

          <h2 className="font-bold text-xl dark:text-gray-100 mb-2">{props.destination}</h2></div>
        </div>
        <div className="text-gray-500 dark:text-gray-200 text-center md:text-start">
          
          <ul>
            <li>Material: {props.material}</li>
            <li>Weight: {props.weight} Tonne</li>
            <li>Lorry Required: {props.lorry}</li>
            <li>Shipping Date: {props.date}</li>
            
          </ul>
        </div>
      </div>

      <div className="flex flex-col items-center md:items-start bg-gray-100 px-6 py-3 rounded-lg dark:bg-blue-100">
        <h2 className="font-bold text-2xl mb-2">Rs.{props.rate} per tonne/km</h2>
        <p className="text-gray-600 dark:text-gray-600">Owner: {props.owner}</p>
        <div className="flex flex-row">
        <button className="bg-blue-600 px-4 py-2 mt-3 mr-2 rounded font-semibold text-white hover:bg-blue-700">Contact</button>
        {isAdmin&&
          <button onClick={handleDelete} className="bg-red-600 px-4 py-2 mt-3 ml-2 rounded font-semibold text-white hover:bg-blue-700">Delete</button>}
          </div>
      </div>
    </div>
    

  

  

  )
}

export default LoadCard
