import React from 'react';
import { render, screen } from '@testing-library/react';
import Contacts from './Contacts';

describe('Home', () => {
  const inputError = {
    firstName: {
      message: 'This field is required',
    },
    lastName: {
      message: 'This field is required',
    },
    email: {
      message: 'This field is required',
    },
  };
  it('renders the header with the text "Contact"', () => {
    // eslint-disable-next-line testing-library/prefer-screen-queries
    const { getByText } = render(
      <Contacts
        register={() => {}}
        inputError={inputError}
        estimatePrice={''}
      />
    );
    // eslint-disable-next-line testing-library/prefer-screen-queries
    const title = getByText(/Contact/i);
    expect(title).toBeInTheDocument();
  });
  it('renders First Name', () => {
    // eslint-disable-next-line testing-library/prefer-screen-queries
    const { getByText } = render(
      <Contacts
        register={() => {}}
        inputError={inputError}
        estimatePrice={''}
      />
    );
    // eslint-disable-next-line testing-library/prefer-screen-queries
    const title = getByText(/First Name/i);
    expect(title).toBeInTheDocument();
  });

  it('should renders First Name', () => {
    // eslint-disable-next-line testing-library/prefer-screen-queries
    const { getByText } = render(
      <Contacts
        register={() => {}}
        inputError={inputError}
        estimatePrice={''}
      />
    );
    // eslint-disable-next-line testing-library/prefer-screen-queries
    const title = getByText(/First Name/i);
    expect(title).toBeInTheDocument();
  });
  it('renders Last Name', () => {
    // eslint-disable-next-line testing-library/prefer-screen-queries
    const { getByText } = render(
      <Contacts
        register={() => {}}
        inputError={inputError}
        estimatePrice={''}
      />
    );
    // eslint-disable-next-line testing-library/prefer-screen-queries
    const title = getByText(/Last Name/i);
    expect(title).toBeInTheDocument();
  });
  it('renders Email', () => {
    // eslint-disable-next-line testing-library/prefer-screen-queries
    const { getByText } = render(
      <Contacts
        register={() => {}}
        inputError={inputError}
        estimatePrice={''}
      />
    );
    // eslint-disable-next-line testing-library/prefer-screen-queries
    const title = getByText(/Email/i);
    expect(title).toBeInTheDocument();
  });
  it('renders Phone Number', () => {
    // eslint-disable-next-line testing-library/prefer-screen-queries
    const { getByText } = render(
      <Contacts
        register={() => {}}
        inputError={inputError}
        estimatePrice={''}
      />
    );
    // eslint-disable-next-line testing-library/prefer-screen-queries
    const title = getByText(/Phone Number/i);
    expect(title).toBeInTheDocument();
  });
});
