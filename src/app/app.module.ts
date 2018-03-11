// Other imports removed for brevity

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

// Paste in your credentials that you saved earlier
var firebaseConfig = {
   apiKey: "AIzaSyB04tVUXI6Qyp9a2yCnBjYMjHwe1z4En3M",
    authDomain: "firestore-12df8.firebaseapp.com",
    databaseURL: "https://firestore-12df8.firebaseio.com",
    projectId: "firestore-12df8",
    storageBucket: "",
    messagingSenderId: "824089972118"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),  // Add this
    AngularFirestoreModule                            // And this
  ],
  providers: [],
  bootstrap: [AppComponent]
})