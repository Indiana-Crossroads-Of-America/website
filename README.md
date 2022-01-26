
#### I: COA Development READ


# This README containts CRITICAL information, malformed commands may result in broken instances.
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
Go to your directory that's empty, git clone [This Repo](https://github.com/Indiana-Crossroads-Of-America/indiana-crossroads-of-america.git) /dir/  ``<LOCATION``

  ``
npm install
``

### Compiles and hot-reloads for development

``
npm run serve
``

### How to start!

-M1: ``sudo PORT=80 npx vue-cli-service serve --port 80``

-M2: ``sudo npm run serve``

-M3: ``serve -s dist -l 80`` < REQUIRES: -g serve, and a dist dir with built program.

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

### Ensure you're using the right NODE Version
1st run: ``npm cache clean -f``

2nd run: ``npm install -g n``

3rd run: ``sudo n stable``

4th run: ``sudo reboot`` < use PC restart if out of ubuntu-os.

Lastly run: node --version


### Deploying SSH 
⚠ WARNING: Please only use this for developer instances, main builds see a different way out. ⚠
<br />
Esure proper version, run ``npm i`` then ``npm run serve -- --port 3000``

If you're having issues, contact someone whom knows what they're doing.
Developers:

[Ross](ross@indianacrossroadsofamerica.com)

[Jules](julesbehere@indianacrossroadsofamerica.com)


##### Having Issues with PIDs?
Run `` ps -aux`` and look for VUEJS-CLI server instances and use  ``sudo kill PID`` to end them.
