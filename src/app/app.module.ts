import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IonicStorageModule } from '@ionic/storage';
import { environment } from '../environment/environment.prod';


// -->Import: pages/components
import { MyApp } from './app.component';
import { GeneralPage } from '../pages/general/general';
import { AnulUnuPage } from '../pages/anul-unu/anul-unu';
import { AnulDoiPage } from '../pages/anul-doi/anul-doi';
import { AnulTreiPage } from '../pages/anul-trei/anul-trei';
import { SecretariatPage } from '../pages/secretariat/secretariat';
import { LoginPage } from '../pages/login/login'
import { PostAddPage } from "../pages/post-add/post-add";
import { ContPage } from "../pages/cont/cont";

// -->Import: modules
import { CommonComponentsModule } from '../components/components.module';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from "angularfire2/auth";

// -->Import: services
import { AuthService } from '../services/auth.service';
import { HelpService } from '../services/help.service';
import { UserFireStoreService } from '../services/userFireStore.service';
import { PostFireStoreService } from "../services/postFireStore.service";
import { ChatFireStoreService } from "../services/chatFireStore.service";

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    GeneralPage,
    AnulUnuPage,
    AnulDoiPage,
    AnulTreiPage,
    SecretariatPage,
    PostAddPage,
    ContPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    CommonComponentsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    GeneralPage,
    AnulUnuPage,
    AnulDoiPage,
    AnulTreiPage,
    SecretariatPage,
    PostAddPage,
    ContPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HelpService,
    AuthService,
    UserFireStoreService,
    PostFireStoreService,
    ChatFireStoreService
  ]
})
export class AppModule {}
