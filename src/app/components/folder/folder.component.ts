import { Component, Input } from '@angular/core';
import { TreeNodeModel } from '../../models/tree-node.model';
import { TreeNodeEnum } from '../../models/enums/tree-node.enum';
import { FolderStructureService } from 'src/app/services/folder-structure.service';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.component.html',
  styleUrls: ['./folder.component.scss']
})
export class FolderComponent {
  
  public TreeNodeEnum = TreeNodeEnum;

  @Input() public parentNode!: TreeNodeModel;
  @Input() public node!: TreeNodeModel;
  @Input() public index!: number;
  @Input() public isHidden!: boolean;
  @Input() public isCreateNodeDialogVisible = false;
  
  constructor(private folderStructureService: FolderStructureService) { }

  public showCreateNodeDialog(): void {
    this.isCreateNodeDialogVisible = true;
  }
  
  public deleteNode(parentNode: TreeNodeModel, childIndex: number): void {
    this.folderStructureService.deleteNode(parentNode, childIndex);
  }

  public getFolderListClass(): string {
    return this.isHidden ? 'folder-list-hidden' : 'folder-list';
  }

  public getFolderItemClass(): string {
    return this.isHidden ? 'folder-item-hidden' : 'folder-item';
  }

}
