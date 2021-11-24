declare interface JMapInteractor {
  init(map: mapboxgl.Map): void
  activate(): void
  deactivate(): void
  terminate(): void
}

declare type JMapModificationTypes = "" | "center" | "scale"

declare type JMapPosition = "top-left" | "top-right" | "bottom-left" | "bottom-right"

declare type JDistanceUnit = "millimeters" | "centimeters" | "meters" | "kilometers" | "inches" | "feet" | "yards" | "miles" | "nauticalmiles"

declare type JMapRasterSchemeType = "tms" | "xyz"

declare interface JLatitudeAndZoom {
  zoom?: number
  latitude?: number
}

declare interface JGetRenderedFeaturesParams {
  geoFilter?: JLocation | JBoundaryBox | JCircle
  keepAllTiles?: boolean
}

declare interface JGetSourceFeaturesParams {
  viewport?: GeoJSON.Feature<GeoJSON.Polygon>
  keepAllTiles?: boolean
}

declare interface JMapEventParams {
  map: mapboxgl.Map,
  mapEvent: any
}

declare interface JMapEventLocationParams extends JMapEventParams {
  location: JLocation
}

declare interface JMapEventZoomParams extends JMapEventParams {
  zoom: number
}

declare interface JMapEventRotateParams extends JMapEventParams {
  bearing: number
}

declare interface JMapEventPitchParams extends JMapEventParams {
  pitch: number
}

declare interface JMapEventLayerParams extends JMapEventLocationParams {
  layerId: JId
}

declare interface JMapEventFeaturesParams extends JMapEventLayerParams {
  features: any[]
}

declare interface JMapEventContainerReadyParams {
  container: HTMLElement
}

declare interface JMapEventContainerResizedParams {
  width: number
  height: number
  container: HTMLElement
}

declare interface JMapLayerSelectionChanges {
  hasChanged: boolean
  addedFeatures: GeoJSON.Feature[]
  removedFeatures: GeoJSON.Feature[]
}

declare interface JMapEventSelectionChangedParams {
  oldSelection: JMapSelection
  newSelection: JMapSelection
  changesByLayerId: { [layerId: string]: JMapLayerSelectionChanges }
}

declare type JMapSelection = {
  [ key in JId ]: GeoJSON.Feature[]
}

declare interface JMapLayerVisibilityStatus {
  layerId: JId
  layerName: string
  isRendered: boolean
  visibilityProperty: boolean
  parentVisibility: boolean
  scaleVisibility: boolean
  extentVisibility: boolean
}

declare type JMapLayersVisibilityStatus = {
  [ key in JId ] : JMapLayerVisibilityStatus
}

declare interface JProjection {
  code: string
  name: string
}

declare interface JMapFeatureAttributeValues {
  featureId: JId
  [ attributeId: string ]: any
}

declare interface JMapAttributeSearch {
  layerId: JId
  attributeName: string
  attributeValue: any | any[]
  showMapPopup?: boolean
}

declare interface JMapNavigationStep{
  center: JLocation
  zoom: number
  bearing: number
  pitch: number
}

/**
 *  **JMapBoxEventData**
 * 
 * This interface describe optionnal data we can pass to MapBox events
 * in order to transport usefull information while consuming the events in your application
 * 
 * 
 */
declare interface JMapBoxEventData {
  /**
   * **stopJMapEventPropagation**
   * 
   * if true will prevent JMap event to be fired
   * 
   */
  stopJMapEventPropagation?: boolean
  /**
   * **preventNavigationStepPush**
   * 
   * Used in the context of programmatic navigation (ex: while stepping back in the navigation history)
   * if true it will prevent navigation destination to be pushed in the Navigation History stack
   * 
   */
  preventNavigationStepPush?: boolean
}

declare interface JMapMapboxLayerStyleDefinition {
  styleLayer: mapboxgl.Layer
  borderStyleLayer?: mapboxgl.Layer
}

declare interface JMapAddMapboxLayerConfigurationForJmapLayerParams {
  jmapLayerId: JId
  beforeJmapLayerId?: JId
  beforeMapboxLayerId?: string
  baseStyle: JMapMapboxLayerStyleDefinition
  // TODO: add support for thematics, selections, etc
}

declare interface JMapNavigateToParams extends JPanAndZoomOptions {
  center: JLocation
  zoom: number
  bearing: number
  pitch: number
}

declare interface JMapPulsingDotColor {
  red: number
  green: number
  blue: number
  alpha?: number
}

declare interface JMapFlashLocationParams {
  dotColor?: JMapPulsingDotColor
  haloColor?: JMapPulsingDotColor
  size?: number
  delay?: number
  fitFeatures?: boolean
  panAndZoomOptions?: JPanAndZoomOptions
}

declare interface JBasemap {
  id: string
  label: string
  tileUrls: string[]
  previewImageAsUrlOrBase64?: string
  scheme?: JMapRasterSchemeType
  minzoom?: number
  maxzoom?: number
  tileSize?: number
  extent?: JBoundaryBox
}

declare interface JZoomOptions {
  /**
   * If true will animate the change
   */
  animate: boolean
  /**
   * Zoom padding top in pixel
   */
  paddingTop: number
  /**
   * Zoom padding left in pixel
   */
  paddingLeft: number
  /**
   * Zoom padding right in pixel
   */
  paddingRight: number
  /**
   * Zoom padding bottom in pixel
   */
  paddingBottom: number
  /**
   * Zoom max zoom level
   */
  maxZoom?: number
}

declare interface JPanAndZoomOptions extends Partial<JZoomOptions> {
  /**
   * Event related options
   */
  mapBoxEventData?: JMapBoxEventData
}

declare interface JCoreMapOptions {
  /**
   * When the JMap Core library start it will create or use an existing div container in which the map will be inserted into.
   *
   * By default the div container id is "***jmap-map***", but you can set the id of your choice like that :
   * ```html
   * <html>
   *   ...
   *   <body>
   *     <script type="text/javascript">
   *       window.JMAP_OPTIONS = {
   *         ...
   *         map: {
   *           containerId: "my-custom-container-id"
   *         }
   *       }
   *     </script>
   *     <div id="my-custom-container-id"></div>
   *  </body>
   * </html>
   * ```
   *
   * In the above example the map will be inserted in the div having "my-custom-container-id" as id. You need to set the width and the height of this div by yourself.
   * 
   * If no container is found in the DOM with the specified id, JMap Core library will create and append it automatically in the body element of the web page.
   */
  containerId?: string

  /**
   * If a mapbox token is set through the JMap Admin interface,
   * the JMap Core library will use it automatically, nothing else to do for you.
   * 
   * The Mapbox token is used by JMap in order to fully use Mapbox capabilities
   * like displaying a mapbox base maps.
   * 
   * But if no token is set in JMap Admin, or if you want to use
   * the mapbox token of your choice, you have to set the "***mapboxToken***" parameter :
   * 
   * ```html
   * <html>
   *   ...
   *   <body>
   *     <script type="text/javascript">
   *       window.JMAP_OPTIONS = {
   *         ...
   *         map: {
   *           mapboxToken: "dfqwdhjgqdhdh4567sjdvhbh"
   *         }
   *       }
   *     </script>
   *     ...
   *   </body>
   * </html>
   * ```
   */
  mapboxToken?: string

  /**
   * By default the Map Rotation control is not visible.
   * 
   * But if ***mapRotationControlVisible*** is true, it will be displayed on the map.
   * 
   * ```html
   * <html>
   *   ...
   *   <body>
   *     <script type="text/javascript">
   *       window.JMAP_OPTIONS = {
   *         ...
   *         map: {
   *           mapRotationControlVisible: true,
   *         }
   *       }
   *     </script>
   *     ...
   *   </body>
   * </html>
   * ```
   */
  mapRotationControlVisible?: boolean

  /**
   * You can set the initial rotation of the map by setting the ***rotation*** parameter. This parameter will have the priority over bearing if both parameters are specified.
   * By example if you want the map to open with a clockwise rotation of 90 degree :
   * 
   * ```html
   * <html>
   *   ...
   *   <body>
   *     <script type="text/javascript">
   *       window.JMAP_OPTIONS = {
   *         ...
   *         map: {
   *           rotation: 90,
   *         }
   *       }
   *     </script>
   *     ...
   *   </body>
   * </html>
   * ```
   */
  rotation?: number
  
  /**
   * You can set the initial rotation of the map by setting the ***bearing*** parameter. This parameter will be ignored if rotation is specified.
   * By example if you want the map to open with a anticlockwise rotation of 90 degree :
   * 
   * ```html
   * <html>
   *   ...
   *   <body>
   *     <script type="text/javascript">
   *       window.JMAP_OPTIONS = {
   *         ...
   *         map: {
   *           bearing: 90,
   *         }
   *       }
   *     </script>
   *     ...
   *   </body>
   * </html>
   * ```
   */
   bearing?: number

  /**
   * By default the Navigation History control is not visible.
   * 
   * But if ***navigationHistoryControlVisible*** is true, it will be displayed on the map.
   * 
   * ```html
   * <html>
   *   ...
   *   <body>
   *     <script type="text/javascript">
   *       window.JMAP_OPTIONS = {
   *         ...
   *         map: {
   *           navigationHistoryControlVisible: true,
   *         }
   *       }
   *     </script>
   *     ...
   *   </body>
   * </html>
   * ```
   */
  navigationHistoryControlVisible?: boolean

  /**
   * By default the scale control panel it is not visible.
   * 
   * But if ***scaleControlVisible*** is true, it will be displayed on the map.
   * 
   * ```html
   * <html>
   *   ...
   *   <body>
   *     <script type="text/javascript">
   *       window.JMAP_OPTIONS = {
   *         ...
   *         map: {
   *           scaleControlVisible: true,
   *         }
   *       }
   *     </script>
   *     ...
   *   </body>
   * </html>
   * ```
   */
  scaleControlVisible?: boolean

  /**
   * You can choose the position of the scale control on the map.
   * 
   * Use a value in : "**top-left**", "**top-right**", "**bottom-left**", or "**bottom-right**"
   * 
   * ```html
   * <html>
   *   ...
   *   <body>
   *     <script type="text/javascript">
   *       window.JMAP_OPTIONS = {
   *         ...
   *         map: {
   *           scaleControlPosition: "bottom-right"
   *         }
   *       }
   *     </script>
   *     ...
   *   </body>
   * </html>
   * ```
   */
  scaleControlPosition?: JMapPosition

  /**
   * This is the unit in which the scale control panel will display the data.
   * 
   * ```html
   * <html>
   *   ...
   *   <body>
   *     <script type="text/javascript">
   *       window.JMAP_OPTIONS = {
   *         ...
   *         map: {
   *           scaleControlUnit: "imperial"
   *         }
   *       }
   *     </script>
   *     ...
   *   </body>
   * </html>
   * ```
   */
  scaleControlUnit?: "imperial" | "metric" | "nautical"

  /**
   * You can set the location of the center of the map by setting the ***center*** parameter. By example if you want to center the map on the city of Ottawa :
   * 
   * ```html
   * <html>
   *   ...
   *   <body>
   *     <script type="text/javascript">
   *       window.JMAP_OPTIONS = {
   *         ...
   *         map: {
   *           center: {
   *             x: -75.6981200,
   *             y: 45.4111700
   *           }
   *         }
   *       }
   *     </script>
   *     ...
   *   </body>
   * </html>
   * ```
   */
  center?: JLocation

  /**
   * You can zoom to a custom level by setting the "***zoom***" variable. Here an example :
   * 
   * ```html
   * <html>
   *   ...
   *   <body>
   *     <script type="text/javascript">
   *       window.JMAP_OPTIONS = {
   *         ...
   *         map: {
   *           zoom: 4.32
   *         }
   *       }
   *     </script>
   *     ...
   *   </body>
   * </html>
   * ```
   */
  zoom?: number

  /**
   * The map will zoom and pan to fit exactly the extent :
   * 
   * ```html
   * <html>
   *   ...
   *   <body>
   *     <script type="text/javascript">
   *       window.JMAP_OPTIONS = {
   *         ...
   *         map: {
   *           extent: {
   *             sw: { x: 12.4, y: 45.34 },
   *             ne: { x: 24.4, y: 55.34 }
   *           }
   *         }
   *       }
   *     </script>
   *     ...
   *   </body>
   * </html>
   * ```
   */
  extent?: JBoundaryBox

  /**
   * Will execute a search by attribute on the layer, then pan and zoom to display the result.
   * Check for features having the property equals to the value. If showMapPopup is true and that
   * only one __attributeValue__ is specified and that only __one__ feature is found,
   * the feature's Mouseover info will be displayed if defined
   * 
   * ```html
   * <html>
   *   ...
   *   <body>
   *     <script type="text/javascript">
   *       window.JMAP_OPTIONS = {
   *         ...
   *         map: {
   *           search: {
   *             layerId: 2,
   *             attributeName: "PEC",
   *             attributeValue: "RT 2012",
   *             showMapPopup: true
   *           }
   *         }
   *       }
   *     </script>
   *     ...
   *   </body>
   * </html>
   * ```
   */
  search?: JMapAttributeSearch

  /**
   * You can execute a custom piece of code at runtime, after the map is ready,
   * and only one time at JMap Core library startup.
   * 
   * For that you have to set the "***onStartupMapReadyFn***" parameter which is a function.
   * Here an example that will display a message "Hello the map is ready !" in the console :
   * 
   * ```html
   * <html>
   *   ...
   *   <body>
   *     <script type="text/javascript">
   *       window.JMAP_OPTIONS = {
   *         ...
   *         map: {
   *           onStartupMapReadyFn: map => {
   *             console.log("Hello the map is ready !", map)
   *           }
   *         }
   *       }
   *     </script>
   *     ...
   *   </body>
   * </html>
   * ```
   */
  onStartupMapReadyFn?: (map: mapboxgl.Map) => void
}