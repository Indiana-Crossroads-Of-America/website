# indiana-crossroads-of-america

###### Note: Demo installs can be ran locally, or via the demo VPS.


## Dependencies

``
npm install -g serve
``
<br/>
``
npm i
``
## Project setup

``
npm install
``

### Compiles and hot-reloads for development

``
npm run serve
``

### How to start! *These force bind to 80, check your code for information on different binds*
* M1: ``` sudo PORT=80 npx vue-cli-service serve --port 80 ```
* M2: ```sudo npm run serve```
* M3: ```serve -s dist -l 80``` REQUIRES: -g serve

### Compiles and minifies for production

``
npm run build
serve -s dist -l 80
``

### Lints and fixes files

``
npm run lint
``

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

### Proper NODE Versioning.
1st run: ``npm cache clean -f``
2nd run: ``npm install -g n``
3rd run: ``sudo n stable``
4th run: ``sudo reboot``
Lastly run: node --version


### Deploying SSH 
⚠ WARNING: Please only use this for developer instances, main builds see a different route. ⚠
<br />
Esure proper version, run ``npm i`` then ``npm run serve -- --port 3000
``

If you're having issues, contact someone whom knows what they're doing.


##### Having Issues with PIDs?
Run `` ps -aux`` and look for VUEJS-CLI server instances and use  ``sudo kill PID`` to end them.
