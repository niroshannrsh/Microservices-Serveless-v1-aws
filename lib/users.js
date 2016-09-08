var AWS = require("aws-sdk");
var docClient = new AWS.DynamoDB.DocumentClient();

module.exports ={
	getUsers : function(event,context){
		docClient.scan({
            TableName: "interns",
            Limit: 50
        },
        function(err, data) {
            if (err) {
                console.log(err, err.stack);
                context.fail('ERROR: ' + err);
            } else {
                var response = {};
                response.records = [];
                for (var i in data.Items) {
                    console.log(data.Items[i]);
                    response.records.push(data.Items[i]);
                }
                console.log(response);
                context.succeed(response);
            }
        }
    );

	},

	getUser : function(){
		return {"nuwa":90};
	},
	postUsers : function(){
		return {"nuwa":90};

	},
	postUser : function(){
		return {"nuwa":90};

	}


};
