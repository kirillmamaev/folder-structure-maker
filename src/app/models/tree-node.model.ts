import { TreeNodeEnum } from './enums/tree-node.enum'

export class TreeNodeModel {
    type: TreeNodeEnum;
    name: string;
    children: TreeNodeModel[] | null;
    id: string;

    constructor(type: TreeNodeEnum, name: string) {
        this.type = type;
        this.name = name;
        this.children = (type === TreeNodeEnum.FOLDER) ? new Array<TreeNodeModel>() : null;
        this.id = name + Date.now().toString(); // TODO(kirillmamaev): fast solution (uid library should be used for proper implementation)
        return this;
    }
}