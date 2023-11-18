# sonar-visualization

## Demo

![ezgif com-gif-maker](https://github.com/Gaurang-1402/foxglove-studio-sonar-visualization-extension/assets/71042887/5d51e4ec-d778-48d9-b8ff-d42e535e20a0)


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

![Screenshot from 2023-11-18 11-38-35](https://github.com/Gaurang-1402/foxglove-studio-sonar-visualization-extension/assets/71042887/55301814-04db-4a75-b15d-70577846b869)


![Screenshot from 2023-11-17 20-55-46](https://github.com/Gaurang-1402/foxglove-studio-sonar-visualization-extension/assets/71042887/1634f89e-c863-4cf1-8ab2-24de7a875280)



### Dependencies

```
  "dependencies": {
    "lodash": "^4.17.21",
    "lodash.isequal": "^4.5.0",
    "react-gauge-chart": "^0.4.1"
  }

```
