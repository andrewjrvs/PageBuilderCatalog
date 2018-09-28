

const registeredCatalogTemplates = {};

export function CatalogTemplate(name: string) {
    return function ( constructor ) {
        if (findCatalogTemplate(name)) {
            throw new Error(`Duplicate Policy name '${name}'`);
        }
        if (!name) {
            throw new Error(`Name required`);
        }
        registeredCatalogTemplates[name] = constructor;
    };
}

/**
 * This will return the catalogTemplate base on the name of the catalog we provided.
 *
 * @param name - the Name of the template we are looking for
 */
export function findCatalogTemplate(name: string): any {
    if (name in registeredCatalogTemplates) {
        return registeredCatalogTemplates[name];
    }
    return null;
}

/**
 * Used for testing purposes only, this will clear the policy source.
 */
export function clearCatalogTemplate(): void {
    for (const prop of Object.getOwnPropertyNames(registeredCatalogTemplates)) {
        delete registeredCatalogTemplates[prop];
    }
}
