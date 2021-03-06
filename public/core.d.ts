/**
 * This is the JMap NG Core library API documentation.
 * 
 * Examples are availables <a href="https://doc.k2geospatial.com/jmap/doc/ng_dev/examples.html" target="_blank">here</a>.
 * 
 * You can customize JMap NG Core library by providing startup options ([[JCoreOptions]]).
 * 
 * After being loaded, the **NG Core** library is accessible through the namespace **JMap** in the javascript console. For example :
 * ```ts
 * // returns the JMap NG Core version.
 * JMap.getVersion()
 * ```
 */
declare namespace JMap {

  /**
   * **JMap.getVersion**
   * 
   * Returns the JMap NG Core library build version.
   * 
   * @example ```ts
   * 
   * // returns the build version, for example "1.0.1"
   * JMap.getVersion()
   * ```
   */
  function getVersion(): string

  /**
   * **JMap.getApiVersion**
   * 
   * Returns the JMap NG Core library API (typescript interfaces) version.
   * 
   * For the same API version, multiple implementation versions can exist.
   * 
   * @example ```ts
   * 
   * // returns the API version, for example "1.0.1"
   * JMap.getApiVersion()
   * ```
   */
  function getApiVersion(): string

  /**
   * **JMap.getDataStore**
   * 
   * Returns the JMap library redux data store, an instance of Redux (https://redux.js.org/).
   *
   * @example ```ts
   * 
   * // returns the JMap NG Core library Redux store
   * const reduxStore = JMap.getDataStore()
   * reduxStore.dispatch(...)
   * ```
   */
  function getDataStore(): any | undefined

  /**
   * **JMap.getRestUrl**
   * 
   * Returns the in use JMap server Rest API url.
   *
   * This is the url on which the JMap NG Core library makes all of its ajax calls.
   * 
   * @example ```ts
   * 
   * // returns the JMap server rest URL in use
   * JMap.getRestUrl()
   * ```
   */
  function getRestUrl(): string

  /**
  * **JMap.openDocumentation**
  * 
  * Open JMap NG Core library interface online documentation, in a new tab.
  * 
  * @example ```ts
  * 
  * // open JMap NG Core library online JS API documentation, in a new tab
  * JMap.openDocumentation()
  * ```
  */
  function openDocumentation(): void

  /**
  * **JMap.getOS**
  * 
  * Return the operating system on witch JMap NG Core library is running client side.
  * 
  * Possible values returned are defined here [[JOperatingSystem]].
  * 
  * @example ```ts
  * 
  * // Return "mac" if the OS is Mac OS
  * JMap.getOS()
  * ```
  */
  function getOS(): JOperatingSystem

  /**
  * **JMap.loadJSFile**
  * 
  * Load an external JS File then resolve when file has been loaded.
  * 
  * @example ```ts
  * 
  * // load your custom JS file dynamically
  * JMap.loadJSFile("https://mysever/toLoadFile.js")
  * ```
  */
  function loadJSFile(fileUrl: string): Promise<void>

  /* **JMap.Server**
   * 
   * This is where you can find JMap Server relative methods
   */
  namespace Server {

    /**
     * **JMap.Server.getVersion**
     * 
     * Returns a string identifying the full version of the JMap Server to which JMap NG is currently connected to. Returns an empty string if the server is not yet connected.

     * @example ```ts
     * 
     * console.log(JMap.Server.getVersion())
     * // "7.0 Jakarta build 174"
     * ```
     */
    function getVersion(): string
    
    /**
     * **JMap.Server.getShortVersion**
     * 
     * Returns a normalized string identifying the major version of the JMap Server to which JMap NG is currently connected to. Returns an empty string if the server is not yet connected.

     * @example ```ts
     * 
     * console.log(JMap.Server.getShortVersion())
     * // "7_jakarta"
     * ```
     */
    function getShortVersion(): string
    
    /**
     * **JMap.Server.isStandardLoginAvailable**
     * 
     * Returns true is the standard JMap User Manager is available for authentication, false otherwise.
     * 
     * @example ```ts
     * 
     * console.log(JMap.Server.isStandardLoginAvailable())
     * // true
     * ```
     */
    function isStandardLoginAvailable(): boolean

    /**
     * **JMap.Server.getIdentityProviderById**
     * 
     * Returns the specified Identity Provider. Provider Ids can be derived from [[JMap.Server.getAllIdentityProvidersById]]
     * 
     * @throws if specified provider id is not valid or not found
     * @param providerId the provider identity id
     * @example ```ts
     * 
     * console.log(JMap.Server.getIdentityProviderById("idp-1"))
     * // {id: "idp-0", loginUrl: "https:// ....", ......}
     * ```
     */
    function getIdentityProviderById(providerId: string): JServerIdentityProvider
    
    /**
     * **JMap.Server.getAllIdentityProvidersById**
     * 
     * Return all the Identity Provider supported by the system, in an object keyed by provider Id
     * 
     * @example ```ts
     * 
     * console.log(JMap.Server.getAllIdentityProvidersById())
     * // {idp-0: {id: "idp-0", loginUrl: "https://[...]", ...}, ... }
     * ```
     */
    function getAllIdentityProvidersById(): JServerIdentityProviderById
  }

  /* **JMap.Photo**
   * 
   * This is where you can find JMap photo relative methods
   */
  namespace Photo {

    /**
     * **JMap.Photo.displayFeaturePhotosPopup**
     * 
     * Display the photos of a given feature of a given layer.
     * 
     * @param layerId the JMap layer id
     * @param featureId the JMap feature id
     * @example ```ts
     * 
     * // Display the photos of feature id="345" in layer id="4"
     * JMap.Photo.displayFeaturePhotosPopup(4, 345)
     * ```
     */
    function displayFeaturePhotosPopup(layerId: number, featureId: number): Promise<void>

    /**
     * **JMap.Photo.displayPhotosPopup**
     * 
     * Display your custom photos.
     * 
     * @param photos your custom photos
     * @param params optional parameters
     * @example ```ts
     * 
     * // Display the photos of feature id="345" in layer id="4"
     * JMap.Photo.displayPhotosPopup(4, 345)
     * ```
     */
    function displayPhotosPopup(photos: JPhoto[], params?: JPhotoOpenPopupParams): void

    /**
     * **JMap.Photo.closePhotoPopup**
     * 
     * If displayed, close the photo popup
     * 
     * @example ```ts
     * 
     * // Close the photo popup
     * JMap.Photo.closePhotoPopup()
     * ```
     */
    function closePhotoPopup(): void
  }

  /**
   * **JMap.Geolocation**
   * 
   * This is where you can find geolocation relative methods
   */
  namespace Geolocation {
    
    /**
     * **JMap.Geolocation.isSupportedByBrowser**
     * 
     * Returns true if the browser support the geolocation
     * 
     * @example ```ts
     * 
     * // return true if the browser supports the geolocation
     * JMap.Geolocation.isSupportedByBrowser()
     * ```
     */
    function isSupportedByBrowser(): boolean
    
    /**
     * **JMap.Geolocation.isEnabled**
     * 
     * Returns false if the JMap NG Core library has been started with option that disable the geolocation.
     * 
     * See startup parameter [[JCoreOption.geolocationEnabled]].
     * 
     * @example ```ts
     * 
     * // return false if geolocation is disabled
     * JMap.Geolocation.isEnabled()
     * ```
     */
    function isEnabled(): boolean
    
    /**
     * **JMap.Geolocation.getMyLocation**
     * 
     * Returns the user current location if promise succeed.
     * 
     * @throws if browser doesn't support geolocation, if geolocation is disabled, if an unexpected error occurs while getting location from browser
     * @example ```ts
     * 
     * // return a promise that return the user current location if succeed
     * JMap.Geolocation.getMyLocation()
     *    .then(location => console.info("My location is ", location))
     *    .error(error => console.error("Cannot get my location : ", error))
     * ```
     */
    function getMyLocation(): Promise<JLocation>
    
    /**
     * **JMap.Geolocation.goToMyLocation**
     * 
     * Returns the user current location if promise succeed, and pan and zoom to this location.
     * 
     * @throws if browser doesn't support geolocation, if geolocation is disabled, if an unexpected error occurs while getting location from browser
     * @param options pan and zoom options
     * @example ```ts
     * 
     * // pan and zoom to the user location
     * JMap.Geolocation.goToMyLocation()
     *    .then(location => console.info("Paned and zommed to user location ", location))
     *    .error(error => console.error("Cannot get my location : ", error))
     * ```
     */
    function goToMyLocation(options?: JPanAndZoomOptions): Promise<JLocation>
  }

  /**
   * **JMap.Feature**
   * 
   * This is where you can find feature related methods
   */
  namespace Feature {

    /**
     * **JMap.Feature.getById**
     * 
     * Returns the feature (EPSG:4326 projection) for the given layer and feature id.
     * 
     * @param layerId the JMap layer id
     * @param featureId the JMap feature id
     * @throws if layer or feature not found
     * @example ```ts
     * 
     * // returns the feature of layer id="3" and feature id="4"
     * JMap.Feature
     *  .getById(3, 4)
     *  .then(feature => console.info("Feature has been fetched", feature))
     *  .catch(error => console.error("An error occured", error))
     * ```
     */
    function getById(layerId: JId, featureId: JId): Promise<GeoJSON.Feature>

    /**
     * **JMap.Feature.getByIds**
     * 
     * Returns the features (EPSG:4326 projection) for the given layer and feature ids.
     * 
     * @param layerId the JMap layer id
     * @param featureIds the array of JMap feature ids
     * @throws if layer or any of the features  not found
     * @example ```ts
     * 
     * // returns the features of layer id="3" and feature id="4", "5" and "6"
     * JMap.Feature
     *  .getByIds(3, [4, 5, 6])
     *  .then(features => console.info("Features has been fetched", features))
     *  .catch(error => console.error("An error occured", error))
     * ```
     */
    function getByIds(layerId: JId, featureIds: JId[]): Promise<GeoJSON.Feature[]>

    /**
     * **JMap.Feature.geometryUpdateById**
     * 
     * Change the feature geometry for the given layer id, feature id and geometry (projection EPSG:4326).
     * 
     * @param params contains the JMap layer id, the JMap feature id, and the geojson geometry
     * @throws if layer or feature not found, or if feature is invalid (undefined, wrong geometry type, etc ...)
     * @example ```ts
     * 
     * const newGeometry = { ... }
     * // change the geometry of feature id="4" on layer id="3"
     * JMap.Feature
     *  .geometryUpdateById({
     *    layerId: 3,
     *    featureId: 4,
     *    geometry: newGeometry
     *  })
     *  .then(feature => console.info("Feature geometry has been changed", feature))
     *  .catch(error => console.error("An error occured", error))
     * ```
     */
    function geometryUpdateById(params: JFeatureGeometryUpdateParams): Promise<GeoJSON.Feature>

    /**
     * **JMap.Feature.deleteById**
     * 
     * Delete the feature for the given layer and feature ids.
     * 
     * @param layerId the JMap layer id
     * @param featureId the JMap feature id
     * @throws if layer or feature not found
     * @example ```ts
     * 
     * // delete the feature id="4" on layer id="3"
     * JMap.Feature
     *  .deleteById(3, 4)
     *  .then(() => console.info("Feature has been deleted"))
     *  .catch(error => console.error("An error occured", error))
     * ```
     */
    function deleteById(layerId: JId, featureId: JId): Promise<void>

    /**
     * **JMap.Feature.deleteByIds**
     * 
     * Delete the features for the given layer and features ids.
     * 
     * @param layerId the JMap layer id
     * @param featureIds the JMap feature ids to delete
     * @throws if layer or feature not found
     * @example ```ts
     * 
     * // delete 3 features on layer id="3"
     * JMap.Feature
     *  .deleteByIds(3, [4, 5, 16])
     *  .then(() => console.info("Features have been deleted"))
     *  .catch(error => console.error("An error occured", error))
     * ```
     */
    function deleteByIds(layerId: JId, featureIds: JId[]): Promise<JFeatureDeleteByIdsResult>
  }

  /**
   * **JMap.History**
   * 
   * This is where you can find browser history relative methods
   */
  namespace History {

    /**
     * **JMap.History.transformSearchParamsIntoHashParams**
     * 
     * Get all specified search params in the url and transform them into hash params
     * without refreshing the page.
     * 
     * @param paramNames list of params to transform.
     * @example ```ts
     * 
     * // Ex. url is = ***http://localhost:8080/services/ng?foreign=true&ngProjectId=0&myvar=test***
     *
     * JMap.History.transformSearchParamsIntoHashParams(["ngProjectId", "myvar"])
     * 
     * // The url is now = ***http://localhost:8080/services/ng?foreign=true#ngProjectId=0&myvar=test***
     * ```
     */
    function transformSearchParamsIntoHashParams(paramNames: string | string[]): void
    
    /**
     * **JMap.History.goBack**
     * 
     * The same as clicking the back button of the browser
     * 
     * @example ```ts
     * 
     * // go to previous page
     * JMap.History.goBack()
     * ```
     */
    function goBack(): void
    
    /**
     * **JMap.History.goForward**
     * 
     * The same as clicking the forward button of the browser
     * 
     * @example ```ts
     * 
     * // go to the next page if exist
     * JMap.History.goForward()
     * ```
     */
    function goForward(): void

    /**
     * **JMap.History.getHashParameter**
     * 
     * Return a JS object that contains all key / value entries present
     * in the hash of the url.
     * 
     * Returns an empty string if parameter's not found.
     * 
     * @throws Error if parameterName is not a valid string
     * 
     * @example ```ts
     * 
     * // Ex. url = ***http://localhost:8080/services/ng#ngProjectId=0&myvar=test***
     * 
     * JMap.History.getHashParameter("myvar")
     * // return "test"
     * 
     * JMap.History.getHashParameter("myvardoesntexist")
     * // return ""
     * ```
     */
    function getHashParameter(parameterName: string): string

    /**
     * **JMap.History.getHashParameters**
     * 
     * Return a JS object that contains all key / value entries present
     * in the hash of the url.
     * 
     * @example ```ts
     * 
     * // get all parameters in the url hash
     * JMap.History.getHashParameters()
     * 
     * // Ex. url = ***http://localhost:8080/services/ng#ngProjectId=0&myvar=test***
     * // Will return this object :
     * {
     *    ngProjectId: 0,
     *    myvar: "test"
     * }
     * ```
     */
    function getHashParameters(): { [ key: string ]: string }
    
    /**
     * **JMap.History.pushHashParameters**
     * 
     * You can add or update a parameter in the url hash.
     * 
     * @param parameterName: the name of the parameter
     * @param parameterValue: the string value of the parameter, only string are accepted.
     * 
     * @throws Error if parameterName is not a valid string
     * 
     * @example ```ts
     * 
     * // Ex. url is = ***http://localhost:8080/services/ng#ngProjectId=0***
     *
     * JMap.History.pushHashParameters("myvar", "test")
     * 
     * // The url is now = ***http://localhost:8080/services/ng#ngProjectId=0&myvar=test***
     * ```
     */
    function pushHashParameters(parameterName: string, parameterValue: string): void
    
    /**
     * **JMap.History.popHashParameters**
     * 
     * You can remove a parameter in the url hash.
     * 
     * Don't throw an error if the parameter doesn't exist.
     *
     * @param parameterName: the name of the parameter
     *
     * @throws Error if parameterName is not a valid string
     *  
     * @example ```ts
     * 
     * // Ex. url is = ***http://localhost:8080/services/ng#ngProjectId=0&myvar=test***
     *
     * JMap.History.popHashParameters("myvar")
     * 
     * // The url is now = ***http://localhost:8080/services/ng#ngProjectId=0***
     * ```
     */
    function popHashParameters(parameterName: string): void

    /**
     * **JMap.History.onParameterChange**
     * 
     * You can attach a listener that listen for url hash params change.
     * 
     * The function returns the listener id that can be used after to remove the listener.
     *
     * @param parameterName: the name of the parameter
     * @param fn: the function that will be processed when the property changed
     * 
     * @returns the listener id, can be used to remove the listener with [[JMap.History.removePropertyChangeListener]]
     *
     * @throws Error if parameterName is not a valid string or fn is not a function
     * 
     * @example ```ts
     * 
     * const listenerId = JMap.History.onParameterChange("ngProjectId", (oldValue, newValue) => {
     *    console.log(`In the url hash the parameter "ngProjectId" has changed from "${oldValue}" to "${newValue}"`)
     * })
     * ```
     */
    function onParameterChange(parameterName: string, fn: (oldValue: string, newValue: string | undefined) => void): string

    /**
     * **JMap.History.removePropertyChangeListener**
     * 
     * You can detach a property listener by its id that has been returned when it has been created
     * with function [[JMap.History.onParameterChange]].
     * 
     * After that the listener will be destroyed.
     * 
     * @param listenerId: the listener id
     * 
     * @throws Error if parameterName is not a valid string or fn is not a function
     * 
     * @example ```ts
     * 
     * const listenerId = JMap.History.onParameterChange(...)
     * // the listener is working
     * 
     * // ...
     * 
     * JMap.History.removePropertyChangeListener(listenerId)
     * // here the listener has stopped
     * ```
     */
    function removePropertyChangeListener(listenerId: string): void
  }
  
  /**
   * **JMap.Layer**
   * 
   * Layer related methods.
   */
  namespace Layer {

    /**
     *  **JMap.Layer.Search**
     * 
     * Methods used to search features for a layer.
     */
    namespace Search {

      /**
       * **JMap.Layer.Search.byAttribute**
       * 
       * Returns features, for a given layer, having attribute value equals to the given value(s).
       * 
       * @param params search parameters
       * @returns a promise that will return all the features of the Layer corresponding to the search criteria
       * @throws Error if promise fails
       *
       * @example ```ts
       * 
       * // returns all features that have the attribute "E"
       * JMap.Layer.Search
       *   .byAttribute({
       *      layerId: 99,
       *      attributeName: "TREE",
       *      attributeValue: [ "Cherry", "Birch" ] // here an array for multipe values, but could be a single value like a string
       *   })
       *   .then(features => console.info(`Total ${features.length} feature(s) found`, features))
       *   .catch(error => console.error(error))
       * ```
       */
      function byAttribute(params: JLayerSearchByAttributesParams): Promise<any> // any is Feature[]
    }

    /**
     * **JMap.Layer.getLayerTree**
     * 
     * Returns project's layer tree.
     * 
     * The layer tree is an array of tree element.
     * 
     * A tree element is a layer group or a layer.
     * 
     * A layer group contains layer and/or other layer group, and has a negative id.
     * 
     * A layer has a positive id.
     * 
     * If no project is loaded, returns an empty array.
     * 
     * @example ```ts
     * 
     * // returns the entire layer tree of the project
     * JMap.Layer.getLayerTree()
     * ```
     */
    function getLayerTree(): JLayerTree

    /**
     * **JMap.Layer.getMetadataSchema**
     * 
     * Returns the metadata schema associated with the current project's layers.
     * 
     * The layer metadata schema is an array of JLayerMetadataSchemaItem.
     * 
     * If no project is loaded, returns an empty array.
     * 
     * @example ```ts
     * 
     * // returns the metadata schema
     * JMap.Layer.getMetadataSchema()
     * ```
     */
    function getMetadataSchema(): JLayerMetadataSchemaItem[]

    /**
     * **JMap.Layer.getLayerTreeElementsById**
     * 
     * Returns a map (= a javascript object) where :
     *  - the key is the tree element id
     *  - the value is the tree element
     * 
     * A tree element is a layer group or a layer.
     * 
     * A layer group contains layer(s) and/or other layer group(s), and has a negative id.
     * 
     * A layer has a positive id.
     * 
     * If no project is loaded, returns en empty object.
     * 
     * @example ```ts
     * 
     * // returns a map of layer elements defined by layer id
     * JMap.Layer.getLayerTreeElementsById()
     * ```
     */
    function getLayerTreeElementsById(): { [ layerElementId: number ]: JLayerTreeElement }

    /**
     * **JMap.Layer.getLayers**
     * 
     * Returns an array with JMap layers.
     * 
     * The array order is the same as the one in the tree.
     * 
     * If no project is loaded, returns en empty array.
     * 
     * @example ```ts
     * 
     * // returns all JMap layers
     * JMap.Layer.getLayers()
     * ```
     */
    function getLayers(): JLayer[]

    /**
     * **JMap.Layer.getLayerIds**
     * 
     * Returns an array with JMap layer ids.
     * 
     * The array order is the same as the one in the tree.
     * 
     * If no project is loaded, returns en empty array.
     * 
     * This function is equivalent to :
     * ```ts
     * JMap.Layer.getLayers().map(layer => layer.id)
     * ```
     * 
     * @example ```ts
     * 
     * // returns all JMap layer ids
     * JMap.Layer.getLayerIds()
     * ```
     */
    function getLayerIds(): number[]

     /**
     * **JMap.Layer.getVectorLayers**
     * 
     * Returns an array with vector JMap layers.
     * 
     * Vector Layers are layers that can be selected on the map 
     * and served via Vector Tiles or geoJSON, as opposed to raster layers for instance.
     * 
     * The array order is not garanteed to be the same as the one in the tree.
     * 
     * If no project is loaded, returns en empty array.
     * 
     * @example ```ts
     * 
     * // returns all vector JMap layers
     * JMap.Layer.getVectorLayers()
     * ```
     */
    function getVectorLayers(): JLayer[]

    /**
     * **JMap.Layer.getVectorLayerIds**
     * 
     * Returns an array with vector JMap layer ids.
     * 
     * Vector Layers are layers that can be selected on the map 
     * and served via Vector Tiles or geoJSON, as opposed to raster layers for instance.
     * 
     * The array order is not garanteed to be the same as the one in the tree.
     * 
     * If no project is loaded, returns en empty array.
     * 
     * This function is equivalent to :
     * ```ts
     * JMap.Layer.getVectorLayers().map(layer => layer.id)
     * ```
     * 
     * @example ```ts
     * 
     * // returns all vector JMap layer ids
     * JMap.Layer.getVectorLayerIds()
     * ```
     */
    function getVectorLayerIds(): number[]   
  
    /**
     * **JMap.Layer.isVectorLayerById**
     * 
     * returns true if specified layer is a vector layer
     * 
     * @param layerId the JMap layer Id
     * 
     * @example ```ts
     * 
     * // returns true if layer id 5 is a vector layer
     * JMap.Layer.isVectorLayerById(5)
     * ```
     * 
     */
    function isVectorLayerById(layerId: JId):boolean

    /**
     * **JMap.Layer.attributeExists**
     * 
     * Returns true if the layer has the given attribute.
     * 
     * @throws Error if layer is not found
     * @param layerId The JMap layer id
     * @param attributeName The JMap attribute name
     * @example ```ts
     * 
     *  // return true if the attribute named "SPECIES" exist on layer id=4
     *  JMap.Layer.attributeExists(4, "SPECIES")
     * ```
     */
    function attributeExists(layerId: number, attributeName: string): boolean

    /**
     * **JMap.Layer.getLayerAttribute**
     * 
     * Returns the attribute descriptor for a given layer and attribute
     * 
     * @throws Error if layer or attribute not found
     * @param layerId The JMap layer id
     * @param attributeName The JMap attribute name
     * @example ```ts
     * 
     *  // return the layer attribute descriptor
     *  JMap.Layer.getLayerAttribute(4, "SPECIES")
     * ```
     */
    function getLayerAttribute(layerId: number, attributeName: string): JLayerAttribute

    /**
     * **JMap.Layer.getLayerAttributes**
     * 
     * Returns all attribute descriptors for a particuler layer
     * 
     * @throws Error if layer is not found
     * @param layerId The JMap layer id
     * @example ```ts
     * 
     *  JMap.Layer.getLayerAttributes(4)
     * ```
     */
    function getLayerAttributes(layerId: number): JLayerAttribute[]
    
    /**
     * **JMap.Layer.exists**
     * 
     * Returns true if a layer having the id exists.
     * 
     * @param layerId The JMap layer id
     * @example ```ts
     * 
     * // returns true if layer id=3 exists
     * JMap.Layer.exists(3)
     * ```
     */
    function exists(layerId: number): boolean

    /**
     * **JMap.Layer.getById**
     * 
     * Returns the JMap layer having the id.
     * 
     * @throws Error if no layer found for the id
     * @param layerId The JMap layer id
     * @example ```ts
     * 
     * // returns the JMap layer id=3
     * JMap.Layer.getById(3)
     * ```
     */
    function getById(layerId: number): JLayerTreeElement

    /**
     * **JMap.Layer.getSelfOrChildren**
     * 
     * If the layerId is a layer returns it.
     * If the layerId is a layer group, returns all of its layers children
     * (remove all layer groups).
     * 
     * Returns an empty array if it's an empty layer group
     * 
     * @throws Error if no layer found for the id
     * @param layerId The JMap layer id
     * @example ```ts
     * 
     * // returns an array with only JMap layers (no layer group)
     * JMap.Layer.getSelfOrChildren(3)
     * ```
     */
    function getSelfOrChildren(layerId: number): JLayer[]

    /**
     * **JMap.Layer.getName**
     * 
     * Returns the name of the layer.
     * 
     * @throws Error if no layer found for the id
     * @param layerId The JMap layer id
     * @example ```ts
     * 
     * // returns the name of layer id=3
     * JMap.Layer.getName(3)
     * ```
     */
    function getName(layerId: number): string

    /**
     * **JMap.Layer.getDescription**
     * 
     * Returns the descrition of the layer.
     * 
     * @throws Error if no layer found for the id
     * @param layerId The JMap layer id
     * @example ```ts
     * 
     * // returns the description of layer id=3
     * JMap.Layer.getDescription(3)
     * ```
     */
    function getDescription(layerId: number): string

    /**
     * **JMap.Layer.getEPSG4326Extent**
     * 
     * Returns the extent of the layer in ESPG:4326 coordinates
     * @example ```ts
     * 
     * // returns the bounding box (JBoundaryBox) of the layer ID 3 in decimal degrees
     * JMap.Layer.getEPSG4326Extent(3)
     * ```
     * 
     * @throws Error if no layer found for the id
     * @param layerId The JMap layer id
     */
    function getEPSG4326Extent(layerId: number):JBoundaryBox | null

    /**
     * **JMap.Layer.isVisible**
     * 
     * Returns the tree element visibility property.
     * 
     * The visibility property is initialy defined on the project, and can be
     * changed by the user through the JMap NG Core library.
     * 
     * If this property is false, the layer cannot be displayed on the map.
     * 
     * If it's true, the layer can be rendered on the map. The layer is rendered depending
     * on the current map scale of the map, and the min / max scale defined for this layer.
     * 
     * @throws Error if no layer found for the id
     * @param layerId The JMap layer id
     * @param checkParentVisibility If true will check if all parent elements have the property visible equals to true
     * @example ```ts
     * 
     * // returns false if layer id=3 is not set as visible
     * JMap.Layer.isVisible(3)
     * ```
     */
    function isVisible(layerId: number, checkParentVisibility?: boolean): boolean

    /**
     * **JMap.Layer.isSelectableById**
     * 
     * Returns the tree element selectable property.
     * 
     * The selectable property is initialy defined on the project, and can be
     * changed by the user through the JMap NG Core library.
     * 
     * If this property is false, the layer's features can't be selected on the map by user interaction, or by API calls.
     * 
     * If this property is true, the layer's features can be selected.
     * 
     * @throws Error if no layer found for the id or of layer is not a vector layer
     * @param layerId The JMap layer id
     * @example ```ts
     * 
     * // returns false if layer id=3 is not selectable
     * JMap.Layer.isSelectableById(3)
     * ```
     */
    function isSelectableById(layerId: JId): boolean

    /**
     * **JMap.Layer.setSelectabilityById**
     * 
     * Set the selectability property of the layer.
     * 
     * If it's true, the layer's features can be selected on the map. 
     * 
     * @throws Error if no layer found for the id or if it is not a vector layer
     * @param layerId The JMap layer id
     * @param selectability The new selectability property value for the layer
     * @example ```ts
     * 
     * // make layer id=5 selectable
     * JMap.Layer.setSelectabilityById(5, true)
     * 
     * // make layer id=3 unselectable (will clear the pre-existing selection if present)
     * JMap.Layer.setSelectabilityById(3, false)
     * ```
     */
    function setSelectabilityById(layerId: JId, selectability:boolean): void

    /**
     * **JMap.Layer.setLayersSelectability**
     * 
     * Set the selectability property of multiple layers.
     * 
     * _For each layer:_
     * 
     * If it's a JMap layer, it applies the selectability to it.
     * 
     * The selectability property is initialy defined on the project, and can be
     * changed by the user through the JMap NG Core library.
     * 
     * If this property is true, the layer's features can be selected on the map.
     * 
     * @throws Error if any layer is not found for any of the ids, or if any of the layers is not a vector layer
     * @param params an array of JLayerSetLayersSelectabilityParams
     * @example ```ts
     * 
     * // show layers id=5 and 6, hide layer 3
     * JMap.Layer.setLayersSelectability([
     *    {layerId: 5, selectability: true}, 
     *    {layerId: 6, selectability: true}, 
     *    {layerId: 3, selectability: false}
     * ])
     * 
     * ```
     */
    function setLayersSelectability(params: JLayerSetLayersSelectabilityParams[]): void

    /**
     * **JMap.Layer.isAllLayerParentsVisible**
     * 
     * Returns true if all parents of the element have the visibility property equals to true.
     * 
     * If element has no parent it returns true.
     * 
     * @throws Error if no layer found for the id
     * @param layerId The JMap layer id
     * @example ```ts
     * 
     * // returns true if all parents of layer id=3 have the property visible set to true
     * JMap.Layer.isAllLayerParentsVisible(3)
     * ```
     */
    function isAllLayerParentsVisible(layerId: number): boolean

    /**
     * **JMap.Layer.getStyle**
     * 
     * Returns the base style of the layer.
     * 
     * @throws Error if no layer found for the id, or if the layer is a layer group.
     * @param layerId The JMap layer id
     * @example ```ts
     * 
     * // returns layer id=3 base style
     * JMap.Layer.getStyle(3)
     * ```
     */
    function getStyle(layerId: number): JLayerStyle

    /**
     * **JMap.Layer.getSimpleSelectionStyle**
     * 
     * Returns the selection "simple" style of the layer.
     * 
     * It always returns an object, and if no selection style has been set on the layer,
     * it returns the project default values.
     * 
     * @throws Error if no layer found for the id, or if the layer is a layer group.
     * @param layerId The JMap layer id
     * @example ```ts
     * 
     * // returns the simple selection style of layer id=3
     * JMap.Layer.getSimpleSelectionStyle(3)
     * ```
     */
    function getSimpleSelectionStyle(layerId: number): JLayerSimpleStyle

    /**
     * **JMap.Layer.getSelectionStyle**
     * 
     * Returns the layer selection style if defined, else returns null.
     * 
     * @throws Error if no layer found for the id, or if the layer is a layer group.
     * @param layerId The JMap layer id
     * @example ```ts
     * 
     * // returns the simple selection style of layer id=3
     * JMap.Layer.getSelectionStyle(3)
     * ```
     */
    function getSelectionStyle(layerId: number): JLayerStyle | null

    /**
     * ***JMap.Layer.getAllThematicsForLayer***
     * 
     * Returns all layer thematics.
     * 
     * @throws Error if no layer found for the id, or if the layer is a layer group.
     * @param layerId The JMap layer id
     * @example ```ts
     * 
     * // returns all thematics of layer id=4
     * JMap.Layer.getAllThematicsForLayer(4)
     * ```
     */
    function getAllThematicsForLayer(layerId: number): JLayerThematic[]

    /**
     * ***JMap.Layer.getThematicById***
     * 
     * Returns a specific layer thematic.
     * 
     * @throws Error if no layer found for the id, if the layer is a layer group, or if the thematic doesn't exist.
     * @param layerId The JMap layer id
     * @param thematicId The thematic id
     * @example ```ts
     * 
     * // returns thematic id=3 of layer id=4
     * JMap.Layer.getThematicById(4, 3)
     * ```
     */
    function getThematicById(layerId: number, thematicId: number): JLayerThematic

    /**
     * ***JMap.Layer.hasVisibleThematics***
     * 
     * Returns true if the layer has at least one thematic displayed on the map.
     * 
     * @throws Error if no layer found for the id, or if the layer is a layer group.
     * @param layerId The JMap layer id
     * @example ```ts
     * 
     * // returns false if no thematic is displayed for layer id=4
     * JMap.Layer.hasVisibleThematics(4)
     * ```
     */
    function hasVisibleThematics(layerId: number): boolean

    /**
     * ***JMap.Layer.getVisibleThematics***
     * 
     * Returns layer thematics that are currently displayed on the map.
     * 
     * @throws Error if no layer found for the id, or if the layer is a layer group.
     * @param layerId The JMap layer id
     * @example ```ts
     * 
     * // returns layer's id=4 thematic(s) that are displayed
     * JMap.Layer.getVisibleThematics(4)
     * ```
     */
    function getVisibleThematics(layerId: number): JLayerThematic[]

    /**
     * **JMap.Layer.setVisible**
     * 
     * Set the visibility property of the layer.
     * 
     * If it's a JMap layer, it apply the visibility to it.
     * 
     * The visibility property is initialy defined on the project, and can be
     * changed by the user through the JMap NG Core library.
     * 
     * If this property is false, the layer cannot be displayed on the map.
     * 
     * If it's true, the layer can be rendered on the map. The layer is rendered depending
     * on the current map scale of the map, and the min / max scale defined for this layer.
     * 
     * @throws Error if no layer found for the id
     * @param layerId The JMap layer id
     * @param isVisible The new visibility property value for the layer
     * @example ```ts
     * 
     * // show layer id=5
     * JMap.Layer.setVisible(5, true)
     * 
     * // hide layer id=3
     * JMap.Layer.setVisible(3, false)
     * ```
     */
    function setVisible(layerId: number, isVisible: boolean): void

    /**
     * **JMap.Layer.setLayersVisibility**
     * 
     * Set the visibility property of multiple layers.
     * 
     * _For each layer:_
     * 
     * If it's a JMap layer, it apply the visibility to it.
     * 
     * The visibility property is initialy defined on the project, and can be
     * changed by the user through the JMap NG Core library.
     * 
     * If this property is false, the layer cannot be displayed on the map.
     * 
     * If it's true, the layer can be rendered on the map. The layer is rendered depending
     * on the current map scale of the map, and the min / max scale defined for this layer.
     * 
     * @throws Error if any layer is not found for any of the ids
     * @param params an array of JLayerSetLayersVisibilityParams
     * @example ```ts
     * 
     * // show layers id=5 and 6, hide layer 3
     * JMap.Layer.setLayersVisibility([
     *    {layerId: 5, visibility: true}, 
     *    {layerId: 6, visibility: true}, 
     *    {layerId: 3, visibility: false}
     * ])
     * 
     * ```
     */
    function setLayersVisibility(params: JLayerSetLayersVisibilityParams[]): void

    /**
     * **JMap.Layer.ensureLayerIsVisible**
     * 
     * Make sure a layer is visible on the Map. All parent layers will also be made visible 
     * 
     * @param layerId The JMap layer id
     * 
     * @example ```ts
     * 
     * // show layer id=5 (and all parent layers)
     * JMap.Layer.ensureLayerIsVisible(5)
     * 
     * ```
     */
    function ensureLayerIsVisible(layerId: number): void

    /**
     * **JMap.Layer.ensureLayersAreVisible**
     * 
     * Make sure that all specified layers are visible on the Map. 
     * All parent layers of all Layers will also be made visible 
     * 
     * @param layerIds An array of JMap layer ids
     * 
     * @example ```ts
     * 
     * // show layer ids 5, 6 and 7 (and all parent layers)
     * JMap.Layer.ensureLayersAreVisible([5, 6, 7])
     * 
     * ```
     */
    function ensureLayersAreVisible(layerIds: number[]): void

    /**
     * **JMap.Layer.setLayerGroupExpansion**
     * 
     * Set the layer group expansion state.
     * 
     * @throws Error if layer group is not found, or is not a layer group but a layer
     * @param layerGroupId The JMap layer group id
     * @param isExpanded if true will expand, if false will collapse the layer group
     * @example ```ts
     * 
     * // Expand the layer group id -4
     * JMap.Layer.setLayerGroupExpansion(-4, true)
     * ```
     */
    function setLayerGroupExpansion(layerGroupId: number, isExpanded: boolean): void
    
    /**
     * **JMap.Layer.setLayerGroupsExpansion**
     * 
     * Set the group expansion state of multiple layer groups.
     * 
     * @throws Error if any layer group is not found for any group id, or if any group found is not a layer group but a layer
     * @param params An array of JLayerSetLayerGroupsExpansionParams
     * @example ```ts
     * 
     * // Expand the layer group id -4, collapse group id -5 
     * JMap.Layer.setLayerGroupsExpansion([{layerGroupId: -4, open: true}, {layerGroupId: -5, open: false}])
     * ```
     */
    function setLayerGroupsExpansion(params: JLayerSetLayerGroupsExpansionParams[]): void
    
    /**
     * **JMap.Layer.deleteLayer**
     * 
     * Delete the layer in the data store and in the map.
     * 
     * The layer is not deleted server side, but only in the browser.
     * 
     * Use this function if you want to dynamically remove a layer.
     * 
     * @throws Error if layer is not found
     * @param layerId The JMap layer id
     * @example ```ts
     * 
     * // Remove layer 4 (only client side)
     * JMap.Layer.deleteLayer(4)
     * ```
     */
    function deleteLayer(layerId: number): void
    
    /**
     * **JMap.Layer.setThematicVisibility**
     * 
     * Show or hide a layer thematic on the map
     * 
     * @throws Error if layer or thematic is not found
     * @param layerId The JMap layer id
     * @param thematicId The thematic id
     * @param visibility true to show, false to hide
     * @example ```ts
     * 
     * // Display the thematic id=3 of layer id=7
     * JMap.Layer.Thematic.setThematicVisibility(7, 3, true)
     * 
     * // Hide the thematic id=3 of layer id=7
     * JMap.Layer.Thematic.setThematicVisibility(7, 3, false)
     * ```
     */
    function setThematicVisibility(layerId: number, thematicId: number, visibility: boolean): void

    /**
     * **JMap.Layer.setThematicsVisibility**
     * 
     * Show or hide multiple layer thematics on the map
     * 
     * @throws Error if any layer or thematic are not found
     * @param params An array of JLayerSetThematicsVisibilityParams
     * @example ```ts
     * 
     * // Display the thematic id=3 of layer id=7, and hide the thematic id=1 of layer id=14
     * JMap.Layer.Thematic.setThematicsVisibility([
     *    {layerId: 7, thematicId: 3, visibility: true},
     *    {layerId: 14, thematicId: 1, visibility: false}
     * ])
     * ```
     */
    function setThematicsVisibility(params: JLayerSetThematicsVisibilityParams[]): void

    /**
     * **JMap.Layer.isHoverActive**
     * 
     * Return true if the hover is active on the map.
     * 
     * @example ```ts
     * 
     * // hover is false by default, but can be activated
     * JMap.Layer.isHoverActive()
     * ```
     * */
    function isHoverActive(): boolean

    /**
     * **JMap.Layer.activateHover**
     * 
     * By default when mouse cursor pass hover a feature, it is not highlighted on the map.
     * 
     * But you can activate the feature hover.
     * 
     * @example ```ts
     * 
     * // Activate feature hover highlight
     * JMap.Layer.activateHover()
     * ```
     * */
    function activateHover(): void

    /**
     * **JMap.Layer.deactivateHover**
     * 
     * By default when mouse cursor pass hover a feature, it is not highlighted on the map.
     * 
     * But you can activate it and deactivate as you like
     * 
     * @example ```ts
     * 
     * // Deactivate feature hover highlight
     * JMap.Layer.deactivateHover()
     * ```
     * */
    function deactivateHover(): void
  }

  /**
   * **JMap.Geometry**
   * 
   * This section contains geometry related methods.
   * 
   * JMap geometry service is based on turfjs implementation.
   */
  namespace Geometry {

    /**
     * **JMap.Geometry.checkLocation**
     * 
     * Throw an error if the provided parameter is not a valid location.
     * 
     * @param location The location object to check
     * @example ```ts
     * 
     * let location = { x: 10, y: 10 }
     * // The following instruction will not throw an error
     * JMap.Geometry.checkLocation(location)
     * 
     * location = {} // empty object
     * // The following instruction will throw an error
     * JMap.Geometry.checkLocation(location)
     * ```
     */
    function checkLocation(location: JLocation): void

    /**
     * **JMap.Geometry.isValidLocation**
     * 
     * Return false if the provided parameter is not a valid location.
     * 
     * @param location The location object to check
     * @example ```ts
     * 
     * let location = { x: 10, y: 10 }
     * // The following instruction will return true
     * JMap.Geometry.isValidLocation(location)
     * 
     * location = {} // empty object
     * // The following instruction will return false
     * JMap.Geometry.isValidLocation(location)
     * ```
     */
    function isValidLocation(location: JLocation | undefined): boolean

    /**
     * **JMap.Geometry.isValidBbox**
     * 
     * Return false if the provided parameter is not a valid boundary box.
     * 
     * @param bbox The bbox object to check
     * @example ```ts
     * 
     * let bbox = { sw: { x: 10, y: 10 }, ne: { x: 12, y: 12 } }
     * // The following instruction will return true
     * JMap.Geometry.isValidBbox(bbox)
     * 
     * bbox = { sw: { x: 10, y: 10 } } // missing "ne" attribute
     * // The following instruction will return false
     * JMap.Geometry.isValidBbox(bbox)
     * ```
     */
    function isValidBbox(bbox: JBoundaryBox | undefined): boolean

    /**
     * **JMap.Geometry.isValidGeometry**
     * 
     * Return true if the provided geometry is valid.
     * 
     * @param geometry The given geometry object to test
     * @example ```ts
     * 
     * // return true
     * JMap.Geometry.isValidGeometry({
     *   "type": "Point",
     *   "coordinates": [43.6, 10.1]
     * })
     * 
     * // return false
     * JMap.Geometry.isValidGeometry({
     *  "coordinates": [43.6, 10.1]
     * })
     * ```
     */
    function isValidGeometry(geometry: any): boolean

    /**
     * **JMap.Geometry.checkCircle**
     * 
     * Throw an error if the provided parameter is not a valid circle.
     * 
     * @param circle The circle object to check
     * @example ```ts
     * 
     * let circle = { center: { x: 10, y: 10 }, radius: 10 }
     * // The following instruction will not throw an error
     * JMap.Geometry.checkCircle(circle)
     * 
     * circle = { radius: 10 } // missing center
     * // The following instruction will throw an error
     * JMap.Geometry.checkCircle(circle)
     * ```
     */
    function checkCircle(circle: JCircle): void

    /**
     * **JMap.Geometry.checkPolygon**
     * 
     * Throw an error if the provided parameter is not a valid polygon.
     * 
     * @param polygon The polygon array to check
     * @example ```ts
     * 
     * let polygon = [[ 10, 10 ], [ 11, 11 ], [ 12, 12 ], [ 10, 10 ]]
     * // The following instruction will not throw an error
     * JMap.Geometry.checkPolygon(polygon)
     * 
     * polygon = [] // empty array
     * // The following instruction will throw an error
     * JMap.Geometry.checkPolygon(polygon)
     * ```
     */
    function checkPolygon(polygon: JPolygon): void

    /**
     * **JMap.Geometry.checkLine**
     * 
     * Throw an error if the provided parameter is not a valid polygon.
     * 
     * @param line The line object to check
     * @example ```ts
     * 
     * let line = [[ 10, 10 ], [ 11, 11 ], [ 12, 12 ]]
     * // The following instruction will not throw an error
     * JMap.Geometry.checkLine(line)
     * 
     * line = [] // empty line
     * // The following instruction will throw an error
     * JMap.Geometry.checkLine(line)
     * ```
     */
    function checkLine(line: JLine): void

    /**
     * **JMap.Geometry.checkBbox**
     * 
     * Throw an error if the provided parameter is not a valid boundary box.
     * 
     * @param bbox The bbox object to check
     * @example ```ts
     * 
     * let bbox = { sw: { x: 10, y: 10 }, ne: { x: 12, y: 12 } }
     * // The following instruction will not throw an error
     * JMap.Geometry.checkBbox(bbox)
     * 
     * bbox = { sw: { x: 10, y: 10 } } // missing "ne" attribute
     * // The following instruction will throw an error
     * JMap.Geometry.checkBbox(bbox)
     * ```
     */
    function checkBbox(bbox: JBoundaryBox): void

    /**
     * **JMap.Geometry.getArea**
     * 
     * Works for feature having geometry equals to Polygon or a MultiPolygon.
     * 
     * It returns the area in square meters.
     * 
     * Throw an error if the provided feature geometry is not a Polygon or a MultiPolygon.
     * 
     * @param feature The Polygon or MultiPolygon feature
     * @example ```ts
     * 
     * const feature = ...
     * // The method will return the area in m2
     * JMap.Geometry.getArea(feature)
     * ```
     */
    function getArea(feature: GeoJSON.Feature): number

    /**
     * **JMap.Geometry.getLineLength**
     * 
     * Works for feature having geometry equals to LineString or a MultiLineString.
     * 
     * It returns the line length in the desired units (default in kilometers).
     * 
     * Throw an error if the provided feature geometry is not a LineString or a MultiLineString.
     * 
     * @param feature The LineString or MultiLineString feature to measure.
     * @param units Can be "degrees", "radians", "miles", or "kilometers" (default)
     * @example ```ts
     * 
     * const line = ...
     * 
     * // The method will return the line length in kilometers
     * JMap.Geometry.getLineLength(line)
     *
     * // The method will return the line length in miles
     * JMap.Geometry.getLineLength(line, "miles")
     * ```
     */
    function getLineLength(feature: GeoJSON.Feature<GeoJSON.LineString> | GeoJSON.Feature<GeoJSON.MultiLineString>, units?: JGeometryUnit | JDistanceUnit ): number

    /**
     * **JMap.Geometry.getCentroid**
     * 
     * Returns a point feature representing the centroid of the provided feature or featureCollection.
     * 
     * @param feature a feature or a feature collection
     * @example ```ts
     * 
     * const polygonFeature = ...
     * // The method will return the centroid of "polygonFeature" as a point feature
     * JMap.Geometry.getCentroid(polygonFeature)
     * ```
     */
    function getCentroid(feature: GeoJSON.Feature | GeoJSON.FeatureCollection): GeoJSON.Feature<GeoJSON.Point>

    /**
     * **JMap.Geometry.getFeatureFromLine**
     * 
     * Returns a line feature from a line object ([[JLine]]).
     * 
     * @param line A line array
     * @example ```ts
     * 
     * const line = [[ 10, 12], [12, 23], [34, 12]]
     * // The method will return a line feature
     * const feature = JMap.Geometry.getFeatureFromLine(line)
     * ```
     */
    function getFeatureFromLine(line: JLine): GeoJSON.Feature<GeoJSON.LineString>
    
    /**
     * **JMap.Geometry.getPolygonFeatureFromCircle**
     * 
     * Returns a plygon feature from a circle object ([[JCircle]]).
     * 
     * @param circle A circle object
     * @param units unit of the radius
     * @example ```ts
     * 
     * const circle = [[ 10, 12], [12, 23], [34, 12], [ 10, 12]]
     * // The method will return a polygon feature
     * const feature = JMap.Geometry.getPolygonFeatureFromCircle(circle)
     * ```
     */
    function getPolygonFeatureFromCircle(circle: JCircle, units?: JGeometryUnit): GeoJSON.Feature<GeoJSON.Polygon>
    
    /**
     * **JMap.Geometry.getFeatureFromPolygon**
     * 
     * Returns a polygon feature from a polygon array ([[JPolygon]]).
     * 
     * @param polygon A polygon array
     * @example ```ts
     * 
     * const polygon = [[ 10, 12], [12, 23], [34, 12], [ 10, 12]]
     * // The method will return a polygon feature
     * const feature = JMap.Geometry.getFeatureFromPolygon(line)
     * ```
     */
    function getFeatureFromPolygon(polygon: JPolygon): GeoJSON.Feature<GeoJSON.Polygon>
    
    /**
     * **JMap.Geometry.getBboxFromFeature**
     * 
     * Returns the feature geometry boundary box ([[JBoundaryBox]]).
     * 
     * @param feature A feature object
     * @example ```ts
     * 
     * const feature = ...
     * // The method will return the feature geometry boundary box
     * const bbox = JMap.Geometry.getBboxFromFeature(feature)
     * ```
     */
    function getBboxFromFeature(feature: GeoJSON.Feature): JBoundaryBox

    /**
     * **JMap.Geometry.getBboxFromFeatures**
     * 
     * Return the boundary box that contains all features
     * 
     * @param features array of features
     * @example ```ts
     *
     * const features = ...
     * // return the features bbox
     * const distance = JMap.Geometry.getBboxFromFeatures(features)
     * ```
     */
    function getBboxFromFeatures(features: GeoJSON.Feature[]): JBoundaryBox
    
    /**
     * **JMap.Geometry.getBboxFromPolygon**
     * 
     * Returns the polygon boundary box.
     * 
     * @param polygon A polygon array
     * @example ```ts
     * 
     * const polygon = [[ 10, 12], [12, 23], [34, 12], [ 10, 12]]
     * // The method will return the polygon boundary box
     * const bbox = JMap.Geometry.getBboxFromPolygon(feature)
     * ```
     */
    function getBboxFromPolygon(polygon: JPolygon): JBoundaryBox
    
    /**
     * **JMap.Geometry.getBboxFromLine**
     * 
     * Returns the line boundary box.
     * 
     * @param line A line array
     * @example ```ts
     * 
     * const line = [[ 10, 12], [12, 23], [34, 12]]
     * // The method will return the line boundary box
     * const bbox = JMap.Geometry.getBboxFromLine(line)
     * ```
     */
    function getBboxFromLine(line: JLine): JBoundaryBox
    
    /**
     * **JMap.Geometry.getPolygonFeatureFromBbox**
     * 
     * Returns a polygon feature corresponding to the boundary box.
     * 
     * @param boundaryBox A boundary box
     * @example ```ts
     * 
     * const bbox = { sw: { x: 10, y: 10 }, ne: { x: 20, y: 20 }}
     * // The method will return the polygon corresponding to the bbox
     * const polygonFeature = JMap.Geometry.getPolygonFeatureFromBbox(bbox)
     * ```
     */
    function getPolygonFeatureFromBbox(boundaryBox: JBoundaryBox): GeoJSON.Feature<GeoJSON.Polygon>
    
    /**
     * **JMap.Geometry.bboxIntersect**
     * 
     * Returns true if the first bbox intersect the second one.
     * 
     * @param bbox1 The first boundary box
     * @param bbox2 The second boundary box
     * @example ```ts
     * 
     * const bbox1 = { sw: { x: 10, 10 }, sw: { x: 20, 20 }}
     * const bbox2 = { sw: { x: 12, 12 }, sw: { x: 14, 18 }}
     * // The method will return true
     * const areIntersecting = JMap.Geometry.bboxIntersect(bbox1, bbox2)
     * ```
     */
    function bboxIntersect(bbox1: JBoundaryBox, bbox2: JBoundaryBox): boolean
    
    /**
     * **JMap.Geometry.polygonIntersect**
     * 
     * Returns true if the polygon feature geometry intersects the other feature geometry.
     * 
     * @param polygonFeature A polygon feature
     * @param otherFeature A feature (can be not a polygon)
     * @example ```ts
     * 
     * const polygonFeature = ...
     * const otherFeature = ...
     * // The method will return true if otherFeature intersect the polygonFeature
     * const areIntersecting = JMap.Geometry.polygonIntersect(polygonFeature, otherFeature)
     * ```
     */
    function polygonIntersect(polygonFeature: GeoJSON.Feature<GeoJSON.Polygon> , otherFeature: GeoJSON.Feature): boolean
    
    /**
     * **JMap.Geometry.lineIntersect**
     * 
     * Returns true if the line feature geometry intersects the other feature geometry.
     * 
     * @param lineFeature A line feature
     * @param otherFeature A feature (can be not a line)
     * @example ```ts
     * 
     * const lineFeature = ...
     * const otherFeature = ...
     * // The method will return true if otherFeature intersect the lineFeature
     * const areIntersecting = JMap.Geometry.lineIntersect(lineFeature, otherFeature)
     * ```
     */
    function lineIntersect(lineFeature: GeoJSON.Feature<GeoJSON.LineString>, otherFeature: GeoJSON.Feature): boolean

    /**
     * **JMap.Geometry.getDistance**
     * 
     * Returns the distance in kilometers between 2 points.
     * 
     * @param p1 the first point
     * @param p2 The second point
     * @example ```ts
     * 
     * // returns the distance between the 2 points
     * const distance = JMap.Geometry.getDistance([ 10, 20 ], [ 30, 30 ])
     * 
     * // returns the distance between the 2 points
     * const distance = JMap.Geometry.getDistance({ x: 10, y: 20 }, { x: 30, y: 30 })
     * ```
     */
    function getDistance(p1: JPoint | JLocation, p2: JPoint | JLocation): number

    /**
     * **JMap.Geometry.getFeatureCollection**
     * 
     * Returns a feature collection.
     * 
     * @param features could be a collection of turf features, JMap locations, or JMap points
     * @example ```ts
     * 
     * // returns the feature collection for the 2 points
     * const distance = JMap.Geometry.getFeatureCollection([ { x: 10, y: 20 }, { x: 30, y: 30 } ])
     * ```
     */
    function getFeatureCollection(features: GeoJSON.Feature[] | JLocation[] | JPoint[]): GeoJSON.FeatureCollection

    /**
     * **JMap.Geometry.getCircleFeature**
     * 
     * Returns a polygon feature equivalent to the circle.
     * 
     * @param center Location of circle's center
     * @param radius The radius in KM
     * @example ```ts
     * 
     * // returns the circle feature
     * const circle = JMap.Geometry.getCircleFeature([ 10, 20 ], 1.4)
     * 
     * // returns the circle feature
     * const circle = JMap.Geometry.getCircleFeature({ x: 10, y: 20 }, 1.4)
     * ```
     */
    function getCircleFeature(center: JPoint | JLocation, radius: number): GeoJSON.Feature<GeoJSON.Polygon>

    /**
     * **JMap.Geometry.getPolygonFeature**
     * 
     * Returns a polygon feature from coordinates.
     * 
     * If the coordinates are not closed the method will close it automatically.
     * 
     * @param coordinates the polygon coordinates (closed or not closed)
     * @param closeCoordinates if true will close the coordinates (if needed)
     * @example ```ts
     * 
     * // will close the coordinates of the polygon and returns the feature
     * const distance = JMap.Geometry.getPolygonFeature([
     *    [ 10, 20 ],
     *    [ 30, 30 ],
     *    [ 10, 60 ]
     * ])
     * ```
     */
    function getPolygonFeature(coordinates: JPoint[], closeCoordinates?: boolean): GeoJSON.Feature<GeoJSON.Polygon>

    /**
     * **JMap.Geometry.getPolygonFeature**
     * 
     * Returns true if the geometry type match the Layer geometry type, else false.
     * 
     * @param layerId the JMap layer id
     * @param closeCoordinates the geometry type
     * @throws if layer not found or layer is a layer group
     * @example ```ts
     * 
     * // returns true if the layer id=3 has "Polygon" features, else false
     * const distance = JMap.Geometry.isGeometryTypeValidForLayer(3, "Polygon")
     * ```
     */
    function isGeometryTypeValidForLayer(layerId: JId, geometryType: GeoJSON.GeoJsonGeometryTypes): boolean
  }

  /**
   * **JMap.Map**
   * 
   * This section contains map related methods. 
   */
  namespace Map {
    
    /**
     * **JMap.Map.getMap**
     * 
     * Returns the Mapbox map instance, a MapBox map.
     * 
     * @example ```ts
     * 
     * // returns the Mapbox map instance
     * JMap.Map.getMap()
     * ```
     */
    function getMap(): mapboxgl.Map
    
    /**
     * **JMap.Map.getMapJSLib**
     * 
     * Returns the MapBox JS library used to create the map.
     * 
     * Usefull to be able to create a map library object, by example a popup.
     * 
     * @example ```ts
     * 
     * // Create a MapBox popup
     * const myCustomPopup = JMap.Map.getMapJSLib().Popup({
     *   closeButton: false,
     *   closeOnClick: false
     * })
     * ```
     */
    function getMapJSLib(): any

    /**
     * ***JMap.Map.getDomContainerId***
     * 
     * Returns the map div container id, where the map is or will be created.
     * 
     * @example ```ts
     * 
     * // returns the map div container id
     * JMap.Map.getDomContainerId()
     * ```
     */
    function getDomContainerId(): string

    /**
     * **JMap.Map.getAllDistanceUnits**
     *
     * Returns a list of all available distance units.
     * 
     * @example ```ts
     *
     * // return list of all distance units
     * // ["millimeters", "centimeters", "meters", "kilometers", "inches", "feet", "yards", "miles", "nauticalmiles" ]
     * JMap.Map.getAllDistanceUnits()
     * ```
     */
    function getAllDistanceUnits(): JDistanceUnit[]

    /**
     * **JMap.Map.getDistanceUnit**
     *
     * Get the map defined distance unit.
     *
     * If no distance unit has been set by user, it returns the project distance unit,
     * if no distance unit is set on the project, it returns "meters" by default.
     * 
     * @throws if no project is loaded
     * @example ```ts
     *
     * // return undefined if no distance unit, else the value
     * JMap.Map.getDistanceUnit()
     * ```
     */
    function getDistanceUnit(): JDistanceUnit

    /**
     * **JMap.Map.setDistanceUnit**
     *
     * Set the distance unit, for the current project.
     * 
     * Save this preference in local storage.
     * 
     * @throws if bad distance unit is provided, or no project is loaded
     * @param distanceUnit the distance unit
     * @example ```ts
     *
     * // Set the distance unit to "miles"
     * JMap.Map.setDistanceUnit("miles")
     * ```
     */
    function setDistanceUnit(distanceUnit: JDistanceUnit): void

    /**
     * ***JMap.Map.isMapCreated***
     * 
     * Returns true if the map has been created.
     * 
     * @example ```ts
     * 
     * // returns true or false
     * JMap.Map.isMapCreated()
     * ```
     */
    function isMapCreated(): boolean

    /**
     * ***JMap.Map.isMapLoaded***
     * 
     * Returns true if the map has been loaded and is ready.
     * 
     * @example ```ts
     * 
     * // returns true or false
     * JMap.Map.isMapLoaded()
     * ```
     */
    function isMapLoaded(): boolean

    /**
     * ***JMap.Map.getExtent***
     * 
     * Returns the current map extent.
     * 
     * @example ```ts
     * 
     * // returns the current map extent
     * JMap.Map.getExtent()
     * ```
     */
    function getExtent(): JBoundaryBox

    /**
     * ***JMap.Map.getCenter***
     * 
     * Returns the location that is the current center of the map.
     * 
     * @example ```ts
     * 
     * // returns the current center of the map
     * JMap.Map.getCenter()
     * ```
     */
    function getCenter(): JLocation

    /**
     * ***JMap.Map.getZoom***
     * 
     * Returns the current map zoom.
     * 
     * @example ```ts
     * 
     * // returns the current map zoom
     * JMap.Map.getZoom()
     * ```
     */
    function getZoom(): number

    /**
     * ***JMap.Map.isNavigationHistoryControlVisible***
     * 
     * Returns true if the Navigation History control is visible on the map.
     * 
     * @example ```ts
     * 
     * // returns true if control is displayed on the map
     * JMap.Map.isNavigationHistoryControlVisible()
     * ```
     */
    function isNavigationHistoryControlVisible(): boolean

    /**
     * ***JMap.Map.setNavigationHistoryControlVisibility***
     * 
     * Changes the Navigation History control visibility on the map.
     * 
     * @param isVisible true to display the Navigation History control, false to hide
     * @example ```ts
     * 
     * // displays the Navigation History control on the map
     * JMap.Map.setNavigationHistoryControlVisibility(true)
     * 
     * // hides the Navigation History control on the map
     * JMap.Map.setNavigationHistoryControlVisibility(false)
     * ```
     */
    function setNavigationHistoryControlVisibility(isVisible: boolean): void

    /**
     * ***JMap.Map.isMapRotationControlVisible***
     * 
     * Returns true if the Map Rotation control is visible on the map.
     * 
     * @example ```ts
     * 
     * // returns true if control is displayed on the map
     * JMap.Map.isMapRotationControlVisible()
     * ```
     * 
     */
    function isMapRotationControlVisible(): boolean
  
    /**
     * ***JMap.Map.setMapRotationControlVisibility***
     * 
     * Changes the Map Rotation control visibility on the map.
     * 
     * @param isVisible true to display the Map Rotation control, false to hide
     * 
     * @example ```ts
     * 
     * // displays the Map Rotation control on the map
     * JMap.Map.setMapRotationControlVisibility(true)
     * 
     * // hides the Map Rotation control on the map
     * JMap.Map.setMapRotationControlVisibility(false)
     * ```
     */
    function setMapRotationControlVisibility(isVisible: boolean): void

    /**
     * ***JMap.Map.isMapInfoControlVisible***
     * 
     * Returns true if the Map Info control is visible on the map.
     * 
     * @example ```ts
     * 
     * // returns true if control is displayed on the map
     * JMap.Map.isMapInfoControlVisible()
     * ```
     */
    function isMapInfoControlVisible(): boolean
  
    /**
     * ***JMap.Map.setMapInfoControlVisibility***
     * 
     * Changes the Map Info control visibility on the map.
     * 
     * @param isVisible true to display the Map Info control, false to hide
     * 
     * @example ```ts
     * 
     * // displays the Map Info control on the map
     * JMap.Map.setMapInfoControlVisibility(true)
     * 
     * // hides the Map Info control on the map
     * JMap.Map.setMapInfoControlVisibility(false)
     * ```
     */
    function setMapInfoControlVisibility(isVisible: boolean): void

    /**
     * ***JMap.Map.isMapInfoControlExpanded***
     * 
     * Returns true if the Map Info control is expanded.
     * 
     * @example ```ts
     * 
     * // returns true if control is expanded
     * JMap.Map.isMapInfoControlExpanded()
     * ```
     */
    function isMapInfoControlExpanded(): boolean
  
    /**
     * ***JMap.Map.setMapInfoControlExpansion***
     * 
     * Changes the Map Info control visibility on the map.
     * 
     * @param isExpanded true to expand the control, false to minimise
     * 
     * @example ```ts
     * 
     * // expands the Map Info control
     * JMap.Map.setMapInfoControlExpansion(true)
     * 
     * // minimises the Map Info control
     * JMap.Map.setMapInfoControlExpansion(false)
     * ```
     */
    function setMapInfoControlExpansion(isExpanded: boolean):void

    /**
     * ***JMap.Map.isScaleControlVisible***
     * 
     * Returns true if the scale control panel is visible on the map.
     * 
     * @example ```ts
     * 
     * // returns true if control is displayed on the map
     * JMap.Map.isScaleControlVisible()
     * ```
     */
    function isScaleControlVisible(): boolean

    /**
     * ***JMap.Map.setScaleControlVisibility***
     * 
     * Changes the scale control panel visibility on the map.
     * 
     * @param isVisible true to display the scale control, false to hide
     * @param position the position on the map where to display the scale control.
     * @example ```ts
     * 
     * // Displays the scale control on the map
     * JMap.Map.setScaleControlVisibility(true)
     * 
     * // Hides the scale control on the map
     * JMap.Map.setScaleControlVisibility(false)
     * ```
     */
    function setScaleControlVisibility(isVisible: boolean, position?: JMapPosition): void

    /**
     * ***JMap.Map.setScaleControlUnits***
     * 
     * Changes the scale control units.
     * 
     * @param units possible values : "imperial", "metric", or "nautical"
     * @example ```ts
     * 
     * // Changes the scale control for imperial units
     * JMap.Map.setScaleControlUnits("imperial")
     * ```
     */
    function setScaleControlUnits(units: "imperial" | "metric" | "nautical"): void

    /**
     * ***JMap.Map.setScaleControlPosition***
     * 
     * Changes the scale control position on the map.
     * 
     * @param position the position on the map where to display the scale control.
     * @example ```ts
     * 
     * // Moves the scale control on the top-left corner of the map
     * JMap.Map.setScaleControlPosition("top-left")
     * ```
     */
    function setScaleControlPosition(position: JMapPosition): void

    /**
     * ***JMap.Map.getScaleControlPosition***
     * 
     * Returns the current scale control position on the map.
     * 
     * @example ```ts
     * 
     * // Return the current scale control position
     * JMap.Map.getScaleControlPosition()
     * ```
     */
    function getScaleControlPosition(): JMapPosition

    /**
     * **JMap.Map.isLayerRendered**
     * 
     * Returns true if layer is visible on the map.
     * 
     * To be true the layer visibility property has to be true,
     * and the current map scale between the layer min and max scale.
     * 
     * @example ```ts
     * 
     * // returns true if layer is visible on the map
     * JMap.Map.isLayerRendered(4)
     * ```
     */
    function isLayerRendered(layerId: number): boolean

    /**
     * **JMap.Map.getLayersVisibilityStatus**
     * 
     * Returns layers visibility status.
     * 
     * The result is a map (= javascript object) where :
     *  - the key is the JMap layer id
     *  - the value is a JMapLayersVisibilityStatus object
     * 
     * A JMapLayersVisibilityStatus object has the following properties :
     *  - layerId: the layer id
     *  - layerName: the layer name
     *  - isRendered: true if 'visibilityProperty', 'parentVisibility', 
     *                'scaleVisibility' and 'extentVisibility' are all true
     *  - visibilityProperty: user can show or hide a layer
     *  - parentVisibility: return false if one of its group parent(s) has
     *                      its visibility property equals to false
     *  - scaleVisibility: return false if at the current scale the layer
     *                     cannot be displayed
     *  - extentVisibility: return false if the extent of the layer is not
     *                      contains by the current view of the map
     * 
     * @example ```ts
     * 
     * // returns the visibility status
     * JMap.Map.getLayersVisibilityStatus()
     * 
     * // Example of result :
     * {
     *  1: { layerId: 1, layerName: "layer 1", isRendered: true, visibilityProperty: true, parentVisibility: true, scaleVisibility: true, extentVisibility: true }
     *  2: { layerId: 2, layerName: "layer 2", isRendered: false, visibilityProperty: true, parentVisibility: true, scaleVisibility: false, extentVisibility: true }
     *  3: { layerId: 3, layerName: "layer 3", isRendered: false, visibilityProperty: false, parentVisibility: true, scaleVisibility: false, extentVisibility: true }
     *  4: { layerId: 4, layerName: "layer 4", isRendered: false, visibilityProperty: false, parentVisibility: false, scaleVisibility: false, extentVisibility: true }
     *  5: { layerId: 5, layerName: "layer 5", isRendered: false, visibilityProperty: true, parentVisibility: true, scaleVisibility: true, extentVisibility: false }
     * }
     * ```
     */
    function getLayersVisibilityStatus(): JMapLayersVisibilityStatus

    /**
     * **JMap.Map.getLayersVisibilityStatusAsArray**
     * 
     * Returns layers visibility status as an array of JMapLayersVisibilityStatus object.
     * 
     * A JMapLayersVisibilityStatus object has the following properties :
     *  - layerId: the layer id
     *  - layerName: the layer name
     *  - isRendered: true if 'visibilityProperty', 'parentVisibility', 
     *                'scaleVisibility' and 'extentVisibility' are all true
     *  - visibilityProperty: user can show or hide a layer
     *  - parentVisibility: return false if one of its group parent(s) has
     *                      its visibility property equals to false
     *  - scaleVisibility: return false if at the current scale the layer
     *                     cannot be displayed
     *  - extentVisibility: return false if the extent of the layer is not
     *                      contains by the current view of the map
     * 
     * @example ```ts
     * 
     * // returns the visibility status as an object array
     * JMap.Map.getLayersVisibilityStatusAsArray()
     * 
     * // Example of result :
     * [
     *  { layerId: 1, layerName: "layer 1", isRendered: true, visibilityProperty: true, parentVisibility: true, scaleVisibility: true, extentVisibility: true }
     *  { layerId: 2, layerName: "layer 2", isRendered: false, visibilityProperty: true, parentVisibility: true, scaleVisibility: false, extentVisibility: true }
     *  { layerId: 3, layerName: "layer 3", isRendered: false, visibilityProperty: false, parentVisibility: true, scaleVisibility: false, extentVisibility: true }
     *  { layerId: 4, layerName: "layer 4", isRendered: false, visibilityProperty: false, parentVisibility: false, scaleVisibility: false, extentVisibility: true }
     *  { layerId: 5, layerName: "layer 5", isRendered: false, visibilityProperty: true, parentVisibility: true, scaleVisibility: true, extentVisibility: false }
     * ]
     * ```
     */
    function getLayersVisibilityStatusAsArray(): JMapLayerVisibilityStatus[]

    /**
     * **JMap.Map.getMapboxSupportedJMapLayerIds**
     * 
     * Returns all layer ids that are displayed by the map.
     * 
     * Mapbox doesn't support all layer types defined in JMap Server.
     * 
     * This function returns all layers ids that are managed by the map.
     * 
     * @example ```ts
     * 
     * // returns layer ids supported by the Mapbox
     * JMap.Map.getMapboxSupportedJMapLayerIds()
     * ```
     */
    function getMapboxSupportedJMapLayerIds(): number[]
        
    /**
     * **JMap.Map.getMapboxSupportedJMapLayerBefore**
     * 
     * Returns the Mapbox supported JMap layer id that is ordered before the JMap layer id provided in argument.
     * 
     * @throws Error if layer is not found
     * @param layerId The JMap layer id
     * @returns the JMap layer id, or undefined if no layer before
     * @example ```ts
     * 
     * // Returns the layer id that is located before layer id=4
     * JMap.Map.getMapboxSupportedJMapLayerBefore(4)
     * ```
     */
    function getMapboxSupportedJMapLayerBefore(layerId: number): number | undefined
    
    /**
     * **JMap.Map.getMapboxSupportedJMapLayerAfter**
     * 
     * Returns the Mapbox supported JMap layer id that is ordered after the JMap layer id provided in argument.
     * 
     * @throws Error if layer is not found
     * @param layerId The JMap layer id
     * @returns the JMap layer id, or undefined if no layer after
     * @example ```ts
     * 
     * // Returns the layer id that is located after layer id=3
     * JMap.Map.getMapboxSupportedJMapLayerAfter(3)
     * ```
     */
    function getMapboxSupportedJMapLayerAfter(layerId: number): number | undefined

    /**
     * **JMap.Map.addMapboxLayerConfigurationForJmapLayer**
     * 
     * Add a JMap layer to the Mapbox supported layer configuration. This method will enable a JMap Layer that would otherwise not 
     * be displayed on the map, and that would otherwise be disabled in the layer tree panel.
     *  
     * @throws Error if layer is not found, or if layer is already displayed on the map
     * @param params a  JMapAddMapboxLayerConfigurationForJmapLayerParams object
     * 
     * @example ```ts
     * 
     * // Add Jmap layer id 118 to the mapbox supported layer configuration, before layer id 147
     * 
     *   JMap.Map.addMapboxLayerConfigurationForJmapLayer({
     *    jmapLayerId: 118,
     *    beforeJmapLayerId: 147,
     *    baseStyle: {
     *      styleLayer: {
     *        "id": "this-id-will-be-normalized",
     *        "type": "fill",
     *        "paint": {
     *          "fill-color": "#FF0000"
     *        },
     *        "layout": {
     *          visibility: "visible" // visibility will be normalized
     *        },
     *        "source": "pre-existing-source-id-or-embeded-source",
     *        "source-layer": "needed-if-adding-a-vector-tile-source"
     *      }
     *    }
     *  })
     * ```
     */
    function addMapboxLayerConfigurationForJmapLayer(params: JMapAddMapboxLayerConfigurationForJmapLayerParams): void

    /**
     * **JMap.Map.refreshLayerById**
     * 
     * This method only works with editable layers
     * 
     * Refreshes the specified layer data on the Map. Can be called for instance after a feature has been added, deleted, or modified in the layer content server-side
     * 
     * @throws Error if layer is not found
     * @param layerId The JMap layer id
     * 
     * @example ```ts
     * 
     * // Refreshes layer id 4 on the map 
     * JMap.Map.refreshLayerById(4)
     * ```
     */
    function refreshLayerById(layerId: JId): void

    /**
     * **JMap.Map.getRenderedJMapLayerIds**
     * 
     * Returns the ids of the layers that are displayed on the map.
     * 
     * Mapbox doesn't support all layer types defined on JMap Server.
     * 
     * This function returns all layers ids that are managed by the map.
     * 
     * @example ```ts
     * 
     * // returns all layer ids that are managed by the map
     * JMap.Map.getRenderedJMapLayerIds()
     * ```
     */
    function getRenderedJMapLayerIds(): number[]

    /**
     * **JMap.Map.getRenderedFeatures**
     * 
     * Returns rendered geojson features for the layer.
     * 
     * @throws Error if layer is not found
     * @throws Error if no or incorrect filter is passed
     * @param layerId The JMap layer id
     * @param filter You can pass a location, a boundary box, or a circle (radius in km). Will returns only features that intersect.
     * @return A features array
     * @example ```ts
     * 
     * // Returns all rendered geojson features for layer 4
     * JMap.Map.getRenderedFeatures(4)
     * 
     * // Returns all rendered geojson features for layer 4 at location x=45.54 and y=65.43
     * JMap.Map.getRenderedFeatures(4, { x: 45.54, y: 65.43 })
     * 
     * // Returns all rendered geojson features for layer 4, that intersect the circle (radius in km)
     * JMap.Map.getRenderedFeatures(4, { center: { x: 45.54, y: 65.43 }, radius: .5 })
     * 
     * // Returns all rendered geojson features for layer 4, that intersect the boundary box
     * // having south-west { x=45.54 and y=65.43 } and north-est { x=48.54 and y=70.43 }
     * JMap.Map.getRenderedFeatures(4, {
     *  sw: { x: 45.54, y: 65.43 },
     *  ne: { x: 48.54, y: 70.43 }
     * })
     * ```
     */
    function getRenderedFeatures(layerId: number, filter?: JLocation | JBoundaryBox | JCircle): GeoJSON.Feature[]
    
    /**
     * **JMap.Map.getRenderedFeaturesAttributeValues**
     * 
     * Returns rendered features attributes for the layer.
     * 
     * The result is an array of object, one object for each feature.
     * Each object contains all feature's attributes, plus another one that is called "featureId" and contains the feature id.
     * 
     * @throws Error if layer is not found
     * @throws Error if no or incorrect filter is passed
     * @param layerId The JMap layer id
     * @param filter You can pass a location, a boundary box, or a circle (radius in km). Will returns only features that intersect.
     * @return An object array
     * @example ```ts
     * 
     * // returns all features attributes for layer 4
     * JMap.Map.getRenderedFeaturesAttributeValues(4)
     * 
     * // returns all features attributes for layer 4, that intersect the location
     * JMap.Map.getRenderedFeaturesAttributeValues(4, { x: 45.54, y: 65.43 })
     * 
     * // returns all features attributes for layer 4, that intersect the circle (radius in km)
     * JMap.Map.getRenderedFeaturesAttributeValues(4, { center: { x: 45.54, y: 65.43 }, radius: .5 })
     * 
     * // returns all features attributes for layer 4, that intersect the boundary box
     * JMap.Map.getRenderedFeaturesAttributeValues(4, { sw: { x: 45.54, y: 65.43 }, ne: { x: 48.54, y: 70.43 }})
     * 
     * // Example of result for features that have only 2 attributes "Firestation" and "Nursery" :
     * [
     *  { name: "Firestation", age: 23, featureId: 2377 },
     *  { name: "Nursery", age: 20, featureId: 3456 }
     * ]
     * ```
     */
    function getRenderedFeaturesAttributeValues(layerId: number, filter?: JLocation | JBoundaryBox | JCircle): JMapFeatureAttributeValues[]

    /**
     * **JMap.Map.getNavigationHistoryStack**
     * 
     * Returns the complete stack of navigation steps recorded in the session (stack is limited to 64 entries, older ones are discarded)
     * 
     * @returns an array of JMapNavigationStep
     * 
     * @example ```ts
     * 
     * // get the navigation stack
     * const navStack: JMapNavigationStep[] = JMap.Map.getNavigationHistoryStack()
     * ```
     */
    function getNavigationHistoryStack():JMapNavigationStep[]

    /**
     * **JMap.Map.undoLastNavigationStep**
     * 
     * Step back in the navigation history recorded in the current map session
     * 
     * Will apply the necessary pan, zoom, bearing and pitch to get back to the last
     * Map view. Maximum number of recorded steps is 64 (older steps get erased)
     * 
     * @returns The last JMapNavigationStep, or undefined if the stack is not rewindable anymore
     * 
     * @example ```ts
     * 
     * // navigate to the previous recorded map view
     * const lastStep: JMapNavigationStep | undefined = JMap.Map.undoLastNavigationStep()
     * ```
     */
    function undoLastNavigationStep(): JMapNavigationStep | undefined

    /**
     * ***JMap.Map.getBaseMap***
     * 
     * Returns the current map pitch.
     * 
     * @example ```ts
     * 
     * // returns the current map pitch
     * JMap.Map.getPitch()
     * ```
     */
    function getPitch(): number

    /**
     * ***JMap.Map.getBaseMap***
     * 
     * Returns the current map bearing (rotation).
     * 
     * @example ```ts
     * 
     * // returns the current map bearing
     * JMap.Map.getBearing()
     * ```
     */
    function getBearing(): number

    /**
     * **JMap.Map.setBearing**
     * 
     * Set the bearing on the map (rotation)
     * 
     * @throws Error if the bearing is not between -360 to 360 degree
     * @param bearing te new value of the bearing between 0 to 360
     * @example ```ts
     * 
     * // Set 30 degrees bearing
     * JMap.Map.setBearing(30)
     * ```
     */
    function setBearing(bearing: number): void

    /**
     * **JMap.Map.setPitch**
     * 
     * Set the pitch on the map
     * 
     * @throws Error if the pitch is not between 0 to 60 degree
     * @param pitch te new value of the pitch between 0 to 60
     * @example ```ts
     * 
     * // Set 30 degrees pitch
     * JMap.Map.setPitch(30)
     * ```
     */
    function setPitch(pitch: number): void

    /**
     * **JMap.Map.panTo**
     * 
     * Move and center the map to the location (animated)
     * 
     * @throws Error if no or incorrect center is passed
     * @param center The location where the map will be centered
     * @param stopJMapEventPropagation if true will prevent JMap events to be fired
     * @example ```ts
     * 
     * // Move the map to the desired location
     * JMap.Map.panTo({ x: 45.34, y: 65.87 })
     * ```
     */
    function panTo(center: JLocation, stopJMapEventPropagation?: boolean): void

    /**
     * **JMap.Map.zoomTo**
     * 
     * Zoom or unzoom the map (animated)
     * 
     * @throws Error if no zoom is passed
     * @param zoom The zoom level to apply
     * @param options animation, zoom padding, stop event, etc ...
     * @example ```ts
     * 
     * // Zoom or unzoom the map to reach the desired zoom level
     * JMap.Map.zoomTo(4.45)
     * ```
     */
    function zoomTo(zoom: number, options?: JPanAndZoomOptions): void
    
    /**
     * **JMap.Map.zoomToRect**
     * 
     * Zoom or unzoom to fit exactly the boundary box (animated)
     * 
     * @throws Error if an invalid bbox is passed
     * @param bbox The boundary box to fit
     * @param options animation, zoom padding, stop event, etc ...
     * @example ```ts
     * 
     * // Zoom or unzoom to fit exactly the boundary box
     * JMap.Map.zoomToRect({ sw: { x: 12, y: 34 }, ne: { x: 23, y: 32 }})
     * ```
     */
    function zoomToRect(bbox: JBoundaryBox, options?: JPanAndZoomOptions): void

    /**
     * **JMap.Map.panAndZoomTo**
     * 
     * Move and zoom (or unzoom) the map (animated)
     * 
     * @throws Error if bad parameters are passed
     * @param center The location where the map will be centered
     * @param zoom The zoom level to apply
     * @param options animation, zoom padding, stop event, etc ...
     * @example ```ts
     * 
     * // Move and zoom the map
     * JMap.Map.panAndZoomTo({ x: 45.34, y: 65.87 }, 5)
     * ```
     */
    function panAndZoomTo(center: JLocation, zoom: number, options?: JPanAndZoomOptions): void

    /**
     * **JMap.Map.setDefaultZoomOptions**
     * 
     * Set zoom default values in JMap Core.
     * 
     * This default values will be used in all methods that use zoom options.
     * 
     * If zoom options are passed in methods, this default values will be overriden by passed values.
     * 
     * If no object is passed, default values are reset with JMap Core default values.
     * 
     * @param options animation, paddings, and maxZoom
     * @example ```ts
     * 
     * // Set default values used by JMap Core
     * JMap.Map.setDefaultZoomOptions({
     *  animate: false,
     *  paddingTop: 20,
     *  paddingLeft: 20,
     *  paddingRight: 20,
     *  paddingBottom: 20
     * })
     * 
     * // Reset default values with JMap Core default values
     * // animate=true, and paddings are all 50.
     * JMap.Map.setDefaultZoomOptions()
     * ```
     */
    function setDefaultZoomOptions(options?: Partial<JZoomOptions>): void

    /**
     * **JMap.Map.navigateTo**
     * 
     * Navigate to a location on the map (animated)
     * 
     * @throws Error if bad parameters are passed
     * @param params the navigation params
     * 
     * @example ```ts
     * 
     * // Navigate to a location on the map
     * JMap.Map.navigateTo({center: { x: 45.34, y: 65.87 }, zoom: 5, bearing: 170, pitch: 30, mapBoxEventData: { stopJMapEventPropagation: true }})
     * ```
     */
    function navigateTo(params: JMapNavigateToParams): void

    /**
     * **JMap.Map.fitFeatures**
     * 
     * Move and zoom (or unzoom) to display the given features.
     * 
     * @throws Error if bad parameters are passed
     * @param features The features where the map will be centered
     * @param options parameter to customize the animation, padding, and/or maxZoomLevel
     * @example ```ts
     * 
     * // first select some features on layer id=3
     * const features = JMap.Map.Selection.getSelectedFeaturesForLayer(3) // return layer id=3 selected features
     * // Move and zoom to display the features
     * JMap.Map.fitFeatures(features)
     * 
     * // The same with optional parameters
     * JMap.Map.fitFeatures(features, {
     *  animate: false, // default true
     *  paddingTop: 120, // default 50
     *  paddingLeft: 100, // default 50
     *  paddingRight: 100, // default 50
     *  paddingBottom: 120, // default 50
     *  maxZoom: 10 // default the current zoom
     * })
     * ```
     */
    function fitFeatures(features: GeoJSON.Feature[], options?: JPanAndZoomOptions): void
    
    /**
     * **JMap.Map.flashLocation**
     * 
     * Display a pulsing dot on the map to hilite a location, with options
     * 
     * Flashed feature can be immediatly removed using [[JMap.Map.clearFlashingLocations]]
     * 
     * @param location a JLocation
     * @param options (see example)
     * @example ```ts
     * 
     * // define a location in lat-lon coordinates
     * const locationToFlash = {x:-74.178, y:46.0455}
     * // define options
     * const flashOptions = { // Optional. 
     *  dotColor: { // Optional. Default { red: 165, green: 165, blue: 255, alpha: 1 }
     *    red:100 , // 0-255
     *    green:100 , // 0-255
     *    blue:255 , // 0-255
     *    alpha: 1.0 // 0-1
     * },  
     *  haloColor: { // Optional. Default { red: 105, green: 105, blue: 255, alpha: 1 }
     *    red:0 ,  // 0-255
     *    reen:255 , // 0-255
     *    blue:100 , // 0-255
     *    alpha: 1 // 0-1
     * },
     *  size: 100, // Optional, in pixels, default 100
     *  delay: 5000, // Optional, in milliseconds. default no expiration delay (flash indefinitely)
     *  fitFeatures: true, // Optional, will pan and zoom to display all flashed features. Default: false
     *  panAndZoomOptions: { // optionnal
     *    animate: false, // default true
     *    paddingTop: 120, // default 50
     *    paddingLeft: 100, // default 50
     *    paddingRight: 100, // default 50
     *    paddingBottom: 120, // default 50
     *    maxZoom: 10 // default the current zoom
     *  }
     * }
     * 
     * JMap.Map.flashLocation(locationToFlash,flashOptions)
     * ```
     */
    function flashLocation(location: JLocation, options?: JMapFlashLocationParams): void
    
    /**
     * **JMap.Map.flashLocations**
     * 
     * Display a collection of pulsing dots on the map to hilite several locations, with options
     * 
     * Flashed features can be immediatly removed using [[JMap.Map.clearFlashingLocations]]
     * 
     * @param locations an array of JLocations
     * @param options (see example)
     * @example ```ts
     * 
     * // define locations in lat-lon coordinates
     * const locationsToFlash = [{x:-74.178, y:46.0455}, {x:-74.3, y:46.2}, {x:-74, y:46.2}]
     * // define options
     * const flashOptions = { // Optional. 
     *  dotColor: { // Optional. Default { red: 165, green: 165, blue: 255, alpha: 1 }
     *    red:100 , // 0-255
     *    green:100 , // 0-255
     *    blue:255 , // 0-255
     *    alpha: 1.0 // 0-1
     * },  
     *  haloColor: { // Optional. Default { red: 105, green: 105, blue: 255, alpha: 1 }
     *    red:0 ,  // 0-255
     *    reen:255 , // 0-255
     *    blue:100 , // 0-255
     *    alpha: 1 // 0-1
     * },
     *  size: 100, // Optional, in pixels, default 100
     *  delay: 5000, // Optional, in milliseconds. default no expiration delay (flash indefinitely)
     *  fitFeatures: true, // Optional, will pan and zoom to display all flashed features. Default: false
     *  panAndZoomOptions: { // optionnal
     *    animate: false, // default true
     *    paddingTop: 120, // default 50
     *    paddingLeft: 100, // default 50
     *    paddingRight: 100, // default 50
     *    paddingBottom: 120, // default 50
     *    maxZoom: 10 // default the current zoom
     *  }
     * }
     * 
     * JMap.Map.flashLocations(locationsToFlash,flashOptions)
     * ```
     */
    function flashLocations(locations: JLocation[], options?: JMapFlashLocationParams): void
  
    /**
     * **JMap.Map.clearFlashingLocations**
     * 
     * Immediatly remove all flashed locations on the map that have been displayed using [[JMap.Map.flashLocation]] or [[JMap.Map.flashLocations]]
     * 
     * @example ```ts
     * 
     * // flash a location indefinetly
     * JMap.Map.flashLocation({x:-74.178, y:46.0455})
     * 
     * // clear all flashed locations after a timeout of 30 seconds
     * setTimeout(()=>JMap.Map.clearFlashingLocations(), 30000)
     * ```     
     * */
    function clearFlashingLocations():void

    /**
     * **JMap.Map.getResolution**
     * 
     * Return the screen resolution, depending on screen DPI, latitude, and zoom level.
     * 
     * if params is passed will use the given values for latitude (center of the map) and zoom, else use map current ones.
     * 
     * Note: screen DPI is fixed.
     * 
     * @param params if passed will use the given values for latitude and zoom, else use map current values
     * @example ```ts
     * 
     * // return the current resolution for current map latitude (center of the map) and zoom level
     * JMap.Map.getResolution()
     * 
     * // return the resolution for given map latitude=45.5 and zoom level = 4
     * JMap.Map.getResolution({
     *   latitude: 45.5,
     *   zoom: 4
     * })
     * ```     
     * */
    function getResolution(params?: JLatitudeAndZoom): number

    /**
     * ***JMap.Map.getScale***
     * 
     * Returns the map scale, depending on screen DPI, latitude, and zoom level.
     * 
     * if params is passed will use the given values for latitude (center of the map) and zoom, else use map current ones.
     * 
     * Note: screen DPI is fixed.
     * 
     * @param params if passed will use the given values for latitude and zoom, else use map current values
     * @example ```ts
     * 
     * // returns the current map scale
     * // for instance : "1 : 12959346"
     * JMap.Map.getScale()
     * 
     * // returns the map scale for given map latitude=45.5 and zoom level = 4
     * // for instance: "1 : 12959346"
     * JMap.Map.getScale({
     *   latitude: 45.5,
     *   zoom: 4
     * })
     * ```
     */
    function getScale(params?: JLatitudeAndZoom): string

    /**
     * ***JMap.Map.getScaleDenominator***
     * 
     * Returns the map scale denominator, depending on screen DPI, latitude, and zoom level.
     * 
     * For instance if the scale is "1 : 12959346", the denominator is the number 12959346.
     * 
     * if params is passed will use the given values for latitude (center of the map) and zoom, else use map current ones.
     * 
     * Note: screen DPI is fixed.
     * 
     * @param params if passed will use the given values for latitude and zoom, else use map current values
     * @example ```ts
     * 
     * // returns the current map scale
     * JMap.Map.getScaleDenominator()
     * 
     * // returns the map scale for given map latitude=45.5 and zoom level = 4
     * JMap.Map.getScaleDenominator({
     *   latitude: 45.5,
     *   zoom: 4
     * })
     * ```
     */
    function getScaleDenominator(params?: JLatitudeAndZoom): number

    /**
     * ***JMap.Map.setScale***
     * 
     * Zooms or unzooms the map to reach the given map scale
     * 
     * @param scaleDenominator must be greater than 0
     * @example ```ts
     * 
     * // zooms or unzooms the map to reach the given map scale
     * JMap.Map.setScale(2344)
     * ```
     */
    function setScale(scaleDenominator: number): number

    /**
     * ***JMap.Map.getZoomFromScale***
     * 
     * returns the zoom corresponding to the given scale.
     * 
     * @param scaleDenominator must be greater than 0
     * @param latitude must be greater than 0
     * @example ```ts
     * 
     * // returns the corresponding zoom level for the given scale 2344
     * JMap.Map.getZoomFromScale(2344)
     * ```
     */
    function getZoomFromScale(scaleDenominator: number, latitude?: number): number

    /**
     * ***JMap.Map.getMouseCursor***
     * 
     * Returns the current map mouse cursor.
     * 
     * @throws if the map is not ready
     * @example ```ts
     * 
     * // returns the current map mouse cursor
     * JMap.Map.getMouseCursor()
     * ```
     */
    function getMouseCursor(): string

    /**
     * ***JMap.Map.setMouseCursor***
     * 
     * Set the map mouse cursor.
     * 
     * If cursor is an empty string will unset the cursor (the mapbox default will be used).
     * 
     * @throws if the map is not ready
     * @param cursor the mouse cursor
     * @example ```ts
     * 
     * // set the map mouse cursor as "move"
     * JMap.Map.setMouseCursor("move")
     * 
     * // set the map mouse cursor as "default"
     * JMap.Map.setMouseCursor("default")
     * 
     * // unset map mouse cursor (a hand will be displayed)
     * JMap.Map.setMouseCursor("")
     * ```
     */
    function setMouseCursor(cursor: string): void

    /**
     * **JMap.Map.Interaction**
     * 
     * We introduced a notion of map interactor in JMap.
     * 
     * The need is that we want the map to interact in different ways depending on what the user is doing :
     *  - When he is drawing on the map we display shape on the map
     *  - When he is clicking on the map we display a popup information
     *  - etc...
     * 
     * So we defined our own map interactors for JMap, and we also allow you to create and register your own interactors.
     * 
     * An interactor is a JS object that define 4 functions (for more details consult interface [[JMapInteractor]]) :
     * ```ts
     *  - init(map: mapboxgl.Map): void
     *  - activate(): void
     *  - deactivate(): void
     *  - terminate(): void
     * ```
     * 
     * After creating your interactor object, you need to add it through the interaction service :
     * ```ts
     *  JMap.Map.Interaction.addInteractor(
     *    "display-bubbles-on-click", // interactor id
     *    bubbleInteractor, // interactor object
     *    true // if true activate the interactor after being added
     * )
     * ```
     * 
     * There is always an interactor actived, and this is the active interactions that are in use on the map.
     * 
     * When you activate an interactor, the previous one is deactivated, and the new one activated on the map.
     * 
     * When you don't need anymore an interactor you can terminate it, and it will not exist anymore in the JMap NG Core library.
     */
    namespace Interaction {
      
      /**
       * **JMap.Map.Interaction.addInteractor**
       * 
       * Add a map interactor.
       * 
       * If the id has already an existing interactor defined for, it will replace the old one.
       * 
       * So be carrefull not to remove JMap interactors.
       * 
       * You can get the list of already existing interactor ids like this :
       * ```ts
       * JMap.Map.Interaction
       *    .getAllInteractorDescriptors()
       *    .map(interactor => interactor.id)
       * ```
       * 
       * @throws Error if bad parameters are passed
       * @param id The new interactor id.
       * @param interactor The map interactor object
       * @param active If true will activate the new interactor after being added
       * @example ```ts
       * 
       * // add a new interactor
       * JMap.Map.Interaction.addInteractor("my-custom-pin", { ...mapInteractor }, false)
       * 
       * // add and activate a new interactor
       * JMap.Map.Interaction.addInteractor("my-custom-pin", { ...mapInteractor }, true)
       * ```
       */
      function addInteractor(id: string, interactor: JMapInteractor, active?: boolean): void
      
      /**
       * **JMap.Map.Interaction.terminateInteractorById**
       * 
       * Terminate the map interactor.
       * 
       * After being terminated, the interactor doesn't exist anymore in JMap NG Core library.
       * 
       * You cannot activate it anymore.
       * 
       * @throws Error if interactor is not found
       * @param interactorId The interactor id to terminate
       * @example ```ts
       * 
       * // terminate interactor id="custom-selection"
       * JMap.Map.Interaction.terminateInteractorById("custom-selection")
       * ```
       */
      function terminateInteractorById(interactorId: string): void
      
      /**
       * **JMap.Map.Interaction.getAllInteractorIds**
       * 
       * Returns all existing interactor ids.
       * 
       * @example ```ts
       * 
       * // returns all existing interactor ids
       * JMap.Map.Interaction.getAllInteractorIds()
       * ```
       */
      function getAllInteractorIds(): string[]
      
      /**
       * **JMap.Map.Interaction.getActiveInteractorId**
       * 
       * Returns the active interactor id.
       * 
       * @example ```ts
       * 
       * // Returns the active interactor descriptor
       * JMap.Map.Interaction.getActiveInteractorId()
       * ```
       */
      function getActiveInteractorId(): string
      
      /**
       * **JMap.Map.Interaction.activateInteractorById**
       * 
       * Activate an existing map interactor.
       * 
       * Deactivate the previous one, and activate the new one.
       * 
       * @throws Error if interactor is not found
       * @param interactorId The interactor id to activate
       * @example ```ts
       * 
       * // Activate the JMAP defined interactor "draw"
       * JMap.Map.Interaction.activateInteractorById("draw")
       * ```
       */
      function activateInteractorById(interactorId: string): void
    }
    
    /**
     * **JMap.Map.Filter**
     * 
     * JMap offer the ability to filter the features that are rendered on the map.
     * 
     * We can apply filter on attributes values, or a spatial filter.
     */
    namespace Filter {
      
      /**
       * **JMap.Map.Filter.applyHasAttribute**
       * 
       * Render only layer's features that has the attribute defined in their properties.
       * If the feature attribute is defined but its value is undefined, the feature will be rendered.
       * 
       * Only one attribute filter can be set for a specific layer and attributeId at the same time.
       * 
       * @throws Error if layer or attribute is not found
       * @param layerId The JMap layer id
       * @param attributeId The JMap attribute id
       * @returns The filter id. By example for layer 4 and attribute 'on_off' => "attribute-4-on_off"
       * @example ```ts
       * 
       * // Will render only features having attribute "name" for layer 4
       * JMap.Map.Filter.applyHasAttribute(4, "name")
       * ```
       */
      function applyHasAttribute(layerId: number, attributeId: string): string
      
      /**
       * **JMap.Map.Filter.applyHasNotAttribute**
       * 
       * Render only layer's features that hasn't the attribute defined in their properties.
       * If the property is defined but value is undefined, the feature will not be rendered.
       * 
       * Only one attribute filter can be set for a specific layer and attributeId at the same time.
       * 
       * @throws Error if layer or attribute is not found
       * @param layerId The JMap layer id
       * @param attributeId The JMap attribute id
       * @returns The filter id. By example for layer 4 and attribute 'on_off' => "attribute-4-on_off"
       * @example ```ts
       * 
       * // Will hide features having attribute "name" for layer 4
       * JMap.Map.Filter.applyHasNotAttribute(4, "name")
       * ```
       */
      function applyHasNotAttribute(layerId: number, attributeId: string): string
      
      /**
       * **JMap.Map.Filter.applyAttributeValueEqualTo**
       * 
       * Render only layer's features that has attributeId having value equals to attributeValue
       * 
       * Only one attribute filter can be set for a specific layer and attributeId at the same time.
       * 
       * @throws Error if layer or attribute is not found
       * @param layerId The JMap layer id
       * @param attributeId The JMap attribute id
       * @param attributeValue The attribute value
       * @returns The filter id. By example for layer 4 and attribute 'on_off' => "attribute-4-on_off"
       * @example ```ts
       * 
       * // Will render features having "name" equals to "Aquarius" for layer 4
       * JMap.Map.Filter.applyAttributeValueEqualTo(4, "name", "Aquarius")
       * ```
       */
      function applyAttributeValueEqualTo(layerId: number, attributeId: string, attributeValue: any): string
      
      /**
       * **JMap.Map.Filter.applyAttributeValueBetween**
       * 
       * Render only layer's features that has attributeId having value between start and end attributes,
       * including equals values.
       * 
       * Only one attribute filter can be set for a specific layer and attributeId at the same time.
       * 
       * @throws Error if layer or attribute is not found
       * @param layerId The JMap layer id
       * @param attributeId The JMap attribute id
       * @param start The min value
       * @param start The max value
       * @returns The filter id. By example for layer 4 and attribute 'on_off' => "attribute-4-on_off"
       * @example ```ts
       * 
       * // Will render only features having "level" greater or equals to 2 and lower or equals to 10 for layer 4
       * JMap.Map.Filter.applyAttributeValueBetween(4, "level", 2, 10)
       * ```
       */
      function applyAttributeValueBetween(layerId: number, attributeId: string, start: any, end: any): string
      
      /**
       * **JMap.Map.Filter.applyAttributeValueNotEqualTo**
       * 
       * Render only layer's features that has attributeId not having value equals to attributeValue
       * 
       * Only one attribute filter can be set for a specific layer and attributeId at the same time.
       * 
       * @throws Error if layer or attribute is not found
       * @param layerId The JMap layer id
       * @param attributeId The JMap attribute id
       * @param attributeValue The attribute value
       * @returns The filter id. By example for layer 4 and attribute 'on_off' => "attribute-4-on_off"
       * @example ```ts
       * 
       * // Will hide features having "name" equals "Aquarius" for layer 4
       * JMap.Map.Filter.applyAttributeValueNotEqualTo(4, "name", "Aquarius")
       * ```
       */
      function applyAttributeValueNotEqualTo(layerId: number, attributeId: string, attributeValue: any): string
      
      /**
       * **JMap.Map.Filter.applyAttributeValueGreaterThan**
       * 
       * Render only layer's features that has attributeId having value strictly greater to attributeValue.
       * 
       * Only one attribute filter can be set for a specific layer and attributeId at the same time.
       * 
       * @throws Error if layer or attribute is not found
       * @param layerId The JMap layer id
       * @param attributeId The JMap attribute id
       * @param attributeValue The attribute value
       * @returns The filter id. By example for layer 4 and attribute 'on_off' => "attribute-4-on_off"
       * @example ```ts
       * 
       * // Will render features having "level" strictly greater than 2 for layer 4
       * JMap.Map.Filter.applyAttributeValueGreaterThan(4, "level", 2)
       * ```
       */
      function applyAttributeValueGreaterThan(layerId: number, attributeId: string, attributeValue: any): string
      
      /**
       * **JMap.Map.Filter.applyAttributeValueGreaterOrEqualsTo**
       * 
       * Render only layer's features that has attributeId having value greater or equals to attributeValue.
       * 
       * Only one attribute filter can be set for a specific layer and attributeId at the same time.
       * 
       * @throws Error if layer or attribute is not found
       * @param layerId The JMap layer id
       * @param attributeId The JMap attribute id
       * @param attributeValue The attribute value
       * @returns The filter id. By example for layer 4 and attribute 'on_off' => "attribute-4-on_off"
       * @example ```ts
       * 
       * // Will render features having "level" greater or equals to 2 for layer 4
       * JMap.Map.Filter.applyAttributeValueGreaterOrEqualsTo(4, "level", 2)
       * ```
       */
      function applyAttributeValueGreaterOrEqualsTo(layerId: number, attributeId: string, attributeValue: any): string
      
      /**
       * **JMap.Map.Filter.applyAttributeValueLowerThan**
       * 
       * Render only layer's features that has attributeId having value strictly lower to attributeValue.
       * 
       * Only one attribute filter can be set for a specific layer and attributeId at the same time.
       * 
       * @throws Error if layer or attribute is not found
       * @param layerId The JMap layer id
       * @param attributeId The JMap attribute id
       * @param attributeValue The attribute value
       * @returns The filter id. By example for layer 4 and attribute 'on_off' => "attribute-4-on_off"
       * @example ```ts
       * 
       * // Will render features having "level" strictly lower to 5 for layer 4
       * JMap.Map.Filter.applyAttributeValueLowerThan(4, "level", 5)
       * ```
       */
      function applyAttributeValueLowerThan(layerId: number, attributeId: string, attributeValue: any): string
      
      /**
       * **JMap.Map.Filter.applyAttributeValueLowerOrEqualsTo**
       * 
       * Render only layer's features that has attributeId having value lower or equals to attributeValue.
       * 
       * Only one attribute filter can be set for a specific layer and attributeId at the same time.
       * 
       * @throws Error if layer or attribute is not found
       * @param layerId The JMap layer id
       * @param attributeId The JMap attribute id
       * @param attributeValue The attribute value
       * @returns The filter id. By example for layer 4 and attribute 'on_off' => "attribute-4-on_off"
       * @example ```ts
       * 
       * // Will render features having "level" lower or equals to 5 for layer 4
       * JMap.Map.Filter.applyAttributeValueLowerOrEqualsTo(4, "level", 5)
       * ```
       */
      function applyAttributeValueLowerOrEqualsTo(layerId: number, attributeId: string, attributeValue: any): string
      
      /**
       * **JMap.Map.Filter.applyAttributeValueIn**
       * 
       * Render only layer's features that has attributeId having value matching any values in attributeValues.
       * 
       * Only one attribute filter can be set for a specific layer and attributeId at the same time.
       * 
       * @throws Error if layer or attribute is not found
       * @param layerId The JMap layer id
       * @param attributeId The JMap attribute id
       * @param attributeValues The attribute values to match
       * @returns The filter id. By example for layer 4 and attribute 'on_off' => "attribute-4-on_off"
       * @example ```ts
       * 
       * // Will render features having "level" equals to 4 or 5, for layer 4
       * JMap.Map.Filter.applyAttributeValueIn(4, "level", [ 4, 5 ])
       * ```
       */
      function applyAttributeValueIn(layerId: number, attributeId: string, attributeValues: any[]): string
      
      /**
       * **JMap.Map.Filter.applyAttributeValueNotIn**
       * 
       * Render only layer's features that has attributeId having value not matching any values in attributeValues.
       * 
       * Only one attribute filter can be set for a specific layer and attributeId at the same time.
       * 
       * @throws Error if layer or attribute is not found
       * @param layerId The JMap layer id
       * @param attributeId The JMap attribute id
       * @param attributeValues The attribute values to match
       * @returns The filter id. By example for layer 4 and attribute 'on_off' => "attribute-4-on_off"
       * @example ```ts
       * 
       * // Will render features having "level" not equals to 4 or 5, for layer 4
       * JMap.Map.Filter.applyAttributeValueNotIn(4, "level", [ 4, 5 ])
       * ```
       */
      function applyAttributeValueNotIn(layerId: number, attributeId: string, attributeValues: any[]): string
      
      /**
       * **JMap.Map.Filter.applySpatial**
       * 
       * Render only layer's features that intersect the filterGeometry area.
       * 
       * Only one spatial filter can be set for a specific layer at the same time.
       * 
       * @throws Error if layer is not found, or filterGeometry format is not good
       * @param layerId The JMap layer id
       * @param filterGeometry The geometry that is the area to search. Can be a circle or a polygon.
       * @returns The filter id. By example for layer 4 => "spatial-4"
       * @example ```ts
       * 
       * // Will render features that intersect the circle of radius 500 (in km) centered at location x=20 and y=10.
       * JMap.Map.Filter.applySpatial(4, { radius: 500, center: { x: 20, y: 10 }})
       * 
       * // Will render features that intersect the polygon (in this case a square)
       * JMap.Map.Filter.applySpatial(4, [ [ 20.44, 10.32 ], [ 20.44, 78.44 ], [ 40.56, 78.44 ], [ 40.56, 10.32 ], [ 20.44, 10.32 ] ])
       * ```
       */
      function applySpatial(layerId: number, filterGeometry: JPolygon | JCircle): string
      
      /**
       * **JMap.Map.Filter.removeByFilterId**
       * 
       * Remove the filter on the map following the filter id passed in parameter. 
       * 
       * @param filterId The filter id. The one you get when you call a filter method that starts with apply.
       * @example ```ts
       * 
       * // Remove spatial filter on layer 3
       * JMap.Map.Filter.removeByFilterId("spatial-3")
       * 
       * // Remove attribute filter on attribute id="on_off", on layer 4
       * JMap.Map.Filter.removeByFilterId("attribute-4-on_off")
       * ```
       */
      function removeByFilterId(filterId: string): void

      /**
       * **JMap.Map.Filter.removeAllFilters**
       * 
       * Remove all spatial and attributes filters for layer.
       * 
       * @param layerId The JMap layer id
       * @example ```ts
       * 
       * // Remove all filters (spatial + attribute) for layer 3
       * JMap.Map.Filter.removeAllFilters(3)
       * ```
       */
      function removeAllFilters(layerId: number): void
    }

    /**
     * **JMap.Map.Selection**
     * 
     * You can select features on the map with JMap, this where you can manage the selection.
     * 
     * You can select on the map programatically by passing a location, or by passing features.
     * 
     * And you can also removing some or all features of the selection.
     */
    namespace Selection {

      /**
       * ***JMap.Map.Selection.isEmpty***
       * 
       * Returns true if no selection is made for all layers.
       * 
       * If at least one feature is selected on one layer, returns false.
       * 
       * @example ```ts
       * 
       * // Returns true if no selection is made for all layers.
       * JMap.Map.Selection.isEmpty()
       * ```
       */
      function isEmpty(): boolean

      /**
       * ***JMap.Map.Selection.isEmptyByLayerId***
       * 
       * Returns true if no selection is made for the specified layer.
       * 
       * If at least one feature is selected on the layer, returns false.
       * 
       * @example ```ts
       * 
       * // Returns true if no selection is made for layer id 5.
       * JMap.Map.Selection.isEmptyByLayerId(5)
       * ```
       */
      function isEmptyByLayerId(layerId: JId): boolean

      /**
       * ***JMap.Map.Selection.getSelectionCentroid***
       * 
       * @throws Error if selection is empty
       * @param selection a JMapSelection object
       * @returns a JLocation representing the centroid of the selection
       * 
       * @example ```ts
       * 
       * // get the current selected features by layer id
       * const selection = JMap.Map.Selection.getSelectedFeatures()
       * 
       * // compute the centroid of the selection
       * const centroid = JMap.Map.Selection.getSelectionCentroid(selection)
       * 
       * console.log(`centroid of selection is located at: LAT: ${centroid.y}, LON: ${centroid.x}`)
       * ```
       */
      function getSelectionCentroid(selection: JMapSelection): JLocation

      /**
       * ***JMap.Map.Selection.getSelectedFeatures***
       * 
       * Returns the current map selection as a javascript map (= a javascript object) where :
       *  - the key is the layer element id
       *  - the value is an array of feature (an empty array if layer doesn't have features selected)
       * 
       * @example ```ts
       * 
       * // returns the current selected features by layer id
       * JMap.Map.Selection.getSelectedFeatures()
       * ```
       */
      function getSelectedFeatures(): JMapSelection

      /**
       * ***JMap.Map.Selection.getSelectedFeaturesForLayer***
       * 
       * Returns the current selected features for a specific JMap layer.
       * 
       * @returns an array of GeoJSON features
       * @example ```ts
       * 
       * // returns the current selected features for layer 3
       * JMap.Map.Selection.getSelectedFeaturesForLayer(3)
       * ```
       */
      function getSelectedFeaturesForLayer(layerId: number): GeoJSON.Feature[]

      /**
       * ***JMap.Map.Selection.getSelectedFeatureIdsForLayer***
       * 
       * Returns the current selected feature ids for a specific JMap layer.
       * 
       * This function is the equivalent of that code :
       * ```ts
       * // returns the same as JMap.Map.getSelectedFeatureIdsForLayer(3)
       * JMap.Map.Selection
       *    .getSelectedFeaturesForLayer(layerId: number)
       *    .map(feature => feature.id)
       * ```
       * 
       * @example ```ts
       * 
       * // returns the current selected feature ids for layer 3
       * JMap.Map.Selection.getSelectedFeatureIdsForLayer(3)
       * ```
       */
      function getSelectedFeatureIdsForLayer(layerId: number): string[]

      /**
       * **JMap.Map.Selection.selectOnOneLayerAtLocation**
       * 
       * Select for specific layer its features that are at the location.
       * 
       * Same behavior as if you were clicking on the map in order to select features, but for only one layer.
       * 
       * @throws Error if layer is not found or location format is not good
       * @param layerId The JMap layer id
       * @param location The location where you want feature selection
       * @param params selection parameters, see [[JMapSelectionParams]]
       * @returns The features array
       * @example ```ts
       * 
       * // Process a selection on the map for layer id=4, at the location in params
       * JMap.Map.Selection.selectOnOneLayerAtLocation(4, { x: 34.23, y: 55.5 })
       * ```
       */
      function selectOnOneLayerAtLocation(layerId: number, location: JLocation, params?: JMapSelectionParams): GeoJSON.Feature[]

      /**
       * **JMap.Map.Selection.selectOnOneLayerFromCircle**
       * 
       * Select for specific layer its features that intersect the circle.
       * 
       * @throws Error if layer is not found or if circle format is not good
       * @param layerId The JMap layer id
       * @param circle The circle
       * @param params selection parameters, see [[JMapSelectionParams]]
       * @returns The features array
       * @example ```ts
       * 
       * // Process a selection on the map for layer id=4,
       * // selecting features intersecting the circle
       * JMap.Map.Selection.selectOnOneLayerFromCircle(
       *   4, //layer id
       *   {
       *     center: { x: 34.23, y: 55.5 },
       *     radius: 100
       *   }
       * )
       * ```
       */
      function selectOnOneLayerFromCircle(layerId: number, circle: JCircle, params?: JMapSelectionParams): GeoJSON.Feature[]

      /**
       * **JMap.Map.Selection.selectOnOneLayerFromLine**
       * 
       * Select for specific layer its features that intersect the line.
       * 
       * @throws Error if layer is not found or if line format is not good
       * @param layerId The JMap layer id
       * @param line The line
       * @param params selection parameters, see [[JMapSelectionParams]]
       * @returns The features array
       * @example ```ts
       * 
       * // Process a selection on the map for layer id=4,
       * // selecting features that intersect the line
       * JMap.Map.Selection.selectOnOneLayerFromLine(
       *   4, // The layer id
       *   [
       *     [ 34.23, 55.5 ],
       *     [ 36.24, 14.9 ],
       *     [ 45.23, 25.2 ]
       *   ]
       * )
       * ```
       */
      function selectOnOneLayerFromLine(layerId: number, line: JLine, params?: JMapSelectionParams): GeoJSON.Feature[]

      /**
       * **JMap.Map.Selection.selectOnOneLayerFromPolygon**
       * 
       * Select for specific layer its features that intersect the line.
       * 
       * @throws Error if layer is not found or if line format is not good
       * @param layerId The JMap layer id
       * @param polygon The line
       * @param params selection parameters, see [[JMapSelectionParams]]
       * @returns The features array
       * @example ```ts
       * 
       * // Process a selection on the map for layer id=4, selecting features intersecting the line
       * JMap.Map.Selection.selectOnOneLayerFromPolygon(
       *   4, // The layer id
       *   [
       *     [ 34.23, 55.5 ],
       *     [ 36.24, 14.9 ],
       *     [ 45.23, 25.2 ],
       *     [ 34.23, 55.5 ]
       *   ]
       * )
       * ```
       */
      function selectOnOneLayerFromPolygon(layerId: number, polygon: JPolygon, params?: JMapSelectionParams): GeoJSON.Feature[]

      /**
       * **JMap.Map.Selection.selectOnAllLayersAtLocation**
       * 
       * Select for all layers the features that are at the location.
       * 
       * Same behavior as if you were clicking on the map in order to select features.
       * 
       * @throws Error if location format is not good
       * @param location The location where you want feature selection
       * @param params selection parameters, see [[JMapSelectionParams]]
       * @returns The new feature selection
       * @example ```ts
       * 
       * // Process a selection on the map for all layers, at the location in params
       * JMap.Map.Selection.selectOnAllLayersAtLocation({ x: 34.23, y: 55.5 })
       * ```
       */
      function selectOnAllLayersAtLocation(location: JLocation, params?: JMapSelectionParams): JMapSelection

      /**
       * **JMap.Map.Selection.selectOnAllLayersFromCircle**
       * 
       * Select for all layers the features that intersect the circle.
       * 
       * @throws Error if circle format is not good
       * @param circle The circle
       * @param params selection parameters, see [[JMapSelectionParams]]
       * @returns The new feature selection
       * @example ```ts
       * 
       * // Process a selection on the map for all layers,
       * // select all features that intersect the circle
       * JMap.Map.Selection.selectOnAllLayersFromCircle({
       *   center: { x: 34.23, y: 55.5 },
       *   radius: 100
       * })
       * ```
       */
      function selectOnAllLayersFromCircle(circle: JCircle, params?: JMapSelectionParams): JMapSelection

      /**
       * **JMap.Map.Selection.selectOnAllLayersFromLine**
       * 
       * Select for all layers the features that intersect the line.
       * 
       * @throws Error if line format is not good
       * @param line The line
       * @param params selection parameters, see [[JMapSelectionParams]]
       * @returns The new feature selection
       * @example ```ts
       * 
       * // Process a selection on the map for all layers,
       * // select all features that intersect the line
       * JMap.Map.Selection.selectOnAllLayersFromLine([
       *   [ 34.23, 55.5 ],
       *   [ 36.24, 14.9 ],
       *   [ 45.23, 25.2 ]
       * ])
       * ```
       */
      function selectOnAllLayersFromLine(line: JLine, params?: JMapSelectionParams): JMapSelection

      /**
       * **JMap.Map.Selection.selectOnAllLayersFromPolygon**
       * 
       * Select for all layers the features that intersect the polygon.
       * 
       * @throws Error if polygon format is not good
       * @param polygon The polygon
       * @param params selection parameters, see [[JMapSelectionParams]]
       * @returns The new feature selection
       * @example ```ts
       * 
       * // Process a selection on the map for all layers,
       * // select all features that intersect the polygon
       * JMap.Map.Selection.selectOnAllLayersFromPolygon([
       *   [ 34.23, 55.5 ],
       *   [ 36.24, 14.9 ],
       *   [ 45.23, 25.2 ],
       *   [ 34.23, 55.5 ] // first and last point of a polygon must be equals
       * ])
       * ```
       */
      function selectOnAllLayersFromPolygon(polygon: JPolygon, params?: JMapSelectionParams): JMapSelection

      /**
       * **JMap.Map.Selection.setLayerSelection**
       * 
       * Set the selection for a specific layer.
       * 
       * Cancel previous selection if exist, and replace by new selection
       * 
       * @throws Error if layer is not found or features format is not good
       * @param layerId The JMap layer id
       * @param features The new selection. This is what will be selected on the map
       * @example ```ts
       * 
       * // will select feature (id = 234) of layer 4 on the map
       * JMap.Map.Selection.setLayerSelection(4, {
       *  id: 234,
       *  type: "Point",
       *  geometry: {...},
       *  properties: [...]
       * })
       * 
       * // will select two features (id = 234 and 567) of layer 4 on the map
       * JMap.Map.Selection.setLayerSelection(4, [
       *   {
       *    id: 234,
       *    type: "Point",
       *    geometry: {...},
       *    properties: [...]
       *   },
       *   {
       *    id: 567,
       *    type: "Point",
       *    geometry: {...},
       *    properties: [...]
       *   }
       * ])
       * ```
       */
      function setLayerSelection(layerId: number, features: GeoJSON.Feature | GeoJSON.Feature[]): void

      /**
       * **JMap.Map.Selection.setLayersSelection**
       * 
       * Set the selection for multiple layers.
       * 
       * _For each layer:_
       * 
       * sets the selection of the specified layer with the new selection. Previous selection will be cleared.
       * 
       * @throws Error if any layer is not found for any of the ids, or if any of the layers is not a vector layer or if the params array is either not an array or an empty array
       * @param params an array of JSelectionSetLayersSelectionParams
       * @example ```ts
       * 
       * // set selection on layers id=5 and 6. Layer 6 selection will be emptied (empty array passed)
       * JMap.Map.Selection.setLayersSelection([
       *    {layerId: 5, selectability: [...features...]}, 
       *    {layerId: 6, selectability: []}
       * ])
       * 
       * ```
       */
      function setLayersSelection(params: JSelectionSetLayersSelectionParams[]): void

      /**
       * **JMap.Map.Selection.addFeaturesToLayerSelection**
       * 
       * Add to the current layer selection the provided feature(s).
       * 
       * Don't cancel previous selection, but add features to it.
       * 
       * @throws Error if layer is not found or features format is not good
       * @param layerId The JMap layer id
       * @param features The feature(s) that will be selected on the map
       * @example ```ts
       * 
       * // Add one feature (id = 234) to layer 4 selection
       * JMap.Map.Selection.addFeaturesToLayerSelection(4, {
       *  id: 234,
       *  type: "Point",
       *  geometry: {...},
       *  properties: [...]
       * })
       * 
       * // Add 2 features (id = 234 and 567) to layer 4 selection
       * JMap.Map.Selection.addFeaturesToLayerSelection(4, [
       *   {
       *    id: 234,
       *    type: "Point",
       *    geometry: {...},
       *    properties: [...]
       *   },
       *   {
       *    id: 567,
       *    type: "Point",
       *    geometry: {...},
       *    properties: [...]
       *   }
       * ])
       * ```
       */
      function addFeaturesToLayerSelection(layerId: number, features: GeoJSON.Feature | GeoJSON.Feature[]): void

      /**
       * **JMap.Map.Selection.removeFeaturesFromLayerSelection**
       * 
       * Remove from current layer selection the provided feature(s).
       * 
       * Don't cancel previous selection, just remove feature(s) from it.
       * 
       * @throws Error if layer is not found or feature id(s) format is not good
       * @param layerId The JMap layer id
       * @param featureIds The feature id(s) that will be remove from the layer selection
       * @example ```ts
       * 
       * // Remove one feature (id = "234") from layer 4 selection
       * JMap.Map.Selection.removeFeaturesFromLayerSelection(4, "234")
       * 
       * // Remove 2 features (id = "234" and "567") from layer 4 selection
       * JMap.Map.Selection.removeFeaturesFromLayerSelection(4, [ "234", "567" ])
       * ```
       */
      function removeFeaturesFromLayerSelection(layerId: number, featureIds: string | string[]): void

      /**
       * **JMap.Map.Selection.clearSelection**
       * 
       * Clear all selection.
       * 
       * If a layer id is provided, clear only the layer selection, else clear selection of all layers.
       * 
       * @throws Error if a layer id is provided but not found
       * @param layerId The JMap layer id
       * @example ```ts
       * 
       * // Clear selection of layer 4
       * JMap.Map.Selection.clearSelection(4)
       * 
       * // Clear selection of all layers
       * JMap.Map.Selection.clearSelection()
       * ```
       */
      function clearSelection(layerId?: number): void

      /**
       * **JMap.Map.Selection.clearLayersSelection**
       * 
       * Clear selection for all specified layers.
       * 
       * @throws Error if a layer id is provided but not found
       * @param layerIds The JMap layer ids passed as an array
       * @example ```ts
       * 
       * // Clear selection of layer 4, 5 and 6
       * JMap.Map.Selection.clearLayersSelection([4, 5, 6])
       * ```
       */
      function clearLayersSelection(layerIds: JId[]): void
    }

    namespace Basemap {
      /**
       * **JMap.Map.Basemap.getAllIds**
       * 
       * Returns the available basemap ids that can be used with method activateById.
       * 
       * Mapbox values are : "mapbox-light", "mapbox-streets", "mapbox-satellite", "mapbox-satellite-streets", "mapbox-dark", or "mapbox-outdoors"
       * 
       * OSM value is : "osm-standard"
       * 
       * @returns an array of string, the available basemap ids
       * @example ```ts
       * 
       * // returns an array of string containing all available basemap ids
       * JMap.Map.Basemap.getAllIds()
       * ```
       */
      function getAllIds(): string[]

      /**
       * ***JMap.Map.Basemap.isActive***
       * 
       * Returns true if a basemap is active on the map.
       * 
       * @example ```ts
       * 
       * JMap.Map.Basemap.activateById("streets")
       * 
       * // returns true
       * JMap.Map.Basemap.isActive()
       * 
       * JMap.Map.Basemap.deactivate()
       * 
       * // returns false
       * JMap.Map.Basemap.isActive()
       * ```
       */
      function isActive(): boolean

      /**
       * ***JMap.Map.Basemap.isMapboxId***
       * 
       * Returns true if the basemap id is a mapbox basemap.
       * 
       * @example ```ts
       * 
       * // returns true
       * JMap.Map.Basemap.isMapboxId("mapbox-streets")
       * 
       * // returns false
       * JMap.Map.Basemap.isMapboxId("my-custom-basemap")
       * ```
       */
      function isMapboxId(basemapId: string): boolean

      /**
       * ***JMap.Map.Basemap.isOSMId***
       * 
       * Returns true if the basemap id is an Open Street Map basemap.
       * 
       * @example ```ts
       * 
       * // returns true
       * JMap.Map.Basemap.isOSMId("osm-standard")
       * 
       * // returns false
       * JMap.Map.Basemap.isOSMId("mapbox-streets")
       * ```
       */
      function isOSMId(basemapId: string): boolean

      /**
       * ***JMap.Map.Basemap.getActiveId***
       * 
       * Returns the active basemap id, undefined is no basemap is activated.
       * 
       * @example ```ts
       * 
       * // returns the active basemap id, undefined is no basemap is activated
       * JMap.Map.Basemap.getActiveId()
       * ```
       */
      function getActiveId(): string | undefined
      
      /**
       * **JMap.Map.Basemap.activateById**
       * 
       * Apply the basemap on the map.
       * 
       * @throws Error if basemap not found for the given id
       * @param basemapId The basemap id, use JMap.Map.Basemap.getAllId() to get available basemap ids
       * @example ```ts
       * 
       * // Activate the basemap "streets"
       * JMap.Map.Basemap.activateById("streets")
       * 
       * // Deactivate current basemap
       * JMap.Map.Basemap.deactivate()
       * ```
       */
      function activateById(basemapId: string): void

      /**
       * **JMap.Map.Basemap.existsById**
       * 
       * Returs true if basemap exist for the given id.
       * 
       * @param basemapId The basemap id, use JMap.Map.Basemap.getAllId() to get available basemap ids
       * @example ```ts
       * 
       * // returns true if "streets" basemap exist
       * JMap.Map.Basemap.existsById("streets")
       * ```
       */
      function existsById(basemapId: string): boolean

      /**
       * **JMap.Map.Basemap.getById**
       * 
       * Returs the basemap descriptor for the given id.
       * 
       * @throws Error if basemap not found for the given id
       * @param basemapId The basemap id, use JMap.Map.Basemap.getAllId() to get available basemap ids
       * @example ```ts
       * 
       * // returns the "streets" basemap
       * JMap.Map.Basemap.getById("streets")
       * ```
       */
      function getById(basemapId: string): JBasemap

      /**
       * **JMap.Map.Basemap.deactivate**
       * 
       * Deactivate the current active basemap on the map.
       * 
       * Do nothing if no map is active.
       * 
       * @example ```ts
       * 
       * // Deactivate current basemap
       * JMap.Map.Basemap.deactivate()
       * ```
       */
      function deactivate(): void

      /**
       * **JMap.Map.Basemap.add**
       * 
       * Add a new basemap on the map.
       * 
       * You can find tile servers here : https://wiki.openstreetmap.org/wiki/Tile_servers
       * 
       * @throws if invalid parameters
       * @param basemap The basemap descriptor
       * @param activate if true create the basemap and activate it
       * @param beforeId if provided, add the basemap before the given id
       * @example ```ts
       * 
       * // add an osm basemap
       * JMap.Map.Basemap.add({
       *   id: "osm",
       *   label: "Open Street Map",
       *   tileUrls: [
       *     "https://a.tile.openstreetmap.org/{z}/{x}/{y}.png",
       *     "https://b.tile.openstreetmap.org/{z}/{x}/{y}.png",
       *     "https://c.tile.openstreetmap.org/{z}/{x}/{y}.png"
       *   ],
       *   previewImageAsUrlOrBase64: "https://searchengineland.com/figz/wp-content/seloads/2013/11/Screen-Shot-2013-11-22-at-3.41.27-PM.png",
       *   true // = activate the new basemap
       * })
       * 
       * // Add a quadkey (not x/y/z) basemap
       * JMap.Map.Basemap.add(
       *  {
       *    id: "My custom map",
       *    label: "My map",
       *    tileUrls: [
       *      "https://t.ssl.ak.dynamic.tiles.virtualearth.net/comp/ch/{quadkey}?mkt=fr-CA&it=G,LC,BX,RL&shading=hill&n=z&og=1226&cstl=vb&src=o"
       *    ],
       *    previewImageAsUrlOrBase64: "http://www.toxel.com/wp-content/uploads/2008/08/creativelogos11.jpg"
       *  },
       *  true // = activate the new basemap
       * )
       * ```
       */
      function add(basemap: JBasemap, activate?: boolean, beforeId?: string): void

      /**
       * **JMap.Map.Basemap.removeById**
       * 
       * Remove a basemap for a given id.
       * 
       * If id doesn't exist do nothing.
       * 
       * If the active basemap is removed, no basemap will be displayed anymore.
       * 
       * @throws if missing basemap parameter
       * @param basemapId the basemap id
       * @example ```ts
       * 
       * // Remove the "streets" basemap
       * JMap.Map.Basemap.removeById("streets")
       * ```
       */
      function removeById(basemapId: string): void

      /**
       * **JMap.Map.Basemap.removeByIds**
       * 
       * Remove basemaps for the given ids.
       * 
       * If an id doesn't exist it is ignored.
       * 
       * If the active basemap is removed, no basemap will be displayed anymore.
       * 
       * @param basemapId the basemap id
       * @example ```ts
       * 
       * // Remove two basemaps
       * JMap.Map.Basemap.removeByIds([ "streets", "lights" ])
       * ```
       */
      function removeByIds(basemapIds: string[]): void
    }
  }

  /**
   * **JMap.MouseOver**
   * 
   * JMap provide a mecanism that is called MouseOver.
   * 
   * We can defined from JMap Admin a mouseover for a layer.
   * 
   * The mouseover is written in HTML, enriched with JMap specific function that are interpretated.
   * 
   * When we click on layers that have a mouseover defined, JMap display
   * a popup on the map with the formatted content for each features.
   * 
   * This section provide methods permitting you to customize the mouseover.
   */
  namespace MouseOver {

    /**
     * **JMap.MouseOver.isPopupOpened**
     * 
     * Return true if the mouseover popup is visible on the map, else false.
     * 
     * @example ```ts
     * 
     * // return true if the mouseover popup is visible on the map
     * JMap.MouseOver.openPopup()
     * ```
     */
    function isPopupOpened(): boolean

    /**
     * **JMap.MouseOver.closePopup**
     * 
     * Close the mouseover popup if it's visible on the map, else do nothing.
     * 
     * @example ```ts
     * 
     * // close the mouseover popup if it's visible on the map.
     * JMap.MouseOver.closePopup()
     */
    function closePopup(): void
    
    
    /**
     * **JMap.MouseOver.openPopup**
     * 
     * Displays a given html content in a popup at a given location on the map
     * 
     * @example ```ts
     * 
     * // open a popup at location lon=45.5 & lat=-73.5, that display the message "This is an example"
     * JMap.MouseOver.openPopup({
     *  html: "<div style='margin-top: 1rem; background-color:#ff8888'>This is an example</div>",
     *  location: { y: 45.5, x:-73.5 }
     * })
     * ```
     */
    function openPopup(params: JMouseOverOpenPopupParams): void
  
    /**
     * **JMap.MouseOver.openPopupForSelection**
     * 
     * Displays a standard MouseOver popup, based on a selection of features. You can specify an optional location to display 
     * the popup on the map, as well as an option to specify if the map shoud pan to the popup's location
     * 
     * @throws Error if the user-defined location is invalid or if the pan-to option is not a boolean
     * @param params A JMouseOverOpenPopupForSelectionParams object
     * @example ```ts
     * 
     * // display a MouseOver popup using the current selection and a custom location
     * const currentSelection = JMap.Map.Selection.getSelectedFeatures()
     * const myLocation = {x:-73, y:46}
     * JMap.MouseOver.openPopupForSelection({ selection: currentSelection, location: myLocation, panToLocation: true })
     * ```
     */
    function openPopupForSelection(params: JMouseOverOpenPopupForSelectionParams): void
  
    /**
     * **JMap.MouseOver.renderForFeaturesAtLocation**
     * 
     * Get the feature selection at the location, and process the mouseover for it,
     * and render it inside the div of your choice.
     * 
     * It's like clicking on the map at a location, but instead of displaying on a popup,
     * you can render it on your own div.
     * 
     * @throws Error if div doesn't exist in the DOM, or location format is not good
     * @param containerId The div id where to display the mouseover content 
     * @param location The location on the map where you want to select features and display mouseover for
     * @return true if we displayed content in the div, false if no mouseover found for any layer
     * @example ```ts
     * 
     * // Display in the div id="my-custom-div" the content of mouseover
     * // if features has been found at the location x=34.44 and y=23.44
     * JMap.MouseOver.renderForFeaturesAtLocation("my-custom-div", { x: 34.44, y: 23.44 })
     * ```
     */
    function renderForFeaturesAtLocation(containerId: string, location: JLocation): boolean // returns true if has mouseover

    /**
     * **JMap.MouseOver.renderForFeaturesSelection**
     * 
     * From the feature selection you provide, it process the mouseover for it,
     * and render it inside the div of your choice.
     * 
     * @throws Error if div doesn't exist in the DOM, or selection format is not good
     * @param containerId The div id where to display the mouseover content 
     * @param selection A feature selection, the mouseover will be processed only for this features
     * @return true if we displayed content in the div, false if no mouseover found for any layer
     * @example ```ts
     * 
     * // Display in the div id="my-custom-div" the content of mouseover for the provided selection
     * JMap.MouseOver.renderForFeaturesSelection("my-custom-div", {
     *  4: [ // selection for layer 4
     *    { id: 345, type: "Point", geometry: {...}, properties: [...] },
     *    { id: 234, type: "Point", geometry: {...}, properties: [...] }
     *  ],
     *  8: [ // selection for layer 8
     *    { id: 187, type: "Line", geometry: {...}, properties: [...] },
     *    { id: 98, type: "Line", geometry: {...}, properties: [...] }
     *  ]
     * })
     * ```
     */
    function renderForFeaturesSelection(containerId: string, selection: JMapSelection): boolean

    /**
     * **JMap.MouseOver.getMouseOverContent**
     * 
     * Returns the mousever content for the provided feature selection. If no mouseover are defined
     * for any layer it returns undefined.
     * 
     * The result you get need first to be inserted in the DOM, then after the insertion,
     * you need to call the method processJSAndPhotosForContent()
     * (in order to finish displaying all informations)
     * 
     * You should not use this function, except for a very special need, instead you should use the
     * function JMap.MouseOver.renderForFeaturesSelection that do the same thing in one step.
     * 
     * @throws Error if selection format is not good
     * @param selection A feature selection, the mouseover will be processed only for this features
     * @return the mouseover content or undefined
     * @example ```ts
     * 
     * const mouseOverContent = JMap.MouseOver.getMouseOverContent({
     *  4: [ // selection for layer 4
     *    { id: 345, type: "Point", geometry: {...}, properties: [...] },
     *    { id: 234, type: "Point", geometry: {...}, properties: [...] }
     *  ],
     *  8: [ // selection for layer 8
     *    { id: 187, type: "Line", geometry: {...}, properties: [...] },
     *    { id: 98, type: "Line", geometry: {...}, properties: [...] }
     *  ]
     * })
     * 
     * const mouseOverDiv = document.getElementById("my-div-id")
     * if (mouseOverContent) {
     *  mouseOverDiv.innerHTML = mouseOverContent.html
     *  JMap.MouseOver.processJSAndPhotosForContent(mouseOverContent)
     * } else {
     *  // Emptying the div if no mouseover
     *  mouseOverDiv.innerHTML = ""
     * }
     * ```
     */
    function getMouseOverContent(selection: JMapSelection): JMouseOverContent | undefined

    /**
     * **JMap.MouseOver.processJSAndPhotosForContent**
     * 
     * Use this function only if you use JMap.MouseOver.getMouseOverContent function before.
     * 
     * You can call this function after having inserted the mouseover html in the DOM.
     * 
     * The function will eval the mouseover javascript (from the extension mouseover), and if needed make
     * a call to the server to get the features photos and display it (so we need the mouseover content to be 
     * exist in the DOM.
     * 
     * @throws Error if mouseover content format is not good
     * @param content The mouseover content you get from method JMap.MouseOver.getMouseOverContent
     * @example ```ts
     * 
     * const mouseOverContent = JMap.MouseOver.getMouseOverContent(...)
     * const mouseOverDiv = document.getElementById("my-div-id")
     * if (mouseOverContent) {
     *  mouseOverDiv.innerHTML = mouseOverContent.html
     *  JMap.MouseOver.processJSAndPhotosForContent(mouseOverContent)
     * } else {
     *  // Emptying the div if no mouseover
     *  mouseOverDiv.innerHTML = ""
     * }
     * ```
     */
    function processJSAndPhotosForContent(content: JMouseOverContent): void
  }
  /**
   * **JMap.Project**
   * 
   * From this section you can manage the project that is in use in the JMap NG Core library.
   */
  namespace Project {

    /**
     * **JMap.Project.getAllProjects**
     * 
     * Returns a promise that returns all JMap projects descriptors when resolved.
     * 
     * If no project is loaded, returns empty array.
     * 
     * @example ```ts
     * 
     * // This is asynchronous code, getAllProject return a promise that is
     * // resolved after the server returned all project data.
     * JMap.Project
     *    .getAllProjects()
     *    .then(projects => {
     *      // Here you can start using the projects
     *      console.log(`Projects count = "${projects.length}"`
     *    }))
     * ```
     */
    function getAllProjects(): Promise<JProject[]>

    /**
     * **JMap.Project.existsById**
     * 
     * Returns true if project exist for the given project id.
     * 
     * @param projectId The JMap project id
     * @example ```ts
     * 
     * // returns true if the project id = 2 exists, else false
     * JMap.Project.existsById(2)
     * ```
     */
    function existsById(projectId: number): boolean


    /**
     * **JMap.Project.existsByName**
     * 
     * Returns true if project exist for the given project name.
     * 
     * @param projectName The JMap project name
     * @example ```ts
     * 
     * // returns true if the project "My Project" exists, else false
     * JMap.Project.existsByName("My Project")
     * ```
     */
    function existsByName(projectName: string): boolean


    /**
     * **JMap.Project.getById**
     * 
     * Returns the project for the given project id.
     * 
     * @param projectId The JMap project id
     * @throws error if the project doesn't exists or if projectId is not a valid JMap Id.
     * @example ```ts
     * 
     * // Get Project id 2
     * const project = JMap.Project.getById(2)
     * console.log("Project '" + project.name + "' is loaded")
     * ```
     */
    function getById(projectId: number): JProject

    /**
     * **JMap.Project.getByName**
     * 
     * Returns the project for the given project name.
     * 
     * @param projectName The JMap project name
     * @throws error if the project doesn't exists or if projectName is not a string.
     * @example ```ts
     * 
     * // Get project "My Project"
     * const project = JMap.Project.getByName("My Project")
     * console.log("Project id '" + project.id + "' is loaded")
     * ```
     */
    function getByName(projectName: string): JProject

    /**
     * **JMap.Project.hasProjectActivated**
     * 
     * Returns true if a JMap project is active, that means a project is selected and displayed on the map.
     *
     * @example ```ts
     * 
     * // returns true if a project is active
     *  JMap.Project.hasProjectActivated()
     *  ```
     */
    function hasProjectActivated(): boolean

    /**
     * **JMap.Project.getActiveProject**
     * 
     * Returns the active project (the one displayed on the map).
     * 
     * If no project is active, the object returned has an id equals to -1.
     *
     * @example ```ts
     * 
     * // returns the active project
     * const activeProject = JMap.Project.getActiveProject()
     * if (activeProject.id === -1) {
     *   console.info("No active project")
     * } else {
     *   console.info(`Active project is "${activeProject.name}"`)
     * }
     *  ```
     */
    function getActiveProject(): JProject

    /**
     * **JMap.Project.getId**
     * 
     * Returns loaded JMap project id.
     * 
     * @throws If no project is loaded
     * @example ```ts
     * 
     * // returns the currently loaded project id
     * JMap.Project.getId()
     * ```
     */
    function getId(): number

    /**
     * **JMap.Project.getName**
     * 
     * Returns loaded JMap project name.
     * 
     * @throws If no project is loaded
     * @example ```ts
     * 
     * // returns the currently loaded project name
     * JMap.Project.getName()
     * ```
     */
    function getName(): string

    /**
     * **JMap.Project.getDefaultDistanceUnit**
     *
     * Returns the project distance unit, or "meters" if no distance unit is set on the project.
     *
     * @throws if no project is loaded
     * @example ```ts
     *
     * // return "meters", or "kilometers", or "miles", or "yards"...
     * JMap.Project.getDefaultDistanceUnit()
     * ```
     */
    function getDefaultDistanceUnit(): JDistanceUnit

    /**
     * **JMap.Project.getDescription**
     * 
     * Returns loaded JMap project description.
     * 
     * @throws If no project is loaded
     * @example ```ts
     * 
     * // returns the currently loaded project description
     * JMap.Project.getDescription()
     * ```
     */
    function getDescription(): string

    /**
     * **JMap.Project.getProjection**
     * 
     * Returns loaded JMap project projection.
     * 
     * In MapBox, projection is always "***EPSG:3857***", but that function returns the project
     * defined projection (so it can be different than ***ESPG:3857***).
     * 
     * @throws If no project is loaded
     * @example ```ts
     * 
     * // returns the project projection
     * JMap.Project.getProjection()
     * ```
     */
    function getProjection(): JProjection

    /**
     * **JMap.Project.getInitialRotation**
     * 
     * Returns loaded JMap project initial map rotation.
     * This rotation is the one applied when the project is opened.
     * 
     * @throws If no project is loaded
     * @example ```ts
     * 
     * // returns the project initial rotation
     * JMap.Project.getInitialRotation()
     * ```
     */
    function getInitialRotation(): number

    /**
     * **JMap.Project.getMinScale**
     * 
     * Returns loaded JMap project min scale.
     * 
     * @throws If no project is loaded
     * @example ```ts
     * 
     * // returns the project min scale
     * JMap.Project.getMinScale()
     * ```
    */
    function getMinScale(): number

    /**
     * **JMap.Project.getMaxScale**
     * 
     * Returns loaded JMap project max scale.
     * 
     * @throws If no project is loaded
     * @example ```ts
     * 
     * // returns the project max scale
     * JMap.Project.getMaxScale()
     * ```
     */
    function getMaxScale(): number

    /**
     * **JMap.Project.getSelectionColor**
     * 
     * Returns loaded JMap project selection color in html hexa format.
     * 
     * This is the color that is used for selected features of layers that
     * don't have a specific selection style defined.
     * 
     * @throws If no project is loaded
     * @example ```ts
     * 
     * // returns the project selection color as a html hexa color
     * JMap.Project.getSelectionColor()
     * ```
     */
    function getSelectionColor(): string

    /**
     * **JMap.Project.getBackgroundColor**
     * 
     * Returns loaded JMap project background color in html hexa format.
     * This color is used as the background of the map.
     *
     * @throws If no project is loaded
     * @example ```ts
     * 
     * // returns the project background color as a html hexa color
     * JMap.Project.getBackgroundColor()
     * ```
     */
    function getBackgroundColor(): string

    /**
     * **JMap.Project.getInitialExtent**
     * 
     * Returns loaded JMap project initial extent.
     * This is the extent that is automatically displayed when the project is opened.
     * 
     * @throws If no project is loaded
     * @example ```ts
     * 
     * // returns the project initial extent if exists
     * JMap.Project.getInitialExtent()
     * ```
     */
    function getInitialExtent(): JBounds | null

    /**
     * **JMap.Project.getBase64ImageThumbnail**
     * 
     * Returns loaded JMap project base64 image thumbnail.
     * 
     * When JMap NG Core lib is started, it doesn't load projects thumbnails, but you can load it
     * by setting the startup option "loadAllProjectThumbnails" as true.
     *
     * If no thumbnail has been loaded it returns an empty string.
     * 
     * @throws If no project is loaded
     * @example ```ts
     * 
     * // returns the project initial extent if exists
     * JMap.Project.getInitialExtent()
     * ```
     */
    function getBase64ImageThumbnail(): string

    /**
     * **JMap.Project.activateById**
     * 
     * Activate a project on the map, for a given project id.
     * 
     * User session rigths are checked server side and an error is thrown if user doesn't have the access right for the project.
     * 
     * @throws Error missing project id or if project is not found
     * @param projectId The JMap project id
     * @return a promise that is resolved when the project has been loaded successfully
     * @example ```ts
     * 
     * try {
     *   // activate project id=2
     *   const project = JMap.Project.activateById(2)
     *   console.info(`Project id=${project.id} has been activated.`, project)
     * } catch (error) {
     *   console.error(`Cannot activate the project : ${error}`)
     * }
     * ```
     */
    function activateById(projectId: number): JProject

    /**
     * **JMap.Project.activateByName**
     * 
     * Activate a project on the map, for a given project name.
     * 
     * User session rigths are checked server side and an error is thrown if user doesn't have the access right for the project.
     * 
     * @throws if missing project name or if project not found
     * @param projectIdOrName The JMap project name
     * @return the project
     * @example ```ts
     * 
     * try {
     *   // activate project name="My city"
     *   const project = JMap.Project.activateByName("My city")
     *   console.info(`Project id=${project.id} has been activated.`, project)
     * } catch (error) {
     *   console.error(`Cannot activate the project : ${error}`)
     * }
     * ```
     */
    function activateByName(projectName: string): JProject

    /**
     * **JMap.Project.deactivate**
     * 
     * Deactivate the current displayed project. The map is destroyed.
     * 
     * After calling this method :
     *  - In JMap Core : nothing is displayed on screen.
     *  - In JMap App : project list selection is displayed.
     *
     * @example ```ts
     * 
     * // deactivate the current project.
     * JMap.Project.deactivate()
     * ```
     */
    function deactivate(): void

    /**
     * **JMap.Project.loadAllProjectThumbnails**
     * 
     * Load all project thumbnails in the data store.
     * 
     * Default width is 348 and height 190.
     * 
     * Image is a base 64 formatted string.
     * 
     * @throws if params are not correct
     * @param params width (0 < width < 1280) and height (0 < height < 720) for the thumbnails
     * @example ```ts
     * 
     * // Will load all projects thumbnail images
     * JMap.Project
     *    .loadAllProjectThumbnails({
     *      width: 200,
     *      height: 200
     *    })
     *    .then(() => console.info("All project images has been loaded"))
     *    .catch(error => console.error("Cannot load project images"))
     * 
     * // Then you can get current project thumnail like that
     * const thumbnail = JMap.Project.getBase64ImageThumbnail()
     * 
     * // Or you can get the project id=3 thumbnail like this
     * const otherThumbnail = JMap.Project.getById(3).base64ImageThumbnail
     * ```
     */
    function loadAllProjectThumbnails(params?: JProjectLoadThumbnailsParams): Promise<void>

    /**
     * **JMap.Project.isChangeDisabled**
     * 
     * Returns true if the project change has been disabled by startup option "disableProjectChange" (see [[JCoreOptions]]).
     * 
     * Notice that as long the first project has not been loaded, this method returns false even if the parameter is true.
     * 
     * It becomes true, if option "disableProjectChange" is set to true, and a project has been activated.
     * 
     * @example ```ts
     * 
     * // We assert that :
     * //  - the option "disableProjectChange" is true
     * //  - no project is yet activated, no map is displayed.
     * 
     * // returns false
     * JMap.Project.isChangeDisabled()
     * 
     * // first time a project is activated
     * JMap.Project.activateByName("My project")
     * 
     * // returns true
     * JMap.Project.isChangeDisabled()
     * ```
     */
    function isChangeDisabled(): boolean

    /**
     * **JMap.Project.setChangeEnabled**
     * 
     * Enables project change.
     * 
     * Can be used in a project extention for instance, to override the behaviour of this parameter inherited from startup options for the current user session.
     * 
     * @example ```ts
     * 
     * // enable project change
     * if(JMap.Project.isChangeDisabled()){
     *    JMap.Project.setChangeEnabled()
     * }
     * ```
     */
    function setChangeEnabled(): void

    /**
     * **JMap.Project.setChangeDisabled**
     * 
     * Disables project change.
     * 
     * Can be used in a project extention for instance, to override the behaviour of this parameter inherited from startup options for the current user session.
     * 
     * @example ```ts
     * 
     * // disable project change
     * if(!JMap.Project.isChangeDisabled()){
     *    JMap.Project.setChangeDisabled()
     * }
     * ```
     */
    function setChangeDisabled(): void
  }

  /**
   * **JMap.User**
   * 
   * From this section you can manage the user session.
   */
  namespace User {

    /**
     * ***JMap.User.getToken***
     * 
     * If user is logged in, returns the current user session token.
     * 
     * Else returns "-1" if user has no active session.
     * 
     * @example ```ts
     * 
     * // returns the user session token
     * JMap.User.getToken()
     * ```
     */
    function getToken(): string

    /**
     * ***JMap.User.getFullName***
     * 
     * Returns user full name.
     * 
     * @example ```ts
     * 
     * // returns the user full name, ex : "John Do"
     * JMap.User.getFullName()
     * ```
     */
    function getFullName(): string

    /**
     * ***JMap.User.getUsername***
     * 
     * Returns the username (the one used to login).
     * 
     * @example ```ts
     * 
     * // returns the username
     * JMap.User.getUsername()
     * ```
     */
    function getUsername(): string

    /**
     * **JMap.User.getPreference**
     * 
     * Get a user preference value from user storage. The returned Promise resolves to the value, else null if no preference has been set. 
     * Rejects on error, or if name parameter is not string or empty string, or if no user is logged in
     * 
     * @param name the name of the preference
     * @returns a Promise that resolves with the value from the user storage (or null if the preference is not set).
     * @example ```ts
     * 
     * let prefName = "jmap-core-basemap"
     * JMap.User
     *      .getPreference(prefName)
     *      .then(preferenceValue=>{
     *        console.log(`Preference item "${prefName}" value is "${preferenceValue}"`) 
     *      }).catch(reason=>{
     *        console.log(`Cannot get the preference value of param "${prefName}". Reason: ${reason}`) 
     *      })
     * 
     * ```
     */
    function getPreference(name: string): Promise<string | null>

    /**
     * **JMap.User.hasPreference**
     * 
     * Check for a user preference existence. The returned Promise resolves with true if a value has been set for the user preference, else false. 
     * Rejects on error, or if name parameter is not string or empty string, or if no user is logged in
     * 
     * @returns a Promise that resolves with true if a value has been set for the user preference, else false
     * @param name the name of the preference
     * @example ```ts
     * 
     * let prefName = "jmap-core-basemap"
     * JMap.User
     *      .hasPreference(prefName)
     *      .then(hasPreferenceValue=>{
     *        console.log(`Preference item "${prefName}" exists: ${hasPreferenceValue.toString()}`) 
     *      })
     * 
     * ```
     */
    function hasPreference(name: string): Promise<boolean>

    /**
     * **JMap.User.removePreference**
     * 
     * Remove a user preference from user storage. The returned Promise resolves with the value of the removed preference, or null if the preference does not exist.
     * 
     * Rejects on error, or if name parameter is not string or empty string, or if no user is logged in
     * 
     * @returns a Promise that removes the user preference, and resolves with the value of the removed preference, or null if the preference does not exist
     * @param name the name of the preference
     * 
     * let prefName = "jmap-core-basemap"
     * JMap.User
     *      .removePreference(prefName)
     *      .then(removedPreferenceValue=>{
     *        if(removedPreferenceValue === null){
     *          console.log(`Preference item "${prefName}" did not exist or was not removed`) 
     *        }else{
     *          console.log(`Preference item "${prefName}" has been removed. Value was: ${removedPreferenceValue}`) 
     *        }
     *      })
     * 
     * ```
     */
    function removePreference(name: string): Promise<string | null>

    /**
     * **JMap.User.setPreference**
     * 
     * Set a user preference in user storage. The returned Promise resolves without value on success.
     * Rejects with a reason on error, or if name parameter is not string or empty string, or if no user is logged in
     * If passed value is undefined, the preference is removed
     * 
     * @returns a Promise that sets the user preference, and resolves with no value, or rejects with a reason
     * @param name the name of the preference
     * @param value the value that will be associated to the name
     * 
     * @example ```ts
     * 
     * let prefName = "jmap-core-basemap"
     * 
     * // Set the value "light" for user preference "jmap-core-basemap"
     * JMap.User
     *      .setPreference(prefName, "light")
     *      .then(preferenceValue=>{
     *        console.log(`Preference item "${prefName}" has been set`) 
     *      }).catch(reason=>{
     *        console.log(`Cannot set the preference value of param "${prefName}". Reason: ${reason}`) 
     *      })
     * 
     * // Remove the value for user preference "theme"
     * JMap.User
     *      .removePreference(prefName)
     *      .then(preferenceValue=>{
     *        console.log(`Preference item "${prefName}" has been removed, and its value were "${preferenceValue}""`) 
     *      }).catch(reason=>{
     *        console.log(`Cannot remove the preference "${prefName}". Reason: ${reason}`) 
     *      })
     * 
     * ```
     */
    function setPreference(name: string, value: string | undefined): Promise<void>

    /**
     * **JMap.User.login**
     * 
     * The login function, returns a promise. Make a call to the server and if
     * login is successful resolve the promise providing the user session data.
     * 
     * If an error occurs, 3 differents string message can be returned :
     *   - ***"user.login.error.credential"*** => Bad username or password
     *   - ***"user.login.error.server"*** => Unexpected error while requesting the server
     *   - ***"user.login.error.unexpected"*** => Unexpected error client side
     * 
     * @throws Error if bad credentials or server error.
     * @param session The user session data
     * @example ```ts
     * 
     * const userLogin = "jdo@mycompany.com"
     * const userPassword = "xxx"
     * 
     * // Open a new user session, and get back user data from server
     * JMap.User
     *    .login(userLogin, userPassword)
     *    .then(sessionData => {
     *      console.log(`User ${userLogin} has been authenticated, his session token is "${sessionData.token}"`)
     *    })
     *    .catch(errorKey => {
     *      console.error(`Cannot loggin ${userLogin}, errorKey="${errorKey}"`, error)
     *    })
     * ```
     */
    function login(login: string, password: string): Promise<JSessionData>

    /**
     * **JMap.User.loginWithIdentityProvider**
     * 
     * Logs in the user using the specified Identity Provider. See [[JMap.Server.getAllIdentityProvidersById]] for info about Identity providers
     * 
     * @example ```ts
     * 
     * // fetch all Identity Providers
     * const allProviders = JMap.Server.getAllIdentityProvidersById()
     * // {idp-1: {id: "idp-1", type: "sso", ..... }}
     * 
     * // Open a new user session using the first provider received
     * JMap.User.loginWithIdentityProvider("idp-1")
     * // will redirect the browser to the identity provider for authentication
     * ```
     * @param providerId the JServerIdentityProvider id
     */
    function loginWithIdentityProvider(providerId: string): void

    /**
     * **JMap.User.logout**
     * 
     * Logout function. Make a call to the server to invalidate the session id.
     * 
     * If an error occurs, 2 differents string message can be returned :
     *   - ***"user.logout.error.server"*** => Unexpected error while requesting the server
     *   - ***"user.logout.error.unexpected"*** => Unexpected error client side
     * 
     * @example ```ts
     * 
     * // Close the user session client and server side
     * JMap.User
     *    .logout()
     *    .then(() => {
     *      console.log(`User has been logout`)
     *    })
     * ```
     */
    function logout(): Promise<void>

    /**
     * ***JMap.User.isLoggedIn***
     * 
     * Returns true if a user is logged in.
     * 
     * @example ```ts
     * 
     * // returns true if a user is logged in
     * JMap.User.isLoggedIn()
     * ```
     */
    function isLoggedIn(): boolean

    /**
     * **JMap.User.setToken**
     * 
     * Set the user session data. Usefull if you have made a call to our Rest API and get by yourself
     * the session token.
     * 
     * @param session The user session token
     * @example ```ts
     * 
     * To get a JMap session token, you can use the JMap Rest API on your JMap Server. By exemple if your server url is "https://my-jmap-server/", With the [curl tool](https://curl.haxx.se/docs/) you can get for the user "jdo@company.com" his token like that (adapt the username and password ...) :
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
     *     "sessionId": 23558109, // session id in the Rest API response is the session token.
     *     ...
     *   }
     * }
     * ```
     * 
     * // Set the user session token
     * JMap.User.setToken("23558109")
     *  .then(userData => {
     *    console.log(`Session token = "${userData.token}""`)
     *    console.log(`The session belongs to ${userData.user.fullName}`)
     *  })
     *  .then(error => {
     *    if (error === "user.token.invalid") {
     *      console.log(`Invalid token`)
     *    } else {
     *      console.log(`Server error`)
     *    }
     *  })
     * ```
     */
    function setToken(token: string): Promise<JSessionData>

    /**
     * ***JMap.User.getAllInfos***
     * 
     * Returns all user informations. It is possible to add custom user information, available in the redux store and displayed in the user panel.
     * 
     * This function returns all custom informations.
     * 
     * @example ```ts
     * 
     * // return all user infos
     * JMap.User.getAllInfos()
     * ```
     */
    function getAllInfos(): JUserInfo[]

    /**
     * ***JMap.User.addInfo***
     * 
     * Add a custom user info, stored in the redux store (JMap Core), and displayed in the user panel (JMap App).
     * 
     * @param info The user info
     * @throws if info is not an object, if an attribute is missing or invalid type, if "id" already exists
     * @example ```ts
     * 
     * // add a user information
     * JMap.User.addInfo({
     *  id: "role",
     *  label: "Role",
     *  value: "Inspector"
     * })
     * ```
     */
    function addInfo(info: JUserInfo): void

    /**
     * ***JMap.User.removeInfo***
     * 
     * Remove a user info, from the redux store (JMap Core) and in the user panel (JMap App).
     * 
     * @param infoId The user info id
     * @example ```ts
     * 
     * // remove the user information "role"
     * JMap.User.removeInfo("role")
     * ```
     */
    function removeInfo(infoId: string): void
  }

  /**
   * **JMap.Language**
   * 
   * From this section you can manage the locale and translations used in JMap NG.
   */
  namespace Language {

    /**
     * **JMap.Language.getLocales**
     * 
     * Get the list of all available locales as an array of string.
     * 
     * @example ```ts
     * 
     * JMap.Language.getLocales()
     * // ["fr", "en", ......]
     * ```
     */
    function getLocales(): JLocale[]

    /**
     * **JMap.Language.getLocale**
     * 
     * Get the current locale.
     * 
     * @example ```ts
     * 
     * // return the current locale
     * JMap.Language.getLocale()
     * // ex: "fr"
     * ```
     */
    function getLocale(): JLocale

    /**
     * **JMap.Language.getDateFnsLocale**
     * 
     * Get the current locale as a "dateFns" locale.
     * 
     * @example ```ts
     * 
     * // return the current dateFns locale
     * JMap.Language.getDateFnsLocale()
     * ```
     */
    function getDateFnsLocale(): any

    /**
     * **JMap.Language.getDefaultLocale**
     * 
     * Get the default locale used by JMap NG. This locale can be used when a translation is not available in the current locale, for instance.
     * 
     * @example ```ts
     * 
     * // return the default locale
     * JMap.Language.getDefaultLocale()
     * // "en"
     * ```
     */
    function getDefaultLocale(): JLocale

    /**
     * **JMap.Language.setLocale**
     * 
     * Sets the current locale. JMap NG will automatically reload.

     * @throws if locale is invalid
     * @param locale the new locale to use
     * 
     * @example ```ts
     * 
     * // Supported locales can be retrieved by calling [[JMap.Language.getLocales()]]
     * const locale = "fr"
     * JMap.Language.setLocale(locale)
     * ```
     */
    function setLocale(locale: JLocale): void

    /**
     * **JMap.Language.addBundle**
     * 
     * This method lets you add your own translations into JMap NG translation engine (for instance, all translations needed for one of your extensions)
     * 
     * Once added, a bundle cannot be overriden, and its identity must be unique (its id). You can specify a default locale for your bundle, in wich case
     * the JMap NG translation engine will fall back to your bundle's default locale instead of on the system's default locale if a translation is not found 
     * in your bundle for the current locale.
     * 
     * @throws if bundle is invalid or already defined
     * @param bundle a [[JTranslationBundle]] object
     * 
     * @example ```ts
     * 
     * // Supported locales can be retrieved by calling [[JMap.Language.getLocales()]]
     * 
     * const bundle = {
     *  id: "my-custom-bundle-id",
     *  defaultLocale: "fr",
     *  translationsByLocale: {
     *    "fr" : {
     *      "my-custom-key": "Ceci est ma traduction personnalisée en français"
     *    },
     *    "en" : {
     *      "my-custom-key": "This is my custom translation in English"
     *    }
     *  }
     * }
     * JMap.Language.addBundle(bundle)
     * JMap.Language.setLocale("fr")
     * let params = {key: "my-custom-key", bundleId: "my-custom-bundle-id"}
     * console.log(JMap.Language.translate(params))
     * // "Ceci est ma traduction personnalisée en français"
     * ```
     */
    function addBundle(bundle: JTranslationBundle): void

    /**
     * **JMap.Language.bundleExitsById**
     * 
     * Returns true if the bundle exists in the JMap NG translation engine, false otherwise
     * 
     * @param bundleId 
     */
    function bundleExitsById(bundleId: string): boolean

    /**
     * **JMap.Language.getBundleById**
     * 
     * Returns the translation bundle identified by the id
     * 
     * @throws if bundle id is not correct or if bundle not found
     * @param bundleId the id of the bundle to retrieve
     * 
     * @example ```ts
     * 
     * JMap.Language.getBundleById("my-custom-bundle")
     * // {id: "my-custom-bundle", defaultLocale: "fr",   ...}
     * ```
     */
    function getBundleById(bundleId: string): JTranslationBundle

    /**
     * **JMap.Language.getAllBundleIds**
     * 
     * Returns the list of bundle ids used by the JMap NG translation engine
     * 
     * @example ```ts
     * 
     * JMap.Language.getAllBundleIds()
     * // ["jmap-core-js", "jmap-app-js", "my-custom-bundle", ...]
     * ```
     */
    function getAllBundleIds(): string[]

    /**
     * **JMap.Language.getBundles**
     * 
     * Returns an bbject of all the translation bundles loaded in JMap NG at the moment of the call, indexed by id
     * 
     * @example ```ts
     * 
     * JMap.Language.getBundles()
     * // { "my-custom-bundle": {id: "my-custom-bundle", defaultLocale: "fr",   ...}, ....}
     * ```
     */
    function getBundles(): JTranslationBundleById
  
    /**
     * **JMap.Language.translate**
     * 
     * Returns a translated string from the speficied bundle, for the current local, or for a specified locale.
     * 
     * Parameters are supported, and must be passed as an array (or a single param) which must have the same length as the number of
     * parameters in the translated string. Parameters must be identified by numbers starting at zero, corresponding
     * to the index of the param in the array supplied
     * 
     * @param params a JTranslateParams object
     * 
     * @example ```ts
     * 
     * // Supported locales can be retrieved by calling [[JMap.Language.getLocales()]]
     * 
     * const bundle = {
     *  id: "my-custom-bundle-id",
     *  defaultLocale: "fr",
     *  translationsByLocale: {
     *    "fr" : {
     *      "my-custom-key": "Je parles {0} langues"
     *    },
     *    "en" : {
     *      "my-custom-key": "I speak {0} languages"
     *    }
     *  }
     * }
     * JMap.Language.addBundle(bundle)
     * JMap.Language.setLocale("fr")
     * let params = {key: "my-custom-key", bundleId: "my-custom-bundle-id", params: ["2"] }
     * console.log(JMap.Language.translate(params))
     * // "Je parles 2 langues"
     * params = {key: "my-custom-key", bundleId: "my-custom-bundle-id", params: ["2"], locale: "en" } 
     * console.log(JMap.Language.translate(params))
     * // "I speak 2 languages"
     * 
     * ```
     */
    function translate(params: JTranslateParams): string

    /**
     * **JMap.Language.is12HoursTimeFormat**
     * 
     * Returns true if the current locale has a AM/PM setting for time format (08:00 PM), as opposed to a 24 hours format (20:00)
     * 
     * @example ```ts
     * 
     * // return the default locale
     * JMap.Language.setLocale("fr")
     * console.log(JMap.Language.is12HoursTimeFormat())
     * // false
     * ```
     */
    function is12HoursTimeFormat(): boolean
    
    /**
     * **JMap.Language.isValidLocale**
     * 
     * returns true is the passed locale is supported by JMap NG, false otherwise
     * 
     * @param locale the locale to be tested
     * 
     * @example ```ts
     * 
     * console.log(JMap.Language.isValidLocale("fr"))
     * // true
     * console.log(JMap.Language.isValidLocale("ch"))
     * // false
     * ```
     */
    function isValidLocale(locale: JLocale):boolean
    
    /**
     * **JMap.Language.getDateFormat**
     * 
     * returns the date format associated with the current locale
     * 
     * @example ```ts
     * 
     * // return the default locale
     * JMap.Language.setLocale("fr")
     * console.log(JMap.Language.getDateFormat())
     * // "DD/MM/YYYY"
     * JMap.Language.setLocale("en")
     * console.log(JMap.Language.getDateFormat())
     * // "MM/DD/YYYY"
     * ```
     */
    function getDateFormat(): string

    /**
     * **JMap.Language.getDateFnsDateFormat**
     * 
     * returns the date format associated with the current locale (specific to the date-fns JS library)
     * 
     * @example ```ts
     * 
     * // return the default locale
     * JMap.Language.setLocale("fr")
     * console.log(JMap.Language.getDateFnsDateFormat())
     * // "dd/MM/yyyy"
     * JMap.Language.setLocale("en")
     * console.log(JMap.Language.getDateFnsDateFormat())
     * // "MM/dd/yyyy"
     * ```
     */
    function getDateFnsDateFormat(): string
  }

  /**
   * **JMap.Query**
   * 
   * A feature query mecanism has been set in JMap to get filtered features.
   * 
   * By example we can get all features that have an attribute equals to a given value.
   * 
   * A query concerns a single layer, and it set a data form that will be filled by users to make a search.
   * 
   * For a given project, a JMap administrator can create query groups and put inside
   * all queries he wants, not depending on a particular layers.
   * 
   * You can get queries definitions (including the form definition) and process a query from this section.
   */
  namespace Query {

    /**
     * ***JMap.Query.getAllGroups***
     * 
     * Returns all query groups defined by JMap administrator.
     * 
     * @example ```ts
     * 
     * // returns all query groups defined by JMap administrator
     * JMap.Query.getAllGroups()
     * ```
     */
    function getAllGroups(): JQueryGroup[]

    /**
     * ***JMap.Query.groupExist***
     * 
     * Returns true if group exists, else false, for the given group id.
     * 
     * @throws if group id is not correct (invalid format or no resource exists)
     * @param groupId The JMap query group id
     * @example ```ts
     * 
     * // returns true if group exists
     * JMap.Query.groupExist(21)
     * ```
     */
    function groupExist(groupId: number): boolean

    /**
     * ***JMap.Query.queryExist***
     * 
     * Returns true if the query exists for a given query group and a given query id.
     * 
     * @param groupId The JMap query group id
     * @param queryId The JMap query id
     * @example ```ts
     * 
     * // returns true if query id=5 of group id=10 exists
     * JMap.Query.queryExist(10, 5)
     * ```
     */
    function queryExist(groupId: number, queryId: string): boolean

    /**
     * ***JMap.Query.getQueriesByLayerId***
     * 
     * Returns all queries defined for a given layer id.
     * 
     * @param layerId The JMap layer id
     * @throws if layer id is not correct (invalid format or no resource exists)
     * @example ```ts
     * 
     * // returns all queries of layer id=12
     * JMap.Query.getQueriesByLayerId(12)
     * ```
     */
    function getQueriesByLayerId(layerId: number): JQuery[]

    /**
     * ***JMap.Query.getQueryByLayerId***
     * 
     * Returns a query for a given query id, and a given layer id.
     * 
     * @throws if layer or query ids are not correct (invalid format or no resource exists)
     * @param layerId The JMap layer id
     * @param queryId The JMap query id
     * @example ```ts
     * 
     * // returns query id=3 of layer id=12
     * JMap.Query.getQueryByLayerId(12, 3)
     * ```
     */
    function getQueryByLayerId(layerId: number, queryId: string): JQuery

    /**
     * ***JMap.Query.getQueriesByGroupId***
     * 
     * Returns all queries for a given query group id.
     * 
     * @throws if group id is not correct (invalid format or no resource exists)
     * @param groupId The JMap query group id
     * @example ```ts
     * 
     * // returns all queries of group id=10
     * JMap.Query.getQueriesByGroupId(10)
     * ```
     */
    function getQueriesByGroupId(groupId: number): JQuery[]

    /**
     * ***JMap.Query.getQueryByGroupId***
     * 
     * Returns the query for a given query group and a given query id.
     * 
     * @throws if group or query ids are not correct (invalid format or no resource exists)
     * @param groupId The JMap query group id
     * @param queryId The JMap query id
     * @example ```ts
     * 
     * // returns the query id=5 of group id=10
     * JMap.Query.getQueryByGroupId(10, 5)
     * ```
     */
    function getQueryByGroupId(groupId: number, queryId: string): JQuery

    /**
     * ***JMap.Query.fetchFeatures***
     * 
     * Process a query request to the JMap server, for given layer and query ids, and provided form data
     * 
     * @throws if group or query ids are not correct (invalid format or no resource exists)
     * @param layerId The JMap layer id
     * @param queryId The JMap query id
     * @param data The form data (values mapping the query form definition)
     * @example ```ts
     * 
     * // returns a promise that when resolved returns the result of the search,
     * // an array of features, for layer id=3 and query id=5.
     * JMap.Query
     *   .fetchFeatures(3, 5, {
     *    "$PARAM1": "test",
     *    "$PARAM2": 35
     *   })
     *   .then(features => console.info(`Found ${features.length} features.`))
     *   .catch(error => console.error("Error while processing query request.", error))
     * ```
     */
    function fetchFeatures(layerId: number, queryId: string, data: any): Promise<any[]> // features
  }

  /**
   * **JMap.Event**
   * 
   * From this section you can manage your own event listeners reacting to JMap NG Core library events.
   * 
   * For all your listener you need provide a listener id. We introduced this notion of listener ids in order
   * to be able to know what's the problem if something goes wrong in a listener.
   * 
   * Like that we are able to identify more easily the problem in the javascript console.
   * 
   * Listener ids have to be unique for the namespace, regardless to the type of event you register your listener.
   * 
   * By example, for all Layer events, you can register only one listener named "***my-custom-listener***"".
   * 
   * A good practice could be prefixing all your listener ids. For example if you work for the city of Montreal
   * they could all start with "***mtm-***"".
   * 
   * Listeners can be deactivated and reactivated.
   * 
   * Deactivating a listener keep it in the JMap NG Core library, but ignore it when an event is emitted.
   */
  namespace Event {

    /**
     * ***JMap.Event.Main***
     * 
     * Here you can manage all JMap NG Core high level event listeners.
     * 
     * Click to see all events available: ***[[JMap.Event.Main.on]]***. 
     */
    namespace Main {

      /**
       * ***JMap.Event.Main.on***
       * 
       * Here you have all JMap NG Core high level available events on which you can attach a listener.
       */
      namespace on {

        /**
         * ***JMap.Event.Main.on.coreReady***
         * 
         * This event is triggered once: 
         * * the jmap-core library is loaded, 
         * * the redux store and its reducers are also loaded,
         * * The initial session validation has been run. At thas point if the session has successfully been validated, the logged-in user will also be available
         * 
         * 
         * @param listenerId Your listener id (must be unique)
         * @param fn Your listener function
         * @example ```ts
         * 
         * // log a message in the console once the core library is loaded
         * JMap.Event.Main.on.coreReady(
         *   "custom-core-ready", 
         *   () => {
         *     if (JMap.User.getToken() !== "-1") {
         *       console.log(`Logged in username is: "${JMap.User.getUsername()}"`)
         *     } else {
         *       console.log(`No user logged in`)
         *     }
         *   }
         * )
         * ```
         */
        function coreReady(listenerId: string, fn: () => void): void
      }

      /**
       * ***JMap.Event.Main.activate***
       * 
       * Activate the listener.
       * 
       * If the listener is already active, do nothing.
       * 
       * If the listener is inactive, it will be reactivated and will be called again ...
       * 
       * @param listenerId The listener id
       * @example ```ts
       * 
       * // activate the listener "my-main-listener"
       * JMap.Event.Main.activate("my-main-listener")
       * ```
       */
      function activate(listenerId: string): void

      /**
       * ***JMap.Event.Main.deactivate***
       * 
       * Deactivate the listener.
       * 
       * If the listener id doesn't exists or if the listener is already inactive, do nothing.
       * 
       * If the listener is active, it will be deactivated and will be ignored ...
       * 
       * @param listenerId The listener id
       * @example ```ts
       * 
       * // deactivate the listener "my-main-listener"
       * JMap.Event.Main.deactivate("my-main-listener")
       * ```
       */
      function deactivate(listenerId: string): void

      /**
       * ***JMap.Event.Main.remove***
       * 
       * Remove the listener.
       * 
       * If the listener doesn't exist, do nothing.
       * 
       * Remove the listener from JMap NG Core library. The listener is deleted and never called again after that.
       * 
       * @param listenerId The listener id
       * @example ```ts
       * 
       * // remove the listener "my-main-listener"
       * JMap.Event.Main.remove("my-main-listener")
       * ```
       */
      function remove(listenerId: string): void
    }

    /**
     * ***JMap.Event.Extension***
     * 
     * Here you can manage all extension event listeners.
     * 
     * List of events are located in ***[[JMap.Event.Extension.on]]***. 
     */
    namespace Extension {

      /**
       * ***JMap.Event.Extension.on***
       * 
       * Here you have all available high level events on which you can attach a listener.
       */
      namespace on {

        /**
         * ***JMap.Event.Extension.on.registration***
         * 
         * This event is triggered when an extension is registered.
         * 
         * @param listenerId Your listener id (must be unique)
         * @param fn Your listener function
         * @example ```ts
         * 
         * // log a message in the console each time an extension has been registered
         * JMap.Event.Extension.on.registration(
         *   "custom-core-extension-registration", 
         *   params => console.log(`Extension id="${params.extensionId}" has been registered`)
         * )
         * ```
         */
        function registration(listenerId: string, fn: (params: JExtensionEventParams) => void): void

        /**
         * ***JMap.Event.Extension.on.beforeUnregistration***
         * 
         * This event is triggered just before an extension will be unregistered.
         * 
         * @param listenerId Your listener id (must be unique)
         * @param fn Your listener function
         * @example ```ts
         * 
         * // log a message in the console each time an extension will be unregistered
         * JMap.Event.Extension.on.beforeUnregistration(
         *   "custom-core-extension-beforeUnregistration", 
         *   params => console.log(`Extension id="${params.extensionId}" will be unregistered`)
         * )
         * ```
         */
        function beforeUnregistration(listenerId: string, fn: (params: JExtensionEventParams) => void): void

        /**
         * ***JMap.Event.Extension.on.unregistration***
         * 
         * This event is triggered when an extension is unregistered.
         * 
         * @param listenerId Your listener id (must be unique)
         * @param fn Your listener function
         * @example ```ts
         * 
         * // log a message in the console each time an extension has been unregistered
         * JMap.Event.Extension.on.unregistration(
         *   "custom-core-extension-unregistration", 
         *   params => console.log(`Extension id="${params.extensionId}" has been unregistered`)
         * )
         * ```
         */
        function unregistration(listenerId: string, fn: (params: JExtensionEventParams) => void): void
      }

      /**
       * ***JMap.Event.Extension.activate***
       * 
       * Activate the listener.
       * 
       * If the listener is already active, do nothing.
       * 
       * If the listener is inactive, it will be reactivated and will be called again ...
       * 
       * @param listenerId The listener id
       * @example ```ts
       * 
       * // activate the listener "my-extension-listener"
       * JMap.Event.Extension.activate("my-extension-listener")
       * ```
       */
      function activate(listenerId: string): void

      /**
       * ***JMap.Event.Extension.deactivate***
       * 
       * Deactivate the listener.
       * 
       * If the listener id doesn't exists or if the listener is already inactive, do nothing.
       * 
       * If the listener is active, it will be deactivated and will be ignored ...
       * 
       * @param listenerId The listener id
       * @example ```ts
       * 
       * // deactivate the listener "my-extension-listener"
       * JMap.Event.Extension.deactivate("my-extension-listener")
       * ```
       */
      function deactivate(listenerId: string): void

      /**
       * ***JMap.Event.Extension.remove***
       * 
       * Remove the listener.
       * 
       * If the listener doesn't exist, do nothing.
       * 
       * Remove the listener from JMap NG Core library. The listener is deleted and never called again after that.
       * 
       * @param listenerId The listener id
       * @example ```ts
       * 
       * // remove the listener "my-extension-listener"
       * JMap.Event.Extension.remove("my-extension-listener")
       * ```
       */
      function remove(listenerId: string): void
    }

    /**
     * ***JMap.Event.Form***
     * 
     * Here you can manage all form event listeners.
     * 
     * Click to see all events available: ***[[JMap.Event.Form.on]]***. 
     */
    namespace Form {

      /**
       * ***JMap.Event.Form.on***
       * 
       * Here you have all available high level events on which you can attach a listener.
       */
      namespace on {

        /**
         * ***JMap.Event.Form.on.submit***
         * 
         * This event is triggered each time a form (or subform) is submitted.
         * 
         * @param listenerId Your listener id (must be unique)
         * @param fn Your listener function
         * @example ```ts
         * 
         * // log a message in the console once a form has been submitted
         * JMap.Event.Form.on.submit(
         *   "custom-form-submit", 
         *   params => console.info(`A form has been submitted`, params)
         * )
         * ```
         */
        function submit(listenerId: string, fn: (params: JFormSubmitEventParams) => void): void

        /**
         * ***JMap.Event.Form.on.deleteElements***
         * 
         * This event is triggered each time we delete elements in a form.
         * 
         * @param listenerId Your listener id (must be unique)
         * @param fn Your listener function
         * @example ```ts
         * 
         * // log a message in the console each time element(s) has/have been deleted in a form
         * JMap.Event.Form.on.deleteElements(
         *   "custom-form-delete-element", 
         *   params => console.info(`Element(s) in a form has/have been deleted`, params)
         * )
         * ```
         */
        function deleteElements(listenerId: string, fn: (params: JFormDeleteEventParams) => void): void
      }

      /**
       * ***JMap.Event.Form.activate***
       * 
       * Activate the listener.
       * 
       * If listener was already activated, do nothing.
       * 
       * If the listener was deactivated, it state is turn to activate and it will be called again
       * when en event is emitted.
       * 
       * @param listenerId The listener id
       * @example ```ts
       * 
       * // activate the listener "my-form-listener"
       * JMap.Event.Form.activate("my-form-listener")
       * ```
       */
      function activate(listenerId: string): void

      /**
       * ***JMap.Event.Form.deactivate***
       * 
       * Deactivate the listener.
       * 
       * If listener id doesn't exist or is already deactivated, do nothing.
       * 
       * If the listener was active, it state is turn to deactivate, and it will be ignore
       * when en event is emitted.
       * 
       * @param listenerId The listener id
       * @example ```ts
       * 
       * // deactivate the listener "my-form-listener"
       * JMap.Event.Form.deactivate("my-form-listener")
       * ```
       */
      function deactivate(listenerId: string): void

      /**
       * ***JMap.Event.Form.remove***
       * 
       * Remove the listener.
       * 
       * If the listener doesn't exist, do nothing.
       * 
       * Remove the listener from JMap NG Core library. The listener is deleted and never called again after that.
       * 
       * @param listenerId The listener id
       * @example ```ts
       * 
       * // remove the listener "my-form-listener"
       * JMap.Event.Form.remove("my-form-listener")
       * ```
       */
      function remove(listenerId: string): void
    }

    /**
     * ***JMap.Event.Project***
     * 
     * Here you can manage all project related event listeners.
     * 
     * Click to see all events available: ***[[JMap.Event.Project.on]]***. 
     */
    namespace Project {

      /**
       * ***JMap.Event.Project.on***
       * 
       * Here you have all available project events on which you can attach a listener.
       */
      namespace on {

        /**
         * ***JMap.Event.Project.on.projectChange***
         * 
         * This event is triggered when a new project is loaded.
         * 
         * @param listenerId Your listener id (must be unique for all project events)
         * @param fn Your listener function
         * @example ```ts
         * 
         * // Each time a new project is loaded will display the new project id in the console
         * JMap.Event.Project.on.projectChange(
         *    "custom-project-change",
         *    params => console.log(`New project id="${params.project.id}"`)
         * )
         * ```
         */
        function projectChange(listenerId: string, fn: (params: JProjectEventParams) => void): void

        /**
         * ***JMap.Event.Project.on.projectsChange***
         * 
         * This event is triggered after the entire project list has been fetched from server.
         * 
         * It happens once after the user session has been validated and set.
         * 
         * @param listenerId Your listener id (must be unique for all project events)
         * @param fn Your listener function
         * @example ```ts
         * 
         * // Each time a new project is loaded will display the new project id in the console
         * JMap.Event.Project.on.projectsChange(
         *    "custom-projects-change",
         *    params => console.log(`Project count = "${params.projects.length}"`)
         * )
         * ```
         */
        function projectsChange(listenerId: string, fn: (params: JProjectAllEventParams) => void): void

        /**
         * ***JMap.Event.Project.on.preDeactivation***
         * 
         * This event is triggered when current active project will be deactived.
         * 
         * When this event is triggered, the project is still loaded (the map, the redux state, etc...).
         * 
         * You can do anything normally.
         * 
         * @param listenerId Your listener id (must be unique for all project events)
         * @param fn Your listener function
         * @example ```ts
         * 
         * // Each time the current active project will be deactivated it will display the project id in the console
         * JMap.Event.Project.on.preDeactivation(
         *    "custom-project-pre-deactivation",
         *    params => console.log(`Project id="${params.project.id}" will be deactivate`)
         * )
         * ```
         */
        function preDeactivation(listenerId: string, fn: (params: JProjectEventParams) => void): void

        /**
         * ***JMap.Event.Project.on.postDeactivation***
         * 
         * This event is triggered when current active project has been deactived.
         * 
         * When this event is triggered, the project has been deactivated.
         * 
         * Project's data on the map, in the redux state, etc... should not be available anymore.
         * 
         * @param listenerId Your listener id (must be unique for all project events)
         * @param fn Your listener function
         * @example ```ts
         * 
         * // Each time the current active project will be deactivated it will display the project id in the console
         * JMap.Event.Project.on.postDeactivation(
         *    "custom-project-post-deactivation",
         *    params => console.log(`Project id="${params.project.id}" is now deactivated`)
         * )
         * ```
         */
        function postDeactivation(listenerId: string, fn: (params: JProjectEventParams) => void): void
      }

      /**
       * ***JMap.Event.Project.activate***
       * 
       * Activate the listener.
       * 
       * If the listener is already active, do nothing.
       * 
       * If the listener is inactive, it will be reactivated and will be called again ...
       * 
       * @param listenerId The listener id
       * @example ```ts
       * 
       * // activate the listener "my-project-listener"
       * JMap.Event.Project.activate("my-project-listener")
       * ```
       */
      function activate(listenerId: string): void

      /**
       * ***JMap.Event.Project.deactivate***
       * 
       * Deactivate the listener.
       * 
       * If the listener id doesn't exists or if the listener is already inactive, do nothing.
       * 
       * If the listener is active, it will be deactivated and will be ignored ...
       * 
       * @param listenerId The listener id
       * @example ```ts
       * 
       * // deactivate the listener "my-project-listener"
       * JMap.Event.Project.deactivate("my-project-listener")
       * ```
       */
      function deactivate(listenerId: string): void

      /**
       * ***JMap.Event.Project.remove***
       * 
       * Remove the listener.
       * 
       * If the listener doesn't exist, do nothing.
       * 
       * Remove the listener from JMap NG Core library. The listener is deleted and never called again after that.
       * 
       * @param listenerId The listener id
       * @example ```ts
       * 
       * // remove the listener "my-project-listener"
       * JMap.Event.Project.remove("my-project-listener")
       * ```
       */
      function remove(listenerId: string): void
    }

    /**
     * ***JMap.Event.Layer***
     * 
     * Here you can manage all layer related event listeners.
     * 
     * Click to see all events available: ***[[JMap.Event.Layer.on]]***. 
     */
    namespace Layer {

      /**
       * ***JMap.Event.Layer.on***
       * 
       * Here you have all available layer events on which you can attach a listener.
       */
      namespace on {

        /**
         * ***JMap.Event.Layer.on.layersChange***
         * 
         * This event is triggered when a new project has been loaded, and when its layers have
         * been loaded too.
         * 
         * If the project has been unloaded, this event is triggered but the provided layerTree is
         * an empty array (in JMap a project has at least one layer).
         * 
         * @param listenerId Your listener id (must be unique for all layer events)
         * @param fn Your listener function
         * @example ```ts
         * 
         * // Each time a new project is loaded and its layer have also been loaded,
         * // this method is processed.
         * JMap.Event.Layer.on.layersChange(
         *    "custom-layers-change",
         *    params => {
         *      console.log("This is the new project layer three", params.layerTree)
         *    }
         * )
         * ```
         */
        function layersChange(listenerId: string, fn: (params: JLayerEventChangeParams) => void): void
        
        /**
         * ***JMap.Event.Layer.on.visibilityChange***
         * 
         * This event is triggered when a tree element visibility changed.
         * 
         * @param listenerId Your listener id (must be unique for all layer events)
         * @param fn Your listener function
         * @example ```ts
         * 
         * // Each time a tree element visibility is changed, will display the new visibility
         * // in the console
         * JMap.Event.Layer.on.visibilityChange(
         *    "custom-visibility-change",
         *    params => {
         *      console.log(`Layer element id="${params.layerId}" visible="${params.visibility}"`)
         *    }
         * )
         * ```
         */
        function visibilityChange(listenerId: string, fn: (params: JLayerEventVisibilityParams) => void): void

        /**
         * ***JMap.Event.Layer.on.selectabilityWillChange***
         * 
         * This event is triggered just before a vector layer selectability is changed. This
         * permits to act on selection before the layer selectability property is effectively changed
         * 
         * @param listenerId Your listener id (must be unique for all layer events)
         * @param fn Your listener function
         * @example ```ts
         * 
         * // Each time a vector layer selectability will change, it will display the next selectability
         * // in the console
         * JMap.Event.Layer.on.selectabilityWillChange(
         *    "custom-selectability-will-change",
         *    params => {
         *      console.log(`Vector layer id="${params.layerId}" next selectability="${params.selectability}"`)
         *    }
         * )
         * ```
         */
        function selectabilityWillChange(listenerId: string, fn: (params: JLayerEventSelectabilityParams) => void): void

        /**
         * ***JMap.Event.Layer.on.thematicVisibilityChange***
         * 
         * This event is triggered when a layer thematic visibility changed.
         * 
         * @param listenerId Your listener id (must be unique for all layer events)
         * @param fn Your listener function
         * @example ```ts
         * 
         * // Each time a layer thematic visibility is changed this method is processed
         * JMap.Event.Layer.on.thematicVisibilityChange(
         *    "custom-thematic-visibility-change",
         *    params => {
         *      console.log(
         *        `Layer id="${params.layerId}", ` +
         *        `thematic id="${params.thematicId}" ` +
         *        `visible="${params.visibility}"`
         *      )
         *    }
         * )
         * ```
         */
        function thematicVisibilityChange(listenerId: string, fn: (params: JLayerEventThematicVisibilityParams) => void): void

        /**
         * ***JMap.Event.Layer.on.layerDeletion***
         * 
         * This event is triggered when a layer is deleted.
         * 
         * @param listenerId Your listener id (must be unique for all layer events)
         * @param fn Your listener function
         * @example ```ts
         * 
         * // Each time a layer is deleted, will display a message in the console
         * JMap.Event.Layer.on.layerDeletion(
         *    "custom-layer-deletion",
         *    params => {
         *      console.log(`Layer id="${params.layerId}" has been deleted client side`)
         *    }
         * )
         * ```
         */
        function layerDeletion(listenerId: string, fn: (params: JLayerEventParams) => void): void
      }

      /**
       * ***JMap.Event.Layer.activate***
       * 
       * Activate the listener.
       * 
       * If the listener is already active, do nothing.
       * 
       * If the listener is inactive, it will be reactivated and will be called again ...
       * when en event is emitted.
       * 
       * @param listenerId The listener id
       * @example ```ts
       * 
       * // activate the listener "my-layer-listener"
       * JMap.Event.Layer.activate("my-layer-listener")
       * ```
       */
      function activate(listenerId: string): void

      /**
       * ***JMap.Event.Layer.deactivate***
       * 
       * Deactivate the listener.
       * 
       * If the listener id doesn't exists or if the listener is already inactive, do nothing.
       * 
       * If the listener is active, it will be deactivated and will be ignored ...
       * 
       * @param listenerId The listener id
       * @example ```ts
       * 
       * // deactivate the listener "my-layer-listener"
       * JMap.Event.Layer.deactivate("my-layer-listener")
       * ```
       */
      function deactivate(listenerId: string): void

      /**
       * ***JMap.Event.Layer.remove***
       * 
       * Remove the listener.
       * 
       * If the listener doesn't exist, do nothing.
       * 
       * Remove the listener from JMap NG Core library. The listener is deleted and never called again after that.
       * 
       * @param listenerId The listener id
       * @example ```ts
       * 
       * // remove the listener "my-layer-listener"
       * JMap.Event.Layer.remove("my-layer-listener")
       * ```
       */
      function remove(listenerId: string): void
    }

    /**
     * ***JMap.Event.Map***
     * 
     * Here you can manage all map related event listeners.
     * 
     * Click to see all events available: ***[[JMap.Event.Map.on]]***. 
     */
    namespace Map {

      /**
       * ***JMap.Event.Map.on***
       * 
       * Here you have all available map events on which you can attach a listener.
       */
      namespace on {

        /**
         * ***JMap.Event.Map.on.mapLoad***
         * 
         * This event is triggered when a layer is deleted.
         * 
         * @param listenerId Your listener id (must be unique for all map events)
         * @param fn Your listener function
         * @example ```ts
         * 
         * // Each time a map is created and ready, will display a message in the console
         * JMap.Event.Map.on.mapLoad(
         *    "custom-map-load",
         *    args => {
         *      console.log(`The map is ready, map instance = `, args.map)
         *    }
         * )
         * ```
         */
        function mapLoad(listenerId: string, fn: (params: JMapEventLoadedParams) => void): void

        /**
         * ***JMap.Event.Map.on.mapDestroy***
         * 
         * This event is triggered when the map is destroyed.
         * 
         * @param listenerId Your listener id (must be unique for all map events)
         * @param fn Your listener function
         * @example ```ts
         * 
         * // Each time the map is destroyed, will display a message in the console
         * JMap.Event.Map.on.mapDestroy(
         *    "custom-map-destroyed",
         *    () => console.log(`The map has been destroyed`)
         * )
         * ```
         */
        function mapDestroy(listenerId: string, fn: () => void): void

        /**
         * ***JMap.Event.Map.on.moveStart***
         * 
         * This event is triggered when the map start moving (when user or library pan the map).
         * 
         * @param listenerId Your listener id (must be unique for all map events)
         * @param fn Your listener function
         * @example ```ts
         * 
         * // Each time the map start moving, will display a message in the console
         * JMap.Event.Map.on.moveStart(
         *    "custom-map-move-start",
         *    args => {
         *      console.log(`The map start moving`, args.map, args.mapEvent)
         *      // mapEvent is the Mapbox event
         *    }
         * )
         * ```
         */
        function moveStart(listenerId: string, fn: (params: JMapEventParams) => void): void

        /**
         * ***JMap.Event.Map.on.move***
         * 
         * This event is triggered when the map is moving (when user or library pan the map).
         * 
         * @param listenerId Your listener id (must be unique for all map events)
         * @param fn Your listener function
         * @example ```ts
         * 
         * // Will map is moving, will display a message in the console
         * JMap.Event.Map.on.move(
         *    "custom-map-move",
         *    args => {
         *      console.log(`The map is moving`, args.map, args.mapEvent)
         *      // mapEvent is the Mapbox event
         *    }
         * )
         * ```
         */
        function move(listenerId: string, fn: (params: JMapEventParams) => void):  void

        /**
         * ***JMap.Event.Map.on.moveEnd***
         * 
         * This event is triggered when the map end moving (when user or library pan the map).
         * 
         * @param listenerId Your listener id (must be unique for all map events)
         * @param fn Your listener function
         * @example ```ts
         * 
         * // Each time the map stop moving, will display a message in the console
         * JMap.Event.Map.on.moveEnd(
         *    "custom-map-move-end",
         *    args => {
         *      console.log(`The map stop moving`, args.map, args.mapEvent)
         *      // mapEvent is the Mapbox event
         *    }
         * )
         * ```
         */
        function moveEnd(listenerId: string, fn: (params: JMapEventParams) => void): void

        /**
         * ***JMap.Event.Map.on.mouseMove***
         * 
         * This event is triggered when the mouse is moving over the map (when user or library pan the map).
         * 
         * @param listenerId Your listener id (must be unique for all map events)
         * @param fn Your listener function
         * @example ```ts
         * 
         * // When mouse is moving over the map, will display a message in the console
         * JMap.Event.Map.on.mouseMove(
         *    "custom-map-mouse-move",
         *    args => {
         *      console.log(
         *          `The mouse is moving on layer id="${args.layerId}"`, map.location,
         *          args.map, args.mapEvent // mapEvent is the Mapbox event
         *      )
         *    }
         * )
         * ```
         */
        function mouseMove(listenerId: string, fn: (params: JMapEventLayerParams) => void): void

        /**
         * ***JMap.Event.Map.on.mouseMoveOnLayer***
         * 
         * This event is triggered when the mouse is moving over the map (when user or library pan the map).
         * 
         * @param listenerId Your listener id (must be unique for all map events)
         * @param fn Your listener function
         * @example ```ts
         * 
         * // When mouse is moving over the map, will display 2 messages in the console
         * JMap.Event.Map.on.mouseMoveOnLayer(
         *    "custom-map-mouse-move-on-layer",
         *    args => {
         *      console.log(
         *          `The mouse is moving on layer id="${args.layerId}"`,
         *          args.map, args.mapEvent // the mapEvent is the Mapbox event
         *      )
         *      console.log(
         *        `The mouse cursor is over ${args.features.length} features`,
         *        args.location
         *      )
         *    }
         * )
         * ```
         */
        function mouseMoveOnLayer(listenerId: string, fn: (params: JMapEventFeaturesParams) => void): void

        /**
         * ***JMap.Event.Map.on.mouseEnter***
         * 
         * This event is triggered when the mouse enter over a layer feature.
         * 
         * When switching from one feature to another, this event is not called again if the features
         * are joined or intersect.
         * 
         * @param listenerId Your listener id (must be unique for all map events)
         * @param fn Your listener function
         * @example ```ts
         * 
         * // When mouse is entering over a layer feature(s), will display 2 messages
         * // in the console
         * JMap.Event.Map.on.mousemouseEnterMoveOnLayer(
         *    "custom-map-mouse-enter",
         *    args => {
         *      console.log(
         *          `The mouse entered an element of layer id="${args.layerId}"`,
         *          args.map, args.mapEvent // mapEvent is the Mapbox event
         *      )
         *      console.log(
         *        `The mouse cursor is over ${args.features.length} features`,
         *        args.location
         *      )
         *    }
         * )
         * ```
         */
        function mouseEnter(listenerId: string, fn: (params: JMapEventFeaturesParams) => void): void

        /**
         * ***JMap.Event.Map.on.mouseLeave***
         * 
         * This event is triggered when the mouse leave a layer feature, and is not over another
         * feature.
         * 
         * @param listenerId Your listener id (must be unique for all map events)
         * @param fn Your listener function
         * @example ```ts
         * 
         * // When mouse is leaving a layer, will display a message in the console
         * JMap.Event.Map.on.mouseLeave(
         *    "custom-map-mouse-leave",
         *    args => {
         *      console.log(
         *          `The mouse leaved the layer id="${args.layerId}"`, args.location,
         *          args.map, args.mapEvent // mapEvent is the Mapbox event
         *      )
         *    }
         * )
         * ```
         */
        function mouseLeave(listenerId: string, fn: (params: JMapEventLayerParams) => void): void

        /**
         * ***JMap.Event.Map.on.click***
         * 
         * This event is triggered when the mouse is clicked.
         * 
         * @param listenerId Your listener id (must be unique for all map events)
         * @param fn Your listener function
         * @example ```ts
         * 
         * // When mouse clicked on the map, will display a message in the console
         * JMap.Event.Map.on.click(
         *    "custom-map-mouse-click",
         *    args => {
         *      const location = args.location
         *      console.log(
         *          `The mouse has been clicked at { x="${location.x}, y="${location.y}" }"`,
         *          args.map, args.mapEvent // mapEvent is the Mapbox event
         *      )
         *    }
         * )
         * ```
         */
        function click(listenerId: string, fn: (params: JMapEventLocationParams) => void): void

        /**
           * ***JMap.Event.Map.on.zoomStart***
           * 
           * This event is triggered when zoom start.
           * 
           * @param listenerId Your listener id (must be unique for all map events)
           * @param fn Your listener function
           * @example ```ts
           * 
           * // When the map zoom start, it will display a message in the console
           * JMap.Event.Map.on.zoomStart(
           *    "custom-map-zoom-start",
           *    args => console.log(`The zoom is starting (zoom="${args.zoom}")`)
           * )
           * ```
           */
        function zoomStart(listenerId: string, fn: (params: JMapEventZoomParams) => void): void

        /**
           * ***JMap.Event.Map.on.zoom***
           * 
           * This event is triggered when zooming on map
           * 
           * @param listenerId Your listener id (must be unique for all map events)
           * @param fn Your listener function
           * @example ```ts
           * 
           * // When the map zoom change, it will display a message in the console
           * JMap.Event.Map.on.zoom(
           *    "custom-map-zoom",
           *    args => console.log(`The map zoom changed (zoom="${args.zoom}")`)
           * )
           * ```
           */
        function zoom(listenerId: string, fn: (params: JMapEventZoomParams) => void): void

        /**
           * ***JMap.Event.Map.on.zoomStop***
           * 
           * This event is triggered when zoom start.
           * 
           * @param listenerId Your listener id (must be unique for all map events)
           * @param fn Your listener function
           * @example ```ts
           * 
           * // When the map zoom stop, it will display a message in the console
           * JMap.Event.Map.on.zoomStop(
           *    "custom-map-zoom-stop",
           *    args => console.log(`The zoom is finished (zoom="${args.zoom}")`)
           * )
           * ```
           */
        function zoomStop(listenerId: string, fn: (params: JMapEventZoomParams) => void): void

        /**
         * ***JMap.Event.Map.on.rotateStart***
         * 
         * This event is triggered when rotation on the map start.
         * 
         * @param listenerId Your listener id (must be unique for all map events)
         * @param fn Your listener function
         * @example ```ts
         * 
         * // When the rotation of the map start, it will display a message in the console
         * JMap.Event.Map.on.rotateStart(
         *    "custom-map-rotate-start",
         *    args => console.log(`The rotation is starting (rotation="${args.bearing})")`
         * )
         * ```
         */
        function rotateStart(listenerId: string, fn: (params: JMapEventRotateParams) => void): void

        /**
         * ***JMap.Event.Map.on.rotate***
         * 
         * This event is triggered when the map is rotating
         * 
         * @param listenerId Your listener id (must be unique for all map events)
         * @param fn Your listener function
         * @example ```ts
         * 
         * // When the rotation of the map change, it will display a message in the console
         * JMap.Event.Map.on.rotate(
         *    "custom-map-rotate",
         *    args => console.log(`The rotation has changed (rotation="${args.bearing})")`
         * )
         * ```
         */
        function rotate(listenerId: string, fn: (params: JMapEventRotateParams) => void): void

        /**
         * ***JMap.Event.Map.on.rotateStop***
         * 
         * This event is triggered when rotation on the map stop.
         * 
         * @param listenerId Your listener id (must be unique for all map events)
         * @param fn Your listener function
         * @example ```ts
         * 
         * // When the rotation of the map stop, it will display a message in the console
         * JMap.Event.Map.on.rotateStop(
         *    "custom-map-rotate-stop",
         *    args => console.log(`The rotation is finished (rotation="${args.bearing})")`
         * )
         * ```
         */
        function rotateStop(listenerId: string, fn: (params: JMapEventRotateParams) => void): void

        /**
         * ***JMap.Event.Map.on.pitchStart***
         * 
         * This event is triggered when pitch on the map start.
         * 
         * @param listenerId Your listener id (must be unique for all map events)
         * @param fn Your listener function
         * @example ```ts
         * 
         * // When the pitch of the map start, it will display a message in the console
         * JMap.Event.Map.on.pitchStart(
         *    "custom-map-pitch-start",
         *    args => console.log(`The pitch is starting (pitch="${args.pitch})")`
         * )
         * ```
         */
        function pitchStart(listenerId: string, fn: (params: JMapEventPitchParams) => void): void

        /**
         * ***JMap.Event.Map.on.pitch***
         * 
         * This event is triggered when pitch on the map start.
         * 
         * @param listenerId Your listener id (must be unique for all map events)
         * @param fn Your listener function
         * @example ```ts
         * 
         * // When the map is pitching, it will display a message in the console
         * JMap.Event.Map.on.pitch(
         *    "custom-map-pitch",
         *    args => console.log(`The map is pitching (pitch="${args.pitch})")`
         * )
         * ```
         */
        function pitch(listenerId: string, fn: (params: JMapEventPitchParams) => void): void

        /**
         * ***JMap.Event.Map.on.pitchEnd***
         * 
         * This event is triggered when pitch on the map end.
         * 
         * @param listenerId Your listener id (must be unique for all map events)
         * @param fn Your listener function
         * @example ```ts
         * 
         * // When the pitch on the map end, it will display a message in the console
         * JMap.Event.Map.on.pitch(
         *    "custom-map-pitch-end",
         *    args => console.log(`The map is pitching (pitch="${args.pitch})")`
         * )
         * ```
         */
        function pitchEnd(listenerId: string, fn: (params: JMapEventPitchParams) => void): void

        /**
         * ***JMap.Event.Map.on.containerReady***
         * 
         * This event is triggered when the map container is ready to use.
         * 
         * Triggered just before the first time the map is created, when JMap Core check
         * if the map container exist or not (and create it if needed).
         * 
         * @param listenerId Your listener id (must be unique for all map events)
         * @param fn Your listener function
         * @example ```ts
         * 
         * // When the map container is ready, will display a message in the console
         * JMap.Event.Map.on.containerReady(
         *    "custom-map-container-ready",
         *    params => console.log("Map container ready", params)
         * )
         * ```
         */
        function containerReady(listenerId: string, fn: (params: JMapEventContainerReadyParams) => void): void

        /**
         * ***JMap.Event.Map.on.containerResized***
         * 
         * This event is triggered when the map container is resized.
         * 
         * @param listenerId Your listener id (must be unique for all map events)
         * @param fn Your listener function
         * @example ```ts
         * 
         * // When the map container is resized, it will display a message in the console
         * JMap.Event.Map.on.containerResized(
         *    "custom-map-container-resized",
         *    params => console.log("Map container resized", params)
         * )
         * ```
         */
        function containerResized(listenerId: string, fn: (params: JMapEventContainerResizedParams) => void): void

        /**
         * ***JMap.Event.Map.on.selectionChanged***
         * 
         * This event is triggered when the map selection has changed.
         * 
         * @param listenerId Your listener id (must be unique for all map events)
         * @param fn Your listener function
         * @example ```ts
         * 
         * // When the selection changed, will display old and new selections in the console
         * JMap.Event.Map.on.selectionChanged(
         *    "custom-selection-changed",
         *    params => {
         *      console.log("Old selection:", params.oldSelection)
         *      console.log("New selection:", params.newSelection)
         *    }
         * )
         * ```
         */
        function selectionChanged(listenerId: string, fn: (params: JMapEventSelectionChangedParams) => void): void
      }
      /**
       * ***JMap.Event.Map.activate***
       * 
       * Activate the listener.
       * 
       * If the listener is already active, do nothing.
       * 
       * If the listener is inactive, it will be reactivated and will be called again ...
       * 
       * @param listenerId The listener id
       * @example ```ts
       * 
       * // activate the listener "my-map-listener"
       * JMap.Event.Map.activate("my-map-listener")
       * ```
       */
      function activate(listenerId: string): void

      /**
       * ***JMap.Event.Map.deactivate***
       * 
       * Deactivate the listener.
       * 
       * If the listener id doesn't exists or if the listener is already inactive, do nothing.
       * 
       * If the listener is active, it will be deactivated and will be ignored ...
       * 
       * @param listenerId The listener id
       * @example ```ts
       * 
       * // deactivate the listener "my-map-listener"
       * JMap.Event.Map.deactivate("my-map-listener")
       * ```
       */
      function deactivate(listenerId: string): void

      /**
       * ***JMap.Event.Map.remove***
       * 
       * Remove the listener.
       * 
       * If the listener doesn't exist, do nothing.
       * 
       * Remove the listener from JMap NG Core library. The listener is deleted and never called again after that.
       * 
       * @param listenerId The listener id
       * @example ```ts
       * 
       * // remove the listener "my-map-listener"
       * JMap.Event.Map.remove("my-map-listener")
       * ```
       */
      function remove(listenerId: string): void
    }

    /**
     * ***JMap.Event.Photo***
     * 
     * Here you can manage all photo event listeners.
     * 
     * Click to see all events available: ***[[JMap.Event.Photo.on]]***. 
     */
    namespace Photo {

      /**
       * ***JMap.Event.Photo.on***
       * 
       * Here you have all available high level events on which you can attach a listener.
       */
      namespace on {

        /**
         * ***JMap.Event.Photo.on.containerCreated***
         * 
         * This event is triggered once when the photo container has been created in the dom.
         * 
         * You should not need to use this event, it's a technical one required by JMap App.
         * 
         * @param listenerId Your listener id (must be unique)
         * @param fn Your listener function
         * @example ```ts
         * 
         * // log a message in the console once the photo container is created
         * JMap.Event.Main.on.containerCreated(
         *   "custom-photo-div-created", 
         *   params => console.log("Photo container created", params.container)
         * )
         * ```
         */
        function containerCreated(listenerId: string, fn: (params: JPhotoEventContainerCreatedParams) => void): void
      }

      /**
       * ***JMap.Event.Photo.activate***
       * 
       * Activate the listener.
       * 
       * If the listener is already active, do nothing.
       * 
       * If the listener is inactive, it will be reactivated and will be called again ...
       * 
       * @param listenerId The listener id
       * @example ```ts
       * 
       * // activate the listener "my-photo-listener"
       * JMap.Event.Photo.activate("my-photo-listener")
       * ```
       */
      function activate(listenerId: string): void

      /**
       * ***JMap.Event.Photo.deactivate***
       * 
       * Deactivate the listener.
       * 
       * If the listener id doesn't exists or if the listener is already inactive, do nothing.
       * 
       * If the listener is active, it will be deactivated and will be ignored ...
       * 
       * @param listenerId The listener id
       * @example ```ts
       * 
       * // deactivate the listener "my-photo-listener"
       * JMap.Event.Photo.deactivate("my-photo-listener")
       * ```
       */
      function deactivate(listenerId: string): void

      /**
       * ***JMap.Event.Photo.remove***
       * 
       * Remove the listener.
       * 
       * If the listener doesn't exist, do nothing.
       * 
       * Remove the listener from JMap NG Core library. The listener is deleted and never called again after that.
       * 
       * @param listenerId The listener id
       * @example ```ts
       * 
       * // remove the listener "my-photo-listener"
       * JMap.Event.Photo.remove("my-photo-listener")
       * ```
       */
      function remove(listenerId: string): void
    }

    /**
     * ***JMap.Event.Feature***
     * 
     * Here you can manage all feature related event listeners.
     * 
     * Click to see all events available: ***[[JMap.Event.Feature.on]]***. 
     */
    namespace Feature {

      /**
       * ***JMap.Event.Feature.on***
       * 
       * Here you have all available feature events on which you can attach a listener.
       */
      namespace on {

        /**
         * ***JMap.Event.Feature.on.deletion***
         * 
         * This event is triggered when a feature has been deleted.
         * 
         * @param listenerId Your listener id (must be unique for all user events)
         * @param fn Your listener function
         * @example ```ts
         * 
         * // Each time a layer feature is deleted, this method is processed
         * JMap.Event.Feature.on.deletion(
         *    "custom-feature-deletion",
         *    params => console.info(`For layer id="${params.layerId}", feature id="${params.featureId}" has been deleted`)
         * )
         * ```
         */
        function deletion(listenerId: string, fn: (params: JFeatureEventDeleteParams) => void): void

        /**
         * ***JMap.Event.Feature.on.geometryChanged***
         * 
         * This event is triggered when a feature geometry has been changed.
         * 
         * @param listenerId Your listener id (must be unique for all user events)
         * @param fn Your listener function
         * @example ```ts
         * 
         * // Each time a layer feature geometry has been changed, this method is processed
         * JMap.Event.Feature.on.geometryChanged(
         *    "custom-feature-geometry-changed",
         *    params => console.info(
         *      `For layer id="${params.layerId}", feature id="${params.newFeature.id}" geometry has been changed`,
         *      params.newFeature
         *    )
         * )
         * ```
         */
        function geometryChanged(listenerId: string, fn: (params: JFeatureEventGeometryUpdateParams) => void): void
      }

      /**
       * ***JMap.Event.Feature.activate***
       * 
       * Activate the listener.
       * 
       * If the listener is already active, do nothing.
       * 
       * If the listener is inactive, it will be reactivated and will be called again ...
       * 
       * @param listenerId The listener id
       * @example ```ts
       * 
       * // activate the listener "my-feature-listener"
       * JMap.Event.Feature.activate("my-feature-listener")
       * ```
       */
      function activate(listenerId: string): void

      /**
       * ***JMap.Event.Feature.deactivate***
       * 
       * Deactivate the listener.
       * 
       * If the listener id doesn't exists or if the listener is already inactive, do nothing.
       * 
       * If the listener is active, it will be deactivated and will be ignored ...
       * 
       * @param listenerId The listener id
       * @example ```ts
       * 
       * // deactivate the listener "my-feature-listener"
       * JMap.Event.Feature.deactivate("my-feature-listener")
       * ```
       */
      function deactivate(listenerId: string): void

      /**
       * ***JMap.Event.Feature.remove***
       * 
       * Remove the listener.
       * 
       * If the listener doesn't exist, do nothing.
       * 
       * Remove the listener from JMap NG Core library. The listener is deleted and never called again after that.
       * 
       * @param listenerId The listener id
       * @example ```ts
       * 
       * // remove the listener "my-feature-listener"
       * JMap.Event.Feature.remove("my-feature-listener")
       * ```
       */
      function remove(listenerId: string): void
    }

    
    /**
     * ***JMap.Event.Language***
     * 
     * Here you can manage all language related event listeners.
     * 
     * Click to see all events available: ***[[JMap.Event.Language.on]]***. 
     */
    namespace Language {

      /**
       * ***JMap.Event.Language.on***
       * 
       * Here you have all available user events on which you can attach a listener.
       */
      namespace on {

        /**
         * ***JMap.Event.Language.on.localeChange***
         * 
         * This event is triggered when the current locale is changed in JMap NG translation engine.
         * 
         * @param listenerId Your listener id (must be unique for all user events)
         * @param fn Your listener function
         * @example ```ts
         * 
         * // Each time the current locale is changed, this method is processed
         * JMap.Event.Language.on.localeChange(
         *    "custom-language-locale-change",
         *    params => console.info(`The current locale has changed, it is now "${params.locale}"`)
         * )
         * ```
         */
        function localeChange(listenerId: string, fn: (params: JLanguageEventLocaleChangeParams) => void): void
      }

      /**
       * ***JMap.Event.Language.activate***
       * 
       * Activate the listener.
       * 
       * If the listener is already active, do nothing.
       * 
       * If the listener is inactive, it will be reactivated and will be called again ...
       * 
       * @param listenerId The listener id
       * @example ```ts
       * 
       * // activate the listener "my-language-listener"
       * JMap.Event.Language.activate("my-language-listener")
       * ```
       */
      function activate(listenerId: string): void

      /**
       * ***JMap.Event.Language.deactivate***
       * 
       * Deactivate the listener.
       * 
       * If the listener id doesn't exists or if the listener is already inactive, do nothing.
       * 
       * If the listener is active, it will be deactivated and will be ignored ...
       * 
       * @param listenerId The listener id
       * @example ```ts
       * 
       * // deactivate the listener "my-language-listener"
       * JMap.Event.Language.deactivate("my-language-listener")
       * ```
       */
      function deactivate(listenerId: string): void

      /**
       * ***JMap.Event.Language.remove***
       * 
       * Remove the listener.
       * 
       * If the listener doesn't exist, do nothing.
       * 
       * Remove the listener from JMap NG Core library. The listener is deleted and never called again after that.
       * 
       * @param listenerId The listener id
       * @example ```ts
       * 
       * // remove the listener "my-language-listener"
       * JMap.Event.Language.remove("my-language-listener")
       * ```
       */
      function remove(listenerId: string): void
    }

    /**
     * ***JMap.Event.User***
     * 
     * Here you can manage all user related event listeners.
     * 
     * Click to see all events available: ***[[JMap.Event.User.on]]***. 
     */
    namespace User {

      /**
       * ***JMap.Event.User.on***
       * 
       * Here you have all available user events on which you can attach a listener.
       */
      namespace on {

        /**
         * ***JMap.Event.User.on.sessionChanged***
         * 
         * This event is triggered when the user session changed.
         * 
         * If it's a logout, the token in params.session is equals to "-1".
         * 
         * @param listenerId Your listener id (must be unique for all user events)
         * @param fn Your listener function
         * @example ```ts
         * 
         * // Each time the session has changed this method is processed
         * JMap.Event.User.on.sessionChanged(
         *    "custom-session-change",
         *    params => {
         *      if (params.session.token === "-1") {
         *        console.log("Session has been closed")
         *      } else {
         *        console.log(`New session opened`, params.session)
         *      }
         *    }
         * )
         * ```
         */
        function sessionChanged(listenerId: string, fn: (params: JUserEventSessionChangedParams) => void): void
      }

      /**
       * ***JMap.Event.User.activate***
       * 
       * Activate the listener.
       * 
       * If the listener is already active, do nothing.
       * 
       * If the listener is inactive, it will be reactivated and will be called again ...
       * 
       * @param listenerId The listener id
       * @example ```ts
       * 
       * // activate the listener "my-user-listener"
       * JMap.Event.User.activate("my-user-listener")
       * ```
       */
      function activate(listenerId: string): void

      /**
       * ***JMap.Event.User.deactivate***
       * 
       * Deactivate the listener.
       * 
       * If the listener id doesn't exists or if the listener is already inactive, do nothing.
       * 
       * If the listener is active, it will be deactivated and will be ignored ...
       * 
       * @param listenerId The listener id
       * @example ```ts
       * 
       * // deactivate the listener "my-user-listener"
       * JMap.Event.User.deactivate("my-user-listener")
       * ```
       */
      function deactivate(listenerId: string): void

      /**
       * ***JMap.Event.User.remove***
       * 
       * Remove the listener.
       * 
       * If the listener doesn't exist, do nothing.
       * 
       * Remove the listener from JMap NG Core library. The listener is deleted and never called again after that.
       * 
       * @param listenerId The listener id
       * @example ```ts
       * 
       * // remove the listener "my-user-listener"
       * JMap.Event.User.remove("my-user-listener")
       * ```
       */
      function remove(listenerId: string): void
    }

    /**
     * ***JMap.Event.MouseOver***
     * 
     * Here you can manage all mouseover related event listeners.
     * 
     * List of events are located in ***[[JMap.Event.MouseOver.on]]***. 
     */
    namespace MouseOver {

      /**
       * ***JMap.Event.MouseOver.on***
       * 
       * Here you have all available user events on which you can attach a listener.
       */
      namespace on {

        /**
         * ***JMap.Event.MouseOver.on.beforeContentProcessed***
         * 
         * This event is triggered each time the map is clicked, and before the mouseover content is calculated or popup opened.
         * 
         * This event is a special on, as it offers 3 methods which can change the mouseover behavior:
         *  - getFeaturesByLayerId: it returns the feature that will be used to display the mouseover
         *  - addFeaturesToLayerSelection : add custom features to the mouseover
         *  - removeFeaturesFromLayerSelection: used to remove a clicked feature from the mouseover (will not be displayed in the mouseover)
         * 
         * You can test the event function addFeaturesToLayerSelection, by pasting the following code in the console (adapt for your configuration):
         * 
         * ```ts
         * JMap.Event.MouseOver.on.beforeContentProcessed(
         *   "my-listener",
         *   params => {
         *     console.log("Mouseover selection before", params.selection[4])
         *     params.addFeaturesToLayerSelection(4, [{
         *       id: 58,
         *       properties: {JMAP_FID: 58, NOM_QR: "Bois-Francs"},
         *       type: "Feature",
         *       geometry: {coordinates: [],type: "Polygon"}
         *     }])
         *     console.log("Mouseover selection after", params.selection[4])
         *   }
         * )
         * ```
         * 
         * This listener adds a feature on every click on the map, so no matter where you click,
         * the mouseover will contains at least one feature (the one dynamically added by the listener)
         * 
         * Then paste this in the console to remove the previous listener:
         * 
         * ```ts
         * JMap.Event.MouseOver.remove(“my-listener“)
         * ```
         * 
         * You can test that now no mouseover is displayed anymore when we click on an empty area.
         * 
         * Finally you can test the event function removeFeaturesFromLayerSelection 
         * by pasting the following code snippet:
         * 
         * ```ts
         * JMap.Event.MouseOver.on.beforeContentProcessed(
         *   "my-listener",
         *   params => {
         *     console.log("Mouseover selection before", params.selection[4])
         *     params.removeFeaturesFromLayerSelection(4, [58])
         *     console.log("Mouseover selection after", params.selection[4])
         *   }
         * )
         * ```
         * 
         * Now you can click on the feature id=58, but no mouseover will display for if, as it is automatically removed by the listener.
         * 
         * @param listenerId Your listener id (must be unique for all mouseover events)
         * @param fn Your listener function
         * @example ```ts
         * 
         * // Each time the map is clicked and "layer" interactor is active
         * JMap.Event.MouseOver.on.beforeContentProcessed("my-listener", params => {
         *   // mouseover "clicked" features for layer id="3"
         *   let features = params.getFeaturesByLayerId(3) // returns an array copy
         *   // remove feature id=17
         *   params.removeFeaturesByLayerId(3, [123, 432])
         *   features = params.getFeaturesByLayerId(3)
         *   // now features id=123 and 432 are not anymore in features array
         *   const newFeature = { id="24553", ...etc } // a geojson feature
         *   params.addFeatureByLayerId(3, newFeature)
         *   features = params.getFeaturesByLayerId(3)
         *   // features contains the new feature and will display it in the mouseover
         * })
         * ```
         */
        function beforeContentProcessed(listenerId: string, fn: (params: JMouseOverBeforeEventParams) => void): void
        
        /**
         * ***JMap.Event.MouseOver.on.afterContentProcessed***
         * 
         * This event is triggered when the map has been clicked, after the mouseover content has been calculated.
         * 
         * @param listenerId Your listener id (must be unique for all mouseover events)
         * @param fn Your listener function
         * @example ```ts
         * 
         * // Each time map is clicked, and the mousover content has been calculated
         * JMap.Event.MouseOver.on.afterContentProcessed("my-listener", params => {
         *   console.log("Mouseover content has been processed", params.content)
         * })
         * ```
         */
        function afterContentProcessed(listenerId: string, fn: (params: JMouseOverAfterEventParams) => void): void
        
        /**
         * ***JMap.Event.MouseOver.on.popupOpened***
         * 
         * This event is triggered when the popup has been opened.
         * 
         * @param listenerId Your listener id (must be unique for all mouseover events)
         * @param fn Your listener function
         * @example ```ts
         * 
         * // Each time the mouseover popup is displayed
         * JMap.Event.MouseOver.on.popupOpened("my-listener", params => {
         *   console.log("Mouseover popup has been opened", params.content)
         * })
         * ```
         */
        function popupOpened(listenerId: string, fn: (params: JMouseOverEventParams) => void): void
        
        /**
         * ***JMap.Event.MouseOver.on.popupClosed***
         * 
         * This event is triggered when the popup has been closed.
         * 
         * @param listenerId Your listener id (must be unique for all mouseover events)
         * @param fn Your listener function
         * @example ```ts
         * 
         * // Each time the mouseover popup is hidden
         * JMap.Event.MouseOver.on.popupClosed("my-listener", () => {
         *   console.log("Mouseover popup has been closed")
         * })
         * ```
         */
        function popupClosed(listenerId: string, fn: () => void): void
      }

      /**
       * ***JMap.Event.MouseOver.activate***
       * 
       * Activate the listener.
       * 
       * If the listener is already active, do nothing.
       * 
       * If the listener is inactive, it will be reactivated and will be called again ...
       * 
       * @param listenerId The listener id
       * @example ```ts
       * 
       * // activate the listener "my-mouseover-listener"
       * JMap.Event.MouseOver.activate("my-mouseover-listener")
       * ```
       */
      function activate(listenerId: string): void

      /**
       * ***JMap.Event.MouseOver.deactivate***
       * 
       * Deactivate the listener.
       * 
       * If the listener id doesn't exists or if the listener is already inactive, do nothing.
       * 
       * If the listener is active, it will be deactivated and will be ignored ...
       * 
       * @param listenerId The listener id
       * @example ```ts
       * 
       * // deactivate the listener "my-mouseover-listener"
       * JMap.Event.MouseOver.deactivate("my-mouseover-listener")
       * ```
       */
      function deactivate(listenerId: string): void

      /**
       * ***JMap.Event.MouseOver.remove***
       * 
       * Remove the listener.
       * 
       * If the listener doesn't exist, do nothing.
       * 
       * Remove the listener from JMap NG Core library. The listener is deleted and never called again after that.
       * 
       * @param listenerId The listener id
       * @example ```ts
       * 
       * // remove the listener "my-mouseover-listener"
       * JMap.Event.MouseOver.remove("my-mouseover-listener")
       * ```
       */
      function remove(listenerId: string): void
    }
  }

  /**
   * **JMap.Extension**
   * 
   * We introduced the notion of extension in JMap.
   * 
   * We designed a mecanism for our needs, that could loads optional plugins for JMap.
   * 
   * This mecanism provide a clean way to integrate in JMap your own extension plugin.
   * 
   * You can create an object that implement the interface [[JCoreExtension]], and register it
   * from this section.
   * 
   * By example you register an extension with id="***MyCompany***"".
   * 
   * You can defined your own Redux reducer that will react to all actions trigerred. In the store
   * your data will be located at ***external.MyCompany***.
   * 
   * You can defined your own JMap related services, that will be accessible at
   * this location : ***JMap.Extension.MyCompany***
   * 
   * And you also can integrate your own mouseover (for more details look in JMap.MouseOver
   * documentation).
   */
  namespace Extension {

    /**
     * ***JMap.Extension.register***
     * 
     * Register your own extension.
     * 
     * @throws Error if a parameter is not correct
     * @param extensionModel The extension model
     * @example ```ts
     * 
     * JMap.Extension.register({
     *  id: "MyExtension", // Unique id
     *  initFn: () => {
     *    // here you can start your UI component if needed
     *    console.log("JMap is started and my extension has been successfuly started")
     *  }
     * })
     * ```
     */
    function register(extension: JCoreExtension): void

    /**
     * ***JMap.Extension.isRegistered***
     * 
     * Tell if an extension has been registered or not.
     * 
     * It can be usefull to know if a JMap extension is in use or not.
     * 
     * @throws Error if extensionId format is not correct
     * @param extensionId The extension id
     * @example ```ts
     * 
     * // returns true if the JMap Document extension is in use or not
     * JMap.Extension.isRegistered("Document")
     * ```
     */
    function isRegistered(extensionId: string): boolean

    /**
     * ***JMap.Extension.getAllRegisteredIds***
     * 
     * Returns all registered extension ids.
     * 
     * @example ```ts
     * 
     * // Could returns [ "Document", "MyCustomExtension" ]
     * JMap.Extension.getAllRegisteredIds()
     * ```
     */
    function getAllRegisteredIds(): string[]

    /**
     * ***JMap.Extension.hasMouseOver***
     * 
     * Returns true if any of the currently registered extension has defined a "renderMouseOver" method.
     * 
     * @example ```ts
     * 
     * const hasMouseOver = JMap.Extension.hasMouseOver()
     * if(hasMouseOver){
     *    console.log("some extensions have defined mouseOvers")
     * }else{
     *    console.log("there is currently no extension defining mouseOvers")
     * }
     * ```
     */
    function hasMouseOver():boolean

    /**
     * ***JMap.Extension.renderMouseOver***
     * 
     * It returns all extension mouseover data for a specific layer and feature.
     * 
     * @param layer The JMap layer
     * @param feature A geoJSON feature
     * @returns an empty array if no extension is registered
     * @example ```ts
     * 
     * const feature = ...
     * // returns all extension mouseover data for the feature
     * JMap.Extension.renderMouseOver(2, feature)
     * ```
     */
    function renderMouseOver(layer: JLayer, feature: GeoJSON.Feature): Array<JExtensionMouseOver | undefined>
  }

  /**
   * **JMap.Form**
   * 
   * Here you'll find all form related methods
   */
  namespace Form {
    function getFormsMetaDataByLayerId(layerId: JId): Promise<JFormMetaData[]>
    function getElement(params: JFormElementId): Promise<JFormElement | undefined>
    function getElements(params: JFormElementIds): Promise<JFormElement[]>
    function getEntries(params: JFormGetEntriesParams): Promise<JFormElement[]>
    function createAttributeFormElement(params: JFormCreateAttributeFormElementParams): Promise<GeoJSON.Feature>
    function createExternalFormEntry(params: JFormCreateElementParams): Promise<JFormElement>
    function createSubFormEntry(params: JFormCreateElementParams): Promise<JFormElement>
    function updateAttributeFormElements(params: JFormUpdateElementsParams): Promise<JFormResult[]>
    function updateExternalFormEntries(params: JFormUpdateElementsParams): Promise<JFormElement[]>
    function updateSubFormEntries(params: JFormUpdateElementsParams): Promise<JFormElement[]>
    function deleteAttributeFormElements(params: JFormElementIds): Promise<JFormDeleteResult>
    function deleteExternalFormEntries(params: JFormElements): Promise<void>
    function deleteSubFormEntries(params: JFormElements): Promise<void>
    function hasDisplayedForm(): boolean
    function getDisplayedForm(): JForm
    function resetDisplayedForm(): void
    function setActiveTabIndex(tabIndex: number): void
    function getActiveTabIndex(): number
    function hasAttributeForm(): boolean
    function getAttributeForm(): JForm
    function getExternalForms(): JForm[]
    function getSubForms(): JForm[]
    function openCreationDialogForLayer(layerId: JId, geometry: GeoJSON.Geometry): Promise<JFormMetaData[]>
    function openUpdateDialogForLayer(layerId: JId, elements: JFormElement[]): Promise<JFormMetaData[]>
    function closeCurrentDisplayedDialog(): void
    function getFormValues(form: JForm, initialData?: JAttributeValueByName): JAttributeValueByName
    function setFormValues(form: JForm, attributeValueByName: JAttributeValueByName): JFormErrors
    function submit(): Promise<JFormSubmitResult>
    function canDeleteCurrentElements(): boolean
    function deleteCurrentElements(): Promise<JFormDeleteResult>
    function hasDisplayedFormAPhotoField(): boolean
    function getDisplayedFormPhotos(): JPhoto[]
    function addDisplayedFormPhoto(photo: JPhoto): JId
    function updateDisplayedFormPhoto(params: JFormPhotoUpdate): void
    function removeDisplayedFormPhotoById(photoId: JId): void
    function getNextViewId(): number
    function incrementNextViewId(): void
    function processRule(rule: any, data: any): any

    /**
     * ***JMap.Form.getDefaultValues***
     * 
     * Returns the default data values of the form.
     * 
     * The result is an object where :
     *  - key is the attribute id
     *  - value the default value
     * 
     * @param form A JMap form
     * @param initialData Initial data. If provided, it will set the default data then overwrite with initial values.
     * @returns a key/value object
     * @example ```ts
     * 
     * const form = ...
     * const defaultValues = JMap.Form.getDefaultValues(form)
     * ```
     */
    function getDefaultValues(formMetaData: JFormMetaData, initialData?: JAttributeValueByName): JAttributeValueByName

    /**
     * ***JMap.Form.getPreparedData***
     * 
     * This function prepare the data, it returns a copy object containing the values formatted in a way that fit the server needs.
     * 
     * It's not mandatory to use this function but it's highly recommended to use it before :
     * - sending them to the server ()
     * - validating them using JMap.Form.getPreparedData (change values to fit the )
     * 
     * It returns another object without modifing the passed object.
     * 
     * Use to set the correct type (number if a string number is passed), and many other things.
     * 
     * @param form A JMap form
     * @param data The form data
     * @returns the prepared data
     * @example ```ts
     * 
     * const data = ...
     * const form = ...
     * const preparedData = JMap.Form.getPreparedData(form, data)
     * const errors = JMap.Form.validateData(form, preparedData)
     * ```
     */
    function getPreparedData(formMetaData: JFormMetaData, data: JAttributeValueByName): JAttributeValueByName

    /**
     * ***JMap.Form.validateData***
     * 
     * Return errors for the given form id and data.
     * 
     * If no error validation, it returns an empty object.
     * 
     * The result is an object where :
     *  - key is the attribute id
     *  - value is the validation error message, translated in the user locale
     * 
     * @param form A JMap form
     * @param data The form data
     * @returns an empty object if no validation error, else an object containing error messages grouped by attribute id.
     * @example ```ts
     * 
     * const form = ...
     *  const data = {
     *   name: "Jack"
     * }
     * // return {} if no error, else could returns { age: "required field" }
     * const errors = JMap.Form.validateData(form, data)
     * ```
     */
    function validateData(formMetaData: JFormMetaData, data: JAttributeValueByName): JFormErrors
  }
}
