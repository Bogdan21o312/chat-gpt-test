import React from 'react';
import { Button } from './Button';
import { beforeEach, expect, it, afterEach } from '@jest/globals';
import { render, RenderResult } from '@testing-library/react';
import { defaultElementButton, } from './Button';
import classes from "*.module.scss";

describe('Button component', () => {
    let container: RenderResult<typeof Button>;

    beforeEach(() => {
        container = render(<Button>Click me</Button>);
    });

    it('renders the button text', () => {
        const button = container.getByText('Click me');
        expect(button).toBeInTheDocument();
    });

    it('renders as a button element by default', () => {
        const button = container.getByText('Click me');
        expect(button.tagName).toEqual(defaultElementButton.toUpperCase());
    });

    it('applies the "primary" class when the "primary" prop is set to true', () => {
        container = render(<Button primary>Click me</Button>);
        const button = container.getByText('Click me');
        expect(button).toHaveClass(classes.main);
        expect(button).toHaveClass(classes.primary);
    });

    it('applies the "secondary" class when the "secondary" prop is set to true', () => {
        container = render(<Button secondary>Click me</Button>);
        const button = container.getByText('Click me');
        expect(button).toHaveClass(classes.main);
        expect(button).toHaveClass(classes.secondary);
    });

    it('renders as a custom element when the "as" prop is set', () => {
        container = render(<Button as="a">Click me</Button>);
        const button = container.getByText('Click me');
        expect(button.tagName).toEqual('A');
    });
});
