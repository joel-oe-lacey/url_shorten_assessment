import { mapDispatchToProps } from './UrlForm';
import { addUrl } from '../../actions';

describe('UrlForm', () => {
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