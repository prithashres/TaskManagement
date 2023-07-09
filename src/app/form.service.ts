import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  formValue: any[] = [
    {uid: '1' ,name:'Pritha Shrestha',address:'Baneshwor',dob:'01-09-2000',email:['prithashrestha007@gmail.com'], phonenumber:'+977982346632' ,gender:'female'},
    {uid: '2' ,name:'Riya Bazgain',address:'Bhaktapur',dob:'27-03-2002',email:['riyabzgn@gmail.com'], phonenumber:'+97794982346632' ,gender:'female'},
    {uid: '3' ,name:'Sanil Manandhar',address:'Kritipur',dob:'01-15-2001',email:['sanilmndr@gmail.com'], phonenumber:'+977942346632' ,gender:'male'},
  ];


  getFormValue() {
    return this.formValue;
  }

  addUser(user: any) {
    this.formValue.push(user);
  }

  updateUser(user:any){
    const index= this.formValue.findIndex((u:any) => u.uid === user.uid);
    if(index !== -1){
      this.formValue[index]= user;
    }
  }
}
