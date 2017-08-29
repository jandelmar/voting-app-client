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

    it('renders entries with vote counts or zero', () => {
        const entries = wrapper.find('.entry');
        const entries_children = entries.children();

        expect(entries.length).to.equal(2);
        expect(entries_children.at(0).text()).to.equal('Trainspotting');
        expect(entries_children.at(1).text()).to.equal('5');
        expect(entries_children.at(2).text()).to.equal('28 Days Later');
        expect(entries_children.at(3).text()).to.equal('4');
    });

    it('invokes callback when a button is clicked', () => {
        let nextInvoked = false;
        const next = () => nextInvoked = true;
        const wrapper = mount(<Results pair={pair} tally={Map()} next={next}/>);
        const button_next = wrapper.find('.next');

        button_next.simulate('click');
        
        expect(nextInvoked).to.equal(true);
    });

    it('renders the winner when there is one', () => {
        const wrapper = mount(
          <Results winner="Trainspotting"
                   pair={pair}
                   tally={Map()} />
        );
        const winner = wrapper.find('.winner')
        
        expect(winner.text()).to.contain('Trainspotting');
      });
});