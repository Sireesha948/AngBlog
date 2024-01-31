import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection, collectionData, limit, query, where } from '@angular/fire/firestore';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class SubscribersService {
  userData5!: Observable<any>;


  constructor(private afs: Firestore) { }

  // addSubs(subData:any){

  // }

  addSubs(data: any){
    const collectionInstance = collection(this.afs, 'subscribers')
    addDoc(collectionInstance, data).then((docRef)=>{
         console.log('Subscriber Saved Successfully');
        //alert('Data Insert Successfully..!');
       
   })
   .catch(err => {console.log(err)})

  }

  // checkSubs(subEmail:any){
  //   const collectionIn = query(collection(this.afs, 'posts'),  where('email', '==', subEmail));
     
    
  //   collectionData(collectionIn).subscribe(val=>{
  //       return val;
  //   })
  //   this.userData5 = collectionData(collectionIn, {idField: 'email'})

  // }
}
