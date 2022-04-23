import type { Page } from "@playwright/test";

export class SearchResultPage {
    static readonly url = 'http://stage.malabar-test.ylopo/search?s[locations][0][city]=Lost%20Creek&s[locations][0][state]=KY&s[page]=1&s[orderBy]=sourceCreationDate%2Cdesc';
    constructor(readonly page: Page) {
    }
}
