'use strict'

var AWS = require('aws-sdk');

module.exports = {
	getRegionList: function(ec2, callback) {
		var params = {
		  DryRun: false,
		};
    var regionList = []
		ec2.describeRegions(params, function(err, data) {
		  if (err) console.log(err, err.stack);
		  else
        for (let i of data["Regions"]) {
          regionList.push(i["RegionName"])
        }
        callback(regionList)
    });
	}
}
