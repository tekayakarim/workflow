import { Component, OnInit, Input } from "@angular/core";
import { DemandeVoitureService } from "src/app/service/demande-voiture.service";
import { EmailService } from "src/app/service/email.service";
import { Email } from "src/app/model/email";
import { ToastrService } from "ngx-toastr";
@Component({
  selector: 'app-rendre-voiture-confirmation-modal',
  templateUrl: './rendre-voiture-confirmation-modal.component.html',
  styleUrls: ['./rendre-voiture-confirmation-modal.component.scss']
})
export class RendreVoitureConfirmationModalComponent implements OnInit {
  @Input("id") id: number;
  constructor(
    private toastr: ToastrService,
    private demandeVoitureService: DemandeVoitureService,
    private email: EmailService,
  ) { }

  ngOnInit(): void {
  }
rendreVoiture(id){
this.demandeVoitureService.rendreVoiture(id).subscribe((data) => {},(ex)=>{});
this.toastr
  .success("voiture rendu")
  .onHidden.subscribe(() => {
    window.location.reload();
  });
}
}
