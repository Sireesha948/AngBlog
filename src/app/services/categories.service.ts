import { Injectable } from '@angular/core';
import { Firestore,collection,addDoc,  deleteDoc, updateDoc, doc, collectionData} from '@angular/fire/firestore';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  userData!: Observable<any>;

  constructor(private afs: Firestore) {


    const collectionInstance = collection(this.afs, 'categories');
    collectionData(collectionInstance, {idField: 'id'}).subscribe(val=>{
      console.log(val)
    })

      this.userData = collectionData(collectionInstance, {idField: 'id'});
  }
   


  

  loadData(){
    return this.userData;
     }



}
