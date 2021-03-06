// updateUI(res)

//The res is what the recipient calls it.
// export const updateUI = async (res) => {
export async function updateUI(res){
    console.log(res);
    try {
        // Write updated data to DOM elements
        document.getElementById('model').innerHTML = `Model: ${res.model}`;
        document.getElementById('score_tag').innerHTML = `Score Tag: ${res.score_tag}`;
        document.getElementById('agreement').innerHTML = `Agreement: ${res.agreement}`;
        document.getElementById('subjectivity').innerHTML = `Subjectivity: ${res.subjectivity}`;
        document.getElementById('confidence').innerHTML = `Confidence: ${res.confidence}`;
        document.getElementById('irony').innerHTML = `Irony: ${res.irony}`;
    }
    catch(error) {
        console.log('error', error);
        // Appropriately handle errors
    };
};