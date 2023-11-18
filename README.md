# sonar-visualization

## Demo
![ezgif com-gif-maker](https://github.com/Gaurang-1402/foxglove-studio-sonar-visualization-extension/assets/71042887/122deb30-4553-43d4-a7af-e5ea4208a125)

## _A Foxglove Studio Extension_

The Sonar Visualization panel is a Foxglove Studio extension designed for real-time monitoring of ultrasonic sensor data. It provides a clear gauge display of the current sonar range against the backdrop of minimum and maximum thresholds. It uses ROS2 message format ```sensor_msgs/msg/Range```

Here is the ROS2 message format

```

  "header": {
    "stamp": {
      "sec": 9698,
      "nsec": 24000000
    },
    "frame_id": "sonar_link"
  },
  "radiation_type": 0,
  "field_of_view": 0.23999999463558197,
  "min_range": 0.019999999552965164,
  "max_range": 10,
  "range": 0.03500651568174362
}
```

### Extension panel

![Screenshot from 2023-11-17 20-55-11](https://github.com/Gaurang-1402/foxglove-studio-sonar-visualization-extension/assets/71042887/96555e4f-19d8-43f4-8987-e1c50a2f645f)


![Screenshot from 2023-11-17 20-55-46](https://github.com/Gaurang-1402/foxglove-studio-sonar-visualization-extension/assets/71042887/13e58e9d-9615-47f6-b033-4e9ca4073def)



### Dependencies

```
  "dependencies": {
    "lodash": "^4.17.21",
    "lodash.isequal": "^4.5.0",
    "react-gauge-chart": "^0.4.1"
  }

```
