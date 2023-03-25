/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface ActionTestActivitySummary {
  title: string
  activityType: string
  uuid: string
  start?: string
  finish?: string
  attachments: ActionTestAttachment[]
  subactivities: ActionTestActivitySummary1[]
  failureSummaryIDs: string[]
  expectedFailureIDs: string[]
}
export interface ActionTestAttachment {
  uniformTypeIdentifier: string
  name?: string
  uuid?: string
  timestamp?: string
  userInfo?: SortedKeyValueArray
  lifetime: string
  inActivityIdentifier: number
  filename?: string
  payloadRef?: Reference
  payloadSize: number
}
export interface SortedKeyValueArray {
  storage: SortedKeyValueArrayPair[]
}
export interface SortedKeyValueArrayPair {
  key: string
  value: SchemaSerializable
}
export interface SchemaSerializable {}
export interface Reference {
  id: string
  targetType?: TypeDefinition
}
export interface TypeDefinition {
  name: string
  supertype?: TypeDefinition
}
export interface ActionTestActivitySummary1 {
  title: string
  activityType: string
  uuid: string
  start?: string
  finish?: string
  attachments: ActionTestAttachment[]
  subactivities: ActionTestActivitySummary1[]
  failureSummaryIDs: string[]
  expectedFailureIDs: string[]
}
