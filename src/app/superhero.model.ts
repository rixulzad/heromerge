import { Attributes } from './attributes.model';

export class Superhero {
    id: number;
    hero_name: string;
    real_name: string;
    gender: string;
    attributes: Attributes;
    powers: string[];
    weaknesses: string[];
}