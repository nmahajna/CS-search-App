import { TreeNode } from "primeng/api";
import {  ObjectNode } from "./objectNode";

export interface SubType extends TreeNode  {
    children?:ObjectNode[];
}