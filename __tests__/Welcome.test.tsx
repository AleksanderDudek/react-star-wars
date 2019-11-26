import { mount } from 'enzyme';
import * as React from 'react';

import Welcome from '../src/components/welcome/Welcome';
// import { Button } from '@material-ui/core';

describe('Welcome component ', () => {
   const testComponent = mount(<Welcome/>);

   it('should display 2 buttons for navigation: STARSHIPS and HUMANS', () => {
      const starshipButton = testComponent.find('button#starships');
      const humanButton = testComponent.find('button#humans');

      expect(starshipButton).toBeTruthy();
      expect(humanButton).toBeTruthy();
   });

});
