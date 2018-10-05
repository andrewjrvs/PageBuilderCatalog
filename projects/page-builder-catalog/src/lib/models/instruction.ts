/**
 * This is the building block, or instuction what template to build
 * and how to build it.
 */
export interface Instruction {
    type: string;
    text?: string;
    data?: any;
    childInstructions?: Instruction[];
}
