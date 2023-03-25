/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface ActionTestSummary {
  name?: string
  identifier?: string
  testStatus: string
  duration: number
  performanceMetrics: ActionTestPerformanceMetricSummary[]
  failureSummaries: ActionTestFailureSummary[]
  expectedFailures: ActionTestExpectedFailure[]
  skipNoticeSummary?: ActionTestNoticeSummary
  activitySummaries: ActionTestActivitySummary[]
  repetitionPolicySummary?: ActionTestRepetitionPolicySummary
  configuration?: ActionTestConfiguration
}
export interface ActionTestPerformanceMetricSummary {
  displayName: string
  unitOfMeasurement: string
  measurements: number[]
  identifier?: string
  baselineName?: string
  baselineAverage?: number
  maxPercentRegression?: number
  maxPercentRelativeStandardDeviation?: number
  maxRegression?: number
  maxStandardDeviation?: number
  polarity?: string
}
export interface ActionTestFailureSummary {
  message?: string
  fileName: string
  lineNumber: number
  isPerformanceFailure: boolean
  uuid: string
  issueType?: string
  detailedDescription?: string
  attachments: ActionTestAttachment[]
  associatedError?: TestAssociatedError
  sourceCodeContext?: SourceCodeContext
  timestamp?: string
  isTopLevelFailure: boolean
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
export interface TestAssociatedError {
  domain?: string
  code?: number
  userInfo?: SortedKeyValueArray
}
export interface SourceCodeContext {
  location?: SourceCodeLocation
  callStack: SourceCodeFrame[]
}
export interface SourceCodeLocation {
  filePath?: string
  lineNumber?: number
}
export interface SourceCodeFrame {
  addressString?: string
  symbolInfo?: SourceCodeSymbolInfo
}
export interface SourceCodeSymbolInfo {
  imageName?: string
  symbolName?: string
  location?: SourceCodeLocation
}
export interface ActionTestExpectedFailure {
  uuid: string
  failureReason?: string
  failureSummary?: ActionTestFailureSummary
  isTopLevelFailure: boolean
}
export interface ActionTestNoticeSummary {
  message?: string
  fileName: string
  lineNumber: number
}
export interface ActionTestActivitySummary {
  title: string
  activityType: string
  uuid: string
  start?: string
  finish?: string
  attachments: ActionTestAttachment[]
  subactivities: ActionTestActivitySummary[]
  failureSummaryIDs: string[]
  expectedFailureIDs: string[]
}
export interface ActionTestRepetitionPolicySummary {
  iteration?: number
  totalIterations?: number
  repetitionMode?: string
}
export interface ActionTestConfiguration {
  values: SortedKeyValueArray
}
