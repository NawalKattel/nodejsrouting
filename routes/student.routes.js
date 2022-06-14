import { Router } from "express";
export const system = Router();
import {student} from'../service/students.js'



system.get('/', student);

