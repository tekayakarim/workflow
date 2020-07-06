import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import {
  MdbTableDirective,
  MdbTablePaginationComponent,
} from "angular-bootstrap-md";
import { User } from "src/app/model/user";
import { UserService } from "src/app/service/user.service";
@Component({
  selector: "app-all-users",
  templateUrl: "./all-users.component.html",
  styleUrls: ["./all-users.component.scss"],
})
export class AllUsersComponent implements OnInit {
  @ViewChild(MdbTableDirective, { static: true }) mdbTable: MdbTableDirective;
  @ViewChild(MdbTablePaginationComponent, { static: true })
  mdbTablePagination: MdbTablePaginationComponent;
  @ViewChild("row", { static: true }) row: ElementRef;

  headElements = [
    "id",
    "nom",
    "prenom",
    "role",
    "cin",
    "action",
  ];
  elements: any =[];

  constructor(private userService: UserService) {
/*    let emp = new Employe();
    for (let i = 0; i < 10; i++) {
      emp.id = i;
      emp.nom = "nom " + i;
      emp.username = "username " + i;
      emp.prenom = "prenom " + i;
      emp.cin = "cin " + i;
      emp.password = "pass " + i;
      emp.roles = ["role"];
      this.elements.push(emp);*/
    }


  ngOnInit(): void {this.getUsers();}

  getUsers(){
    this.userService
      .getAllUsers()
      .subscribe(
        (data) => {
          if (data) {
            console.warn(data);
            this.elements = data;
          }
        },
        (ex) => {}
      );
  }
}
