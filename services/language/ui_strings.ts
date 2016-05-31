/*
export const uiStrings = {}
uiStrings['welcome'] = 'Welcome to the Notes app';
uiStrings['createText'] = 'Create List';
uiStrings['placeholderText'] = 'List name';
uiStrings['noListsText'] = 'No List';
uiStrings['loadText'] = 'Load List';
*/
export default class UiStrings {

    constructor(public welcome: string,
                public createText: string,
                public placeholderText: string,
                public noListsText: string,
                public loadText: string) {
            
        this.welcome = "Welcome to the Notes app";
        this.createText = "Create List";
        this.placeholderText = "List name";
        this.noListsText = "No List";
        this.loadText = "Load List";
    }
}

// made changes here