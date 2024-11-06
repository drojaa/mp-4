
// Interface for Weather data
export interface Weather {
    datetime: string;
    conditions: string;
    description: string;
    tempmin: number;  
    tempmax: number;
}