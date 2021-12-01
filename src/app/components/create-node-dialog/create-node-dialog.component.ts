import { TreeNodeModel } from './../../models/tree-node.model';
import { Component, Input, Output, EventEmitter} from '@angular/core';
import { FolderStructureService } from '../../services/folder-structure.service'
import { TreeNodeEnum } from '../../models/enums/tree-node.enum'

@Component({
  selector: 'app-create-node-dialog',
  templateUrl: './create-node-dialog.component.html',
  styleUrls: ['./create-node-dialog.component.scss']
})
export class CreateNodeDialogComponent {

  public TreeNodeEnum = TreeNodeEnum;
  
  @Input() public parentNode!: TreeNodeModel;
  @Input() public isRoot!: boolean;
  @Input() public isDialogVisible!: boolean;
  @Output() public isDialogVisibleChange = new EventEmitter<boolean>();
  
  public nodeType = TreeNodeEnum.UNSET;
  public nodeName = '';

  constructor(private folderStructureService: FolderStructureService) { }

  public closeDialog(): void {
    this.isDialogVisible = false;
    this.isDialogVisibleChange.emit(this.isDialogVisible);
    this.nodeName = '';
    this.nodeType = (this.isRoot) ? TreeNodeEnum.FOLDER : TreeNodeEnum.UNSET;
  }

  public createNewNode(): void {
    if (this.isRoot) {
      this.nodeType = TreeNodeEnum.FOLDER;
    }
    this.folderStructureService.addNode(this.nodeType, this.nodeName, this.parentNode);
    this.closeDialog();
  }

  public setNodeType(nodeType: TreeNodeEnum): void {
    this.nodeType = nodeType;
  }

}
