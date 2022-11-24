import React from 'react';
import { render, screen } from '@testing-library/react';
import MoveInformation from './MoveInformation';
import FormHeader from '../layout/headerFrom/headerForm';

describe('MoveInformation', () => {
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
  it('should render the header with the text Move Details', () => {
    const { getByText } = render(
      <FormHeader title="Move Details" formNumber={''} />
    );
    // eslint-disable-next-line testing-library/prefer-screen-queries
    const title = getByText(/Move Details/i);
    expect(title).toBeInTheDocument();
  });
  it('should render the label with Residential area square meters', () => {
    const { getByText } = render(
      <MoveInformation
        register={() => {}}
        inputError={() => {}}
        estimatePrice={'10'}
      />
    );
    // eslint-disable-next-line testing-library/prefer-screen-queries
    const title = getByText(/Residential area square meters/i);
    expect(title).toBeInTheDocument();
  });
  it('should render the label with possible exchange, attic, storage room ect... square meters', () => {
    const { getByText } = render(
      <MoveInformation
        register={() => {}}
        inputError={inputError}
        estimatePrice={''}
      />
    );
    // eslint-disable-next-line testing-library/prefer-screen-queries
    const title = getByText(
      /possible exchange, attic, storage room ect...square meters/i
    );
    expect(title).toBeInTheDocument();
  });
  it('should render the label with any bulky items such as a piano', () => {
    const { getByText } = render(
      <MoveInformation register={() => {}} inputError={inputError} estimatePrice={''} />
    );
    // eslint-disable-next-line testing-library/prefer-screen-queries
    const title = getByText(/any bulky items such as a piano/i);
    expect(title).toBeInTheDocument();
  });
  it('should render the label with Help for packing?', () => {
    const { getByText } = render(
      <MoveInformation register={() => {}} inputError={inputError} estimatePrice={''} />
    );
    // eslint-disable-next-line testing-library/prefer-screen-queries
    const title = getByText(/Help for packing?/i);
    expect(title).toBeInTheDocument();
  });
});
