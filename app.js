const express = require("express");
const app = express();
const {city,employee} = require('./Data');
//You can import this module and use different names by aliasing or renaming the properties:
//const { city: citynames, employee: name } = require('./Data');
app.get('/',(req,res) => {
    res.send('<h1>home page</h1><a href="/api/cities">poducts</a></br><a href="/api/names">names</a>');
})

app.get('/api/cities',(req,res) => {
     
    const newcities = city.map((city)=>{
        const {id,name,rank} = city;
        return {id,name,rank}
    })
    res.json(newcities);
});
app.get('/api/names',(req,res) => {
 
    res.json(employee);
});

app.get('/api/cities/:cityid',(req,res) => {
    console.log(req.params);
    const {cityid} = req.params;
     const singlecity = city.find(
        (city) => city.id === Number(cityid)
     )

     res.json(singlecity);
})


app.listen(8080, () => {
    console.log("server running....")
});


