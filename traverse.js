const fs = require("fs");
const {join} = require("path");

const traverse = (dir) => {

    const subfolders = fs.statSync(dir).isDirectory() && fs.readdirSync(dir);

    if(subfolders) {
        console.log("Traversing ", dir);

        subfolders.forEach(path => {
            const fullPath = join(dir, path);
            traverse(fullPath);
        });
    }
}


traverse(process.cwd());