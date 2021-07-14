import { Store } from "redux"
import { Point, LineString, Polygon, Feature, FeatureCollection, MultiLineString } from "geojson"
import { Map } from "mapbox-gl"

export interface JCoreService extends JCoreMainService {
  Project: JProjectService
  Layer: JLayerService
  User: JUserService
  Language: JLanguageService
  Feature: JFeatureService
  Map: JMapService
  Geolocation: JGeolocationService,
  Geometry: JGeometryService,
  MouseOver: JMouseOverService
  Form: JFormService
  Query: JQueryService
  Event: JEventService
  History: JHistoryService
  Extension: JExtensionService
  Server: JServerService
  Photo: JPhotoService
}

export interface JPhotoService {
  displayFeaturePhotosPopup(layerId: number, featureId: number): Promise<void>
  displayPhotosPopup(photos: JPhoto[], params?: JPhotoOpenPopupParams): void
  closePhotoPopup(): void
}

export interface JFeatureService {
  getById(layerId: JId, featureId: JId): Promise<GeoJSON.Feature>
  getByIds(layerId: JId, featureIds: JId[]): Promise<GeoJSON.Feature[]>
  geometryUpdateById(params: JFeatureGeometryUpdateParams): Promise<GeoJSON.Feature>
  deleteById(layerId: JId, featureId: JId): Promise<void>
  deleteByIds(layerId: JId, featureIds: JId[]): Promise<JFeatureDeleteByIdsResult>
}

export interface JCoreMainService {
  getVersion(): string
  getApiVersion(): string
  getDataStore(): Store<JCoreState> | undefined
  getRestUrl(): string
  openDocumentation(): void
  getOS(): JOperatingSystem
  loadJSFile(fileUrl: string): Promise<void>
}

export interface JGeolocationService {
  isSupportedByBrowser(): boolean
  isEnabled(): boolean
  getMyLocation(): Promise<JLocation>
  goToMyLocation(options?: JPanAndZoomOptions): Promise<JLocation>
}

export interface JQueryService {
  getAllGroups(): JQueryGroup[]
  groupExist(groupId: number): boolean
  getQueriesByLayerId(layerId: number): JQuery[]
  getQueryByLayerId(layerId: number, queryId: string): JQuery
  getQueriesByGroupId(groupId: number): JQuery[]
  getQueryByGroupId(groupId: number, queryId: string): JQuery
  queryExist(groupId: number, queryId: string): boolean
  fetchFeatures(layerId: number, queryId: string, data: any): Promise<Feature[]>
}

export interface JEventService {
  Main: JCoreEventModule
  Layer: JLayerEventModule
  Language: JLanguageEventModule
  Map: JMapEventModule
  Photo: JPhotoEventModule
  Project: JProjectEventModule
  User: JUserEventModule
  Feature: JFeatureEventModule
  Form: JFormEventModule
  Extension: JExtensionEventModule
  MouseOver: JMouseOverEventModule
}

export type JEventFunction = (params?: any) => void

export interface JEventListener {
  id: string
  fn: JEventFunction
}

export interface JEventModule {
  on: {
    [method: string]: (listenerId: string, fn: JEventFunction) => void
  }
  existById(listenerId: string): boolean
  activate(listenerId: string): void
  deactivate(listenerId: string): void
  remove(listenerId: string): void
}

export interface JFormEventModule extends JEventModule {
  on: {
    submit(listenerId: string, fn: (params: JFormSubmitEventParams) => void): void
    deleteElements(listenerId: string, fn: (params: JFormDeleteEventParams) => void): void
  }
}

export interface JMouseOverEventModule extends JEventModule {
  on: {
    beforeContentProcessed(listenerId: string, fn: (params: JMouseOverBeforeEventParams) => void): void
    afterContentProcessed(listenerId: string, fn: (params: JMouseOverAfterEventParams) => void): void
    popupOpened(listenerId: string, fn: (params: JMouseOverEventParams) => void): void
    popupClosed(listenerId: string, fn: () => void): void
  }
}

export interface JExtensionEventModule extends JEventModule {
  on: {
    registration(listenerId: string, fn: (params: JExtensionEventParams) => void): void
    beforeUnregistration(listenerId: string, fn: (params: JExtensionEventParams) => void): void
    unregistration(listenerId: string, fn: (params: JExtensionEventParams) => void): void
  }
}

export interface JProjectEventModule extends JEventModule {
  on: {
    projectChange(listenerId: string, fn: (params: JProjectEventParams) => void): void
    projectsChange(listenerId: string, fn: (params: JProjectAllEventParams) => void): void
    preDeactivation(listenerId: string, fn: (params: JProjectEventParams) => void): void
    postDeactivation(listenerId: string, fn: (params: JProjectEventParams) => void): void
  }
}

export interface JLanguageEventModule extends JEventModule {
  on: {
    localeChange(listenerId: string, fn: (params: JLanguageEventLocaleChangeParams) => void): void
  }
}

export interface JLayerEventModule extends JEventModule {
  on: {
    layersChange(listenerId: string, fn: (params: JLayerEventChangeParams) => void): void
    thematicVisibilityChange(listenerId: string, fn: (params: JLayerEventThematicVisibilityParams) => void): void
    visibilityChange(listenerId: string, fn: (params: JLayerEventVisibilityParams) => void): void
    selectabilityWillChange(listenerId: string, fn: (params: JLayerEventSelectabilityParams) => void):void
    layerDeletion(listenerId: string, fn: (params: JLayerEventParams) => void): void
  }
}

export interface JMapEventModule extends JEventModule {
  on: {
    mapLoad(listenerId: string, fn: (params: JMapEventLoadedParams) => void): void
    mapDestroy(listenerId: string, fn: () => void): void
    moveStart(listenerId: string, fn: (params: JMapEventParams) => void): void
    move(listenerId: string, fn: (params: JMapEventParams) => void):  void
    moveEnd(listenerId: string, fn: (params: JMapEventParams) => void): void
    mouseMove(listenerId: string, fn: (params: JMapEventLayerParams) => void): void
    mouseMoveOnLayer(listenerId: string, fn: (params: JMapEventFeaturesParams) => void): void
    mouseEnter(listenerId: string, fn: (params: JMapEventFeaturesParams) => void): void
    mouseLeave(listenerId: string, fn: (params: JMapEventLayerParams) => void): void
    click(listenerId: string, fn: (params: JMapEventLocationParams) => void): void
    zoomStart(listenerId: string, fn: (params: JMapEventZoomParams) => void): void
    zoom(listenerId: string, fn: (params: JMapEventZoomParams) => void): void
    zoomEnd(listenerId: string, fn: (params: JMapEventZoomParams) => void): void
    rotateStart(listenerId: string, fn: (params: JMapEventRotateParams) => void): void
    rotate(listenerId: string, fn: (params: JMapEventRotateParams) => void): void
    rotateEnd(listenerId: string, fn: (params: JMapEventRotateParams) => void): void
    pitchStart(listenerId: string, fn: (params: JMapEventPitchParams) => void): void
    pitch(listenerId: string, fn: (params: JMapEventPitchParams) => void): void
    pitchEnd(listenerId: string, fn: (params: JMapEventPitchParams) => void): void
    containerReady(listenerId: string, fn: (params: JMapEventContainerReadyParams) => void): void
    containerResized(listenerId: string, fn: (params: JMapEventContainerResizedParams) => void): void
    selectionChanged(listenerId: string, fn: (params: JMapEventSelectionChangedParams) => void): void
  }
}

export interface JPhotoEventModule extends JEventModule {
  on: {
    containerCreated(listenerId: string, fn: (params: JPhotoEventContainerCreatedParams) => void): void
  }
}

export interface JFeatureEventModule extends JEventModule {
  on: {
    deletion(listenerId: string, fn: (params: JFeatureEventDeleteParams) => void): void
    geometryChanged(listenerId: string, fn: (params: JFeatureEventGeometryUpdateParams) => void): void
  }
}

export interface JUserEventModule extends JEventModule {
  on: {
    sessionChanged(listenerId: string, fn: (params: JUserEventSessionChangedParams) => void): void
  }
}

export interface JCoreEventModule extends JEventModule {
  on: {
    coreReady(listenerId: string, fn: () => void): void
  }
}

export interface JCoreState {
  map: JMapState
  project: JProjectState
  layer: JLayerState
  user: JUserState
  language: JLanguageState
  photo: JPhotoState
  query: JQueryState
  geolocation: JGeolocationState
  form: JFormState
  server: JServerState
  external?: any
}

export interface JFormState {
  layerId: JId
  formMetaDataById: JFormMetaDataById
  isLoadingLayer: boolean
  hasLoadingLayerError: boolean
  isDeletingElement: boolean
  isSubmitting: boolean
  submitErrors: string[]
  activeTabIndex: number
  attributeForm: JForm | undefined
  externalForms: JForm[]
  subForms: JForm[]
}

export interface JGeolocationState {
  isLocationDisplayed: boolean
  isEnabled: boolean
  isSupported: boolean
  currentLocation: JLocation | undefined
}

export interface JMapState {
  pitch: number
  bearing: number
  isLoaded: boolean
  hasFirstLoaded: boolean
  navigationHistory: JMapNavigationStep[]
  center: JLocation
  zoom: number
  scale: number
  boundaryBox: JBoundaryBox
  activeBasemapId: string | undefined
  basemaps: JBasemap[]
  selection: JMapSelection
  jmapLayerIdsSupportedByMapbox: number[]
  scaleControlPosition: JMapPosition
  distanceUnit: JDistanceUnit
  isNavigationHistoryControlVisible:boolean
  isScaleControlVisible: boolean
  isMapRotationControlVisible: boolean
  isInfoControlVisible: boolean
  isInfoControlExpanded: boolean
  defaultZoomOptions: JZoomOptions
  containerWidth: number
  containerHeight: number
}

export interface JProjectState {
  isLoading: boolean
  hasLoadingError: boolean
  allProjects: JProject[]
  selectedProject: JProject
  disableProjectChange: boolean
}

export interface JLayerState {
  isLoading: boolean
  hasLoadingError: boolean
  metadataSchema: JLayerMetadataSchemaItem[]
  tree: JLayerTree
  allById: { [treeElementId: string]: JLayerTreeElement }
  orderedLayerIds: number[]
  vectorLayerIds: JId[]
}

export interface JPhotoState {
  selectedPhotoId: JId | undefined
  photos: JPhoto[]
  isPopupOpened: boolean
  isLoading: boolean
  hasLoadingError: boolean
}

export interface JQueryState {
  groups: JQueryGroup[]
  queriesByLayerId: { [ layerId: number ]: JQuery[] }
}

export interface JUserState {
  identity: JUserIdentity
  token: string
  informations: JUserInfo[]
}

export interface JLanguageState {
  locale: JLocale
}

export interface JServerState extends JServerInfo {
  isLoading: boolean
  hasLoadingError: boolean
}

export type JHistoryListener = (oldValue: string | undefined, newValue: string | undefined) => void

export interface JFormService {
  // REPO METHODS
  getFormsMetaDataByLayerId(layerId: JId): Promise<JFormMetaData[]>
  getElement(params: JFormElementId): Promise<JFormElement | undefined>
  getElements(params: JFormElementIds): Promise<JFormElement[]>
  getEntries(params: JFormGetEntriesParams): Promise<JFormElement[]>
  createAttributeFormElement(params: JFormCreateAttributeFormElementParams): Promise<GeoJSON.Feature>
  createExternalFormEntry(params: JFormCreateElementParams): Promise<JFormElement>
  createSubFormEntry(params: JFormCreateElementParams): Promise<JFormElement>
  updateAttributeFormElements(params: JFormUpdateElementsParams): Promise<JFormResult[]>
  updateExternalFormEntries(params: JFormUpdateElementsParams): Promise<JFormElement[]>
  updateSubFormEntries(params: JFormUpdateElementsParams): Promise<JFormElement[]>
  deleteAttributeFormElements(params: JFormElementIds): Promise<JFormDeleteResult>
  deleteExternalFormEntries(params: JFormElements): Promise<void>
  deleteSubFormEntries(params: JFormElements): Promise<void>
  // DIALOG METHODS (UI)
  hasDisplayedForm(): boolean
  getDisplayedForm(): JForm
  resetDisplayedForm(): void
  setActiveTabIndex(tabIndex: number): void
  getActiveTabIndex(): number
  hasAttributeForm(): boolean
  getAttributeForm(): JForm
  getExternalForms(): JForm[]
  getSubForms(): JForm[]
  openCreationDialogForLayer(layerId: JId, geometry: GeoJSON.Geometry): Promise<JFormMetaData[]>
  openUpdateDialogForLayer(layerId: JId, elements: JFormElement[]): Promise<JFormMetaData[]>
  closeCurrentDisplayedDialog(): void
  getFormValues(form: JForm, initialData?: JAttributeValueByName): JAttributeValueByName
  setFormValues(form: JForm, attributeValueByName: JAttributeValueByName): JFormErrors
  submit(): Promise<JFormSubmitResult>
  canDeleteCurrentElements(): boolean
  deleteCurrentElements(): Promise<JFormDeleteResult>
  getNextViewId(): number
  incrementNextViewId(): void
  processRule(rule: any, data: any): any
  // PHOTOS
  hasDisplayedFormAPhotoField(): boolean
  getDisplayedFormPhotos(): JPhoto[]
  addDisplayedFormPhoto(photo: JPhoto): JId
  updateDisplayedFormPhoto(params: JFormPhotoUpdate): void
  removeDisplayedFormPhotoById(photoId: JId): void
  // PURE FORM METHODS (not integrated, also used by query service)
  getDefaultValues(formMetaData: JFormMetaData, initialData?: JAttributeValueByName): JAttributeValueByName
  getPreparedData(formMetaData: JFormMetaData, data: JAttributeValueByName): JAttributeValueByName
  validateData(formMetaData: JFormMetaData, data: JAttributeValueByName): JFormErrors
}

export interface JHistoryService {
  transformSearchParamsIntoHashParams(paramNames: string | string[]): void
  goBack(): void
  goForward(): void
  getHashParameter(parameterName: string): string
  getHashParameters(): { [key: string]: string }
  pushHashParameters(parameterName: string, parameterValue: string): void
  popHashParameters(parameterName: string): void
  onParameterChange(parameterName: string, fn: JHistoryListener): string
  removePropertyChangeListener(listenerId: string): void
}

export interface JGeometryService {
  checkLocation(location: JLocation): void
  isValidLocation(location: JLocation | undefined): boolean
  isValidBbox(bbox: JBoundaryBox | undefined): boolean
  isValidGeometry(geometry: any): boolean
  checkCircle(circle: JCircle): void
  checkPolygon(polygon: JPolygon): void
  checkLine(line: JLine): void
  checkBbox(bbox: JBoundaryBox): void
  getArea(feature: Feature): number
  getLineLength(feature: Feature<LineString> | Feature<MultiLineString>, units?: JGeometryUnit | JDistanceUnit): number
  getCentroid(feature: Feature | FeatureCollection): Feature<Point>
  getFeatureFromLine(line: JLine): Feature<LineString>
  getPolygonFeatureFromCircle(circle: JCircle, units?: JGeometryUnit): Feature<Polygon>
  getFeatureFromPolygon(polygon: JPolygon): Feature<Polygon>
  getBboxFromFeature(polygon: Feature): JBoundaryBox
  getBboxFromFeatures(features: Feature[]): JBoundaryBox
  getBboxFromPolygon(polygon: JPolygon): JBoundaryBox
  getBboxFromLine(line: JLine): JBoundaryBox
  getPolygonFeatureFromBbox(boundaryBox: JBoundaryBox): Feature<Polygon>
  bboxIntersect(bb1: JBoundaryBox, bb2: JBoundaryBox): boolean
  polygonIntersect(feature1: Feature<Polygon>, feature2: Feature): boolean
  lineIntersect(feature1: Feature<LineString>, feature2: Feature): boolean
  getDistance(p1: JPoint | JLocation, p2: JPoint | JLocation): number // in km
  getFeatureCollection(features: Feature[] | JLocation[] | JPoint[]): FeatureCollection
  getCircleFeature(center: JPoint | JLocation, radius: number): Feature<Polygon> // radius in km
  getPolygonFeature(coordinates: JPoint[], closeCoordinates?: boolean): Feature<Polygon>
  isGeometryTypeValidForLayer(layerId: JId, geometryType: GeoJSON.GeoJsonGeometryTypes): boolean
}

export interface JMapService {
  Interaction: JMapInteractionService
  Filter: JMapFilterService
  Selection: JMapSelectionService
  Basemap: JMapBasemapService
  getMap(): Map
  getMapJSLib(): any
  getDomContainerId(): string
  getAllDistanceUnits(): JDistanceUnit[]
  getDistanceUnit(): JDistanceUnit
  setDistanceUnit(distanceUnit: JDistanceUnit): void
  isMapCreated(): boolean
  isMapLoaded(): boolean
  getExtent(): JBoundaryBox
  getCenter(): { x: number, y: number }
  getZoom(): number
  isScaleControlVisible(): boolean
  setScaleControlVisibility(isVisible: boolean, position?: JMapPosition): void
  setScaleControlUnits(units: "imperial" | "metric" | "nautical"): void
  setScaleControlPosition(position: JMapPosition): void
  getScaleControlPosition(): JMapPosition
  isNavigationHistoryControlVisible(): boolean
  setNavigationHistoryControlVisibility(isVisible: boolean): void
  isMapRotationControlVisible(): boolean
  setMapRotationControlVisibility(isVisible: boolean): void
  isMapInfoControlVisible(): boolean
  setMapInfoControlVisibility(isVisible: boolean): void
  isMapInfoControlExpanded(): boolean
  setMapInfoControlExpansion(isExpanded: boolean):void
  isLayerRendered(layerId: number): boolean
  getLayersVisibilityStatus(): JMapLayersVisibilityStatus
  getLayersVisibilityStatusAsArray(): JMapLayerVisibilityStatus[]
  getMapboxSupportedJMapLayerIds(): number[]
  getMapboxSupportedJMapLayerBefore(layerId: number): number | undefined
  getMapboxSupportedJMapLayerAfter(layerId: number): number | undefined
  addMapboxLayerConfigurationForJmapLayer(params: JMapAddMapboxLayerConfigurationForJmapLayerParams): void
  refreshLayerById(layerId: JId): void
  getRenderedJMapLayerIds(): number[]
  getRenderedFeatures(layerId: number, filter?: JLocation | JBoundaryBox | JCircle): Feature[]
  getRenderedFeaturesAttributeValues(layerId: number, filter?: JLocation | JBoundaryBox | JCircle): JMapFeatureAttributeValues[]
  getPitch(): number
  getBearing(): number
  getNavigationHistoryStack(): JMapNavigationStep[]
  undoLastNavigationStep(): JMapNavigationStep | undefined
  setPitch(pitch: number): void
  setBearing(bearing: number): void
  panTo(center: JLocation, stopJMapEventPropagation?: boolean): void
  zoomTo(zoom: number, options?: JPanAndZoomOptions): void
  zoomToRect(bbox: JBoundaryBox, options?: JPanAndZoomOptions): void
  panAndZoomTo(center: JLocation, zoom: number, options?: JPanAndZoomOptions): void
  setDefaultZoomOptions(options?: Partial<JZoomOptions>): void
  navigateTo(params: JMapNavigateToParams): void
  fitFeatures(features: Feature[], options?: JPanAndZoomOptions): void
  flashLocation(location: JLocation, options?: JMapFlashLocationParams): void
  flashLocations(locations: JLocation[], options?: JMapFlashLocationParams): void
  clearFlashingLocations():void
  getResolution(params?: JLatitudeAndZoom): number
  getScale(params?: JLatitudeAndZoom): string
  getScaleDenominator(params?: JLatitudeAndZoom): number
  setScale(scaleDenominator: number): number
  getZoomFromScale(scaleDenominator: number, latitude?: number): number
  getMouseCursor(): string
  setMouseCursor(cursor: string): void
}

export interface JMapBasemapService {
  getAllIds(): string[]
  isActive(): boolean
  isMapboxId(basemapId: string): boolean
  isOSMId(basemapId: string): boolean
  getActiveId(): string | undefined
  existsById(basemapId: string): boolean
  getById(basemapId: string): JBasemap
  activateById(basemapId: string | undefined): void
  deactivate(): void
  add(basemap: JBasemap, activate?: boolean, beforeId?: string): void
  removeById(basemapId: string): void
  removeByIds(basemapIds: string[]): void
}

export interface JMapInteractionService {
  addInteractor(name: string, interactor: JMapInteractor, active?: boolean): void
  terminateInteractorById(interactorId: string): void
  getAllInteractorIds(): string[]
  getActiveInteractorId(): string
  activateInteractorById(interactorId: string, force?: boolean): void
}

export interface JMapSelectionService {
  isEmpty(): boolean
  isEmptyByLayerId(layerId: JId): boolean
  getSelectionCentroid(selection: JMapSelection): JLocation
  getSelectedFeatures(): JMapSelection
  getSelectedFeaturesForLayer(layerId: number): Feature[]
  getSelectedFeatureIdsForLayer(layerId: number): string[]
  selectOnOneLayerAtLocation(layerId: number, location: JLocation, params?: JMapSelectionParams | undefined): Feature[]
  selectOnOneLayerFromCircle(layerId: number, circle: JCircle, params?: JMapSelectionParams | undefined): Feature[]
  selectOnOneLayerFromLine(layerId: number, line: JLine, params?: JMapSelectionParams | undefined): Feature[]
  selectOnOneLayerFromPolygon(layerId: number, polygon: JPolygon, params?: JMapSelectionParams | undefined): Feature[]
  selectOnAllLayersAtLocation(location: JLocation, params?: JMapSelectionParams | undefined): JMapSelection
  selectOnAllLayersFromCircle(circle: JCircle, params?: JMapSelectionParams | undefined): JMapSelection
  selectOnAllLayersFromLine(line: JLine, params?: JMapSelectionParams | undefined): JMapSelection
  selectOnAllLayersFromPolygon(polygon: JPolygon, params?: JMapSelectionParams | undefined): JMapSelection
  setLayerSelection(layerId: number, features: Feature | Feature[]): void
  setLayersSelection(params: JSelectionSetLayersSelectionParams[]): void
  addFeaturesToLayerSelection(layerId: number, features: Feature | Feature[]): void
  removeFeaturesFromLayerSelection(layerId: number, featureIds: string | string[]): void
  clearSelection(layerId?: number): void
  clearLayersSelection(layerIds: JId[]): void
}

export interface JMapFilterService {
  applyHasAttribute(layerId: number, attributeId: string): string
  applyHasNotAttribute(layerId: number, attributeId: string): string
  applyAttributeValueEqualTo(layerId: number, attributeId: string, attributeValue: any): string
  applyAttributeValueBetween(layerId: number, attributeId: string, start: any, end: any): string
  applyAttributeValueNotEqualTo(layerId: number, attributeId: string, attributeValue: any): string
  applyAttributeValueGreaterThan(layerId: number, attributeId: string, attributeValue: any): string
  applyAttributeValueGreaterOrEqualsTo(layerId: number, attributeId: string, attributeValue: any): string
  applyAttributeValueLowerThan(layerId: number, attributeId: string, attributeValue: any): string
  applyAttributeValueLowerOrEqualsTo(layerId: number, attributeId: string, attributeValue: any): string
  applyAttributeValueIn(layerId: number, attributeId: string, attributeValues: any[]): string
  applyAttributeValueNotIn(layerId: number, attributeId: string, attributeValues: any[]): string
  applySpatial(layerId: number, filterGeometry: JPolygon | JCircle): string
  removeByFilterId(filterId: string): void
  removeAllFilters(layerId: number): void
}

export interface JProjectService {
  hasProjectActivated(): boolean
  getActiveProject(): JProject
  activateById(projectId: number): JProject
  activateByName(projectName: string): JProject
  deactivate(): void
  getAllProjects(): Promise<JProject[]>
  existsById(projectId: number): boolean
  existsByName(projectName: string): boolean
  getById(projectId: number): JProject
  getByName(projectName: string): JProject
  getId(): number
  getName(): string
  getDescription(): string
  getProjection(): JProjection
  getDefaultDistanceUnit(): JDistanceUnit
  getInitialRotation(): number
  getMinScale(): number
  getMaxScale(): number
  getSelectionColor(): string
  getBackgroundColor(): string
  getInitialExtent(): JBounds | null
  getBase64ImageThumbnail(): string
  loadAllProjectThumbnails(params?: JProjectLoadThumbnailsParams): Promise<void>
  isChangeDisabled(): boolean
  setChangeEnabled(): void
  setChangeDisabled(): void
}

export interface JLayerService {
  Search: JLayerSearchService
  getMetadataSchema(): JLayerMetadataSchemaItem[]
  getLayerTree(): JLayerTree
  getLayerTreeElementsById(): { [treeElementId: number]: JLayerTreeElement }
  getLayers(): JLayer[]
  getLayerIds(): number[]
  getVectorLayers(): JLayer[]
  getVectorLayerIds(): number[]
  getLayerAttributes(layerId: number): JLayerAttribute[]
  getLayerAttribute(layerId: number, attributeName: string): JLayerAttribute
  exists(layerId: number): boolean
  attributeExists(layerId: number, attributeName: string): boolean
  getById(layerId: number): JLayerTreeElement
  getSelfOrChildren(layerId: number): JLayer[]
  getName(layerId: number): string
  getDescription(layerId: number): string
  getEPSG4326Extent(layerId: number): JBoundaryBox | null
  isVisible(layerId: number, checkParentVisibility?: boolean): boolean
  isVectorLayerById(layerId: JId): boolean
  isSelectableById(layerId: JId): boolean
  setSelectabilityById(layerId: JId, selectability:boolean):void
  setLayersSelectability(params: JLayerSetLayersSelectabilityParams[]): void
  isAllLayerParentsVisible(layerId: number): boolean
  getStyle(layerId: number): JLayerStyle
  getSimpleSelectionStyle(layerId: number): JLayerSimpleStyle
  getSelectionStyle(layerId: number): JLayerStyle | null
  getAllThematicsForLayer(layerId: number): JLayerThematic[]
  getThematicById(layerId: number, thematicId: number): JLayerThematic
  hasVisibleThematics(layerId: number): boolean
  getVisibleThematics(layerId: number): JLayerThematic[]
  setVisible(layerId: number, visible: boolean): void
  setLayersVisibility(params: JLayerSetLayersVisibilityParams[]): void
  ensureLayerIsVisible(layerId: number): void
  ensureLayersAreVisible(layerIds: number[]): void
  setLayerGroupExpansion(layerGroupId: number, isExpanded: boolean): void
  setLayerGroupsExpansion(params: JLayerSetLayerGroupsExpansionParams[]): void
  deleteLayer(layerId: number): void
  setThematicVisibility(layerId: number, thematicId: number, visibility: boolean): void
  setThematicsVisibility(params: JLayerSetThematicsVisibilityParams[]): void
  isHoverActive(): boolean
  activateHover(): void
  deactivateHover(): void
}

export interface JLayerSearchService {
  byAttribute(params: JLayerSearchByAttributesParams): Promise<Feature[]>
}

export interface JLayerGroup extends JLayerTreeElement {
  open: boolean
  image: string | null
  children: JLayerTreeElement[]
}

export interface JUserService {
  getToken(): string
  getFullName(): string
  getUsername(): string
  getPreference(name: string): Promise<string | null>
  hasPreference(name: string): Promise<boolean>
  removePreference(name: string): Promise<string | null>
  setPreference(name: string, value: string | undefined): Promise<void>
  setToken(token: string): Promise<JSessionData>
  login(login: string, password: string): Promise<JSessionData>
  loginWithIdentityProvider(providerId: string): void
  logout(): Promise<void>
  isLoggedIn(): boolean
  getAllInfos(): JUserInfo[]
  addInfo(info: JUserInfo): void
  removeInfo(infoId: string): void
}

export interface JLanguageService {
  addBundle(bundle: JTranslationBundle): void
  bundleExitsById(bundleId: string): boolean
  getBundleById(bundleId: string): JTranslationBundle
  getAllBundleIds(): string[]
  getBundles(): JTranslationBundleById
  getLocales(): JLocale[]
  getLocale(): JLocale
  getDateFnsLocale(): any
  getDefaultLocale(): JLocale 
  setLocale(locale: JLocale): void
  translate(params: JTranslateParams): string
  is12HoursTimeFormat(): boolean
  isValidLocale(locale: JLocale): boolean
  getDateFormat(): string
  getDateFnsDateFormat(): string
}

export interface JMouseOverService {
  isPopupOpened(): boolean
  closePopup(): void
  openPopup(params: JMouseOverOpenPopupParams): void
  openPopupForSelection(params: JMouseOverOpenPopupForSelectionParams): void
  renderForFeaturesAtLocation(containerId: string, location: JLocation): boolean // return true if has mouseover
  renderForFeaturesSelection(containerId: string, selection: JMapSelection): boolean // return true if has mouseover
  getMouseOverContent(selection: JMapSelection): JMouseOverContent | undefined
  processJSAndPhotosForContent(content: JMouseOverContent): void
}

export interface JExtensionService {
  Document?: JDocumentService
  register(extension: JCoreExtension): void
  isRegistered(extensionId: string): boolean
  getAllRegisteredIds(): string[]
  hasMouseOver():boolean
  renderMouseOver(layer: JLayer, feature: Feature): Array<JExtensionMouseOver | undefined>
}

export interface JDocumentService {
  selectElement(layer: string, element: string): Promise<void>
  getElementDocuments(toSelectObjectId: JObjectId): Promise<JAllDocumentDescriptors>
  selectDocuments(descriptors: JAllDocumentDescriptors): void
  filter(filterValue: string | undefined): void
  getRichPreview(webSiteUrl: string): void
}

export interface JServerService {
  getVersion(): string
  getShortVersion(): string
  isStandardLoginAvailable(): boolean
  getIdentityProviderById(providerId: string): JServerIdentityProvider
  getAllIdentityProvidersById(): JServerIdentityProviderById
}

export interface JAllDocumentDescriptors {
  documents: JDocumentDescriptor[]
  hyperlinks: JHyperLinkDescriptor[]
}

export interface JHyperLinkDescriptor {
  id: number
  url: string
  depositName: string
  depositId: number
  linkDescription: string
  linkImageLocation: string
  linkTitle: string
  linkFavicon: string
}

export interface JDocumentDescriptor {
  identifier: number
  title: string
  description: string
  fileName: string
  creation: number // timestamp
  depositName: string
}

// MISC
export interface JObjectId {
  project: string
  layer: string
  element: string
}
