//Cоздайте класс Valid, который содержит свойства email, password, isValid. И метод validate. Метод validate должен проверять длину пароля и писать false в isValid если длина меньше 6 и true если больше. Изначально свойство isValid равно false

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