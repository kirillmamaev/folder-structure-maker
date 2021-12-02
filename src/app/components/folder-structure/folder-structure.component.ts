import { Component, ViewChild } from '@angular/core';
import { FolderStructureService } from './../../services/folder-structure.service';
import { FolderComponent } from '../folder/folder.component';

/**
 * Folder Structure Component.
 * Renders the folder tree structure.
 */
@Component({
  selector: 'app-folder-structure',
  templateUrl: './folder-structure.component.html',
  styleUrls: ['./folder-structure.component.scss']
})
export class FolderStructureComponent {

  // Access root folder nested component, required for showCreateNodeDialog() method.
  @ViewChild('rootFolder', {read: FolderComponent}) private rootFolder!: FolderComponent;

  // Tree structure data observable from the Folder Structure Service service.
  public treeData$ = this.folderStructureService.treeData$;

  constructor(private folderStructureService: FolderStructureService) { }

  /**
   * Shows create node dialog for the root folder.
   */
  public showCreateNodeDialog(): void {
    this.rootFolder.showCreateNodeDialog();
  }

}
