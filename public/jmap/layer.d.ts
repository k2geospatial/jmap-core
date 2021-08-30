declare type LAYER_TYPE = "POINT" | "LINE" | "POLYGON" | "TEXT" | "IMAGE" | "LABEL" | "ELLIPSE" | "MIXED"

declare type LAYER_GEOMETRY = "ANNOTATION" | "CURVE" | "COMPLEX" | "POINT" | "RASTER" | "SURFACE" | "ELLIPSE" | "NONE"

declare type JLayerAttributeType = "string" | "number" | "date" | "datetime" | "boolean" | "binary"

declare type JLayerThematicType = "INDIVIDUAL_VALUES" | "GRADUATED_STYLE" | "OTHER"

declare type JLayerThematicPrimitiveType = "LINE" | "POINT" | "AREA"

declare type JLayerStyleType = "POINT" | "LINE" | "SURFACE" | "ANNOTATION" | "IMAGE" | "MIXED"

declare type JLayerStyleArrow = "NONE" | "FORWARD" | "BACKWARD"

declare type JLayerMetadataType = "date" | "text" | "number"

declare type JLayerMetaDataValue =  string | number | Date

declare interface JLayerBaseMetadata {
  id: number
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

declare interface JLayerEventThematicVisibilityParams {
  layerId: number
  thematicId: number
  visibility: boolean
}

declare interface JLayerEventVisibilityParams {
  layerId: number
  visibility: boolean
  areAllParentsVisible: boolean
}

declare interface JLayerEventSelectabilityParams {
  layerId: number
  selectability: boolean
}

declare interface JLayerEventParams {
  layerId: number
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

declare interface JLayer extends JLayerTreeElement {
  geometry: JLayerGeometry
  type: LAYER_TYPE
  metadatas: JLayerMetadata[]
  attributes: JLayerAttribute[]
  mouseOver: JMapMouseOver
  simpleSelectionStyle: JLayerSimpleStyle
  selectionStyle: JLayerStyle
  minimumVisibleScale: number | undefined
  maximumVisibleScale: number | undefined
  minimumVisibleMapboxZoom: number | undefined
  maximumVisibleMapboxZoom: number | undefined
  baseStyles: JLayerStyleScaled[]
  thematics: JLayerThematic[]
  queries: JQuery[]
  extent: JBoundaryBox | null
  permissions: JLayerPermissions
  selectable: boolean
  listedInTree: boolean
  authorPropertyName: string
  lowercasedAttributeIds: string[]
  canEditGeometry: boolean
  hasAttributeForm: boolean
  hasExternalForms: boolean
  forms: JLayerForm[]
}

declare interface JLayerForm {
  id: JId
  name: string
  type: JFormType
}

declare interface JLayerAttribute {
  id: string
  label: string
  type: JLayerAttributeType
}

declare interface JLayerTreeElement {
  id: number,
  name: string,
  description: string
  initialVisibility: boolean
  visible: boolean
  isGroup: boolean
  path: string
}

declare type JLayerTree = JLayerTreeElement[]

declare interface JLayerThematic {
  id: number
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
}

declare interface JLayerThematicClassification extends JLayerThematic {
  categoryCount: number
  dynamicLegend: boolean
  colorPaletteName: string
  nullValueSupported: boolean
  categories: JLayerThematicCategory[]
}

declare interface JLayerThematicCategory {
  title: string
  style: JLayerStyle
  enabled: boolean
  nullValueCategory: boolean
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
  layerId: number
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
  layerId: number, 
  visibility: boolean
}

declare interface JLayerSetLayersSelectabilityParams {
  layerId: JId, 
  selectability: boolean
}

declare interface JLayerSetThematicsVisibilityParams {
  layerId: number, 
  thematicId: number, 
  visibility: boolean
}

declare interface JLayerSetLayerGroupsExpansionParams {
  layerGroupId: number, 
  open: boolean
}
