import { createElement } from "./create-element";

const allDataTypeSelector = ["LNodeType", "DOType", "DAType", "EnumType"];

export function makeWizardFinishedEvent(): CustomEvent {
	const event = new CustomEvent('oscd-wizard-finished', {
		bubbles: true,
		composed: true,
	})

	return event
}

export function makeDATypeCreationEvent(
	id?: string, 
	parent?: Element,
	desc: string = "", 
	selectedTemplate?: Element,
	templates?: Document
): CustomEvent {

	if(!parent){ throw new Error('parent is required') }
	if(!id){ throw new Error('id is required') }

	const idExists = Array
		.from(templates?.querySelectorAll(allDataTypeSelector.join(",")) ?? [] )
		.some(type => type.getAttribute('id') === id)

	if (idExists){ throw new Error(`id '${id}' already exists`) }


	let element = createElement(parent.ownerDocument, 'DAType', {});


	if(selectedTemplate){
		element = <Element>selectedTemplate.cloneNode(true)
	}

	element.setAttribute('id', id);
	element.setAttribute('desc', desc);

	const eventDetails = {
		parent: parent,
		node: element
	}

	const event = new CustomEvent("oscd-edit", {detail: eventDetails, bubbles: true, composed: true})

	// TODO: there was more here, check original
	return event
}


export function makeDATypeChangeEvent(
	id: string, 
	desc: string, 
	element: Element,
) {

	if(!id){ throw new Error('id is required') }

	const eventDetails = {
		element: element,
		attributes: {
			id,
			desc,
		}
	}

	const event = new CustomEvent("oscd-edit", {detail: eventDetails, bubbles: true, composed: true})

	return event
}