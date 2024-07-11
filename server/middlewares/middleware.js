const cities = require('../cities');
const secretKey='mainnhibataunga';
const jwt=require('jsonwebtoken');

const format=(str)=>{
    ss=str.substring(0,str.length-1);
    ll=parseFloat(ss);
    if(str[str.length-1]=='W'||str[str.length-1]=='S'){
        ll=ll-2*ll;
    }
    return ll;
}
  
const getCoordinates=(cityName)=> {
  const city = cities.find((name) => name[1]&&name[1].toLowerCase() == cityName.toLowerCase());
  
  if (city) {
    let [id,cityname, latitude, longitude,state] = city;
    // latitude=parseCoordinates(latitude);
    // longitude=parseCoordinates(longitude);
    latitude=format(latitude);
    longitude=format(longitude);
    return { latitude,longitude };
  } else {
    return null;
  }
};

const haversineDistance=(lat1, lon1, lat2, lon2) =>{
    const toRad = (value) => (value * Math.PI) / 180;
    
    const R = 6371; // Earth radius in kilometers
  
    const dLat = toRad(lat2 - lat1);
    const dLon = toRad(lon2 - lon1);
    const a = 
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c; // Distance in kilometers
  }

const checkAuth=async(req,res,next)=>{

  try{
    //extracting the token from the authorization key in req.headers
    const token=req.headers.authorization.split(' ')[1];

    //if token does not exist in header, return unauthorized
    if (!token) {
        return res.status(401).json({ message: 'Unauthorized NO TOKEN' });
    }

    //verifying the token with secretKey, if err occurs, handle accordingly.
    jwt.verify(token, secretKey, (err, decoded) => {
      if (err) {
          if (err.name === 'TokenExpiredError') {
              return res.status(401).json({ message: 'TokenExpired' });
          }
          console.log(err);
          return res.status(401).json({ message: 'Unauthorized' });
      }

      //putting up userId and email data in req.user
      req.user = decoded;

      //it runs the next middleware/callback function.
      next();
  });
  }
  catch(err){
    console.log(err);
  }
}

module.exports = {getCoordinates,haversineDistance,checkAuth};