--------------------------------------------------------------
# Note to User
--------------------------------------------------------------
### To launch and run locally. First clone repo, then run:

`npm install --save react-scripts`

`npm start`

### To run previous commit state locally, we run:
`git checkout <previous commit hash> .`

### Example:
`git checkout be922721b40fc0d34b38e49f2cfd417334e8de6b .`

### To get back to most current commit on master branch:
`git stash`

`git pull origin master`

---------------------------------------------------------------
# Install NPM and Make App from Scratch
---------------------------------------------------------------

## Installs webpack, babel, debugging and other NPM packages
`npm install -g create-react-app`

`create-react-app face-recognition-brain`

`cd face-recognition-brain`

## To Start NPM Server
`npm start`

## After making repo on Gitub, push local app:
`git init`

`git remote add origin <your repo address here>`

`git push --set-upstream origin master --force`

----------------------------------------------------------
# Install Particles (dynamic D3) for React
https://www.npmjs.com/package/react-particles-js
---------------------------------------------------------

`npm install react-particles-js`

----------------------------------------------------------
# 231. Image Recognition API
----------------------------------------------------------

Using Clarifai.com for facial recognition
Need to setup account first, then install:
`npm install clarifai`

Practice using this url (green landscape w/ `Clarifai.COLOR_MODEL`):
https://png.pngtree.com/element_our/png/20180809/color-powder-background-png_48645.png

For general demographics use (face img w/`Clarifai.GENERAL_MODEL`):
https://media4.s-nbcnews.com/i/newscms/2017_47/2233721/171120-smile-stock-njs-333p_4ecd5b9a2aefbfdfbc3331c6d474d963.jpg

Then we'll use the facial detection bounding-box (face img w/`Clarifai.FACE_DETECT_MODEL`):
https://media4.s-nbcnews.com/i/newscms/2017_47/2233721/171120-smile-stock-njs-333p_4ecd5b9a2aefbfdfbc3331c6d474d963.jpg
