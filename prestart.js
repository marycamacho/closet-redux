var fs = require("fs-extra");

// rm -rf dev
//Delete dev
if (fs.existsSync('./dev')) {
    fs.removeSync('./dev');
}
// mkdir dev
// Make new dev Dir
fs.mkdirSync('./dev');
fs.mkdirSync('./dev/theme');

// cp -R pages/* dev
// Copy the contents of pages recursively to dev
fs.copy("./pages/", "./dev", function () {
    // Copy theme dir to dev
    fs.copy("./theme", "./dev/theme");
});

