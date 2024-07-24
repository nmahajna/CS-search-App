import { TreeNode } from "primeng/api";
import { SubType } from "./subType";

export interface Type  extends TreeNode {
    children?:SubType[];
}