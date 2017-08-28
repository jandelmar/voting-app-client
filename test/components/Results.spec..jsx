import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import {List, Map} from 'immutable';

import Results from '../../src/components/Results';

const pair = List.of('Trainspotting', '28 Days Later');
const tally = Map({'Trainspotting': 5, '28 Days Later': 4});
const wrapper = mount(<Results pair={pair} tally={tally} />);

describe('<Results />', () => {
    it('renders without exploding', () => {
        expect(wrapper).to.have.lengthOf(1);
    });
});