export class User {
  constructor(
    public email: string, 
    public id: string, 
    public _token: string, 
    public _tokenExpirationDate: number) 
  {
  }

  get token() {
    if (!this._tokenExpirationDate || new Date().getTime() > this._tokenExpirationDate) {
      return null;
    }

    return this._token;
  }
}