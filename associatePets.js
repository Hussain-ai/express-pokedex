const db = require('./models');
​
async function associatePets() {
    try {
        const [pet, created] = await db.pet.findOrCreate({
            where : {
                name: 'Rufus',
                species: 'Dog'
            }
        })
        const user = await db.user.findOne({
            where: {
                firstName: 'John'
        }
        })
        //await user.addPet(pet);
        //await pet.setUser(user);
        //add user id to the pet
        await pet.update({
            userId: user.id
        })
        console.log(pet)
        console.log(created)
    } catch (error) {
        console.log(error)
    } 
}
​
associatePets();