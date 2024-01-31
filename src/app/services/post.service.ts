import { Injectable } from '@angular/core';
import { Firestore,collection,addDoc,  deleteDoc, updateDoc, doc, collectionData, getDoc} from '@angular/fire/firestore';
import { ref } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { getFirestore,query, where, getDocs , limit, orderBy} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class PostService {


  userData!: Observable<any>;

  userData2!: Observable<any>;

  userData3!: Observable<any>;

  userData4!: Observable<any>;

 

  constructor(private afs: Firestore,) { 


    const collectionInstance = query(collection(this.afs, 'posts'), where('isFeatured', '==', true),limit(4));
    collectionData(collectionInstance, {idField: 'id'}).subscribe(val=>{
      console.log(val)
    })

      this.userData = collectionData(collectionInstance, {idField: 'id'});


      const collectionInst = query(collection(this.afs, 'posts'), orderBy('createdAt'));
    collectionData(collectionInst, {idField: 'id'}).subscribe(val=>{
      console.log(val)
    })

    this.userData2 = collectionData(collectionInst, {idField: 'id'});
  
  
    // const collectionIn = query(collection(this.afs, 'posts'),  where('category.categoryId', '==', categoryId),limit(4));
    // collectionData(collectionIn, {idField: 'id'}).subscribe(val=>{
    //   console.log(val)
    // })

    // this.userData3 = collectionData(collectionIn, {idField: 'id'});
  
  
  
  }

   


  

  loadFeatured(){
    return this.userData;
     }

  
   loadLatest(){

     return this.userData2;


   }

   loadCategoryPosts(categoryId:any){


    const collectionIn = query(collection(this.afs, 'posts'),  where('category.categoryId', '==', categoryId),limit(4));
    collectionData(collectionIn, {idField: 'id'}).subscribe(val=>{
      console.log(val)
    })

    this.userData3 = collectionData(collectionIn, {idField: 'id'});
  

    return this.userData3;


   }

  //  loadOnePost(postId: any){

  //   const collectionInstance = doc(this.afs, `posts/${postId}`);

  //   return collectionInstance;
  //  }


   async loadOnePost(postId:any){

    const db = getFirestore();
    const docRef = doc(db, `posts/${postId}`);
    const docSnap = await getDoc(docRef);
    return docSnap.data();

}

loadSimilar(catId:any){

  const collectionIn = query(collection(this.afs, 'posts'),  where('category.categoryId', '==', catId),limit(4));
    collectionData(collectionIn, {idField: 'id'}).subscribe(val=>{
      console.log(val)
    })

    this.userData4 = collectionData(collectionIn, {idField: 'id'});
  

    return this.userData4;

}
   


async countViews(postId:any){

  const db = getFirestore();
  const docRef = doc(db, `posts/${postId}`);
  const docSnap = await getDoc(docRef);
  return docSnap.data();

}


}
