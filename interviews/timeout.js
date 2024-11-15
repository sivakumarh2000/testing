setTimeout(() => {
    clearInterval(interval)
    console.log('Close after 10 sec');
    
},10000)



const interval = setInterval(() => {
    console.log('Every 3 sec');
}, 3000);