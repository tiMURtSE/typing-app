const API_URL = 'https://fish-text.ru/get';
const PARAMS = `?type=sentence&number=2&format=json`;

const fetchTextForTesting = async () => {
    try {
        const response = await fetch(API_URL + PARAMS);
        const json = await response.json();
        
        return json;      
    } catch (error) {
        console.log(error.message);
    }
};

export default fetchTextForTesting;