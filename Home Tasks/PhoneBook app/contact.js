class Contact {
    constructor(firstName, lastName, phoneNumber, email) {
        this.validateName(firstName);
        this.validateName(lastName);
        this.validatePhoneNumber(phoneNumber);
        this.validateEmail(email);

        this.firstName = firstName;
        this.lastName = lastName;
        this.phoneNumber = phoneNumber;
        this.email = email;
    }

    set firstName(name) {
        this.validateName(name);
        this._firstName = name;
    }

    get firstName() { return this._firstName;}

    set lastName(name) {
        this.validateName(name);
        this._lastName = name;
    }

    get lastName() {return this._lastName;}

    set phoneNumber(number) {
        this.validatePhoneNumber(number);
        this._phoneNumber = number;
    }

    get phoneNumber() {return this._phoneNumber;}

    set email(email) {
        this.validateEmail(email);
        this._email = email;
    }

    get email() { return this._email.toLowerCase();}

    get name() {return `${this.firstName} ${this.lastName}`;}

    toString() {
        return `Name: ${this.name}, Phone: ${this.phoneNumber}, Email: ${this.email}`;
    }

    validateName(name) {
        if (!name || name.trim() === "") {
            throw new Error("Name cannot be empty");
        }
    }

    validatePhoneNumber(number) {
        if (!/^\d{11}$/.test(number)) {
            throw new Error("Phone number must be exactly 11 digits");
        }
    }

    validateEmail(email) {
        if (!email || email.length > 50) {
            throw new Error("Email cannot be empty or exceed 50 characters");
        }
        if (!email.includes("@") || !email.includes(".com")) {
            throw new Error("Email format is invalid");
        }
    }
}
