import { Component, Input } from '@angular/core';
import { FolderStructureService } from 'src/app/services/folder-structure.service';
import { TreeNodeModel } from '../../models/tree-node.model';

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.scss']
})
export class FileComponent {
  
  @Input() public parentNode!: TreeNodeModel;
  @Input() public node!: TreeNodeModel;
  @Input() public index!: number;
  
  constructor(private folderStructureService: FolderStructureService) { }

  public deleteNode(parentNode: TreeNodeModel, childIndex: number): void {
    this.folderStructureService.deleteNode(parentNode, childIndex);
  }

}
