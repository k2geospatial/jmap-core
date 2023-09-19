// ALL_LAYER_LAYER_TYPES in all-enum.ts
declare const enum JLAYER_LAYER_TYPES {
  VECTOR = "VECTOR",
  RASTER = "RASTER",
  OGC_API_FEATURES = "OGC_API_FEATURES"
}

// ALL_LAYER_LAYER_REQUEST_MODES in all-enum.ts
declare const enum JLAYER_LAYER_REQUEST_MODES {
  BY_TILE = "BY_TILE",
  BY_REGION = "BY_REGION"
}

// ALL_LAYER_ELEMENT_TYPES in all-enum.ts
declare const enum JLAYER_ELEMENT_TYPES {
  POINT = "POINT",
  LINE = "LINE",
  POLYGON = "POLYGON",
  TEXT = "TEXT",
  IMAGE = "IMAGE",
  LABEL = "LABEL",
  ELLIPSE = "ELLIPSE",
  MIXED = "MIXED"
}

// ALL_LAYER_GEOMETRIES in all-enum.ts
declare const enum JLAYER_GEOMETRIES {
  ANNOTATION = "ANNOTATION",
  CURVE = "CURVE",
  COMPLEX = "COMPLEX",
  POINT = "POINT",
  RASTER = "RASTER",
  SURFACE = "SURFACE",
  ELLIPSE = "ELLIPSE",
  NONE = "NONE"
}

// ALL_LAYER_ATTRIBUTE_TYPES in all-enum.ts
declare const enum JLAYER_ATTRIBUTE_TYPES {
  STRING = "string",
  NUMBER = "number",
  DATE = "date",
  DATETIME = "datetime",
  BOOLEAN = "boolean",
  BINARY = "binary"
}

// ALL_LAYER_THEMATIC_TYPES in all-enum.ts
declare const enum JLAYER_THEMATIC_TYPES {
  INDIVIDUAL = "INDIVIDUAL_VALUES",
  GRADUATED = "GRADUATED_STYLE",
  STYLE_RULE = "STYLE_RULE",
  OTHER = "OTHER"
}

// ALL_LAYER_THEMATIC_FAMILY_TYPES in all-enum.ts
declare const enum JLAYER_THEMATIC_FAMILY_TYPES {
  CLASSIFICATION = "Classification",
  PROPORTIONAL_SYMBOL = "ProportionalSymbol",
  STYLE_RULE = "StyleRule",
  OTHER = "Other"
}

// ALL_LAYER_STYLE_TYPES in all-enum.ts
declare const enum JLAYER_STYLE_TYPES {
  POINT = "POINT",
  LINE = "LINE",
  SURFACE = "SURFACE",
  ANNOTATION = "ANNOTATION",
  IMAGE = "IMAGE",
  MIXED = "MIXED"
}

// ALL_LAYER_STYLE_ARROWS in all-enum.ts
declare const enum JLAYER_STYLE_ARROWS {
  NONE = "NONE",
  FORWARD = "FORWARD",
  BACKWARD = "BACKWARD"
}

// ALL_LAYER_INFORMATION_REPORT_TYPES in all-enum.ts
declare const enum JLAYER_INFORMATION_REPORT_TYPES {
  JSP = "JSP",
  BIRT = "BIRT",
  BIRT_HTML = "BIRT_HTML",
  BIRT_PDF = "BIRT_PDF",
  WMS = "WMS",
  CUSTOM = "CUSTOM"
}

// ALL_LAYER_STYLE_RULE_CONDITION_EXPRESSION_OPERATORS in all-enum.ts
declare const enum JLAYER_STYLE_RULE_CONDITION_EXPRESSION_OPERATORS {
  EMPTY = "EMPTY",
  NOT_EMPTY = "NOT_EMPTY",
  IS_NULL = "IS_NULL",
  IS_NOT_NULL = "IS_NOT_NULL",
  EQUALS = "EQUALS",
  NOT_EQUALS = "NOT_EQUALS",
  GREATER_THAN = "GREATER_THAN",
  LOWER_THAN = "LOWER_THAN",
  GREATER_OR_EQUALS_TO = "GREATER_OR_EQUALS_TO",
  LOWER_OR_EQUALS_TO = "LOWER_OR_EQUALS_TO"
}

// ALL_LAYER_DYNAMIC_FILTER_OPERATORS in all-enum.ts
declare const enum JLAYER_DYNAMIC_FILTER_OPERATORS {
  EQUALS = "EQUALS",
  NOT_EQUALS = "NOT_EQUALS",
  GREATER_THAN = "GREATER_THAN",
  GREATER_OR_EQUALS_TO = "GREATER_OR_EQUALS_TO",
  LESS_THAN = "LESS_THAN",
  LESS_OR_EQUALS_TO = "LESS_OR_EQUALS_TO",
  CONTAINS = "CONTAINS",
  NOT_CONTAINS = "NOT_CONTAINS",
  IS_EMPTY = "IS_EMPTY",
  IS_NOT_EMPTY = "IS_NOT_EMPTY",
  IS_NULL = "IS_NULL",
  IS_NOT_NULL = "IS_NOT_NULL",
  IS_IN_RANGE = "IS_IN_RANGE",
  IS_NOT_IN_RANGE = "IS_NOT_IN_RANGE",
  LAST = "LAST",
  INTERVAL = "INTERVAL"
}

// ALL_LAYER_STYLE_LINE_STROKE_CAP in all-enum.ts
declare const enum JLAYER_STYLE_LINE_STROKE_CAP {
  BUTT = "BUTT",
  ROUND = "ROUND",
  SQUARE = "SQUARE"
}

// ALL_LAYER_STYLE_LINE_STROKE_JOIN in all-enum.ts
declare const enum JLAYER_STYLE_LINE_STROKE_JOIN {
  MITER = "MITER",
  ROUND = "ROUND",
  BEVEL = "BEVEL"
}

// ALL_LAYER_METADATA_TYPES in all-enum.ts
declare const enum JLAYER_METADATA_TYPES {
  DATE = "date",
  TEXT = "text",
  NUMBER = "number",
  TEXTAREA = "textarea",
  URL = "url"
}

declare type JLayerMetaDataValue = string | number | Date

declare interface JLayerBaseMetadata {
  id: JId
}

declare interface JLayerMetadataSchemaItem extends JLayerBaseMetadata {
  type: JLAYER_METADATA_TYPES
  label: string
  allowMultiple: boolean
}

declare interface JLayerStyleSamplesById {
  [styleId: string]: string
}

declare interface JLayersConfiguration {
  metadataSchema: JLayerMetadataSchemaItem[]
  layerTree: JLayerTree
  styleSamples: JLayerStyleSamplesById
}

declare interface JLayerMetadata extends JLayerBaseMetadata {
  value: JLayerMetaDataValue
  label: string
  type: JLAYER_METADATA_TYPES
}

interface JLayerMetadataSection {
  id: JId
  title: string
  metadatas: JLayerMetadata[]
}

declare interface JLayerEventChangeParams {
  layerTree: JLayerTree
}

declare interface JLayerEventThematicCategoryVisibilityParams {
  layerId: JId
  thematicId: JId
  hiddenCategoryIndexes: number[]
}

declare interface JLayerEventThematicConditionVisibilityParams {
  layerId: JId
  thematicId: JId
  hiddenConditionIds: string[]
}

declare interface JLayerEventThematicVisibilityParams {
  layerId: JId
  thematicId: JId
  visibility: boolean
  hiddenCategoryIndexes?: number[]
  hiddenConditionIds?: string[]
}

declare interface JLayerEventVisibilityParams {
  layerId: JId
  visibility: boolean
  areAllParentsVisible: boolean
}

declare interface JLayerEventRasterTransparencyParams {
  layerId: JId
  transparency: number
}

declare interface JLayerEventSelectabilityParams {
  layerId: JId
  selectability: boolean
}

declare interface JLayerEventParams {
  layerId: JId
}

declare interface JLayerInitialSearchEventParams extends JLayerEventParams {
  features: GeoJSON.Feature[]
}

declare interface JLayerDynamicFilterSetParams {
  filters: JDynamicFilter[]
}

declare interface JLayerDynamicFilterActivationParams extends JLayerEventParams {
  isActivation: boolean
}

declare interface JLayerDynamicFilterConditionCreated extends JLayerEventParams {
  filter: JDynamicFilter
  condition: JDynamicFilterCondition
}

declare interface JLayerDynamicFilterConditionUpdated extends JLayerEventParams {
  filter: JDynamicFilter
  condition: JDynamicFilterCondition
}

declare interface JLayerDynamicFilterConditionsRemoved extends JLayerEventParams {
  filter: JDynamicFilter
  conditionIds: number[]
}

declare interface JMapEventLoadedParams {
  map: mapboxgl.Map
}

declare interface JLayerGeometry {
  type: JLAYER_GEOMETRIES
  editable: boolean
}

declare interface JLayerPermissions {
  ADD: boolean
  DELETE: boolean
  DUPLICATE: boolean
  EDIT_ATTRIBUTE_VALUES: boolean
  EDIT_GEOMETRY: boolean
  EDIT_ONLY_OWN: boolean
}

declare interface JLayerGroup extends JLayerTreeElement {
  open: boolean
  image: string | null
  children: JLayerTreeElement[]
}

declare interface JLayer extends JLayerTreeElement {
  geometry: JLayerGeometry
  elementType: JLAYER_ELEMENT_TYPES
  layerType: JLAYER_LAYER_TYPES
  useClientCache: boolean
  defaultMetadatas: JLayerMetadata[]
  metadataSections: JLayerMetadataSection[]
  attributes: JLayerAttribute[]
  mouseOver: JMapMouseOver
  minimumVisibleMapboxZoom: number | undefined
  maximumVisibleMapboxZoom: number | undefined
  styleRules: JLayerStyleRule[]
  defaultStyleRule: JLayerStyleRule | undefined
  thematics: JLayerThematic[]
  queries: JQuery[]
  extent: JBoundaryBox | null
  permissions: JLayerPermissions
  canEditGeometry: boolean
  hasAttributeForm: boolean
  hasExternalForms: boolean
  selectable: boolean
  listedInTree: boolean
  authorPropertyName: string
  lowercasedAttributeNames: string[]
  forms: JLayerForm[]
  hasInformationReport: boolean
  informationReports: JLayerInformationReport[]
  spatialDataSourceId: string // For JMap Cloud only
  dynamicFilter: JDynamicFilter
}

declare interface JLayerInformationReport {
  type: JLAYER_INFORMATION_REPORT_TYPES
  title: string
  preFormatted: boolean
  singlePresentationPage: string
  multiplePresentationPage: string
}

declare interface JDynamicFilter {
  layerId: JId
  isAvailable: boolean // false means no dynamic filter for layer, ex: IMAGE layers
  isActive: boolean
  intervalOperatorDisabled: boolean // true if layer has less than 2 date attributes
  conditions: JDynamicFilterCondition[]
}

declare interface JDynamicFilterCondition {
  layerId: JId
  id: number
  attributeName: string
  endAttributeName?: string // used for INTERVAL operator
  filterOperator: JLAYER_DYNAMIC_FILTER_OPERATORS
  value: any | any[] // 2 items array for between
}

declare interface JDynamicFilterSetParams {
  layerId: JId
  conditions: JDynamicFilterCondition[]
  isActive?: boolean
}

declare interface JLayerForm {
  id: JId
  name: string
  type: JFORM_TYPES
}

declare interface JLayerAttribute {
  id: string
  name: string
  label: string
  type: JLAYER_ATTRIBUTE_TYPES
}

declare interface JLayerTreeElement {
  id: JId
  name: string
  description: string
  initialVisibility: boolean
  visible: boolean
  isGroup: boolean
  path: string
}

declare type JLayerTree = JLayerTreeElement[]

declare interface JLayerThematic {
  id: JId
  enabled: boolean // initial visibility
  isVisible: boolean // user visibility
  name: string
  description: string
  type: JLAYER_THEMATIC_TYPES
  title: string
  subTitle: string
  dynamicLegend: boolean
}

declare interface JLayerThematicClassification extends JLayerThematic {
  categoryCount: number
  colorPaletteName: string
  attribute: string
  nullValueSupported: boolean
  outOfSampleDataIgnored: boolean
  categories: JLayerThematicCategory[]
  hiddenCategoryIndexes: number[]
}

declare interface JLayerThematicStyleRule extends JLayerThematic {
  conditions: JLayerThematicCondition[]
  hiddenConditionIds: string[]
}

declare interface JLayerThematicCondition {
  id: string
  title: string
  scaledStyles: JLayerThematicConditionScaledStyle[]
}

declare interface JLayerThematicConditionScaledStyle {
  minZoom: number
  maxZoom: number
  styleId: string
}

declare interface JLayerThematicCategory {
  title: string
  style: JLayerStyle
  enabled: boolean
  nullValueCategory: boolean
  index: number
}

declare interface JLayerThematicCategoryIndividual extends JLayerThematicCategory {
  type: JLAYER_THEMATIC_TYPES.INDIVIDUAL
  value: any
}

declare interface JLayerThematicCategoryRange extends JLayerThematicCategory {
  minimum: number
  maximum: number
  includeMax: boolean
  includeMin: boolean
  percentMinimum: number
  percentMaximum: number
}

declare interface JLayerSearchByAttributesParams {
  layerId: JId
  attributeName: string
  attributeValue: any | any[]
  projectionCode?: string
}

declare interface JLayerStyleRule {
  id: string
  layerId: string
  active: boolean
  defaultRule: boolean
  name: string
  conditions: JLayerStyleRuleCondition[]
}

declare interface JLayerStyleRuleCondition {
  id: string
  name: string
  styleMapScales: JLayerStyleScaled[]
}

declare interface JLayerStyleScaled {
  id: string
  styleId: string
  minimumVisibleMapboxZoom: number
  maximumVisibleMapboxZoom: number
}

declare interface JLayerStyleSample {
  styleId: string
  imageSampleInBase64: string
}

// @TODO we probably don't need this interface anymore
declare interface JLayerStyleRuleConditionExpression {
  operator: JLAYER_STYLE_RULE_CONDITION_EXPRESSION_OPERATORS
  value: any
  attribute: JLayerAttribute
}

declare interface JLayerStyle {
  styleType: JLAYER_STYLE_TYPES
  imageSampleInBase64: string
  transparencyPerCent: number
}

declare interface JLayerStyleVector extends JLayerStyle {
  antiAliasing: boolean
}

declare interface JLayerStylePoint extends JLayerStyleVector {
  styleType: JLAYER_STYLE_TYPES.POINT
  symbolScale: number
  symbolRotationInDegree: number
  symbolProportionalSizeEnabled: boolean
  symbolProportionalSize: number
  symbolRotateWithMapEnabled: boolean
  symbolOffsetX: number
  symbolOffsetY: number
  symbolVector: JLayerStyleSymbolVector | null
  symbolImage: JLayerStyleSymbolImage | null
}

declare interface JLayerStyleLineStroke {
  width: number
  cap: JLAYER_STYLE_LINE_STROKE_CAP
  join: JLAYER_STYLE_LINE_STROKE_JOIN
}

declare interface JLayerStyleLineStrokeBasic extends JLayerStyleLineStroke {
  miterLimit: number
  dash: number[]
  dash_phase: number
}

declare interface JLayerStyleLine extends JLayerStyleVector {
  styleType: JLAYER_STYLE_TYPES.LINE
  lineColor: JRGBColor
  lineThickness: number
  arrowType: JLAYER_STYLE_ARROWS
  arrowPositionFromLeftInPerCent: number
  stroke: JLayerStyleLineStroke
}

declare interface JLayerStyleSurface extends JLayerStyleVector {
  styleType: JLAYER_STYLE_TYPES.SURFACE
  fillColor: JRGBColor
  transparentFill: boolean
  borderColor: JRGBColor
  borderTransparencyInPercent: number
  borderThickness: number
  surfacePattern: string
  patternColor: JRGBColor
  patternTransparentFill: boolean
}

declare interface JLayerStyleAnnotation extends JLayerStyleVector {
  styleType: JLAYER_STYLE_TYPES.ANNOTATION
  textFont: string
  textColor: JRGBColor
  textBold: boolean
  textItalic: boolean
  textUnderlined: boolean
  textStrikeThrough: boolean
  textOutlined: boolean
  textOutlineColor: JRGBColor
}

declare interface JLayerStyleMixed extends JLayerStyleVector {
  styleType: JLAYER_STYLE_TYPES.MIXED
  point: JLayerStylePoint
  line: JLayerStyleLine
  surface: JLayerStyleSurface
  text: JLayerStyleAnnotation
}

declare interface JLayerStyleSymbolImage {
  absoluteFilePath: string
}

declare interface JLayerStyleSymbolVector {
  vectorSymbol: string
  borderThickness: number
  borderColor: JRGBColor
  transparentFill: boolean
  fillColor: JRGBColor
}

declare interface JRGBColor {
  red: number
  green: number
  blue: number
  alpha: number
  hexa: string
}

declare interface JLayerSetLayersVisibilityParams {
  layerId: JId
  visibility: boolean
}

declare interface JLayerSetLayersSelectabilityParams {
  layerId: JId
  selectability: boolean
  ignoreVisibility?: boolean
}

declare interface JLayerThematicSetVisibilityParams {
  layerId: JId
  thematicId: JId
  visibility: boolean
  hiddenCategoryIndexes?: number[]
  hiddenConditionIds?: string[]
}

declare interface JLayerThematicSetCategoryVisibilityParams {
  layerId: JId
  thematicId: JId
  categoryIndex: number
  visibility: boolean
}

declare interface JLayerThematicSetConditionVisibilityParams {
  layerId: JId
  thematicId: string
  conditionId: string
  visibility: boolean
}

declare interface JLayerSetLayerGroupsExpansionParams {
  layerGroupId: JId
  open: boolean
}
