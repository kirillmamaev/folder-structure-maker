import { Component, ViewChild } from '@angular/core';
import { FolderStructureService } from './../../services/folder-structure.service';
import { FolderComponent } from '../folder/folder.component';

@Component({
  selector: 'app-folder-structure',
  templateUrl: './folder-structure.component.html',
  styleUrls: ['./folder-structure.component.scss']
})
export class FolderStructureComponent {

  @ViewChild('rootFolder', {read: FolderComponent}) private rootFolder!: FolderComponent;

  public treeData$ = this.folderStructureService.treeData$;

  constructor(private folderStructureService: FolderStructureService) { }

  public showNewNodeDialog(): void {
    this.rootFolder.showNewNodeDialog();
  }

}
