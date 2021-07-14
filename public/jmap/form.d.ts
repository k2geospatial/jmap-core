declare type JFormType =
  "DEPRECATED_FORM"
  | "LAYER_ATTRIBUTES_FORM"
  | "LAYER_ATTRIBUTES_SUB_FORM"
  | "EXTERNAL_ATTRIBUTES_FORM"
  | "EXTERNAL_ATTRIBUTES_SUB_FORM"

declare type JFormUIControlAlignment =
  "LEFT"
  | "CENTER"
  | "RIGHT"

declare type JFormWidgetType =
  "input"
  | "range"
  | "switch"
  | "select"
  | "date"
  | "photo"
  | "tree"
  | "label"
  | "span"
  | "table"

declare type JSONSchemaTypes =
  "string"
  | "number"
  | "integer"
  | "boolean"
  | "array"
  | "object"

  declare type JFormOperationType = "creation" | "update" | "delete"

// FORM METADATA

declare interface JFormFieldValidationRuleByAttributeName {
  [ fieldName: string ]: any
}

declare interface JFormValidationRules {
  globalRules: JFormGlobalValidationRule[]
  requiredRuleByAttributeName?: JFormFieldValidationRuleByAttributeName
  readonlyRuleByAttributeName?: JFormFieldValidationRuleByAttributeName
  calculatedRuleByAttributeName?: JFormFieldValidationRuleByAttributeName
  visibleRuleByAttributeName?: JFormFieldValidationRuleByAttributeName
}

declare interface JFormGlobalValidationRule {
  id: string
  expression: any
  name: string
  message: string
}

declare interface JFormPermissions {
  editLayerAttributeValues: boolean,
  addExternalFormAttributeValues: boolean,
  deleteExternalFormAttributeValues: boolean,
  editExternalFormAttributeValues: boolean
}

declare interface JFormMetaData {
  id: JId
  type: JFormType
  name: string
  schema: JFormSchema
  uiSchema: JFormUISchema
  validationRules: JFormValidationRules,
  idAttributeName: string | null
  hasPhoto: boolean
  readOnly: boolean
  isDeleteSupported: boolean
  isCreateSupported: boolean
  isUpdateSupported: boolean
  areAllInputControlsReadOnly: boolean
  isFakeAttributeForm?: boolean // in JMap7 attribute form is optional
  permissions: JFormPermissions
}

declare interface JFormSchema {
  $id: string,
  type: "object",
  $schema: "http://json-schema.org/draft-07/schema#",
  definitions: {},
  properties: JFormSchemaProperties
  required: string[]
}

declare interface JFormSchemaProperties {
  [ name: string ]: JFormSchemaProperty
}

declare interface JFormSchemaProperty {
  title: string
  type: JSONSchemaTypes
  description: string
  isRequired: boolean
  items?: { // used if property type = "array"
    type: JSONSchemaTypes // only number or string
  }
  readOnly?: boolean
  format?: string
  pattern?: string
  minimum?: number
  maximum?: number
  minLength?: number // used for required (because required check only if object has attribute)
  maxLength?: number
  enum?: string[] | number[] | boolean[]
  enumNames?: string[]
  parents?: Array<string | undefined> | Array<string | undefined>
  default?: any
}

// FORM METADATA UI

declare type JFormUISchema = JFormUITab[]

declare interface JFormUITab {
  type: "Tab",
  title: string
  controls: JFormUIControl[]
}

declare interface JFormUIControl {
  type: "Control"
  id: string
  widget: JFormWidgetType
  colSpan: number // the layout grid has 12 columns
  ruleCalculated?: object
  ruleReadOnly?: object
  ruleRequired?: object
  ruleVisible?: object // not yet implemented server side
  scope?: string // use with attribute related controls. Ex of scope : "#/properties/done"
  multi?: boolean // for select control
  align?: JFormUIControlAlignment
  rows?: number // for multiline input control
  label?: string
  tooltip?: string
  date?: boolean
  dateNow?: boolean // for date control : current date as default value
  dateTime?: boolean // for date control
  dateFormat?: string // for date control
  onlyLeafSelection?: boolean // for tree control
  tree?: JFormUIControlTreeElement[]
  entries?: JFormUIControlEntry[]
  parentAttributeName?: string // used for select that change following parent value
  mask?: string
  subFormId?: JId // for table control
  tableAttributes?: JFormAttribute[] // for table control
  deleteWithElement?: boolean // for photo control
}

declare interface JFormUIControlEntry {
  label: string
  value: number | string
  parentValue: string | undefined
}

declare interface JFormUIControlTreeElement extends JFormUIControlEntry {
  children: undefined | JFormUIControlTreeElement[]
}

// BELOW ALL OLD FORM TYPES RECEIVED FROM SERVERS IN JMAP 7

declare type JFormFieldType =
  "TYPE_EMPTY"
  | "TYPE_COLUMN_SPAN"
  | "TYPE_LABEL"
  | "TYPE_INPUT_TEXT"
  | "TYPE_INPUT_RANGE"
  | "TYPE_SELECT_ONE"
  | "TYPE_SELECT_MANY"
  | "TYPE_INPUT_DATE"
  | "TYPE_SELECT_BOOLEAN"
  | "TYPE_GROUP_PANEL"
  | "TYPE_DOCUMENT"
  | "TYPE_TREE"
  | "TYPE_TABLE"

declare interface JFormSection {
  name: string
  index: number
  nbCol: number
  rows: JFormRow[]
}

declare interface JFormRow {
  sectionIndex: number
  sectionName: string
  index: number
  fields: JFormField[]
}

declare type JFormField =
  JFormFieldLabel
  | JFormFieldEmpty
  | JFormFieldInput
  | JFormFieldInputText
  | JFormFieldDate
  | JFormFieldRange
  | JFormFieldCheckBox
  | JFormFieldSelectOne
  | JFormFieldSelectBase
  | JFormFieldSelectTree
  | JFormFieldPhoto

declare interface JFormFieldBase {
  id: string
  type: JFormFieldType
  tooltip: string
  align: JFormUIControlAlignment
}

declare interface JFormFieldEmpty extends JFormFieldBase {
  type: JFormFieldType
}

declare interface JFormFieldPhoto extends JFormFieldBase {
  label: string
  deleteWithElement: boolean
}

declare interface JFormFieldLabel extends JFormFieldBase {
  text: string
}

declare interface JFormFieldColumnSpan extends JFormFieldBase {
  id: string
}

declare interface JFormFieldInput extends JFormFieldBase {
  required: boolean
  readOnly: boolean
  defaultValue: string
  labelPrefix: string
  labelSuffix: string
  attribute: JFormFieldAttribute
  parentAttribute: string
  ruleCalculated?: string
  ruleReadOnly?: string
  ruleRequired?: string
  ruleVisible?: string
}

declare interface JFormFieldAttribute {
  name: string
  type: number
}

declare interface JFormFieldDate extends JFormFieldInput {
  dateFormat: string
}

declare interface JFormFieldInputText extends JFormFieldInput {
  range: null | { min: number, max: number }
  multiLine: boolean
  maxNumberCharacter: number
  maskFormatter: string
}

declare interface JFormFieldRange extends JFormFieldInput {
  type: JFormFieldType
}

declare interface JFormFieldCheckBox extends JFormFieldInput {
  checkedValue: string
  uncheckedValue: string
}

declare interface JFormFieldTreeEntry {
  parentValue: string
  label: string
  value: string
}

declare interface JFormFieldSelectBase extends JFormFieldInput {
  selectEntries: JFormFieldTreeEntry[]
}

declare interface JFormFieldSelectOne extends JFormFieldSelectBase {
  canAddNewValue: boolean
  autoSelectUniqueValue: boolean
}

declare interface JFormFieldSelectTree extends JFormFieldSelectBase {
  onlyLeafSelection: boolean
}

declare interface JFormAttribute {
  name: string
  title: string
  sqlType: number
  readOnly: boolean
  nullable: boolean
  isSystem: boolean
  displayFormat: string
  isShowInTable: boolean
  formatPattern: string
}

declare interface JFormFieldTable extends JFormFieldBase {
  label: string
  subFormId: JId
  attributes: JFormAttribute[]
}

// FORM DATA

declare interface JFormElementData {
  attributeValueByName: JAttributeValueByName
}

declare interface JFormElement extends JFormElementData {
  /**
   * The element id
   * In attribute form => layer attribute id
   * In external form => related layer attribute id
   * In sub form (and sub sub forms) => related parent element id
   */
  elementId: JId
  /**
   * Only used by external and subform.
   * At runtime this value is undefined for an attribute form.
   * In external and sub forms elements don't have any specific id, it's just values.
   */
  entries: JAttributeValueByName[]
  // at runtime attributeValueByName is undefined when form is not an attribute form
}

// Used only for JMap 7 Rest API
declare interface JFormExternalAttribute {
  type: number
  name: string
}

declare interface JFormPhoto {
  isLoading: boolean
  hasLoadingError: boolean
  hasChange: boolean
  photos: JPhoto[]
}

declare interface JFormPhotoUpdate {
  photoId: JId
  title?: string
  comment?: string
}

declare interface JForm extends JFormElementData {
  id: JId
  layerId: JId
  initialAttributeValueByName: JAttributeValueByName
  metaData: JFormMetaData
  parent: JForm | undefined
  elements: JFormElement[]
  fetchElementsFromServerFailed: boolean
  errors: { [attributeName: string]: any }
  hasChange: boolean
  isMultiple: boolean
  isCreation: boolean
  isAttributeForm: boolean
  isExternalForm: boolean
  isSubForm: boolean
  isReadOnly: boolean
  isReadOnlyEditOwn: boolean
  canCreate: boolean
  canUpdate: boolean
  canDelete: boolean
  geometry?: GeoJSON.Geometry // required for attribute forms
  photo: JFormPhoto
}

declare interface JFormMetaDataById {
  [formId: string]: JFormMetaData
}

declare interface JFormId {
  layerId: JId
  formId: JId
}

declare interface JFormElementId extends JFormId {
  elementId: JId
}

declare interface JFormGetEntriesParams extends JFormId {
  elementId: JId
  parentFormAttributesValuesByName: JAttributeValueByName
}

declare interface JFormElementIds extends JFormId {
  elementIds: JId[]
}

declare interface JFormElements extends JFormId {
  elements: JFormElement[]
}

declare interface JFormCreateAttributeFormElementParams extends JFormElementData, JFormId {
  geometry: GeoJSON.Geometry
}

declare interface JFormCreateElementParams extends JFormElementData, JFormId {
  layerElementId: JId
}

declare interface JFormUpdateElementsParams extends JFormElements {
  // nothing
}

declare interface JFormResult {
  elementId: JId
  success: boolean
}

declare interface JFormCreateParams extends JFormId {
  geometry?: GeoJSON.Geometry
}

declare interface JFormEditParams extends JFormId {
  elements: JFormElement[]
}

declare interface JFormOperation {
  formType: JFormType
  layerId: JId
  formId: JId
  formName: string
  isAttributeForm: boolean
  isExternalForm: boolean
  isSubForm: boolean
  operationType: JFormOperationType
  elementId: JId
}

declare interface JFormAttributeOperation extends JFormOperation {
  formType: "LAYER_ATTRIBUTES_FORM"
  isAttributeForm: true
  isExternalForm: false
  isSubForm: false
  attributeValueByName: JAttributeValueByName
}

declare interface JFormExternalOperation extends JFormOperation {
  formType: "EXTERNAL_ATTRIBUTES_FORM"
  isAttributeForm: false
  isExternalForm: true
  isSubForm: false
  idAttributeName: string
  entry: JAttributeValueByName
}

declare interface JFormSubFormOperation extends JFormOperation {
  formType: "LAYER_ATTRIBUTES_SUB_FORM" | "EXTERNAL_ATTRIBUTES_SUB_FORM"
  isAttributeForm: false
  isExternalForm: false
  isSubForm: true
  idAttributeName: string
  entry: JAttributeValueByName
}

declare interface JFormPhotoOperation extends JFormOperation {
  photo: JPhoto
}

declare interface JFormAttributePhotoOperation extends JFormPhotoOperation {
  // nothing to add
}

declare interface JFormDatabasePhotoOperation extends JFormPhotoOperation {
  objectId: string
}

declare interface JFormSubmitResult {
  successMessages: string[]
  errorMessages: string[]
  operations: JFormOperation[]
  createdFeatureId?: JId
  deletedFeatureIds?: JId[]
}

declare interface JFormDeleteResult extends JFeatureDeleteByIdsResult {
  // nothing to add
}

declare interface JFormErrors {
  [key: string]: string
}

declare interface JFormSubmitEventParams extends JFormSubmitResult {
  // nothing to add
}

declare interface JFormDeleteEventParams extends JFormDeleteResult {
  // nothing to add
}
