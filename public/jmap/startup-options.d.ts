declare interface Window {
  JMAP_OPTIONS?: JCoreOptions
  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: any
}

/**
 * This section is about the JMAP Library startup options.
 * 
 * JMap library executable is available through a CDN url.
 * 
 * The URL is like "https://cdn.jsdelivr.net/npm/jmap-core-js@0.5.0/public/",
 * but it depends on the version you want to use.
 * 
 * First you need to import our JS file in your http file, in order to load the JMap Core library.
 * It's recommended to put the CDN import at the end of the body tag, like that :
 * ```html
 * ...
 * <html>
 *   ...
 *   <body>
 *     ...
 *     <!-- !!! Insert the import at the end of the body tag !!! -->
 *     <script defer type="text/javascript" src="https://cdn.jsdelivr.net/npm/jmap-core-js@x.x.x/public/"></script>
 *   </body>
 * </html>
 * ```
 * To make the JMap Core library working you need to provide some required information like :
 * 
 *   - Your JMap Server Rest API URL
 *   - The project id to open
 *   - A valid JMap user session token, **or** set the JMap Core library to log as "anonymous"
 * 
 * It can be passed by setting a global JS variable named "JMAP_OPTIONS" :
 * 
 * ```html
 * <html>
 *   <body>
 *     <script type="text/javascript">
 *       window.JMAP_OPTIONS = {
 *         // a valid project id
 *         projectId: 10,
 *         // a valid JMap server Rest url
 *         restBaseUrl: "http://my-jmap-server/services/rest/v2.0",
 *         session: {
 *           // a valid session token
 *           token: 2345677654
 *         }
 *         ... // other optional JMAP params
 *       }
 *     </script>
 *     ... your web page
 *     <script defer type="text/javascript" src="https://cdn.jsdelivr.net/npm/jmap-core-js@x.x.x/public/"></script>
 *   </body>
 * </html>
 * ```
 * 
 * Below a full example of how to start the JMap library in a web page,
 * where parameters ***ngToken*** and ***ngProjectId*** are get from the url :

 * ```html
 * <!DOCTYPE html>
 * <html>
 *   <head>
 *     <meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
 *     <meta charset="UTF-8">
 *   </head>
 *   <body class="jmap_wrapper">
 *    <script type="text/javascript">
 *       const url = new URL(window.location.href)
 *       const token = url.searchParams.get("ngToken")
 *       let projectId = Number(url.searchParams.get("ngProjectId"))
 *       if (isNaN(projectId)) {
 *         projectId = 0
 *       }
 *       window.JMAP_OPTIONS = {
 *         projectId: Number(projectId),
 *         restBaseUrl: "http://your-jmap-server-url/services/rest/v2.0",
 *         token: token
 *       }
 *     </script>
 *     <script defer type="text/javascript" src="https://cdn.jsdelivr.net/npm/jmap-core-js@x.x.x/public/index.js">
 *     </script>
 *   </body>
 * </html>
 * ```
 * 
 * For example, you can pass this parameters like that :
 *   - **http:// my-company/my-custom-page-using-jmap?ngToken=95423672742&ngProjectId=10**.
 * 
 * When JMAP Core library starts, if the **JMap token "*95423672742*"** is valid, it will automatically load
 * the **JMap project id=*10***, then load the map in the **div id="*jmap-map*"**.
 */
declare interface JCoreOptions {
  /**
   * The JMap project id.
   * 
   * If both a project id and a project name are provided, project id will be used.
   * 
   * If no project name or id are set, the library will do noting, you will have a blank page.
   * 
   * So if you want the library to load the project automatically, you need to set the project id.
   * 
   * ```html
   * <html>
   *   ...
   *   <body>
   *     <script type="text/javascript">
   *       window.JMAP_OPTIONS = {
   *         ...
   *         // a valid project id
   *         projectId: 12
   *       }
   *     </script>
   *     ...
   *   </body>
   * </html>
   * ```
   */
  projectId?: JId

  /**
   * A JMap project name.
   * 
   * If you can prefer using the project id over the name.
   * 
   * If both a project id and a project name are provided, project id will be used.
   * 
   * If no project name or id are set, the library will do noting, you will have a blank page.
   * 
   * So if you want the library to load the project automatically, you need to set the project name (or id).
   * 
   * ```html
   * <html>
   *   ...
   *   <body>
   *     <script type="text/javascript">
   *       window.JMAP_OPTIONS = {
   *         ...
   *         // a valid project name
   *         projectName: "The world"
   *       }
   *     </script>
   *     ...
   *   </body>
   * </html>
   * ```
   */
  projectName?: string

  /**
   * If provided this function will be processed when the list of projects is received from the server :
   * 
   * the event receives a JProjectAllEventParams object
   * 
   * ```html
   * <html>
   *   ...
   *   <body>
   *     <script type="text/javascript">
   *       window.JMAP_OPTIONS = {
   *         ...
   *           onProjectsChange: (params) => {
   *              params.projects.forEach(project => console.log("project name: " + project.name))
   *           },
   *         ...
   *       }
   *     </script>
   *     ...
   *   </body>
   * </html>
   * ```
   */
  onProjectsChange?(params: JProjectAllEventParams): void
  
  /**
   * By default project thumbnails are not loaded, because they are not usefull if JMap Core lib is used alone.
   * 
   * To load asynchronously project thumbnails, set startup option "loadProjectThumbnails" to true.
   * 
   * JMap Core lib will load all project thumbnails (or preview) in project objects (property "base64ImageThumbnail").
   * 
   * The thumbnail is stored as a base64 string image, that you can use to set an img src attribute directly.
   * 
   * For a project object, if thumbnail is not loaded, default value of its property "base64ImageThumbnail" is "" (empty string).
   * 
   * ```html
   * <html>
   *   ...
   *   <body>
   *     <script type="text/javascript">
   *       window.JMAP_OPTIONS = {
   *         ...
   *         loadProjectThumbnails: true
   *       }
   *     </script>
   *     ...
   *   </body>
   * </html>
   * ```
   * 
   * Then you will be able to get a project and use its thumbnail  :
   * ```javascript
   * JMap.Project.getBase64ImageThumbnail() // return loaded project image, "" if no image loaded
   * JMap.Project.getById(3).base64ImageThumbnail // return project id=3 image, "" if no image loaded
   * ```
   */
  loadProjectThumbnails?: boolean

  /**
   * The JMap Server Rest API url.
   * 
   * Default value is : http://localhost:8080/services/rest/v2.0 (for test only).
   * 
   * If your are not testing you must provide the url of your JMap REST API :
   * ```html
   * <html>
   *   ...
   *   <body>
   *     <script type="text/javascript">
   *       window.JMAP_OPTIONS = {
   *         ...
   *         // a valid JMap REST Api url
   *         restBaseUrl: "http://my-custom-jmap-server-url/services/rest/v2.0"
   *       }
   *     </script>
   *     ...
   *   </body>
   * </html>
   * ```
   */
  restBaseUrl?: string

  /**
   * If the project you access can be accessed anonymously,
   * you are not forced to pass a session token but you have
   * to explicitly tell the JMap NG library to log as an anonymous
   * user by setting the "***anonymous***" parameter like that :
   * 
   * ```html
   * <html>
   *   ...
   *   <body>
   *     <script type="text/javascript">
   *       window.JMAP_OPTIONS = {
   *         // a valid project id
   *         projectId: 10,
   *         // a valid JMap Server Rest url
   *         restBaseUrl: "http://my-jmap-server/services/rest/v2.0",
   *         // The anonymous parameter
   *         anonymous: true
   *         ... // other optional JMAP params
   *       }
   *     </script>
   * 
   *     ... your web page
   *     
   *     <script defer type="text/javascript" src="https://cdn.jsdelivr.net/npm/jmap-core-js@x.x.x/public/"></script>
   *   </body>
   * </html>
   * ```
   */
  anonymous?: boolean

  /**
   * The JMap user's session token.
   *
   * If you don't use the library logged as an anonymous user (see the ***anonymous*** parameter in this section),
   * you must provide the JMap session id to the JMap library.
   *
   * To get a session token, you can use the JMap Rest API on your JMap Server. By exemple if your server url is "https://my-jmap-server/", With the [curl tool](https://curl.haxx.se/docs/) you can get for the user "jdo@company.com" his token like that (adapt the username and password ...) :
   * ```sh
   * curl -X POST "https://my-jmap-server/services/rest/v2.0/session" -H "accept: application/json" -H "Content-Type: application/json" -d "{ \"username\": \"jdo@company.com\", \"password\": \"xxx\", \"type\": \"WEB\"}"
   * ```
   * 
   * If the request is successfull, the response is like that :
   * ```js
   * {
   *   "message": "The result is a WEB session info",
   *   "status": "OK",
   *   "result": {
   *     "sessionId": 23558109,
   *     ...
   *   }
   * }
   * ```
   * 
   * The library "**token**" is the parameter "**sessionId**" in REST the response.
   * 
   * So to start the library using the token you can do like that :
   * ```html
   * <html>
   *   ...
   *   <body>
   *     <script type="text/javascript">
   *       window.JMAP_OPTIONS = {
   *         token: "23558109"
   *       }
   *     </script>
   *     ...
   *     <script defer type="text/javascript" src="https://cdn.jsdelivr.net/npm/jmap-core-js@x.x.x/public/"></script>
   *   </body>
   * </html>
   * ```
   * 
   * If you don't want to make an AJAX call to the REST API, you can use the JMap library to login (JMap will make the AJAX call to the rest API). But you have to wait for the lib to be loaded. To know if the lib has been loaded you can check if the JMAp namespace exist or not. Bellow the example :
   * 
   * ```html
   * <!DOCTYPE html>
   *   <html>
   *     ...
   *     <body class="jmap_wrapper">
   *       <script type="text/javascript">
   *         console.log("JMap", window.JMap)
   *         window.JMAP_OPTIONS = {
   *           projectId: 35,
   *           restBaseUrl: "https://jmap7dev.jmaponline.net/services/rest/v2.0",
   *           map: {
   *             zoom: 9.757829447748511,
   *             center: {
   *               x: -73.66415865898597,
   *               y: 45.53583011032552
   *             }
   *           }
   *         }
   *       </script>
   *       ...
   *       <script defer type="text/javascript" src="https://cdn.jsdelivr.net/npm/jmap-core-js@x.x.x/public/index.js"></script>
   *       <script>
   *         (function jmapLogin() {
   *           if (window.hasOwnProperty("JMap")) {
   *             JMap.User.login("jdo@company.com", "xxx")
   *           } else {
   *             console.log("Waiting for the JMap lib to be loaded ...")
   *             setTimeout(() => jmapLogin(), 150) // check every 150 milliseconds
   *           }
   *         })()
   *       </script>
   *     </body>
   *   </html>
   * ```
   * 
   */
  token?: string

  /**
   * By default the geolocation service is enabled.
   * 
   * But you can disable the geolocation service by setting the "***geolocationEnabled***" parameter to false :
   * 
   * ```html
   * <html>
   *   ...
   *   <body>
   *     <script type="text/javascript">
   *       window.JMAP_OPTIONS = {
   *         ...
   *         geolocationEnabled: false
   *       }
   *     </script>
   *     ...
   *   </body>
   * </html>
   * ```
   */
  geolocationEnabled?: boolean

  /**
   * All map related options.
   * 
   * Click on [[JCoreMapOptions]] to get details.
   */
  map?: JCoreMapOptions

  /**
   * Optional extensions.
   * 
   * Click [[JCoreExtension]] to get details about how defining an extension.
   */
  extensions?: JCoreExtension[]

  /**
   * If true, changing project after one has been loaded will be disabled.
   */
  disableProjectChange?: boolean

  /**
   * If set to any of the locales supported by JMap, will define the default locale, bypassing browser or user-defined locale.
   * 
   * Supported locales  can be retrieved by calling [[JMap.User.getLocales()]]
   */
  locale?: string

  /**
   * Call when the JMap library is loaded
   */
  onReady?: () => void

  /**
   * For developpers, you can ovveride the project's extensions url here
   * 
   * Ex: the extension having id="custom-extension" is set on the project.
   * It's url is "https://cdn.jsdelivr.net/npm/custom-extension@1.0.10/public/index.js"
   * 
   * But in development, to test your changes you want to load your dev file, that is located
   * for example at this location : "https://localhost:8083/build/index.js".
   * 
   * In order to change the extension jsUrl dynamically, you can override like this :
   * [{
   *  id: "custom-extension",
   *  jsUrl: "https://localhost:8083/build/index.js"
   * }]
   */
  extensionsUrlOverride?: JExtensionServerOverride[]

  /**
   * By default NG Core provide a main layout in order to display:
   *  - a loader incating NG Core is loading
   *  - a login panel
   *  - a project selection panel
   * 
   * But you can avoid this UI by setting this option to true.
   * 
   * For example NG App don't need NG Core minimal UI and use this option.
   */
  hideMainLayout: boolean
}
