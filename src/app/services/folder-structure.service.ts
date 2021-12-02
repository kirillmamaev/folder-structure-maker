import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs'
import { TreeNodeModel } from '../models/tree-node.model'
import { TreeNodeEnum } from '../models/enums/tree-node.enum';

@Injectable()
export class FolderStructureService {

  private readonly treeDataId = 'folder-structure-maker-data';
  private treeData = new TreeNodeModel(TreeNodeEnum.FOLDER, "root");
  
  private treeDataSource$: BehaviorSubject<TreeNodeModel>;
  
  constructor() {
    const data = localStorage.getItem(this.treeDataId);
    if (data && data?.length) this.treeData = JSON.parse(data);
    this.treeDataSource$ = new BehaviorSubject<TreeNodeModel>(this.treeData);
  }
  
  get treeData$(): Observable<TreeNodeModel> {
    return this.treeDataSource$.asObservable();
  }

  private saveToLocalStorage(): void {
    const jsonData = JSON.stringify(this.treeData);
    localStorage.setItem(this.treeDataId, jsonData);
  }

  public addNode(type: TreeNodeEnum, name: string, parentNode: TreeNodeModel): void {
    if (!name || parentNode?.type !== TreeNodeEnum.FOLDER || !parentNode?.children) {
      return;
    }
    console.log(type, name, parentNode);
    const newNode = new TreeNodeModel(type, name);
    parentNode.children.push(newNode);
    this.treeDataSource$.next(this.treeData);
    this.saveToLocalStorage();
  }

  public deleteNode(parentNode: TreeNodeModel, childIndex: number): void {
    if (parentNode && parentNode.children && childIndex != null) {
      parentNode.children.splice(childIndex, 1);
    }
    this.treeDataSource$.next(this.treeData);
    this.saveToLocalStorage();
  }

  public serialize(treeData: TreeNodeModel): string {
    return JSON.stringify(treeData);
  }

}