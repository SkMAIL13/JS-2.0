class Valid2 extends Valid {
   constructor(email, password, isValid, emailError, passwordError) {
       super(email, password, isValid);
       this.emailError = '';
       this.passwordError = '';
   }
   validate() {
       if (this.password.length < 6 || this.email.length == 0) {
       this.isValid = false;
       this.emailError = 'email empty';
       this.passwordError = 'min length 6'
       } else 
       if (this.password.length >= 6) {this.isValid = true}
   }
}