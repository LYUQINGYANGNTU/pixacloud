// Copyright (c) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

'use strict';

// Connection string for the IoT Hub service
//
// NOTE:
// For simplicity, this sample sets the connection string in code.
// In a production environment, the recommended approach is to use
// an environment variable to make it available to your application
// or use an x509 certificate.
// https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-security
//
// Using the Azure CLI:
// az iot hub show-connection-string --hub-name {YourIoTHubName} --policy-name service --output table
var connectionString = 'HostName=robotnetwork.azure-devices.net;SharedAccessKeyName=service;SharedAccessKey=epdTWXHqZZhN8+l4I2mTTOoxjXQt+DAKfVlMILk+n8o=';

// Using the Node.js Service SDK for IoT Hub:
//   https://github.com/Azure/azure-iot-sdk-node
// The sample connects to service-side endpoint to call direct methods on devices.
var Client = require('azure-iothub').Client;

var Message = require('azure-iot-common').Message;

var deviceId = 'robot1';

// Connect to the service-side endpoint on your IoT hub.
var client = Client.fromConnectionString(connectionString);

var selecteddirection;

// Set the direct method name, payload, and timeout values

//function printResultFor(op) {
//    return function printResult(err, res) {
//        if (err) console.log(op + ' error: ' + err.toString());
//        if (res) console.log(op + ' status: ' + res.constructor.name);
//    };
//}

//function receiveFeedback(err, receiver) {
//    receiver.on('message', function (msg) {
//        console.log('Feedback message:')
//        console.log(msg.getData().toString('utf-8'));
//    });
//}

//client.open(function (err) {
//    if (err) {
//        console.error('Could not connect: ' + err.message);
//    } else {
//        console.log('Service client connected');
//        client.getFeedbackReceiver(receiveFeedback);
//        var message = new Message('Hello, this is message from web');
//        message.ack = 'full';
//        message.messageId = "My Message ID";
//        console.log(message.getData());
//        client.send(deviceId, message, printResultFor('send'));
//    }
//});
var methodParams = {
  methodName: 'Navigation',
    payload:
    {
        "Goal": 10
    }, // Number of seconds.
  responseTimeoutInSeconds: 30
};

var forward = {
  methodName: 'forward',
    payload:
    {
      "velocity":50,
      "anglevelocity":10
    }, // Number of seconds.
  responseTimeoutInSeconds: 30
};

var backward = {
  methodName: 'backward',
    payload:
    {

    }, // Number of seconds.
  responseTimeoutInSeconds: 30
};

var right = {
  methodName: 'right',
    payload:
    {

    }, // Number of seconds.
  responseTimeoutInSeconds: 30
};

var left = {
  methodName: 'left',
    payload:
    {

    }, // Number of seconds.
  responseTimeoutInSeconds: 30
};



document.getElementById('forward-button').addEventListener('click',function(){
  
  var direction = {
    methodName: 'direction',
      payload:
      {
        movedirection: "forward"
      }, // Number of seconds.
    responseTimeoutInSeconds: 30
  };

  // Call the direct method on your device using the defined parameters.
  client.invokeDeviceMethod(deviceId, direction, function (err, result) {
    if (err) {
        console.error('Failed to invoke method \'' + direction.methodName + '\': ' + err.message);
    } else {
        console.log('Response from ' + direction.methodName + ' on ' + deviceId + ':');
        console.log(JSON.stringify(result, null, 2));
    }
  });
})


document.getElementById('backward-button').addEventListener('click',function(){
  
  var direction = {
    methodName: 'direction',
      payload:
      {
        movedirection: "backward"
      }, // Number of seconds.
    responseTimeoutInSeconds: 30
  };
  // Call the direct method on your device using the defined parameters.
  client.invokeDeviceMethod(deviceId, direction, function (err, result) {
    if (err) {
        console.error('Failed to invoke method \'' + direction.methodName + '\': ' + err.message);
    } else {
        console.log('Response from ' + direction.methodName + ' on ' + deviceId + ':');
        console.log(JSON.stringify(result, null, 2));
    }
  });
})

document.getElementById('right-button').addEventListener('click',function(){
  var direction = {
    methodName: 'direction',
      payload:
      {
        movedirection: "clockwise"
      }, // Number of seconds.
    responseTimeoutInSeconds: 30
  };
  // Call the direct method on your device using the defined parameters.
  client.invokeDeviceMethod(deviceId, direction, function (err, result) {
    if (err) {
        console.error('Failed to invoke method \'' + direction.methodName + '\': ' + err.message);
    } else {
        console.log('Response from ' + direction.methodName + ' on ' + deviceId + ':');
        console.log(JSON.stringify(result, null, 2));
    }
  });
})
document.getElementById('left-button').addEventListener('click',function(){
  var direction = {
    methodName: 'direction',
      payload:
      {
        movedirection: "anticlockwise"
      }, // Number of seconds.
    responseTimeoutInSeconds: 30
  };
  // Call the direct method on your device using the defined parameters.
  client.invokeDeviceMethod(deviceId, direction, function (err, result) {
    if (err) {
        console.error('Failed to invoke method \'' + direction.methodName + '\': ' + err.message);
    } else {
        console.log('Response from ' + direction.methodName + ' on ' + deviceId + ':');
        console.log(JSON.stringify(result, null, 2));
    }
  });
})


var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}