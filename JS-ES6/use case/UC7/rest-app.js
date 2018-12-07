// Model
class Profile {
    constructor(id, name, city) {
        this.id = id; // auto_increment
        this.name = name;
        this.city = city
    }
}

class ProfileService {
    constructor() {
        this.url = 'http://localhost:3000/profile'

    }
    async save(name, city) {
        try {
            const id = Math.floor(Math.random() * 100);

            const profile = new Profile(id, name, city);

            const response = await fetch(this.url, {

                method: 'POST',

                body: JSON.stringify(profile), // data can be `string` or {object}!

                headers: {

                    'Content-Type': 'application/json'

                }

            });

            return await response.json();
        } catch (err) {
            console.log(err)
        }

    }
    async findAll() {
        try {
            let res = await fetch(this.url);
            return res.json()
        } catch (err) {
            console.log(err);
        }

    }
    async findById(id) {
        const response = await fetch(`${this.url}?id=${id}`);
        return await response.json();
    }
    async update(id) { }
    async remove(id) {
        const response = await fetch(`${this.url}/${id}`, {
            method: 'DELETE'
        });
        return await response.json();
    }
    async update(id, name, city) {

        const profile = new Profile(id, name, city);

        const response = await fetch(`${this.url}/${id}`, {

            method: 'PUT',

            body: JSON.stringify(profile), // data can be `string` or {object}!

            headers: {

                'Content-Type': 'application/json'

            }

        });

        return await response.json();

    }

}


// let profile = new ProfileServices();

// profile.findAll().then(_=> console.log(_));


class ProfileComponent {
    constructor(profileService) {
        this.profileService = profileService;

    }
    addProfile(name, city) {
        this.profileService.save(name, city).then((res) => console.log(res));
    }
    findAllProfiles() {
        this.profileService.findAll().then((res) => console.log(res));

    }
    removeProfile(id) {
        this.profileService.remove(id).then((res) => console.log(res));

    }
    findProfileById(id) {
        this.profileService.findById(id).then((res) => console.log(res));

    }
    updateProfile(id, name, city) {
        this.profileService.update(id, name, city).then((res) => console.log(res));
    }
}
const profileComponent = new ProfileComponent(new ProfileService());
