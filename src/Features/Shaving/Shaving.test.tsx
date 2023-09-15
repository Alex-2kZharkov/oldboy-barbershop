import React from 'react';
import { render, screen } from '@testing-library/react';
import { Shaving } from './Shaving';

describe('Shaving', () => {
  it('should be rendered correctly', () => {
    const mainNavList = [{ title: 'Услуги', href: '/services' }];
    render(<Shaving mainNavList={mainNavList} />);

    const imageElement = screen.getByAltText('Опасное бритье: логотип OldBoy с бритвой');
    expect(imageElement).toBeInTheDocument();
    expect(screen.getByText('Услуги')).toBeInTheDocument();
  });
});
