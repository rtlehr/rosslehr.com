import { Component, Input, SimpleChanges, EventEmitter, Output } from '@angular/core'; // Import Component decorator from Angular core
import { sideMenuItemComponent } from '../side-menu-item/side-menu-item.component'; // Import a custom component used in this component
import { HttpClient } from '@angular/common/http'; // Import HttpClient to handle HTTP requests
import { Location } from '@angular/common';

@Component({
  selector: 'app-side-menu', // The HTML tag to use this component
  standalone: true, // Marks this component as a standalone component
  imports: [sideMenuItemComponent], // Imports other standalone components or directives used in the template
  templateUrl: './side-menu.component.html', // Path to the HTML template for this component
  styleUrl: './side-menu.component.css', // Path to the CSS file for this component
})
export class sideMenuComponent {

  menuItems: any[] = []

  constructor(private http: HttpClient, private location: Location) {}
 
  @Input() sideMenuToLoad: String = '';

  ngOnChanges(changes: SimpleChanges): void {

    console.log("sideMenuToLoad: " + changes['sideMenuToLoad'].currentValue);
    
    if (changes['sideMenuToLoad']) {

      if(changes['sideMenuToLoad'].currentValue != "")
      {
        this.getSideMenu(changes['sideMenuToLoad'].currentValue);
      }

    }

  }

  ngOnInit(): void {

   // this.getSideMenu(this.sideMenuToLoad); 

   console.log("sideMenuToLoad: ");

  }

  urlpath : string= this.location.path();

  getSideMenu(sideMenuToLoad: String)
  {

    this.http.get<any[]>('' + sideMenuToLoad).subscribe(
      (response) => {
        // Success callback: Assign the fetched JSON data to the `menuItems` property
        this.menuItems = response;

        this.location.replaceState(this.urlpath + "/" + this.menuItems[0].url);

      },
      (error) => {
        // Error callback: Log an error message if the JSON file cannot be loaded
        console.error('Error fetching JSON file:', error);
      }
    );

  }

  get getMenuItems() {
    return this.menuItems;
  }

  @Output() sideMenuFileToLoad = new EventEmitter();

  sendToAppComponent(data: any)
  {
    
    this.location.replaceState(this.urlpath + "/" + data.url);

    this.sideMenuFileToLoad.emit( data );
  }

}
