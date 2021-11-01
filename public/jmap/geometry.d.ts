declare interface JBoundaryBox {
  sw: JLocation
  ne: JLocation
}

declare interface JLocation {
  x: number
  y: number
}

declare type JPoint = [ number, number ] | [ number, number , number]

declare type JLine = JPoint[]

declare type JPolygon = JPoint[]

declare type JGeometryUnit = "kilometers" | "miles" | "degrees" | "radians"

declare interface JCircle {
  center: JLocation,
  /**
   * With mapbox the radius unit is kilometer
   */
  radius: number
}

declare interface JObjectId {
  project: string
  layer: string
  element: string
}
