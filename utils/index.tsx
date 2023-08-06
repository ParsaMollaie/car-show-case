export async function fetchCars(){
    const headers = {
        
        'X-RapidAPI-Key':'610aa83374mshf9e00aaaddc2112p18f4dejsn242644f27f25',
        'X-RapidAPI-Host':'cars-by-api-ninjas.p.rapidapi.com',

    }
    const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=carolla', {headers : headers});


    const result = await response.json();

    return result;
}