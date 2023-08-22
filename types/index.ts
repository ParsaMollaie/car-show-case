import { MouseEventHandler } from "react";

export interface CustomButtonProps{
    title: string;
    containerStyles?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
    btnType?: "button" | "submit";
    textStyles?: string;
    rightIcon?: string;
    isDisable?: boolean;
}

export interface SearchManufacturerProps{
    selected: string;
    setSelected: (manufacture : string) => void;
}


export interface CarProps {
    city_mpg:number;
    class:string;
    combination_mpg:number;
    cylinders:number;
    displacement:number;
    drive:string;
    fuel_type:string;
    highway_mpg:number;
    make:string;
    model:string;
    transmission:string;
    year:number;
}

export interface FilterProps{
    manufacturer: string;
    year: number | string;
    fuel: string;
    limit:  number;
    model: string;
}

export interface OptionsProps{

    title: string;
    value: string;
}

export interface CustomFilterProps{
    title: string;
    options: OptionsProps[];
    setFilter: any;
}


export interface ShowMoreProps{
    pageNumber: number;
    isNext: boolean;
    setLimit: any;
}