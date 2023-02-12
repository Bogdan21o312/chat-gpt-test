import {ComponentProps, ElementType, ReactNode} from "react";

type IButtonPrimaryProps<E extends ElementType = ElementType> = {
    primary?: boolean
    secondary?: never
    as?: E;
};

type IButtonSecondaryProps<E extends ElementType = ElementType> = {
    primary?: never
    secondary?: boolean
    as?: E;
};

type IButtonOwnProps<E extends ElementType = ElementType> = IButtonPrimaryProps | IButtonSecondaryProps & {
    as?: E;
    children: ReactNode;
};

export const defaultElementButton = "button";
export type IButtonProps<E extends ElementType> = IButtonOwnProps<E> &
    Omit<ComponentProps<E>, keyof IButtonOwnProps>;
