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