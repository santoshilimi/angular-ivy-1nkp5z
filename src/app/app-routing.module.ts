import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EpubComponent } from './epub/epub.component';
import { VideoComponent } from './video/video.component';
import { PdfComponent } from './pdf/pdf.component';

const routes: Routes = [
  {path: 'epub', component: EpubComponent},
  {path: 'video', component: VideoComponent},
  {path: 'pdf', component: PdfComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
