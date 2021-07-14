declare interface JAttributeValueByName {
  [attributeName: string]: any
}

declare interface JFeatureGeometryUpdateParams {
  layerId: JId
  featureId: JId
  geometry: GeoJSON.Geometry
}

declare interface JFeatureEventGeometryUpdateParams {
  layerId: JId
  updatedFeature: GeoJSON.Feature
}

declare interface JFeatureEventDeleteParams {
  layerId: JId
  featureIds: JId[]
}

declare interface JFeatureDeleteByIdsResult {
  layerId: JId
  inSuccessIds: JId[]
  inErrorIds: JId[]
}
