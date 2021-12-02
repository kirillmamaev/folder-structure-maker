import { TreeNodeEnum } from './enums/tree-node.enum'

/**
 * Tree Node Model Class
 */
export class TreeNodeModel {
  type: TreeNodeEnum;
  name: string;
  children: TreeNodeModel[] | null;
  id: string;

  /**
   * Creates an instance of tree node model.
   * @param type Type of the new node
   * @param name Name of the new node
   */
  constructor(type: TreeNodeEnum, name: string) {
    this.type = type;
    this.name = name;
    this.children = (type === TreeNodeEnum.FOLDER) ? new Array<TreeNodeModel>() : null;
    this.id = name + Date.now().toString(); // TODO(kirillmamaev): Fast solution (uid library should be used for proper implementation).
    return this;
  }
}