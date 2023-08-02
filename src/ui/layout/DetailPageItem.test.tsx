import { render, screen } from '@testing-library/react';
import { DetailPageItem } from './DetailPageItem';

describe('DetailPageItem', () => {

  it('renders the label correctly', () => {
    render(
      <DetailPageItem label="test">
        <div>Hello World!</div>
      </DetailPageItem>,
    );
    const labelElement = screen.getByText(/test/i);
    expect(labelElement).toBeInTheDocument();
  });

  it('renders the child element correctly', () => {
    render(
      <DetailPageItem label="test">
        <div>Hello World!</div>
      </DetailPageItem>,
    );
    const childElement = screen.getByText(/Hello World!/i);
    expect(childElement).toBeInTheDocument();
  });

  it('matches the snapshot', () => {
    const { container } = render(
      <DetailPageItem label="test">
        <div>Hello World!</div>
      </DetailPageItem>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });

});
