var faker = require('faker');

var people = [];
for (var i = 0; i <10; i++) {
    people.push({
        id: i,
        name: faker.name.findName(),
        email: faker.internet.email()
    });
}

module.exports = people;