import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { TokenStorageService } from "src/app/service/token-storage.service";
import { ToastrService } from "ngx-toastr";
import { EmailService } from "src/app/service/email.service";
import { DemandeVoiture } from "src/app/model/demande-voiture";
import { DemandeVoitureService } from "src/app/service/demande-voiture.service";
import { Voiture } from "src/app/model/voiture";
import { ChefParkService } from "src/app/service/chef-park.service";
import { ChefHierarchiqueService } from "src/app/service/chef-hierarchique.service";
import { Email } from "src/app/model/email";
import {
  trigger,
  transition,
  style,
  animate,
  AUTO_STYLE,
} from "@angular/animations";
import { FormGroup, Validators, FormBuilder } from "@angular/forms";

@Component({
  selector: "app-assigner-voiture",
  templateUrl: "./assigner-voiture.component.html",
  styleUrls: ["./assigner-voiture.component.scss"],
  animations: [
    trigger("inOutAnimation", [
      transition(":enter", [
        style({ height: 0, opacity: 0 }),
        animate("0.5s ease-out", style({ height: AUTO_STYLE, opacity: 1 })),
      ]),
      transition(":leave", [
        animate("0.5s ease-in", style({ height: 0, opacity: 0 })),
      ]),
    ]),
  ],
})
export class AssignerVoitureComponent implements OnInit {
  headElements = [
    "nom utilisateur",
    "prenom utisatuer",
    "type de mission",
    "description",
    "nombre de passergers",
    "poids",
    "date de debut",
    "date de fin",
  ];
  id;
  isDetails = false;
  elements = [];
  elements2 = [];
  voituresDispo = [];
  dateRecup: string;
  documentForm: FormGroup;

  i = 0;
  demandeVoiture: DemandeVoiture = new DemandeVoiture();
  formBuilder: FormBuilder = new FormBuilder();
  constructor(
    private activatedroute: ActivatedRoute,
    private tokenStorage: TokenStorageService,
    public toastr: ToastrService,
    private router: Router,
    private email: EmailService,
    private demandeVoitureService: DemandeVoitureService,
    private chefHierarchiqueService: ChefHierarchiqueService,
    private chefParkService: ChefParkService
  ) {
    this.id = this.activatedroute.snapshot.paramMap.get("id");
    this.getDemande();
    this.documentForm = this.formBuilder.group({
      date: ["", Validators.required],
    });
  }

  ngOnInit(): void {
    this.getAllVoitureDispo();
  }

  get f() {
    return this.documentForm.controls;
  }

  onBlurMethod(value: any) {
    this.dateRecup = value;
    //  console.log(this.dateRecup);
  }

  assignerDemande(voiture: Voiture) {
    if (this.f.date.errors) {
      this.toastr.error("Ajouter date de récupération");
    } else {
      this.chefParkService.assignVoiture(voiture.id, this.id).subscribe(
        (data) => {
          console.log(data);
        },
        (ex) => {}
      );
      this.toastr.success("voiture assigner", "", { timeOut: 3000 });

      this.router.navigateByUrl("demande-voiture-chef-parc");
      //sendEmail to employe
      this.email
        .sendEmail(
          new Email(
            this.demandeVoiture.emp.email,
            "Employe: Voiture Reserver",
            "<h3>" +
              "bonjour " +
              this.demandeVoiture.emp.nom +
              "  " +
              this.demandeVoiture.emp.prenom +
              "," +
              "<br> une voiture a ete reserver afin que vous puissiez traiter votre service " +
              "<br> detail voiture:<br> " +
              "Matricule: <br>" +
              voiture.matricule +
              "<br> Nombre de Chevaux: <br>" +
              voiture.nbChevaux +
              "<br> Couleur: <br>" +
              voiture.couleur +
              "<br> Nombre de Passagers: <br>" +
              voiture.nbPassagers +
              "<br> vous pouvez recuperer la voiture le  <b style='color:green'>" +
              this.dateRecup +
              "</b>" +
              "</h3>"
          )
        )
        .subscribe((data) => console.warn(data));
      //sendEmail to chefHierarchique
      setTimeout(() => {
        this.chefHierarchiqueService
          .getChefHierarchiqueByCin(this.demandeVoiture.emp.chefHierarchiqueCin)
          .subscribe((data) => {
            this.email
              .sendEmail(
                new Email(
                  data.email,
                  "chefHierarchique: Voiture Reserver",
                  "<h3>" +
                    "bonjour " +
                    data.nom +
                    "  " +
                    data.prenom +
                    "," +
                    " <br> on a reservé une voiture selon la  demande de votre employe " +
                    this.demandeVoiture.emp.nom +
                    " " +
                    this.demandeVoiture.emp.prenom +
                    "<br> la voiture qu'on lui confier est la suivante" +
                    " detail voiture:<br> " +
                    "Matricule: <br>" +
                    voiture.matricule +
                    "<br> Nombre de Chevaux: <br>" +
                    voiture.nbChevaux +
                    "<br> Couleur: <br>" +
                    voiture.couleur +
                    "<br> Nombre de Passagers: <br>" +
                    voiture.nbPassagers +
                    " <br> il va  recuperer la voiture le  <b style='color:green'>" +
                    this.dateRecup +
                    "</b>" +
                    "</h3>"
                )
              )
              .subscribe((data) => console.warn(data));
          });
      }, 2000);

      setTimeout(() => {
        window.location.reload();
      }, 4000);
    }
  }

  getDemande() {
    this.demandeVoitureService.getDemande(this.id).subscribe(
      (data) => {
        if (data) {
          this.demandeVoiture = data;
          this.elements = [
            this.demandeVoiture.emp.nom,
            this.demandeVoiture.emp.prenom,
            this.demandeVoiture.typeMission,
            this.demandeVoiture.description,
            this.demandeVoiture.nbPassergers,

            this.demandeVoiture.poids,
            this.demandeVoiture.dataDebut,
            this.demandeVoiture.dataFin,
          ];
        }
      },
      (ex) => {
        console.warn(ex);
      }
    );
  }

  getAllVoitureDispo() {
    this.chefParkService
      .getVoitureDispoByCurrentChefPark(this.tokenStorage.getUser().username)
      .subscribe(
        (data) => {
          if (data) {
            this.voituresDispo = data;
          }
          if (data.length == 0) {
            this.toastr.warning("aucune voiture disponible", "", {
              timeOut: 25000,
            });
          }
        },
        (ex) => {}
      );
  }

  enter(value: any, value2: any) {
    if (this.i == 0) {
      this.i++;
      this.isDetails = value;
      this.elements2 = value2;
    }
  }
  leave(value: any, value2: any) {
    this.i = 0;
    this.isDetails = value;
    this.elements2 = value2;
  }
}
