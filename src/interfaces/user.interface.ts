export namespace User {
  export interface LoginUser {
    email: string
    uid: string
    refreshToken: string
  }

  export interface FireUser {
    email: string
    uid: string
    firstName: string
    lastName: string
    role: string
    refreshToken: string
  }

  export const newUser = <FireUser> {
    email: '',
    uid: '',
    firstName: '',
    lastName: '',
    role: '',
    refreshToken: ''
  }


}
