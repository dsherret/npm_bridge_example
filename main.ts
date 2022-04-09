import { Project } from "ts-morph";

const project = new Project();
const sourceFile = project.createSourceFile("test.ts", "class MyClass {}")
console.log(sourceFile.getClasses()[0].getName());
