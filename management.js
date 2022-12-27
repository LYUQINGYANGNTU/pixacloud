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
var visionswitch;
var visionmodel;


var script;

var chatbotswitch;


document.getElementById('kiteflying').addEventListener('click',function(){
    // Get the checkbox
    var checkBox = document.getElementById("kiteflying");
    // Get the output text
    var text = document.getElementById("text");
  
    // If the checkbox is checked, display the output text
    if (checkBox.checked == true){
    // Call the direct method on your device using the defined parameters.
    var vision = {
      methodName: 'vision',
        payload:
        {
            "model":'kiteflying',
            "visionswitch":'on'
        }, // Number of seconds.
      responseTimeoutInSeconds: 30
    };
    client.invokeDeviceMethod(deviceId, vision, function (err, result) {
        if (err) {
            console.error('Failed to invoke method \'' + vision.methodName + '\': ' + err.message);
        } else {
            console.log('Response from ' + vision.methodName + ' on ' + deviceId + ':');
            console.log(JSON.stringify(result, null, 2));
        }
        });
    } else {

      var vision = {
        methodName: 'vision',
          payload:
          {
              "model":'kiteflying',
              "visionswitch":'off'
          }, // Number of seconds.
        responseTimeoutInSeconds: 30
      };
      client.invokeDeviceMethod(deviceId, vision, function (err, result) {
        if (err) {
            console.error('Failed to invoke method \'' + vision.methodName + '\': ' + err.message);
        } else {
            console.log('Response from ' + vision.methodName + ' on ' + deviceId + ':');
            console.log(JSON.stringify(result, null, 2));
        }
        });
    }
  })

  document.getElementById('faultylamps').addEventListener('click',function(){
    // Get the checkbox
    var checkBox = document.getElementById("faultylamps");
    // Get the output text
    var text = document.getElementById("text");
  
    // If the checkbox is checked, display the output text
    if (checkBox.checked == true){
      // Call the direct method on your device using the defined parameters.
      var vision = {
        methodName: 'vision',
          payload:
          {
              "model":'faultylamps',
              "visionswitch":'on'
          }, // Number of seconds.
        responseTimeoutInSeconds: 30
      };
      client.invokeDeviceMethod(deviceId, vision, function (err, result) {
          if (err) {
              console.error('Failed to invoke method \'' + vision.methodName + '\': ' + err.message);
          } else {
              console.log('Response from ' + vision.methodName + ' on ' + deviceId + ':');
              console.log(JSON.stringify(result, null, 2));
          }
          });
      } else {
  
        var vision = {
          methodName: 'vision',
            payload:
            {
                "model":'faultylamps',
                "visionswitch":'off'
            }, // Number of seconds.
          responseTimeoutInSeconds: 30
        };
        client.invokeDeviceMethod(deviceId, vision, function (err, result) {
          if (err) {
              console.error('Failed to invoke method \'' + vision.methodName + '\': ' + err.message);
          } else {
              console.log('Response from ' + vision.methodName + ' on ' + deviceId + ':');
              console.log(JSON.stringify(result, null, 2));
          }
          });
      }
  })

  document.getElementById('fishing').addEventListener('click',function(){
    // Get the checkbox
    var checkBox = document.getElementById("fishing");
    // Get the output text
    var text = document.getElementById("text");
  
    if (checkBox.checked == true){
      // Call the direct method on your device using the defined parameters.
      var vision = {
        methodName: 'vision',
          payload:
          {
              "model":'fishing',
              "visionswitch":'on'
          }, // Number of seconds.
        responseTimeoutInSeconds: 30
      };
      client.invokeDeviceMethod(deviceId, vision, function (err, result) {
          if (err) {
              console.error('Failed to invoke method \'' + vision.methodName + '\': ' + err.message);
          } else {
              console.log('Response from ' + vision.methodName + ' on ' + deviceId + ':');
              console.log(JSON.stringify(result, null, 2));
          }
          });
      } else {
  
        var vision = {
          methodName: 'vision',
            payload:
            {
                "model":'fishing',
                "visionswitch":'off'
            }, // Number of seconds.
          responseTimeoutInSeconds: 30
        };
        client.invokeDeviceMethod(deviceId, vision, function (err, result) {
          if (err) {
              console.error('Failed to invoke method \'' + vision.methodName + '\': ' + err.message);
          } else {
              console.log('Response from ' + vision.methodName + ' on ' + deviceId + ':');
              console.log(JSON.stringify(result, null, 2));
          }
          });
      }
  })


  document.getElementById('chatbotenable').addEventListener('click',function(){
    // Get the checkbox
    var checkBox = document.getElementById("chatbotenable");
    // Get the output text
    var text = document.getElementById("text");
  
    if (checkBox.checked == true){
      // Call the direct method on your device using the defined parameters.
      var chatbot = {
        methodName: 'chatbot',
          payload:
          {
              "chatbotswitch" : 'on'
          }, // Number of seconds.
        responseTimeoutInSeconds: 30
      };
      
      client.invokeDeviceMethod(deviceId, chatbot, function (err, result) {
          if (err) {
              console.error('Failed to invoke method \'' + chatbot.methodName + '\': ' + err.message);
          } else {
              console.log('Response from ' + chatbot.methodName + ' on ' + deviceId + ':');
              console.log(JSON.stringify(result, null, 2));
          }
          });
      } else {
  
        var chatbot = {
          methodName: 'chatbot',
            payload:
            {
                "chatbotswitch" : 'off'
            }, // Number of seconds.
          responseTimeoutInSeconds: 30
        };
        client.invokeDeviceMethod(deviceId, chatbot, function (err, result) {
          if (err) {
              console.error('Failed to invoke method \'' + chatbot.methodName + '\': ' + err.message);
          } else {
              console.log('Response from ' + chatbot.methodName + ' on ' + deviceId + ':');
              console.log(JSON.stringify(result, null, 2));
          }
          });
      }
  })

  document.getElementById('announcementenable').addEventListener('click',function(){
    // Get the checkbox
    var checkBox = document.getElementById("announcementenable");
    // Get the output text
    var text = document.getElementById("text");
  
    if (checkBox.checked == true){
      // Call the direct method on your device using the defined parameters.
      var announcementmode = {
        methodName: 'announcementmode',
          payload:
          {
              "annmodeswitch":'on'
          }, // Number of seconds.
        responseTimeoutInSeconds: 30
      };
      client.invokeDeviceMethod(deviceId, announcementmode, function (err, result) {
          if (err) {
              console.error('Failed to invoke method \'' + announcementmode.methodName + '\': ' + err.message);
          } else {
              console.log('Response from ' + announcementmode.methodName + ' on ' + deviceId + ':');
              console.log(JSON.stringify(result, null, 2));
          }
          });
      } else {
  
        var announcementmode = {
          methodName: 'announcementmode',
            payload:
            {
                "annmodeswitch":'off'
            }, // Number of seconds.
          responseTimeoutInSeconds: 30
        };
        client.invokeDeviceMethod(deviceId, announcementmode, function (err, result) {
          if (err) {
              console.error('Failed to invoke method \'' + announcementmode.methodName + '\': ' + err.message);
          } else {
              console.log('Response from ' + announcementmode.methodName + ' on ' + deviceId + ':');
              console.log(JSON.stringify(result, null, 2));
          }
          });
      }
  })

  document.getElementById('tourmode').addEventListener('click',function(){
    // Get the checkbox
    var checkBox = document.getElementById("tourmode");
    // Get the output text
    var text = document.getElementById("text");
  
    if (checkBox.checked == true){
      // Call the direct method on your device using the defined parameters.
      var tourmode = {
        methodName: 'tourmode',
          payload:
          {
              "tourswitch":'on'
          }, // Number of seconds.
        responseTimeoutInSeconds: 30
      };
      client.invokeDeviceMethod(deviceId, tourmode, function (err, result) {
          if (err) {
              console.error('Failed to invoke method \'' + tourmode.methodName + '\': ' + err.message);
          } else {
              console.log('Response from ' + tourmode.methodName + ' on ' + deviceId + ':');
              console.log(JSON.stringify(result, null, 2));
          }
          });
      } else {
  
        var tourmode = {
          methodName: 'tourmode',
            payload:
            {
                "tourswitch":'off'
            }, // Number of seconds.
          responseTimeoutInSeconds: 30
        };
        client.invokeDeviceMethod(deviceId, tourmode, function (err, result) {
          if (err) {
              console.error('Failed to invoke method \'' + tourmode.methodName + '\': ' + err.message);
          } else {
              console.log('Response from ' + tourmode.methodName + ' on ' + deviceId + ':');
              console.log(JSON.stringify(result, null, 2));
          }
          });
      }
  })

  document.getElementById('scriptbtn').addEventListener('click',function(){
  
    var inputVal = document.getElementById("scriptinput").value;
            
    var announcement = {
      methodName: 'announcement',
        payload:
        {
          "robotscript": inputVal
        }, // Number of seconds.
      responseTimeoutInSeconds: 30
    };

     client.invokeDeviceMethod(deviceId, announcement, function (err, result) {
      if (err) {
          console.error('Failed to invoke method \'' + announcement.methodName + '\': ' + err.message);
      } else {
          console.log('Response from ' + announcement.methodName + ' on ' + deviceId + ':');
          console.log(JSON.stringify(result, null, 2));
      }
      });
  })


  document.getElementById('resumeautopilotbtn').addEventListener('click',function(){
            
    var resumeautopilot = {
      methodName: 'resumeautopilot',
        payload:
        {
          "resume": 'resume'
        }, // Number of seconds.
      responseTimeoutInSeconds: 30
    };

     client.invokeDeviceMethod(deviceId, resumeautopilot, function (err, result) {
      if (err) {
          console.error('Failed to invoke method \'' + resumeautopilot.methodName + '\': ' + err.message);
      } else {
          console.log('Response from ' + resumeautopilot.methodName + ' on ' + deviceId + ':');
          console.log(JSON.stringify(result, null, 2));
      }
      });
  })

  document.getElementById('pathconfirm').addEventListener('click',function(){
  
    var x = document.getElementById("mySelect2").value;
    
    var pathroutine = {
      methodName: 'pathroutine',
        payload:
        {
            "pathname": x
        }, // Number of seconds.
      responseTimeoutInSeconds: 30
    };

     client.invokeDeviceMethod(deviceId, pathroutine, function (err, result) {
      if (err) {
          console.error('Failed to invoke method \'' + pathroutine.methodName + '\': ' + err.message);
      } else {
          console.log('Response from ' + pathroutine.methodName + ' on ' + deviceId + ':');
          console.log(JSON.stringify(result, null, 2));
      }
      });
  })

  document.getElementById('naviconfirm').addEventListener('click',function(){
  
    var x = document.getElementById("mySelect").value;
    
    var navigation = {
      methodName: 'navigation',
        payload:
        {
            "goal": x
        }, // Number of seconds.
      responseTimeoutInSeconds: 30
    };

     client.invokeDeviceMethod(deviceId, navigation, function (err, result) {
      if (err) {
          console.error('Failed to invoke method \'' + navigation.methodName + '\': ' + err.message);
      } else {
          console.log('Response from ' + forward.methodName + ' on ' + deviceId + ':');
          console.log(JSON.stringify(result, null, 2));
      }
      });
  })

  document.getElementById('mySelect3').addEventListener('click',function(){
  
    var x = document.getElementById("mySelect3").value;
    
    var navigation = {
      methodName: 'navigation',
        payload:
        {
            "goal": x
        }, // Number of seconds.
      responseTimeoutInSeconds: 30
    };

     client.invokeDeviceMethod(deviceId, navigation, function (err, result) {
      if (err) {
          console.error('Failed to invoke method \'' + navigation.methodName + '\': ' + err.message);
      } else {
          console.log('Response from ' + forward.methodName + ' on ' + deviceId + ':');
          console.log(JSON.stringify(result, null, 2));
      }
      });
  })




 
  