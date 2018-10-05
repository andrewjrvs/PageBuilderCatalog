import { Instruction } from './models/instruction';
import { Input, Injector, ViewChild, ViewContainerRef, ChangeDetectorRef, ComponentFactory, AfterViewInit } from '@angular/core';
import { DisplayBuilderService } from './display-builder.service';

/**
 * This is the basis for all template components.
 * They may have a source, which is the object they display based off of,
 * and they all accept an instruction set for how to be built.
 */
export class TemplateComponent implements AfterViewInit {
    @ViewChild('content', { read: ViewContainerRef }) content: ViewContainerRef;

    @Input()
    source: any;

    @Input()
    instruction: Instruction;

    @Input()
    public ID: string | null = null;

    public get text() {
        if (this.instruction && this.instruction.text) {
            return this.instruction.text;
        }
        return null;
    }

    constructor(private _injector: Injector) {

    }

    protected buildInstructions(instructions: Instruction[]): void {
        const _cdRef = this._injector.get(ChangeDetectorRef);
        const _bldSrv = this._injector.get(DisplayBuilderService);

        this.content.clear();
        // loop through each child instruction and add the data.

        for (const kid of (instructions || [])) {
            const typeFactory: ComponentFactory<TemplateComponent> = _bldSrv.getComponentFactoryByName(kid.type);
            const obj = this.content.createComponent(typeFactory);
            obj.instance.source = this.source;
            obj.instance.instruction = kid;
        }
        _cdRef.detectChanges();
    }


    ngAfterViewInit(): void {
        console.log(this.instruction.childInstructions, this.content);
        if (this.instruction.childInstructions && this.content) {
            this.buildInstructions(this.instruction.childInstructions);
        }
    }
}
