# Test Case MF

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
"scripts": {
    "ng": "ng",
    "start": "ng serve",
    "build": "ng build",
    "watch": "ng build --watch --configuration development",
    "test": "ng test",
    "run:all": "node node_modules/@angular-architects/module-federation/src/server/mf-dev-server.js"
  }
```
### All projects Run
```
"run:all": "node node_modules/@angular-architects/module-federation/src/server/mf-dev-server.js"
```
#### First window that opens
http://localhost:3000/ - Main App (Root: projects > container)
#### Second window that opens
http://localhost:3001/ - Store App (Root: projects > store)
#### Third window that opens
http://localhost:3002/ - Shell App (Root: projects > shell)
###
![](documents/appsInfo.png)
### Compiles and minifies for production
```
npm run build
```
#

# First window that opens screen (MainApp)
![](documents/mainApp_Screen_01.png)
####
![](documents/mainApp_Screen_02.png)
####
![](documents/mainApp_Screen_03.png)
#

# Second window that opens screen (StoreApp)
![](documents/storeApp_Screen_01.png)
#

# Third window that opens screen (ShellApp)
![](documents/shellApp_Screen_01.png)
####
![](documents/shellApp_Screen_02.png)
#

#
### Lints and fixes files
```
npm run lint
```

