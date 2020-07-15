import {User} from '../Models/User.ts';

/**
 * Validators
 */
export class Validators {

	constructor() {}

	/**
	 * User validator for see an invalid value.
	 * @param user
	 */
	public static userValidator (user: User): boolean {
		return !Validators.isString(user.name) || !Validators.isNumber(user.age) || !Validators.isBoolean(user.validation) ||
			user.name.length === 0 || user.age === 0 ||
			Validators.isUndefined(user.name) || Validators.isUndefined(user.age) || Validators.isUndefined(user.validation);
	}

	/**
	 *  Validator content-type and accept.
	 *  @param headers
	 */
	public static headersValidator (headers: any): boolean {
		console.log(headers['accept']);
		return headers['content-type'] === 'application/json; charset=utf-8' && headers['accept'] === 'application/xml';
	}

	/**
	 * Guard number
	 * @param user
	 */
	public static isNumber(x: any): x is number {
		return typeof x === "number";
	}

	/**
	 * Guard string
	 * @param x
	 */
	public static isString(x: any): x is string {
		return typeof x === "string";
	}

	/**
	 * Guard Boolean
	 * @param x
	 */
	public static isBoolean(x: any): x is boolean {
		return typeof x === "boolean";
	}

	/**
	 * Guard Undefined
	 * @param x
	 */
	public static isUndefined(x: any): x is undefined {
		return typeof x === "undefined";
	}

}
