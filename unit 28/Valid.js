class Valid {
   constructor (email, password, isValid, ) {
      this.email = email;
      this.password = password;
      this.isValid = false;
   }
   validate() {
      if (this.password.length < 6) {this.isValid = false}
        else if (this.password.length >= 6) {this.isValid = true}
   }
}