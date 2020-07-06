import { Component, OnInit, Input } from "@angular/core";
import { UserService } from "src/app/service/user.service";
import { ToastrService } from "ngx-toastr";
@Component({
  selector: "app-delete-user-confirmation",
  templateUrl: "./delete-user-confirmation.component.html",
  styleUrls: ["./delete-user-confirmation.component.scss"],
})
export class DeleteUserConfirmationComponent implements OnInit {
  constructor(
    private userService: UserService,
  public toastr: ToastrService
    ) {}
  @Input("id") id;
  ngOnInit(): void {}
  deleteUser(id) {
    this.userService.deleteUser(this.id).subscribe(
    (data)=>{},(ex)=>{});

this.toastr.success("User deleted", "", { timeOut: 3000 });
  window.location.reload();
  }
}
