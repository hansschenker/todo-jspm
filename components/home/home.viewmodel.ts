import * as ko from 'knockout';


import UiStrings from '../../services/language/ui_strings';


export default class HomeViewModel {
    title:string;
    createText: string;
    placeholderText:string;
    noListsText:string;
    loadText:string;
    
    // ko bindings
    enableAdd;
    enableLoad;
    
    constructor() {
        this.title = UiStrings['welcome'];
        this.createText = UiStrings['createText'];
        
        
        // ko
        this.enableAdd = ko.observable(false);
        this.enableLoad = ko.observable(false);
            
    }

    
}

