/**
 * Created by mary on 5/17/16.
 */


let multiparty = require('multiparty');
let fs = require('fs');

function saveImage(req, res) {
    let form = new multiparty.Form();

    form.parse(req, (err, fields, files) => {

        let {path: tempPath, originalFilename} = files.imageFile[0];
        let copyToPath = "./images/" + originalFilename;

        fs.readFile(tempPath, (err, data) => {
            // make copy of image to new location
            fs.writeFile(newPath, data, (err) => {
                // delete temp image
                fs.unlink(tmpPath, () => {
                    res.send("File uploaded to: " + newPath);
                });
            });
        });
    })
}