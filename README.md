# Thumbnails with Azure Functions 
### How well do you know the wonders of Azure? 
Introduction to Azure Storage and Functions with Node.js project. The task is to create a function which is triggered when a new file is uploaded to the blob storage. The function then transforms the file into it's miniature version (thumbnail), and stores it to the storage alongside the original file.
### Technologies 
- Node.js
- Image-thumbnail module
- Nodemailer module
- Azure Storage and Functions
### Idea
- Create Azure Storage and blob containers
- Create first Azure Functions:
	- Function to detect new uploaded file and change it to it's miniature, as well as save it alongside the original picture
	- Function that sends an email every time the file is added containing both images (original and thumbnail)
	- Practice CI

### Process
- I created a new resource group in Azure specifically for this project "Thumbnail_Maria".
- I created storage in Azure and two blob containers named "originals" and "thumbnails".
- I created a new Function App "ThumbnailMaria" which is using node.js and windows os.
- Inside I created a function which is triggered by new upload to blob storage which is called "func-triggered-by-bew-blob-upload" (index.js). 
- I copy the link from Function App-ThumbnailMaria-Overview-JSON View "<nameOfYourFunction>scm.azurewebsites.net", which allows me to access my function and install dependencies.
- In "<nameOfYourFunction>scm.azurewebsites.net" choose Debug console => CMD, navigate to your function and do npm init to initiate your node.js project. You can also install dependencies like image-thumbnail and others, which you might need.
- Return to your function "func-triggered-by-bew-blob-upload" and go to integration. Set your Trigger (binding type = blob storage, name of the variable for your blobs, path which is the container to which you are going to upload your images("originals/{name}" in my case) and storage account connection).
- Set your output (blob storage, name of blob variable, path ("thumbnails/{name}" in my case) and storage account connection).


### Contributing
All comments and ideas are very welcome! Feel free to contact us and share your thoughts! 


