
import { Observable, map } from 'rxjs'
import { Component } from '@angular/core';
import { FolderStructureService } from './../../services/folder-structure.service';
import { TreeNodeModel } from '../../models/tree-node.model';

@Component({
  selector: 'app-json-viewer',
  templateUrl: './json-viewer.component.html',
  styleUrls: ['./json-viewer.component.scss']
})
export class JsonViewerComponent {

  public treeDataJson$: Observable<string>;

  constructor(private folderStructureService: FolderStructureService) {
    this.treeDataJson$ = this.folderStructureService.treeData$.pipe(
      map((treeData: TreeNodeModel) => {
        return this.folderStructureService.serialize(treeData);
      })
    );
  }
  
}
