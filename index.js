module.exports = async function (context, myBlob) {
    context.log("JavaScript blob trigger function processed blob \n Blob:", context.bindingData.blobTrigger, "\n Blob Size:", myBlob.length, "Bytes");
    const imageThumbnail = require('image-thumbnail');
    const new_image = await imageThumbnail(myBlob);
    
    context.bindings.outputBlob = new_image;
    context.log('outputblob: ', context.bindings.outputBlob)
};