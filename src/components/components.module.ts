import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from 'ionic-angular';

import { HeaderComponent } from './header-component/header.component';
import { GeneralPostsComponent } from './general-posts/general-posts';
import { GeneralChatComponent } from './general-chat/general-chat';
import { PostComponent } from './post/post';
import { ChatComponent } from './chat/chat';

@NgModule({
  imports: [CommonModule, IonicModule],
  declarations: [
    HeaderComponent,
    GeneralPostsComponent,
    GeneralChatComponent,
    PostComponent,
    ChatComponent,
  ],
  exports: [
    HeaderComponent,
    GeneralPostsComponent,
    GeneralChatComponent,
    PostComponent,
    ChatComponent,
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ]
})
export class CommonComponentsModule { }
