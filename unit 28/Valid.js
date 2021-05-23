class Valid {
   constructor (email, password, isValid, validate) {
      this.email = email;
      this.password = password;
      this.isValid = isValid;
      this.validate = false;
   }
   validate() {
      if (this.password.length < 6) {this.isValid = false}
        else if (this.password.length >= 6) {this.isValid = true}
   }
}