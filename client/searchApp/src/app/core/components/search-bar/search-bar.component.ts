import { Component } from '@angular/core';
import { Type } from '../../models/type';
import { SearchWidgetService } from '../../services/search-widget.service';



@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {
  searchTerm: string = '';
  types: Type[] = [];
  selectedNodes: Type[] = [];
  selectedNodesTemplate: Type[] = [];
  filteredNodes: Type[] = [];
 //  typeToIconMap: { [key: string]: string } = {
//     'Zone': 'pi pi-fw pi-flag',
//     'Sites': 'pi pi-fw pi-map-marker',
//     'Layers': 'pi pi-fw pi-map',
//     'camera1': 'pi pi-fw pi-camera',
//     'camera2': 'pi pi-fw pi-eye',
//   };

  constructor(private dataApiService: SearchWidgetService) { 
    console.log('call api getData');
    dataApiService.getData().subscribe((data: Type[]) => {
      //get fro http://localhost:3000/zones
      console.log('data retrieved successfully', data);
      this.types = data;
      this.filteredNodes = this.types

    });
  }

  ngOnInit() {
    //to-do lazyloading

    // this.types = [
    //   {
    //     label: 'Zone',
    //     icon: this.typeToIconMap['Zone'],
    //     children: [
    //       {
    //         label: 'Zone 1',
    //         icon: this.typeToIconMap['Zone'],
    //         children: [
    //           {
    //             label: 'Sensor 1',
    //             icon: this.typeToIconMap['camera1'],
    //             data:{
    //               type: 'camera1',
    //               connectionStatus: 'disconnected' 
    //             }              },
    //           {
    //             label: 'Sensor 2',
    //             icon: this.typeToIconMap['camera2'],
    //             data:{
    //               type: 'camera2',
    //               connectionStatus: 'stable' 
    //             }              }
    //         ]
    //       },
    //       {
    //         label: 'Zone 2',
    //         icon: this.typeToIconMap['Zone'],
    //         children: [
    //           {
    //             label: 'Sensor 3',
    //             icon: this.typeToIconMap['camera1'],
    //             data:{
    //               type: 'camera1',
    //               connectionStatus: 'unstable' 
    //             }
    //           }
    //         ]
    //       }
    //     ]
    //   },
    //   {
    //     label: 'Sites',
    //     icon: this.typeToIconMap['Sites'],
    //     children: [
    //       {
    //         label: 'Site 1',
    //         icon: this.typeToIconMap['Sites'],
    //         children: [
    //           {
    //             label: 'Device 1',
    //             icon: this.typeToIconMap['camera1'],
    //             data:{
    //               type: 'device',
    //             }
    //           },
    //           {
    //             label: 'Device 2',
    //             icon: this.typeToIconMap['camera1'],
    //             data:{
    //               type: 'device',
    //             }
    //           }
    //         ]
    //       }
    //     ]
    //   },
    //   {
    //     label: 'Layers',
    //     icon: this.typeToIconMap['Layers'],
    //     children: [
    //       {
    //         label: 'Layer 1',
    //         icon: this.typeToIconMap['Layers'],
    //         children: [
    //           {
    //             label: 'Device 1',
    //             icon: this.typeToIconMap['camera1'],
    //             data:{
    //               type: 'device',
    //             }
    //           },
    //           {
    //             label: 'Device 2',
    //             icon: this.typeToIconMap['camera1'],
    //             data:{
    //               type: 'device',
    //             }
    //           }
    //         ]
    //       }
    //     ]
    //   }

    // ];

    this.filteredNodes = this.types;

  }

  getConnectionClass(connection: string): string {
    switch (connection) {
      case 'stable':
        return 'connection-stable';
      case 'unstable':
        return 'connection-unstable';
      case 'disconnected':
        return 'connection-disconnected';
      default:
        return '';
    }
  }
}
