import * as actions from './index';

describe('actions', () => {
    it('should have a type of ADD_URL', () => {
        const id = 1;
        const title = 'Ask Jeeves Twitch';
        const long_url = 'https://www.ask.com/culture/twitch-intro?qo=articleNav'
        const short_url = 'http://localhost:3001/useshorturl1';

        const url = {
            id,
            title,
            long_url,
            short_url
        }

        const expectedAction = {
            type: 'ADD_URL',
            url
        }

        const result = actions.addUrl(url);

        expect(result).toEqual(expectedAction);
    });

    it('should have a type of SET_URLS', () => {
        const id1 = 1;
        const title1 = 'Ask Jeeves Twitch';
        const long_url1 = 'https://www.ask.com/culture/twitch-intro?qo=articleNav';
        const short_url1 = 'http://localhost:3001/useshorturl1';

        const url1 = {
            id1,
            title1,
            long_url1,
            short_url1
        }

        const id2 = 2;
        const title2 = 'Why Is Wales Like This';
        const long_url2 = 'https://en.wikivoyage.org/wiki/Llanfairpwllgwyngyll';
        const short_url2 = 'http://localhost:3001/useshorturl2';

        const url2 = {
            id2,
            title2,
            long_url2,
            short_url2
        }

        const expectedAction = {
            type: 'SET_URLS',
            urls: [url1, url2]
        }

        const result = actions.setUrls([url1, url2]);

        expect(result).toEqual(expectedAction);
    });
});
