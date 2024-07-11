const express=require('express');
const app=express();
const mongoose=require('mongoose');
const dotenv=require('dotenv');
const cors=require('cors');
const job=require('./cron');

const loadRoutes=require('./routes/loadRoutes');
const adminRoutes=require('./routes/adminRoutes');
const truckRoutes=require('./routes/truckRoutes');
const authRoutes=require('./routes/authRoutes');
dotenv.config();

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cors("*"));
// app.post('/load',(req,res)=>{
//     console.log(req.body);
// })
app.use('/load',loadRoutes);
app.use('/admin',adminRoutes);
app.use('/truck',truckRoutes);
app.use('/auth',authRoutes);
mongoose.connect('mongodb://127.0.0.1:27017/truck_it').then(()=>{
    console.log('Database connected');
});



app.listen(8080,()=>{
    console.log('Server running at port 8080');
    job.start();
})