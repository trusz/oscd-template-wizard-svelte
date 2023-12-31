
export function createElement(
	doc: Document,
	tag: string,
	attrs: Record<string, string | null>
): Element {
	const element = doc.createElementNS(doc.documentElement.namespaceURI, tag);
	Object.entries(attrs)
		.filter(([_, value]) => value !== null)
		.forEach(([name, value]) => element.setAttribute(name, value!));
	return element;
}
