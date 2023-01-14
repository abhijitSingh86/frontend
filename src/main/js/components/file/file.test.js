import * as React from 'react';
import { render, screen, fireEvent , waitFor} from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import {Filee} from './File';

describe('File Component', () => {
  it('renders File component with limit',async  () => {
    render(<Filee limit="1"/>);
    expect(screen.queryByTestId("error")).toBeNull()
      userEvent.upload(screen.getByTestId('file'), new File(["(⌐□_□)"], "chucknorris.png", { type: "image/png" }));

    await waitFor ( ()=>
        expect(screen.queryByTestId("error")).not.toBeNull()
    );

  });
  it('renders File component without limit',async  () => {
      render(<Filee/>);
      expect(screen.queryByTestId("error")).toBeNull()
      userEvent.upload(screen.getByTestId('file'), new File(["(asdasdasd□)"], "chucknorris.png", { type: "image/png" }));
      await waitFor ( ()=>
          expect(screen.queryByTestId("error")).toBeNull()
      );

    });
});