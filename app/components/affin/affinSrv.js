app.factory("affinService", [function () {

    function getScore(token) {
        return analyseSentiment(token);
    }

    return {
        getScore: getScore
    }
}]);