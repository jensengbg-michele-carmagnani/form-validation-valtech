import React from 'react';
import { render, screen } from '@testing-library/react';
import Address from './Address';
import FormHeader from '../layout/headerFrom/headerForm';
import { Autocomplete } from '@react-google-maps/api';
// jest.mock('@react-google-maps/api', () => ({
//   Autocomplete: jest.fn(),
// }));

describe('Address', () => {
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
  it('renders the header with the text "Address"', () => {
    const { getByText } = render(
      <FormHeader title="Address" formNumber={''} />
    );
    // eslint-disable-next-line testing-library/prefer-screen-queries
    const title = getByText(/Address/i);
    expect(title).toBeInTheDocument();
  });
  it.skip('should render the label with Your Address', () => {
    const { getByLabelText } = render(
      <Autocomplete>
        <Address
          register={() => {}}
          inputError={inputError}
          estimatePrice={''}
        />
      </Autocomplete>
    );
    // eslint-disable-next-line testing-library/prefer-screen-queries
    const title = getByLabelText(/Your Address/i);
    expect(title).toBeInTheDocument();
  });
});
