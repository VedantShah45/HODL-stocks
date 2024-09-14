// Fetch data from the API and update the DOM
async function fetchDataAndUpdateDOM() {
    try {
        const response = await fetch('http://localhost:4000/api/v1/wazir');
        
        
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }

        const data = await response.json(); 
        console.log(data); 
        const vals=data.data
        
        for (let i = 0; i < 10; i++) {
            const element = document.querySelector(`#div${i}`);
            
            if (element) {
                const {name,last,buy,sell}=vals[i]
                element.innerHTML += `<p>${name}<p> <p>₹${last}<p> <p>₹${buy}/₹${sell}<p> <p>${(buy-sell)/buy}%</p> <p>₹${buy-sell}<p>`; 
            }
    }} catch (error) {
        console.error("Error fetching data:", error);
    }
}



document.addEventListener('DOMContentLoaded', fetchDataAndUpdateDOM);
