

@Component({
  selector: 'app-menubar',
  template: `
     <a href="">Angular Books</a> |
     <a href="">Angular Blogs</a> 

  `,
  styles: [
  ]
})export class MenubarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
