import React from 'react';
import { shallow } from 'enzyme';
import { UrlForm, mapDispatchToProps } from './UrlForm';
import { addUrl } from '../../actions';
import { postUrls } from '../../apiCalls';

describe('UrlForm', () => {
    let wrapper, url2;

    beforeEach(() => {
        wrapper = shallow(<UrlForm />)
        url2 = {
            id2: 2,
            title2: 'Why Is Wales Like This',
            long_url2: 'https://en.wikivoyage.org/wiki/Llanfairpwllgwyngyll',
            short_url2: 'http://localhost:3001/useshorturl2',
        }
    })

    it('should match snapshot', () => {
        expect(wrapper).toMatchSnapshot()
    })

    it('should update state on form change', () => {
        const mockEvent = { target: { name: 'title', value: 'But WHY Wales?' } };
        const expected = 'But WHY Wales?';
        wrapper.instance().handleNameChange(mockEvent);
        expect(wrapper.state('title')).toEqual(expected);
    })

    it('should be able to clear inputs', () => {
        const expected = 'It\'s just all vowels'
        wrapper.setState({title: 'It\'s just all vowels'})
        expect(wrapper.state('title')).toEqual(expected);
        wrapper.instance().clearInputs();
        expect(wrapper.state('title')).toEqual('');
    })

    describe('mapDispatchToProps', () => {
        it('call dispatch with the addUrl action when addUrlToStore is called', () => {
            const mockDispatch = jest.fn();
            const url1 = {
                id1: 1,
                title1: 'Ask Jeeves Twitch',
                long_url1: 'https://www.ask.com/culture/twitch-intro?qo=articleNav',
                short_url1: 'http://localhost:3001/useshorturl1'
            }
            const actionToDispatch = addUrl(url1)
            const mappedProps = mapDispatchToProps(mockDispatch)

            mappedProps.addUrlToStore(url1)

            expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
        })
    })
});

it('should call addUrlToStore on submit and clear inputs', () => {
    const mockEvent = { preventDefault: jest.fn() }
    const mockDispatch = jest.fn();

    window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
            ok: true,
            json: () => Promise.resolve(url2)
        });
    });


})