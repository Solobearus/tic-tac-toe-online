import React from 'react'
import { render, fireEvent, waitForElement, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Login from './Login'

afterEach(cleanup)

describe('Login component', () => {
    let props;

    beforeEach(() => {
        props = {
            test: "test"
        }
    });

    it('should render without crashing', () => {
        const { getByTestId } = render(<Login {...props}/>);
        const linkElement = getByTestId('Login');
        expect(linkElement).toBeInTheDocument();
    });
});