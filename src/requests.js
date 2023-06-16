
const getPuzzle = (wordCount) => {
    return fetch(`https://puzzle.mead.io/puzzle?wordCount=${wordCount}`).then((response) => {
        if (response.status === 200) {
            return response.json()
        } else {
            throw new Error('Unable to fetch puzzle')
        }
    }).then((data) => {
        return data.puzzle
    })
}

// const getCountry = async (countryCode) => {
//     const response = await fetch('https://restcountries.com/v3.1/all').then((response) => {
//         if (response.status === 200) {
//             return response.json()
//         } else {
//             throw new Error('Unable to fetch data')
//         }
//     }).then((data) => {
//         return data.find((country) => country.cca2 === countryCode)
//     })
// }.
const getcurrentcountry=async()=>{
    const location=await getlocation()
    const country= await getCountry(location.country)
    return country
}


const getCountry = async (countryCode) => {
    const response = await fetch('//restcountries.com/v3.1/all')
        if (response.status === 200) {
            const  data=await response.json()
            return data.find((country) => country.cca2 === countryCode)
        } else {
            throw new Error('Unable to fetch data')
        }
    
}

const getlocation= async()=>{
    const response= await fetch("//ipinfo.io/json?token=99cd4afb3777a7")
        if(response.status===200){
            const data= await response.json()
            return data
        }
        else{
            throw new Error("unable to fetch data")
        }
}
export {getPuzzle as default}