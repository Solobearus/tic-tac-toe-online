import React from 'react'
import { render, fireEvent, waitForElement, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Lobby from './Lobby'

afterEach(cleanup)

describe('Lobby component', () => {
    let props;

    beforeEach(() => {
        props = {
            test: "test"
        }
    });

    it('should render without crashing', () => {
        const { getByTestId } = render(<Lobby {...props}/>);
        const linkElement = getByTestId('Lobby');
        expect(linkElement).toBeInTheDocument();
    });
});