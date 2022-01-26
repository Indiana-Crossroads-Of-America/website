# indiana-crossroads-of-america

###### Note: Demo installs can be ran locally, or via the demo VPS.


## Project setup

```
npm install
If you want to change the port try npm run serve -- --port 3000
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Change the port (May cause longer building period)
* M1: ``` sudo PORT=80 npx vue-cli-service serve --port 80 ```
* M2: ```sudo npm run serve```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

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
