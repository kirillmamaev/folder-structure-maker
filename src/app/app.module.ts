import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { FolderStructureService } from './services/folder-structure.service'

import { AppComponent } from './app.component';
import { CreateNodeDialogComponent } from './components/create-node-dialog/create-node-dialog.component';
import { FileComponent } from './components/file/file.component';
import { FolderComponent } from './components/folder/folder.component';
import { FolderStructureComponent } from './components/folder-structure/folder-structure.component';
import { JsonViewerComponent } from './components/json-viewer/json-viewer.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateNodeDialogComponent,
    FolderComponent,
    FileComponent,
    FolderStructureComponent,
    JsonViewerComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule
  ],
  providers: [FolderStructureService],
  bootstrap: [AppComponent]
})
export class AppModule { }
