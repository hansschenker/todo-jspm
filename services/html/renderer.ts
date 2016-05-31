import * as ko from 'knockout';

export default class Renderer {

    public container: HTMLElement;
    public view;
    public viewModel;
    constructor(container: HTMLElement, view, viewModel) {

        this.container = container;
        this.view = view;
        this.viewModel = viewModel
    }
    render() {
        const div = <HTMLDivElement>document.createElement('div');
        div.innerHTML = this.view;

        this.container.appendChild(div);
        ko.applyBindings(this.viewModel, this.container);
    }
}