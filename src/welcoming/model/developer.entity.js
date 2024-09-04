/**
 * Developer entity
 * @class
 * @summary
 * This class represents a developer entity.
 * It has two properties: firstName and lastName.
 * @property {string} firstName - The first name of the developer.
 * @property {string} lastName - The last name of the developer.
 * @method {string} fullName - Returns the full name of the developer.
 */
export class Developer {
    firstName;
    lastName;

    /**
     * Constructor
     * @param firstName
     * @param lastName
     */
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    /**
     * Returns the full name of the developer.
     * @returns {string} The full name of the developer.
     */
    get fullName() {
        return this.firstName == null || this.lastName == null ? "Unknown" : `${this.firstName} ${this.lastName}`.trim();
    }
}