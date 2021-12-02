import { Component, Input } from '@angular/core';
import { TreeNodeModel } from '../../models/tree-node.model';
import { TreeNodeEnum } from '../../models/enums/tree-node.enum';
import { FolderStructureService } from 'src/app/services/folder-structure.service';

/**
 * Folder Component
 */
@Component({
  selector: 'app-folder',
  templateUrl: './folder.component.html',
  styleUrls: ['./folder.component.scss']
})
export class FolderComponent {
  
  public TreeNodeEnum = TreeNodeEnum; // TreeNodeEnum for HTML

  @Input() public parentNode!: TreeNodeModel;
  @Input() public node!: TreeNodeModel;
  @Input() public index!: number;
  @Input() public isHidden!: boolean;
  @Input() public isCreateNodeDialogVisible = false;
  
  constructor(private folderStructureService: FolderStructureService) { }

  /**
   * Shows create new node dialog.
   */
  public showCreateNodeDialog(): void {
    this.isCreateNodeDialogVisible = true;
  }
  
  /**
   * Deletes node.
   * @param parentNode 
   * @param childIndex 
   */
  public deleteNode(parentNode: TreeNodeModel, childIndex: number): void {
    this.folderStructureService.deleteNode(parentNode, childIndex);
  }

  /**
   * Gets folder list CSS class as string.
   */
  get folderListClass(): string {
    return this.isHidden ? 'folder-list-hidden' : 'folder-list';
  }

  /**
   * Gets folder list item CSS class as string.
   */
  get folderListItemClass(): string {
    return this.isHidden ? 'folder-item-hidden' : 'folder-item';
  }

}
