const dotenv = require('dotenv');
dotenv.config();
const fetch = require('node-fetch');


//ref https://pixabay.com/api/docs/

// export async function getImage(destination){
module.exports = async function getImage(destination){
    //Call The Geonames Api to get the lat & long data of the destination.
    const baseURl = 'https://pixabay.com/api/?';
    const pixabayAPI = process.env.PIXABAY_APIKEY;

    try{
        const url = `${baseURl}key=${pixabayAPI}&q=${destination}&category=places&orientation=horizontal&image_type=photo`;
        const imageData = await fetch(url);
        const jsonImage = await imageData.json();
        const resultImage = jsonImage.hits[0].largeImageURL;

        return {
            img: resultImage
        };
        // const imageData = image.data.hits[0] || '';
        // return {
        //    img: imageData.webformatURL || ''
        // }

        // const resultGeoData = response.data.geonames;
        // if (resultGeoData == null) {
        //     return res.status(404).json({ Validation: "please input invalid city name" });
        // }
        // return resultGeoData

    }catch(err){
        throw new Error(`Error has occured:${err}`);
    }
};