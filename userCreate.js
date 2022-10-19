const db = require('./models');
​
// create new user
​
async function createUser() {
    try {
        const newUser = await db.user.create({
        firstName: 'John',
        lastName: 'Doe',
        })
        console.log(newUser)
    } catch (error) {
        console.log(error)
    }
}
​
createUser()