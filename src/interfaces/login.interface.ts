import { FormControl, FormGroup, Validators } from "@angular/forms";

export namespace Login {
  /**
   * Login interface
   */
  export interface Login {
    email: string
    password: string
  }

  /**
   * Create a new Login data
   *
   * @type {Login.Login}
   */
  export const newLogin = <Login> {
    email: '',
    password: ''
  };

  /**
   * Create a new Login form
   *
   * @param {Login.Login} data
   * @returns {FormGroup}
   */
  export function newLoginForm(data?: Login): FormGroup {
    const fg = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email, Validators.minLength(3)]),
      password: new FormControl('', [Validators.required, Validators.minLength(1)])
    });
    if(data)
      fg.patchValue(data);
    return fg;
  }

}
