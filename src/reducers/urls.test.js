import { urls } from '../reducers/urls';

describe('urls', () => {
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

    it('should return the initial state', () => {
        const expected = [];
        
        const result = urls(undefined, {});

        expect(result).toEqual(expected);
    });

    it('should return the set of all current urls', () => {
        const expected = [url1, url2];
        const mockAction = {
            type: 'SET_URLS',
            urls: [url1, url2]
        }

        const result = urls([], mockAction);

        expect(result).toEqual(expected);
    });

    it('should add a new url', () => {
        const expected = [url1, url2];
        const mockAction = {
            type: 'ADD_URL',
            url: url2
        }

        const result = urls([url1], mockAction);

        expect(result).toEqual(expected);
    });
});