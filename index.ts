import { Feature, FeatureCollection, LineString, MultiLineString, Point, Polygon } from "geojson"
import { Map } from "mapbox-gl"
import { Store } from "redux"

export interface JCoreService extends JCoreMainService {
  Project: JProjectService
  Layer: JLayerService
  User: JUserService
  Language: JLanguageService
  Feature: JFeatureService
  Map: JMapService
  Geocoding: JGeocodingService
  Geolocation: JGeolocationService
  Geometry: JGeometryService
  MouseOver: JMouseOverService
  Form: JFormService
  Query: JQueryService
  Event: JEventService
  History: JHistoryService
  Extension: JExtensionService
  Server: JServerService
  Photo: JPhotoService
  Util: JUtilService
  Library: JLibraryService
  Projection: JProjectionService
  MapContext: JMapContextService
  UI: JUIService
}

export interface JUIService {
  setMainLayoutVisibility(isVisible: boolean): void
  openIFramePopup(params: JIFramePopupParams): void
  closeIFramePopup(): void
  getContainerWidth(): number
  getContainerHeight(): number
}

export interface JLibraryService {
  mapboxgl(): any
  html2canvas(): any
}

export interface JMapContextService {
  isActive(): boolean
  setActive(isActive: boolean): Promise<JMapContextSetActiveResult>
  startCreation(): void
  cancelCreation(): void
  getAll(): JMapContext[]
  getById(contextId: JId): JMapContext
  existsById(contextId: JId): boolean
  getUrlByUUID(contextUUID: string): string
  applyContextById(contextId: JId): Promise<void>
  deleteContextById(contextId: JId | JId[]): Promise<void>
  create(params?: JMapContextMetaData): Promise<JMapContext>
  update(contextId: JId, params?: JMapContextMetaData): Promise<JMapContext>
  updateMetaData(contextId: JId, params: JMapContextMetaData): Promise<void>
  setCreateTitle(newTitle: string): void
  setCreateDescription(newDescription: string): void
  setCreateTitleError(hasError: boolean): void
  getContextTitle(contextId: JId): string
  setContextTitle(contextId: JId, title: string): Promise<void>
  getContextDescription(contextId: JId): string
  setContextDescription(contextId: JId, description: string): Promise<void>
  isLinkShared(contextId: JId): boolean
  setLinkShare(contextId: JId, isShared: boolean): Promise<void>
  getDefaultContext(): JMapContext | undefined
  isDefaultContext(contextId: JId): boolean
  setDefaultContext(contextId?: JId): Promise<void>
  sortListBy(sortBy: JMAP_CONTEXT_SORT_BY_OPTIONS): void
  getListSortBy(): JMAP_CONTEXT_SORT_BY_OPTIONS
  getAllListSortBy(): JMAP_CONTEXT_SORT_BY_OPTIONS[]
  setListSortDirection(sortByDirection: JMAP_CONTEXT_SORT_BY_DIRECTIONS): void
  getListSortDirection(): JMAP_CONTEXT_SORT_BY_DIRECTIONS
  getAllListSortDirection(): JMAP_CONTEXT_SORT_BY_DIRECTIONS[]
  filterList(filter: string): void
  getListFilter(): string
  clearListFilter(): void
  setPreviewImageSize(size: JSize): void
  getPreviewImageSize(): JSize
  addCssClassesToIgnoreForPreviewImage(classes: string[]): void
  getIgnoredCssClassesForPreviewImage(): string[]
}

export interface JMapAttributionService {
  getAll(): JMapAttribution[]
  addSingle(attribution: JMapAttribution): void
  addMultiple(attributions: JMapAttribution[]): void
  removeByIds(attributionsIds: string[]): void
  getById(attributionId: string): JMapAttribution
  isDefaultAttributionId(attributionId: string): boolean
}

export interface JDateService {
  getDate(date: JDateLike): Date
  getDateFnsLocale(displayTime?: boolean): any
  is12HoursTimeFormat(): boolean
  getDateFromISOString(isoDate: string): Date
  add(date: JDateLike, amount: number, timeUnit: JTIME_UNITS): Date
  substract(date: JDateLike, amount: number, timeUnit: JTIME_UNITS): Date
  format(date: JDateLike, params?: JDateFormatParams): string
  formatDistanceToNow(date: JDateLike, params?: JDateFormatParams): string
  isBefore(date1: JDateLike, date2: JDateLike, checkTime?: boolean): boolean
  isAfter(date1: JDateLike, date2: JDateLike, checkTime?: boolean): boolean
}

export interface JUtilService {
  Date: JDateService
  LocalStorage: JLocalStorageService
  Array: JArrayService
  Ajax: JAjaxService
  loadJSFile(fileUrl: string): Promise<void>
  isJMapId(id: any, allowStringNumber?: boolean): boolean
  checkJmapId(id: any, message?: string): void
  getJmapIdAsIntegerIfPossible(id: any): JId
  asyncProcess(callback: () => any, timeoutsInMilliseconds: number[]): () => void
}

export interface JArrayService {
  clear<T>(array: T[]): T[]
  remove<T>(array: T[], element: T): T[]
  findByProperty<T extends object>(array: T[], propertyName: string, value: any): T | undefined
  findIndexByProperty<T extends object>(array: T[], propertyName: string, value: any, nonStrict?: boolean): number
  removeByProperty<T extends object>(array: T[], propertyName: string, value: any, nonStrict?: boolean): T[]
  getCopyWithoutDuplicate(array: Array<string | number>): Array<string | number>
}

export interface JLocalStorageService {
  isAvailable(): boolean
  get(key: string): string | null
  set(key: string, value: string): void
  remove(key: string): void
}

export interface JPhotoService {
  displayFeaturePhotosPopup(layerId: JId, featureId: JId): Promise<void>
  displayPhotosPopup(photos: JPhoto[], params?: JPhotoOpenPopupParams): void
  downloadById(photoId: JId): Promise<void>
  closePhotoPopup(): void
}

export interface JFeatureService {
  getById(layerId: JId, featureId: JId): Promise<GeoJSON.Feature>
  getByIds(layerId: JId, featureIds: JId[]): Promise<GeoJSON.Feature[]>
  geometryUpdateById(params: JFeatureGeometryUpdateParams): Promise<GeoJSON.Feature>
  deleteById(layerId: JId, featureId: JId): Promise<GeoJSON.Feature>
  deleteByIds(layerId: JId, featureIds: JId[]): Promise<JFeatureDeleteByIdsResult>
}

export interface JCoreMainService {
  getVersion(): string
  getApiVersion(): string
  getDataStore(): Store<JCoreState> | undefined
  getRestUrl(): string
  openDocumentation(): void
  getOS(): JOPERATING_SYSTEMS
}

export interface JGeocodingService {
  isAvailable(): boolean
  getMinimumSearchStringLength(): number
  getInvalidSearchStringCharacters(): string
  forwardSearch(searchText: string, options?: JGeocodingOptions): void
  displayForwardSearchResult(forwardSearchResult: JGeocodingResult): void
}

export interface JGeolocationService {
  isSupportedByBrowser(): boolean
  isEnabled(): boolean
  getMyLocation(): Promise<JLocation>
  goToMyLocation(options?: JPanAndZoomOptions): Promise<JLocation>
}

export interface JQueryService {
  initializeQueryFormById(layerId: JId, queryId: string): Promise<JQuery>
  getAllGroups(): JQueryGroup[]
  groupExist(groupId: JId): boolean
  getQueriesByLayerId(layerId: JId): JQuery[]
  getQueryByLayerId(layerId: JId, queryId: string): JQuery
  getQueriesByGroupId(groupId: JId): JQuery[]
  getQueryByGroupId(groupId: JId, queryId: string): JQuery
  queryExist(groupId: JId, queryId: string): boolean
  fetchFeatures(layerId: JId, queryId: string, data: any): Promise<Feature[]>
}

export interface JAjaxService {
  get(config: JRequestConfig): Promise<any>
  post(config: JRequestConfig): Promise<any>
  put(config: JRequestConfig): Promise<any>
  del(config: JRequestConfig): Promise<any>
  patch(config: JRequestConfig): Promise<any>
}

export interface JEventService {
  Main: JCoreEventModule
  Layer: JLayerEventModule
  Language: JLanguageEventModule
  Map: JMapEventModule
  Geocoding: JGeocodingEventModule
  Photo: JPhotoEventModule
  Project: JProjectEventModule
  User: JUserEventModule
  Feature: JFeatureEventModule
  Form: JFormEventModule
  Extension: JExtensionEventModule
  MouseOver: JMouseOverEventModule
  MapContext: JMapContextEventModule
  Server: JServerEventModule
  Query: JQueryEventModule
}

export type JEventFunction = (params?: any) => void | Promise<any>

export interface JEventListener {
  id: string
  fn: JEventFunction
}

export type JEventSimpleListenerFunction = (listenerId: string, fn: JEventFunction) => void

export type JEventResourceListenerFunction = (listenerId: string, resourceId: JId, fn: JEventFunction) => void

export type JEventListenerFunction = JEventSimpleListenerFunction | JEventResourceListenerFunction

export interface JEventModule {
  on: {
    [method: string]: JEventListenerFunction
  }
  existById(listenerId: string): boolean
  activate(listenerId: string): void
  deactivate(listenerId: string): void
  remove(listenerId: string): void
}

export interface JQueryEventModule extends JEventModule {
  on: {
    queryFormLoad(listenerId: string, fn: (params: JQueryQueryFormHasLoadedEventParams) => void): void
    beforeSubmit(listenerId: string, fn: (params: JQueryBeforeEventParams) => void): void
    success(listenerId: string, fn: (params: JQuerySuccessEventParams) => void): void
    error(listenerId: string, fn: (params: JQueryErrorEventParams) => void): void
  }
}

export interface JServerEventModule extends JEventModule {
  on: {
    infoReady(listenerId: string, fn: (params: JServerInfoReadyEventParams) => void): void
  }
}

export interface JFormEventModule extends JEventModule {
  on: {
    layerDialogOpened(listenerId: string, fn: (params: JFormLayerDialogOpenEventParams) => void): void
    layerDialogClosed(listenerId: string, fn: (params: JFormLayerDialogCloseEventParams) => void): void
    subFormDialogOpened(listenerId: string, fn: (params: JFormSubFormDialogOpenEventParams) => void): void
    subFormDialogClosed(listenerId: string, fn: (params: JFormSubFormDialogCloseEventParams) => void): void
    beforeSubmit(listenerId: string, fn: (params: JFormBeforeSubmitEventParams) => void | Promise<any>): void
    submit(listenerId: string, fn: (params: JFormSubmitEventParams) => void): void
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

export interface JGeocodingEventModule extends JEventModule {
  on: {
    success(listenerId: string, fn: (params: JGeocodingSuccessEventParams) => void): void
    error(listenerId: string, fn: (params: JGeocodingErrorEventParams) => void): void
  }
}

export interface JLayerEventModule extends JEventModule {
  on: {
    layersChange(listenerId: string, fn: (params: JLayerEventChangeParams) => void): void
    thematicVisibilityChange(listenerId: string, fn: (params: JLayerEventThematicVisibilityParams) => void): void
    thematicCategoriesVisibilityChange(
      listenerId: string,
      fn: (params: JLayerEventThematicCategoryVisibilityParams) => void
    ): void
    thematicConditionsVisibilityChange(
      listenerId: string,
      fn: (params: JLayerEventThematicConditionVisibilityParams) => void
    ): void
    visibilityChange(listenerId: string, fn: (params: JLayerEventVisibilityParams) => void): void
    sourceChange(listenerId: string, fn: (params: JLayerEventParams) => void): void
    selectabilityWillChange(listenerId: string, fn: (params: JLayerEventSelectabilityParams) => void): void
    layerDeletion(listenerId: string, fn: (params: JLayerEventParams) => void): void
    initialSearchApplied(listenerId: string, fn: (params: JLayerInitialSearchEventParams) => void): void
    dynamicFilterSet(listenerId: string, fn: (params: JLayerDynamicFilterSetParams) => void): void
    dynamicFilterActivationChange(listenerId: string, fn: (params: JLayerDynamicFilterActivationParams) => void): void
    dynamicFilterConditionCreated(listenerId: string, fn: (params: JLayerDynamicFilterConditionCreated) => void): void
    dynamicFilterConditionUpdated(listenerId: string, fn: (params: JLayerDynamicFilterConditionUpdated) => void): void
    dynamicFilterConditionsRemoved(listenerId: string, fn: (params: JLayerDynamicFilterConditionsRemoved) => void): void
  }
}

export interface JMapEventModule extends JEventModule {
  on: {
    mapLoad(listenerId: string, fn: (params: JMapEventLoadedParams) => void): void
    mapDestroy(listenerId: string, fn: () => void): void
    moveStart(listenerId: string, fn: (params: JMapEventParams) => void): void
    move(listenerId: string, fn: (params: JMapEventParams) => void): void
    moveEnd(listenerId: string, fn: (params: JMapEventParams) => void): void
    mouseMove(listenerId: string, fn: (params: JMapEventLayerParams) => void): void
    mouseMoveOnLayer(listenerId: string, layerId: JId, fn: (params: JMapEventFeaturesParams) => void): void
    mouseEnterOnLayer(listenerId: string, layerId: JId, fn: (params: JMapEventFeaturesParams) => void): void
    mouseLeaveOnLayer(listenerId: string, layerId: JId, fn: (params: JMapEventLayerParams) => void): void
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
    basemapChanged(listenerId: string, fn: (params: JMapEventBasemapChangedParams) => void): void
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
    creation(listenerId: string, fn: (params: JFeatureEventCreateParams) => void): void
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
    fatalError(listenerId: string, fn: (params: JMainFatalErrorEventParams) => void): void
  }
}

export interface JMapContextEventModule extends JEventModule {
  on: {
    beforeMapDataChange(listenerId: string, fn: (params: JMapContextBeforeMapDataChangeEventParams) => void): void
    afterMapDataChange(listenerId: string, fn: (params: JMapContextAfterMapDataChangeEventParams) => void): void
    beforeApply(listenerId: string, fn: (params: JMapContextBeforeApplyEventParams) => void): void
    afterApply(listenerId: string, fn: (params: JMapContextAfterApplyEventParams) => void): void
    applyError(listenerId: string, fn: (params: JMapContextEventParams) => void): void
    initialized(listenerId: string, fn: (params: JMapContextSetActiveResult) => void): void
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
  geocoding: JGeocodingState
  geolocation: JGeolocationState
  form: JFormState
  server: JServerState
  mapContext: JMapContextState
  ui: JUIState
  external?: any
}

export interface JUIState {
  isMainLayoutVisible: boolean
  iframePopup: JIFramePopup
}

export interface JMapContextState {
  isInitialized: boolean
  isActive: boolean
  isLoading: boolean
  hasLoadingError: boolean
  isApplying: boolean
  activeTab: JMAP_CONTEXT_TABS
  contexts: JMapContext[]
  defaultContextId: JId | undefined
  filter: string
  sortBy: JMAP_CONTEXT_SORT_BY_OPTIONS
  sortByDirection: JMAP_CONTEXT_SORT_BY_DIRECTIONS
  createTitle: string
  createDescription: string
  createTitleError: boolean
}

export interface JFormState {
  layerId: JId // set as "" when no layer is set
  formMetaDataById: JFormMetaDataById
  isLoadingLayer: boolean
  hasLoadingLayerError: boolean
  isSubmitting: boolean
  submitErrors: string[]
  activeTabIndex: number
  attributeForm: JForm | undefined
  externalForms: JForm[]
  subForms: JForm[]
}

export interface JGeocodingState {
  isAvailable: boolean
  isLoadPending: boolean
  isLoading: boolean
  hasLoadingError: boolean
  searchString: string
  results: JGeocodingResult[]
}

export interface JGeolocationState {
  isLocationDisplayed: boolean
  isEnabled: boolean
  isSupported: boolean
  currentLocation: JLocation | undefined
}

export interface JMapState {
  pitch: number
  rotation: number
  bearing: number
  isLoaded: boolean
  hasFirstLoaded: boolean
  hasLoadingError: boolean
  navigationHistory: JMapNavigationStep[]
  center: JLocation
  zoom: number
  scale: number
  boundaryBox: JBoundaryBox
  activeBasemapId: string | undefined
  basemaps: JBasemap[]
  selection: JMapSelection
  jmapLayerIdsSupportedByMapbox: JId[]
  scaleControlPosition: JMAP_POSITIONS
  distanceUnit: JMAP_DISTANCE_UNITS
  isNavigationHistoryControlVisible: boolean
  isScaleControlVisible: boolean
  isMapRotationControlVisible: boolean
  isInfoControlVisible: boolean
  isInfoControlExpanded: boolean
  defaultZoomOptions: JZoomOptions
  containerWidth: number
  containerHeight: number
  modificationType: JMAP_MODIFICATION_TYPES
  attributions: JMapAttribution[]
  rasterOpacityByLayerId: { [id: JId]: number }
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
  styleSamplesById: JLayerStyleSamplesById
  allById: { [treeElementId: string]: JLayerTreeElement }
  orderedLayerIds: JId[]
  vectorLayerIds: JId[]
}

export interface JPhotoState {
  selectedPhotoId: JId | undefined
  photos: JPhoto[]
  isPopupOpened: boolean
  isLoading: boolean
  hasLoadingError: boolean
  isDownloading: boolean
}

export interface JQueryState {
  groups: JQueryGroup[]
  queriesByLayerId: { [key in JId]: JQuery[] }
}

export interface JUserState extends JTokenInfo {
  isAnonymous: boolean
  isLoggingIn: boolean
  isLoggingIntoOrganization: boolean
  isReloadingSession: boolean
  identity: JUserIdentity
  currentOrganization: JOrganization // the organization in which the user is currently logged in
  organizationInfos: JOrganizationInfo[] // the info about all organizations the user belongs to
  informations: JUserInfo[]
  changePasswordAllowed: boolean
}

export interface JLanguageState {
  locale: JLOCALES
}

export interface JServerState extends JServerInfo {
  isReady: boolean
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
  createDatabaseFormEntry(params: JFormCreateElementParams): Promise<JFormElement>
  updateAttributeFormElements(params: JFormUpdateElementsParams): Promise<JFormResult[]>
  updateDatabaseFormEntries(params: JFormUpdateElementsParams): Promise<JFormElement[]>
  deleteDatabaseFormEntries(params: JFormElements): Promise<JDeleteEntriesResult>
  // DIALOG METHODS (UI)
  getAllFormsMetaDataForCurrentLayer(): JFormMetaData[]
  getFormMetaDataByIdForCurrentLayer(formId: JId): JFormMetaData
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
  openCreationDialogForSubForm(subFormId: JId, selectedParentElements: JFormElement[]): JFormMetaData
  openUpdateDialogForSubForm(subFormId: JId, subFormElements: JFormElement[]): JFormMetaData
  closeCurrentDisplayedDialog(): void
  getFormValues(form: JForm, initialData?: JAttributeValueByName): JAttributeValueByName
  setFormValues(form: JForm, attributeValueByName: JAttributeValueByName): JFormErrors
  submit(params?: JFormSubmitParams): Promise<JFormSubmitResult>
  getNextViewId(): number
  incrementNextViewId(): void
  processRule(rule: any, data: any): any
  canCreateElementOnForm(params: JFormId): boolean
  canUpdateElementOnForm(params: JFormId): boolean
  canDeleteElementOnForm(params: JFormId): boolean
  hasEditOwnRightsForAllElements(params: JFormElements): boolean
  isOwnPermissionRespectedForAllElements(layerId: JId, elements: JFormElement[]): boolean
  // PHOTOS
  hasDisplayedFormAPhotoField(): boolean
  getDisplayedFormPhotos(): JPhoto[]
  addDisplayedFormPhoto(photo: JPhoto): JId
  updateDisplayedFormPhoto(params: JFormPhotoUpdate): void
  removeDisplayedFormPhotoById(photoId: JId): void
  // PURE FORM METHODS (not integrated, also used by query service)
  checkAndCorrectSchemas(schema: JFormSchema, uiSchema: JFormUISchema): void
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
  getNormalizedBbox(bbox: JBoundaryBox, ogcCompliant: boolean): JBoundaryBox
  isValidGeometry(geometry: any): boolean
  checkCircle(circle: JCircle): void
  checkPolygon(polygon: JPolygon): void
  checkLine(line: JLine): void
  checkBbox(bbox: JBoundaryBox): void
  getArea(feature: Feature): number
  getLineLength(
    feature: Feature<LineString> | Feature<MultiLineString>,
    units?: JGEOMETRY_UNITS | JMAP_DISTANCE_UNITS
  ): number
  getCentroid(feature: Feature | FeatureCollection): Feature<Point>
  getFeatureFromLine(line: JLine): Feature<LineString>
  getFeatureFromWkt(wkt: string): Feature
  getPolygonFeatureFromCircle(circle: JCircle, units?: JGEOMETRY_UNITS): Feature<Polygon>
  getFeatureFromPolygon(polygon: JPolygon): Feature<Polygon>
  getBboxFromFeature(feature: Feature): JBoundaryBox
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
  getRotatedFeature(feature: GeoJSON.Feature, angle: number): GeoJSON.Feature
  convertLength(length: number, toUnit: JMAP_DISTANCE_UNITS, fromUnit?: JMAP_DISTANCE_UNITS): number // fromUnit is km by default
  convertArea(area: number, toUnit: JMAP_DISTANCE_UNITS, fromUnit?: JMAP_DISTANCE_UNITS): number // fromUnit is km by default
}

export interface JMapService {
  Interaction: JMapInteractionService
  Filter: JMapFilterService
  Selection: JMapSelectionService
  Basemap: JMapBasemapService
  Attribution: JMapAttributionService
  getMap(): Map
  getMapJSLib(): any
  getDomContainerId(): string
  getAllDistanceUnits(): JMAP_DISTANCE_UNITS[]
  getDistanceUnit(): JMAP_DISTANCE_UNITS
  setDistanceUnit(distanceUnit: JMAP_DISTANCE_UNITS): void
  isMapCreated(): boolean
  isMapLoaded(): boolean
  getExtent(): JBoundaryBox
  getCenter(): { x: number; y: number }
  getZoom(): number
  getMapBoxSourceIdByJMapLayerId(layerId: JId): string
  isScaleControlVisible(): boolean
  setScaleControlVisibility(isVisible: boolean, position?: JMAP_POSITIONS): void
  setScaleControlUnits(units: "imperial" | "metric" | "nautical"): void
  setScaleControlPosition(position: JMAP_POSITIONS): void
  getScaleControlPosition(): JMAP_POSITIONS
  isNavigationHistoryControlVisible(): boolean
  setNavigationHistoryControlVisibility(isVisible: boolean): void
  isMapRotationControlVisible(): boolean
  setMapRotationControlVisibility(isVisible: boolean): void
  isMapInfoControlVisible(): boolean
  setMapInfoControlVisibility(isVisible: boolean): void
  isMapInfoControlExpanded(): boolean
  setMapInfoControlExpansion(isExpanded: boolean): void
  isLayerRendered(layerId: JId): boolean
  getLayersVisibilityStatus(): JMapLayersVisibilityStatus
  getLayersVisibilityStatusAsArray(): JMapLayerVisibilityStatus[]
  getMapboxSupportedJMapLayerIds(): JId[]
  getMapboxSupportedJMapLayerBefore(layerId: JId): JId | undefined
  getMapboxSupportedJMapLayerAfter(layerId: JId): JId | undefined
  refreshLayerById(layerId: JId): void
  getRenderedJMapLayerIds(): JId[]
  getRenderedFeatures(layerId: JId, params?: JLocation | JBoundaryBox | JCircle | JGetRenderedFeaturesParams): Feature[]
  getSourceFeatures(layerId: JId, params?: JGetSourceFeaturesParams): Feature[]
  getRenderedFeaturesAttributeValues(
    layerId: JId,
    filter?: JLocation | JBoundaryBox | JCircle
  ): JMapFeatureAttributeValues[]
  getPitch(): number
  getRotation(): number
  getBearing(): number
  getNavigationHistoryStack(): JMapNavigationStep[]
  undoLastNavigationStep(): JMapNavigationStep | undefined
  setPitch(pitch: number): void
  setRotation(rotation: number): void
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
  clearFlashingLocations(): void
  displayLayerExtent(layerId: JId, params?: JDisplayExtentParams): Promise<boolean>
  displayExtent(extent: JBoundaryBox, params?: JDisplayExtentParams): void
  getResolution(params?: JLatitudeAndZoom): number
  getScale(params?: JLatitudeAndZoom): string
  getScaleDenominator(params?: JLatitudeAndZoom): number
  setScale(scaleDenominator: number, options?: JPanAndZoomOptions): number
  getZoomFromScale(scaleDenominator: number, latitude?: number): number
  getMouseCursor(): string
  setMouseCursor(cursor: string): void
  openModificationPopupForCenter(): void
  openModificationPopupForScale(): void
  closeModificationPopup(): void
  getRasterLayerTransparency(layerId: JId): number
  getRasterLayerInitialTransparency(layerId: JId): number
  resetRasterLayerTransparency(layerId: JId): number
  setRasterLayerTransparency(layerId: JId, transparency: number): void
  applyCurrentPixelRatio(): Promise<void>
  isPixelRatioCurrentlyValid(pixelRatio: number): boolean
}

export interface JMapBasemapService {
  getAllIds(): string[]
  isDisabled(): boolean
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
  getSelectedFeaturesForLayer(layerId: JId): Feature[]
  getSelectedFeatureIdsForLayer(layerId: JId): string[]
  selectOnOneLayerAtLocation(layerId: JId, location: JLocation, params?: JMapSelectionParams | undefined): Feature[]
  selectOnOneLayerFromCircle(layerId: JId, circle: JCircle, params?: JMapSelectionParams | undefined): Feature[]
  selectOnOneLayerFromLine(layerId: JId, line: JLine, params?: JMapSelectionParams | undefined): Feature[]
  selectOnOneLayerFromPolygon(layerId: JId, polygon: JPolygon, params?: JMapSelectionParams | undefined): Feature[]
  selectOnAllLayersAtLocation(location: JLocation, params?: JMapSelectionParams | undefined): JMapSelection
  selectOnAllLayersFromCircle(circle: JCircle, params?: JMapSelectionParams | undefined): JMapSelection
  selectOnAllLayersFromLine(line: JLine, params?: JMapSelectionParams | undefined): JMapSelection
  selectOnAllLayersFromPolygon(polygon: JPolygon, params?: JMapSelectionParams | undefined): JMapSelection
  setLayerSelection(layerId: JId, features: Feature | Feature[]): void
  setLayersSelection(params: JSelectionSetLayersSelectionParams[]): void
  addFeaturesToLayerSelection(layerId: JId, features: Feature | Feature[]): void
  removeFeaturesFromLayerSelection(layerId: JId, featureIds: JId | JId[]): void
  clearSelection(layerId?: JId): void
  clearLayersSelection(layerIds: JId[]): void
}

export interface JMapFilterService {
  applyHasAttribute(layerId: JId, attributeId: string): string
  applyHasNotAttribute(layerId: JId, attributeId: string): string
  applyAttributeValueEqualTo(layerId: JId, attributeId: string, attributeValue: any): string
  applyAttributeValueBetween(layerId: JId, attributeId: string, start: any, end: any): string
  applyAttributeValueNotEqualTo(layerId: JId, attributeId: string, attributeValue: any): string
  applyAttributeValueGreaterThan(layerId: JId, attributeId: string, attributeValue: any): string
  applyAttributeValueGreaterOrEqualsTo(layerId: JId, attributeId: string, attributeValue: any): string
  applyAttributeValueLowerThan(layerId: JId, attributeId: string, attributeValue: any): string
  applyAttributeValueLowerOrEqualsTo(layerId: JId, attributeId: string, attributeValue: any): string
  applyAttributeValueIn(layerId: JId, attributeId: string, attributeValues: any[]): string
  applyAttributeValueNotIn(layerId: JId, attributeId: string, attributeValues: any[]): string
  applySpatial(layerId: JId, filterGeometry: JPolygon | JCircle): string
  removeByFilterId(filterId: string): void
  removeAllFilters(layerId: JId): void
}

export interface JProjectionService {
  reprojectLocation(location: JLocation, toProjection: string, fromProjection?: string): JLocation
  reprojectBoundaryBox(boundaryBox: JBoundaryBox, toProjection: string, fromProjection?: string): JBoundaryBox
}

export interface JProjectService {
  hasProjectActivated(): boolean
  getActiveProject(): JProject
  activateById(projectId: JId): JProject
  activateByName(projectName: string): JProject
  deactivate(): void
  getAllProjects(): Promise<JProject[]>
  existsById(projectId: JId): boolean
  existsByName(projectName: string): boolean
  getById(projectId: JId): JProject
  getByName(projectName: string): JProject
  getId(): JId
  getName(): string
  getDescription(): string
  getProjection(): JProjection
  getDefaultDistanceUnit(): JMAP_DISTANCE_UNITS
  getMapUnit(): JMAP_DISTANCE_UNITS
  getInitialRotation(): number
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
  Thematic: JLayerThematicService
  DynamicFilter: JDynamicFilterService
  getMetadataSchema(): JLayerMetadataSchemaItem[]
  getLayerTree(): JLayerTree
  getLayerTreeElementsById(): { [key in JId]: JLayerTreeElement }
  getLayers(): JLayer[]
  getLayerIds(): JId[]
  getVectorLayers(): JLayer[]
  getVectorLayerIds(): JId[]
  getLayerAttributes(layerId: JId): JLayerAttribute[]
  getLayerAttribute(layerId: JId, attributeName: string): JLayerAttribute
  exists(layerId: JId): boolean
  attributeExists(layerId: JId, attributeName: string): boolean
  getById(layerId: JId): JLayerTreeElement
  getSelfOrChildren(layerId: JId): JLayer[]
  getName(layerId: JId): string
  getDescription(layerId: JId): string
  getEPSG4326Extent(layerId: JId): Promise<JBoundaryBox | null>
  isVisible(layerId: JId, checkParentVisibility?: boolean): boolean
  isVectorLayerById(layerId: JId): boolean
  isSelectableById(layerId: JId): boolean
  setSelectabilityById(layerId: JId, selectability: boolean, ignoreVisibility?: boolean): void
  setLayersSelectability(params: JLayerSetLayersSelectabilityParams[]): void
  isAllLayerParentsVisible(layerId: JId): boolean
  setVisible(layerId: JId, visible: boolean): void
  setLayersVisibility(params: JLayerSetLayersVisibilityParams[]): void
  ensureLayerIsVisible(layerId: JId): void
  ensureLayersAreVisible(layerIds: JId[]): void
  setLayerGroupExpansion(layerGroupId: JId, isExpanded: boolean): void
  setLayerGroupsExpansion(params: JLayerSetLayerGroupsExpansionParams[]): void
  deleteLayer(layerId: JId): void
  hasInformationReport(layerId: JId): boolean
  openInformationReportInNewTab(layerId: JId, featureIds: JId[]): Promise<string>
}

export interface JLayerSearchService {
  byAttribute(params: JLayerSearchByAttributesParams): Promise<Feature[]>
}

export interface JLayerThematicService {
  getAllByLayerId(layerId: JId): JLayerThematic[]
  getById(layerId: JId, thematicId: JId): JLayerThematic
  existsById(layerId: JId, thematicId: JId): boolean
  hasAnyVisibleByLayerId(layerId: JId): boolean
  getAllVisibleByLayerId(layerId: JId): JLayerThematic[]
  setVisibilityById(layerId: JId, thematicId: JId, visibility: boolean): void
  setThematicsVisibility(params: JLayerThematicSetVisibilityParams[]): void
  setCategoryVisibility(params: JLayerThematicSetCategoryVisibilityParams): void
  setAllCategoriesVisibility(layerId: JId, thematicId: JId, visibility: boolean): void
  setConditionVisibility(params: JLayerThematicSetConditionVisibilityParams): void
  setAllConditionsVisibility(layerId: JId, thematicId: JId, visibility: boolean): void
  getFamilyTypeById(layerId: JId, thematicId: JId): JLAYER_THEMATIC_FAMILY_TYPES
}

export interface JUserService {
  getToken(): string
  getOrganization(): JOrganization
  getFullName(): string
  getUsername(): string
  getPreference(name: string): Promise<string | null>
  hasPreference(name: string): Promise<boolean>
  removePreference(name: string): Promise<string | null>
  setPreference(name: string, value: string | undefined): Promise<void>
  setToken(token: string, organizationId?: string): Promise<JSessionData>
  login(login: string, password: string): Promise<JSessionData>
  loginIntoOrganization(organizationId: string): Promise<JSessionData>
  loginWithIdentityProvider(providerId: string): void
  logout(): Promise<void>
  isLoggedIn(): boolean
  getAllInfos(): JUserInfo[]
  addInfo(info: JUserInfo): void
  removeInfo(infoId: string): void
  changePassword(newPassword: string, currentPassword: string): Promise<void>
  changeFullName(newFullName: string): Promise<void>
  getMinimumPasswordLength(): number
  isPasswordCompliant(password: string): boolean
  getPasswordPolicyCompliance(
    password: string
  ): JJMapServerPasswordPolicyCompliance | JJMapCloudPasswordPolicyCompliance
  isPseudoUser(): boolean
  isSystemUser(): boolean
  getOrganizationId(): string
}

export interface JLanguageService {
  addBundle(bundle: JTranslationBundle): void
  bundleExitsById(bundleId: string): boolean
  getBundleById(bundleId: string): JTranslationBundle
  getAllBundleIds(): string[]
  getBundles(): JTranslationBundleById
  getLocales(): JLOCALES[]
  getLocale(): JLOCALES
  getDateFnsLocale(displayTime?: boolean): any
  getDefaultLocale(): JLOCALES
  setLocale(locale: JLOCALES): void
  translate(params: JTranslateParams): string
  is12HoursTimeFormat(): boolean
  isValidLocale(locale: JLOCALES): boolean
  getDateFnsDateFormat(): string
}

export interface JMouseOverService {
  isPopupOpened(): boolean
  closePopup(): void
  openPopup(params: JMouseOverOpenPopupParams): void
  openPopupForSelection(params: JMouseOverOpenPopupForSelectionParams): void
  renderForFeaturesAtLocation(containerId: string, location: JLocation): boolean // return true if has mouseover
  renderForFeaturesSelection(containerId: string, selection: JMapSelection): boolean // return true if has mouseover
  openInformationReportInNewTab(layerId: JId): Promise<string>
}

export interface JExtensionService {
  register(extension: JCoreExtension): void
  isRegistered(extensionId: string): boolean
  getAllRegisteredIds(): string[]
  hasMouseOver(): boolean
  renderMouseOver(layer: JLayer, feature: Feature): Array<JExtensionMouseOver | undefined>
}

export interface JServerService {
  isReady(): boolean
  getVersion(): JServerVersion
  getType(): JSERVER_TYPES
  isSaas(): boolean
  isLegacy(): boolean
  getMinimumVersion(): JMinimumServerVersion
  isMinimumVersionRespected(serverInfo?: JServerInfo): boolean
  getShortVersion(): string
  isStandardLoginAvailable(): boolean
  getIdentityProviderById(providerId: string): JServerAnyIdentityProvider
  getAllIdentityProvidersById(): JServerIdentityProviderById
}

export interface JDynamicFilterService {
  isAvailable(layerId: JId): boolean
  isActive(layerId: JId): boolean
  setIsActive(layerId: JId, isActive: boolean): void
  getByLayerId(layerId: JId): JDynamicFilter
  getAllOperators(): JLAYER_DYNAMIC_FILTER_OPERATORS[]
  getAllMultipleValuesOperators(): JLAYER_DYNAMIC_FILTER_OPERATORS[]
  getAllTwoValuesOperators(): JLAYER_DYNAMIC_FILTER_OPERATORS[]
  getOperatorsForAttributeType(attributeType: JLAYER_ATTRIBUTE_TYPES): JLAYER_DYNAMIC_FILTER_OPERATORS[]
  getConditionError(condition: JDynamicFilterCondition): string | undefined
  isConditionValid(condition: JDynamicFilterCondition): boolean
  existSimilarCondition(condition: JDynamicFilterCondition, isUpdate?: boolean): boolean
  set(params: JDynamicFilterSetParams[]): void
  createCondition(condition: JDynamicFilterCondition): number
  updateCondition(condition: JDynamicFilterCondition): void
  removeConditions(layerId: JId, conditionsIds: number[]): void
  isNoValueOperator(operator: JLAYER_DYNAMIC_FILTER_OPERATORS): boolean
  isMultipleValuesOperator(operator: JLAYER_DYNAMIC_FILTER_OPERATORS): boolean
  isTwoValuesOperator(operator: JLAYER_DYNAMIC_FILTER_OPERATORS): boolean
  getConditionValueError(
    operator: JLAYER_DYNAMIC_FILTER_OPERATORS,
    attributeType: JLAYER_ATTRIBUTE_TYPES,
    value?: any
  ): string | undefined
  isConditionValueValid(
    operator: JLAYER_DYNAMIC_FILTER_OPERATORS,
    attributeType: JLAYER_ATTRIBUTE_TYPES,
    value?: any
  ): boolean
  canAttributeTypeAcceptMultipleValuesOperators(attributeType: JLAYER_ATTRIBUTE_TYPES): boolean
  canAttributeTypeAcceptTwoValuesOperators(attributeType: JLAYER_ATTRIBUTE_TYPES): boolean
  getIsBetweenValuesError(attributeType: JLAYER_ATTRIBUTE_TYPES, value1: any, value2: any): string | undefined
  getNowValue(): string
  getAllLastOperatorUnits(): string[]
}

// MISC
export interface JObjectId {
  project: string
  layer: string
  element: string
}
