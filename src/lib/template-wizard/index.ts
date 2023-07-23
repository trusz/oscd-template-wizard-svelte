import TemplateWizard from './template-wizard.svelte'
import * as pkg from "../../../package.json";

export class Wizard extends HTMLElement {

	private templateWizard?: TemplateWizard
	
	connectedCallback() {
		this.attachShadow({ mode: "open" });
		if(!this.shadowRoot){ 
			throw new Error("Could not attach shadow root")
		}
		this.templateWizard = new TemplateWizard({
			target: this.shadowRoot,
			props: {
				// tagName: this._tagName,
				parent: this._parent,
				element: this._element,
			}
		});

		const style = document.createElement("style");
		// @ts-ignore
        style.innerHTML = globalThis.pluginStyle[pkg.name];
        this.shadowRoot.appendChild(style);
	}

	private _tagName = ""
	private _parent: Element | undefined = undefined
	private _element: Element | undefined = undefined

	public set tagName(newTagName: string){
		this._tagName = newTagName
		if(!this.templateWizard) { return }

		// this.templateWizard.$set({tagName: newTagName})
	}
	
	public set parent(newParent: Element){
		this._parent = newParent
		if(!this.templateWizard) { return }

		this.templateWizard.$set({parent: newParent})
	}
	
	public set element(newElement: Element){
		this._element = newElement
		if(!this.templateWizard) { return }

		this.templateWizard.$set({element: newElement})
	}

	public static canInspect(tagName: string): boolean {

		return true;
	}

	public static canCreate(tagName: string): boolean {

		return true;
	}

	

}
