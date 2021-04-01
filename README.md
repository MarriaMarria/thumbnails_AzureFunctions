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


### Contributing
All comments and ideas are very welcome! Feel free to contact us and share your thoughts! 


