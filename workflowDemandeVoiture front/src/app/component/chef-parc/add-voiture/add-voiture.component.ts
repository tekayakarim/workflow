import { Component, OnInit, EventEmitter } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ChefParkService } from "src/app/service/chef-park.service";
import { TokenStorageService } from "src/app/service/token-storage.service";
import { ToastrService } from "ngx-toastr";
@Component({
  selector: 'app-add-voiture',
  templateUrl: './add-voiture.component.html',
  styleUrls: ['./add-voiture.component.scss']
})
export class AddVoitureComponent implements OnInit {

  voitureForm: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    public toastr: ToastrService,
    private chefParkService: ChefParkService,
    private tokenStorage: TokenStorageService
  ) {
    this.voitureForm = this.formBuilder.group({
      matricule: ["", Validators.required],
      nbChevaux: [, Validators.required],
      couleur: ["", Validators.required],
      poidsAutorise: [, Validators.required],
      nbPassagers: [, Validators.required],
    });
   }

  ngOnInit(): void {
  }
 onSubmit() {

    this.chefParkService
     .addVoiture(this.tokenStorage.getUser().username,this.voitureForm.value)
     .subscribe((data) => {
       if (data) {

       } else {
       }
     }
  );



  this.toastr.success("voiture ajouter", "", { timeOut: 3000 });
  window.location.reload();

  }

}
