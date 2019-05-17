import trainedNet from './neuralNet/trained-net'

exports.handler = function(event, context, callback) {
    const board = JSON.parse(event.body)
    const result = trainedNet(board)
    
    return callback(null, {
        statusCode: 200,
        body: JSON.stringify(result)
    })
}