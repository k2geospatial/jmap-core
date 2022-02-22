declare type LAYER_TYPE = "POINT" | "LINE" | "POLYGON" | "TEXT" | "IMAGE" | "LABEL" | "ELLIPSE" | "MIXED"

declare type LAYER_GEOMETRY = "ANNOTATION" | "CURVE" | "COMPLEX" | "POINT" | "RASTER" | "SURFACE" | "ELLIPSE" | "NONE"

declare type JLayerAttributeType = "string" | "number" | "date" | "datetime" | "boolean" | "binary"

declare type JLayerThematicType = "INDIVIDUAL_VALUES" | "GRADUATED_STYLE" | "OTHER"

declare type JLayerThematicFamilyType = "Classification" | "ProportionalSymbol" | "Other"

declare type JLayerThematicPrimitiveType = "LINE" | "POINT" | "AREA"

declare type JLayerStyleType = "POINT" | "LINE" | "SURFACE" | "ANNOTATION" | "IMAGE" | "MIXED"

declare type JLayerStyleArrow = "NONE" | "FORWARD" | "BACKWARD"

declare type JLayerMetadataType = "date" | "text" | "number"

declare type JLayerInformationReportType = "JSP" | "BIRT" | "BIRT_HTML" | "BIRT_PDF" | "WMS" | "CUSTOM"

declare type JLayerMetaDataValue =  string | number | Date

declare interface JLayerBaseMetadata {
  id: JId
}

declare interface JLayerMetadataSchemaItem extends JLayerBaseMetadata{
  type: JLayerMetadataType
  label: string
  allowMultiple: boolean
}

declare interface JLayersConfiguration {
  metadataSchema: JLayerMetadataSchemaItem[]
  layerTree: JLayerTree
}

declare interface JLayerMetadata extends JLayerBaseMetadata {
  value: JLayerMetaDataValue
}

declare interface JLayerEventChangeParams {
  layerTree: JLayerTree
}

declare interface JLayerEventThematicCategoryVisibilityParams{
  layerId: JId
  thematicId: JId
  hiddenCategoryIndexes: number[]
}

declare interface JLayerEventThematicVisibilityParams {
  layerId: JId
  thematicId: JId
  visibility: boolean
}

declare interface JLayerEventVisibilityParams {
  layerId: JId
  visibility: boolean
  areAllParentsVisible: boolean
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

declare interface JMapEventLoadedParams {
  map: mapboxgl.Map
}

declare interface JLayerGeometry {
  type: LAYER_GEOMETRY
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
  type: LAYER_TYPE
  metadatas: JLayerMetadata[]
  attributes: JLayerAttribute[]
  mouseOver: JMapMouseOver
  simpleSelectionStyle: JLayerSimpleStyle
  selectionStyle: JLayerStyle
  minimumVisibleMapboxZoom: number | undefined
  maximumVisibleMapboxZoom: number | undefined
  baseStyles: JLayerStyleScaled[]
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
  spatialDataSourceId: string // For Jaaz only
}

declare interface JLayerInformationReport {
  type: JLayerInformationReportType
  title: string
  preFormatted: boolean
  singlePresentationPage: string
  multiplePresentationPage: string
}

declare interface JLayerForm {
  id: JId
  name: string
  type: JFormType
}

declare interface JLayerAttribute {
  id: string
  name: string
  label: string
  type: JLayerAttributeType
}

declare interface JLayerTreeElement {
  id: JId,
  name: string,
  description: string
  initialVisibility: boolean
  visible: boolean
  isGroup: boolean
  paths: string[]
}

declare type JLayerTree = JLayerTreeElement[]

declare interface JLayerThematic {
  id: JId
  enabled: boolean // initial visibility
  isVisible: boolean // user visibility
  name: string
  description: string
  type: JLayerThematicType
  baseStyle: JLayerStyle
  primitiveType: JLayerThematicPrimitiveType
  elementCount: number
  title: string
  subTitle: string
  dynamicLegend: boolean
}

declare interface JLayerThematicClassification extends JLayerThematic {
  categoryCount: number
  dynamicLegend: boolean
  colorPaletteName: string
  attribute: string
  nullValueSupported: boolean
  outOfSampleDataIgnored: boolean
  categories: JLayerThematicCategory[]
  hiddenCategoryIndexes: number[]
}

declare interface JLayerThematicCategory {
  title: string
  style: JLayerStyle
  enabled: boolean
  nullValueCategory: boolean
  index: number
}

declare interface JLayerThematicCategoryIndividual extends JLayerThematicCategory {
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

declare interface JLayerStyleScaled {
  minScale: number
  style: JLayerStyle
}

declare interface JLayerSimpleStyle {
  transparency: number
  fillColor: string
  lineColor: string
}

declare interface JLayerStyle {
  styleType: JLayerStyleType
  imageSampleInBase64: string
  transparencyPerCent: number
}

declare interface JLayerStyleVector extends JLayerStyle {
  antiAliasing: boolean
}

declare interface JLayerStylePoint extends JLayerStyleVector {
  styleType: "POINT"
  symbolScale: number
  symbolRotationInDegree: number
  symbolProportionalSizeEnabled: boolean
  symbolProportionalSize: number
  symbolRotateWithMapEnabled: boolean
  symbolOffsetX: number
  symbolOffsetY: number
  symbolVector: JLayerStyleSymbolVector | null
  symbolImage: JLayerStyleSymbolImage | null
}

declare type JLayerStyleLineStrokeCap = "BUTT" | "ROUND" | "SQUARE"
declare type JLayerStyleLineStrokeJoin = "MITER" | "ROUND" | "BEVEL"

declare interface JLayerStyleLineStroke {
  width: number
  cap: JLayerStyleLineStrokeCap
  join: JLayerStyleLineStrokeJoin
}

declare interface JLayerStyleLineStrokeBasic extends JLayerStyleLineStroke {
  miterLimit: number
  dash: number[]
  dash_phase: number
}

declare interface JLayerStyleLine extends JLayerStyleVector {
  styleType: "LINE"
  lineColor: JRGBColor
  lineThickness: number
  arrowType: JLayerStyleArrow
  arrowPositionFromLeftInPerCent: number
  stroke: JLayerStyleLineStroke
}

declare interface JLayerStyleSurface extends JLayerStyleVector {
  styleType: "SURFACE"
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
  styleType: "ANNOTATION"
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
  styleType: "MIXED"
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
  selectability: boolean,
  ensureVisibility?: boolean
}

declare interface JLayerThematicSetVisibilityParams {
  layerId: JId
  thematicId: JId
  visibility: boolean
}

declare interface JLayerThematicSetCategoryVisibilityParams{
  layerId: JId
  thematicId: JId
  categoryIndex: number
  visibility: boolean
}

declare interface JLayerSetLayerGroupsExpansionParams {
  layerGroupId: JId
  open: boolean
}
