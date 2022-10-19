const db = require('./models');
​
// create new pet
​
async function createPet() {
    try {
        const newPet = await db.pet.create({
        name: 'Rufus',
        species: 'Dog',
        })
        console.log(newPet)
    } catch (error) {
        console.log(error)
    }
}
​
createPet()