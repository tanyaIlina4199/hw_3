let dateTime: Date = new Date();
console.log(dateTime.toDateString())

console.log("текущая дата: " + (dateTime.getMonth() + 1)  + "/" 
+ dateTime.getFullYear() + "/" 
+ dateTime.getDate() 
+ ". Текущее время " 
+ dateTime.getHours() 
+ ":" + dateTime.getMinutes() 
+ ":" + dateTime.getSeconds() + ".")
