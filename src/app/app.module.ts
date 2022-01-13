import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PdfComponent } from './pdf/pdf.component';
import { VideoComponent } from './video/video.component';
import { EpubComponent } from './epub/epub.component';
import { SunbirdPdfPlayerModule } from '@project-sunbird/sunbird-pdf-player-v9';
import { SunbirdVideoPlayerModule } from '@project-sunbird/sunbird-video-player-v9';
import { QuestionCursor } from '@project-sunbird/sunbird-quml-player-v9';
import { QuestionCursorImplementationService } from './question-cursor-implementation.service';
import { SunbirdEpubPlayerModule } from '@project-sunbird/sunbird-epub-player-v9';
@NgModule({
  declarations: [
    AppComponent,
    PdfComponent,
    VideoComponent,
    EpubComponent
  ],
  imports: [
    BrowserModule,
    SunbirdPdfPlayerModule,
    SunbirdVideoPlayerModule,
    SunbirdEpubPlayerModule,
    AppRoutingModule
  ],
  providers: [{ provide: QuestionCursor, useClass: QuestionCursorImplementationService }],
  bootstrap: [AppComponent]
})
export class AppModule { }
