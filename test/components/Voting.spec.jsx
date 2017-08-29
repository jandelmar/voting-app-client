import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import {List} from 'immutable';

import Voting from '../../src/components/Voting';

const pair = List.of('Trainspotting', '28 Days Later');
const wrapper = mount(<Voting pair={pair} />);

describe('<Voting />', () => {
    it('renders without exploding', () => {
        expect(wrapper).to.have.lengthOf(1);
    });

    it('has two buttons', () => {
        const buttons = wrapper.find('button')
        
        expect(buttons).to.have.lengthOf(2);
    });

    it('invokes callback when a button is clicked', () => {
        let votedWith;
        const vote = (entry) => votedWith = entry;
        const wrapper = mount(<Voting pair={pair} vote={vote} />);
        const buttons = wrapper.find('.voting').children();
        const button_one = buttons.at(0)

        button_one.simulate('click');
        
        expect(votedWith).to.equal('Trainspotting');
    });

   
});