import { Component, OnInit } from "@angular/core";
import { DemandePapier } from "src/app/model/demande-papier";
import { DemandeDocumentService } from "src/app/service/demande-document.service";
import { ActivatedRoute , Router} from "@angular/router";
import { ChefDAAFService } from "src/app/service/chef-daaf.service";
import { TokenStorageService } from "src/app/service/token-storage.service";
import { AgentDAAF } from 'src/app/model/agent-daaf';
import { Observable } from "rxjs";
import { ToastrService } from "ngx-toastr";
import { AgentDAAFService } from "src/app/service/agent-daaf.service";
import { EmailService } from "src/app/service/email.service";
import { Email } from "src/app/model/email";
import { ChefHierarchiqueService } from "src/app/service/chef-hierarchique.service";
@Component({
  selector: "app-assigner-demande",
  templateUrl: "./assigner-demande.component.html",
  styleUrls: ["./assigner-demande.component.scss"],
})
export class AssignerDemandeComponent implements OnInit {
  id;
  exampleAgent = [
  /*  { id: 1, nom: "agent 1", demandeEnCours: 5 },
    { id: 2, nom: "agent 2", demandeEnCours: 3 },
    { id: 3, nom: "agent 3", demandeEnCours: 8 },
    { id: 4, nom: "agent 4", demandeEnCours: 6 },*/
  ];
  headElements = [
    "id",
    "type",
    "description",
    "statut",
    "nom utilisateur",
    "prenom utilisatuer",
    "cin utilisateur",
    "id utilisateur",
  ];
  elements = [];
  demandePapier: DemandePapier = new DemandePapier();

  constructor(
    private demandeDocumentService: DemandeDocumentService,
    private chefDAAFService: ChefDAAFService,
    private activatedroute: ActivatedRoute,
    private tokenStorage: TokenStorageService,
    public toastr: ToastrService,
    private router: Router,
    private agentService: AgentDAAFService,
    private email: EmailService,
     private chefHierarchiqueService: ChefHierarchiqueService
  ) {
    this.id = this.activatedroute.snapshot.paramMap.get("id");
    this.getDemande();
  }

  ngOnInit(): void {
    this.getAllAgentLibre();
  }

  getAllAgentLibre() {
    this.chefDAAFService
      .getAllAgentLibreByChef(this.tokenStorage.getUser().username)
      .subscribe(
        (data) => {
          if (data) {
              this.exampleAgent = data;
          }
          if (data.length == 0) {
            this.toastr.warning("aucun agent  disponible", "", {
              timeOut: 25000,
            });
          }
        },
        (ex) => {}
      );
  }
  getDemande() {
    this.demandeDocumentService.getDemande(this.id).subscribe(
      (data) => {
        if (data) {
          this.demandePapier = data;
          this.elements = [
            this.demandePapier.id,
            this.demandePapier.type,
            this.demandePapier.description,
            this.demandePapier.statut,
            this.demandePapier.emp.nom,
            this.demandePapier.emp.prenom,
            this.demandePapier.emp.cin,
            this.demandePapier.emp.id,
          ];
        }
      },
      (ex) => {
        console.warn(ex);
      }
    );
  }

  assignerDemande(idAgent) {
    this.chefDAAFService
      .confierDemande(this.id,idAgent)
      .subscribe(
        (data) => {
          if (data) {

          }
        },
        (ex) => {
          //  this.toastr.warning("erreur", "", { timeOut: 8000 });
        }
      );
      this.toastr.success("demande assigner", "", { timeOut: 8000 });
        this.router.navigateByUrl("demande-document-daaf");

          this.agentService.getAgent(idAgent)
          .subscribe(
          (data)=>{
            //sendEmail to agent
            this.email
              .sendEmail(
                new Email(
                  data.email,
                  "AgentDAAF: Demande a Traiter",
                  " <h3> bonjour "+data.nom+"  "+data.prenom
                  +", <br>je vous confie cette demande <br>detail demande:<br> "
                  +"description: <br>"
                  + this.demandePapier.description
                  +"<br> type: <br>"
                  + this.demandePapier.type+"</h3>"
                )
              )
              .subscribe((data) => console.warn(data));
          //sendEmail to employe
          setTimeout(() => {
            this.email
              .sendEmail(
                new Email(
                  this.demandePapier.emp.email,
                  "Employe: to trait",
                  "<h3> bonjour "+this.demandePapier.emp.nom+" "+this.demandePapier.emp.prenom
                  +", <br> votre demande va etre traiter "+"<br>  detail demande:<br> " +"description: <br>"
                  + this.demandePapier.description +"<br> type: <br>"+ this.demandePapier.type+"</h3>"
                )
              )
              .subscribe((data) => console.warn(data));
          }, 2000);

            //sendEmail to chef hie
            setTimeout(() => {
              this.chefHierarchiqueService.getChefHierarchiqueByCin(this.demandePapier.emp.chefHierarchiqueCin).subscribe(
              (data)=>{
              this.email
              .sendEmail(
                new Email(
                data.email,
                  "chefHierarchique: to trait",
                  "<h3> bonjour "+data.nom+"  "+data.prenom+", <br> la  demande de votre employe "
                  +this.demandePapier.emp.nom+
                  " "
                  +this.demandePapier.emp.prenom
                  +" va etre traiter "+"<br>  detail demande:<br> " +"description: <br>"
                  + this.demandePapier.description +"<br> type: <br>"+ this.demandePapier.type+"</h3>"
                )
              )
              .subscribe((data) => console.warn(data));}
              );  
            }, 4000);


          },(ex)=>{}
        );

  }
}
