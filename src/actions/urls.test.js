import * as actions from './index';

describe('actions', () => {
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

    it('should have a type of ADD_URL', () => {

        const expectedAction = {
            type: 'ADD_URL',
            url: url1
        }

        const result = actions.addUrl(url1);

        expect(result).toEqual(expectedAction);
    });

    it('should have a type of SET_URLS', () => {
        const expectedAction = {
            type: 'SET_URLS',
            urls: [url1, url2]
        }

        const result = actions.setUrls([url1, url2]);

        expect(result).toEqual(expectedAction);
    });
});
