'use strict'

var AWS = require('aws-sdk');

var ec2 = new AWS.EC2();

var utils = require('./maws_modules/utils.js');

utils.getRegionList(ec2, function (regionList) {
  const regions = regionList
})

 console.log(regions)
