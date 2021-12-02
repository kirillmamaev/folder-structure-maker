import { Observable, map } from 'rxjs'
import { Component } from '@angular/core';
import { FolderStructureService } from './../../services/folder-structure.service';
import { TreeNodeModel } from '../../models/tree-node.model';

/**
 * JSON Viewer Component
 * Renders representation of the folder tree structure as a JSON object.
 */
@Component({
  selector: 'app-json-viewer',
  templateUrl: './json-viewer.component.html',
  styleUrls: ['./json-viewer.component.scss']
})
export class JsonViewerComponent {

  public treeDataJson$: Observable<string>;

  /**
   * Creates an instance of json viewer component.
   * @param folderStructureService 
   */
  constructor(private folderStructureService: FolderStructureService) {
    /* Maps treeData observable into a JSON string observable to subscribe
       directly in the template and avoid any additional convertions. */    
    this.treeDataJson$ = this.folderStructureService.treeData$.pipe(
      map((treeData: TreeNodeModel) => {
        return this.folderStructureService.serializeTreeData(treeData);
      })
    );
  }
  
}
