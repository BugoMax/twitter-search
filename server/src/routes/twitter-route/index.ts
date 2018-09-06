
function twitterRoute(app: any):void {

    app.get('/search', function(req: any, res: any, next: any) {

        client.get('search/tweets', {q: '#nodejs'}, function(error: any, tweets: any, response: any): void {

            if (error) {
                res.send({ 'error': 'AN error has occurred' });
                logger.error(error);
            } else {
                res.send(tweets);
            }
        });
    });
}

export default twitterRoute;
