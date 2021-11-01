declare interface JProjectLoadThumbnailsParams {
  width: number
  height: number
}

declare interface JProjectEventParams {
  project: JProject
}

declare interface JProjectAllEventParams {
  projects: JProject[]
}

declare interface JProjectServerExtension {
  id: string
  name: string
  jsUrl: string
  data: any | null
  version: string
}

declare interface JProject {
  id: JId //TODO: refactoring will be done in JWNG-351
  name: string
  description: string
  projection: JProjection
  initialRotation: number
  scaleMax: number
  scaleMin: number
  colorSelection: string
  colorBackground: string
  initialExtent: JBoundaryBox | null
  maximumExtent: JBoundaryBox | null
  apiKey: {
    google: string | null
    bing: string | null
    mapBox: string | null
  },
  queryGroups: JQueryGroup[]
  defaultDistanceUnit: JDistanceUnit
  base64ImageThumbnail: string,
  extensions: JProjectServerExtension[]
}
