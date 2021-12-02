import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs'
import { TreeNodeModel } from '../models/tree-node.model'
import { TreeNodeEnum } from '../models/enums/tree-node.enum';

/**
 * Injectable Folder Structure Service
 */
@Injectable()
export class FolderStructureService {

  private readonly TREE_DATA_ID = 'folder-structure-maker-data';
  private treeData = new TreeNodeModel(TreeNodeEnum.FOLDER, "root");
  private treeDataSource$: BehaviorSubject<TreeNodeModel>;
  
  /**
   * Creates an instance of folder structure service.
   */
  constructor() {
    const data = localStorage.getItem(this.TREE_DATA_ID);
    if (data && data?.length) this.treeData = this.deserializeTreeData(data);
    this.treeDataSource$ = new BehaviorSubject<TreeNodeModel>(this.treeData);
  }
  
  /**
   * Gets tree data as observable.
   */
  get treeData$(): Observable<TreeNodeModel> {
    return this.treeDataSource$.asObservable();
  }

  /**
   * Saves tree structure to the local storage.
   */
  private saveToLocalStorage(): void {
    const jsonData = this.serializeTreeData(this.treeData);
    localStorage.setItem(this.TREE_DATA_ID, jsonData);
  }

  /**
   * Adds node to the tree structure.
   * @param type Type of the node to created and added
   * @param name Name of the node to created and added
   * @param parentNode Parrent node for the new node to be created
   */
  public addNode(type: TreeNodeEnum, name: string, parentNode: TreeNodeModel): void {
    if (!name || parentNode?.type !== TreeNodeEnum.FOLDER || !parentNode?.children) {
      return;
    }
    // Creates new node and pushes to the parentNode children array.
    const newNode = new TreeNodeModel(type, name);
    parentNode.children.push(newNode);
    
    // Updates and saves the chaneged tree structure.
    this.treeDataSource$.next(this.treeData);
    this.saveToLocalStorage();
  }

  /**
   * Deletes node from the tree structure.
   * @param parentNode A parrent node object
   * @param childNodeIndex Index of the child element to be deleted
   */
  public deleteNode(parentNode: TreeNodeModel, childNodeIndex: number): void {
    if (parentNode && parentNode.children && childNodeIndex != null) {
      // Deletes 1 element from parentNode children array at provided index.
      parentNode.children.splice(childNodeIndex, 1);
    }
    
    // Updates and saves the chaneged tree structure.
    this.treeDataSource$.next(this.treeData);
    this.saveToLocalStorage();
  }

  /**
   * Serializes tree structure to JSON string.
   * @param treeData A TreeNodeModel representing the tree structure
   * @returns JSON string
   */
  public serializeTreeData(treeData: TreeNodeModel): string {
    return JSON.stringify(treeData);
  }

  /**
   * Deserializes tree structure from JSON string.
   * @param jsonString A JSON string representation of TreeNodeModel object
   * @returns TreeNodeModel object
   */
  public deserializeTreeData(jsonString: string): TreeNodeModel {
    return JSON.parse(jsonString);
  }

}