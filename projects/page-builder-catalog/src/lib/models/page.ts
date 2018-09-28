import { Instruction } from './instruction';

export interface Page {
    title?: string;
    id: string;
    items?: Instruction[];
}
