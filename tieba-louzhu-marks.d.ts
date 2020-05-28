
/// <reference path="./typedefs/tieba.pagedata.d.ts" />
/// <reference path="./typedefs/tieba.datafield.d.ts" />

/// <reference types="jquery" />
/// <reference types="greasemonkey" />

declare interface Window {
    readonly PageData: Tieba.PageDataTypes.PageData;
}