// Imports and exports statements can only be used inside the module, if you check the type of this js file you can see that it's module in html
// Here we have shown importing the default export, named export and importing as the bundle, this bundle will generally
// creates the object by that object you can access all the contents that's been exported by the file mentioned
// Modules is that js file which will simply use all the exported and related content for dev a feature just like this file
// for chromes v8, google recommends using .mjs extension for the module files
import prs from "./exporterfile1.js";
import { display as disp } from "./exporterfile2.js";
import { baseData as value } from "./exporterfile2.js";
import * as importedObject from "./exporterfile2.js";
console.log(prs.name);
disp();
console.log(value);
importedObject.display();
console.log(importedObject.baseData);
