import { mapDispatchToProps, mapStateToProps } from './UrlContainer';
import { setUrls } from '../../actions';

describe('UrlContainer', () => {
    let url1, url2;

    beforeEach(() => {
        url1 = {
            id1: 1,
            title1: 'Ask Jeeves Twitch',
            long_url1: 'https://www.ask.com/culture/twitch-intro?qo=articleNav',
            short_url1: 'http://localhost:3001/useshorturl1'
        }
        url2 = {
            id2: 2,
            title2: 'Why Is Wales Like This',
            long_url2: 'https://en.wikivoyage.org/wiki/Llanfairpwllgwyngyll',
            short_url2: 'http://localhost:3001/useshorturl2',
        }
    })


    describe('mapDispatchToProps', () => {
        it('call dispatch with the setUrls action when setUrlsInStore is called', () => {
            const mockDispatch = jest.fn();
            const actionToDispatch = setUrls([url1, url2]);
            const mappedProps = mapDispatchToProps(mockDispatch);

            mappedProps.setUrlsInStore([url1, url2])

            expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
        })
    })

    describe('mapStateToProps', () => {
        it('should return an array of collection objects as a prop', () => {
            const mockState = {
                theOtherState: 'Puerto Rico',
                urls: [url1, url2],
            }
            const expected = {
                urls: [url1, url2]
            }
            const mappedProps = mapStateToProps(mockState);
            expect(mappedProps).toEqual(expected)
        })
    })
});