// Code your solution in this file!

const logDriverNames=function(drivers){
  drivers.forEach(function(driver){
    console.log(driver.name)
  })
}


}
const logDriversByHometown= function(drivers,homeTown)
{
   drivers.forEach(function(driver){
     if(driver.hometown===homeTown)
     console.log(driver.name)
     
   })
}
const driversByRevenue = function(drivers)
{
  return drivers.slice().sort(function(driver1,driver2){
    return driver1.revenue - driver2.revenue;
   
  })
}
const driversByName = function(drivers)
{
  return driver.slice().sort(function(driver1,driver2)
  {
    return driver1.name.localeCompare(driver2.name);
  })
}
const totallRevenue = function(drivers)
{
  let totall=0;
  driver.forEach(function(driver){totall+=driver.revenue})