import { render, screen } from '@testing-library/react';

import { Sidebar } from './sidebar';

const isOpen = false;
const setIsOpen = jest.fn();

describe('Sidebar from the Button click', () => {
  test('pass the sidebar test', () => {
    render(<Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />);

    const searchBox = screen.getByPlaceholderText('Найти города', { exact: false });

    expect(searchBox).toBeInTheDocument();
  });
});
