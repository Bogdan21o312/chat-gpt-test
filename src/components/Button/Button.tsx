import classes from "./Button.module.scss"

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


export const Button = <E extends ElementType = typeof defaultElementButton>({as, children, primary, secondary, ...otherProps} :IButtonProps<E>) => {
    const TagName = as || defaultElementButton;

    const classesMain = classes.main
    let classesName = [classesMain]
    const classesPrimary = classes.primary
    const classesSecondary = classes.secondary

    if (primary) {
        classesName.push(classesPrimary)
    }
    if (secondary) {
        classesName.push(classesSecondary)
    }


    return <TagName className={classesName.join(' ')} {...otherProps}>{children}</TagName>
};
