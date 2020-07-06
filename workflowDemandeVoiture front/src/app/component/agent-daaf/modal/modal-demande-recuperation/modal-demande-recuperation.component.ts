import { Component, OnInit, Input } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { AgentDAAFService } from "src/app/service/agent-daaf.service";
import { TokenStorageService } from "src/app/service/token-storage.service";
import { DemandePapier } from "src/app/model/demande-papier";
import { EmailService } from "src/app/service/email.service";
import { Email } from "src/app/model/email";
import { AgentDAAF } from "src/app/model/agent-daaf";
import { ChefDAAFService } from "src/app/service/chef-daaf.service";
import { ChefHierarchiqueService } from "src/app/service/chef-hierarchique.service";
@Component({
  selector: "app-modal-demande-recuperation",
  templateUrl: "./modal-demande-recuperation.component.html",
  styleUrls: ["./modal-demande-recuperation.component.scss"],
})
export class ModalDemandeRecuperationComponent implements OnInit {
  @Input("id") id: number;
idTask="";
  constructor(
    private agentService: AgentDAAFService,
    private toastr: ToastrService,
    private email: EmailService,
    private tokenStorage: TokenStorageService,
    private chefDAAFService: ChefDAAFService,
    private chefHierarchiqueService: ChefHierarchiqueService
  ) {}

  demandePapier: DemandePapier = new DemandePapier();
  agentDAAF: AgentDAAF = new AgentDAAF();
   dateRecup:string;

  ngOnInit(): void {this.getTask(); this.getAgentByUserName(); this.getDemande();}
demandeDone(){
  //sendEmail to employe
  this.email
    .sendEmail(
      new Email(
        this.demandePapier.emp.email,
        "Employe: Demande  Traiter",
        " <h3> bonjour "+  this.demandePapier.emp.nom+"  "+ this.demandePapier.emp.prenom
        +", <br>votre demande a ete traiter <br>detail demande:<br> "
        +"description: <br>"
        + this.demandePapier.description
        +"<br> type: <br>"
        + this.demandePapier.type
        +" vous pouvez recuperer votre demande le  <b style='color:green'>"+this.dateRecup
        +"</b></h3>"
      )
    )
    .subscribe((data) => console.warn(data));
    //sendEmail to chefHierarchique
    setTimeout(() => {
      this.chefHierarchiqueService.getChefHierarchiqueByCin(this.demandePapier.emp.chefHierarchiqueCin).subscribe(
      (data)=>{
      this.email
      .sendEmail(
        new Email(
        data.email,
          "chefHierarchique: demande traiter",
          "<h3> bonjour "+data.nom+"  "+data.prenom+", <br> la  demande de votre employe "
          +this.demandePapier.emp.nom+
          " "
          +this.demandePapier.emp.prenom
          +" a ete traite "+"<br>  detail demande:<br> " +"description: <br>"
          + this.demandePapier.description +"<br> type: <br>"+ this.demandePapier.type
          +" il va recuperer sa  demande le  <b style='color:green'>"+this.dateRecup
          +"</b></h3>"
        )
      )
      .subscribe((data) => console.warn(data));});
    }, 2000);

    //sendEmail to chefDAAF
setTimeout(() => {
  this.chefDAAFService.getChefDAAFByCin(this.agentDAAF.chefDAAFCin)
  .subscribe(
    (data)=>{
    this.email
    .sendEmail(
      new Email(
      data.email,
        "ChefDAAF: demande traiter",
        "<h3> bonjour "+data.nom+"  "+data.prenom+", <br> la  demande de l'employe "
        +this.demandePapier.emp.nom+
        " "
        +this.demandePapier.emp.prenom
        +" a ete traite "+"<br>  detail demande:<br> " +"description: <br>"
        + this.demandePapier.description +"<br> type: <br>"+ this.demandePapier.type
        +"  il va recuperer sa  demande le  <b style='color:green'>"+this.dateRecup
        +"</b></h3>"
      )
    )
    .subscribe((data) => console.warn(data));}
  );
}, 4000);
  //finish the demande
  this.agentService
    .demandeDone(this.tokenStorage.getUser().username,this.idTask)
    .subscribe((e) => {
      console.log(e);
      if (e) {}
    });
    this.toastr
          .success("demande traiter avec success", "", {
            timeOut: 5000,
          })
          .onHidden.subscribe(() => {

        });
        setTimeout(() => {
            window.location.reload();
        }, 6000);

}
getTask(){
  this.agentService
    .taskToDo(this.tokenStorage.getUser().username)
    .subscribe((e) => {
      console.log(e);
      if (e) {
        this.idTask=e;
        console.warn(this.idTask);
      }
    });
}
getDemande(){
    this.agentService.getDemandeDaaf(this.tokenStorage.getUser().username)
    .subscribe((data) => {
      console.log(data);
      if (data) {
        this.demandePapier=data;
      }
    });
}

onBlurMethod(value:any){this.dateRecup=value;}

getAgentByUserName(){
  this.agentService.getAgentByUserName(this.tokenStorage.getUser().username)
  .subscribe((data) => {
    console.log(data);
    if (data) {
      this.agentDAAF=data;
      console.warn(this.agentDAAF.chefDAAFCin);
    }
  });
}
}
