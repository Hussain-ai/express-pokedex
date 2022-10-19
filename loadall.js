// load all pets and print reults to console
​
const db = require('./models');
​
​
async function loadAll() {
    try {
        const pets = await db.pet.findAll();
        console.log(pets);
    } catch (error) {
        console.log(error);
    }
}
​
loadAll();