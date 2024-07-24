0. Installation:
   
         1. git clone this repo
   
         2. Client:
                  cd .\CS-search-App\client\searchApp
                  npm install
                  ng build
                  ng serve


        3.  Server:
               cd .\CS-search-App\server
               npm install
               node index.js 


1.	Which plugins or extensions did you use, explain why in a line or two, no need to be specific
      1.	 PrimeNG: UI component library 
      2.	 PrimeIcons: Icon library for PrimeNG.




2.	How to implement multilingual support for types and names, and what is the best way to do it? (translations) – since we are getting this data from the server, provide a way to implement translations assuming you have control over the server and the client. No need for code just write how you would implement it
   
        	For this case I would use a Client side approach, I would create and  store in  ./assets/i18n folder, json files for each language (or get them from server on startup).
        	An when a user selects a language, this file is loaded in a TranslationService which replaces every TEXT variable to the mapped value in the right json file.
        	If the scal of the app and the scall of translatable text is huge, then I would store the files in  DB or Files in the Server, create API endpoints that accept a language parameter and return data in the   requested language.
        	
3.	Assuming the server is not in your hands, and you are receiving data from it, but the data is in a different format, for example its in pascal case, but you use a different case, how would you handle it, no need to write code, just explain it in pseudo code if needed.

            I would implement function transformDataToAnotherCase(data, format) 
            it analyses the string and do String manipulation to transform it from original input format to other format (input).
  	         Pseudo code:
  	
           getDataFromApi.subscribe(data => {
            this.transformedData=this.transformDataToAnotherCase(data, format);
            });
           …
           mainApp(this.transformedData);


5.	Using a tool, create a flowchart demonstrating the widget's operation – describe the use cases, from the point a user enters the page.
   
            Link to LucidChart flowchart: https://lucid.app/lucidchart/4b0117d5-fe4c-40ca-b90f-d51cad91b38b/edit?viewport_loc=-1441%2C-120%2C936%2C1029%2C0_0&invitationId=inv_5301e3ed-90a4-48e4-8587-7802b19a9e0e
            Link to PDF flowchart : https://1drv.ms/b/s!AvaBMf88ta73gQkGVHlz2xqVFi-3?e=3Cuuss


6.	Design a mockup for the data that needs to be received from the server – sometimes when we work in a team, we need to use mock data in order to continue, explain how you would mock the in order to make this widget fully functional even if the server is not ready, no need to write that in the angular application, just state how you would do that and what tools if any you would use for that.

           - First I design the structure based on the requirements, in this case the data structure will include three levels: Type, Subtype, and Object:
           - Create a mock, for example:

          Const mockData = [
                {
                  label: 'Zone',
                  icon: this.typeToIconMap['Zone'],
                  children: [
                    {
                      label: 'Zone 1',
                      icon: this.typeToIconMap['Zone'],
                      children: [
                        {
                          label: 'Sensor 1',
                          icon: this.typeToIconMap['camera1'],
                          data:{
                            type: 'camera1',
                            connectionStatus: 'disconnected' 
                          }              },
                        {
                          label: 'Sensor 2',
                          icon: this.typeToIconMap['camera2'],
                          data:{
                            type: 'camera2',
                            connectionStatus: 'stable' 
                          }              }
                      ]
                    },
                    {
                      label: 'Zone 2',
                      icon: this.typeToIconMap['Zone'],
                      children: [
                        {
                          label: 'Sensor 3',
                          icon: this.typeToIconMap['camera1'],
                          data:{
                            type: 'camera1',
                            connectionStatus: 'unstable' 
                          }
                        }
                      ]
                    }
                  ]
                },
                {
                  label: 'Sites',
                  icon: this.typeToIconMap['Sites'],
                  children: [
                    {
                      label: 'Site 1',
                      icon: this.typeToIconMap['Sites'],
                      children: [
                        {
                          label: 'Device 1',
                          icon: this.typeToIconMap['camera1'],
                          data:{
                            type: 'device',
                          }
                        },
                        {
                          label: 'Device 2',
                          icon: this.typeToIconMap['camera1'],
                          data:{
                            type: 'device',
                          }
                        }
                      ]
                    }
                  ]
                },
                {
                  label: 'Layers',
                  icon: this.typeToIconMap['Layers'],
                  children: [
                    {
                      label: 'Layer 1',
                      icon: this.typeToIconMap['Layers'],
                      children: [
                        {
                          label: 'Device 1',
                          icon: this.typeToIconMap['camera1'],
                          data:{
                            type: 'device',
                          }
                        },
                        {
                          label: 'Device 2',
                          icon: this.typeToIconMap['camera1'],
                          data:{
                            type: 'device',
                          }
                        }
                      ]
                    }
                  ]
                }];
       

        We can implement a simple mock Api that looks like the real one but serves thus mock data.
         Or we can use tools or libraries in the backend such as MockServiceWorker for nodejs.
