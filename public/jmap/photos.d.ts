declare type JPhotoProjectionType = "none" | "equirectangular"

declare interface JPhoto {
  id: number
  url: string
  title: string
  fileName: string
  comment: string | undefined
  metadata: JPhotoMetadata
  imageBase64: string
  hasChanged?: boolean
  isNewPhoto?: boolean
  isRemoved?: boolean
  canDelete?: boolean
  canUpdate?: boolean
  initialTitle?: string
  initialComment?: string | undefined
}

declare interface JPhotoOpenPopupParams {
  selectedPhotoId?: JId
  keepSameSelectedPhotoId?: boolean
  onDelete?: (photo: JPhoto, selectedPhotoId: JId) => boolean
  onUpdate?: (photo: JPhoto, title: string, comment: string | undefined) => boolean
}

declare interface JPhotoEventContainerCreatedParams {
  container: HTMLElement
}

declare interface JPhotoMetadata {
  projectionType: JPhotoProjectionType
}
