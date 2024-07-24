const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;
const { ObjectId } = require('mongodb');
const cors = require('cors');

app.use(cors());


//connect mongo db 
mongoose.connect('mongodb+srv://admin:Ab123456@cluster0.nmxejos.mongodb.net/', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

//map type to icon
const typeToIconMap = {
    'Zone': 'pi pi-fw pi-flag',
    'Sites': 'pi pi-fw pi-map-marker',
    'Layers': 'pi pi-fw pi-map',
    'camera1': 'pi pi-fw pi-camera',
    'camera2': 'pi pi-fw pi-eye',
  };

const objectSchema = new mongoose.Schema({
    type: String,
    connectionStatus: String
    });

const zoneSchema = new mongoose.Schema({
    label: String,
    icon: String,
    children: [
        {
            label: String,
            icon: String,
            children: [
                {
                    label: String,
                    icon: String,
                    data: objectSchema
                }
            ]
        }
    ]
});


const Zone = mongoose.model('Zone', zoneSchema);
// const zone = new Zone({
//     _id: new ObjectId(),
//       label: 'Zone',
//       icon: typeToIconMap['Zone'],
//       children: [
//         {
//           label: 'Zone 1',
//           icon: typeToIconMap['Zone'],
//           children: [
//             {
//               label: 'Sensor 1',
//               icon: typeToIconMap['camera1'],
//               data:{
//                 _id: new ObjectId(),
//                 type: 'camera1',
//                 connectionStatus: 'disconnected' 
//               }
//             },
//             {
//               label: 'Sensor 2',
//               icon: typeToIconMap['camera2'],
//               data:{
//                 _id: new ObjectId(),
//                 type: 'camera2',
//                 connectionStatus: 'stable' 
//               } 
//              },
//              {
//                 label: 'Sensor 4',
//                 icon: typeToIconMap['camera2'],
//                 data:{
//                   _id: new ObjectId(),
//                   type: 'camera2',
//                   connectionStatus: 'unstable' 
//                 } 
//                },
//                {
//                 label: 'Sensor 5',
//                 icon: typeToIconMap['camera1'],
//                 data:{
//                   _id: new ObjectId(),
//                   type: 'camera1',
//                   connectionStatus: 'stable' 
//                 } 
//                }
//           ]
//         },
//         {
//           label: 'Zone 2',
//           icon: typeToIconMap['Zone'],
//           children: [
//             {
//               label: 'Sensor 3',
//               icon: typeToIconMap['camera1'],
//               data:{
//                 _id: new ObjectId(),
//                 type: 'camera1',
//                 connectionStatus: 'unstable' 
//               }
//             }
//           ]
//         }
//       ]
//     });

//     const site = new Zone({
//         _id: new ObjectId(),
//       label: 'Sites',
//       icon: typeToIconMap['Sites'],
//       children: [
//         {
//           label: 'Site 1',
//           icon: typeToIconMap['Sites'],
//           children: [
//             {
//               label: 'Device 1',
//               icon: typeToIconMap['camera1'],
//               data:{
//                 _id: new ObjectId(),
//                 type: 'device',
//               }
//             },
//             {
//               label: 'Device 2',
//               icon: typeToIconMap['camera1'],
//               data:{
//                 _id: new ObjectId(),
//                 type: 'device',
//               }
//             }
//           ]
//         }
//       ]
//     });

//     const layer = new Zone(
//     {
//         _id: new ObjectId(),
//       label: 'Layers',
//       icon: typeToIconMap['Layers'],
//       children: [
//         {
//           label: 'Layer 1',
//           icon: typeToIconMap['Layers'],
//           children: [
//             {
//               label: 'Device 1',
//               icon: typeToIconMap['camera1'],
//               data:{
//                 _id: new ObjectId(),
//                 type: 'device',
//               }
//             },
//             {
//               label: 'Device 2',
//               icon: typeToIconMap['camera1'],
//               data:{
//                 _id: new ObjectId(),
//                 type: 'device',
//               }
//             }
//           ]
//         }
//       ]
//     }
//     );
    
// zone.save(); 
// site.save();
// layer.save();

app.get('/zones', async (req, res) => {
    const zones = await Zone.find();
    res.json(zones);
});


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
    
});