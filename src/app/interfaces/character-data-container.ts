import { ChractersResults } from "./chracters-results";

export interface CharacterDataWrapper {
    code?: number;
    status?: string;
    copyright?: string;
    attributionText?: string;
    attributionHTML?: string;
    data?: CharacterDataContainer;
    etag?: string;
}

export interface CharacterDataContainer {
    offset?: number;
    limit?: number;
    total?: number;
    count?: number;
    results?: ChractersResults[];
}
